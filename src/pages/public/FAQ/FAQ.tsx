import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";

export default function FAQ() {
  const faqCategories = [
    {
      value: "general",
      label: "General",
      questions: [
        {
          question: "What is your product and how does it work?",
          answer:
            "Our product is a comprehensive solution designed to streamline your workflow and boost productivity. It works by integrating with your existing tools and automating repetitive tasks, allowing you to focus on what matters most.",
        },
        {
          question: "Is there a free trial available?",
          answer:
            "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start. You can upgrade to a paid plan at any time during or after the trial period.",
        },
        {
          question: "Can I change my plan later?",
          answer:
            "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any payments accordingly.",
        },
        {
          question: "Do you offer refunds?",
          answer:
            "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with our service within the first 30 days, contact us for a full refund.",
        },
      ],
    },
    {
      value: "billing",
      label: "Billing",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and bank transfers for enterprise customers.",
        },
        {
          question: "How does billing work?",
          answer:
            "Billing is automatic and based on your selected plan. Monthly plans are billed every month, while annual plans are billed once per year. You'll receive an invoice via email after each payment.",
        },
        {
          question: "Can I get an invoice for my payments?",
          answer:
            "Yes, invoices are automatically generated and sent to your email after each payment. You can also download past invoices from your account dashboard at any time.",
        },
        {
          question: "What happens if my payment fails?",
          answer:
            "If a payment fails, we'll attempt to process it again over the next few days. You'll receive email notifications about the issue. If payment isn't successful after multiple attempts, your account may be temporarily suspended.",
        },
      ],
    },
    {
      value: "technical",
      label: "Technical",
      questions: [
        {
          question: "What are the system requirements?",
          answer:
            "Our platform is web-based and works on any modern browser (Chrome, Firefox, Safari, Edge). For mobile, we support iOS 13+ and Android 8+. A stable internet connection is recommended.",
        },
        {
          question: "Do you provide an API?",
          answer:
            "Yes, we provide a comprehensive RESTful API for all paid plans. Full documentation is available in your dashboard, including examples and SDK libraries for popular programming languages.",
        },
        {
          question: "How secure is my data?",
          answer:
            "We take security very seriously. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We're SOC 2 Type II certified and comply with GDPR and CCPA regulations.",
        },
        {
          question: "Can I export my data?",
          answer:
            "Yes, you can export all your data at any time in multiple formats (CSV, JSON, PDF). We believe your data belongs to you and make it easy to take it with you.",
        },
      ],
    },
    {
      value: "support",
      label: "Support",
      questions: [
        {
          question: "How can I contact support?",
          answer:
            "You can reach our support team via email, live chat, or phone. Email support is available 24/7, while live chat and phone support are available during business hours.",
        },
        {
          question: "What is your average response time?",
          answer:
            "For email support, we typically respond within 2-4 hours during business days. Live chat responses are immediate. Priority support customers receive responses within 1 hour.",
        },
        {
          question: "Do you offer training or onboarding?",
          answer:
            "Yes! We offer free onboarding webinars for all new customers. Enterprise customers receive dedicated onboarding sessions and training materials. We also have extensive documentation and video tutorials.",
        },
        {
          question: "Is there a community forum?",
          answer:
            "Yes, we have an active community forum where users share tips, ask questions, and connect with each other. Our team also participates regularly to provide official guidance.",
        },
      ],
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl space-y-12">
          <div className="space-y-4 text-center">
            <Badge variant="secondary" className="mb-2">
              FAQ
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
              Find answers to common questions about our product, billing, and
              support.
            </p>
          </div>

          <Card>
            <CardContent>
              <div className="relative">
                <Search className="text-muted-foreground absolute top-3 left-3 h-4 w-4" />
                <Input placeholder="Search for answers..." className="pl-10" />
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              {faqCategories.map((category) => (
                <TabsTrigger key={category.value} value={category.value}>
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {faqCategories.map((category) => (
              <TabsContent
                key={category.value}
                value={category.value}
                className="mt-6"
              >
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
            ))}
          </Tabs>

          <Card className="bg-muted/50">
            <CardHeader className="text-center">
              <CardTitle>Still Have Questions?</CardTitle>
              <CardDescription>
                Cannot find the answer you are looking for? Our support team is
                here to help.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Button size="lg">Contact Support</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
