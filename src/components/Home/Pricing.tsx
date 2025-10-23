import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { motion } from "motion/react";

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
    <section className="relative py-20 bg-linear-to-b from-background via-background/90 to-secondary/20">
      {/* Decorative gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 blur-3xl rounded-full opacity-50" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-secondary/10 blur-3xl rounded-full opacity-40" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Flexible Plans
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
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
              <Card
                className={`relative flex flex-col h-full border-2 rounded-2xl transition-all duration-300 backdrop-blur-sm
                ${
                  plan.popular
                    ? "border-primary shadow-lg shadow-primary/20 scale-[1.02]"
                    : "border-border/40 hover:border-primary/30 hover:shadow-md"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="px-3 py-1 bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center">
                  <h3 className="text-2xl font-bold text-foreground">
                    {plan.name}
                  </h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </CardHeader>

                <CardContent className="grow">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="mt-auto">
                  <Button
                    className="w-full"
                    size="lg"
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Get Started
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
