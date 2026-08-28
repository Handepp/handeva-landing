"use client";

import { motion, useReducedMotion } from "framer-motion";

const orbs = [
  {
    className: "left-[5%] top-[8%] h-[360px] w-[360px]",
    animate: {
      opacity: [0.1, 0.18, 0.1],
      x: [0, 24, 0],
      y: [0, -18, 0],
      scale: [1, 1.05, 1],
    },
    duration: 16,
  },
  {
    className: "right-[6%] bottom-[10%] h-[320px] w-[320px]",
    animate: {
      opacity: [0.08, 0.15, 0.08],
      x: [0, -20, 0],
      y: [0, 16, 0],
      scale: [1, 1.04, 1],
    },
    duration: 20,
  },
  {
    className: "left-[42%] top-[55%] h-[200px] w-[200px]",
    animate: {
      opacity: [0.05, 0.1, 0.05],
      x: [0, 14, 0],
      y: [0, -12, 0],
    },
    duration: 24,
  },
];

export function BackgroundAnimation() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-surface"
      aria-hidden
    >
      <div className="bg-grid absolute inset-0 opacity-30" />

      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full bg-primary-container blur-[100px] ${orb.className}`}
          initial={{ opacity: 0.12 }}
          animate={
            reduceMotion
              ? { opacity: 0.12 }
              : orb.animate
          }
          transition={{
            duration: orb.duration,
            repeat: reduceMotion ? 0 : Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div
        className="absolute left-1/2 top-[38%] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-fixed blur-[130px]"
        initial={{ opacity: 0.06 }}
        animate={
          reduceMotion
            ? { opacity: 0.06 }
            : { opacity: [0.06, 0.11, 0.06], scale: [1, 1.06, 1] }
        }
        transition={{
          duration: 12,
          repeat: reduceMotion ? 0 : Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface/50" />
    </div>
  );
}
