import TableSkeleton from "@/components/shared/TableSkeleton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
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
import { useUserMeQuery } from "@/redux/features/auth/auth.api";
import { UserRoles } from "@/constraints/UserRoles";
import { useState } from "react";
import { handleNextPage, handlePrevPage } from "@/utils/pagination";

export default function UsersTable() {
  const [queries, setQueries] = useState({ limit: 5, currentPage: 1 });
  const { data: currentUser, isLoading: currentUserLoading } = useUserMeQuery(
    {},
  );
  const { data: AllUser, isLoading: allUsersLoading } =
    useGetAllUsersQuery(queries);

  if (allUsersLoading || currentUserLoading) return <TableSkeleton />;

  const meta = AllUser?.meta || {};

  const pagination = Array.from({ length: meta.totalPages }, (_, i) => i + 1);

  const users = (AllUser?.data as IUser[]) || [];
  const verifiedUsers = users?.filter((u) => u?.isVerified)?.length;

  return (
    <Card className="border-border bg-card h-fit w-full gap-0 border p-0 shadow-md">
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
              {verifiedUsers} verified users • Total: {users?.length} users
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
              {currentUser.role === UserRoles.ADMIN && (
                <>
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
                </>
              )}
              <TableHead className="text-foreground pr-6 text-center font-semibold">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {users.map((user) => (
              <UserRow key={user.email} user={user} currentUser={currentUser} />
            ))}
          </TableBody>
        </Table>

        <div className="border-border border-t px-6 py-4">
          <Pagination>
            <PaginationContent className="flex items-center justify-between gap-4">
              <PaginationItem
                onClick={() => handlePrevPage(queries, setQueries)}
              >
                <PaginationPrevious />
              </PaginationItem>

              {pagination.map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink isActive={page === meta.currentPage}>
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}

              <PaginationItem
                onClick={() =>
                  handleNextPage(queries, setQueries, meta.totalPages)
                }
              >
                <PaginationNext />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </CardContent>
    </Card>
  );
}
