import DateInfo from "@/components/shared/DateInfo";
import InfoCard from "@/components/shared/InfoCard";
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
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useGetSingleUserQuery } from "@/redux/features/user/user.api";
import { calculateAge } from "@/utils/calculateAge";
import { createInitials } from "@/utils/createInitials";
import { getRoleBadge } from "@/utils/getRoleBadge";
import { format } from "date-fns";
import {
  Calendar,
  CheckCircle2,
  CreditCard,
  Mail,
  Phone,
  Shield,
  User,
  XCircle,
} from "lucide-react";
import { useParams } from "react-router-dom";

export function UserDetails() {
  const params = useParams();
  const { data: user, isLoading } = useGetSingleUserQuery(params);

  if (isLoading) return <LoadingMotion />;

  return (
    <Card className="border border-border shadow-xl bg-card">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-3xl font-bold tracking-tight bg-linear-to-r from-slate-900 to-slate-600 dark:from-slate-100 dark:to-slate-400 bg-clip-text text-transparent">
            User Profile
          </CardTitle>
          <CardDescription className="text-muted-foreground mt-1">
            Complete information and account details
          </CardDescription>
        </div>

        {/* User dropdown menu */}
        {/*
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="h-9 w-9">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Edit Profile</DropdownMenuItem>
            <DropdownMenuItem>View Activity</DropdownMenuItem>
            <DropdownMenuItem>Export Data</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600">
              Suspend Account
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
         */}
      </CardHeader>

      <CardContent className="space-y-8">
        {/* Header Banner */}
        <div className="relative h-36 rounded-2xl overflow-hidden bg-linear-to-r from-primary/80 to-primary/60 dark:from-primary/70 dark:to-primary/50 shadow-lg">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#ffffff05_1px,transparent_1px),linear-gradient(225deg,#ffffff05_1px,transparent_1px)] bg-size-[32px_32px]" />

          <div className="absolute top-5 right-5">
            {user.isVerified ? (
              <Badge className="px-3 py-1 rounded-full shadow-md text-sm font-semibold bg-emerald-100 text-emerald-800 border-emerald-200">
                <CheckCircle2 className="h-3.5 w-3.5 mr-1" />
                Verified
              </Badge>
            ) : (
              <Badge className="px-3 py-1 rounded-full shadow-md text-sm font-semibold bg-amber-100 text-amber-800 border-amber-200">
                <XCircle className="h-3.5 w-3.5 mr-1" />
                Unverified
              </Badge>
            )}
          </div>

          <div className="absolute inset-0 bg-black/10 dark:bg-black/20 mix-blend-overlay pointer-events-none" />
        </div>

        {/* Profile Info */}
        <div className="flex items-start gap-4 -mt-20 relative z-10">
          <Avatar className="h-24 w-24 ring-primary ring-2">
            <AvatarImage
              src={user.profilePicture || undefined}
              alt={user.name}
            />
            <AvatarFallback className="text-2xl font-semibold bg-primary-foreground">
              {createInitials(user.name)}
            </AvatarFallback>
          </Avatar>

          <div className="pt-6">
            <h2 className="text-4xl font-bold">{user.name}</h2>
            <Badge variant="outline" className={getRoleBadge(user.role)}>
              {user.role}
            </Badge>
          </div>
        </div>

        <Separator />

        {/* Summary Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card
            className={cn(
              "border border-border shadow-md rounded-xl",
              user.isVerified
                ? "bg-emerald-50 dark:bg-emerald-900/20"
                : "bg-amber-50 dark:bg-amber-900/20"
            )}
          >
            <CardHeader className="pb-3">
              <CardDescription
                className={cn(
                  "flex items-center gap-2 text-sm font-medium",
                  user.isVerified
                    ? "text-emerald-700 dark:text-emerald-400"
                    : "text-amber-700 dark:text-amber-400"
                )}
              >
                <CheckCircle2 className="h-4 w-4" />
                Verification Status
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div
                className={cn(
                  "text-3xl font-bold",
                  user.isVerified
                    ? "text-emerald-900 dark:text-emerald-100"
                    : "text-amber-900 dark:text-amber-100"
                )}
              >
                {user.isVerified ? "Verified" : "Unverified"}
              </div>
              <div
                className={cn(
                  "flex items-center gap-1 mt-2 text-xs",
                  user.isVerified
                    ? "text-emerald-600 dark:text-emerald-400"
                    : "text-amber-600 dark:text-amber-400"
                )}
              >
                <Shield className="h-3 w-3" />
                <span>
                  {user.isVerified
                    ? "Identity Confirmed"
                    : "Pending Verification"}
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-linear-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200/60 dark:border-blue-900/30">
            <CardHeader className="pb-3">
              <CardDescription className="flex items-center gap-2 text-blue-700 dark:text-blue-400 font-medium">
                <Calendar className="h-4 w-4" />
                Date of Birth
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-900 dark:text-blue-100">
                {format(new Date(user.dateOfBirth), "PP")}
              </div>
              <div className="flex items-center gap-1 mt-2 text-xs text-blue-600 dark:text-blue-500">
                <span>
                  {calculateAge(user.dateOfBirth as string)} years old
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <User className="h-4 w-4" />
            Contact Information
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            <InfoCard
              icon={Mail}
              label="Email Address"
              value={user.email}
              color="blue"
            />
            <InfoCard
              icon={Phone}
              label="Phone Number"
              value={user.phone}
              color="teal"
            />
            <InfoCard
              icon={CreditCard}
              label="National ID"
              value={user.nid}
              color="slate"
              mono
            />
            <InfoCard
              icon={Shield}
              label="User Role"
              value={user.role}
              color="amber"
            />
          </div>
        </div>

        <Separator />

        {/* Dates */}
        <div className="grid md:grid-cols-2 gap-4">
          <DateInfo label="Account Created" date={user.createdAt as string} />
          <DateInfo label="Last Updated" date={user.updatedAt as string} />
        </div>
      </CardContent>
    </Card>
  );
}
