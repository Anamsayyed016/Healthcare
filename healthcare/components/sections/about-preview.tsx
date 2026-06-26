'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { aboutContent } from '@/lib/data/about';

export default function AboutPreviewSection() {
  return (
    <section className="py-20 sm:py-28 bg-white" id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                About <span className="text-[#4F9DF8]">PharmEFC</span>
              </h2>
              <p className="text-lg text-slate-600">{aboutContent.tagline}</p>
            </div>
            <p className="text-slate-700 leading-relaxed line-clamp-4">{aboutContent.story}</p>
            <ul className="space-y-3">
              {aboutContent.highlights.slice(0, 2).map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#4F9DF8] font-semibold hover:gap-3 transition-all"
            >
              Learn More About Us
              <ArrowRight size={18} />
            </Link>
          </div>
          <div className="relative bg-[#F8FBFF] rounded-3xl p-10 border border-[#E2E8F0]">
            <div className="text-center space-y-4">
              <div className="text-5xl font-bold text-[#1E6FD9]">15+</div>
              <p className="text-slate-600">Years of Healthcare Excellence</p>
              <div className="h-px bg-[#E2E8F0]" />
              <p className="text-sm text-slate-600">
                Trusted pharmaceutical and healthcare partner serving institutions across India.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
