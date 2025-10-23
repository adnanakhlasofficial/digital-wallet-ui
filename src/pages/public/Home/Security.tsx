import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, Fingerprint, Eye } from "lucide-react";
import { motion } from "motion/react";

const securityFeatures = [
  {
    icon: Shield,
    title: "FDIC Insured",
    description:
      "Your deposits are protected up to $250,000 by FDIC insurance.",
  },
  {
    icon: Lock,
    title: "256-bit Encryption",
    description: "Military-grade encryption keeps your data safe and secure.",
  },
  {
    icon: Fingerprint,
    title: "Biometric Auth",
    description: "Use Face ID or fingerprint to securely access your account.",
  },
  {
    icon: Eye,
    title: "Fraud Monitoring",
    description: "24/7 fraud detection and monitoring to protect your account.",
  },
];

export default function Security() {
  return (
    <section className="relative py-20 bg-linear-to-b from-background via-background/90 to-secondary/20">
      {/* Glowing background orbs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 blur-3xl rounded-full opacity-50" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-secondary/10 blur-3xl rounded-full opacity-40" />

      <div className="container mx-auto px-4 relative">
        <div className="mb-16 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Bank-Level Security
          </span>
          <h2 className="mb-4 text-4xl sm:text-5xl font-bold tracking-tight text-primary">
            Your Security is Our Priority
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Advanced security measures to protect your money and personal
            information.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              <Card className="border-2 border-border/40 bg-background/60 backdrop-blur-sm rounded-2xl text-center transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10">
                <CardContent className="p-8">
                  <div className="mb-4 flex justify-center relative">
                    <div className="absolute inset-0 blur-xl bg-primary/20 rounded-full opacity-60" />
                    <div className="relative z-10 bg-primary/10 p-4 rounded-full">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
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
