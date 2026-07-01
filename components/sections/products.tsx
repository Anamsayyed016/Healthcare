'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Pill, Tablets, FlaskConical, ShieldCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { iconColor, ICON_GLASS_SM, ICON_GLASS_MD } from '@/lib/icons';

const PRODUCT_DESCRIPTION =
  'Manufactured under stringent WHO-GMP quality standards to ensure safety, consistency, and reliability.';

const products: {
  id: number;
  name: string;
  category: string;
  icon: LucideIcon;
}[] = [
  { id: 1, name: 'Bone EFC Tablet', category: 'Bone Health', icon: Pill },
  { id: 2, name: 'Nerve EFC Tablet', category: 'Neurology', icon: Tablets },
  { id: 3, name: 'Itracient 100 Capsule', category: 'Antifungal', icon: Tablets },
  { id: 4, name: 'Itracient 200 Capsule', category: 'Antifungal', icon: Tablets },
  { id: 5, name: 'Lulicient Cream', category: 'Dermatology', icon: FlaskConical },
  { id: 6, name: 'Terbicient 250 Tablet', category: 'Antifungal', icon: Pill },
  { id: 7, name: 'Levocient 5 Tablet', category: 'Allergy Care', icon: Pill },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export default function ProductsSection() {
  return (
    <section className="py-28 sm:py-32 lg:py-36 bg-white" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16 sm:mb-20 lg:mb-24"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B] mb-4">
            Pharmaceutical Products
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-[#0F172A] tracking-tight leading-tight mb-5">
            Our Products
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            A curated portfolio of pharmaceutical formulations developed with precision
            engineering, regulatory discipline, and uncompromising quality standards.
          </p>
        </motion.header>

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
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="group flex flex-col h-full bg-white border border-[#E5E7EB] rounded-[20px] p-7 sm:p-8 shadow-[0_1px_2px_rgba(15,23,42,0.04)] hover:shadow-[0_8px_24px_rgba(15,23,42,0.06)] hover:border-[#CBD5E1] transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4 mb-8">
                  <div className={`shrink-0 ${ICON_GLASS_SM} rounded-full`}>
                    <Icon className={iconColor('pharmaceutical')} size={20} strokeWidth={1.75} />
                  </div>
                  <span className="text-[11px] font-medium uppercase tracking-wider text-[#64748B] pt-1">
                    {product.category}
                  </span>
                </div>

                <div className="grow mb-8">
                  <h3 className="text-xl font-semibold text-[#0F172A] leading-snug mb-3">
                    {product.name}
                  </h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">
                    {PRODUCT_DESCRIPTION}
                  </p>
                </div>

                <div className="mt-auto pt-6 border-t border-[#E2E8F0] flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    className="flex-1 px-4 py-2.5 rounded-lg bg-white text-[#0F172A] text-sm font-medium border border-[#E2E8F0] hover:border-[#CBD5E1] hover:bg-[#F8FBFF] transition-colors duration-200"
                  >
                    Learn More
                  </button>
                  <Link
                    href="/contact"
                    className="flex-1 px-4 py-2.5 rounded-lg bg-[#1B5AAE] text-white text-sm font-medium flex items-center justify-center gap-2 hover:bg-[#144785] transition-colors duration-200 group/btn"
                  >
                    Enquiry
                    <ArrowRight
                      size={15}
                      className="group-hover/btn:translate-x-0.5 transition-transform duration-200"
                    />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-16 sm:mt-20 lg:mt-24"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 rounded-[20px] border border-[#E2E8F0] bg-[#F8FBFF] px-7 py-8 sm:px-10 sm:py-9">
            <div className={`shrink-0 ${ICON_GLASS_MD} rounded-full`}>
              <ShieldCheck className={iconColor('quality')} size={22} strokeWidth={1.75} />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#0F172A] mb-2">
                Manufactured to Global Quality Standards
              </h3>
              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed max-w-3xl">
                All products are manufactured through reputed WHO-GMP manufacturing partners
                under stringent quality standards.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
