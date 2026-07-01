'use client';

import { motion } from 'framer-motion';
import {
  Scale,
  Lightbulb,
  Users,
  HeartHandshake,
  Award,
  ShieldCheck,
} from 'lucide-react';
import { leadershipValues } from '@/lib/data/leadership-page';
import { iconSemanticClass } from '@/lib/icons';

const iconMap = {
  scale: Scale,
  lightbulb: Lightbulb,
  users: Users,
  heart: HeartHandshake,
  award: Award,
  shield: ShieldCheck,
};

const iconColorMap = {
  scale: iconSemanticClass.support,
  lightbulb: iconSemanticClass.innovation,
  users: iconSemanticClass.support,
  heart: iconSemanticClass.heart,
  award: iconSemanticClass.quality,
  shield: iconSemanticClass.quality,
} as const;

export default function LeadershipValues() {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-3">
            What Defines Our Leadership
          </h2>
          <p className="text-[#64748B]">
            The principles that guide every decision across PharmEFC&apos;s executive team.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {leadershipValues.map((value, index) => {
            const Icon = iconMap[value.icon];
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                whileHover={{ y: -4 }}
                className="rounded-[20px] bg-[#F8FBFF] border border-[#E2E8F0] p-6 hover:shadow-md transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center mb-4">
                  <Icon className={iconColorMap[value.icon]} size={20} strokeWidth={1.75} />
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
