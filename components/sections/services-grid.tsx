'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { services } from '@/lib/data/services';
import { serviceIconMap, getServiceIconColor, ICON_GLASS_MD } from '@/lib/icons';

type ServicesGridProps = {
  limit?: number;
  showHeader?: boolean;
  showExplore?: boolean;
  id?: string;
};

export default function ServicesGrid({
  limit,
  showHeader = true,
  showExplore = false,
  id = 'services',
}: ServicesGridProps) {
  const items = limit ? services.slice(0, limit) : services;

  return (
    <section className="relative py-24 sm:py-32 lg:py-40 bg-[#F8FBFF] overflow-hidden" id={id}>
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-sky-200/80 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-6">
              Healthcare{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#1B5AAE] to-[#3B82F6]">
                Services
              </span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              {limit
                ? 'A selection of our healthcare consultancy and operational excellence services.'
                : 'Comprehensive medical and consultancy services designed to elevate healthcare delivery across every stage of your organization\'s journey.'}
            </p>
          </motion.div>
        )}

        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 auto-rows-fr ${
            limit ? 'lg:grid-cols-2' : 'lg:grid-cols-4'
          }`}
        >
          {items.map((service, index) => {
            const Icon = serviceIconMap[service.icon];
            const isFeatured = service.span?.includes('row-span-2');

            return (
              <motion.article
                key={service.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className={`group relative ${limit ? '' : service.span ?? ''}`}
              >
                <div
                  className={`relative h-full min-h-[200px] rounded-[28px] bg-linear-to-br ${service.accent ?? 'from-white to-[#F8FBFF]'} border border-white/90 shadow-[0_10px_40px_-16px_rgba(27,90,174,0.15)] group-hover:shadow-[0_24px_56px_-20px_rgba(27,90,174,0.2)] transition-all duration-500 p-7 sm:p-8 flex flex-col`}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className={ICON_GLASS_MD}>
                      <Icon className={getServiceIconColor(service.icon)} size={isFeatured ? 28 : 24} strokeWidth={1.75} />
                    </div>
                    <span className="w-9 h-9 rounded-xl bg-white/70 border border-sky-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                      <ArrowUpRight size={18} className="text-[#1B5AAE]" />
                    </span>
                  </div>
                  <h3
                    className={`font-bold text-slate-900 mb-3 leading-snug ${
                      isFeatured && !limit ? 'text-2xl' : 'text-lg sm:text-xl'
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed grow text-sm sm:text-base">
                    {service.description}
                  </p>
                  <div className="mt-6 h-1 w-12 rounded-full bg-linear-to-r from-[#1B5AAE] to-[#3B82F6] opacity-60 group-hover:w-20 transition-all duration-500" />
                </div>
              </motion.article>
            );
          })}
        </div>

        {showExplore && (
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-linear-to-r from-[#1B5AAE] to-[#3B82F6] text-white font-semibold hover:shadow-lg transition-all"
            >
              Explore All Services
              <ArrowRight size={18} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
