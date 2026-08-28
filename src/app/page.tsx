import { BackgroundAnimation } from "@/components/BackgroundAnimation";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";

export default function Home() {
  return (
    <>
      <BackgroundAnimation />

      <div className="relative z-10 flex min-h-dvh flex-col overflow-y-auto text-on-surface md:h-dvh md:overflow-hidden">
        <main className="mx-auto flex w-full max-w-[var(--max-width-container)] flex-1 flex-col items-center justify-center px-gutter py-12 md:py-0">
          <Hero />
          <ProductGrid />
        </main>

        <Footer />
      </div>
    </>
  );
}
