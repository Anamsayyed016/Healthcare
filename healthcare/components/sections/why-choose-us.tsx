'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Users,
  Globe2,
  HeartHandshake,
  Scale,
  Layers,
  ArrowRight,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const reasons: {
  icon: LucideIcon;
  title: string;
  description: string;
  position: string;
}[] = [
  {
    icon: ShieldCheck,
    title: 'Quality Assured Products',
    description:
      'Every pharmaceutical offering meets rigorous quality benchmarks through trusted WHO-GMP manufacturing partnerships.',
    position: 'md:col-start-1 md:row-start-1',
  },
  {
    icon: Users,
    title: 'Experienced Leadership Team',
    description:
      'Seasoned healthcare leaders guiding strategy with deep industry expertise and proven operational excellence.',
    position: 'md:col-start-2 md:row-start-1',
  },
  {
    icon: Globe2,
    title: 'Global Healthcare Perspective',
    description:
      'International best practices and global standards woven into every solution we deliver for modern healthcare.',
    position: 'md:col-start-3 md:row-start-1',
  },
  {
    icon: HeartHandshake,
    title: 'Customer-Centric Approach',
    description:
      'Personalized attention and responsive support ensuring every client and patient receives dedicated care.',
    position: 'md:col-start-1 md:row-start-2',
  },
  {
    icon: Scale,
    title: 'Ethical Business Practices',
    description:
      'Integrity, transparency, and accountability form the foundation of every partnership and transaction.',
    position: 'md:col-start-2 md:row-start-2',
  },
  {
    icon: Layers,
    title: 'End-to-End Healthcare Solutions',
    description:
      'From pharmaceuticals to hospital consultancy — comprehensive services under one trusted healthcare partner.',
    position: 'md:col-start-3 md:row-start-2',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function WhyChooseUsSection() {
  return (
    <section className="relative py-24 sm:py-32 lg:py-40 bg-[#F4FFF7] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(90vw,56rem)] h-[min(90vw,56rem)] rounded-full border border-emerald-200/40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(70vw,42rem)] h-[min(70vw,42rem)] rounded-full border border-sky-200/30" />
        <div className="absolute top-16 right-10 w-56 h-56 rounded-full bg-emerald-200/25 blur-3xl" />
        <div className="absolute bottom-16 left-10 w-64 h-64 rounded-full bg-sky-200/25 blur-3xl" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="medical-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M24 8v32M8 24h32" stroke="#4F9DF8" strokeWidth="1" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#medical-grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 lg:mb-24"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-emerald-100 text-sm font-semibold text-emerald-700 mb-6 shadow-sm">
            <ShieldCheck size={16} />
            Why PharmEFC
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6">
            Why Choose{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#4F9DF8] to-[#4ADE80]">
              PharmEFC
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
            Industry-leading excellence across healthcare and pharmaceutical services — built on
            trust, quality, and a commitment to better outcomes.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-[16.66%] right-[16.66%] h-px bg-linear-to-r from-transparent via-sky-300/50 to-transparent -translate-y-8" />
          <div className="hidden lg:block absolute left-1/2 top-[12%] bottom-[12%] w-px bg-linear-to-b from-transparent via-emerald-300/40 to-transparent -translate-x-1/2" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          >
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.article
                  key={reason.title}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  className={`group relative ${reason.position}`}
                >
                  <div className="absolute -inset-px rounded-[28px] bg-linear-to-br from-sky-300/50 to-emerald-300/40 opacity-0 group-hover:opacity-100 blur-[2px] transition-opacity duration-500" />
                  <div className="relative h-full rounded-[28px] bg-white/75 backdrop-blur-xl border border-white shadow-[0_12px_48px_-16px_rgba(52,211,153,0.18)] group-hover:shadow-[0_24px_64px_-20px_rgba(79,157,248,0.22)] transition-all duration-500 p-8 sm:p-9">
                    <div className="flex flex-col items-center text-center">
                      <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                          duration: 3 + index * 0.3,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                        className="relative mb-6"
                      >
                        <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-[#4F9DF8]/20 to-[#4ADE80]/20 blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative w-16 h-16 rounded-2xl bg-linear-to-br from-[#4F9DF8] to-[#4ADE80] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <Icon className="text-white" size={30} strokeWidth={1.75} />
                        </div>
                      </motion.div>

                      <span className="text-xs font-bold uppercase tracking-widest text-[#4F9DF8]/80 mb-3">
                        0{index + 1}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">
                        {reason.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="text-center mt-16 sm:mt-20"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-[24px] bg-linear-to-r from-[#4F9DF8] to-[#4ADE80] text-white font-semibold shadow-lg shadow-sky-200/40 hover:shadow-xl hover:scale-[1.03] transition-all duration-300 group"
          >
            Experience the Difference
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
