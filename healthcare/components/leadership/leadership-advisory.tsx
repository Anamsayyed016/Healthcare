'use client';

import { motion } from 'framer-motion';
import { advisoryBoard } from '@/lib/data/leadership';
import { leaderExpertise } from '@/lib/data/leadership-page';
import LeaderPortrait from '@/components/leadership/leader-portrait';

export default function LeadershipAdvisory() {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B] mb-3">
            Advisory Board
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-3">
            Strategic Counsel &amp; Industry Expertise
          </h2>
          <p className="text-[#64748B] max-w-2xl">
            Distinguished advisors who provide independent guidance on governance, strategy,
            and healthcare standards.
          </p>
        </motion.div>

        <div className="space-y-5">
          {advisoryBoard.map((advisor, index) => {
            const expertise = leaderExpertise[advisor.slug] ?? advisor.education;

            return (
              <motion.article
                key={advisor.slug}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                className="rounded-[22px] border border-[#E2E8F0] bg-[#F8FBFF] p-5 sm:p-6 hover:shadow-md transition-all"
              >
                <div className="flex flex-col sm:flex-row gap-6 items-start">
                  <div className="w-full sm:w-36 shrink-0">
                    <LeaderPortrait name={advisor.name} className="w-full sm:aspect-square" />
                  </div>
                  <div className="flex-1 min-w-0 space-y-2">
                    <div>
                      <h3 className="text-lg font-bold text-[#0F172A]">{advisor.name}</h3>
                      <p className="text-sm text-[#3B82F6] font-semibold">{advisor.role}</p>
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                      Expertise: <span className="text-[#0F172A] font-medium normal-case">{expertise}</span>
                    </p>
                    <p className="text-sm text-[#64748B] leading-relaxed">{advisor.bio}</p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
