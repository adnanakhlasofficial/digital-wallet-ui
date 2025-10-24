import LoadingMotion from "@/components/shared/LoadingMotion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllTransactionsQuery } from "@/redux/features/transaction/transaction.api";

import { Coins } from "lucide-react";
import TransactionRow from "./TransactionRow";
import type { ITransaction } from "@/types";
import TableSkeleton from "@/components/shared/TableSkeleton";

export default function TransactionsTable() {
  const { data, isLoading } = useGetAllTransactionsQuery({});

  if (isLoading) return <TableSkeleton />;

  const transactions = data as ITransaction[];

  const totalAmount = transactions.reduce(
    (sum, trx) => sum + (trx.amount || 0),
    0,
  );

  return (
    <Card className="border-border bg-card h-fit w-full gap-0 border p-0 shadow-md">
      <CardHeader className="border-border bg-muted/50 m-0 block rounded-tl-xl rounded-tr-xl border-b p-6">
        <div className="flex items-start gap-3">
          <div className="bg-primary/10 rounded-lg p-2.5 shadow-sm">
            <Coins className="text-primary h-5 w-5" />
          </div>
          <div>
            <CardTitle className="text-foreground text-2xl">
              All Transactions
            </CardTitle>
            <CardDescription className="text-muted-foreground mt-1">
              Total: {transactions.length} transactions • Total Amount: ৳
              {totalAmount.toLocaleString()}
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/60 hover:bg-muted/60 border-border">
              <TableHead className="text-foreground min-w-40 pl-6 font-semibold">
                Transaction ID
              </TableHead>
              <TableHead className="text-foreground font-semibold">
                Type
              </TableHead>
              <TableHead className="text-foreground font-semibold">
                Sender
              </TableHead>
              <TableHead className="text-foreground font-semibold">
                Receiver
              </TableHead>
              <TableHead className="text-foreground font-semibold">
                Amount
              </TableHead>
              <TableHead className="text-foreground font-semibold">
                Fee
              </TableHead>
              <TableHead className="text-foreground font-semibold">
                Commission
              </TableHead>
              <TableHead className="text-foreground font-semibold">
                Net Amount
              </TableHead>
              <TableHead className="text-foreground pr-6 text-right font-semibold">
                Date
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {transactions.map((trx) => (
              <TransactionRow key={trx.trxId} trx={trx} />
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
