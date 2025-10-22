import {
  Activity,
  CreditCard,
  Mail,
  MoreVertical,
  Phone,
  Shield,
  TrendingUp,
  User,
  Wallet,
} from "lucide-react";

import LoadingMotion from "@/components/shared/LoadingMotion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
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
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useGetSingleWalletQuery } from "@/redux/features/wallet/wallet.api";
import { createInitials } from "@/utils/createInitials";
import { formatCurrency } from "@/utils/formatCurrency";
import { getRoleBadge } from "@/utils/getRoleBadge";
import { useParams } from "react-router-dom";
import WalletDateInfo from "./WalletDateInfo";
import WalletInfoCard from "./WalletInfoCard";

export default function WalletDetails() {
  const params = useParams();
  const { data: wallet, isLoading } = useGetSingleWalletQuery(params);

  if (isLoading) return <LoadingMotion />;

  return (
    <Card className="border border-border shadow-xl bg-card">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-3xl font-bold tracking-tight bg-linear-to-r from-slate-900 to-slate-600 dark:from-slate-100 dark:to-slate-400 bg-clip-text text-transparent">
            Wallet Details
          </CardTitle>
          <CardDescription className="text-muted-foreground mt-1">
            Complete overview of wallet information
          </CardDescription>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="h-9 w-9">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Edit Wallet</DropdownMenuItem>
            <DropdownMenuItem>View History</DropdownMenuItem>
            <DropdownMenuItem>Export Data</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600">
              Suspend Wallet
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>

      <CardContent className="space-y-8">
        {/* Header Banner */}
        <div className="relative h-36 rounded-2xl overflow-hidden bg-linear-to-r from-primary/80 to-primary/60 dark:from-primary/70 dark:to-primary/50 shadow-lg">
          {/* Decorative diagonal lines */}
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#ffffff05_1px,transparent_1px),linear-gradient(225deg,#ffffff05_1px,transparent_1px)] bg-size-[32px_32px]" />

          {/* Floating Status Badge */}
          <div className="absolute top-5 right-5">
            <Badge
              className={cn(
                "px-3 py-1 rounded-full shadow-md text-sm font-semibold",
                wallet.status === "Active" &&
                  "bg-emerald-100 text-emerald-800 border-emerald-200",
                wallet.status === "Blocked" &&
                  "bg-rose-100 text-rose-800 border-rose-200",
                wallet.status === "Suspended" &&
                  "bg-amber-100 text-amber-800 border-amber-200"
              )}
            >
              {wallet.status}
            </Badge>
          </div>

          {/* Optional subtle overlay for depth */}
          <div className="absolute inset-0 bg-black/10 dark:bg-black/20 mix-blend-overlay pointer-events-none" />
        </div>

        {/* Profile Info */}
        <div className="flex items-start gap-4 -mt-20 relative z-10">
          <Avatar className="h-24 w-24 ring-primary ring-2">
            <AvatarFallback className="text-2xl font-semibold bg-primary-foreground">
              {createInitials(wallet.name)}
            </AvatarFallback>
          </Avatar>

          <div className="pt-6">
            <h2 className="text-4xl font-bold">{wallet.name}</h2>
            <Badge variant="outline" className={getRoleBadge(wallet.role)}>
              {wallet.role}
            </Badge>
          </div>
        </div>

        <Separator />

        {/* Summary Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-linear-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 border-emerald-200/60 dark:border-emerald-900/30">
            <CardHeader className="pb-3">
              <CardDescription className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-medium">
                <Wallet className="h-4 w-4" />
                Current Balance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-emerald-900 dark:text-emerald-100">
                {formatCurrency(wallet.balance)}
              </div>
              <div className="flex items-center gap-1 mt-2 text-xs text-emerald-600 dark:text-emerald-500">
                <TrendingUp className="h-3 w-3" />
                <span>Active Account</span>
              </div>
            </CardContent>
          </Card>

          <Card
            className={cn(
              "border border-border shadow-md rounded-xl",
              wallet.status === "Active"
                ? "bg-emerald-50 dark:bg-emerald-900/20"
                : wallet.status === "Blocked"
                ? "bg-rose-50 dark:bg-rose-900/20"
                : wallet.status === "Suspended"
                ? "bg-amber-50 dark:bg-amber-900/20"
                : "bg-slate-50 dark:bg-slate-900/40"
            )}
          >
            <CardHeader className="pb-3">
              <CardDescription
                className={cn(
                  "flex items-center gap-2 text-sm font-medium",
                  wallet.status === "Active"
                    ? "text-emerald-700 dark:text-emerald-400"
                    : wallet.status === "Blocked"
                    ? "text-rose-700 dark:text-rose-400"
                    : wallet.status === "Suspended"
                    ? "text-amber-700 dark:text-amber-400"
                    : "text-foreground/80"
                )}
              >
                <Activity className="h-4 w-4" />
                Account Status
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div
                className={cn(
                  "text-3xl font-bold",
                  wallet.status === "Active"
                    ? "text-emerald-900 dark:text-emerald-100"
                    : wallet.status === "Blocked"
                    ? "text-rose-900 dark:text-rose-100"
                    : wallet.status === "Suspended"
                    ? "text-amber-900 dark:text-amber-100"
                    : "text-foreground"
                )}
              >
                {wallet.status}
              </div>
              <div
                className={cn(
                  "flex items-center gap-1 mt-2 text-xs",
                  wallet.status === "Active"
                    ? "text-emerald-600 dark:text-emerald-400"
                    : wallet.status === "Blocked"
                    ? "text-rose-600 dark:text-rose-400"
                    : wallet.status === "Suspended"
                    ? "text-amber-600 dark:text-amber-400"
                    : "text-foreground/70"
                )}
              >
                <Shield className="h-3 w-3" />
                <span>Security Verified</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Personal Info */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <User className="h-4 w-4" />
            Personal Information
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Email */}
            <WalletInfoCard
              icon={Mail}
              label="Email Address"
              value={wallet.email}
              color="blue"
            />
            {/* Phone */}
            <WalletInfoCard
              icon={Phone}
              label="Phone Number"
              value={wallet.phone}
              color="teal"
            />
            {/* NID */}
            <WalletInfoCard
              icon={CreditCard}
              label="National ID"
              value={wallet.nid}
              color="slate"
              mono
            />
            {/* Role */}
            <WalletInfoCard
              icon={Shield}
              label="User Role"
              value={wallet.role}
              color="amber"
            />
          </div>
        </div>

        <Separator />

        {/* Dates */}
        <div className="grid md:grid-cols-2 gap-4">
          <WalletDateInfo label="Created At" date={wallet.createdAt} />
          <WalletDateInfo label="Last Updated" date={wallet.updatedAt} />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          <Button className="flex-1 bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-slate-200 dark:text-slate-900">
            Add Funds
          </Button>
          <Button variant="outline" className="flex-1">
            Withdraw
          </Button>
          <Button variant="outline" className="flex-1">
            Transaction History
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
