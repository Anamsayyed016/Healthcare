'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, Lightbulb, Target, ArrowRight } from 'lucide-react';
import SiteLayout from '@/components/site-layout';
import PageHero from '@/components/page-hero';
import LeadershipPreviewSection from '@/components/sections/leadership-preview';
import { aboutContent } from '@/lib/data/about';
import { advisoryBoard } from '@/lib/data/leadership';
import { COMPANY_NAME } from '@/lib/contact';

export default function AboutPageContent() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow={COMPANY_NAME}
        title={
          <>
            About <span className="text-[#4F9DF8]">PharmEFC</span>
          </>
        }
        description={aboutContent.tagline}
      />

      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Company Story</h2>
              <p className="text-slate-700 leading-relaxed">{aboutContent.story}</p>
              <div className="space-y-3">
                {aboutContent.highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={20} />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#F8FBFF] rounded-3xl p-10 border border-[#E2E8F0] text-center">
              <div className="text-5xl font-bold text-[#1E6FD9] mb-2">15+</div>
              <p className="text-slate-600">Years of Healthcare Excellence</p>
            </div>
          </motion.div>

          <div id="vision" className="scroll-mt-24 space-y-12">
            <h2 className="text-3xl font-bold text-slate-900 text-center">Vision & Mission</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-2xl border border-[#E2E8F0] bg-white p-10">
                <Lightbulb className="text-[#1E6FD9] mb-4" size={32} />
                <h3 className="text-2xl font-bold mb-4">Vision</h3>
                <p className="text-slate-600 leading-relaxed">{aboutContent.vision}</p>
              </div>
              <div className="rounded-2xl border border-[#E2E8F0] bg-white p-10">
                <Target className="text-[#10B981] mb-4" size={32} />
                <h3 className="text-2xl font-bold mb-4">Mission</h3>
                <p className="text-slate-600 leading-relaxed">{aboutContent.mission}</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-10">Core Values</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {aboutContent.coreValues.map((value) => (
                <div
                  key={value.title}
                  className="text-center p-6 rounded-2xl bg-[#F8FBFF] border border-[#E2E8F0]"
                >
                  <h4 className="font-bold text-lg mb-2">{value.title}</h4>
                  <p className="text-sm text-slate-600">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-[#E2E8F0] p-8 bg-white">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Why We Exist</h2>
              <p className="text-slate-600 leading-relaxed">{aboutContent.whyWeExist}</p>
            </div>
            <div className="rounded-2xl border border-[#E2E8F0] p-8 bg-white">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Company Philosophy</h2>
              <p className="text-slate-600 leading-relaxed">{aboutContent.philosophy}</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-10">Company Timeline</h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              {aboutContent.timeline.map((item) => (
                <div
                  key={item.year}
                  className="flex gap-6 p-6 rounded-2xl border border-[#E2E8F0] bg-white"
                >
                  <span className="text-[#1E6FD9] font-bold text-lg shrink-0 w-16">{item.year}</span>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div id="advisory" className="scroll-mt-24">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-10">Advisory Board</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {advisoryBoard.map((member) => (
                <div
                  key={member.slug}
                  className="rounded-2xl border border-[#E2E8F0] p-8 bg-[#F8FBFF]"
                >
                  <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                  <p className="text-[#4F9DF8] font-semibold text-sm mb-3">{member.role}</p>
                  <p className="text-slate-600 text-sm mb-4">{member.bio}</p>
                  <p className="text-xs text-slate-500">
                    <span className="font-semibold">Education:</span> {member.education}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/leadership"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1E6FD9] text-white font-semibold hover:bg-[#1a63c4] transition-colors"
            >
              Meet Our Leadership Team
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <LeadershipPreviewSection limit={4} compact={false} />
    </SiteLayout>
  );
}
