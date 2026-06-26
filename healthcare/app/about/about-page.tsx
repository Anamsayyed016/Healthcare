'use client';

import SiteLayout from '@/components/site-layout';
import AboutHero from '@/components/about/about-hero';
import AboutStory from '@/components/about/about-story';
import AboutTimeline from '@/components/about/about-timeline';
import AboutVisionMission from '@/components/about/about-vision-mission';
import AboutCoreValues from '@/components/about/about-core-values';
import AboutHighlights from '@/components/about/about-highlights';
import AboutLeadershipPreview from '@/components/about/about-leadership-preview';
import AboutCta from '@/components/about/about-cta';

export default function AboutPageContent() {
  return (
    <SiteLayout>
      <AboutHero />
      <AboutStory />
      <AboutTimeline />
      <AboutVisionMission />
      <AboutCoreValues />
      <AboutHighlights />
      <AboutLeadershipPreview />
      <AboutCta />
    </SiteLayout>
  );
}
