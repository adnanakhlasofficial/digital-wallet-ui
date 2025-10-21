import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-background">
      {/* Decorative grid and glow */}
      <div className="absolute inset-0 bg-grid border-border/10 [linear-gradient(to_bottom,white,transparent)]" />

      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 py-16 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          Your Money, Simplified
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
          Mobile Banking
          <br />
          At Your Fingertips
        </h1>

        {/* Subtext */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Manage your accounts, transfer money, and pay bills securely from
          anywhere. Experience fast, convenient, and reliable banking right on
          your phone.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button className="px-8 w-60 h-12 py-6 gap-2" asChild>
            <Link to="/signup" className="flex items-center">
              Open Account
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>

          <Button
            variant="outline"
            className="border-2 px-8 w-60 h-12 py-6 gap-2"
            asChild
          >
            <Link to="/demo" className="flex items-center">
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Link>
          </Button>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto text-left">
          {[
            {
              title: "Instant Transfers",
              desc: "Send money anytime, anywhere",
            },
            {
              title: "Secure Banking",
              desc: "Advanced encryption keeps your money safe",
            },
            {
              title: "24/7 Support",
              desc: "Help is just a tap away",
            },
          ].map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
