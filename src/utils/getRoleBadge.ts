import { cn } from "@/lib/utils";
import type { IUser } from "@/types";

export const getRoleBadge = (role: IUser["role"]) =>
  cn(
    "border font-medium",
    role === "Admin" &&
      "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
    role === "Agent" &&
      "bg-teal-500/10 text-teal-700 dark:text-teal-400 border-teal-500/20",
    role === "User" &&
      "bg-slate-500/10 text-slate-700 dark:text-slate-400 border-slate-500/20"
  );
