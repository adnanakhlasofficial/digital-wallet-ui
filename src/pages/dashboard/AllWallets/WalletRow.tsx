import { Badge } from "@/components/ui/badge";
import { TableCell, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";
import type { IWallet } from "@/types";
import { formatCurrency } from "@/utils/formatCurrency";
import { getRoleBadge } from "@/utils/getRoleBadge";
import { getWalletStatus } from "@/utils/getWalletStatus";
import { format } from "date-fns";
import WalletActions from "./WalletActions";

interface IProps {
  wallet: IWallet;
}

export default function WalletRow({ wallet }: IProps) {
  return (
    <TableRow className="border-border hover:bg-muted transition-colors">
      {/* 🧑‍💼 Name + Role */}
      <TableCell className="text-foreground pl-6 font-medium">
        <div className="flex items-center gap-2">
          <span>{wallet.name}</span>
          <Badge className={getRoleBadge(wallet.role)}>{wallet.role}</Badge>
        </div>
      </TableCell>

      {/* 📞 Contact */}
      <TableCell>
        <div className="flex flex-col gap-0.5">
          <span className="text-foreground text-sm">{wallet.email}</span>
          <span className="text-muted-foreground text-xs">{wallet.phone}</span>
        </div>
      </TableCell>

      {/* 💰 Balance */}
      <TableCell className="text-right">
        <span
          className={cn(
            "font-semibold",
            wallet.balance > 200
              ? "text-emerald-600 dark:text-emerald-400"
              : wallet.balance > 50
                ? "text-foreground"
                : "text-muted-foreground",
          )}
        >
          {formatCurrency(wallet.balance)}
        </span>
      </TableCell>

      {/* 🔵 Status */}
      <TableCell>
        <Badge className={getWalletStatus(wallet.status)}>
          {wallet.status}
        </Badge>
      </TableCell>

      {/* 🗓️ Created */}
      <TableCell className="text-muted-foreground text-sm">
        {format(wallet.createdAt, "PP")}
      </TableCell>

      {/* ⚙️ Actions */}
      <TableCell className="pr-6 text-center">
        <WalletActions wallet={wallet} />
      </TableCell>
    </TableRow>
  );
}
