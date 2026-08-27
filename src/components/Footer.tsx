"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";

export function Footer() {
  return (
    <motion.footer
      className="flex h-16 shrink-0 items-center justify-center px-gutter"
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      transition={{ delay: 1.1 }}
    >
      <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.1em] text-on-surface-variant opacity-60">
        © {new Date().getFullYear()} Handeva — Independent digital products
      </p>
    </motion.footer>
  );
}
