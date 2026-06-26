'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ContactInfoCards from '@/components/contact-info-cards';
import { EMAIL, EMAIL_HREF, WEBSITE, WEBSITE_DISPLAY } from '@/lib/contact';

export default function ContactPreviewSection() {
  return (
    <section className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
            Get In <span className="text-[#4F9DF8]">Touch</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Reach out to our Vadodara office during business hours or send us a quick enquiry.
          </p>
        </motion.div>

        <ContactInfoCards />

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-slate-600">
          <a href={EMAIL_HREF} className="hover:text-[#4F9DF8] transition-colors">
            {EMAIL}
          </a>
          <span className="hidden sm:inline text-slate-300">|</span>
          <a
            href={WEBSITE}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#4F9DF8] transition-colors"
          >
            {WEBSITE_DISPLAY}
          </a>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#1E6FD9] text-white font-semibold hover:bg-[#1a63c4] transition-colors"
          >
            Contact Us
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
