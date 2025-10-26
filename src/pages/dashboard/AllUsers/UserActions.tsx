import { Coins, Eye, Shield } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

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
import { cn } from "@/lib/utils";
import { useUserMeQuery } from "@/redux/features/auth/auth.api";
import { useSetUserVerificationStatusMutation } from "@/redux/features/user/user.api";
import type { IUser } from "@/types";
import { toast } from "sonner";
import { UserRoles } from "@/constraints/UserRoles";

interface IProps {
  user: IUser;
}

export default function UserActions({ user }: IProps) {
  const [statusUpdateAction] = useSetUserVerificationStatusMutation();
  const { data } = useUserMeQuery({});
  const navigate = useNavigate();

  const setSearchParams = (url: string) => {
    const params = new URLSearchParams({ name: user.name, phone: user.phone });
    navigate(`/dashboard${url}?${params.toString()}`);
  };

  const handleAction = async () => {
    const toastId = toast.loading("Updating user status...");
    try {
      await statusUpdateAction({ email: user.email });
      toast.success("User status has been updated successfully.", {
        id: toastId,
      });
    } catch (error) {
      console.log(error);
      toast.error("Failed to update user status. Please try again.", {
        id: toastId,
      });
    }
  };

  return (
    <div className="flex justify-center gap-2">
      {data?.role === UserRoles.ADMIN && (
        <>
          {/* View Button */}
          <Button
            asChild
            variant="outline"
            size="sm"
            className="border-border text-foreground hover:bg-primary/10 hover:text-primary w-30"
          >
            <Link to={`/dashboard/users/${user.email}`}>
              <Eye className="mr-1 h-4 w-4" />
              View
            </Link>
          </Button>
          {/* Send Bonus */}
          <Button
            onClick={() => setSearchParams("/send-bonus")}
            variant="outline"
            size="sm"
            className="border-border text-foreground hover:bg-primary/10 hover:text-primary w-40"
          >
            <Coins className="mr-1 h-4 w-4" />
            Send Bonus
          </Button>
        </>
      )}

      {data?.role === UserRoles.USER && user.role === UserRoles.USER && (
        <>
          {/* Send Money */}
          <Button
            onClick={() => setSearchParams("/send-money")}
            variant="outline"
            size="sm"
            className="border-border text-foreground hover:bg-primary/10 hover:text-primary w-40"
          >
            <Coins className="mr-1 h-4 w-4" />
            Send Money
          </Button>
        </>
      )}

      {data?.role === UserRoles.USER && user.role === UserRoles.AGENT && (
        <>
          {/* Send Money */}
          <Button
            onClick={() => setSearchParams("/cash-out")}
            variant="outline"
            size="sm"
            className="border-border text-foreground hover:bg-primary/10 hover:text-primary w-40"
          >
            <Coins className="mr-1 h-4 w-4" />
            Cash Out
          </Button>
        </>
      )}

      {data?.role === UserRoles.ADMIN && (
        <>
          {/* Restrict / Unrestrict Button */}
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className={cn({
                  "border-border w-30 text-rose-600 hover:bg-rose-100/70 dark:hover:bg-rose-900/20":
                    !user.isVerified,
                  "border-border w-30 text-green-600 hover:bg-green-100/70 dark:hover:bg-green-900/20":
                    user.isVerified,
                })}
              >
                <Shield className="mr-1 h-4 w-4" />
                {user.isVerified ? "Restrict" : "Unrestrict"}
              </Button>
            </AlertDialogTrigger>

            {/* Confirmation Modal */}
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  {user.isVerified ? "Restrict User" : "Unrestrict User"}
                </AlertDialogTitle>
                <AlertDialogDescription>
                  {user.isVerified
                    ? "Are you sure you want to restrict this user? They will lose access to certain features."
                    : "Are you sure you want to unrestrict this user? They will regain full access."}
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleAction}>
                  Confirm
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </>
      )}
    </div>
  );
}
