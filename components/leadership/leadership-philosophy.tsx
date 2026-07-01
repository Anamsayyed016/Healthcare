'use client';

import { motion } from 'framer-motion';
import {
  Target,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Handshake,
} from 'lucide-react';
import { philosophyPillars } from '@/lib/data/leadership-page';
import { iconColor, ICON_GLASS_MD } from '@/lib/icons';

const pillarIcons = [Target, Sparkles, ShieldCheck, TrendingUp, Handshake];

const pillarIconColors = [
  iconColor('support'),
  iconColor('innovation'),
  iconColor('quality'),
  iconColor('innovation'),
  iconColor('support'),
];

export default function LeadershipPhilosophy() {
  return (
    <section className="py-14 sm:py-20 bg-[#F0FDF4]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-3">
            Our Commitment to Healthcare Excellence
          </h2>
          <p className="text-[#64748B]">
            A leadership philosophy rooted in vision, quality, and enduring partnerships.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-px bg-linear-to-r from-[#3B82F6]/15 via-[#34D399]/25 to-[#3B82F6]/15" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {philosophyPillars.map((pillar, index) => {
              const Icon = pillarIcons[index];
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative text-center lg:text-center"
                >
                  <div className={`relative z-10 mx-auto mb-4 ${ICON_GLASS_MD}`}>
                    <Icon className={pillarIconColors[index]} size={24} strokeWidth={1.75} />
                  </div>
                  <h3 className="font-bold text-[#0F172A] text-sm sm:text-base mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    {pillar.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
