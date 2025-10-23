import { baseApi } from "@/redux/baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => ({
        url: "/user/all",
      }),
      providesTags: ["USER"],
      transformResponse: (response) => response.data,
    }),
    getSingleUser: builder.query({
      query: ({ email }) => ({
        url: `/user/${email}`,
      }),
      providesTags: ["USER"],
      transformResponse: (response) => response.data,
    }),
  }),
});

export const { useGetAllUsersQuery, useGetSingleUserQuery } = userApi;
