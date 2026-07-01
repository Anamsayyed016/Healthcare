'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Pill,
  ShieldCheck,
  Sparkles,
  Microscope,
} from 'lucide-react';
import {
  HeroVisualCard,
  HeroHeartCard,
  FloatingHeroIcon,
  HOME_HERO_DECOR_IMAGE,
} from '@/components/sections/hero-visual-card';
import { iconColor, ICON_GLASS_PILL } from '@/lib/icons';
import { heroCardFloat } from '@/lib/motion';

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
      className="relative mx-auto w-full max-w-lg lg:mx-0 lg:ml-auto"
    >
      <motion.div
        animate={{ y: heroCardFloat.y }}
        transition={heroCardFloat.transition}
        className="relative"
      >
        <div className="absolute -inset-4 rounded-[32px] bg-linear-to-br from-[#EFF6FF]/80 to-[#F0FDF4]/80 blur-sm" />
        <HeroVisualCard backgroundImage={HOME_HERO_DECOR_IMAGE} patternId="hero-grid">
          <div className="relative flex aspect-[4/3] w-full max-h-64 items-center justify-center">
            <HeroHeartCard />
            <FloatingHeroIcon
              amplitude={6}
              duration={4.2}
              delay={0.5}
              className="absolute top-4 left-4 h-14 w-14"
            >
              <Pill className={iconColor('pharmaceutical')} size={26} />
            </FloatingHeroIcon>
            <FloatingHeroIcon
              amplitude={7}
              duration={4.8}
              delay={1}
              direction="down"
              className="absolute bottom-6 right-6 h-14 w-14"
            >
              <Microscope className={iconColor('research')} size={26} />
            </FloatingHeroIcon>
            <FloatingHeroIcon
              amplitude={5}
              duration={3.6}
              delay={0.2}
              glassClass={ICON_GLASS_PILL}
              className="absolute top-8 right-8 rounded-full"
            >
              <ShieldCheck className={iconColor('security')} size={22} />
            </FloatingHeroIcon>
          </div>

          <div className="grid w-full grid-cols-3 gap-3">
            {[
              { label: 'Pharmaceuticals', icon: Pill, color: iconColor('pharmaceutical') },
              { label: 'Innovation', icon: Sparkles, color: iconColor('innovation') },
              { label: 'Quality Care', icon: ShieldCheck, color: iconColor('quality') },
            ].map((item) => (
              <div
                key={item.label}
                className="icon-glass rounded-xl p-3 text-center transition-all duration-300 hover:-translate-y-0.5"
              >
                <item.icon className={`${item.color} mx-auto mb-1.5`} size={20} />
                <p className="text-[11px] font-medium leading-tight text-[#64748B]">{item.label}</p>
              </div>
            ))}
          </div>
        </HeroVisualCard>
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
                <Pill size={16} className="text-pharm-blue-light" />
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
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
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
