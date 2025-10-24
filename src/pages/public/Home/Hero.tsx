import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="from-background via-secondary/10 to-background relative flex items-center justify-center overflow-hidden bg-linear-to-br py-14">
      {/* Decorative glowing gradients */}
      <div className="bg-primary/30 absolute top-1/4 left-1/3 h-72 w-72 animate-pulse rounded-full opacity-70 blur-3xl" />
      <div
        className="bg-accent/30 absolute right-1/4 bottom-1/4 h-72 w-72 animate-pulse rounded-full opacity-70 blur-3xl"
        style={{ animationDelay: "1.2s" }}
      />
      <div className="bg-grid border-border/10 pointer-events-none absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-primary/10 text-primary mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"
        >
          <span className="bg-primary h-2 w-2 animate-ping rounded-full" />
          Your Money, Simplified
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="from-primary to-primary mb-6 bg-linear-to-r bg-clip-text text-5xl leading-tight font-extrabold text-transparent drop-shadow-md sm:text-6xl md:text-7xl"
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
          className="text-muted-foreground mx-auto mb-12 max-w-2xl text-lg leading-relaxed sm:text-xl"
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
          className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button className="group bg-primary text-primary-foreground h-12 w-60 gap-2 px-8 py-6 text-lg font-semibold shadow-md transition-all hover:scale-[1.03] hover:shadow-xl">
            <Link to="/signup" className="flex items-center justify-center">
              Open Account
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>

          <Button
            variant="outline"
            className="group border-primary/40 text-foreground hover:bg-primary/10 hover:border-primary/60 h-12 w-60 gap-2 border-2 px-8 py-6 transition-all"
            asChild
          >
            <Link to="/demo" className="flex items-center justify-center">
              <Play className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              Watch Demo
            </Link>
          </Button>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mx-auto grid max-w-3xl grid-cols-1 gap-8 text-left sm:grid-cols-3"
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
              className="bg-card/30 border-border/60 flex items-start gap-3 rounded-xl border p-4 shadow-sm backdrop-blur-md transition-shadow hover:shadow-md"
            >
              <CheckCircle2 className="text-primary mt-1 h-6 w-6 shrink-0" />
              <div>
                <h3 className="text-foreground mb-1 font-semibold">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-snug">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom glow */}
      <div className="bg-primary/25 pointer-events-none absolute -bottom-20 left-1/2 h-40 w-[70%] -translate-x-1/2 rounded-full blur-[100px]" />
    </section>
  );
}
