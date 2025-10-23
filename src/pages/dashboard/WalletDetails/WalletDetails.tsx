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

import LoadingMotion from "@/components/shared/LoadingMotion";
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
import InfoCard from "@/components/shared/InfoCard";
import { useGetSingleWalletQuery } from "@/redux/features/wallet/wallet.api";
import { useParams } from "react-router-dom";

export default function WalletDetails() {
  const params = useParams();
  const { data: wallet, isLoading } = useGetSingleWalletQuery(params);

  if (isLoading) return <LoadingMotion />;

  return (
    <Card className="border border-border shadow-lg bg-card">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-3xl font-bold tracking-tight text-primary">
            Wallet Details
          </CardTitle>
          <CardDescription className="text-muted-foreground mt-1">
            Complete overview of wallet information
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="space-y-8">
        {/* Header Banner */}
        <div className="relative h-36 rounded-2xl overflow-hidden bg-accent shadow-md">
          <div className="absolute top-5 right-5">
            <Badge
              variant="secondary"
              className={cn(
                "flex items-center gap-1 font-semibold border",
                wallet.status === "Active" &&
                  "text-green-700 dark:text-green-400 border-green-200 dark:border-green-800 bg-green-100 dark:bg-green-900/30",
                wallet.status === "Blocked" &&
                  "text-red-700 dark:text-red-400 border-red-200 dark:border-red-800 bg-red-100 dark:bg-red-900/30",
                wallet.status === "Suspended" &&
                  "text-yellow-700 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800 bg-yellow-100 dark:bg-yellow-900/30"
              )}
            >
              {wallet.status}
            </Badge>
          </div>
        </div>

        {/* Profile Info */}
        <div className="flex items-start gap-4 -mt-20 relative z-10">
          <Avatar className="h-24 w-24 ring-2 ring-primary">
            <AvatarFallback className="text-2xl font-semibold bg-muted text-muted-foreground">
              {createInitials(wallet.name)}
            </AvatarFallback>
          </Avatar>

          <div className="pt-6">
            <h2 className="text-4xl font-bold text-foreground">
              {wallet.name}
            </h2>
            <Badge variant="outline" className={getRoleBadge(wallet.role)}>
              {wallet.role}
            </Badge>
          </div>
        </div>

        <Separator />

        {/* Summary Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Current Balance */}
          <Card className="border border-border shadow-sm bg-muted/30">
            <CardHeader className="pb-3">
              <CardDescription className="flex items-center gap-2 text-muted-foreground font-medium">
                <Wallet className="h-4 w-4" />
                Current Balance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">
                {formatCurrency(wallet.balance)}
              </div>
              <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3" />
                <span>Active Account</span>
              </div>
            </CardContent>
          </Card>

          {/* Account Status */}
          <Card
            className={cn(
              "border border-border shadow-sm rounded-xl",
              wallet.status === "Active" && "bg-green-50 dark:bg-green-900/10",
              wallet.status === "Blocked" && "bg-red-50 dark:bg-red-900/10",
              wallet.status === "Suspended" &&
                "bg-yellow-50 dark:bg-yellow-900/10",
              !["Active", "Blocked", "Suspended"].includes(wallet.status) &&
                "bg-muted/30"
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
                    : "text-muted-foreground"
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
                    : "text-foreground"
                )}
              >
                {wallet.status}
              </div>
              <div
                className={cn(
                  "flex items-center gap-1 mt-2 text-xs",
                  wallet.status === "Active"
                    ? "text-green-600 dark:text-green-400"
                    : wallet.status === "Blocked"
                    ? "text-red-600 dark:text-red-400"
                    : wallet.status === "Suspended"
                    ? "text-yellow-600 dark:text-yellow-400"
                    : "text-muted-foreground"
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
          <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
            <User className="h-4 w-4" />
            Personal Information
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
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
        <div className="grid md:grid-cols-2 gap-4">
          <DateInfo label="Created At" date={wallet.createdAt} />
          <DateInfo label="Last Updated" date={wallet.updatedAt} />
        </div>
      </CardContent>
    </Card>
  );
}
