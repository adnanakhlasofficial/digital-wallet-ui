import { Clock } from "lucide-react";
import { format } from "date-fns";

interface DateInfoProps {
  label: string;
  date: string;
}

export default function DateInfo({ label, date }: DateInfoProps) {
  return (
    <div className="flex items-start gap-3 p-4 rounded-lg bg-slate-50 dark:bg-slate-950/20 border border-slate-200 dark:border-slate-900/30 shadow-sm">
      <Clock className="h-5 w-5 text-slate-700 dark:text-slate-400 mt-0.5" />
      <div className="space-y-1">
        <p className="text-xs text-slate-600 dark:text-slate-400 font-medium uppercase tracking-wide">
          {label}
        </p>
        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
          {format(new Date(date), "PPpp")}
        </p>
      </div>
    </div>
  );
}
