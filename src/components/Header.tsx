"use client";

import { motion } from "framer-motion";
import { fadeIn, dotPulse } from "@/lib/motion";

export function Header() {
  return (
    <header className="flex shrink-0 items-center justify-center pt-6 lg:pt-8">
      <motion.div
        className="flex items-center gap-1 font-[family-name:var(--font-mono)] text-sm uppercase tracking-[0.2em] text-primary"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <span className="font-[family-name:var(--font-headline)] text-xl font-semibold tracking-tight normal-case">
          handeva.
        </span>
        <motion.span
          className="inline-block h-2 w-2 rounded-full bg-primary-container"
          animate={dotPulse}
          aria-hidden="true"
        />
      </motion.div>
    </header>
  );
}
