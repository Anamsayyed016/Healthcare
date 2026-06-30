'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { executiveLeaders } from '@/lib/data/leadership';
import { leaderExpertise } from '@/lib/data/leadership-page';
import LeaderPortrait from '@/components/leadership/leader-portrait';

export default function LeadershipTeam() {
  const team = executiveLeaders.filter((l) => l.slug !== 'managing-director');

  return (
    <section id="leadership-team" className="py-14 sm:py-20 bg-[#F8FBFF] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-3">Leadership Team</h2>
          <p className="text-[#64748B]">
            Guided by Dr. Kunal Basu, Rahul Yadav, Syed Asif Haider, and Kuber Singh Patel.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {team.map((leader, index) => {
            const expertise = leaderExpertise[leader.slug] ?? leader.education;

            return (
              <motion.article
                key={leader.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="group rounded-[22px] bg-white border border-[#E2E8F0] overflow-hidden shadow-[0_2px_8px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_32px_rgba(15,23,42,0.08)] hover:border-[#93C5FD]/50 transition-all duration-300"
              >
                <div className="p-5 pb-0">
                  <LeaderPortrait name={leader.name} className="w-full" />
                </div>
                <div className="p-6 pt-5 space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-bold text-[#0F172A] text-lg">{leader.name}</h3>
                      <p className="text-sm text-[#3B82F6] font-semibold">{leader.role}</p>
                    </div>
                    <button
                      type="button"
                      aria-label={`LinkedIn profile for ${leader.name}`}
                      className="shrink-0 w-9 h-9 rounded-lg bg-[#F8FBFF] border border-[#E2E8F0] flex items-center justify-center text-[#64748B] hover:text-[#3B82F6] hover:border-[#93C5FD] transition-colors"
                    >
                      <ExternalLink size={15} />
                    </button>
                  </div>
                  <p className="text-sm text-[#64748B] leading-relaxed line-clamp-3">{leader.bio}</p>
                  <div className="pt-3 border-t border-[#E2E8F0]">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-1">
                      Expertise
                    </p>
                    <p className="text-sm text-[#0F172A]">{expertise}</p>
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
