import { CardContent } from "@/components/ui/card";
import CountUp from "react-countup";
import { motion } from "motion/react";
import SectionHeader from "@/components/shared/SectionHeader";

const stats = [
  { value: 500, label: "Active Users", suffix: "M+" },
  { value: 5000, label: "Transactions Processed", suffix: "B+" },
  { value: 150, label: "Countries Supported", suffix: "+" },
  { value: 99.9, label: "Uptime Guarantee", suffix: "%" },
];

export default function StatsAbout() {
  return (
    <section>
      <SectionHeader
        title="Our Impact in Numbers"
        subtitle="Digital Wallet is trusted worldwide. These numbers reflect the trust and satisfaction of millions of users who manage their finances with us."
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
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="rounded-2xl shadow-md hover:shadow-lg transition-shadow bg-card"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <CardContent className="p-8 text-center">
                <div className="mb-2 text-4xl font-bold md:text-5xl text-primary">
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    separator=","
                    decimals={stat.value % 1 !== 0 ? 1 : 0}
                  />
                  {stat.suffix}
                </div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </CardContent>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
