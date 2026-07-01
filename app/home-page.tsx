import SiteLayout from '@/components/site-layout';
import HeroSection from '@/components/sections/hero';
import ProductsPreviewSection from '@/components/sections/products-preview';

export default function HomePage() {
  return (
    <SiteLayout>
      <div className="flex flex-col">
        <HeroSection />
        <ProductsPreviewSection />
      </div>
    </SiteLayout>
  );
}
