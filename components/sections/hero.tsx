'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Pill,
  ShieldCheck,
  Sparkles,
  Microscope,
  HeartPulse,
} from 'lucide-react';

const HERO_DECOR_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1782895230/gem2_jiorf5.png';

const trustHighlights = [
  'WHO-GMP Manufacturing',
  'Professional Healthcare Services',
  'Ethical Business Practices',
  'Trusted Pharmaceutical Partner',
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
        <div className="relative overflow-hidden rounded-[28px] border border-[#E2E8F0] bg-white/80 p-8 shadow-[0_24px_64px_-24px_rgba(27,90,174,0.18)] backdrop-blur-sm sm:p-10">
          <div className="absolute inset-5 z-0 overflow-hidden rounded-2xl">
            <div className="relative h-full w-full">
              <Image
                src={HERO_DECOR_IMAGE}
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="pointer-events-none absolute inset-5 z-[1] rounded-2xl bg-linear-to-b from-white/10 via-white/5 to-transparent" />
          <svg
            className="pointer-events-none absolute inset-0 z-[2] h-full w-full opacity-[0.04]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="hero-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M32 0H0V32" fill="none" stroke="#3B82F6" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>

          <div className="relative z-10 flex flex-col items-center gap-8">
            <div className="relative flex w-full max-h-64 items-center justify-center aspect-[4/3]">
              <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-2xl bg-linear-to-br from-[#3B82F6] to-[#60A5FA] shadow-lg shadow-blue-200/50">
                <HeartPulse className="text-white" size={44} strokeWidth={1.5} />
              </div>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-4 left-4 z-20 w-14 h-14 rounded-xl bg-white border border-[#E2E8F0] shadow-sm flex items-center justify-center"
              >
                <Pill className="text-[#3B82F6]" size={26} />
              </motion.div>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-6 right-6 z-20 w-14 h-14 rounded-xl bg-white border border-[#E2E8F0] shadow-sm flex items-center justify-center"
              >
                <Microscope className="text-[#D62839]" size={26} />
              </motion.div>
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
                className="absolute top-8 right-8 z-20 w-12 h-12 rounded-full bg-[#F0FDF4] border border-[#E2E8F0] flex items-center justify-center"
              >
                <ShieldCheck className="text-[#D62839]" size={22} />
              </motion.div>
            </div>

            <div className="grid grid-cols-3 gap-3 w-full">
              {[
                { label: 'Pharmaceuticals', icon: Pill, color: 'text-[#3B82F6]' },
                { label: 'Innovation', icon: Sparkles, color: 'text-[#D62839]' },
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
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#D62839]/[0.08] blur-3xl pointer-events-none" />
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-shell-hero">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-xl text-left"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <div className="section-eyebrow">
                <Pill size={16} className="text-[#1B5AAE]" />
                <span>PharmEFC Healthcare</span>
              </div>
            </motion.div>

            <motion.h1 variants={itemVariants} className="hero-title mb-5">
              Quality Medicines.
              <span className="block mt-1">
                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#1B5AAE] to-[#3B82F6]">
                  Trusted Healthcare
                </span>{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#1B5AAE] to-[#60A5FA]">
                  Solutions.
                </span>
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="section-desc mb-8 max-w-md"
            >
              WHO-GMP pharmaceutical products and professional healthcare services from Vadodara,
              India.
            </motion.p>

            <motion.div variants={itemVariants} className="mb-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <button type="button" className="btn-pharm-primary group px-6 py-3">
                Schedule Consultation
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-0.5 transition-transform duration-200"
                />
              </button>
              <button type="button" className="btn-pharm-secondary px-6 py-3">
                Explore Services
              </button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-x-6 gap-y-2">
              {trustHighlights.slice(0, 3).map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 body-sm"
                >
                  <span className="accent-dot-red" />
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
