import { Lock, ShieldCheck, Smartphone, Zap } from "lucide-react";
import SharedAccordion from "../../../components/shared/SharedAccordion";

const items = [
  {
    id: "1",
    icon: Smartphone,
    title: "What makes our mobile banking app unique?",
    content:
      "Our app combines seamless performance with a user-friendly interface, giving you instant access to your finances anywhere, anytime. Built for speed, security, and simplicity.",
  },
  {
    id: "2",
    icon: ShieldCheck,
    title: "How secure is my personal information?",
    content:
      "We use advanced encryption, multi-factor authentication, and real-time fraud detection to ensure your data and transactions are fully protected.",
  },
  {
    id: "3",
    icon: Zap,
    title: "Is the app optimized for performance?",
    content:
      "Yes. Our mobile banking platform is built with performance in mind — fast loading times, smooth navigation, and minimal battery usage across all devices.",
  },
  {
    id: "4",
    icon: Lock,
    title: "Can I access my account safely on any device?",
    content:
      "Absolutely. Whether you’re using a phone, tablet, or desktop, your session is secured end-to-end with encrypted connections and automatic session timeout.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-background py-20">
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
          <SharedAccordion items={items} />
        </div>
      </div>
    </section>
  );
}
