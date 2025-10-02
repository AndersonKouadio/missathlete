import { AboutSection } from "@/components/sections/about-section";
import { CTASection } from "@/components/sections/cta-section";
import { EventSection } from "@/components/sections/event-section";
import { FAQSection } from "@/components/sections/faq-section";
import { FooterSection } from "@/components/sections/footer-section";
import { HeroSection } from "@/components/sections/hero-section";
import { Navbar } from "@/components/sections/navbar";
import { PartnersShowcase } from "@/components/sections/partners-showcase";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen w-full">
        <HeroSection />
        <AboutSection />
        <EventSection />
        <PartnersShowcase />
        <FAQSection />
        <CTASection />
        <FooterSection />
      </main>
    </>
  );
}
