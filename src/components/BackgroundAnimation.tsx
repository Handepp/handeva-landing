"use client";

import { motion } from "framer-motion";

const orbs = [
  {
    className:
      "left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 bg-primary-fixed/8",
    animate: {
      scale: [1, 1.08, 1],
      opacity: [0.25, 0.35, 0.25],
    },
    duration: 12,
  },
  {
    className: "left-[20%] top-[30%] h-[320px] w-[320px] bg-primary-container/6",
    animate: {
      x: [0, 40, -20, 0],
      y: [0, -30, 20, 0],
      scale: [1, 1.1, 0.95, 1],
      opacity: [0.15, 0.25, 0.18, 0.15],
    },
    duration: 18,
  },
  {
    className: "right-[15%] top-[55%] h-[280px] w-[280px] bg-primary-fixed/5",
    animate: {
      x: [0, -35, 25, 0],
      y: [0, 25, -15, 0],
      scale: [1, 0.92, 1.06, 1],
      opacity: [0.12, 0.2, 0.16, 0.12],
    },
    duration: 22,
  },
  {
    className: "bottom-[20%] left-[35%] h-[200px] w-[200px] bg-on-surface-variant/5",
    animate: {
      x: [0, 20, -10, 0],
      y: [0, -20, 10, 0],
      opacity: [0.08, 0.14, 0.1, 0.08],
    },
    duration: 16,
  },
];

export function BackgroundAnimation() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <div className="bg-grid absolute inset-0 opacity-[0.35]" />

      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full blur-[100px] mix-blend-screen ${orb.className}`}
          animate={orb.animate}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface/80"
        animate={{ opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
