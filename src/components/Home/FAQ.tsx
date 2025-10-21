import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I open an account?",
    answer:
      "Opening an account takes just 5 minutes. Download our app, provide your basic information, verify your identity, and you're ready to start banking. No minimum deposit required.",
  },
  {
    question: "Are there any fees?",
    answer:
      "Our Basic account is completely free with no monthly maintenance fees. Premium and Business plans have transparent monthly fees with no hidden charges. We never charge overdraft fees.",
  },
  {
    question: "How secure is my money?",
    answer:
      "Your deposits are FDIC insured up to $250,000. We use bank-level 256-bit encryption, biometric authentication, and 24/7 fraud monitoring to keep your account secure.",
  },
  {
    question: "Can I use my card internationally?",
    answer:
      "Yes! Our cards work worldwide. Basic account holders pay standard international fees, while Premium members enjoy zero fees at any ATM globally.",
  },
  {
    question: "How fast are transfers?",
    answer:
      "Transfers between our users are instant. External transfers typically complete within 1-2 business days. Premium members get priority processing on all transactions.",
  },
  {
    question: "What if I need help?",
    answer:
      "Our customer support team is available 24/7 via in-app chat, phone, and email. Premium and Business members get priority support with faster response times.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Find answers to common questions about our mobile banking service.
          </p>
        </div>

        {/* Accordion */}
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 rounded-2xl transition-all hover:border-primary bg-primary/5 "
              >
                <AccordionTrigger className="text-left text-lg font-semibold p-4 md:p-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground px-4 md:px-6 ">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
