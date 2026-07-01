'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Users,
  Briefcase,
  TrendingUp,
  Building2,
  Microscope,
  Crown,
} from 'lucide-react';
import {
  HeroVisualCard,
  FloatingHeroIcon,
  LEADERSHIP_HERO_DECOR_IMAGE,
} from '@/components/sections/hero-visual-card';
import { iconColor, ICON_GLASS_LG, ICON_GLASS_PILL } from '@/lib/icons';
import { heroCardFloat } from '@/lib/motion';

const trustHighlights = [
  'Experienced Leadership',
  'Ethical Governance',
  'Healthcare Excellence',
];

function LeadershipHeroIllustration() {
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
          backgroundImage={LEADERSHIP_HERO_DECOR_IMAGE}
          patternId="leadership-hero-grid"
          imageQuality={90}
        >
          <div className="relative flex aspect-[4/3] w-full max-h-64 items-center justify-center">
            <div className={ICON_GLASS_LG}>
              <Users className={iconColor('support')} size={42} strokeWidth={1.5} />
            </div>
            <FloatingHeroIcon
              amplitude={5}
              duration={4}
              className="absolute top-3 left-6"
            >
              <Briefcase className={iconColor('support')} size={20} />
            </FloatingHeroIcon>
            <FloatingHeroIcon
              amplitude={6}
              duration={4.5}
              delay={0.5}
              direction="down"
              className="absolute bottom-6 right-6"
            >
              <TrendingUp className={iconColor('innovation')} size={20} />
            </FloatingHeroIcon>
            <FloatingHeroIcon
              amplitude={4}
              duration={3.8}
              delay={1}
              glassClass={ICON_GLASS_PILL}
              className="absolute top-8 right-10 rounded-full"
            >
              <Building2 className={iconColor('healthcare')} size={18} />
            </FloatingHeroIcon>
            <FloatingHeroIcon
              amplitude={5}
              duration={4.2}
              delay={0.3}
              direction="down"
              glassClass={ICON_GLASS_PILL}
              className="absolute bottom-12 left-10 rounded-full"
            >
              <Microscope className={iconColor('research')} size={18} />
            </FloatingHeroIcon>
          </div>
          <p className="max-w-xs text-center text-sm leading-relaxed text-[#64748B]">
            Visionary leadership for pharmaceutical and healthcare excellence.
          </p>
        </HeroVisualCard>
      </motion.div>
    </motion.div>
  );
}

export default function LeadershipHero() {
  const scrollToTeam = () => {
    document.getElementById('leadership-team')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 75% 55% at 75% 10%, #F0FDF4 0%, #F8FBFF 40%, #FFFFFF 70%)',
        }}
      />
      <div className="absolute top-16 right-1/4 w-80 h-80 rounded-full bg-[#3B82F6]/[0.04] blur-3xl pointer-events-none" />
      <div className="absolute bottom-8 left-1/4 w-72 h-72 rounded-full bg-[#D62839]/[0.05] blur-3xl pointer-events-none" />

      <svg
        className="absolute left-[8%] top-[30%] w-32 h-32 opacity-[0.03] pointer-events-none hidden lg:block"
        viewBox="0 0 100 100"
        aria-hidden
      >
        <circle cx="50" cy="50" r="40" fill="none" stroke="#3B82F6" strokeWidth="1" />
        <circle cx="50" cy="50" r="25" fill="none" stroke="#34D399" strokeWidth="1" />
        <circle cx="50" cy="50" r="10" fill="none" stroke="#3B82F6" strokeWidth="1" />
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
              <Crown size={16} className="text-[#1B5AAE]" />
              <span>Executive Leadership</span>
            </div>
            <h1 className="hero-title mb-5">
              Leadership Driving{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#1B5AAE] to-[#3B82F6]">
                Healthcare Innovation
              </span>
            </h1>
            <p className="section-desc mb-8 max-w-md">
              Experienced executives guiding PharmEFC&apos;s pharmaceutical and healthcare direction.
            </p>
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <button type="button" onClick={scrollToTeam} className="btn-pharm-primary px-6 py-3">
                Meet Our Team
                <ArrowRight size={18} />
              </button>
              <Link href="/contact" className="btn-pharm-secondary px-6 py-3">
                Contact Leadership
              </Link>
            </div>
            <ul className="space-y-2">
              {trustHighlights.slice(0, 3).map((item) => (
                <li key={item} className="flex items-center gap-2 body-sm">
                  <CheckCircle2 className="shrink-0 text-pharm-red-soft" size={16} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <LeadershipHeroIllustration />
        </div>
      </div>
    </section>
  );
}
