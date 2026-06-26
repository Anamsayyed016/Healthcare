'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import SiteLayout from '@/components/site-layout';
import PageHero from '@/components/page-hero';
import { executiveLeaders, advisoryBoard } from '@/lib/data/leadership';
import { COMPANY_NAME, EMAIL_HREF } from '@/lib/contact';

function LeaderCard({
  leader,
  index,
}: {
  leader: (typeof executiveLeaders)[0];
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all"
    >
      <div className="h-52 bg-[#F8FBFF] flex items-center justify-center border-b border-[#E2E8F0]">
        <div className="text-5xl font-bold text-[#1E6FD9]/25">{leader.name.charAt(0)}</div>
      </div>
      <div className="p-8 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-slate-900">{leader.name}</h3>
          <p className="text-[#4F9DF8] font-semibold">{leader.role}</p>
        </div>
        <p className="text-slate-600 leading-relaxed text-sm">{leader.bio}</p>
        <div className="pt-4 border-t border-[#E2E8F0] space-y-3 text-sm">
          <div>
            <p className="font-semibold text-slate-900">Education</p>
            <p className="text-slate-600">{leader.education}</p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Professional Experience</p>
            <p className="text-slate-600">{leader.experience}</p>
          </div>
        </div>
        <a
          href={EMAIL_HREF}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#F8FBFF] text-[#1E6FD9] text-sm font-semibold hover:bg-blue-50 transition-colors"
        >
          <Mail size={16} />
          Contact
        </a>
      </div>
    </motion.article>
  );
}

export default function LeadershipPageContent() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow={COMPANY_NAME}
        title={
          <>
            Our <span className="text-[#4F9DF8]">Leadership</span>
          </>
        }
        description="Meet the experienced professionals guiding PharmEFC toward pharmaceutical and healthcare excellence."
      />

      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Executive Team</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {executiveLeaders.map((leader, index) => (
              <LeaderCard key={leader.slug} leader={leader} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-[#F8FBFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Advisory Board</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {advisoryBoard.map((leader, index) => (
              <LeaderCard key={leader.slug} leader={leader} index={index} />
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
