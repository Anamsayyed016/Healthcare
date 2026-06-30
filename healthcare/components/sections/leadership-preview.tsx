'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { executiveLeaders } from '@/lib/data/leadership';

type LeadershipPreviewSectionProps = {
  limit?: number;
  compact?: boolean;
};

export default function LeadershipPreviewSection({
  limit = 2,
  compact = true,
}: LeadershipPreviewSectionProps) {
  const leaders = executiveLeaders.slice(0, limit);
  const gridClass =
    limit <= 2 ? 'sm:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-4';
  const containerClass = compact ? 'max-w-4xl' : 'max-w-7xl';

  return (
    <section className={compact ? 'py-12 sm:py-16 bg-white' : 'py-20 sm:py-32 bg-white'}>
      <div className={`${containerClass} mx-auto px-4 sm:px-6 lg:px-8`}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          className={`text-center space-y-3 ${compact ? 'mb-10' : 'mb-16'}`}
        >
          <h2
            className={`font-bold text-slate-900 ${
              compact ? 'text-2xl sm:text-3xl' : 'text-4xl sm:text-5xl'
            }`}
          >
            Executive <span className="text-[#4F9DF8]">Leadership</span>
          </h2>
          <p
            className={`text-slate-600 max-w-xl mx-auto ${
              compact ? 'text-sm sm:text-base' : 'text-lg max-w-2xl'
            }`}
          >
            {compact
              ? 'Led by Dr. Kunal Basu, Rahul Yadav, Syed Asif Haider, and Kuber Singh Patel.'
              : 'Meet the executive team guiding PharmEFC\'s pharmaceutical and healthcare direction.'}
          </p>
        </motion.div>

        <div className={`grid grid-cols-1 ${gridClass} gap-5 ${compact ? 'mb-10' : 'mb-12'}`}>
          {leaders.map((leader, i) => (
            <motion.div
              key={leader.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={compact ? undefined : { y: -6 }}
              className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all"
            >
              <div
                className={`bg-[#F8FBFF] flex items-center justify-center border-b border-[#E2E8F0] ${
                  compact ? 'h-28' : 'h-40'
                }`}
              >
                <div
                  className={`font-bold text-[#1E6FD9]/30 ${
                    compact ? 'text-3xl' : 'text-4xl'
                  }`}
                >
                  {leader.name.charAt(0)}
                </div>
              </div>
              <div className={compact ? 'p-5' : 'p-6 space-y-3'}>
                <h3 className={`font-bold text-slate-900 ${compact ? '' : 'text-lg'}`}>
                  {leader.name}
                </h3>
                <p className="text-sm text-[#4F9DF8] font-semibold">{leader.role}</p>
                {!compact && (
                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {leader.bio}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/leadership"
            className={
              compact
                ? 'inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#4F9DF8] text-[#4F9DF8] font-semibold hover:bg-blue-50 transition-colors'
                : 'inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-linear-to-r from-[#4F9DF8] to-[#4ADE80] text-white font-semibold hover:shadow-lg transition-all'
            }
          >
            {compact ? 'Meet Our Leadership' : 'View Full Leadership Team'}
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
