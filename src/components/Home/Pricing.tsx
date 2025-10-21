import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$0",
    period: "/month",
    description: "Perfect for getting started",
    features: [
      "Free checking account",
      "Debit card included",
      "Mobile deposits",
      "Bill pay",
      "Basic budgeting tools",
    ],
    popular: false,
  },
  {
    name: "Premium",
    price: "$9.99",
    period: "/month",
    description: "For power users",
    features: [
      "Everything in Basic",
      "No ATM fees worldwide",
      "Priority customer support",
      "Advanced analytics",
      "Investment accounts",
      "Cash back rewards",
    ],
    popular: true,
  },
  {
    name: "Business",
    price: "$29.99",
    period: "/month",
    description: "Built for businesses",
    features: [
      "Everything in Premium",
      "Multi-user access",
      "Invoicing tools",
      "Expense management",
      "Accounting integrations",
      "Dedicated account manager",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3 grow">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative transition-all hover:shadow-xl flex flex-col h-full${
                plan.popular ? "border-primary shadow-lg" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge>Most Popular</Badge>
                </div>
              )}
              <CardHeader className="text-center">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </CardHeader>
              <CardContent className="grow">
                <ul className="space-y-3 grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className="h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
