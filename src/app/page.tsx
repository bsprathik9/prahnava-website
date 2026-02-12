import { HeroHeader, HeroSection } from "@/components/hero-section";
import { AnimatedHero } from "@/components/animated-hero";
import { Features } from "@/components/features";
import { ProductSection } from "@/components/product-section";
import { Testimonials } from "@/components/testimonials";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <HeroHeader />
      {/* <AnimatedHero /> */}
      <HeroSection />
      <Features />
      <ProductSection />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}
