import { baseApi } from "@/redux/baseApi";

const agentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllAgentRequests: builder.query({
      query: (query) => ({
        url: "/user/agent/requests",
        params: query,
      }),
    }),
  }),
});

export const { useGetAllAgentRequestsQuery } = agentApi;
