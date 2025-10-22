import { baseApi } from "@/redux/baseApi";

export const walletApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllWallets: builder.query({
      query: () => ({
        url: "/wallet/all",
      }),
      transformResponse: (response) => response.data,
    }),
    getSingleWallet: builder.query({
      query: ({ phone }) => ({
        url: `/wallet/${phone}`,
      }),
      transformResponse: (response) => response.data,
    }),
    getWalletMe: builder.query({
      query: () => ({
        url: "/wallet/me",
      }),
      transformResponse: (response) => response.data,
    }),
  }),
});

export const {
  useGetAllWalletsQuery,
  useGetSingleWalletQuery,
  useGetWalletMeQuery,
} = walletApi;
