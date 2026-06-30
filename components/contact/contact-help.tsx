'use client';

import { motion } from 'framer-motion';
import {
  Pill,
  Briefcase,
  Building2,
  Globe2,
  Handshake,
  Headphones,
} from 'lucide-react';
import { contactHelpTopics } from '@/lib/data/contact-page';

const iconMap = {
  pill: Pill,
  briefcase: Briefcase,
  building: Building2,
  globe: Globe2,
  handshake: Handshake,
  support: Headphones,
};

export default function ContactHelp() {
  return (
    <section className="py-14 sm:py-20 bg-[#F8FBFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-3">
            How Can We Help You?
          </h2>
          <p className="text-[#64748B]">
            Select the area that best matches your enquiry — our team is ready to assist.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactHelpTopics.map((topic, index) => {
            const Icon = iconMap[topic.icon];
            return (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                whileHover={{ y: -4 }}
                className="rounded-[24px] bg-white border border-[#E2E8F0] p-6 hover:shadow-md transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-[#F8FBFF] border border-[#E2E8F0] flex items-center justify-center mb-4">
                  <Icon className="text-[#3B82F6]" size={20} strokeWidth={1.75} />
                </div>
                <h3 className="font-bold text-[#0F172A] mb-2 text-sm sm:text-base">{topic.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{topic.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
