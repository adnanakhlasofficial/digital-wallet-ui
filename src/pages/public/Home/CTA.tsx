import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl rounded-3xl bg-card p-10 md:p-16 shadow-xl text-center text-card-foreground">
          {/* Heading */}
          <h2 className="mb-6 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            Take Control of Your Finances Today
          </h2>

          {/* Subtext */}
          <p className="mb-10 text-lg md:text-xl text-card-foreground/80">
            Join millions who trust us to manage their money smarter. Sign up
            now and enjoy the first month of Premium free.
          </p>

          {/* Input + Button */}
          <div className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 text-card-foreground placeholder:text-card-foreground/60 border border-border focus:ring-2 focus:ring-primary"
            />
            <Button
              size="lg"
              variant="secondary"
              className="gap-2 whitespace-nowrap shrink-0"
            >
              Get Started <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Disclaimer */}
          <p className="mt-4 text-sm text-primary">
            No credit card required. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
