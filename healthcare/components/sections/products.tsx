'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Pill,
  Tablets,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Bone EFC Tablet',
    category: 'Bone Health',
    icon: Pill,
    accent: 'from-sky-400/20 via-blue-50 to-emerald-50',
    border: 'from-sky-300/60 to-emerald-300/40',
    iconBg: 'from-[#4F9DF8] to-[#7DD3FC]',
  },
  {
    id: 2,
    name: 'Nerve EFC Tablet',
    category: 'Neurology',
    icon: Tablets,
    accent: 'from-violet-400/15 via-blue-50 to-sky-50',
    border: 'from-violet-300/50 to-sky-300/40',
    iconBg: 'from-[#6366F1] to-[#4F9DF8]',
  },
  {
    id: 3,
    name: 'Itracient 100 Capsule',
    category: 'Antifungal',
    icon: Tablets,
    accent: 'from-emerald-400/15 via-[#F4FFF7] to-sky-50',
    border: 'from-emerald-300/50 to-sky-300/40',
    iconBg: 'from-[#34D399] to-[#4ADE80]',
  },
  {
    id: 4,
    name: 'Itracient 200 Capsule',
    category: 'Antifungal',
    icon: Tablets,
    accent: 'from-teal-400/15 via-[#F4FFF7] to-blue-50',
    border: 'from-teal-300/50 to-blue-300/40',
    iconBg: 'from-[#2DD4BF] to-[#4ADE80]',
  },
  {
    id: 5,
    name: 'Lulicient Cream',
    category: 'Dermatology',
    icon: Sparkles,
    accent: 'from-rose-300/15 via-white to-sky-50',
    border: 'from-rose-300/40 to-sky-300/40',
    iconBg: 'from-[#F472B6] to-[#4F9DF8]',
  },
  {
    id: 6,
    name: 'Terbicient 250 Tablet',
    category: 'Antifungal',
    icon: Pill,
    accent: 'from-amber-300/15 via-[#F8FBFF] to-emerald-50',
    border: 'from-amber-300/40 to-emerald-300/40',
    iconBg: 'from-[#FBBF24] to-[#4ADE80]',
  },
  {
    id: 7,
    name: 'Levocient 5 Tablet',
    category: 'Allergy Care',
    icon: Pill,
    accent: 'from-cyan-300/15 via-[#F8FBFF] to-white',
    border: 'from-cyan-300/50 to-sky-300/40',
    iconBg: 'from-[#22D3EE] to-[#4F9DF8]',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
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

function WaveDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div className={`absolute left-0 right-0 ${flip ? 'bottom-0 rotate-180' : 'top-0'} pointer-events-none`}>
      <svg viewBox="0 0 1440 80" fill="none" className="w-full h-12 sm:h-16" preserveAspectRatio="none">
        <path
          d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z"
          fill="#F8FBFF"
          fillOpacity="0.9"
        />
      </svg>
    </div>
  );
}

export default function ProductsSection() {
  return (
    <section className="relative py-24 sm:py-32 lg:py-40 bg-white overflow-hidden" id="products">
      <div className="absolute top-24 -left-32 w-96 h-96 rounded-full bg-sky-200/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -right-24 w-80 h-80 rounded-full bg-emerald-200/25 blur-3xl pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgb(79 157 248 / 0.08) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <WaveDivider />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 lg:mb-24"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F8FBFF] border border-sky-100 text-sm font-semibold text-[#4F9DF8] mb-6">
            <Pill size={16} />
            Pharmaceutical Products
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6">
            Our <span className="text-transparent bg-clip-text bg-linear-to-r from-[#4F9DF8] to-[#4ADE80]">Products</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
            Premium pharmaceutical and healthcare solutions crafted with precision, quality, and
            patient wellbeing at the core.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <motion.article
                key={product.id}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="group relative"
              >
                <div
                  className={`absolute -inset-px rounded-[28px] bg-linear-to-br ${product.border} opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500`}
                />
                <div
                  className={`relative h-full rounded-[28px] bg-linear-to-br ${product.accent} backdrop-blur-sm border border-white/80 shadow-[0_8px_40px_-12px_rgba(79,157,248,0.18)] group-hover:shadow-[0_20px_60px_-16px_rgba(79,157,248,0.28)] transition-all duration-500 p-8 flex flex-col`}
                >
                  <div className="flex items-start justify-between mb-8">
                    <motion.div
                      whileHover={{ rotate: [0, -8, 8, 0] }}
                      transition={{ duration: 0.5 }}
                      className={`relative w-16 h-16 rounded-2xl bg-linear-to-br ${product.iconBg} flex items-center justify-center shadow-lg`}
                    >
                      <Icon className="text-white" size={30} strokeWidth={1.75} />
                      <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                    <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-white/80 text-[#4F9DF8] border border-sky-100 shadow-sm">
                      {product.category}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-8 leading-snug">
                    {product.name}
                  </h3>

                  <div className="mt-auto flex flex-col sm:flex-row gap-3 pt-6 border-t border-white/60">
                    <button
                      type="button"
                      className="flex-1 px-4 py-3 rounded-2xl bg-white/90 text-slate-800 font-semibold text-sm border border-sky-100 hover:bg-white hover:border-sky-200 hover:shadow-md transition-all duration-300"
                    >
                      Learn More
                    </button>
                    <Link
                      href="/contact"
                      className="flex-1 px-4 py-3 rounded-2xl bg-linear-to-r from-[#4F9DF8] to-[#4ADE80] text-white font-semibold text-sm flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-sky-200/50 transition-all duration-300 group/btn"
                    >
                      Enquiry
                      <ArrowRight
                        size={16}
                        className="group-hover/btn:translate-x-1 transition-transform"
                      />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-16 sm:mt-20 lg:mt-24"
        >
          <div className="relative overflow-hidden rounded-[32px] border border-sky-100/80 bg-linear-to-r from-[#F8FBFF] via-white to-[#F4FFF7] p-8 sm:p-10 lg:p-12 shadow-[0_20px_60px_-24px_rgba(79,157,248,0.2)]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />
            <div className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-linear-to-br from-[#4F9DF8] to-[#4ADE80] flex items-center justify-center shadow-xl"
              >
                <ShieldCheck className="text-white" size={40} strokeWidth={1.5} />
              </motion.div>
              <div className="text-center lg:text-left">
                <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#4F9DF8] mb-3">
                  Quality Assurance
                </p>
                <blockquote className="text-lg sm:text-xl lg:text-2xl font-medium text-slate-800 leading-relaxed">
                  All products are manufactured through reputed WHO-GMP manufacturing partners
                  under stringent quality standards.
                </blockquote>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
