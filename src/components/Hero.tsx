"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { Logo } from "./Logo";

export function Hero() {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="mb-stack-md flex w-full max-w-4xl flex-col items-center px-gutter text-center">
      <Logo />

      <motion.h1
        className="mb-stack-sm font-[family-name:var(--font-geist-sans)] text-[clamp(2.25rem,5.5vw,4rem)] font-bold leading-[1.125] tracking-[-0.04em] text-primary"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
      >
        Independent digital products.
      </motion.h1>
      <motion.p
        className="mb-stack-md max-w-2xl font-[family-name:var(--font-inter)] text-[clamp(1rem,2vw,1.125rem)] font-light leading-7 tracking-wide text-on-surface-variant"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.3 }}
      >
        A collection of useful digital tools built by Handeva.
      </motion.p>
      <motion.button
        type="button"
        onClick={scrollToProducts}
        className="rounded-full bg-primary px-6 py-3 font-[family-name:var(--font-jetbrains-mono)] text-[13px] font-medium uppercase tracking-[0.15em] text-on-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-fixed hover:shadow-[0_4px_16px_rgba(195,244,0,0.2)]"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.4 }}
      >
        Try Our Products
      </motion.button>
    </section>
  );
}
