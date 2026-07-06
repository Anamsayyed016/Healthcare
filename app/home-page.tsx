import SiteLayout from '@/components/site-layout';
import HeroSection from '@/components/sections/hero';

export default function HomePage() {
  return (
    <SiteLayout>
      <div className="flex flex-col">
        <HeroSection />
      </div>
    </SiteLayout>
  );
}
