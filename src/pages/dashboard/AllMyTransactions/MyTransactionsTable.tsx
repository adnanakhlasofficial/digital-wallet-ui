import TableSkeleton from "@/components/shared/TableSkeleton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllMyTransactionsQuery } from "@/redux/features/transaction/transaction.api";
import type { ITransaction } from "@/types";
import { formatCurrency } from "@/utils/formatCurrency";
import { getTransactionType } from "@/utils/getTransactionType";
import { format } from "date-fns";
import { AlertTriangle, Coins, RefreshCcw } from "lucide-react";

export default function MyTransactionsTable() {
  const {
    data: transactionsData,
    isLoading,
    isError,
    refetch,
  } = useGetAllMyTransactionsQuery({});

  if (isLoading) return <TableSkeleton />;

  if (isError) {
    return (
      <div className="flex min-h-[300px] flex-col items-center justify-center text-center">
        <AlertTriangle className="text-destructive mb-3 h-10 w-10" />
        <p className="text-destructive mb-2 text-lg font-semibold">
          Failed to load transactions
        </p>
        <p className="text-muted-foreground mb-4 text-sm">
          {"Something went wrong while fetching data."}
        </p>
        <Button onClick={refetch} variant="outline" className="gap-2">
          <RefreshCcw className="h-4 w-4" />
          Try Again
        </Button>
      </div>
    );
  }

  const transactions = (transactionsData as ITransaction[]) || [];

  if (transactions.length === 0) {
    return (
      <div className="flex min-h-[300px] flex-col items-center justify-center text-center">
        <Coins className="text-muted-foreground mb-3 h-10 w-10" />
        <p className="text-muted-foreground text-lg font-medium">
          No transactions found
        </p>
      </div>
    );
  }

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
              My Transactions
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
              <TableRow
                key={trx.trxId}
                className="border-border hover:bg-muted/50 transition-colors"
              >
                <TableCell className="text-foreground pl-6 font-medium">
                  {trx.trxId}
                </TableCell>

                <TableCell>
                  <Badge className={getTransactionType(trx.transactionType)}>
                    {trx.transactionType}
                  </Badge>
                </TableCell>

                <TableCell>
                  <div className="flex flex-col">
                    <span className="text-foreground text-sm">
                      {trx.senderName}
                    </span>
                    <span className="text-muted-foreground text-xs">
                      {trx.sender}
                    </span>
                  </div>
                </TableCell>

                <TableCell>
                  <div className="flex flex-col">
                    <span className="text-foreground text-sm">
                      {trx.receiverName}
                    </span>
                    <span className="text-muted-foreground text-xs">
                      {trx.receiver}
                    </span>
                  </div>
                </TableCell>

                <TableCell className="text-foreground font-semibold">
                  {formatCurrency(trx.amount)}
                </TableCell>

                <TableCell className="text-muted-foreground text-sm">
                  {trx.fee ? formatCurrency(trx.fee) : "—"}
                </TableCell>

                <TableCell className="text-muted-foreground text-sm">
                  {trx.commission ? formatCurrency(trx.commission) : "—"}
                </TableCell>

                <TableCell className="text-foreground font-medium">
                  {trx.netAmount ? formatCurrency(trx.netAmount) : "—"}
                </TableCell>

                <TableCell className="text-muted-foreground pr-6 text-right text-sm">
                  {format(new Date(trx.createdAt), "PPp")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
