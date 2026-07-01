'use client';

import { motion } from 'framer-motion';
import { Scale, Handshake, Users, Settings2 } from 'lucide-react';
import { trustCredibility } from '@/lib/data/why-pharmefc-page';

const iconMap = {
  scale: Scale,
  handshake: Handshake,
  users: Users,
  settings: Settings2,
};

export default function WhyPharmefcTrust() {
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
            Built on Trust &amp; Credibility
          </h2>
          <p className="text-[#64748B]">
            The principles that healthcare partners rely on when choosing PharmEFC.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {trustCredibility.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -3 }}
                className="rounded-[24px] bg-white border border-[#E2E8F0] p-6 sm:p-8 hover:shadow-md transition-all flex gap-5"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-[#F8FBFF] border border-[#E2E8F0] flex items-center justify-center">
                  <Icon className="text-pharm-blue-light" size={22} strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-bold text-[#0F172A] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
