import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllTransactionsQuery } from "@/redux/features/transaction/transaction.api";

import TableSkeleton from "@/components/shared/TableSkeleton";
import type { ITransaction } from "@/types";
import { handleNextPage, handlePrevPage } from "@/utils/pagination";
import { Coins } from "lucide-react";
import { useState } from "react";
import TransactionRow from "./TransactionRow";

export default function TransactionsTable() {
  const [queries, setQueries] = useState({ limit: 5, currentPage: 1 });
  const { data, isLoading } = useGetAllTransactionsQuery(queries);

  if (isLoading) return <TableSkeleton />;

  const transactions = (data?.data as ITransaction[]) || [];
  const meta = data?.meta || {};

  const pagination = Array.from({ length: meta.totalPages }, (_, i) => i + 1);
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

        <div className="border-border border-t px-6 py-4">
          <Pagination>
            <PaginationContent className="flex items-center justify-between gap-4">
              <PaginationItem
                onClick={() => handlePrevPage(queries, setQueries)}
              >
                <PaginationPrevious />
              </PaginationItem>

              {pagination.map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink isActive={page === meta.currentPage}>
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem
                onClick={() =>
                  handleNextPage(queries, setQueries, meta.totalPages)
                }
              >
                <PaginationNext />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </CardContent>
    </Card>
  );
}
