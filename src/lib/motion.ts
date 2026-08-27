import type { Transition, Variants } from "framer-motion";

const smoothEase = [0.16, 1, 0.3, 1] as const;

function withDelay(delay = 0, transition: Transition = {}): Transition {
  return { duration: 0.6, ease: smoothEase, delay, ...transition };
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: withDelay(),
  },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: withDelay(0, { duration: 0.8 }),
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.4,
    },
  },
};

export const dotPulse = {
  scale: [1, 1.15, 1],
  opacity: [0.85, 1, 0.85],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};
