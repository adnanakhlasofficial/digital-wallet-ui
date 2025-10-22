import { format } from "date-fns";
import { Calendar } from "lucide-react";

export default function WalletDateInfo({
  label,
  date,
}: {
  label: string;
  date: string;
}) {
  return (
    <div className="flex items-center gap-3 p-4 rounded-lg bg-slate-50/50 dark:bg-slate-900/20 border border-slate-200/40 dark:border-slate-800/40">
      <Calendar className="h-5 w-5 text-slate-500 dark:text-slate-400" />
      <div>
        <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
          {label}
        </p>
        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 mt-0.5">
          {format(date, "PPPppp")}
        </p>
      </div>
    </div>
  );
}
