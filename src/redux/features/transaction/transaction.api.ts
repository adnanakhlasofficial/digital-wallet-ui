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
    sendMoney: builder.mutation({
      query: (payload) => ({
        url: "/transaction/send-money",
        method: "POST",
        data: payload,
      }),
      invalidatesTags: ["TRANSACTIONS"],
    }),
    cashIn: builder.mutation({
      query: (payload) => ({
        url: "/transaction/cash-in",
        method: "POST",
        data: payload,
      }),
      invalidatesTags: ["TRANSACTIONS"],
    }),
    cashOut: builder.mutation({
      query: (payload) => ({
        url: "/transaction/cash-out",
        method: "POST",
        data: payload,
      }),
      invalidatesTags: ["TRANSACTIONS"],
    }),
    getAllTransactions: builder.query({
      query: (query) => ({
        url: "/transaction/all",
        params: query,
      }),
      providesTags: ["TRANSACTIONS"],
    }),
    getAllMyTransactions: builder.query({
      query: (query) => ({
        url: "/transaction/all/my",
        params: query,
      }),
      providesTags: ["TRANSACTIONS"],
    }),
  }),
});

export const {
  useSendBonusMutation,
  useSendMoneyMutation,
  useCashInMutation,
  useCashOutMutation,
  useGetAllTransactionsQuery,
  useGetAllMyTransactionsQuery,
} = transactionApi;
