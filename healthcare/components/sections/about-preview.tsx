'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { aboutContent } from '@/lib/data/about';

export default function AboutPreviewSection() {
  return (
    <section className="py-12 sm:py-16 bg-white" id="about">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          className="space-y-5"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            About <span className="text-[#4F9DF8]">PharmEFC</span>
          </h2>
          <p className="text-slate-600 leading-relaxed text-base sm:text-lg line-clamp-3">
            {aboutContent.story}
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-[#4F9DF8] font-semibold hover:gap-3 transition-all"
          >
            Learn More
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
