import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";

export default function Home() {
  return (
    <div className="relative flex min-h-dvh flex-col lg:h-dvh lg:overflow-hidden">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-container/5 opacity-30 mix-blend-screen blur-[120px]"
        aria-hidden
      />

      <main className="mx-auto flex w-full max-w-[var(--max-width-container)] flex-1 flex-col items-center justify-center gap-stack-md px-0 py-8 lg:gap-stack-lg lg:py-0">
        <Header />
        <Hero />
        <ProductGrid />
      </main>

      <Footer />
    </div>
  );
}
