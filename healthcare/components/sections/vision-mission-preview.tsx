'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Lightbulb, Target, ArrowRight } from 'lucide-react';
import { aboutContent } from '@/lib/data/about';

export default function VisionMissionPreviewSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#F8FBFF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Vision & <span className="text-[#4F9DF8]">Mission</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Our commitment to excellence and patient care guides everything we do.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[#E2E8F0] bg-white p-8"
          >
            <div className="w-12 h-12 rounded-xl bg-[#F8FBFF] border border-[#E2E8F0] flex items-center justify-center mb-5">
              <Lightbulb className="text-[#1E6FD9]" size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Vision</h3>
            <p className="text-slate-600 leading-relaxed line-clamp-4">{aboutContent.vision}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border border-[#E2E8F0] bg-white p-8"
          >
            <div className="w-12 h-12 rounded-xl bg-[#F4FFF7] border border-[#E2E8F0] flex items-center justify-center mb-5">
              <Target className="text-[#10B981]" size={24} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Mission</h3>
            <p className="text-slate-600 leading-relaxed line-clamp-4">{aboutContent.mission}</p>
          </motion.div>
        </div>

        <div className="text-center">
          <Link
            href="/about#vision"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#4F9DF8] text-[#4F9DF8] font-semibold hover:bg-white transition-colors"
          >
            Explore Our Purpose
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
