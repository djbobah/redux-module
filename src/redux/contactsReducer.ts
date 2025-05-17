import { ContactDto } from "src/types/dto/ContactDto";

import { GroupContactsDto } from "src/types/dto/GroupContactsDto";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "inspector";

interface ContactsState {
  all: ContactDto[];
  filtered: ContactDto[];
  favorites: string[];
  loading: boolean;
  error: string;
  currentGroupId: GroupContactsDto | undefined;
}
const initialState: ContactsState = {
  all: [],
  filtered: [],
  favorites: [],
  loading: false,
  error: "",
  currentGroupId: undefined,
};

export const contactApiSlice = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  endpoints(builder) {
    return {
      getContacts: builder.query<ContactDto[], void>({
        query: () => ({ url: "/contacts" }),
      }),
    };
  },
});

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState,
  reducers: {
    getContactNameAction(state, action: PayloadAction<string>) {
      const searchName = action.payload.toLowerCase();
      state.filtered = state.all.filter((contact) =>
        contact.name.toLowerCase().includes(searchName)
      );
    },
    setCurrentGroupIdAction(state, action: PayloadAction<GroupContactsDto>) {
      state.currentGroupId = action.payload;
    },
    unsetCurrentGroupIdAction(state) {
      state.filtered = state.all;
      state.currentGroupId = undefined;
    },
    filterByCurrentGroupIdAction(state) {
      state.filtered = state.filtered.filter(({ id }) => {
        return state.currentGroupId?.contactIds.includes(id);
      });
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      contactApiSlice.endpoints.getContacts.matchFulfilled,
      (state, action) => {
        state.all = action.payload;
        state.filtered = action.payload;
        state.favorites = [
          action.payload[0].id,
          action.payload[1].id,
          action.payload[2].id,
          action.payload[3].id,
        ];
      }
    );
  },
});

export const { useGetContactsQuery } = contactApiSlice;

export const {
  getContactNameAction,
  setCurrentGroupIdAction,
  unsetCurrentGroupIdAction,
  filterByCurrentGroupIdAction,
} = contactsSlice.actions;
