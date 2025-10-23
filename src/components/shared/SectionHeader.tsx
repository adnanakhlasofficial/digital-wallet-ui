import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeaderProps) {
  const alignment =
    align === "left"
      ? "text-left items-start"
      : align === "right"
      ? "text-right items-end"
      : "text-center items-center";

  return (
    <motion.div
      className={cn("flex flex-col gap-2 mb-10", alignment, className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl">{subtitle}</p>
      )}
    </motion.div>
  );
}
