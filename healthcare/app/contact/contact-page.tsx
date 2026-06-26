'use client';

import SiteLayout from '@/components/site-layout';
import ContactBreadcrumb from '@/components/contact/contact-breadcrumb';
import ContactHero from '@/components/contact/contact-hero';
import ContactMainSection from '@/components/contact/contact-main-section';
import ContactMapSection from '@/components/contact/contact-map-section';
import ContactHelp from '@/components/contact/contact-help';
import ContactProcess from '@/components/contact/contact-process';
import ContactFaq from '@/components/contact/contact-faq';
import ContactCta from '@/components/contact/contact-cta';

export default function ContactPageContent() {
  return (
    <SiteLayout>
      <ContactBreadcrumb />
      <ContactHero />
      <ContactMainSection />
      <ContactMapSection />
      <ContactHelp />
      <ContactProcess />
      <ContactFaq />
      <ContactCta />
    </SiteLayout>
  );
}
