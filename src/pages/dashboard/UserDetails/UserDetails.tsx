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
    <Card className="border border-border shadow-lg bg-card">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-3xl font-bold tracking-tight text-primary">
            User Profile
          </CardTitle>
          <CardDescription className="text-muted-foreground mt-1">
            Complete information and account details
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="space-y-8">
        {/* Header Banner */}
        <div className="relative h-36 rounded-2xl overflow-hidden bg-accent shadow-md">
          <div className="absolute top-5 right-5">
            {user.isVerified ? (
              <Badge
                variant="secondary"
                className="flex items-center gap-1 font-semibold text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800 bg-green-100 dark:bg-green-900/30"
              >
                <CheckCircle2 className="h-3.5 w-3.5" />
                Verified
              </Badge>
            ) : (
              <Badge
                variant="secondary"
                className="flex items-center gap-1 font-semibold text-yellow-700 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-800 bg-yellow-100 dark:bg-yellow-900/30"
              >
                <XCircle className="h-3.5 w-3.5" />
                Unverified
              </Badge>
            )}
          </div>
        </div>

        {/* Profile Info */}
        <div className="flex items-start gap-4 -mt-20 relative z-10">
          <Avatar className="h-24 w-24 ring-2 ring-primary">
            <AvatarImage
              src={user.profilePicture || undefined}
              alt={user.name}
            />
            <AvatarFallback className="text-2xl font-semibold bg-muted text-muted-foreground">
              {createInitials(user.name)}
            </AvatarFallback>
          </Avatar>

          <div className="pt-6">
            <h2 className="text-4xl font-bold text-foreground">{user.name}</h2>
            <Badge variant="outline" className={getRoleBadge(user.role)}>
              {user.role}
            </Badge>
          </div>
        </div>

        <Separator />

        {/* Summary Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Verification Card */}
          <Card
            className={cn(
              "border border-border shadow-sm rounded-xl",
              user.isVerified
                ? "bg-green-50 dark:bg-green-900/10"
                : "bg-yellow-50 dark:bg-yellow-900/10"
            )}
          >
            <CardHeader className="pb-3">
              <CardDescription
                className={cn(
                  "flex items-center gap-2 text-sm font-medium",
                  user.isVerified
                    ? "text-green-700 dark:text-green-400"
                    : "text-yellow-700 dark:text-yellow-400"
                )}
              >
                <Shield className="h-4 w-4" />
                Verification Status
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div
                className={cn(
                  "text-3xl font-bold",
                  user.isVerified
                    ? "text-green-900 dark:text-green-100"
                    : "text-yellow-900 dark:text-yellow-100"
                )}
              >
                {user.isVerified ? "Verified" : "Unverified"}
              </div>
              <div
                className={cn(
                  "flex items-center gap-1 mt-2 text-xs",
                  user.isVerified
                    ? "text-green-600 dark:text-green-400"
                    : "text-yellow-600 dark:text-yellow-400"
                )}
              >
                <CheckCircle2 className="h-3 w-3" />
                <span>
                  {user.isVerified
                    ? "Identity Confirmed"
                    : "Pending Verification"}
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Date of Birth Card */}
          <Card className="border border-border shadow-sm bg-muted/30">
            <CardHeader className="pb-3">
              <CardDescription className="flex items-center gap-2 text-muted-foreground font-medium">
                <Calendar className="h-4 w-4" />
                Date of Birth
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">
                {format(new Date(user.dateOfBirth), "PP")}
              </div>
              <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                <span>
                  {calculateAge(user.dateOfBirth as string)} years old
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
            <User className="h-4 w-4" />
            Contact Information
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            <InfoCard icon={Mail} label="Email Address" value={user.email} />
            <InfoCard icon={Phone} label="Phone Number" value={user.phone} />
            <InfoCard
              icon={CreditCard}
              label="National ID"
              value={user.nid}
              mono
            />
            <InfoCard icon={Shield} label="User Role" value={user.role} />
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
