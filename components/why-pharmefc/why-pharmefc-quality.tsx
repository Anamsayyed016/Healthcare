'use client';

import { motion } from 'framer-motion';
import { Award, CheckCircle2, ShieldCheck, Settings2 } from 'lucide-react';
import { qualityStandards } from '@/lib/data/why-pharmefc-page';
import { iconColor, ICON_GLASS_SM } from '@/lib/icons';

const iconMap = {
  certificate: Award,
  check: CheckCircle2,
  shield: ShieldCheck,
  cog: Settings2,
};

const iconColorMap = {
  certificate: iconColor('quality'),
  check: iconColor('medical-highlight'),
  shield: iconColor('quality'),
  cog: iconColor('support'),
} as const;

export default function WhyPharmefcQuality() {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-3">Quality Standards</h2>
          <p className="text-[#64748B]">
            Rigorous frameworks that underpin every PharmEFC product and service.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {qualityStandards.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="rounded-[24px] bg-[#F8FBFF] border border-[#E2E8F0] p-6 hover:shadow-md transition-all text-center"
              >
                <div className={`mx-auto mb-4 ${ICON_GLASS_SM}`}>
                  <Icon className={iconColorMap[item.icon]} size={22} strokeWidth={1.75} />
                </div>
                <h3 className="font-bold text-[#0F172A] text-sm mb-2">{item.title}</h3>
                <p className="text-xs text-[#64748B] leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
