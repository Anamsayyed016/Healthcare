'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { executiveLeaders } from '@/lib/data/leadership';

type LeadershipPreviewSectionProps = {
  limit?: number;
};

export default function LeadershipPreviewSection({ limit = 4 }: LeadershipPreviewSectionProps) {
  const leaders = executiveLeaders.slice(0, limit);

  return (
    <section className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
            Executive <span className="text-[#4F9DF8]">Leadership</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Meet the leadership team driving PharmEFC&apos;s vision for healthcare excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leaders.map((leader, i) => (
            <motion.div
              key={leader.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all"
            >
              <div className="h-40 bg-[#F8FBFF] flex items-center justify-center border-b border-[#E2E8F0]">
                <div className="text-4xl font-bold text-[#1E6FD9]/30">{leader.name.charAt(0)}</div>
              </div>
              <div className="p-6 space-y-3">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{leader.name}</h3>
                  <p className="text-sm text-[#4F9DF8] font-semibold">{leader.role}</p>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">{leader.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/leadership"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-linear-to-r from-[#4F9DF8] to-[#4ADE80] text-white font-semibold hover:shadow-lg transition-all"
          >
            View Full Leadership Team
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
