import type { Product } from "@/config/products";

type ProductIconProps = {
  icon: Product["icon"];
};

export function ProductIcon({ icon }: ProductIconProps) {
  return (
    <span className="material-symbols-outlined text-lg text-on-surface-variant transition-colors duration-300 group-hover:text-primary">
      {icon}
    </span>
  );
}
