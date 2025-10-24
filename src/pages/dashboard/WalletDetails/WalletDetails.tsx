import {
  Activity,
  CreditCard,
  Mail,
  Phone,
  Shield,
  TrendingUp,
  User,
  Wallet,
} from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { createInitials } from "@/utils/createInitials";
import { formatCurrency } from "@/utils/formatCurrency";
import { getRoleBadge } from "@/utils/getRoleBadge";

import DateInfo from "@/components/shared/DateInfo";
import DetailsCardSkeleton from "@/components/shared/DetailsCardSkeleton";
import InfoCard from "@/components/shared/InfoCard";
import { useGetSingleWalletQuery } from "@/redux/features/wallet/wallet.api";
import { useParams } from "react-router-dom";

export default function WalletDetails() {
  const params = useParams();
  const { data: wallet, isLoading } = useGetSingleWalletQuery(params);

  if (isLoading) return <DetailsCardSkeleton />;

  return (
    <Card className="border-border bg-card border shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-primary text-3xl font-bold tracking-tight">
            Wallet Details
          </CardTitle>
          <CardDescription className="text-muted-foreground mt-1">
            Complete overview of wallet information
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="space-y-8">
        {/* Header Banner */}
        <div className="bg-accent relative h-36 overflow-hidden rounded-2xl shadow-md">
          <div className="absolute top-5 right-5">
            <Badge
              variant="secondary"
              className={cn(
                "flex items-center gap-1 border font-semibold",
                wallet.status === "Active" &&
                  "border-green-200 bg-green-100 text-green-700 dark:border-green-800 dark:bg-green-900/30 dark:text-green-400",
                wallet.status === "Blocked" &&
                  "border-red-200 bg-red-100 text-red-700 dark:border-red-800 dark:bg-red-900/30 dark:text-red-400",
                wallet.status === "Suspended" &&
                  "border-yellow-200 bg-yellow-100 text-yellow-700 dark:border-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
              )}
            >
              {wallet.status}
            </Badge>
          </div>
        </div>

        {/* Profile Info */}
        <div className="relative z-10 -mt-20 flex items-start gap-4">
          <Avatar className="ring-primary h-24 w-24 ring-2">
            <AvatarFallback className="bg-muted text-muted-foreground text-2xl font-semibold">
              {createInitials(wallet.name)}
            </AvatarFallback>
          </Avatar>

          <div className="pt-6">
            <h2 className="text-foreground text-4xl font-bold">
              {wallet.name}
            </h2>
            <Badge variant="outline" className={getRoleBadge(wallet.role)}>
              {wallet.role}
            </Badge>
          </div>
        </div>

        <Separator />

        {/* Summary Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Current Balance */}
          <Card className="border-border bg-muted/30 border shadow-sm">
            <CardHeader className="pb-3">
              <CardDescription className="text-muted-foreground flex items-center gap-2 font-medium">
                <Wallet className="h-4 w-4" />
                Current Balance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-foreground text-3xl font-bold">
                {formatCurrency(wallet.balance)}
              </div>
              <div className="text-muted-foreground mt-2 flex items-center gap-1 text-xs">
                <TrendingUp className="h-3 w-3" />
                <span>Active Account</span>
              </div>
            </CardContent>
          </Card>

          {/* Account Status */}
          <Card
            className={cn(
              "border-border rounded-xl border shadow-sm",
              wallet.status === "Active" && "bg-green-50 dark:bg-green-900/10",
              wallet.status === "Blocked" && "bg-red-50 dark:bg-red-900/10",
              wallet.status === "Suspended" &&
                "bg-yellow-50 dark:bg-yellow-900/10",
              !["Active", "Blocked", "Suspended"].includes(wallet.status) &&
                "bg-muted/30",
            )}
          >
            <CardHeader className="pb-3">
              <CardDescription
                className={cn(
                  "flex items-center gap-2 text-sm font-medium",
                  wallet.status === "Active"
                    ? "text-green-700 dark:text-green-400"
                    : wallet.status === "Blocked"
                      ? "text-red-700 dark:text-red-400"
                      : wallet.status === "Suspended"
                        ? "text-yellow-700 dark:text-yellow-400"
                        : "text-muted-foreground",
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
                    ? "text-green-900 dark:text-green-100"
                    : wallet.status === "Blocked"
                      ? "text-red-900 dark:text-red-100"
                      : wallet.status === "Suspended"
                        ? "text-yellow-900 dark:text-yellow-100"
                        : "text-foreground",
                )}
              >
                {wallet.status}
              </div>
              <div
                className={cn(
                  "mt-2 flex items-center gap-1 text-xs",
                  wallet.status === "Active"
                    ? "text-green-600 dark:text-green-400"
                    : wallet.status === "Blocked"
                      ? "text-red-600 dark:text-red-400"
                      : wallet.status === "Suspended"
                        ? "text-yellow-600 dark:text-yellow-400"
                        : "text-muted-foreground",
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
          <h3 className="text-foreground flex items-center gap-2 text-sm font-semibold">
            <User className="h-4 w-4" />
            Personal Information
          </h3>

          <div className="grid gap-4 md:grid-cols-2">
            <InfoCard icon={Mail} label="Email Address" value={wallet.email} />
            <InfoCard icon={Phone} label="Phone Number" value={wallet.phone} />
            <InfoCard
              icon={CreditCard}
              label="National ID"
              value={wallet.nid}
              mono
            />
            <InfoCard icon={Shield} label="User Role" value={wallet.role} />
          </div>
        </div>

        <Separator />

        {/* Dates */}
        <div className="grid gap-4 md:grid-cols-2">
          <DateInfo label="Created At" date={wallet.createdAt} />
          <DateInfo label="Last Updated" date={wallet.updatedAt} />
        </div>
      </CardContent>
    </Card>
  );
}
