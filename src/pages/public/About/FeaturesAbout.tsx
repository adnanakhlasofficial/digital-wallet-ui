import SectionHeader from "@/components/shared/SectionHeader";
import { Shield, TrendingUp, Wallet, Zap } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: Zap,
    title: "Instant Transfers",
    description: "Send and receive money instantly with zero fees.",
  },
  {
    icon: Shield,
    title: "Bank-Level Security",
    description: "Protect your money with advanced encryption.",
  },
  {
    icon: Wallet,
    title: "Smart Budgeting",
    description: "Track your spending and save more efficiently.",
  },
  {
    icon: TrendingUp,
    title: "Investment Options",
    description: "Grow your wealth with easy-to-use tools.",
  },
];

export default function FeaturesAbout() {
  return (
    <section>
      <SectionHeader
        title="What Makes Us Unique"
        subtitle="Powerful features designed to simplify your financial life."
      />
      <motion.div
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-all"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-primary/10 p-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
