"use client";

import { dotPulse } from "@/lib/motion";
import { motion } from "framer-motion";
import { HeroBackdrop } from "./HeroBackdrop";

function LogoMark() {
  return (
    <div className="group relative flex cursor-default items-baseline gap-0.5">
      <span className="font-[family-name:var(--font-geist-sans)] text-3xl font-semibold tracking-tight text-primary md:text-4xl">
        handeva
      </span>
      <motion.span className="relative inline-flex" animate={dotPulse} aria-hidden>
        <span className="absolute inset-0 rounded-full bg-primary-container/40 blur-md" />
        <span className="relative font-[family-name:var(--font-geist-sans)] text-3xl font-semibold text-primary-container md:text-4xl">
          .
        </span>
      </motion.span>
    </div>
  );
}

export function Hero() {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-section relative mb-stack-md w-full max-w-4xl px-gutter">
      <HeroBackdrop />

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="hero-animate hero-animate-left mb-stack-md">
          <LogoMark />
        </div>

        <span
          className="hero-animate hero-animate-right hero-delay-2 mb-6 inline-block rounded-full border border-primary-container/20 bg-primary-container/10 px-4 py-1.5 font-[family-name:var(--font-jetbrains-mono)] text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-container"
        >
          Digital Product Studio
        </span>

        <p className="hero-animate hero-animate-right hero-delay-3 mb-3 font-[family-name:var(--font-jetbrains-mono)] text-sm uppercase tracking-[0.18em] text-primary-container/80">
          We build useful tools
        </p>

        <h1 className="hero-animate hero-animate-right hero-delay-4 mb-stack-sm font-[family-name:var(--font-geist-sans)] text-[clamp(2.25rem,5.5vw,4rem)] font-bold leading-[1.125] tracking-[-0.04em] text-primary">
          Independent digital products.
        </h1>

        <p className="hero-animate hero-animate-right hero-delay-5 mb-stack-md max-w-2xl font-[family-name:var(--font-inter)] text-[clamp(1rem,2vw,1.125rem)] font-light leading-7 tracking-wide text-on-surface-variant">
          A collection of useful digital tools built by Handeva.
        </p>

        <button
          type="button"
          onClick={scrollToProducts}
          className="hero-animate hero-animate-right hero-delay-6 rounded-full bg-primary px-6 py-3 font-[family-name:var(--font-jetbrains-mono)] text-[13px] font-medium uppercase tracking-[0.15em] text-on-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-fixed hover:shadow-[0_4px_16px_rgba(195,244,0,0.2)]"
        >
          Try Our Products
        </button>
      </div>
    </section>
  );
}
