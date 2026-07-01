'use client';

import { motion } from 'framer-motion';
import {
  Lightbulb,
  ShieldCheck,
  Scale,
  HeartHandshake,
  Award,
  Handshake,
} from 'lucide-react';
import { aboutContent } from '@/lib/data/about';
import { getAboutValueIconColor } from '@/lib/icons';

const valueIcons = {
  lightbulb: Lightbulb,
  shield: ShieldCheck,
  scale: Scale,
  heart: HeartHandshake,
  award: Award,
  handshake: Handshake,
};

export default function AboutCoreValues() {
  return (
    <section className="py-16 sm:py-24 bg-[#F8FBFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <h2 className="section-title">Core Values</h2>
          <p className="text-[#64748B] mt-3">The foundation of everything we do at PharmEFC.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {aboutContent.coreValues.map((value, index) => {
            const Icon = valueIcons[value.icon];
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                whileHover={{ y: -3 }}
                className="group rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-[0_12px_32px_-10px_rgba(27,90,174,0.12)]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-[#E2E8F0] bg-[#F8FBFF] transition-colors duration-300 group-hover:border-[#c5d9f0]">
                  <Icon className={getAboutValueIconColor(value.icon)} size={22} strokeWidth={1.75} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2">{value.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{value.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
