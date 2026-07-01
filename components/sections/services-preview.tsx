'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { services } from '@/lib/data/services';
import { serviceIconMap } from '@/lib/icons';

export default function ServicesPreviewSection() {
  const featured = services.slice(0, 3);

  return (
    <section className="section-shell section-bg-muted-blue relative overflow-hidden" id="services">
      <div className="pharm-glow-red -right-24 top-1/4 h-72 w-72" />
      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#64748b]">
            Healthcare Services
          </p>
          <h2 className="section-title mb-4">
            Featured <span className="section-title-accent">Services</span>
          </h2>
          <p className="section-desc">
            Healthcare consultancy, hospital planning, accreditation support, and operational
            services for hospitals and healthcare organizations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {featured.map((service, index) => {
            const Icon = serviceIconMap[service.icon];
            return (
              <motion.article
                key={service.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="premium-card-gradient flex flex-col p-7"
              >
                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br shadow-[0_4px_16px_-4px_rgba(27,90,174,0.28)] ${service.iconBg ?? 'from-[#1B5AAE] to-[#3B82F6]'} text-white`}
                >
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <h3 className="mb-2 text-lg font-bold leading-snug text-slate-900">
                  {service.shortTitle}
                </h3>
                <p className="grow text-sm leading-relaxed text-[#475569] line-clamp-2">
                  {service.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link href="/services" className="btn-pharm-primary">
            View All Services
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
