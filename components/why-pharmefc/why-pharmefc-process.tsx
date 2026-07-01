'use client';

import { motion } from 'framer-motion';
import { MessageSquare, ClipboardList, Rocket, HeadphonesIcon } from 'lucide-react';
import { partnershipSteps } from '@/lib/data/why-pharmefc-page';
import { iconColor, ICON_GLASS_MD, type IconSemantic } from '@/lib/icons';

const stepIcons = [MessageSquare, ClipboardList, Rocket, HeadphonesIcon];
const stepIconColors: IconSemantic[] = ['support', 'quality', 'innovation', 'support'];

export default function WhyPharmefcProcess() {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-3">Partnership Process</h2>
          <p className="text-[#64748B]">
            A structured approach to building lasting healthcare partnerships.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-px bg-linear-to-r from-[#3B82F6]/20 via-[#34D399]/30 to-[#3B82F6]/20" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipSteps.map((step, index) => {
              const Icon = stepIcons[index];
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className={`relative z-10 mx-auto mb-5 ${ICON_GLASS_MD}`}>
                    <Icon className={iconColor(stepIconColors[index])} size={26} strokeWidth={1.75} />
                  </div>
                  <span className="text-xs font-bold text-[#3B82F6] uppercase tracking-wider">
                    Step {step.step}
                  </span>
                  <h3 className="font-bold text-[#0F172A] mt-2 mb-2">{step.title}</h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
