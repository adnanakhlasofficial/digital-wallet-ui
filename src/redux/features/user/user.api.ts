import { baseApi } from "@/redux/baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: (query) => ({
        url: "/user/all",
        params: query,
      }),
      providesTags: ["USER"],
    }),
    getSingleUser: builder.query({
      query: ({ email }) => ({
        url: `/user/${email}`,
      }),
      providesTags: ["USER"],
      transformResponse: (response) => response.data,
    }),
    setUserVerificationStatus: builder.mutation({
      query: ({ email }) => ({
        url: `/user/${email}`,
        method: "PATCH",
      }),
      invalidatesTags: ["USER"],
      transformResponse: (response) => response.data,
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetSingleUserQuery,
  useSetUserVerificationStatusMutation,
} = userApi;
