'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { services } from '@/lib/data/services';
import { serviceIconMap } from '@/lib/icons';
import { featuredServices } from '@/lib/data/services-page';

function FeatureVisual({ slug, reversed }: { slug: string; reversed?: boolean }) {
  const service = services.find((s) => s.slug === slug);
  if (!service) return null;
  const Icon = serviceIconMap[service.icon];

  return (
    <motion.div
      initial={{ opacity: 0, x: reversed ? 24 : -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative rounded-[24px] border border-[#E2E8F0] bg-linear-to-br from-[#F8FBFF] to-[#F0FDF4]/40 p-10 sm:p-14 flex items-center justify-center min-h-[280px]"
    >
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #3B82F6 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      />
      <div className="relative w-24 h-24 rounded-2xl bg-[#3B82F6] flex items-center justify-center shadow-lg shadow-blue-200/30">
        <Icon className="text-white" size={44} strokeWidth={1.5} />
      </div>
    </motion.div>
  );
}

export default function ServicesFeatureBlocks() {
  return (
    <section className="py-14 sm:py-20 bg-[#F8FBFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        {featuredServices.map((feature, index) => {
          const service = services.find((s) => s.slug === feature.slug);
          if (!service) return null;
          const reversed = index % 2 === 1;

          return (
            <div
              key={feature.slug}
              id={`feature-${feature.slug}`}
              className="scroll-mt-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
            >
              {reversed ? (
                <>
                  <FeatureContent service={service} feature={feature} />
                  <FeatureVisual slug={feature.slug} reversed />
                </>
              ) : (
                <>
                  <FeatureVisual slug={feature.slug} />
                  <FeatureContent service={service} feature={feature} />
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function FeatureContent({
  service,
  feature,
}: {
  service: (typeof services)[0];
  feature: (typeof featuredServices)[0];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      <h3 className="text-2xl sm:text-3xl font-bold text-[#0F172A]">{service.title}</h3>
      <p className="text-[#64748B] leading-relaxed">{feature.detail}</p>
      <div>
        <p className="text-sm font-semibold text-[#0F172A] mb-3">Core Focus Areas</p>
        <ul className="space-y-2">
          {feature.benefits.map((b) => (
            <li key={b} className="flex items-start gap-2.5 text-sm text-[#64748B]">
              <CheckCircle2 className="text-pharm-red-soft shrink-0 mt-0.5" size={16} />
              {b}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4 rounded-xl bg-white border border-[#E2E8F0]">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-1">
          Value Proposition
        </p>
        <p className="text-sm text-[#0F172A] font-medium">{feature.process}</p>
      </div>
      <Link
        href="/contact"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-[14px] bg-[#3B82F6] text-white font-semibold hover:bg-[#2563EB] transition-colors"
      >
        Get Started
        <ArrowRight size={16} />
      </Link>
    </motion.div>
  );
}
