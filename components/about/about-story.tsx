'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Target, Eye } from 'lucide-react';
import { aboutContent } from '@/lib/data/about';

export default function AboutStory() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            className="space-y-8"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B] mb-3">
                Our Story
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-5">Company Story</h2>
              <p className="text-[#64748B] leading-relaxed text-base sm:text-lg">
                {aboutContent.story}
              </p>
            </div>

            <ul className="space-y-3">
              {aboutContent.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#0F172A]">
                  <CheckCircle2 className="text-[#D62839] shrink-0 mt-0.5" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="p-5 rounded-2xl bg-[#F8FBFF] border border-[#E2E8F0]">
                <div className="flex items-center gap-2 mb-2">
                  <Eye className="text-[#3B82F6]" size={20} />
                  <h3 className="font-semibold text-[#0F172A]">Vision</h3>
                </div>
                <p className="text-sm text-[#64748B] leading-relaxed line-clamp-4">
                  {aboutContent.vision}
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-[#F0FDF4]/60 border border-[#E2E8F0]">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="text-[#D62839]" size={20} />
                  <h3 className="font-semibold text-[#0F172A]">Mission</h3>
                </div>
                <p className="text-sm text-[#64748B] leading-relaxed line-clamp-4">
                  {aboutContent.mission}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.1 }}
            className="relative"
          >
            <div className="rounded-[28px] border border-[#E2E8F0] bg-linear-to-br from-[#F8FBFF] to-[#F0FDF4]/50 p-8 sm:p-10 space-y-6">
              <h3 className="text-xl font-bold text-[#0F172A]">Why We Exist</h3>
              <p className="text-[#64748B] leading-relaxed">{aboutContent.whyWeExist}</p>
              <div className="h-px bg-[#E2E8F0]" />
              <h3 className="text-xl font-bold text-[#0F172A]">Our Philosophy</h3>
              <p className="text-[#64748B] leading-relaxed">{aboutContent.philosophy}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
