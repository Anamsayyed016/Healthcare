'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ContactCtaSection() {
  return (
    <section className="py-12 sm:py-16 bg-white border-t border-[#E2E8F0]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          className="space-y-5"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Ready to connect with PharmEFC?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Get in touch for product enquiries, partnerships, or healthcare consultancy.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#1E6FD9] text-white font-semibold hover:bg-[#1a63c4] transition-colors"
          >
            Contact Us
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
