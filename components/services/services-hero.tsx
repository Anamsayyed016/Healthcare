'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Building2,
  Stethoscope,
  Microscope,
  Users,
  Video,
  Activity,
} from 'lucide-react';
import {
  HeroVisualCard,
  FloatingHeroIcon,
  SERVICES_HERO_DECOR_IMAGE,
} from '@/components/sections/hero-visual-card';
import { iconColor, ICON_GLASS_XL, ICON_GLASS_PILL } from '@/lib/icons';
import { heroCardFloat } from '@/lib/motion';

const trustHighlights = [
  'Healthcare Consultancy',
  'Hospital Excellence',
  'Quality & Compliance',
];

function ServicesHeroIllustration() {
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
          backgroundImage={SERVICES_HERO_DECOR_IMAGE}
          patternId="services-hero-grid"
          imageQuality={90}
        >
          <div className="relative flex aspect-[4/3] w-full max-h-64 items-center justify-center">
            <div className={ICON_GLASS_XL}>
              <Building2 className={iconColor('healthcare')} size={48} strokeWidth={1.5} />
            </div>
            <FloatingHeroIcon
              amplitude={6}
              duration={4}
              className="absolute top-2 left-4"
            >
              <Stethoscope className={iconColor('healthcare')} size={22} />
            </FloatingHeroIcon>
            <FloatingHeroIcon
              amplitude={6}
              duration={4.5}
              delay={0.5}
              direction="down"
              className="absolute bottom-4 right-4"
            >
              <Microscope className={iconColor('research')} size={22} />
            </FloatingHeroIcon>
            <FloatingHeroIcon
              amplitude={5}
              duration={3.8}
              delay={1}
              glassClass={ICON_GLASS_PILL}
              className="absolute top-6 right-8 rounded-full"
            >
              <Users className={iconColor('support')} size={18} />
            </FloatingHeroIcon>
            <FloatingHeroIcon
              amplitude={5}
              duration={4.2}
              delay={0.3}
              direction="down"
              glassClass={ICON_GLASS_PILL}
              className="absolute bottom-10 left-8 rounded-full"
            >
              <Video className={iconColor('healthcare')} size={18} />
            </FloatingHeroIcon>
          </div>
          <p className="max-w-xs text-center text-sm leading-relaxed text-[#64748B]">
            Enterprise healthcare consulting and transformation solutions.
          </p>
        </HeroVisualCard>
      </motion.div>
    </motion.div>
  );
}

export default function ServicesHero() {
  const scrollToServices = () => {
    document.getElementById('services-grid')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 20% 0%, #F0FDF4 0%, #F8FBFF 45%, #FFFFFF 75%)',
        }}
      />
      <div className="absolute top-12 left-1/3 w-96 h-96 rounded-full bg-[#D62839]/[0.05] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-[#3B82F6]/[0.05] blur-3xl pointer-events-none" />

      <svg
        className="absolute right-[12%] top-[25%] w-28 h-28 opacity-[0.035] pointer-events-none hidden lg:block"
        viewBox="0 0 100 100"
        aria-hidden
      >
        <path d="M50 15 L50 85 M15 50 L85 50" stroke="#3B82F6" strokeWidth="6" strokeLinecap="round" />
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
              <Activity size={16} className="text-[#1B5AAE]" />
              <span>Healthcare Services</span>
            </div>
            <h1 className="hero-title mb-5">
              Healthcare Solutions for{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#1B5AAE] to-[#3B82F6]">
                Modern Organizations
              </span>
            </h1>
            <p className="section-desc mb-8 max-w-md">
              Consultancy, hospital planning, accreditation, and operational support for healthcare
              institutions.
            </p>
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <button type="button" onClick={scrollToServices} className="btn-pharm-primary px-6 py-3">
                Explore Our Services
                <ArrowRight size={18} />
              </button>
              <Link href="/contact" className="btn-pharm-secondary px-6 py-3">
                Contact Our Team
              </Link>
            </div>
            <ul className="space-y-2">
              {trustHighlights.slice(0, 3).map((item) => (
                <li key={item} className="flex items-center gap-2 body-sm">
                  <span className="accent-dot-red" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <ServicesHeroIllustration />
        </div>
      </div>
    </section>
  );
}
