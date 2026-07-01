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

const trustBadges = [
  'WHO-GMP Manufacturing',
  'Ethical Healthcare',
  'End-to-End Solutions',
];

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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EFF6FF] border border-[#E2E8F0] mb-6">
              <ShieldCheck size={16} className="text-[#3B82F6]" />
              <span className="text-sm font-semibold text-[#1E40AF]">Why Choose PharmEFC</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-[#0F172A] leading-[1.12] tracking-tight mb-6">
              Your Trusted Partner in{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#3B82F6] to-[#34D399]">
                Healthcare Excellence
              </span>
            </h1>
            <p className="text-base sm:text-lg text-[#64748B] leading-relaxed mb-8">
              PharmEFC is committed to quality-assured pharmaceutical products, professional
              healthcare services, ethical practices, and long-term partnerships with hospitals,
              institutions, and healthcare organizations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-[14px] bg-[#3B82F6] text-white font-semibold shadow-[0_4px_14px_rgba(27,90,174,0.25)] hover:bg-[#2563EB] transition-colors"
              >
                Explore Our Services
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-[14px] bg-white border border-[#3B82F6]/30 text-[#3B82F6] font-semibold hover:bg-[#F8FBFF] transition-colors"
              >
                Contact Our Team
              </Link>
            </div>
            <ul className="space-y-2.5">
              {trustBadges.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-[#64748B]">
                  <CheckCircle2 className="text-[#D62839] shrink-0" size={18} />
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
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative rounded-[28px] border border-[#E2E8F0] bg-white/90 backdrop-blur-sm shadow-[0_20px_60px_-24px_rgba(27,90,174,0.12)] p-8 overflow-hidden"
            >
              <div className="relative h-56 flex items-center justify-center">
                <div className="w-28 h-28 rounded-2xl bg-linear-to-br from-[#3B82F6] to-[#60A5FA] flex items-center justify-center shadow-lg">
                  <HeartPulse className="text-white" size={48} strokeWidth={1.5} />
                </div>
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-2 left-4 w-12 h-12 rounded-xl bg-white border border-[#E2E8F0] shadow-sm flex items-center justify-center"
                >
                  <Users className="text-[#3B82F6]" size={22} />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute bottom-4 right-4 w-12 h-12 rounded-xl bg-white border border-[#E2E8F0] shadow-sm flex items-center justify-center"
                >
                  <Factory className="text-[#D62839]" size={22} />
                </motion.div>
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute top-6 right-8 w-11 h-11 rounded-full bg-[#EFF6FF] border border-[#E2E8F0] flex items-center justify-center"
                >
                  <Microscope className="text-[#3B82F6]" size={18} />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                  className="absolute bottom-10 left-8 w-11 h-11 rounded-full bg-[#F0FDF4] border border-[#E2E8F0] flex items-center justify-center"
                >
                  <Globe2 className="text-[#059669]" size={18} />
                </motion.div>
              </div>
              <p className="text-center text-sm text-[#64748B] mt-2">
                Global healthcare network built on quality and trust.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
