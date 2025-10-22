import { baseApi } from "@/redux/baseApi";

export const walletApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllWallets: builder.query({
      query: () => ({
        url: "/wallet/all",
      }),
    }),
    getSingleWallet: builder.query({
      query: ({ phone }) => ({
        url: `/wallet/${phone}`,
      }),
    }),
    getWalletMe: builder.query({
      query: () => ({
        url: "/wallet/me",
      }),
    }),
  }),
});

export const {
  useGetAllWalletsQuery,
  useGetSingleWalletQuery,
  useGetWalletMeQuery,
} = walletApi;
