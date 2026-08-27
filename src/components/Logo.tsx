"use client";

import { motion } from "framer-motion";
import { dotPulse, fadeIn } from "@/lib/motion";

export function Logo() {
  return (
    <motion.div
      className="mb-stack-md flex flex-col items-center"
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.1 }}
    >
      <div className="group relative flex cursor-default items-baseline gap-0.5">
        <span className="font-[family-name:var(--font-geist-sans)] text-3xl font-semibold tracking-tight text-primary md:text-4xl">
          handeva
        </span>
        <motion.span
          className="relative inline-flex"
          animate={dotPulse}
          aria-hidden
        >
          <span className="absolute inset-0 rounded-full bg-primary-container/40 blur-md" />
          <span className="relative font-[family-name:var(--font-geist-sans)] text-3xl font-semibold text-primary-container md:text-4xl">
            .
          </span>
        </motion.span>
      </div>
      <span className="mt-2 font-[family-name:var(--font-jetbrains-mono)] text-[10px] uppercase tracking-[0.25em] text-on-surface-variant/70">
        digital studio
      </span>
    </motion.div>
  );
}
