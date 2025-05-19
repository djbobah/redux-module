import { contactApiSlice, contactsSlice } from "./contactsReducer";
import { groupApiSlice } from "./groupContactsReducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    [contactApiSlice.reducerPath]: contactApiSlice.reducer,
    [groupApiSlice.reducerPath]: groupApiSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      contactApiSlice.middleware,
      groupApiSlice.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
