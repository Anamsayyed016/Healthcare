import type { Metadata } from 'next';
import SiteLayout from '@/components/site-layout';
import PageHero from '@/components/page-hero';
import ServicesGrid from '@/components/sections/services-grid';
import { COMPANY_NAME } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Healthcare Services | PharmEFC Healthcare',
  description:
    'Healthcare consultancy, hospital planning, NABH accreditation, telemedicine, and operational excellence services by PharmEFC.',
};

export default function ServicesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow={COMPANY_NAME}
        title={
          <>
            Healthcare <span className="text-[#4F9DF8]">Services</span>
          </>
        }
        description="Comprehensive medical and consultancy services designed to elevate healthcare delivery across every stage of your organization's journey."
      />
      <ServicesGrid showHeader={false} />
    </SiteLayout>
  );
}
