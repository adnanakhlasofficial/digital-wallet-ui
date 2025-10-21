import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lock, Fingerprint, Eye } from "lucide-react";

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
    <section>
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Your Security is Our Priority
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Advanced security measures to protect your money and personal
            information.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {securityFeatures.map((feature, index) => (
            <Card
              key={index}
              className="border-2 transition-all hover:border-primary"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-primary/10 p-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
