import type { TAgentRequestStatus } from "@/types";

export const getAgentRequestStatus = (status: TAgentRequestStatus) => {
  switch (status) {
    case "Accepted":
      return "bg-green-500/10 text-green-600 border border-green-500/20";
    case "Rejected":
      return "bg-red-500/10 text-red-600 border border-red-500/20";
    default:
      return "bg-yellow-500/10 text-yellow-600 border border-yellow-500/20";
  }
};
