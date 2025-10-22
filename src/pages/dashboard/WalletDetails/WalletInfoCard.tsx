import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

export default function WalletInfoCard({
  icon: Icon,
  label,
  value,
  color,
  mono,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  color: string;
  mono?: boolean;
}) {
  return (
    <div className="flex items-start gap-3 p-4 rounded-lg bg-slate-50 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/60 hover:shadow-md transition-shadow">
      <div
        className={cn(
          "p-2 rounded-full",
          color === "blue" && "bg-blue-100 dark:bg-blue-950/30",
          color === "teal" && "bg-teal-100 dark:bg-teal-950/30",
          color === "slate" && "bg-slate-100 dark:bg-slate-800",
          color === "amber" && "bg-amber-100 dark:bg-amber-950/30"
        )}
      >
        <Icon
          className={cn(
            "h-4 w-4",
            color === "blue" && "text-blue-700 dark:text-blue-400",
            color === "teal" && "text-teal-700 dark:text-teal-400",
            color === "slate" && "text-slate-700 dark:text-slate-400",
            color === "amber" && "text-amber-700 dark:text-amber-400"
          )}
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">
          {label}
        </p>
        <p
          className={cn(
            "text-sm font-medium text-slate-900 dark:text-slate-100 truncate",
            mono && "font-mono"
          )}
        >
          {value}
        </p>
      </div>
    </div>
  );
}
