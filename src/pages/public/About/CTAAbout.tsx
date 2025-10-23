import SectionHeader from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export default function CTAAbout() {
  return (
    <motion.section
      className="px-4 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-5xl mx-auto bg-primary/10 text-white p-10 rounded-3xl shadow-xl">
        <SectionHeader
          title="Ready to Join Us?"
          subtitle="Sign up today and start managing your finances smarter, faster, and
          securely."
        />
        <Button>Get Started</Button>
      </div>
    </motion.section>
  );
}
