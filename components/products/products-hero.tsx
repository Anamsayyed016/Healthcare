'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Pill, FlaskConical, ShieldCheck, Package } from 'lucide-react';

export default function ProductsHero() {
  const scrollToCatalogue = () => {
    document.getElementById('product-catalogue')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 75% 55% at 70% 0%, #EFF6FF 0%, #F8FBFF 40%, #FFFFFF 75%)',
        }}
      />
      <div className="absolute top-16 right-1/4 w-80 h-80 rounded-full bg-[#3B82F6]/[0.05] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-[#D62839]/[0.06] blur-3xl pointer-events-none" />

      <svg
        className="absolute left-[10%] top-[30%] w-24 h-24 opacity-[0.04] pointer-events-none"
        viewBox="0 0 80 80"
        aria-hidden
      >
        <circle cx="20" cy="40" r="6" fill="#3B82F6" />
        <circle cx="50" cy="20" r="6" fill="#34D399" />
        <circle cx="60" cy="55" r="6" fill="#3B82F6" />
        <line x1="20" y1="40" x2="50" y2="20" stroke="#3B82F6" strokeWidth="1.5" />
        <line x1="50" y1="20" x2="60" y2="55" stroke="#34D399" strokeWidth="1.5" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F8FBFF] border border-[#E2E8F0] mb-6">
              <Pill size={16} className="text-pharm-blue-light" />
              <span className="text-sm font-semibold text-[#3B82F6]">Pharmaceutical Products</span>
            </div>
            <h1 className="hero-title mb-5">
              Quality Pharmaceutical Products Through{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#1B5AAE] to-[#3B82F6]">
                WHO-GMP Partners
              </span>
            </h1>
            <p className="section-desc mb-8 max-w-md">
              A focused portfolio of WHO-GMP medicines manufactured through reputed partners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={scrollToCatalogue}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-[14px] bg-[#3B82F6] text-white font-semibold shadow-[0_4px_14px_rgba(27,90,174,0.25)] hover:bg-[#2563EB] transition-colors"
              >
                View Products
                <ArrowRight size={18} />
              </button>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-[14px] bg-white border border-[#3B82F6]/30 text-[#3B82F6] font-semibold hover:bg-[#F8FBFF] transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative max-w-md mx-auto lg:ml-auto w-full"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative rounded-[28px] border border-[#E2E8F0] bg-white/90 backdrop-blur-sm shadow-[0_20px_60px_-24px_rgba(27,90,174,0.2)] p-8 overflow-hidden"
            >
              <div className="relative h-52 flex items-center justify-center">
                <div className="w-32 h-32 rounded-2xl bg-linear-to-br from-[#3B82F6] to-[#60A5FA] flex items-center justify-center shadow-lg">
                  <Package className="text-white" size={52} strokeWidth={1.5} />
                </div>
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-4 left-6 w-14 h-14 rounded-xl bg-white border border-[#E2E8F0] shadow-sm flex items-center justify-center"
                >
                  <Pill className="text-pharm-blue-light" size={26} />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute bottom-6 right-6 w-14 h-14 rounded-xl bg-white border border-[#E2E8F0] shadow-sm flex items-center justify-center"
                >
                  <FlaskConical className="text-pharm-blue-light" size={26} />
                </motion.div>
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute top-8 right-10 w-11 h-11 rounded-full bg-[#F0FDF4] border border-[#E2E8F0] flex items-center justify-center"
                >
                  <ShieldCheck className="text-pharm-blue-light" size={20} />
                </motion.div>
              </div>
              <p className="text-center text-sm text-[#64748B] mt-4">
                Pharmaceutical formulations backed by rigorous quality manufacturing.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
