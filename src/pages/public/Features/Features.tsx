import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Zap,
  Shield,
  Smartphone,
  BarChart3,
  Cloud,
  Lock,
  RefreshCw,
  Users,
  MessageSquare,
  Settings,
  Globe,
  Sparkles,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Experience blazing fast performance with our optimized infrastructure and smart caching.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Bank-grade encryption and security measures to keep your data safe and compliant.",
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description:
        "Seamless experience across all devices with our responsive design and native apps.",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description:
        "Gain deep insights with comprehensive analytics and customizable dashboards.",
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description:
        "Connect with your favorite cloud services and tools effortlessly.",
    },
    {
      icon: Lock,
      title: "Privacy First",
      description:
        "Your data privacy is our priority. Full control over your information.",
    },
    {
      icon: RefreshCw,
      title: "Auto Updates",
      description:
        "Always stay current with automatic updates and new features.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Work together seamlessly with powerful collaboration tools.",
    },
    {
      icon: MessageSquare,
      title: "24/7 Support",
      description: "Round-the-clock customer support to help you succeed.",
    },
    {
      icon: Settings,
      title: "Customizable",
      description:
        "Tailor the platform to your needs with extensive customization options.",
    },
    {
      icon: Globe,
      title: "Global CDN",
      description:
        "Fast content delivery worldwide with our distributed network.",
    },
    {
      icon: Sparkles,
      title: "AI Powered",
      description:
        "Leverage artificial intelligence to automate and optimize workflows.",
    },
  ];

  const categories = [
    {
      value: "productivity",
      label: "Productivity",
      features: features.slice(0, 4),
    },
    {
      value: "security",
      label: "Security",
      features: features.slice(4, 8),
    },
    {
      value: "integration",
      label: "Integration",
      features: features.slice(8, 12),
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-6xl space-y-16">
          <div className="space-y-4 text-center">
            <Badge variant="secondary" className="mb-2">
              Features
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight">
              Everything You Need to Succeed
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
              Powerful features designed to help you work smarter, faster, and
              more efficiently.
            </p>
          </div>

          <Tabs defaultValue="productivity" className="w-full">
            <TabsList className="mx-auto grid w-full max-w-md grid-cols-3">
              {categories.map((category) => (
                <TabsTrigger key={category.value} value={category.value}>
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {categories.map((category) => (
              <TabsContent
                key={category.value}
                value={category.value}
                className="mt-8"
              >
                <div className="grid gap-6 md:grid-cols-2">
                  {category.features.map((feature, index) => (
                    <Card
                      key={index}
                      className="transition-shadow hover:shadow-lg"
                    >
                      <CardHeader>
                        <div className="flex items-start gap-4">
                          <div className="bg-primary text-primary-foreground rounded-lg p-3">
                            <feature.icon className="h-6 w-6" />
                          </div>
                          <div>
                            <CardTitle className="mb-2 text-xl">
                              {feature.title}
                            </CardTitle>
                            <CardDescription className="text-base">
                              {feature.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <Card className="bg-muted/50">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">All Features Included</CardTitle>
              <CardDescription className="text-base">
                Every plan comes with access to all features. No hidden costs or
                feature limitations.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="bg-primary h-2 w-2 rounded-full" />
                    <span className="text-sm">{feature.title}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
