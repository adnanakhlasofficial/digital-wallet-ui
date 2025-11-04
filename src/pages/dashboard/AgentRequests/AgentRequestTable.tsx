import TableSkeleton from "@/components/shared/TableSkeleton";
import { Badge } from "@/components/ui/badge";
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
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllAgentRequestsQuery } from "@/redux/features/agent/agent.api";
import type { IAgentRequest } from "@/types";
import { getAgentRequestStatus } from "@/utils/getAgentRequestStatus";
import { format } from "date-fns";
import { MessageSquare } from "lucide-react";
import { useState } from "react";
import AgentRequestActions from "./AgentRequestActions";
import { handleNextPage, handlePrevPage } from "@/utils/pagination";

export default function AgentRequestsTable() {
  const [queries, setQueries] = useState({ limit: 5, currentPage: 1, search: "" });
  const { data, isLoading } = useGetAllAgentRequestsQuery(queries);

  if (isLoading) return <TableSkeleton />;

  const requests = (data?.data as IAgentRequest[]) || [];
  const meta = data?.meta || {};

  const pagination = Array.from({ length: meta.totalPages }, (_, i) => i + 1);

  return (
    <Card className="border-border bg-card h-fit w-full gap-0 border p-0 shadow-md">
      <CardHeader className="border-border bg-muted/50 m-0 block rounded-tl-xl rounded-tr-xl border-b p-6">
        <div className="flex items-start gap-3">
          <div className="bg-primary/10 rounded-lg p-2.5 shadow-sm">
            <MessageSquare className="text-primary h-5 w-5" />
          </div>
          <div>
            <CardTitle className="text-foreground text-2xl">
              Agent Requests
            </CardTitle>
            <CardDescription className="text-muted-foreground mt-1">
              Total: {requests?.length} requests
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/60 hover:bg-muted/60 border-border">
              <TableHead className="text-foreground pl-6 font-semibold">
                Email
              </TableHead>
              <TableHead className="text-foreground font-semibold">
                Message
              </TableHead>
              <TableHead className="text-foreground font-semibold">
                Status
              </TableHead>
              <TableHead className="text-foreground text-right font-semibold">
                Date
              </TableHead>
              <TableHead className="text-foreground pr-6 text-right font-semibold">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {requests?.map((req) => (
              <TableRow
                key={req._id.toString()}
                className="border-border hover:bg-muted/50 transition-colors"
              >
                <TableCell className="text-foreground pl-6 text-sm">
                  {req.email}
                </TableCell>

                <TableCell className="text-muted-foreground max-w-[300px] truncate text-sm">
                  {req.message}
                </TableCell>

                <TableCell>
                  <Badge className={getAgentRequestStatus(req.status)}>
                    {req.status}
                  </Badge>
                </TableCell>

                <TableCell className="text-muted-foreground text-right text-sm">
                  {format(new Date(req.createdAt), "PPp")}
                </TableCell>

                <TableCell className="w-fit space-x-2 pr-6 text-right">
                  <AgentRequestActions request={req} />
                </TableCell>
              </TableRow>
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
