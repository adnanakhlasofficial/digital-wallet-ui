import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface InfoCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  color?: "blue" | "teal" | "slate" | "amber" | "emerald";
  mono?: boolean;
}

export default function InfoCard({
  icon: Icon,
  label,
  value,
  color = "slate",
  mono = false,
}: InfoCardProps) {
  const colorClasses = {
    blue: "bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900/30 text-blue-700 dark:text-blue-400",
    teal: "bg-teal-50 dark:bg-teal-950/20 border-teal-200 dark:border-teal-900/30 text-teal-700 dark:text-teal-400",
    slate:
      "bg-slate-50 dark:bg-slate-950/20 border-slate-200 dark:border-slate-900/30 text-slate-700 dark:text-slate-400",
    amber:
      "bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900/30 text-amber-700 dark:text-amber-400",
    emerald:
      "bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900/30 text-emerald-700 dark:text-emerald-400",
  };

  return (
    <div
      className={cn(
        "flex items-start gap-3 p-4 rounded-lg border shadow-sm",
        colorClasses[color]
      )}
    >
      <Icon className="h-5 w-5 mt-0.5" />
      <div className="space-y-1">
        <p className="text-xs font-medium uppercase tracking-wide opacity-80">
          {label}
        </p>
        <p
          className={cn(
            "text-sm font-semibold text-slate-900 dark:text-slate-100",
            mono && "font-mono"
          )}
        >
          {value}
        </p>
      </div>
    </div>
  );
}
