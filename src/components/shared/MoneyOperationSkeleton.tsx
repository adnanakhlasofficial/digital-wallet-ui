import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function MoneyOperationSkeleton() {
  return (
    <div className="bg-background flex h-full items-center justify-center">
      <Card className="border-border bg-card text-card-foreground w-full max-w-md rounded-2xl border shadow-md">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="flex justify-center">
            <Skeleton className="h-6 w-40" />
          </CardTitle>
          <CardDescription>
            <Skeleton className="mx-auto h-4 w-64" />
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-5">
          {/* Phone Number Field Skeleton */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-24" /> {/* label */}
            <Skeleton className="h-11 w-full rounded-md" /> {/* input */}
          </div>

          {/* Amount Field Skeleton */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-20" /> {/* label */}
            <Skeleton className="h-11 w-full rounded-md" /> {/* input */}
          </div>

          {/* Submit Button Skeleton */}
          <Skeleton className="h-11 w-full rounded-md" />
        </CardContent>
      </Card>
    </div>
  );
}
