import type { Metadata } from 'next';
import SiteLayout from '@/components/site-layout';
import PageHero from '@/components/page-hero';
import WhyChooseUsSection from '@/components/sections/why-choose-us';
import { COMPANY_NAME } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Why PharmEFC | PharmEFC Healthcare Private Limited',
  description:
    'Discover why partners trust PharmEFC — quality assured products, experienced leadership, ethical practices, and end-to-end healthcare solutions.',
};

export default function WhyPharmefcPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow={COMPANY_NAME}
        title={
          <>
            Why Choose <span className="text-[#4F9DF8]">PharmEFC</span>
          </>
        }
        description="Industry-leading excellence across healthcare and pharmaceutical services — built on trust, quality, and a commitment to better outcomes."
      />
      <WhyChooseUsSection />
    </SiteLayout>
  );
}
