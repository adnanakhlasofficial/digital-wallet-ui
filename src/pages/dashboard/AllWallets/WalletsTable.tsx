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
import { useGetAllWalletsQuery } from "@/redux/features/wallet/wallet.api";
import type { IWallet } from "@/types";
import { formatCurrency } from "@/utils/formatCurrency";
import { Wallet } from "lucide-react";
import WalletRow from "./WalletRow";
import TableSkeleton from "@/components/shared/TableSkeleton";

export default function WalletsTable() {
  const { data, isLoading } = useGetAllWalletsQuery({});

  if (isLoading) return <TableSkeleton />;

  const wallets = data as IWallet[];
  const totalBalance = wallets.reduce((sum, wallet) => sum + wallet.balance, 0);
  const activeWallets = wallets.filter((w) => w.status === "Active").length;

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
      </CardContent>
    </Card>
  );
}
