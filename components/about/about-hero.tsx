'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, FlaskConical, Microscope, ShieldCheck } from 'lucide-react';
import {
  ABOUT_HERO_DECOR_IMAGE,
  FloatingHeroIcon,
  HeroVisualCard,
} from '@/components/sections/hero-visual-card';
import { iconColor } from '@/lib/icons';
import { heroCardFloat } from '@/lib/motion';

function AboutHeroIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="relative mx-auto w-full max-w-md lg:ml-auto"
    >
      <motion.div
        animate={{ y: heroCardFloat.y }}
        transition={heroCardFloat.transition}
        className="relative"
      >
        <div className="absolute -inset-4 rounded-[32px] bg-linear-to-br from-[#EFF6FF]/80 to-[#F0FDF4]/80 blur-sm" />
        <HeroVisualCard backgroundImage={ABOUT_HERO_DECOR_IMAGE} patternId="about-hero-grid">
          <div className="relative flex h-48 w-full items-center justify-center">
            <div className="relative z-10 flex h-28 w-28 items-center justify-center rounded-2xl bg-linear-to-br from-[#2563EB] via-[#3B82F6] to-[#60A5FA] shadow-[0_12px_32px_-8px_rgba(27,90,174,0.38)] transition-shadow duration-500 hover:shadow-[0_16px_40px_-6px_rgba(27,90,174,0.42)]">
              <Building2 className="text-white" size={48} strokeWidth={1.5} />
            </div>
            <FloatingHeroIcon
              amplitude={6}
              duration={4}
              className="absolute top-2 left-4 z-20 flex h-12 w-12 items-center justify-center rounded-xl border border-[#E2E8F0] bg-white shadow-sm"
            >
              <FlaskConical className={iconColor('research')} size={22} />
            </FloatingHeroIcon>
            <FloatingHeroIcon
              amplitude={7}
              duration={4.5}
              delay={0.5}
              direction="down"
              className="absolute bottom-4 right-4 z-20 flex h-12 w-12 items-center justify-center rounded-xl border border-[#E2E8F0] bg-white shadow-sm"
            >
              <Microscope className={iconColor('research')} size={22} />
            </FloatingHeroIcon>
            <FloatingHeroIcon
              amplitude={5}
              duration={3.8}
              delay={1}
              className="absolute top-6 right-8 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-[#E2E8F0] bg-[#F0FDF4]"
            >
              <ShieldCheck className={iconColor('security')} size={18} />
            </FloatingHeroIcon>
          </div>
          <p className="max-w-xs text-center text-sm leading-relaxed text-[#64748B]">
            Advancing quality medicines and professional healthcare services from Vadodara, India.
          </p>
        </HeroVisualCard>
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
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#D62839]/[0.06] blur-3xl pointer-events-none" />

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
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-pharm-blue-light">
              About PharmEFC
            </p>
            <h1 className="hero-title mb-5">
              A Progressive Healthcare &amp;{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#1B5AAE] to-[#3B82F6]">
                Pharmaceutical Company
              </span>
            </h1>
            <p className="section-desc mb-8 max-w-md">
              Quality medicines and professional healthcare services from Vadodara, India.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link href="/products" className="btn-pharm-primary px-6 py-3">
                Explore Products
                <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="btn-pharm-secondary px-6 py-3">
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
