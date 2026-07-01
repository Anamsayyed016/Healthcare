'use client';

import { motion } from 'framer-motion';
import { Pill, Settings2, Users, ShieldCheck } from 'lucide-react';
import { aboutContent } from '@/lib/data/about';

const achievementIcons = {
  pill: Pill,
  services: Settings2,
  users: Users,
  shield: ShieldCheck,
};

export default function AboutHighlights() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A]">Company Highlights</h2>
          <p className="text-[#64748B] mt-3">What defines PharmEFC as a healthcare partner.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutContent.achievements.map((item, index) => {
            const Icon = achievementIcons[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="text-center rounded-2xl border border-[#E2E8F0] bg-[#F8FBFF] p-8 hover:shadow-md transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-white border border-[#E2E8F0] flex items-center justify-center mx-auto mb-5">
                  <Icon className="text-pharm-blue-light" size={26} strokeWidth={1.75} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2">{item.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
