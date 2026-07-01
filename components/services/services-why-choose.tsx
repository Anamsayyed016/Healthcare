'use client';

import { motion } from 'framer-motion';
import {
  Users,
  Scale,
  Briefcase,
  ShieldCheck,
  Settings2,
  Layers,
} from 'lucide-react';
import { iconSemanticClass } from '@/lib/icons';
import { whyChooseServices } from '@/lib/data/services-page';

const iconMap = {
  users: Users,
  scale: Scale,
  briefcase: Briefcase,
  shield: ShieldCheck,
  settings: Settings2,
  layers: Layers,
};

const iconColorMap = {
  users: iconSemanticClass.support,
  scale: iconSemanticClass.support,
  briefcase: iconSemanticClass.support,
  shield: iconSemanticClass.security,
  settings: iconSemanticClass.support,
  layers: iconSemanticClass.support,
} as const;

export default function ServicesWhyChoose() {
  return (
    <section className="py-14 sm:py-20 bg-[#F0FDF4]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-3">
            Why Choose Our Services
          </h2>
          <p className="text-[#64748B]">
            Partner with a team that understands healthcare at every level.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseServices.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                whileHover={{ y: -4 }}
                className="rounded-[20px] bg-white border border-[#E2E8F0] p-6 hover:shadow-md transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-[#F8FBFF] border border-[#E2E8F0] flex items-center justify-center mb-4">
                  <Icon className={iconColorMap[item.icon]} size={20} strokeWidth={1.75} />
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
