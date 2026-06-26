'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ContactForm from '@/components/contact-form';
import ContactInfoCards from '@/components/contact-info-cards';
import OfficeMap from '@/components/office-map';

export default function ContactPreviewSection() {
  return (
    <section className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
            Get In <span className="text-[#4F9DF8]">Touch</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We&apos;re here to help. Reach out with questions or visit our Vadodara office during
            business hours.
          </p>
        </motion.div>

        <div className="mb-12">
          <ContactInfoCards />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-8"
        >
          <ContactForm />
          <OfficeMap />
        </motion.div>

        <div className="text-center mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-[#4F9DF8] text-[#4F9DF8] font-semibold hover:bg-blue-50 transition-colors"
          >
            View Full Contact Page
          </Link>
        </div>
      </div>
    </section>
  );
}
