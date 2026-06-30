'use client';

import { motion } from 'framer-motion';
import { whyChooseReasons } from '@/lib/data/why-choose-us';
import { whyChooseIconMap } from '@/lib/icons';
import { bentoLayout, reasonKeyBenefits } from '@/lib/data/why-pharmefc-page';

export default function WhyPharmefcStrengths() {
  return (
    <section id="core-strengths" className="py-14 sm:py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-3">Core Strengths</h2>
          <p className="text-[#64748B]">
            The pillars that set PharmEFC apart in healthcare and pharmaceuticals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 auto-rows-fr">
          {whyChooseReasons.map((reason, index) => {
            const Icon = whyChooseIconMap[reason.icon];
            const span = bentoLayout[reason.title] ?? '';
            const isLarge = span.includes('row-span-2');
            const keyBenefit = reasonKeyBenefits[reason.title];

            return (
              <motion.article
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className={`group ${span}`}
              >
                <div
                  className={`h-full min-h-[200px] rounded-[24px] border border-[#E2E8F0] bg-white p-6 sm:p-7 flex flex-col shadow-[0_2px_8px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_32px_rgba(15,23,42,0.08)] hover:border-[#93C5FD]/50 transition-all duration-300 ${
                    isLarge ? 'lg:p-8' : ''
                  }`}
                >
                  <div
                    className={`rounded-xl bg-[#F8FBFF] border border-[#E2E8F0] flex items-center justify-center mb-5 ${
                      isLarge ? 'w-14 h-14' : 'w-12 h-12'
                    }`}
                  >
                    <Icon className="text-[#3B82F6]" size={isLarge ? 26 : 22} strokeWidth={1.75} />
                  </div>
                  <h3
                    className={`font-bold text-[#0F172A] mb-2 leading-snug ${
                      isLarge ? 'text-xl sm:text-2xl' : 'text-lg'
                    }`}
                  >
                    {reason.title}
                  </h3>
                  <p
                    className={`text-[#64748B] leading-relaxed grow ${
                      isLarge ? 'text-base' : 'text-sm'
                    }`}
                  >
                    {reason.description}
                  </p>
                  {keyBenefit && (
                    <p className="text-xs font-medium text-[#3B82F6] mt-4 pt-4 border-t border-[#E2E8F0]">
                      {keyBenefit}
                    </p>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
