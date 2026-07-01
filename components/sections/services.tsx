'use client';

import { motion } from 'framer-motion';
import {
  Globe2,
  Briefcase,
  Building2,
  BadgeCheck,
  ClipboardCheck,
  SearchCheck,
  Workflow,
  Video,
  GraduationCap,
  Settings2,
  ArrowUpRight,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { iconColor, ICON_GLASS_MD, type IconSemantic } from '@/lib/icons';

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  span: string;
  accent: string;
  iconSemantic: IconSemantic;
};

const services: Service[] = [
  {
    title: 'Medical Tourism Services',
    description:
      'End-to-end medical tourism facilitation connecting patients with trusted healthcare destinations and coordinated care pathways.',
    icon: Globe2,
    span: 'lg:col-span-2 lg:row-span-2',
    accent: 'from-sky-50/90 via-white to-emerald-50/80',
    iconSemantic: 'healthcare',
  },
  {
    title: 'Healthcare Consultancy',
    description:
      'Strategic advisory for healthcare organizations seeking operational excellence and sustainable growth.',
    icon: Briefcase,
    span: 'lg:col-span-1',
    accent: 'from-white via-[#F8FBFF] to-sky-50/70',
    iconSemantic: 'support',
  },
  {
    title: 'Hospital Planning & Development',
    description:
      'Comprehensive planning and development support for new and expanding hospital infrastructure.',
    icon: Building2,
    span: 'lg:col-span-1',
    accent: 'from-[#F4FFF7]/80 via-white to-sky-50/60',
    iconSemantic: 'healthcare',
  },
  {
    title: 'NABH Accreditation Support',
    description:
      'Expert guidance through NABH accreditation processes, documentation, and compliance readiness.',
    icon: BadgeCheck,
    span: 'lg:col-span-1',
    accent: 'from-white via-[#F8FBFF] to-emerald-50/50',
    iconSemantic: 'quality',
  },
  {
    title: 'Quality Management Systems',
    description:
      'Design and implementation of robust quality management frameworks aligned with healthcare standards.',
    icon: ClipboardCheck,
    span: 'lg:col-span-1',
    accent: 'from-sky-50/70 via-white to-[#F4FFF7]/60',
    iconSemantic: 'quality',
  },
  {
    title: 'Healthcare Audits',
    description:
      'Independent audits and assessments to strengthen compliance, safety, and clinical governance.',
    icon: SearchCheck,
    span: 'lg:col-span-1',
    accent: 'from-white to-[#F8FBFF]',
    iconSemantic: 'research',
  },
  {
    title: 'Clinical Process Optimization',
    description:
      'Streamlining clinical workflows to improve efficiency, outcomes, and patient experience.',
    icon: Workflow,
    span: 'lg:col-span-1',
    accent: 'from-[#F4FFF7]/70 via-white to-sky-50/50',
    iconSemantic: 'support',
  },
  {
    title: 'Telemedicine Services',
    description:
      'Digital healthcare delivery solutions enabling remote consultations and accessible patient care.',
    icon: Video,
    span: 'lg:col-span-1',
    accent: 'from-sky-50/80 via-white to-emerald-50/60',
    iconSemantic: 'healthcare',
  },
  {
    title: 'Training & Skill Development',
    description:
      'Professional training programs to upskill healthcare teams and elevate organizational capability.',
    icon: GraduationCap,
    span: 'lg:col-span-1',
    accent: 'from-white via-[#F8FBFF] to-sky-50/70',
    iconSemantic: 'support',
  },
  {
    title: 'Hospital Operations Improvement',
    description:
      'Operational excellence initiatives to optimize resources, reduce bottlenecks, and improve service delivery.',
    icon: Settings2,
    span: 'lg:col-span-2',
    accent: 'from-[#F8FBFF] via-white to-[#F4FFF7]/90',
    iconSemantic: 'support',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function ServicesSection() {
  return (
    <section className="relative py-24 sm:py-32 lg:py-40 bg-[#F8FBFF] overflow-hidden" id="services">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-sky-200/80 to-transparent" />
      <div className="absolute -top-20 right-1/4 w-md h-112 rounded-full bg-sky-300/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-72 h-72 rounded-full bg-emerald-200/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 lg:mb-24"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-sky-100 text-sm font-semibold text-[#1B5AAE] mb-6 shadow-sm">
            <Settings2 size={16} />
            Expert Solutions
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6">
            Healthcare{' '}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#1B5AAE] to-[#3B82F6]">
              Services
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
            Comprehensive medical and consultancy services designed to elevate healthcare delivery
            across every stage of your organization&apos;s journey.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 auto-rows-fr"
        >
          {services.map((service) => {
            const Icon = service.icon;
            const isFeatured = service.span.includes('row-span-2');

            return (
              <motion.article
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 320, damping: 24 }}
                className={`group relative ${service.span}`}
              >
                <div className="absolute -inset-px rounded-[28px] bg-linear-to-br from-sky-300/40 to-emerald-300/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div
                  className={`relative h-full min-h-[220px] rounded-[28px] bg-linear-to-br ${service.accent} border border-white/90 backdrop-blur-md shadow-[0_10px_40px_-16px_rgba(27,90,174,0.15)] group-hover:shadow-[0_24px_56px_-20px_rgba(27,90,174,0.25)] transition-all duration-500 p-7 sm:p-8 flex flex-col`}
                >
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      animate={isFeatured ? { y: [0, -4, 0] } : undefined}
                      transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                      className={`${ICON_GLASS_MD} group-hover:-translate-y-0.5 transition-transform duration-300`}
                    >
                      <Icon
                        className={iconColor(service.iconSemantic)}
                        size={isFeatured ? 30 : 26}
                        strokeWidth={1.75}
                      />
                    </motion.div>
                    <span className="w-9 h-9 rounded-xl bg-white/70 border border-sky-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 translate-x-2">
                      <ArrowUpRight size={18} className="text-[#1B5AAE]" />
                    </span>
                  </div>

                  <h3
                    className={`font-bold text-slate-900 mb-3 leading-snug ${
                      isFeatured ? 'text-2xl sm:text-3xl' : 'text-lg sm:text-xl'
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`text-slate-600 leading-relaxed grow ${
                      isFeatured ? 'text-base sm:text-lg' : 'text-sm sm:text-base'
                    }`}
                  >
                    {service.description}
                  </p>

                  <div className="mt-6 h-1 w-12 rounded-full bg-linear-to-r from-[#1B5AAE] to-[#3B82F6] opacity-60 group-hover:w-20 group-hover:opacity-100 transition-all duration-500" />
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full h-12 sm:h-16" preserveAspectRatio="none">
          <path
            d="M0 40C360 0 720 80 1080 40C1260 20 1380 60 1440 40V80H0V40Z"
            fill="#F4FFF7"
            fillOpacity="1"
          />
        </svg>
      </div>
    </section>
  );
}
