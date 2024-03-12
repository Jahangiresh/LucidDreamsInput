import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://652f91320b8d8ddac0b2b62b.mockapi.io",
  }),
  endpoints: (builder:any) => ({
    getAutocomplete: builder.query({
      query: () => "autocomplete",
    }),
  }),
});

export const { useGetAutocompleteQuery } = api;

export default api;
