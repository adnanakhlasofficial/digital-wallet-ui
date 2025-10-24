import { TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import type { ITransaction } from "@/types";
import { getTransactionType } from "@/utils/getTransactionType";
import { formatCurrency } from "@/utils/formatCurrency";

interface IProps {
  trx: ITransaction;
}

export default function TransactionRow({ trx }: IProps) {
  return (
    <TableRow className="border-border hover:bg-muted/50 transition-colors">
      {/* 🧾 Transaction ID */}
      <TableCell className="text-foreground pl-6 font-medium">
        {trx.trxId}
      </TableCell>

      {/* 💳 Transaction Type */}
      <TableCell>
        <Badge className={getTransactionType(trx.transactionType)}>
          {trx.transactionType}
        </Badge>
      </TableCell>

      {/* 🧍 Sender */}
      <TableCell>
        <div className="flex flex-col">
          <span className="text-foreground text-sm">{trx.senderName}</span>
          <span className="text-muted-foreground text-xs">{trx.sender}</span>
        </div>
      </TableCell>

      {/* 🧍‍♂️ Receiver */}
      <TableCell>
        <div className="flex flex-col">
          <span className="text-foreground text-sm">{trx.receiverName}</span>
          <span className="text-muted-foreground text-xs">{trx.receiver}</span>
        </div>
      </TableCell>

      {/* 💰 Amount */}
      <TableCell className="text-foreground font-semibold">
        {formatCurrency(trx.amount)}
      </TableCell>

      {/* 💸 Fee */}
      <TableCell className="text-muted-foreground text-sm">
        {trx.fee ? formatCurrency(trx.fee) : "—"}
      </TableCell>

      {/* 💼 Commission */}
      <TableCell className="text-muted-foreground text-sm">
        {trx.commission ? formatCurrency(trx.commission) : "—"}
      </TableCell>

      {/* 📊 Net Amount */}
      <TableCell className="text-foreground font-medium">
        {trx.netAmount ? formatCurrency(trx.netAmount) : "—"}
      </TableCell>

      {/* 📅 Date */}
      <TableCell className="text-muted-foreground pr-6 text-right text-sm">
        {format(new Date(trx.createdAt), "PPp")}
      </TableCell>
    </TableRow>
  );
}
