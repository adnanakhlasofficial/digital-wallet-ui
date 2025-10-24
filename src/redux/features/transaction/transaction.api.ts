import { baseApi } from "@/redux/baseApi";

export const transactionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    sendBonus: builder.mutation({
      query: (payload) => ({
        url: "/transaction/send-bonus",
        method: "POST",
        data: payload,
      }),
      invalidatesTags: ["TRANSACTIONS"],
    }),
    getAllTransactions: builder.query({
      query: () => ({
        url: "/transaction/all",
      }),
      providesTags: ["TRANSACTIONS"],
      transformResponse: (response) => response.data,
    }),
  }),
});

export const { useSendBonusMutation, useGetAllTransactionsQuery } =
  transactionApi;
