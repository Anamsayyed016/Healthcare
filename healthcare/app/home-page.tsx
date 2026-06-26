'use client';

import SiteLayout from '@/components/site-layout';
import HeroSection from '@/components/sections/hero';
import AboutPreviewSection from '@/components/sections/about-preview';
import VisionMissionPreviewSection from '@/components/sections/vision-mission-preview';
import ProductsPreviewSection from '@/components/sections/products-preview';
import ServicesGrid from '@/components/sections/services-grid';
import LeadershipPreviewSection from '@/components/sections/leadership-preview';
import WhyChooseUsSection from '@/components/sections/why-choose-us';
import ContactPreviewSection from '@/components/sections/contact-preview';

export default function HomePage() {
  return (
    <SiteLayout>
      <div className="flex flex-col gap-y-8 sm:gap-y-12 lg:gap-y-16">
        <HeroSection />
        <AboutPreviewSection />
        <VisionMissionPreviewSection />
        <ProductsPreviewSection />
        <ServicesGrid limit={4} showHeader showExplore />
        <LeadershipPreviewSection limit={4} />
        <WhyChooseUsSection preview />
        <ContactPreviewSection />
      </div>
    </SiteLayout>
  );
}
