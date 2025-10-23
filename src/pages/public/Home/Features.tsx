import { Card, CardContent } from "@/components/ui/card";
import {
  CreditCard,
  Shield,
  Zap,
  Wallet,
  TrendingUp,
  Bell,
} from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: Zap,
    title: "Instant Transfers",
    description:
      "Send and receive money instantly with zero fees to anyone, anywhere.",
  },
  {
    icon: Shield,
    title: "Bank-Level Security",
    description:
      "Your money is protected with military-grade encryption and biometric authentication.",
  },
  {
    icon: CreditCard,
    title: "Virtual Cards",
    description:
      "Create unlimited virtual cards for secure online shopping and subscriptions.",
  },
  {
    icon: Wallet,
    title: "Smart Budgeting",
    description:
      "Automatically categorize spending and get insights to reach your financial goals.",
  },
  {
    icon: TrendingUp,
    title: "Investment Options",
    description:
      "Grow your wealth with easy access to stocks, bonds, and savings accounts.",
  },
  {
    icon: Bell,
    title: "Real-Time Alerts",
    description:
      "Stay informed with instant notifications for every transaction and account activity.",
  },
];

export default function Features() {
  return (
    <section className="relative py-20 bg-linear-to-b from-background via-background/90 to-secondary/20">
      {/* Decorative gradient glows */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 blur-3xl rounded-full opacity-50" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-secondary/10 blur-3xl rounded-full opacity-40" />

      <div className="container mx-auto relative px-4">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Powerful & Simple
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-primary mb-4">
            Everything You Need in One App
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Experience seamless digital banking — manage, save, invest, and grow
            your money, all in one secure platform.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <Card className="group relative border-2 border-transparent bg-background/60 backdrop-blur-sm shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 rounded-2xl">
                <CardContent className="p-8 text-center flex flex-col items-center">
                  <div className="relative mb-6">
                    {/* Glowing ring behind icon */}
                    <div className="absolute inset-0 blur-lg rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors" />
                    <div className="relative z-10 rounded-full bg-primary/10 p-4 ring-1 ring-primary/20">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
