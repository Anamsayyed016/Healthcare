'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, FlaskConical, Microscope, ShieldCheck } from 'lucide-react';
import { aboutContent } from '@/lib/data/about';

function AboutHeroIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="relative w-full max-w-md mx-auto lg:ml-auto"
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative rounded-[28px] border border-[#E2E8F0] bg-white/90 backdrop-blur-sm shadow-[0_20px_60px_-24px_rgba(59,130,246,0.2)] p-8 overflow-hidden"
      >
        <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-[#F0FDF4] opacity-80" />
        <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-[#EFF6FF] opacity-80" />

        <div className="relative flex flex-col items-center gap-6">
          <div className="relative w-full h-48 flex items-center justify-center">
            <div className="w-28 h-28 rounded-2xl bg-linear-to-br from-[#3B82F6] to-[#60A5FA] flex items-center justify-center shadow-lg">
              <Building2 className="text-white" size={48} strokeWidth={1.5} />
            </div>
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-2 left-4 w-12 h-12 rounded-xl bg-white border border-[#E2E8F0] shadow-sm flex items-center justify-center"
            >
              <FlaskConical className="text-[#34D399]" size={22} />
            </motion.div>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute bottom-4 right-4 w-12 h-12 rounded-xl bg-white border border-[#E2E8F0] shadow-sm flex items-center justify-center"
            >
              <Microscope className="text-[#3B82F6]" size={22} />
            </motion.div>
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute top-6 right-8 w-10 h-10 rounded-full bg-[#F0FDF4] border border-[#E2E8F0] flex items-center justify-center"
            >
              <ShieldCheck className="text-[#34D399]" size={18} />
            </motion.div>
          </div>
          <p className="text-center text-sm text-[#64748B] max-w-xs">
            Advancing pharmaceutical innovation and healthcare excellence across India.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 30% 0%, #F8FBFF 0%, #F0FDF4 35%, #FFFFFF 70%)',
        }}
      />
      <div className="absolute top-10 right-1/4 w-72 h-72 rounded-full bg-[#3B82F6]/[0.05] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#34D399]/[0.06] blur-3xl pointer-events-none" />

      <svg
        className="absolute left-[5%] top-[20%] w-32 h-32 opacity-[0.04] pointer-events-none"
        viewBox="0 0 80 80"
        aria-hidden
      >
        <circle cx="20" cy="20" r="4" fill="#3B82F6" />
        <circle cx="60" cy="40" r="4" fill="#34D399" />
        <line x1="20" y1="20" x2="60" y2="40" stroke="#3B82F6" strokeWidth="1" />
        <circle cx="40" cy="60" r="4" fill="#3B82F6" />
        <line x1="60" y1="40" x2="40" y2="60" stroke="#34D399" strokeWidth="1" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#3B82F6] mb-5">
              About PharmEFC
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-bold text-[#0F172A] leading-[1.12] tracking-tight mb-6">
              Transforming Healthcare Through{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#3B82F6] to-[#34D399]">
                Innovation & Trust
              </span>
            </h1>
            <p className="text-base sm:text-lg text-[#64748B] leading-relaxed mb-8">
              {aboutContent.heroIntro}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-[14px] bg-[#3B82F6] text-white font-semibold shadow-[0_4px_14px_rgba(59,130,246,0.25)] hover:bg-[#2563EB] transition-colors"
              >
                Explore Products
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-[14px] bg-white border border-[#3B82F6]/30 text-[#3B82F6] font-semibold hover:bg-[#F8FBFF] transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
          <AboutHeroIllustration />
        </div>
      </div>
    </section>
  );
}
