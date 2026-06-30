'use client';

import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { comparisonRows } from '@/lib/data/why-pharmefc-page';

export default function WhyPharmefcComparison() {
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
            What Makes Us Different
          </h2>
          <p className="text-[#64748B]">
            See how PharmEFC compares to traditional healthcare providers.
          </p>
        </motion.div>

        <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] gap-4 mb-6 px-4">
          <p className="text-sm font-semibold text-[#64748B] uppercase tracking-wider text-center">
            Traditional Healthcare Providers
          </p>
          <div className="w-px" />
          <p className="text-sm font-semibold text-[#3B82F6] uppercase tracking-wider text-center">
            PharmEFC Healthcare
          </p>
        </div>

        <div className="space-y-4">
          {comparisonRows.map((row, index) => (
            <motion.div
              key={row.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="grid lg:grid-cols-[1fr_auto_1fr] gap-4 items-stretch"
            >
              <div className="rounded-[20px] bg-white border border-[#E2E8F0] p-5 flex gap-3">
                <div className="shrink-0 w-8 h-8 rounded-lg bg-[#FEF2F2] flex items-center justify-center">
                  <X className="text-[#EF4444]" size={16} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-1 lg:hidden">
                    Traditional
                  </p>
                  <p className="text-sm font-semibold text-[#0F172A] mb-1">{row.category}</p>
                  <p className="text-sm text-[#64748B] leading-relaxed">{row.traditional}</p>
                </div>
              </div>

              <div className="hidden lg:flex items-center justify-center px-2">
                <div className="w-px h-full bg-[#E2E8F0]" />
              </div>

              <div className="rounded-[20px] bg-white border border-[#93C5FD]/40 p-5 flex gap-3 shadow-[0_2px_8px_rgba(59,130,246,0.06)]">
                <div className="shrink-0 w-8 h-8 rounded-lg bg-[#F0FDF4] flex items-center justify-center">
                  <Check className="text-[#34D399]" size={16} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#3B82F6] mb-1 lg:hidden">
                    PharmEFC
                  </p>
                  <p className="text-sm font-semibold text-[#0F172A] mb-1">{row.category}</p>
                  <p className="text-sm text-[#64748B] leading-relaxed">{row.pharmefc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
