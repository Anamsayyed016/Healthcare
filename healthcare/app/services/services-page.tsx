'use client';

import SiteLayout from '@/components/site-layout';
import ServicesBreadcrumb from '@/components/services/services-breadcrumb';
import ServicesHero from '@/components/services/services-hero';
import ServicesOverview from '@/components/services/services-overview';
import ServicesBentoGrid from '@/components/services/services-bento-grid';
import ServicesFeatureBlocks from '@/components/services/services-feature-blocks';
import ServicesProcess from '@/components/services/services-process';
import ServicesWhyChoose from '@/components/services/services-why-choose';
import ServicesCta from '@/components/services/services-cta';

export default function ServicesPageContent() {
  return (
    <SiteLayout>
      <ServicesBreadcrumb />
      <ServicesHero />
      <ServicesOverview />
      <ServicesBentoGrid />
      <ServicesFeatureBlocks />
      <ServicesProcess />
      <ServicesWhyChoose />
      <ServicesCta />
    </SiteLayout>
  );
}
