'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Users,
  Factory,
  Microscope,
  Globe2,
  HeartPulse,
  ShieldCheck,
} from 'lucide-react';
import {
  HeroVisualCard,
  FloatingHeroIcon,
  WHY_PHARMEFC_HERO_DECOR_IMAGE,
} from '@/components/sections/hero-visual-card';
import { iconColor, ICON_GLASS_HEART, ICON_GLASS_PILL } from '@/lib/icons';
import { heroCardFloat } from '@/lib/motion';

const trustBadges = [
  'WHO-GMP Manufacturing',
  'Ethical Healthcare',
  'End-to-End Solutions',
];

function WhyPharmefcHeroIllustration() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.15 }}
      className="relative mx-auto w-full max-w-md lg:ml-auto"
    >
      <motion.div
        animate={{ y: heroCardFloat.y }}
        transition={heroCardFloat.transition}
        className="relative"
      >
        <div className="absolute -inset-4 rounded-[32px] bg-linear-to-br from-[#EFF6FF]/80 to-[#F0FDF4]/80 blur-sm" />
        <HeroVisualCard
          backgroundImage={WHY_PHARMEFC_HERO_DECOR_IMAGE}
          patternId="why-pharmefc-hero-grid"
          imageQuality={90}
        >
          <div className="relative flex aspect-[4/3] w-full max-h-64 items-center justify-center">
            <div className={ICON_GLASS_HEART}>
              <HeartPulse className="text-pharm-red-accent" size={48} strokeWidth={1.5} />
            </div>
            <FloatingHeroIcon
              amplitude={6}
              duration={4}
              className="absolute top-2 left-4"
            >
              <Users className={iconColor('support')} size={22} />
            </FloatingHeroIcon>
            <FloatingHeroIcon
              amplitude={6}
              duration={4.5}
              delay={0.5}
              direction="down"
              className="absolute bottom-4 right-4"
            >
              <Factory className={iconColor('pharmaceutical')} size={22} />
            </FloatingHeroIcon>
            <FloatingHeroIcon
              amplitude={5}
              duration={3.8}
              delay={1}
              glassClass={ICON_GLASS_PILL}
              className="absolute top-6 right-8 rounded-full"
            >
              <Microscope className={iconColor('research')} size={18} />
            </FloatingHeroIcon>
            <FloatingHeroIcon
              amplitude={5}
              duration={4.2}
              delay={0.3}
              direction="down"
              glassClass={ICON_GLASS_PILL}
              className="absolute bottom-10 left-8 rounded-full"
            >
              <Globe2 className={iconColor('healthcare')} size={18} />
            </FloatingHeroIcon>
          </div>
          <p className="max-w-xs text-center text-sm leading-relaxed text-[#64748B]">
            Global healthcare network built on quality and trust.
          </p>
        </HeroVisualCard>
      </motion.div>
    </motion.div>
  );
}

export default function WhyPharmefcHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 25% 0%, #F0FDF4 0%, #F8FBFF 45%, #FFFFFF 75%)',
        }}
      />
      <div className="absolute top-10 right-1/3 w-96 h-96 rounded-full bg-[#D62839]/[0.05] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-[#3B82F6]/[0.04] blur-3xl pointer-events-none" />

      <svg
        className="absolute left-[10%] top-[28%] w-24 h-24 opacity-[0.035] pointer-events-none hidden lg:block"
        viewBox="0 0 100 100"
        aria-hidden
      >
        <circle cx="30" cy="50" r="8" fill="none" stroke="#3B82F6" strokeWidth="2" />
        <circle cx="50" cy="30" r="8" fill="none" stroke="#34D399" strokeWidth="2" />
        <circle cx="70" cy="50" r="8" fill="none" stroke="#3B82F6" strokeWidth="2" />
        <line x1="38" y1="46" x2="62" y2="46" stroke="#3B82F6" strokeWidth="1.5" />
        <line x1="46" y1="38" x2="54" y2="42" stroke="#34D399" strokeWidth="1.5" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <div className="section-eyebrow mb-5">
              <ShieldCheck size={16} className="text-[#1B5AAE]" />
              <span>Why Choose PharmEFC</span>
            </div>
            <h1 className="hero-title mb-5">
              Your Trusted Partner in{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#1B5AAE] to-[#3B82F6]">
                Healthcare Excellence
              </span>
            </h1>
            <p className="section-desc mb-8 max-w-md">
              Quality medicines, professional services, and ethical partnerships.
            </p>
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Link href="/services" className="btn-pharm-primary px-6 py-3">
                Explore Our Services
                <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="btn-pharm-secondary px-6 py-3">
                Contact Our Team
              </Link>
            </div>
            <ul className="space-y-2">
              {trustBadges.slice(0, 3).map((item) => (
                <li key={item} className="flex items-center gap-2 body-sm">
                  <CheckCircle2 className="shrink-0 text-pharm-red-soft" size={16} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <WhyPharmefcHeroIllustration />
        </div>
      </div>
    </section>
  );
}
