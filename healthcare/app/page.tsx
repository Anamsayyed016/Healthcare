'use client';

import Header from '@/components/header';
import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import VisionMissionSection from '@/components/sections/vision-mission';
import ProductsSection from '@/components/sections/products';
import ServicesSection from '@/components/sections/services';
import LeadershipPreviewSection from '@/components/sections/leadership-preview';
import WhyChooseUsSection from '@/components/sections/why-choose-us';
import HighlightsSection from '@/components/sections/highlights';
import CTASection from '@/components/sections/cta';
import ContactPreviewSection from '@/components/sections/contact-preview';
import Footer from '@/components/footer';
import ScrollToTop from '@/components/scroll-to-top';
import WhatsAppButton from '@/components/whatsapp-button';

export default function Home() {
  return (
    <div className="w-full bg-white text-foreground">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <VisionMissionSection />
        <ProductsSection />
        <ServicesSection />
        <LeadershipPreviewSection />
        <WhyChooseUsSection />
        <HighlightsSection />
        <CTASection />
        <ContactPreviewSection />
      </main>
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  );
}
