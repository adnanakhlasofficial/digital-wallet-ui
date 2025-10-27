import { baseApi } from "@/redux/baseApi";

const agentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllAgentRequests: builder.query({
      query: (query) => ({
        url: "/user/agent/requests",
        params: query,
      }),
      providesTags: ["AGENT_REQUEST"],
    }),
    acceptAgentRequest: builder.mutation({
      query: (email) => ({
        url: `/user/agent/request/accept/${email}`,
        method: "PATCH",
      }),
      invalidatesTags: ["AGENT_REQUEST", "USER"],
    }),
    rejectAgentRequest: builder.mutation({
      query: (email) => ({
        url: `/user/agent/request/reject/${email}`,
        method: "PATCH",
      }),
      invalidatesTags: ["AGENT_REQUEST", "USER"],
    }),
  }),
});

export const {
  useGetAllAgentRequestsQuery,
  useAcceptAgentRequestMutation,
  useRejectAgentRequestMutation,
} = agentApi;
