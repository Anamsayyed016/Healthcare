'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { executiveLeaders } from '@/lib/data/leadership';
import { leaderExpertise, mdPhilosophy } from '@/lib/data/leadership-page';
import LeaderPortrait from '@/components/leadership/leader-portrait';

export default function LeadershipSpotlight() {
  const md = executiveLeaders.find((l) => l.slug === 'managing-director');
  if (!md) return null;

  const expertise = leaderExpertise[md.slug] ?? '';
  const expertiseItems = expertise.split(', ').filter(Boolean);

  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#64748B] mb-3">
            Executive Spotlight
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A]">
            Leading with Vision &amp; Integrity
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-sm mx-auto lg:mx-0 w-full"
          >
            <LeaderPortrait name={md.name} large src={md.image} />
            <div className="mt-6 text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A]">{md.name}</h3>
              <p className="text-[#3B82F6] font-semibold mt-1">{md.role}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <p className="text-sm font-semibold text-[#0F172A] mb-2">Biography</p>
              <p className="text-[#64748B] leading-relaxed">{md.bio}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-[#0F172A] mb-2">Leadership Philosophy</p>
              <p className="text-[#64748B] leading-relaxed italic border-l-2 border-[#34D399] pl-4">
                {mdPhilosophy}
              </p>
            </div>
            {expertiseItems.length > 0 && (
              <div>
                <p className="text-sm font-semibold text-[#0F172A] mb-3">Areas of Expertise</p>
                <ul className="flex flex-wrap gap-2">
                  {expertiseItems.map((item) => (
                    <li
                      key={item}
                      className="px-3 py-1.5 rounded-full bg-[#F8FBFF] border border-[#E2E8F0] text-xs font-medium text-[#64748B]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div>
              <p className="text-sm font-semibold text-[#0F172A] mb-3">Experience Highlights</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2.5 text-sm text-[#64748B]">
                  <CheckCircle2 className="text-pharm-red-soft shrink-0 mt-0.5" size={16} />
                  {md.experience}
                </li>
                <li className="flex items-start gap-2.5 text-sm text-[#64748B]">
                  <CheckCircle2 className="text-pharm-red-soft shrink-0 mt-0.5" size={16} />
                  {md.education}
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
