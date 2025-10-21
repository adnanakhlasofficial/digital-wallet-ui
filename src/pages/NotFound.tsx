import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-2xl border-border shadow-lg">
        <CardContent className="pt-12 flex flex-col items-center text-center space-y-6">
          {/* Icon Section */}
          <div className="relative">
            <div className="absolute inset-0 blur-3xl opacity-30 bg-primary/40 rounded-full animate-pulse" />
            <AlertCircle
              className="w-32 h-32 text-primary relative z-10 animate-bounce"
              style={{ animationDuration: "3s" }}
            />
          </div>

          {/* Text Section */}
          <div className="space-y-2">
            <h1 className="text-8xl font-bold text-primary">404</h1>
            <h2 className="text-3xl font-semibold text-foreground">
              Page Not Found
            </h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              The page you're looking for seems to have wandered off into the
              digital void. Let's get you back on track.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              onClick={() => window.history.back()}
              variant="outline"
              size="lg"
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </Button>
            <Button
              onClick={() => (window.location.href = "/")}
              size="lg"
              className="gap-2"
            >
              <Home className="w-4 h-4" />
              Return Home
            </Button>
          </div>

          {/* Dots Animation */}
          <div className="pt-4 flex gap-2 justify-center">
            <div
              className="w-2 h-2 rounded-full bg-primary animate-pulse"
              style={{ animationDelay: "0s" }}
            />
            <div
              className="w-2 h-2 rounded-full bg-secondary animate-pulse"
              style={{ animationDelay: "0.2s" }}
            />
            <div
              className="w-2 h-2 rounded-full bg-accent animate-pulse"
              style={{ animationDelay: "0.4s" }}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
