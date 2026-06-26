'use client';

import SiteLayout from '@/components/site-layout';
import HeroSection from '@/components/sections/hero';
import AboutPreviewSection from '@/components/sections/about-preview';
import VisionMissionPreviewSection from '@/components/sections/vision-mission-preview';
import ProductsPreviewSection from '@/components/sections/products-preview';
import ServicesGrid from '@/components/sections/services-grid';
import WhyChooseUsSection from '@/components/sections/why-choose-us';
import LeadershipPreviewSection from '@/components/sections/leadership-preview';
import CTASection from '@/components/sections/cta';
import ContactPreviewSection from '@/components/sections/contact-preview';

export default function HomePage() {
  return (
    <SiteLayout>
      <HeroSection />
      <AboutPreviewSection />
      <VisionMissionPreviewSection />
      <ProductsPreviewSection />
      <ServicesGrid limit={4} showHeader showExplore />
      <WhyChooseUsSection preview />
      <LeadershipPreviewSection limit={4} />
      <CTASection />
      <ContactPreviewSection />
    </SiteLayout>
  );
}
