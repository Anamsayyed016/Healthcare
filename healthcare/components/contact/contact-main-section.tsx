'use client';

import { motion } from 'framer-motion';
import ContactInfoPanels from '@/components/contact/contact-info-panels';
import ContactEnquiryForm from '@/components/contact/contact-enquiry-form';

export default function ContactMainSection() {
  return (
    <section id="contact-form" className="py-14 sm:py-20 bg-[#F8FBFF] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-3">
              Get in Touch
            </h2>
            <p className="text-[#64748B] mb-8 leading-relaxed">
              Reach out to PharmEFC for product enquiries, healthcare consulting, partnerships,
              or general support. We look forward to hearing from you.
            </p>
            <ContactInfoPanels />
          </motion.div>

          <ContactEnquiryForm />
        </div>
      </div>
    </section>
  );
}
