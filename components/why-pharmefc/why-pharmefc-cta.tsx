'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function WhyPharmefcCta() {
  return (
    <section className="py-16 sm:py-20 bg-linear-to-br from-[#F8FBFF] via-[#EFF6FF] to-[#F0FDF4]/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F172A]">
            Ready to Partner with PharmEFC?
          </h2>
          <p className="text-[#64748B] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Connect with PharmEFC for pharmaceutical products, healthcare consultancy, hospital
            planning, or long-term partnerships with hospitals and healthcare organizations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[14px] bg-[#3B82F6] text-white font-semibold shadow-[0_4px_14px_rgba(27,90,174,0.25)] hover:bg-[#2563EB] transition-colors"
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 rounded-[14px] bg-white border border-[#E2E8F0] text-[#0F172A] font-semibold hover:bg-[#F8FBFF] transition-colors"
            >
              Explore Healthcare Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
