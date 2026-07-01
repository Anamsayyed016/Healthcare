'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { services } from '@/lib/data/services';
import { serviceIconMap } from '@/lib/icons';

export default function ServicesPreviewSection() {
  const featured = services.slice(0, 3);

  return (
    <section className="section-shell-standard section-bg-muted-blue relative overflow-hidden" id="services">
      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          className="mb-8 max-w-xl"
        >
          <p className="section-label mb-3">Healthcare Services</p>
          <h2 className="section-title-sm mb-3">
            Featured <span className="section-title-accent">Services</span>
          </h2>
          <p className="section-desc">
            Consultancy, hospital planning, and accreditation support for healthcare organizations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {featured.map((service, index) => {
            const Icon = serviceIconMap[service.icon];
            return (
              <motion.article
                key={service.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="premium-card-gradient flex flex-col p-6"
              >
                <div
                  className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br shadow-[0_4px_12px_-4px_rgba(27,90,174,0.25)] ${service.iconBg ?? 'from-[#1B5AAE] to-[#3B82F6]'} text-white`}
                >
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <h3 className="card-title mb-1">{service.shortTitle}</h3>
                <p className="body-sm line-clamp-2">{service.description}</p>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-8">
          <Link href="/services" className="btn-pharm-link">
            View All Services
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
