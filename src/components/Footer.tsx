"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";

export function Footer() {
  return (
    <motion.footer
      className="flex h-16 shrink-0 items-center justify-center px-gutter md:absolute md:bottom-0 md:w-full"
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      transition={{ delay: 1.2 }}
    >
      <p className="font-[family-name:var(--font-jetbrains-mono)] text-[11px] uppercase tracking-[0.1em] text-on-surface-variant opacity-60">
        © {new Date().getFullYear()} Handeva — Independent digital products
      </p>
    </motion.footer>
  );
}
