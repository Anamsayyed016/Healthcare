'use client';

import { motion } from 'framer-motion';
import { leadershipOverview } from '@/lib/data/leadership-page';

export default function LeadershipOverview() {
  return (
    <section className="py-14 sm:py-20 bg-[#F8FBFF]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-5">
            {leadershipOverview.title}
          </h2>
          <p className="text-[#64748B] leading-relaxed text-base sm:text-lg">
            {leadershipOverview.paragraph}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
