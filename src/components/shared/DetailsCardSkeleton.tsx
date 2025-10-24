import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

export default function DetailsCardSkeleton() {
  return (
    <Card className="border-border bg-card border shadow-lg">
      {/* Header */}
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle className="text-primary text-3xl font-bold tracking-tight">
            <Skeleton className="h-8 w-48 rounded" />
          </CardTitle>
          <CardDescription className="text-muted-foreground mt-2">
            <Skeleton className="h-4 w-72 rounded" />
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="space-y-8">
        {/* Header Banner */}
        <div className="bg-accent relative h-36 overflow-hidden rounded-2xl shadow-md">
          <div className="absolute top-5 right-5">
            <Skeleton className="h-6 w-20 rounded-full" />
          </div>
        </div>

        {/* Profile Info */}
        <div className="relative z-10 -mt-20 flex items-start gap-4">
          <Skeleton className="ring-primary h-24 w-24 rounded-full ring-2" />

          <div className="space-y-2 pt-6">
            <Skeleton className="h-8 w-48 rounded" />
            <Skeleton className="h-5 w-20 rounded-full" />
          </div>
        </div>

        <Separator />

        {/* Summary Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Current Balance */}
          <Card className="border-border bg-muted/30 border shadow-sm">
            <CardHeader className="pb-3">
              <CardDescription className="flex items-center gap-2 font-medium">
                <Skeleton className="h-4 w-32 rounded" />
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Skeleton className="h-8 w-32 rounded" />
              <Skeleton className="h-3 w-24 rounded" />
            </CardContent>
          </Card>

          {/* Account Status */}
          <Card className="border-border bg-muted/30 rounded-xl border shadow-sm">
            <CardHeader className="pb-3">
              <CardDescription className="flex items-center gap-2 font-medium">
                <Skeleton className="h-4 w-32 rounded" />
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Skeleton className="h-8 w-28 rounded" />
              <Skeleton className="h-3 w-24 rounded" />
            </CardContent>
          </Card>
        </div>

        {/* Personal Info */}
        <div className="space-y-4">
          <Skeleton className="h-4 w-48 rounded" />

          <div className="grid gap-4 md:grid-cols-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <Card
                key={i}
                className="border-border bg-muted/20 flex items-center justify-between border p-4 shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <Skeleton className="h-4 w-4 rounded" />
                  <Skeleton className="h-4 w-28 rounded" />
                </div>
                <Skeleton className="h-4 w-40 rounded" />
              </Card>
            ))}
          </div>
        </div>

        <Separator />

        {/* Dates */}
        <div className="grid gap-4 md:grid-cols-2">
          {[1, 2].map((i) => (
            <Card
              key={i}
              className="border-border bg-muted/20 flex flex-col justify-between border p-4 shadow-sm"
            >
              <Skeleton className="mb-2 h-4 w-32 rounded" />
              <Skeleton className="h-4 w-40 rounded" />
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
