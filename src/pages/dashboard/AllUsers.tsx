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
import { useGetAllUsersQuery } from "@/redux/features/user/user.api";
import type { IUser } from "@/types";
import { format } from "date-fns";
import { CheckCircle2, Eye, Shield, User, XCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function AllUsers() {
  const { data, isLoading } = useGetAllUsersQuery({});

  if (isLoading) return <LoadingMotion />;

  const users = data as IUser[];
  const verifiedUsers = users.filter((u) => u.isVerified).length;

  return (
    <Card className="w-full border border-border shadow-md bg-card p-0 gap-0">
      <CardHeader className="border-b border-border bg-muted/50 p-6 m-0 block">
        <div className="flex items-start gap-3">
          <div className="p-2.5 rounded-lg bg-primary/10 shadow-sm">
            <User className="h-5 w-5 text-primary" />
          </div>
          <div>
            <CardTitle className="text-2xl text-foreground">
              User Management
            </CardTitle>
            <CardDescription className="text-muted-foreground mt-1">
              {verifiedUsers} verified users • Total: {users.length} users
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/60 hover:bg-muted/60 border-border">
              <TableHead className="font-semibold text-foreground pl-6 min-w-50">
                Name & Role
              </TableHead>
              <TableHead className="font-semibold text-foreground">
                Contact
              </TableHead>
              <TableHead className="font-semibold text-foreground">
                NID
              </TableHead>
              <TableHead className="font-semibold text-foreground">
                DOB
              </TableHead>
              <TableHead className="font-semibold text-foreground">
                Verified
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
            {users.map((user, index) => (
              <TableRow
                key={index}
                className="border-border hover:bg-muted transition-colors"
              >
                {/* 👤 Name + Role */}
                <TableCell className="font-medium text-foreground pl-6">
                  <div className="flex items-center gap-3">
                    <img
                      src={
                        user.profilePicture ||
                        `https://api.dicebear.com/9.x/initials/svg?seed=${user.name}`
                      }
                      alt={user.name}
                      className="h-9 w-9 rounded-full border border-border object-cover"
                    />
                    <div>
                      <p>{user.name}</p>
                      <Badge
                        className={cn(
                          "px-2 py-0.5 text-xs font-medium border rounded-full",
                          user.role === "Admin" &&
                            "bg-primary/15 text-primary border-primary/30",
                          user.role === "User" &&
                            "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300",
                          user.role === "Agent" &&
                            "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300"
                        )}
                      >
                        {user.role}
                      </Badge>
                    </div>
                  </div>
                </TableCell>

                {/* 📞 Contact */}
                <TableCell>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm text-foreground">
                      {user.email}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {user.phone}
                    </span>
                  </div>
                </TableCell>

                {/* 🪪 NID */}
                <TableCell className="text-sm text-foreground">
                  {user.nid || "—"}
                </TableCell>

                {/* 🎂 Date of Birth */}
                <TableCell className="text-sm text-muted-foreground">
                  {format(user.dateOfBirth, "PP")}
                </TableCell>

                {/* ✅ Verified */}
                <TableCell>
                  {user.isVerified ? (
                    <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-300 border">
                      <CheckCircle2 className="h-4 w-4 mr-1" />
                      Verified
                    </Badge>
                  ) : (
                    <Badge className="bg-rose-100 text-rose-800 dark:bg-rose-900/20 dark:text-rose-300 border">
                      <XCircle className="h-4 w-4 mr-1" />
                      Unverified
                    </Badge>
                  )}
                </TableCell>

                {/* 📅 Created */}
                <TableCell className="text-sm text-muted-foreground">
                  {format(user.createdAt, "PP")}
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
                      <Link to={`/dashboard/users/${user.email}`}>
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-border text-rose-600 hover:bg-rose-100/70 dark:hover:bg-rose-900/20"
                    >
                      <Shield className="h-4 w-4 mr-1" />
                      Restrict
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
