import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-linear-to-br from-background via-secondary/10 to-background py-20 sm:py-28">
      {/* Decorative glowing gradients */}
      <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse opacity-70" />
      <div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/30 rounded-full blur-3xl animate-pulse opacity-70"
        style={{ animationDelay: "1.2s" }}
      />
      <div className="absolute inset-0 bg-grid border-border/10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 bg-primary rounded-full animate-ping" />
          Your Money, Simplified
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 leading-tight text-transparent bg-clip-text bg-linear-to-r from-primary to-primary/70 drop-shadow-md"
        >
          Mobile Banking
          <br />
          At Your Fingertips
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Manage your accounts, transfer money, and pay bills securely from
          anywhere. Experience fast, convenient, and reliable banking right on
          your phone.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button className="group px-8 w-60 h-12 py-6 gap-2 bg-primary text-primary-foreground text-lg font-semibold shadow-md hover:shadow-xl hover:scale-[1.03] transition-all">
            <Link to="/signup" className="flex items-center justify-center">
              Open Account
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>

          <Button
            variant="outline"
            className="group border-2 border-primary/40 px-8 w-60 h-12 py-6 gap-2 text-foreground hover:bg-primary/10 hover:border-primary/60 transition-all"
            asChild
          >
            <Link to="/demo" className="flex items-center justify-center">
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              Watch Demo
            </Link>
          </Button>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto text-left"
        >
          {[
            {
              title: "Instant Transfers",
              desc: "Send money anytime, anywhere.",
            },
            {
              title: "Secure Banking",
              desc: "Advanced encryption keeps your money safe.",
            },
            {
              title: "24/7 Support",
              desc: "Help is just a tap away.",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 bg-card/30 backdrop-blur-md p-4 rounded-xl border border-border/60 shadow-sm hover:shadow-md transition-shadow"
            >
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-snug">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom glow */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[70%] h-40 bg-primary/25 blur-[100px] rounded-full pointer-events-none" />
    </section>
  );
}
