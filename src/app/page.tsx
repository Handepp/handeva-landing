import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";

export default function Home() {
  return (
    <div className="relative flex min-h-dvh flex-col overflow-y-auto bg-surface text-on-surface md:h-dvh md:overflow-hidden">
      <main className="relative mx-auto flex w-full max-w-[var(--max-width-container)] flex-1 flex-col items-center justify-center px-gutter py-12 md:py-0">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-fixed/5 opacity-30 mix-blend-screen blur-[120px]"
          aria-hidden
        />

        <Header />
        <Hero />
        <ProductGrid />
      </main>

      <Footer />
    </div>
  );
}
