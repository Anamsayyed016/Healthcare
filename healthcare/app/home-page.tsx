'use client';

import SiteLayout from '@/components/site-layout';
import HeroSection from '@/components/sections/hero';
import AboutPreviewSection from '@/components/sections/about-preview';
import ProductsPreviewSection from '@/components/sections/products-preview';
import ServicesPreviewSection from '@/components/sections/services-preview';
import LeadershipPreviewSection from '@/components/sections/leadership-preview';
import WhyChoosePreviewSection from '@/components/sections/why-choose-preview';
import ContactCtaSection from '@/components/sections/contact-cta';

export default function HomePage() {
  return (
    <SiteLayout>
      <div className="flex flex-col gap-y-4 sm:gap-y-6 lg:gap-y-8">
        <HeroSection />
        <AboutPreviewSection />
        <ProductsPreviewSection />
        <ServicesPreviewSection />
        <LeadershipPreviewSection />
        <WhyChoosePreviewSection />
        <ContactCtaSection />
      </div>
    </SiteLayout>
  );
}
