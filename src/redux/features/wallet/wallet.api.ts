import { baseApi } from "@/redux/baseApi";

export const walletApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllWallets: builder.query({
      query: (query) => ({
        url: "/wallet/all",
        params: query,
      }),
      providesTags: ["WALLET"],
    }),
    getSingleWallet: builder.query({
      query: ({ phone }) => ({
        url: `/wallet/${phone}`,
      }),
      providesTags: ["WALLET"],
      transformResponse: (response) => response.data,
    }),
    getWalletMe: builder.query({
      query: () => ({
        url: "/wallet/me",
      }),
      transformResponse: (response) => response.data,
    }),
    setWalletStatus: builder.mutation({
      query: ({ phone, status }: { phone: string; status: string }) => ({
        url: `/wallet/${phone}`,
        method: "PATCH",
        data: { status },
      }),
      invalidatesTags: ["WALLET"],
    }),
  }),
});

export const {
  useGetAllWalletsQuery,
  useGetSingleWalletQuery,
  useGetWalletMeQuery,
  useSetWalletStatusMutation,
} = walletApi;
