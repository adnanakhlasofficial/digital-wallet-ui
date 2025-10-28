import { cn } from "@/lib/utils";
import type { TTransactionType } from "@/types";

export const getTransactionType = (type: TTransactionType) =>
  cn(
    "rounded-full border px-2 py-0.5 text-xs font-medium",
    type === "Send Bonus" &&
      "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300 border-blue-300/40",
    type === "Send Money" &&
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-300 border-emerald-300/40",
    type === "Cash In" &&
      "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-300 border-indigo-300/40",
    type === "Cash Out" &&
      "bg-rose-100 text-rose-800 dark:bg-rose-900/20 dark:text-rose-300 border-rose-300/40",
    type === "Agent Transfer" &&
      "bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-300 border-amber-300/40",
  );
