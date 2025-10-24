import { cn } from "@/lib/utils";
import type { TUserStatus } from "@/types";

export const getRoleBadge = (role: TUserStatus) =>
  cn(
    "rounded-full border px-2 py-0.5 text-xs font-medium",
    role === "Admin" && "bg-primary/15 text-primary border-primary/30",
    role === "User" &&
      "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300",
    role === "Agent" &&
      "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300",
  );
