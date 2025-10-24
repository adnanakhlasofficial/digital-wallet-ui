import { baseApi } from "@/redux/baseApi";

export const transactionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    sendBonus: builder.mutation({
      query: (payload) => ({
        url: "/transaction/send-bonus",
        method: "POST",
        data: payload,
      }),
    }),
  }),
});

export const { useSendBonusMutation } = transactionApi;
