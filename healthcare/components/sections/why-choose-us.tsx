'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { whyChooseReasons } from '@/lib/data/why-choose-us';
import { whyChooseIconMap } from '@/lib/icons';

type WhyChooseUsSectionProps = {
  preview?: boolean;
};

export default function WhyChooseUsSection({ preview = false }: WhyChooseUsSectionProps) {
  const items = preview ? whyChooseReasons.slice(0, 3) : whyChooseReasons;

  return (
    <section className="relative py-24 sm:py-32 lg:py-40 bg-[#F4FFF7] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(90vw,56rem)] h-[min(90vw,56rem)] rounded-full border border-emerald-200/40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-6">
            Why Choose{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#4F9DF8] to-[#4ADE80]">
              PharmEFC
            </span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {preview
              ? 'Built on trust, quality, and a commitment to better healthcare outcomes.'
              : 'Industry-leading excellence across healthcare and pharmaceutical services — built on trust, quality, and a commitment to better outcomes.'}
          </p>
        </motion.div>

        {!preview && (
          <div className="hidden lg:block absolute top-1/2 left-[16.66%] right-[16.66%] h-px bg-linear-to-r from-transparent via-sky-300/50 to-transparent -translate-y-8 pointer-events-none" />
        )}

        <div
          className={`grid gap-6 lg:gap-8 ${
            preview ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1 md:grid-cols-3'
          }`}
        >
          {items.map((reason, index) => {
            const Icon = whyChooseIconMap[reason.icon];
            return (
              <motion.article
                key={reason.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className={`group relative ${preview ? '' : reason.position}`}
              >
                <div className="relative h-full rounded-[28px] bg-white/80 backdrop-blur-sm border border-white shadow-[0_12px_48px_-16px_rgba(52,211,153,0.12)] group-hover:shadow-[0_24px_64px_-20px_rgba(79,157,248,0.15)] transition-all duration-500 p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-[#4F9DF8] to-[#4ADE80] flex items-center justify-center mb-5">
                      <Icon className="text-white" size={26} strokeWidth={1.75} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">{reason.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">{reason.description}</p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <Link
            href={preview ? '/why-pharmefc' : '/contact'}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-[24px] bg-linear-to-r from-[#4F9DF8] to-[#4ADE80] text-white font-semibold hover:shadow-lg transition-all group"
          >
            {preview ? 'Discover Why PharmEFC' : 'Experience the Difference'}
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
