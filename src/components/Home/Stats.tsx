import CountUp from "react-countup";
import { Card, CardContent } from "../ui/card";
import { motion } from "motion/react";

const stats = [
  { value: 500, label: "Active Users", suffix: "M+" },
  { value: 5000, label: "Transactions Processed", suffix: "B+" },
  { value: 150, label: "Countries Supported", suffix: "+" },
  { value: 99.9, label: "Uptime Guarantee", suffix: "%" },
];

export default function Stats() {
  return (
    <section className="relative py-16 bg-linear-to-br from-secondary/40 via-secondary/20 to-background border-t border-b border-border">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            Our Global Impact
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Delivering secure, reliable, and lightning-fast transactions
            worldwide.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="rounded-2xl bg-linear-to-br from-card via-secondary/10 to-background border border-border/60 shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300">
                <CardContent className="p-8 text-center space-y-2">
                  <div className="text-5xl md:text-6xl font-extrabold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent drop-shadow-sm">
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={2.2}
                      separator=","
                      decimals={stat.value % 1 !== 0 ? 1 : 0}
                    />
                    {stat.suffix}
                  </div>
                  <div className="text-sm font-medium tracking-wide text-foreground/80 uppercase">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative gradient blur */}
      <div className="absolute inset-x-0 -bottom-20 mx-auto h-40 w-2/3 bg-primary/20 blur-3xl pointer-events-none" />
    </section>
  );
}
