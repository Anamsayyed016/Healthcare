'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { services } from '@/lib/data/services';
import { serviceIconMap } from '@/lib/icons';

export default function ServicesPreviewSection() {
  const featured = services.slice(0, 3);

  return (
    <section className="py-12 sm:py-16 bg-[#F8FBFF]" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
            Featured <span className="text-[#4F9DF8]">Services</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Healthcare consultancy, hospital planning, accreditation support, and operational
            services for hospitals and healthcare organizations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {featured.map((service, index) => {
            const Icon = serviceIconMap[service.icon];
            return (
              <motion.article
                key={service.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                whileHover={{ y: -4 }}
                className="rounded-[28px] bg-linear-to-br from-white to-[#F8FBFF] border border-white/90 shadow-[0_10px_40px_-16px_rgba(79,157,248,0.15)] p-6 flex flex-col"
              >
                <div
                  className={`w-12 h-12 rounded-2xl bg-linear-to-br ${service.iconBg ?? 'from-[#4F9DF8] to-[#38BDF8]'} flex items-center justify-center mb-4`}
                >
                  <Icon className="text-white" size={22} strokeWidth={1.75} />
                </div>
                <h3 className="font-bold text-slate-900 mb-2 text-lg leading-snug">
                  {service.shortTitle}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed line-clamp-2 grow">
                  {service.description}
                </p>
              </motion.article>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-linear-to-r from-[#4F9DF8] to-[#4ADE80] text-white font-semibold hover:shadow-lg transition-all"
          >
            View All Services
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
