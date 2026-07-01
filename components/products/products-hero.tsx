'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Pill, FlaskConical, ShieldCheck, Package } from 'lucide-react';
import { iconColor, ICON_GLASS_LG, ICON_GLASS_SM, ICON_GLASS_PILL } from '@/lib/icons';

export default function ProductsHero() {
  const scrollToCatalogue = () => {
    document.getElementById('product-catalogue')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 75% 55% at 70% 0%, #EFF6FF 0%, #F8FBFF 40%, #FFFFFF 75%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="max-w-xl"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-[#F8FBFF] px-4 py-2">
              <Pill size={16} className="text-pharm-blue-light" />
              <span className="text-sm font-semibold text-[#3B82F6]">Pharmaceutical Products</span>
            </div>
            <h1 className="hero-title mb-4">
              Quality Pharmaceutical Products Through{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#1B5AAE] to-[#3B82F6]">
                WHO-GMP Partners
              </span>
            </h1>
            <p className="section-desc mb-6 max-w-md">
              A focused portfolio of WHO-GMP medicines manufactured through reputed partners.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={scrollToCatalogue}
                className="btn-pharm-primary px-6 py-3"
              >
                View Products
                <ArrowRight size={18} />
              </button>
              <Link href="/contact" className="btn-pharm-secondary px-6 py-3">
                Contact Sales
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative mx-auto w-full max-w-sm lg:ml-auto"
          >
            <div className="rounded-[28px] border border-[#E2E8F0] bg-white/90 p-6 shadow-[0_16px_48px_-20px_rgba(27,90,174,0.18)]">
              <div className="relative flex h-40 items-center justify-center">
                <div className={ICON_GLASS_LG}>
                  <Package className={iconColor('pharmaceutical')} size={44} strokeWidth={1.5} />
                </div>
                <div className={`absolute top-3 left-5 ${ICON_GLASS_SM}`}>
                  <Pill className={iconColor('pharmaceutical')} size={22} />
                </div>
                <div className={`absolute bottom-4 right-5 ${ICON_GLASS_SM}`}>
                  <FlaskConical className={iconColor('research')} size={22} />
                </div>
                <div className={`absolute top-5 right-7 ${ICON_GLASS_PILL} rounded-full`}>
                  <ShieldCheck className={iconColor('quality')} size={18} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
