import { motion } from "motion/react";

export default function HeroAbout() {
  return (
    <motion.section
      className="py-20 px-4 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
        About Our Digital Wallet
      </h1>
      <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground">
        We provide a modern, secure, and fast mobile banking experience for
        millions of users worldwide. Our goal is to make managing money simple
        and enjoyable.
      </p>
    </motion.section>
  );
}
