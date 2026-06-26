'use client';

import SiteLayout from '@/components/site-layout';
import WhyPharmefcBreadcrumb from '@/components/why-pharmefc/why-pharmefc-breadcrumb';
import WhyPharmefcHero from '@/components/why-pharmefc/why-pharmefc-hero';
import WhyPharmefcIntro from '@/components/why-pharmefc/why-pharmefc-intro';
import WhyPharmefcStrengths from '@/components/why-pharmefc/why-pharmefc-strengths';
import WhyPharmefcComparison from '@/components/why-pharmefc/why-pharmefc-comparison';
import WhyPharmefcCommitment from '@/components/why-pharmefc/why-pharmefc-commitment';
import WhyPharmefcQuality from '@/components/why-pharmefc/why-pharmefc-quality';
import WhyPharmefcIndustries from '@/components/why-pharmefc/why-pharmefc-industries';
import WhyPharmefcProcess from '@/components/why-pharmefc/why-pharmefc-process';
import WhyPharmefcTrust from '@/components/why-pharmefc/why-pharmefc-trust';
import WhyPharmefcCta from '@/components/why-pharmefc/why-pharmefc-cta';

export default function WhyPharmefcPageContent() {
  return (
    <SiteLayout>
      <WhyPharmefcBreadcrumb />
      <WhyPharmefcHero />
      <WhyPharmefcIntro />
      <WhyPharmefcStrengths />
      <WhyPharmefcComparison />
      <WhyPharmefcCommitment />
      <WhyPharmefcQuality />
      <WhyPharmefcIndustries />
      <WhyPharmefcProcess />
      <WhyPharmefcTrust />
      <WhyPharmefcCta />
    </SiteLayout>
  );
}
