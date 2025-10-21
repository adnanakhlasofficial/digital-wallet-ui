import { Card, CardContent } from "@/components/ui/card";
import {
  CreditCard,
  Shield,
  Zap,
  Wallet,
  TrendingUp,
  Bell,
} from "lucide-react";

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
    <section className="bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything You Need in One App
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Powerful features designed to simplify your financial life and help
            you achieve your goals.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
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
