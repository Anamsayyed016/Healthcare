import SiteLayout from '@/components/site-layout';
import HeroSection from '@/components/sections/hero';
import ProductsPreviewSection from '@/components/sections/products-preview';
import ServicesPreviewSection from '@/components/sections/services-preview';
import LeadershipPreviewSection from '@/components/sections/leadership-preview';
import WhyChoosePreviewSection from '@/components/sections/why-choose-preview';
import ContactCtaSection from '@/components/sections/contact-cta';

export default function HomePage() {
  return (
    <SiteLayout>
      <div className="flex flex-col">
        <HeroSection />
        <ProductsPreviewSection />
        <ServicesPreviewSection />
        <LeadershipPreviewSection />
        <WhyChoosePreviewSection />
        <ContactCtaSection />
      </div>
    </SiteLayout>
  );
}
