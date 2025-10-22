import { cn } from "@/lib/utils";
import type { IWallet } from "@/types";

export const getWalletStatus = (status: IWallet["status"]) =>
  cn(
    "border font-medium",
    status === "Active" &&
      "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20",
    status === "Blocked" &&
      "bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20",
    status === "Suspended" &&
      "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20"
  );
