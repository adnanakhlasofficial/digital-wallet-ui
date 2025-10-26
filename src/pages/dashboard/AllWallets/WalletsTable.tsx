import TableSkeleton from "@/components/shared/TableSkeleton";
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
import { useGetAllWalletsQuery } from "@/redux/features/wallet/wallet.api";
import type { IWallet } from "@/types";
import { formatCurrency } from "@/utils/formatCurrency";
import { Wallet } from "lucide-react";
import { useState } from "react";
import WalletRow from "./WalletRow";
import { handleNextPage, handlePrevPage } from "@/utils/pagination";

export default function WalletsTable() {
  const [queries, setQueries] = useState({ limit: 5, currentPage: 1 });
  const { data, isLoading } = useGetAllWalletsQuery({});

  if (isLoading) return <TableSkeleton />;

  const wallets = (data?.data as IWallet[]) || [];
  const totalBalance = wallets.reduce(
    (sum, wallet) => sum + wallet?.balance,
    0,
  );

  const meta = data?.meta || {};
  const pagination = Array.from({ length: meta.totalPages }, (_, i) => i + 1);

  const activeWallets = wallets?.filter((w) => w?.status === "Active")?.length;

  return (
    <Card className="border-border bg-card h-fit w-full gap-0 border p-0 shadow-md">
      <CardHeader className="border-border bg-muted/50 block rounded-tl-xl rounded-tr-xl border-b p-6">
        <div className="flex items-start gap-3">
          <div className="bg-primary/10 rounded-lg p-2.5 shadow-sm">
            <Wallet className="text-primary h-5 w-5" />
          </div>
          <div>
            <CardTitle className="text-foreground text-2xl">
              Wallet Management
            </CardTitle>
            <CardDescription className="text-muted-foreground mt-1">
              {activeWallets} active wallets • Total balance:{" "}
              {formatCurrency(totalBalance)}
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/60 hover:bg-muted/60 border-border">
              <TableHead className="text-foreground pl-6 font-semibold">
                Name & Role
              </TableHead>
              <TableHead className="text-foreground font-semibold">
                Contact
              </TableHead>
              <TableHead className="text-foreground text-right font-semibold">
                Balance
              </TableHead>
              <TableHead className="text-foreground font-semibold">
                Status
              </TableHead>
              <TableHead className="text-foreground font-semibold">
                Created
              </TableHead>
              <TableHead className="text-foreground pr-6 text-center font-semibold">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {wallets.map((wallet) => (
              <WalletRow key={wallet.phone} wallet={wallet} />
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
