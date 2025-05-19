import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GroupContactsDto } from "src/types/dto/GroupContactsDto";

export const groupApiSlice = createApi({
  reducerPath: "groupsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  endpoints(builder) {
    return {
      getGroups: builder.query<GroupContactsDto[], void>({
        query: () => ({ url: "/groups" }),
      }),
    };
  },
});

export const { useGetGroupsQuery } = groupApiSlice;
