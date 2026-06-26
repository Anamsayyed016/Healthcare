'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Mail, Globe } from 'lucide-react';
import Link from 'next/link';
import { EMAIL, EMAIL_HREF, WEBSITE, WEBSITE_DISPLAY } from '@/lib/contact';

export default function CTASection() {
  const benefits = [
    'Expert medical consultation',
    'Advanced treatment options',
    'Personalized care plans',
    ' 24/7 patient support',
  ];

  return (
    <section className="py-20 sm:py-32 bg-linear-to-r from-[#4F9DF8]/10 to-[#4ADE80]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
                Ready to Transform Your Health?
              </h2>
              <p className="text-lg text-slate-700">
                Join thousands of patients who have experienced exceptional healthcare with our comprehensive medical solutions and pharmaceutical expertise.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="text-[#4ADE80] shrink-0" size={24} />
                  <span className="text-slate-900 font-semibold">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="space-y-4">
              <Link
                href="/contact"
                className="group px-8 py-4 rounded-2xl bg-linear-to-r from-[#4F9DF8] to-[#4ADE80] text-white font-semibold hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2 w-full sm:w-fit"
              >
                Contact Us
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <div className="flex flex-col sm:flex-row gap-4 text-sm text-slate-700">
                <a
                  href={EMAIL_HREF}
                  className="inline-flex items-center gap-2 hover:text-[#4F9DF8] transition-colors"
                >
                  <Mail size={16} />
                  {EMAIL}
                </a>
                <a
                  href={WEBSITE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#4F9DF8] transition-colors"
                >
                  <Globe size={16} />
                  {WEBSITE_DISPLAY}
                </a>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-linear-to-br from-[#4F9DF8]/20 to-[#4ADE80]/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-linear-to-br from-blue-50 to-emerald-50 rounded-3xl p-12 border border-blue-100 shadow-2xl">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900">
                  Why Our Patients Love Us
                </h3>
                <ul className="space-y-4 text-slate-800">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <span>World-class medical professionals and infrastructure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <span>Cutting-edge pharmaceutical innovations and treatments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <span>Personalized care and comprehensive wellness programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <span>Transparent pricing and compassionate service</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
