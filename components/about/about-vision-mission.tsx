'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Target } from 'lucide-react';
import { aboutContent } from '@/lib/data/about';

export default function AboutVisionMission() {
  return (
    <section id="vision" className="py-16 sm:py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A]">Vision & Mission</h2>
          <p className="text-[#64748B] mt-3">The principles that guide every decision we make.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="relative overflow-hidden rounded-[24px] border-l-4 border-l-[#3B82F6] border border-[#E2E8F0] bg-linear-to-br from-[#F8FBFF] to-white p-8 sm:p-10 shadow-[0_8px_30px_-12px_rgba(27,90,174,0.15)]"
          >
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#3B82F6]/[0.05] -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-[#3B82F6] flex items-center justify-center mb-6 shadow-lg shadow-blue-200/40">
                <Lightbulb className="text-white" size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-4">Our Vision</h3>
              <p className="text-[#64748B] leading-relaxed">{aboutContent.vision}</p>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="relative overflow-hidden rounded-[24px] border-l-4 border-l-[#34D399] border border-[#E2E8F0] bg-linear-to-br from-[#F0FDF4]/50 to-white p-8 sm:p-10 shadow-[0_8px_30px_-12px_rgba(52,211,153,0.12)]"
          >
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#D62839]/[0.06] -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-[#D62839] flex items-center justify-center mb-6 shadow-lg shadow-emerald-200/40">
                <Target className="text-white" size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A] mb-4">Our Mission</h3>
              <p className="text-[#64748B] leading-relaxed">{aboutContent.mission}</p>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
