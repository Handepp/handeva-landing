import { products } from "@/config/products";
import { ProductCard } from "./ProductCard";

export function ProductGrid() {
  return (
    <section
      className="w-full max-w-5xl px-gutter"
      aria-label="Digital products"
    >
      <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </section>
  );
}
