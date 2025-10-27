import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Check } from "lucide-react";
import { useState } from "react";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for individuals and small projects",
      monthlyPrice: 9,
      annualPrice: 90,
      features: [
        "Up to 5 projects",
        "10 GB storage",
        "Basic analytics",
        "Email support",
        "Standard security",
        "API access",
      ],
      popular: false,
    },
    {
      name: "Professional",
      description: "For growing teams and businesses",
      monthlyPrice: 29,
      annualPrice: 290,
      features: [
        "Unlimited projects",
        "100 GB storage",
        "Advanced analytics",
        "Priority support",
        "Enhanced security",
        "API access",
        "Custom integrations",
        "Team collaboration",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For large organizations with advanced needs",
      monthlyPrice: 99,
      annualPrice: 990,
      features: [
        "Everything in Professional",
        "Unlimited storage",
        "Dedicated support",
        "Enterprise security",
        "SLA guarantee",
        "Custom contracts",
        "Advanced permissions",
        "Audit logs",
      ],
      popular: false,
    },
  ];

  const getPrice = (plan: (typeof plans)[0]) => {
    return isAnnual ? plan.annualPrice : plan.monthlyPrice;
  };

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="space-y-4 text-center">
            <Badge variant="secondary" className="mb-2">
              Pricing
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight">
              Simple, Transparent Pricing
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
              Choose the perfect plan for your needs. Upgrade or downgrade
              anytime.
            </p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <Label
              htmlFor="billing-toggle"
              className={!isAnnual ? "font-semibold" : ""}
            >
              Monthly
            </Label>
            <Switch
              id="billing-toggle"
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
            />
            <Label
              htmlFor="billing-toggle"
              className={isAnnual ? "font-semibold" : ""}
            >
              Annual
            </Label>
            {isAnnual && (
              <Badge variant="secondary" className="ml-2">
                Save 17%
              </Badge>
            )}
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative flex flex-col ${
                  plan.popular ? "border-primary scale-105 shadow-lg" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 right-0 left-0 flex justify-center">
                    <Badge className="px-4 py-1">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="pb-8 text-center">
                  <CardTitle className="mb-2 text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-6">
                    <span className="text-4xl font-bold">
                      ${getPrice(plan)}
                    </span>
                    <span className="text-muted-foreground">
                      /{isAnnual ? "year" : "month"}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <Check className="text-primary mt-0.5 h-5 w-5 shrink-0" />
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

          <Card className="bg-muted/50">
            <CardHeader className="text-center">
              <CardTitle>All Plans Include</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 text-center sm:grid-cols-2 md:grid-cols-4">
                <div>
                  <div className="mb-1 font-semibold">99.9% Uptime</div>
                  <div className="text-muted-foreground text-sm">
                    Guaranteed availability
                  </div>
                </div>
                <div>
                  <div className="mb-1 font-semibold">Free Updates</div>
                  <div className="text-muted-foreground text-sm">
                    Always latest version
                  </div>
                </div>
                <div>
                  <div className="mb-1 font-semibold">Cancel Anytime</div>
                  <div className="text-muted-foreground text-sm">
                    No long-term contracts
                  </div>
                </div>
                <div>
                  <div className="mb-1 font-semibold">Money Back</div>
                  <div className="text-muted-foreground text-sm">
                    30-day guarantee
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
