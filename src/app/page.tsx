import { AboutSection } from "@/components/sections/about-section";
import { BentoSection } from "@/components/sections/bento-section";
import { CTASection } from "@/components/sections/cta-section";
import { EventSection } from "@/components/sections/event-section";
import { FAQSection } from "@/components/sections/faq-section";
import { FeatureSection } from "@/components/sections/feature-section";
import { FooterSection } from "@/components/sections/footer-section";
import { GrowthSection } from "@/components/sections/growth-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PartnersShowcase } from "@/components/sections/partners-showcase";
import { PricingSection } from "@/components/sections/pricing-section";
import { QuoteSection } from "@/components/sections/quote-section";
import { TestimonialSection } from "@/components/sections/testimonial-section";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full">
      <HeroSection />
      <AboutSection />
      <EventSection />
      <PartnersShowcase />

      {/* <BentoSection />
      <QuoteSection />
      <FeatureSection />
      <GrowthSection />
      <PricingSection />
      <TestimonialSection />
      <FAQSection />
       */}
      <CTASection />
      <FooterSection />
    </main>
  );
}
