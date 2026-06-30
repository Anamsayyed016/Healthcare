'use client';

import { motion } from 'framer-motion';
import {
  Flag,
  TrendingUp,
  Building2,
  Pill,
  Stethoscope,
  Globe2,
} from 'lucide-react';
import { aboutContent } from '@/lib/data/about';

const iconMap = {
  flag: Flag,
  trending: TrendingUp,
  building: Building2,
  pill: Pill,
  stethoscope: Stethoscope,
  globe: Globe2,
};

export default function AboutTimeline() {
  return (
    <section className="py-16 sm:py-24 bg-[#F8FBFF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B] mb-3">
            Our Journey
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A]">Company Timeline</h2>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-[2.75rem] left-[8%] right-[8%] h-px bg-linear-to-r from-transparent via-[#3B82F6]/30 to-transparent" />

          <div className="flex lg:flex-row flex-col lg:justify-between gap-8 lg:gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
            {aboutContent.timeline.map((item, index) => {
              const Icon = iconMap[item.icon];
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex lg:flex-col items-center lg:text-center gap-4 lg:gap-0 shrink-0 lg:flex-1 min-w-[200px] lg:min-w-0"
                >
                  <div className="relative z-10 w-14 h-14 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm flex items-center justify-center lg:mb-5">
                    <Icon className="text-[#3B82F6]" size={24} strokeWidth={1.75} />
                  </div>
                  {index < aboutContent.timeline.length - 1 && (
                    <div className="lg:hidden text-[#CBD5E1] text-2xl font-light">↓</div>
                  )}
                  <div className="lg:px-2">
                    <span className="text-xs font-bold text-[#3B82F6]">{item.year}</span>
                    <h3 className="font-bold text-[#0F172A] mt-1 mb-1">{item.title}</h3>
                    <p className="text-xs text-[#64748B] leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
