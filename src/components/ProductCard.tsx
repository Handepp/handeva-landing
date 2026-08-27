"use client";

import { motion } from "framer-motion";
import type { Product } from "@/config/products";
import { fadeUp } from "@/lib/motion";
import { ProductIcon } from "./ProductIcon";

type ProductCardProps = {
  product: Product;
  index: number;
};

export function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${product.actionLabel}: ${product.name}`}
      className="group relative flex min-h-[180px] flex-col items-start justify-between overflow-hidden rounded-2xl border border-surface-container bg-surface-container-lowest p-stack-md transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_8px_30px_rgba(195,244,0,0.08)]"
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.6 + index * 0.15 }}
    >
      <span className="material-symbols-outlined arrow-anim absolute right-4 top-4 text-sm text-on-surface-variant opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary group-hover:opacity-100">
        north_east
      </span>

      <div className="mb-stack-md flex h-10 w-10 items-center justify-center rounded-full border border-surface-container bg-surface-container-low transition-all duration-500 group-hover:scale-110 group-hover:border-primary/20 group-hover:bg-primary/5">
        <ProductIcon icon={product.icon} />
      </div>

      <div>
        <h3 className="mb-unit font-[family-name:var(--font-geist-sans)] text-[20px] font-medium leading-8 text-on-surface transition-colors duration-300 group-hover:text-primary">
          {product.name}
        </h3>
        <p className="text-sm font-light leading-relaxed text-on-surface-variant transition-colors duration-300 group-hover:text-on-surface">
          {product.description}
        </p>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </motion.a>
  );
}
