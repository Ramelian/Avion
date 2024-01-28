// api.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const getToken = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user ? user.token : null;
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  credentials: "include",
  prepareHeaders: async (headers) => {
    const token  = getToken();
    if (token) {
      headers.set("Authorization", "Bearer " + token);
    }
    return headers;
  },
  endpoints: (builder) => ({
    getItems: builder.query({
      query: () => ({
        url: "/items",
      }),
    }),
    getItem: builder.query({
      query: (id) => `/items/${id}`,
    }),
    signup: builder.mutation({
      query: (credentials) => ({
        url: "api/user/signup",
        method: "POST",
        body: credentials,
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: "api/user/login",
        method: "POST",
        body: credentials,
      }),
    }),
    verify: builder.mutation({
      query: (credentials) => ({
        url: "api/user/verify",
        method: "POST",
        body: credentials
      })
    }),
    getUser: builder.query({
      query: (userId) => ({
        url: `api/user/get/${userId}`,
        method: "GET"
      })
    })
  }),
});

export const {
  useGetItemsQuery,
  useGetItemQuery,
  useSignupMutation,
  useLoginMutation,
  useVerifyMutation,
  useGetUserQuery
} = api;
