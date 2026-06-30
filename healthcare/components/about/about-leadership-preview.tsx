'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { executiveLeaders } from '@/lib/data/leadership';

export default function AboutLeadershipPreview() {
  const featured = executiveLeaders.filter(
    (l) => l.slug === 'managing-director' || l.slug === 'director',
  );

  return (
    <section className="py-16 sm:py-24 bg-[#F8FBFF]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-3">Leadership</h2>
          <p className="text-[#64748B] max-w-xl mx-auto">
            Guided by experienced leaders committed to pharmaceutical quality and healthcare services.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {featured.map((leader, i) => (
            <motion.div
              key={leader.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-[#E2E8F0] bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-36 bg-linear-to-br from-[#F8FBFF] to-[#EFF6FF] flex items-center justify-center border-b border-[#E2E8F0]">
                <div className="text-4xl font-bold text-[#3B82F6]/20">{leader.name.charAt(0)}</div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#0F172A]">{leader.name}</h3>
                <p className="text-sm text-[#3B82F6] font-semibold mb-3">{leader.role}</p>
                <p className="text-sm text-[#64748B] leading-relaxed line-clamp-3">{leader.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/leadership"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[14px] bg-[#3B82F6] text-white font-semibold hover:bg-[#2563EB] transition-colors"
          >
            Meet Full Leadership Team
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
