import LoadingMotion from "@/components/shared/LoadingMotion";
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
import { cn } from "@/lib/utils";
import { useGetAllWalletsQuery } from "@/redux/features/wallet/wallet.api";
import type { IWallet } from "@/types";
import { formatCurrency } from "@/utils/formatCurrency";
import { format } from "date-fns";
import { Ban, Eye, Pause, Wallet } from "lucide-react";
import { Link } from "react-router-dom";

export default function AllWallets() {
  const { data, isLoading } = useGetAllWalletsQuery({});

  if (isLoading) return <LoadingMotion />;

  const wallets = data as IWallet[];
  const totalBalance = wallets.reduce((sum, wallet) => sum + wallet.balance, 0);
  const activeWallets = wallets.filter((w) => w.status === "Active").length;

  return (
    <Card className="w-full border border-border shadow-md bg-card">
      <CardHeader className="border-b border-border bg-muted/50">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-primary/10 shadow-sm">
            <Wallet className="h-5 w-5 text-primary" />
          </div>
          <div>
            <CardTitle className="text-2xl text-foreground">
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
              <TableHead className="font-semibold text-foreground pl-6">
                Name & Role
              </TableHead>
              <TableHead className="font-semibold text-foreground">
                Contact
              </TableHead>
              <TableHead className="font-semibold text-foreground text-right">
                Balance
              </TableHead>
              <TableHead className="font-semibold text-foreground">
                Status
              </TableHead>
              <TableHead className="font-semibold text-foreground">
                Created
              </TableHead>
              <TableHead className="font-semibold text-foreground pr-6 text-center">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {wallets.map((wallet, index) => (
              <TableRow
                key={index}
                className="border-border hover:bg-muted transition-colors"
              >
                {/* 🧑‍💼 Name + Role */}
                <TableCell className="font-medium text-foreground pl-6">
                  <div className="flex items-center gap-2">
                    <span>{wallet.name}</span>
                    <Badge
                      className={cn(
                        "px-2 py-0.5 text-xs font-medium border rounded-full",
                        wallet.role === "Admin" &&
                          "bg-primary/15 text-primary border-primary/30",
                        wallet.role === "User" &&
                          "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300",
                        wallet.role === "Agent" &&
                          "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300"
                      )}
                    >
                      {wallet.role}
                    </Badge>
                  </div>
                </TableCell>

                {/* 📞 Contact */}
                <TableCell>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm text-foreground">
                      {wallet.email}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {wallet.phone}
                    </span>
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
                        : "text-muted-foreground"
                    )}
                  >
                    {formatCurrency(wallet.balance)}
                  </span>
                </TableCell>

                {/* 🔵 Status */}
                <TableCell>
                  <Badge
                    className={cn(
                      "font-medium border px-2 py-0.5",
                      wallet.status === "Active" &&
                        "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-300",
                      wallet.status === "Blocked" &&
                        "bg-rose-100 text-rose-800 dark:bg-rose-900/20 dark:text-rose-300",
                      wallet.status === "Suspended" &&
                        "bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-300"
                    )}
                  >
                    {wallet.status}
                  </Badge>
                </TableCell>

                {/* 🗓️ Created */}
                <TableCell className="text-sm text-muted-foreground">
                  {format(wallet.createdAt, "PP")}
                </TableCell>

                {/* ⚙️ Actions */}
                <TableCell className="text-center pr-6">
                  <div className="flex justify-center gap-2">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-border text-foreground hover:bg-primary/10 hover:text-primary"
                    >
                      <Link to={`/dashboard/wallets/${wallet.phone}`}>
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-border text-rose-600 hover:bg-rose-100/70 dark:hover:bg-rose-900/20"
                    >
                      <Ban className="h-4 w-4 mr-1" />
                      Block
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-border text-amber-600 hover:bg-amber-100/70 dark:hover:bg-amber-900/20"
                    >
                      <Pause className="h-4 w-4 mr-1" />
                      Suspend
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
