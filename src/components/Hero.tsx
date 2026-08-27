"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

const headlineTransition = { delay: 0.15 };
const subtextTransition = { delay: 0.3 };

export function Hero() {
  return (
    <section className="flex shrink-0 flex-col items-center px-gutter text-center">
      <motion.h1
        className="mb-stack-sm max-w-4xl font-[family-name:var(--font-headline)] text-[clamp(2rem,5vw,4rem)] font-bold leading-[1.1] tracking-[-0.04em] text-primary"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={headlineTransition}
      >
        Independent digital products.
      </motion.h1>
      <motion.p
        className="max-w-2xl font-[family-name:var(--font-body)] text-[clamp(1rem,2vw,1.125rem)] font-light leading-relaxed tracking-wide text-on-surface-variant"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={subtextTransition}
      >
        A collection of useful digital tools built by Handeva.
      </motion.p>
    </section>
  );
}
