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
  CheckCircle2,
  Activity,
} from 'lucide-react';

const trustHighlights = [
  'Healthcare Consultancy',
  'Hospital Excellence',
  'Quality & Compliance',
];

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

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative max-w-md mx-auto lg:ml-auto w-full"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative rounded-[28px] border border-[#E2E8F0] bg-white/90 backdrop-blur-sm shadow-[0_20px_60px_-24px_rgba(52,211,153,0.15)] p-8 overflow-hidden"
            >
              <div className="relative h-56 flex items-center justify-center">
                <div className="w-28 h-28 rounded-2xl bg-linear-to-br from-[#1B5AAE] to-[#60A5FA] flex items-center justify-center shadow-lg">
                  <Building2 className="text-white" size={48} strokeWidth={1.5} />
                </div>
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-2 left-4 w-12 h-12 rounded-xl bg-white border border-[#E2E8F0] shadow-sm flex items-center justify-center"
                >
                  <Stethoscope className="text-pharm-red-accent" size={22} />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute bottom-4 right-4 w-12 h-12 rounded-xl bg-white border border-[#E2E8F0] shadow-sm flex items-center justify-center"
                >
                  <Microscope className="text-pharm-blue-light" size={22} />
                </motion.div>
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute top-6 right-8 w-11 h-11 rounded-full bg-[#EFF6FF] border border-[#E2E8F0] flex items-center justify-center"
                >
                  <Users className="text-pharm-blue-light" size={18} />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                  className="absolute bottom-10 left-8 w-11 h-11 rounded-full bg-[#F0FDF4] border border-[#E2E8F0] flex items-center justify-center"
                >
                  <Video className="text-[#059669]" size={18} />
                </motion.div>
              </div>
              <p className="text-center text-sm text-[#64748B] mt-2">
                Enterprise healthcare consulting and transformation solutions.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
