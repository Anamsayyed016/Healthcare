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
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A]">Core Values</h2>
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
                whileHover={{ y: -4 }}
                className="rounded-2xl bg-white border border-[#E2E8F0] p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-[#F8FBFF] border border-[#E2E8F0] flex items-center justify-center mb-4">
                  <Icon className="text-[#3B82F6]" size={22} strokeWidth={1.75} />
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
