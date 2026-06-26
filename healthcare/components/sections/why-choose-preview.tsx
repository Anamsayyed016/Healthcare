'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { whyChooseReasons } from '@/lib/data/why-choose-us';

export default function WhyChoosePreviewSection() {
  const highlights = whyChooseReasons.slice(0, 3);

  return (
    <section className="py-12 sm:py-16 bg-[#F4FFF7]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          className="space-y-6"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Why Choose <span className="text-[#4F9DF8]">PharmEFC</span>
          </h2>

          <ul className="text-left space-y-3 max-w-md mx-auto">
            {highlights.map((item) => (
              <li key={item.title} className="flex items-start gap-3 text-slate-700">
                <CheckCircle2 className="text-[#4ADE80] shrink-0 mt-0.5" size={18} />
                <span className="text-sm sm:text-base font-medium">{item.title}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/why-pharmefc"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-linear-to-r from-[#4F9DF8] to-[#4ADE80] text-white font-semibold hover:shadow-lg transition-all"
          >
            Discover Why PharmEFC
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
