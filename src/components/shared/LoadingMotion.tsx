import { motion } from "motion/react";
import type { Variants } from "motion/react";

/**
 * LoadingMotion (Full-Screen Version)
 * A type-safe, accessible loading component using Framer Motion + Tailwind CSS.
 *
 * Props:
 *  - text?: string (optional loading text shown below the spinner)
 *  - className?: string (additional wrapper classes)
 */
export interface LoadingMotionProps {
  text?: string;
  className?: string;
}

export default function LoadingMotion({
  text,
  className = "",
}: LoadingMotionProps) {
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const dot: Variants = {
    hidden: { y: 0, opacity: 0.25, scale: 0.9 },
    visible: (i: number) => ({
      y: [0, -10, 0],
      opacity: [0.4, 1, 0.4],
      scale: [0.9, 1.05, 0.95],
      transition: {
        duration: 0.9,
        ease: "easeInOut",
        delay: i * 0.12,
        repeat: Infinity,
      },
    }),
  };

  const ring: Variants = {
    animate: {
      rotate: [0, 360],
      transition: { duration: 1.6, ease: "linear", repeat: Infinity },
    },
  };

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed inset-0 flex flex-col items-center justify-center bg-background text-foreground z-50 ${className}`}
    >
      {/* Animated ring + dots */}
      <motion.div
        className="relative flex items-center justify-center"
        style={{ width: 80, height: 80 }}
        variants={ring}
        animate="animate"
      >
        <svg
          viewBox="0 0 44 44"
          fill="none"
          className="absolute inset-0 w-full h-full"
          aria-hidden="true"
        >
          <circle
            cx="22"
            cy="22"
            r="18"
            strokeWidth="4"
            className="opacity-20 stroke-current text-slate-300"
          />
          <motion.circle
            cx="22"
            cy="22"
            r="18"
            strokeWidth="4"
            strokeLinecap="round"
            className="stroke-current text-primary"
            style={{ pathLength: 0.8 }}
            animate={{ pathLength: [0.05, 0.8, 0.05] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>

        {/* Three bouncing dots */}
        <motion.div
          className="flex items-end justify-center gap-2 absolute"
          variants={container}
          initial="hidden"
          animate="visible"
          aria-hidden="true"
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              custom={i}
              variants={dot}
              className={`block rounded-full bg-current ${
                i === 1 ? "text-primary" : "text-slate-400"
              }`}
              style={{ width: 10, height: 10 }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Optional loading text */}
      {text && (
        <span className="mt-4 text-lg text-slate-700 dark:text-slate-200 animate-pulse">
          {text}
        </span>
      )}
    </div>
  );
}
