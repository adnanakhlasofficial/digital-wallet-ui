import { cn } from "@/lib/utils";
import type { IWallet } from "@/types";

export const getWalletStatus = (status: IWallet["status"]) =>
  cn(
    "border px-2 py-0.5 font-medium",
    status === "Active" &&
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-300",
    status === "Blocked" &&
      "bg-rose-100 text-rose-800 dark:bg-rose-900/20 dark:text-rose-300",
    status === "Suspended" &&
      "bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-300",
  );
