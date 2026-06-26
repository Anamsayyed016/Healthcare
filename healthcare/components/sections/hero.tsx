'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Pill,
  ShieldCheck,
  Sparkles,
  Microscope,
  HeartPulse,
} from 'lucide-react';

const trustHighlights = [
  'WHO-GMP Manufacturing Standards',
  'Quality Healthcare Solutions',
  'Ethical Business Practices',
  'Trusted Healthcare Partner',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } },
};

function HeroIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.25 }}
      className="relative w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto"
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative"
      >
        <div className="absolute -inset-4 rounded-[32px] bg-linear-to-br from-[#EFF6FF]/80 to-[#F0FDF4]/80 blur-sm" />
        <div className="relative rounded-[28px] border border-[#E2E8F0] bg-white/80 backdrop-blur-sm shadow-[0_24px_64px_-24px_rgba(59,130,246,0.18)] p-8 sm:p-10 overflow-hidden">
          <svg
            className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="hero-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M32 0H0V32" fill="none" stroke="#3B82F6" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>

          <div className="relative flex flex-col items-center gap-8">
            <div className="relative w-full aspect-[4/3] max-h-64 flex items-center justify-center">
              <div className="absolute w-40 h-40 rounded-full bg-[#EFF6FF] border border-[#E2E8F0]" />
              <div className="absolute w-28 h-28 rounded-full bg-[#F0FDF4] border border-[#E2E8F0] translate-x-16 -translate-y-4" />
              <div className="relative z-10 w-24 h-24 rounded-2xl bg-linear-to-br from-[#3B82F6] to-[#60A5FA] flex items-center justify-center shadow-lg shadow-blue-200/50">
                <HeartPulse className="text-white" size={44} strokeWidth={1.5} />
              </div>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-4 left-4 w-14 h-14 rounded-xl bg-white border border-[#E2E8F0] shadow-sm flex items-center justify-center"
              >
                <Pill className="text-[#3B82F6]" size={26} />
              </motion.div>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-6 right-6 w-14 h-14 rounded-xl bg-white border border-[#E2E8F0] shadow-sm flex items-center justify-center"
              >
                <Microscope className="text-[#34D399]" size={26} />
              </motion.div>
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
                className="absolute top-8 right-8 w-12 h-12 rounded-full bg-[#F0FDF4] border border-[#E2E8F0] flex items-center justify-center"
              >
                <ShieldCheck className="text-[#34D399]" size={22} />
              </motion.div>
            </div>

            <div className="grid grid-cols-3 gap-3 w-full">
              {[
                { label: 'Pharmaceuticals', icon: Pill, color: 'text-[#3B82F6]' },
                { label: 'Innovation', icon: Sparkles, color: 'text-[#34D399]' },
                { label: 'Quality Care', icon: ShieldCheck, color: 'text-[#3B82F6]' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="text-center p-3 rounded-xl bg-[#F8FBFF] border border-[#E2E8F0]"
                >
                  <item.icon className={`${item.color} mx-auto mb-1.5`} size={20} />
                  <p className="text-[11px] font-medium text-[#64748B] leading-tight">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, #EFF6FF 0%, #F8FBFF 45%, #FFFFFF 75%)',
        }}
      />
      <div className="absolute top-0 right-0 w-[32rem] h-[32rem] rounded-full bg-[#3B82F6]/[0.06] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#34D399]/[0.08] blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-[#EFF6FF] blur-2xl opacity-60 pointer-events-none" />

      <svg
        className="absolute right-[8%] top-[18%] w-48 h-48 opacity-[0.03] pointer-events-none hidden lg:block"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path d="M50 10v80M10 50h80" stroke="#3B82F6" strokeWidth="8" strokeLinecap="round" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-xl text-left"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F8FBFF] border border-[#E2E8F0]">
                <Pill size={16} className="text-[#3B82F6]" />
                <span className="text-sm font-semibold text-[#3B82F6]">
                  Next Generation Healthcare
                </span>
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-[4.25rem] xl:text-[4.5rem] font-bold tracking-tight text-[#0F172A] leading-[1.08] mb-6"
            >
              Premium Healthcare
              <span className="block mt-1">
                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#3B82F6] to-[#60A5FA]">
                  Excellence
                </span>{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#34D399] to-[#6EE7B7]">
                  Reimagined
                </span>
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#64748B] leading-relaxed mb-8 max-w-lg"
            >
              Experience world-class medical excellence with cutting-edge technology, compassionate
              care, and innovative pharmaceutical solutions designed for your wellbeing.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-10">
              <button
                type="button"
                className="group px-7 py-3.5 rounded-[14px] bg-[#3B82F6] text-white font-semibold flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(59,130,246,0.25)] hover:bg-[#2563EB] transition-colors duration-200"
              >
                Schedule Consultation
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-0.5 transition-transform duration-200"
                />
              </button>
              <button
                type="button"
                className="px-7 py-3.5 rounded-[14px] bg-white border border-[#3B82F6]/30 text-[#3B82F6] font-semibold hover:bg-[#F8FBFF] hover:border-[#3B82F6]/50 transition-colors duration-200"
              >
                Explore Services
              </button>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {trustHighlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 text-sm text-[#64748B]"
                >
                  <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-[#34D399]" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <HeroIllustration />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 48" fill="none" className="w-full h-8" preserveAspectRatio="none">
          <path
            d="M0 24C360 48 720 0 1080 24C1260 36 1380 12 1440 24V48H0V24Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>
    </section>
  );
}
