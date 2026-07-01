'use client';

import { motion } from 'framer-motion';

type PageHeroProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: 'center' | 'left';
};

export default function PageHero({
  eyebrow,
  title,
  description,
  align = 'center',
}: PageHeroProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-slate-900 via-blue-900/50 to-slate-900 py-14 sm:py-16 lg:py-20">
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-500 rounded-full blur-3xl opacity-15 pointer-events-none" />

      <div className={`relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${alignClass}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={`space-y-4 max-w-3xl ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {eyebrow && (
            <p className="section-label text-[#D62839]">{eyebrow}</p>
          )}
          <h1 className="page-hero-title">{title}</h1>
          {description && (
            <p className="text-base leading-relaxed text-slate-300">{description}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
