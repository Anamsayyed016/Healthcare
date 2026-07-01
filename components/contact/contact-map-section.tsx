'use client';

import { motion } from 'framer-motion';
import { MapPin, Mail, Globe, Clock, Phone } from 'lucide-react';
import OfficeMap from '@/components/office-map';
import {
  OFFICE_ADDRESS,
  EMAIL,
  EMAIL_HREF,
  PHONE,
  PHONE_HREF,
  WEBSITE,
  WEBSITE_DISPLAY,
  BUSINESS_HOURS,
} from '@/lib/contact';
import { NEARBY_LANDMARK } from '@/lib/data/contact-page';

export default function ContactMapSection() {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-3">Visit Our Office</h2>
          <p className="text-[#64748B] max-w-2xl">
            Located in Vadodara, Gujarat — our office is accessible during business hours for
            meetings and consultations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="min-h-[320px] lg:min-h-[28rem]"
          >
            <OfficeMap className="h-full min-h-[320px] lg:min-h-[28rem] rounded-[24px]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[24px] border border-[#E2E8F0] bg-[#F8FBFF] p-6 sm:p-8 space-y-6"
          >
            <div className="flex gap-4">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center">
                <MapPin className="text-[#3B82F6]" size={18} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-1">
                  Office Address
                </p>
                <address className="not-italic text-sm text-[#0F172A] leading-relaxed">
                  {OFFICE_ADDRESS.line1}
                  <br />
                  {OFFICE_ADDRESS.line2}
                  <br />
                  {OFFICE_ADDRESS.line3}
                </address>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center">
                <MapPin className="text-[#D62839]" size={18} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-1">
                  Nearby Landmark
                </p>
                <p className="text-sm text-[#0F172A]">{NEARBY_LANDMARK}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center">
                <Clock className="text-[#3B82F6]" size={18} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-1">
                  Business Hours
                </p>
                <p className="text-sm text-[#0F172A]">
                  {BUSINESS_HOURS.days}
                  <br />
                  {BUSINESS_HOURS.time}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center">
                <Phone className="text-[#3B82F6]" size={18} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-1">
                  Mobile
                </p>
                <a href={PHONE_HREF} className="text-sm text-[#3B82F6] hover:underline font-medium">
                  {PHONE}
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center">
                <Mail className="text-[#3B82F6]" size={18} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-1">
                  Email
                </p>
                <a href={EMAIL_HREF} className="text-sm text-[#3B82F6] hover:underline font-medium">
                  {EMAIL}
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center">
                <Globe className="text-[#3B82F6]" size={18} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-1">
                  Website
                </p>
                <a
                  href={WEBSITE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#3B82F6] hover:underline font-medium"
                >
                  {WEBSITE_DISPLAY}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
