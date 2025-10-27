import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  useAcceptAgentRequestMutation,
  useRejectAgentRequestMutation,
} from "@/redux/features/agent/agent.api";
import type { ApiErrorResponse, IAgentRequest } from "@/types";
import { CheckCircle2, XCircle } from "lucide-react";
import { toast } from "sonner";

interface IProps {
  request: IAgentRequest;
}

export default function AgentRequestActions({ request }: IProps) {
  const [acceptRequest] = useAcceptAgentRequestMutation();
  const [rejectRequest] = useRejectAgentRequestMutation();

  const handleAccept = async (email: string) => {
    try {
      await acceptRequest(request?.email || email).unwrap();
      toast.success("Agent Request Approved");
    } catch (err) {
      const error = err as ApiErrorResponse;
      toast.error(error.data.message);
      console.error(error);
    }
  };
  const handleReject = async (email: string) => {
    try {
      await rejectRequest(request?.email || email).unwrap();
      toast.success("Agent Request Rejected");
    } catch (err) {
      const error = err as ApiErrorResponse;
      toast.error(error.data.message);
      console.error(error);
    }
  };

  return (
    <div className="flex justify-end gap-2">
      {/* ✅ Accept Dialog */}
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="border-border w-28 text-green-600 hover:bg-green-100/70 dark:hover:bg-green-900/20"
          >
            <CheckCircle2 className="mr-1 h-4 w-4" />
            Accept
          </Button>
        </AlertDialogTrigger>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Acceptance</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to accept this agent request? This action
              cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => handleAccept(request.email)}
              className="bg-green-600 text-white hover:bg-green-700"
            >
              Confirm
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* ❌ Reject Dialog */}
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="border-border w-28 text-rose-600 hover:bg-rose-100/70 dark:hover:bg-rose-900/20"
          >
            <XCircle className="mr-1 h-4 w-4" />
            Reject
          </Button>
        </AlertDialogTrigger>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Rejection</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to reject this agent request? This action
              cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => handleReject(request.email)}
              className="bg-rose-600 text-white hover:bg-rose-700"
            >
              Confirm
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
