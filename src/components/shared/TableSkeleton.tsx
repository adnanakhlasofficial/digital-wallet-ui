import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";

interface Props {
  rows?: number;
}

export default function TableSkeleton({ rows = 6 }: Props) {
  return (
    <Card className="border-border bg-card h-fit w-full gap-0 border p-0 shadow-md">
      <CardHeader className="border-border bg-muted/50 m-0 block rounded-tl-xl rounded-tr-xl border-b p-6">
        <div className="flex items-start gap-3">
          <div className="rounded-lg p-2.5">
            <Skeleton className="h-5 w-5 rounded" />
          </div>
          <div className="flex-1">
            <CardTitle className="text-foreground text-2xl">
              <Skeleton className="h-8 w-44 rounded" />
            </CardTitle>
            <CardDescription className="text-muted-foreground mt-1">
              <Skeleton className="h-4 w-72 rounded" />
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/60 hover:bg-muted/60 border-border">
              <TableCell className="text-foreground pl-6 text-left font-semibold">
                <Skeleton className="h-6 w-28 rounded" />
              </TableCell>
              <TableCell className="text-foreground text-left font-semibold">
                <Skeleton className="h-6 w-20 rounded" />
              </TableCell>
              <TableCell className="text-foreground text-left font-semibold">
                <Skeleton className="h-6 w-32 rounded" />
              </TableCell>
              <TableCell className="text-foreground text-left font-semibold">
                <Skeleton className="h-6 w-32 rounded" />
              </TableCell>
              <TableCell className="text-foreground text-left font-semibold">
                <Skeleton className="h-6 w-20 rounded" />
              </TableCell>
              <TableCell className="text-foreground text-left font-semibold">
                <Skeleton className="h-6 w-16 rounded" />
              </TableCell>
              <TableCell className="text-foreground text-left font-semibold">
                <Skeleton className="h-6 w-20 rounded" />
              </TableCell>
              <TableCell className="text-foreground text-left font-semibold">
                <Skeleton className="h-6 w-20 rounded" />
              </TableCell>
              <TableCell className="text-foreground pr-6 text-right font-semibold">
                <Skeleton className="h-6 w-24 rounded" />
              </TableCell>
            </TableRow>
          </TableHeader>

          <TableBody>
            {Array.from({ length: rows }).map((_, i) => (
              <TableRow key={i} className="border-border hover:bg-muted/40">
                <TableCell className="pl-6">
                  <Skeleton className="h-8 w-32 rounded" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-8 w-20 rounded" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-8 w-28 rounded" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-8 w-28 rounded" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-8 w-16 rounded" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-8 w-16 rounded" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-8 w-16 rounded" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-8 w-20 rounded" />
                </TableCell>
                <TableCell className="pr-6 text-right">
                  <Skeleton className="h-8 w-24 rounded" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
