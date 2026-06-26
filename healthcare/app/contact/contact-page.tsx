'use client';

import SiteLayout from '@/components/site-layout';
import PageHero from '@/components/page-hero';
import ContactForm from '@/components/contact-form';
import ContactInfoCards from '@/components/contact-info-cards';
import OfficeMap from '@/components/office-map';
import { COMPANY_NAME } from '@/lib/contact';

export default function ContactPageContent() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow={COMPANY_NAME}
        title={
          <>
            Get in <span className="text-[#4F9DF8]">Touch</span>
          </>
        }
        description="Reach out to our team for inquiries, partnerships, or support. We are here to assist you during business hours."
      />

      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <ContactInfoCards />

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Quick Enquiry</h2>
              <p className="text-slate-600 mb-6">
                Send us a message and our team will respond during business hours.
              </p>
              <ContactForm />
            </div>
            <OfficeMap className="h-full min-h-96 lg:min-h-[32rem]" />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
