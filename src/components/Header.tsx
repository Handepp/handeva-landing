"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeIn } from "@/lib/motion";

export function Header() {
  return (
    <motion.div
      className="mb-stack-md"
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.1 }}
    >
      <div className="animate-logo flex cursor-default items-center justify-center">
        <Image
          src="/assets/logo.png"
          alt="handeva"
          width={200}
          height={64}
          className="h-16 w-auto object-contain"
          priority
        />
      </div>
    </motion.div>
  );
}
