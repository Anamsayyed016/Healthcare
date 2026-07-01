'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Headphones,
  Users,
  MessageSquare,
  Handshake,
  Building2,
  Mail,
} from 'lucide-react';
import { iconColor, ICON_GLASS_LG, ICON_GLASS_SM, ICON_GLASS_PILL } from '@/lib/icons';

const trustBadges = [
  'Fast Response',
  'Business Partnerships',
  'Healthcare Support',
];

export default function ContactHero() {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 75% 55% at 70% 5%, #F0FDF4 0%, #F8FBFF 42%, #FFFFFF 72%)',
        }}
      />
      <div className="absolute top-14 left-1/4 w-80 h-80 rounded-full bg-[#3B82F6]/[0.04] blur-3xl pointer-events-none" />
      <div className="absolute bottom-4 right-1/3 w-72 h-72 rounded-full bg-[#D62839]/[0.05] blur-3xl pointer-events-none" />

      <svg
        className="absolute right-[8%] top-[32%] w-28 h-28 opacity-[0.03] pointer-events-none hidden lg:block"
        viewBox="0 0 100 100"
        aria-hidden
      >
        <path d="M20 50 Q50 20 80 50 Q50 80 20 50" fill="none" stroke="#3B82F6" strokeWidth="1.5" />
        <circle cx="50" cy="50" r="4" fill="#34D399" opacity="0.5" />
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
              <Mail size={16} className="text-[#1B5AAE]" />
              <span>Contact PharmEFC</span>
            </div>
            <h1 className="hero-title mb-5">
              Let&apos;s Build Better{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#1B5AAE] to-[#3B82F6]">
                Healthcare Together
              </span>
            </h1>
            <p className="section-desc mb-8 max-w-md">
              Enquiries for products, consultancy, partnerships, and general support.
            </p>
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <button type="button" onClick={scrollToForm} className="btn-pharm-primary px-6 py-3">
                Contact Our Team
                <ArrowRight size={18} />
              </button>
              <Link href="/services" className="btn-pharm-secondary px-6 py-3">
                View Services
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

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative max-w-md mx-auto lg:ml-auto w-full"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative rounded-[28px] border border-[#E2E8F0] bg-white/90 backdrop-blur-sm shadow-[0_20px_60px_-24px_rgba(27,90,174,0.12)] p-8 overflow-hidden"
            >
              <div className="relative flex h-56 items-center justify-center">
                <div className={ICON_GLASS_LG}>
                  <Headphones className={iconColor('support')} size={42} strokeWidth={1.5} />
                </div>
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className={`absolute top-3 left-6 ${ICON_GLASS_SM}`}
                >
                  <Users className={iconColor('support')} size={20} />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className={`absolute bottom-5 right-5 ${ICON_GLASS_SM}`}
                >
                  <MessageSquare className={iconColor('support')} size={20} />
                </motion.div>
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className={`absolute top-7 right-9 ${ICON_GLASS_PILL} rounded-full`}
                >
                  <Handshake className={iconColor('medical-highlight')} size={18} />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                  className={`absolute bottom-11 left-9 ${ICON_GLASS_PILL} rounded-full`}
                >
                  <Building2 className={iconColor('healthcare')} size={18} />
                </motion.div>
              </div>
              <p className="text-center text-sm text-[#64748B] mt-2">
                Dedicated support for healthcare partners and clients.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
