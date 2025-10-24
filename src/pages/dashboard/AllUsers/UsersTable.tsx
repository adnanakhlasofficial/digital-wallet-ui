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
import { useGetAllUsersQuery } from "@/redux/features/user/user.api";
import type { IUser } from "@/types";
import { User } from "lucide-react";
import UserRow from "./UserRow";

export default function UsersTable() {
  const { data, isLoading } = useGetAllUsersQuery({});

  if (isLoading) return <LoadingMotion />;

  const users = data as IUser[];
  const verifiedUsers = users.filter((u) => u.isVerified).length;

  return (
    <Card className="border-border bg-card w-full gap-0 border p-0 shadow-md">
      <CardHeader className="border-border bg-muted/50 m-0 block rounded-tl-xl rounded-tr-xl border-b p-6">
        <div className="flex items-start gap-3">
          <div className="bg-primary/10 rounded-lg p-2.5 shadow-sm">
            <User className="text-primary h-5 w-5" />
          </div>
          <div>
            <CardTitle className="text-foreground text-2xl">
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
              <TableHead className="text-foreground min-w-50 pl-6 font-semibold">
                Name & Role
              </TableHead>
              <TableHead className="text-foreground font-semibold">
                Contact
              </TableHead>
              <TableHead className="text-foreground font-semibold">
                NID
              </TableHead>
              <TableHead className="text-foreground font-semibold">
                DOB
              </TableHead>
              <TableHead className="text-foreground font-semibold">
                Verified
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
            {users.map((user) => (
              <UserRow key={user.email} user={user} />
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
