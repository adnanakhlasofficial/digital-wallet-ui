import LoadingMotion from "@/components/shared/LoadingMotion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useUserMeQuery } from "@/redux/features/auth/auth.api";
import { useGetWalletMeQuery } from "@/redux/features/wallet/wallet.api";
import { createInitials } from "@/utils/createInitials";
import { formatCurrency } from "@/utils/formatCurrency";
import { getRoleBadge } from "@/utils/getRoleBadge";
import { getWalletStatus } from "@/utils/getWalletStatus";
import { format } from "date-fns";
import {
  Calendar,
  CheckCircle2,
  CreditCard,
  Mail,
  MapPin,
  Phone,
  Shield,
  TrendingUp,
  Wallet,
  XCircle,
} from "lucide-react";

export default function Profile() {
  const { data: user, isLoading: userLoading } = useUserMeQuery({});
  const { data: wallet, isLoading: walletLoading } = useGetWalletMeQuery({});

  if (userLoading || walletLoading) return <LoadingMotion />;

  return (
    <div className="space-y-6">
      {/* User Card */}
      <Card className="border-border shadow-sm">
        <CardHeader className="pb-4">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <Avatar className="border-muted h-24 w-24 border-4 shadow-md">
              <AvatarImage src={user.profilePicture} alt={user.name} />
              <AvatarFallback className="bg-muted text-foreground text-2xl font-semibold">
                {createInitials(user.name)}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1 space-y-2">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <CardTitle className="text-foreground text-3xl font-bold">
                  {user.name}
                </CardTitle>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className={getRoleBadge(user.role)}>
                    {user.role}
                  </Badge>
                  {user.isVerified ? (
                    <Badge
                      variant="default"
                      className="bg-emerald-600 text-xs hover:bg-emerald-700"
                    >
                      <CheckCircle2 className="mr-1 h-3 w-3" />
                      Verified
                    </Badge>
                  ) : (
                    <Badge
                      variant="outline"
                      className="border-amber-600 text-xs text-amber-700"
                    >
                      <XCircle className="mr-1 h-3 w-3" />
                      Unverified
                    </Badge>
                  )}
                </div>
              </div>
              <CardDescription className="text-muted-foreground text-base">
                Professional account holder
              </CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Personal Information */}
        <Card className="border-border shadow-sm lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-foreground flex items-center gap-2 text-xl font-semibold">
              <Shield className="text-muted-foreground h-5 w-5" />
              Personal Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: user.email,
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: user.phone,
                },
                {
                  icon: MapPin,
                  label: "Address",
                  value: user.address,
                },
                {
                  icon: Calendar,
                  label: "Date of Birth",
                  value: format(new Date(user.dateOfBirth), "MMMM dd, yyyy"),
                },
              ].map(({ icon: Icon, label, value }, i) => (
                <div
                  key={i}
                  className="border-border bg-card hover:bg-muted/40 flex items-start gap-3 rounded-lg border p-3 transition-colors"
                >
                  <Icon className="text-muted-foreground mt-0.5 h-5 w-5" />
                  <div className="min-w-0 flex-1">
                    <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
                      {label}
                    </p>
                    <p className="text-foreground truncate text-sm font-medium">
                      {value}
                    </p>
                  </div>
                </div>
              ))}

              <div className="border-border bg-card hover:bg-muted/40 flex items-start gap-3 rounded-lg border p-3 transition-colors sm:col-span-2">
                <CreditCard className="text-muted-foreground mt-0.5 h-5 w-5" />
                <div className="flex-1">
                  <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
                    National ID
                  </p>
                  <p className="text-foreground font-mono text-sm font-medium">
                    {user.nid}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Wallet Card */}
        <Card className="border-border shadow-sm">
          <CardHeader>
            <CardTitle className="text-foreground flex items-center gap-2 text-xl font-semibold">
              <Wallet className="text-muted-foreground h-5 w-5" />
              Wallet
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Wallet Balance */}
            <div className="border-border bg-card rounded-lg border p-6">
              <div className="mb-3 flex items-center gap-2">
                <TrendingUp className="text-muted-foreground h-4 w-4" />
                <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
                  Available Balance
                </p>
              </div>
              <p className="text-foreground mb-4 text-4xl font-bold tracking-tight">
                {formatCurrency(wallet.balance)}
              </p>
              <div
                className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold ${getWalletStatus(
                  wallet.status,
                )}`}
              >
                <span className="relative flex h-2 w-2">
                  <span
                    className={`absolute inline-flex h-full w-full animate-ping rounded-full ${
                      wallet.status === "Active"
                        ? "bg-emerald-500"
                        : wallet.status === "Suspended"
                          ? "bg-red-500"
                          : "bg-slate-500"
                    } opacity-75`}
                  ></span>
                  <span
                    className={`relative inline-flex h-2 w-2 rounded-full ${
                      wallet.status === "Active"
                        ? "bg-emerald-600"
                        : wallet.status === "Suspended"
                          ? "bg-red-600"
                          : "bg-slate-600"
                    }`}
                  ></span>
                </span>
                {wallet.status}
              </div>
            </div>

            {/* Quick Actions */}
            {/* <div className="border-border bg-card rounded-lg border p-4">
              <p className="text-muted-foreground mb-3 text-xs font-medium tracking-wide uppercase">
                Quick Actions
              </p>
              <div className="grid grid-cols-2 gap-2">
                <button className="border-border bg-background text-foreground hover:bg-muted/40 rounded-lg border px-3 py-2 text-xs font-medium transition-colors">
                  Add Funds
                </button>
                <button className="border-border bg-background text-foreground hover:bg-muted/40 rounded-lg border px-3 py-2 text-xs font-medium transition-colors">
                  Withdraw
                </button>
                <button className="border-border bg-background text-foreground hover:bg-muted/40 col-span-2 rounded-lg border px-3 py-2 text-xs font-medium transition-colors">
                  Transaction History
                </button>
              </div>
            </div> */}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
