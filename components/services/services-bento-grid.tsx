'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { services } from '@/lib/data/services';
import { serviceIconMap, getServiceIconColor, ICON_GLASS_MD, ICON_GLASS_SM } from '@/lib/icons';
import { bentoLayout, serviceKeyBenefits } from '@/lib/data/services-page';

export default function ServicesBentoGrid() {
  return (
    <section id="services-grid" className="py-14 sm:py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-3">Our Services</h2>
          <p className="text-[#64748B]">
            A comprehensive portfolio of healthcare consulting and operational solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 auto-rows-fr">
          {services.map((service, index) => {
            const Icon = serviceIconMap[service.icon];
            const span = bentoLayout[service.slug] ?? '';
            const isLarge = span.includes('row-span-2');
            const keyBenefit = serviceKeyBenefits[service.slug];

            return (
              <motion.article
                key={service.slug}
                id={`service-${service.slug}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: index * 0.04 }}
                whileHover={{ y: -4 }}
                className={`group scroll-mt-24 ${span}`}
              >
                <div
                  className={`h-full min-h-[220px] rounded-[22px] border border-[#E2E8F0] bg-white p-6 sm:p-7 flex flex-col shadow-[0_2px_8px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_32px_rgba(15,23,42,0.08)] hover:border-[#93C5FD]/50 transition-all duration-300 ${
                    isLarge ? 'lg:p-8' : ''
                  }`}
                >
                  <div className={`mb-5 ${isLarge ? ICON_GLASS_MD : ICON_GLASS_SM}`}>
                    <Icon
                      className={getServiceIconColor(service.icon)}
                      size={isLarge ? 26 : 22}
                      strokeWidth={1.75}
                    />
                  </div>
                  <h3
                    className={`font-bold text-[#0F172A] mb-2 leading-snug ${
                      isLarge ? 'text-xl sm:text-2xl' : 'text-lg'
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`text-[#64748B] leading-relaxed grow ${
                      isLarge ? 'text-base' : 'text-sm'
                    }`}
                  >
                    {service.description}
                  </p>
                  {keyBenefit && (
                    <p className="text-xs font-medium text-[#3B82F6] mt-3 mb-4">{keyBenefit}</p>
                  )}
                  <Link
                    href={`#feature-${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#3B82F6] hover:gap-2.5 transition-all mt-auto pt-4 border-t border-[#E2E8F0]"
                  >
                    Learn More
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
