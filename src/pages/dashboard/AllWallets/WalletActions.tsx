import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useSetWalletStatusMutation } from "@/redux/features/wallet/wallet.api";
import type { IWallet, TWalletStatus } from "@/types";
import { Eye, Ban, Pause, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

interface IProps {
  wallet: IWallet;
}

export default function WalletActions({ wallet }: IProps) {
  const [updateStatus] = useSetWalletStatusMutation();

  const handleAction = async (action: TWalletStatus) => {
    try {
      const data = await updateStatus({ phone: wallet.phone, status: action });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center gap-2">
      {/* View Button (no confirmation needed) */}
      <Button
        asChild
        variant="outline"
        size="sm"
        className="border-border text-foreground hover:bg-primary/10 hover:text-primary"
      >
        <Link to={`/dashboard/wallets/${wallet.phone}`}>
          <Eye className="mr-1 h-4 w-4" />
          View
        </Link>
      </Button>

      <div className="flex justify-center gap-2">
        {wallet.status !== "Active" ? (
          // 👉 Show Activate button if wallet is not active
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="border-border w-62 text-green-600 hover:bg-green-100/70 dark:hover:bg-green-900/20"
              >
                <CheckCircle className="mr-1 h-4 w-4" />
                Activate
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Confirm Activation</AlertDialogTitle>
                <AlertDialogDescription>
                  Are you sure you want to activate this wallet? It will regain
                  full access.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={() => handleAction("Active")}>
                  Activate
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        ) : (
          <>
            {/* 👉 Show Block button if wallet is active */}
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-border w-30 text-rose-600 hover:bg-rose-100/70 dark:hover:bg-rose-900/20"
                >
                  <Ban className="mr-1 h-4 w-4" />
                  Block
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Confirm Block</AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to block this wallet? This action
                    cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={() => handleAction("Blocked")}>
                    Block
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            {/* 👉 Show Suspend button if wallet is active */}
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-border w-30 text-amber-600 hover:bg-amber-100/70 dark:hover:bg-amber-900/20"
                >
                  <Pause className="mr-1 h-4 w-4" />
                  Suspend
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Confirm Suspend</AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to suspend this wallet? Suspended
                    wallets will not be able to perform transactions until
                    reactivated.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={() => handleAction("Suspended")}>
                    Suspend
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </>
        )}
      </div>
    </div>
  );
}
