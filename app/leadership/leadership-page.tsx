'use client';

import SiteLayout from '@/components/site-layout';
import LeadershipBreadcrumb from '@/components/leadership/leadership-breadcrumb';
import LeadershipHero from '@/components/leadership/leadership-hero';
import LeadershipOverview from '@/components/leadership/leadership-overview';
import LeadershipSpotlight from '@/components/leadership/leadership-spotlight';
import LeadershipTeam from '@/components/leadership/leadership-team';
import LeadershipValues from '@/components/leadership/leadership-values';
import LeadershipPhilosophy from '@/components/leadership/leadership-philosophy';
import LeadershipAdvisory from '@/components/leadership/leadership-advisory';
import LeadershipCta from '@/components/leadership/leadership-cta';

export default function LeadershipPageContent() {
  return (
    <SiteLayout>
      <LeadershipBreadcrumb />
      <LeadershipHero />
      <LeadershipOverview />
      <LeadershipSpotlight />
      <LeadershipTeam />
      <LeadershipValues />
      <LeadershipPhilosophy />
      <LeadershipAdvisory />
      <LeadershipCta />
    </SiteLayout>
  );
}
