'use client';

import { motion } from 'framer-motion';
import { Factory, Stethoscope, Handshake } from 'lucide-react';
import { whyPharmefcIntro } from '@/lib/data/why-pharmefc-page';
import { iconColor } from '@/lib/icons';

const iconMap = {
  factory: Factory,
  stethoscope: Stethoscope,
  handshake: Handshake,
};

const iconColorMap = {
  factory: iconColor('pharmaceutical'),
  stethoscope: iconColor('healthcare'),
  handshake: iconColor('support'),
} as const;

export default function WhyPharmefcIntro() {
  return (
    <section className="py-14 sm:py-20 bg-[#F8FBFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-5">
              {whyPharmefcIntro.heading}
            </h2>
            <p className="text-[#64748B] leading-relaxed text-base sm:text-lg">
              {whyPharmefcIntro.paragraph}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 lg:grid-cols-1 gap-4">
            {whyPharmefcIntro.highlights.map((item, index) => {
              const Icon = iconMap[item.icon];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -3 }}
                  className="rounded-[20px] bg-white border border-[#E2E8F0] p-5 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F8FBFF] border border-[#E2E8F0] flex items-center justify-center mb-3">
                    <Icon className={iconColorMap[item.icon]} size={20} strokeWidth={1.75} />
                  </div>
                  <h3 className="font-bold text-[#0F172A] text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-[#64748B] leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
