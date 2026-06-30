'use client';

import { motion } from 'framer-motion';
import { Mail, Globe, Clock, Building2, Phone } from 'lucide-react';
import {
  COMPANY_NAME,
  OFFICE_ADDRESS,
  EMAIL,
  EMAIL_HREF,
  PHONE,
  PHONE_HREF,
  WEBSITE,
  WEBSITE_DISPLAY,
  BUSINESS_HOURS,
} from '@/lib/contact';

const panels = [
  {
    icon: Building2,
    title: 'Office',
    content: (
      <div className="space-y-1">
        <p className="font-semibold text-[#0F172A]">{COMPANY_NAME}</p>
        <address className="not-italic text-sm text-[#64748B] leading-relaxed">
          {OFFICE_ADDRESS.line1}
          <br />
          {OFFICE_ADDRESS.line2}
          <br />
          {OFFICE_ADDRESS.line3}
        </address>
      </div>
    ),
  },
  {
    icon: Phone,
    title: 'Mobile',
    content: (
      <a
        href={PHONE_HREF}
        className="text-sm text-[#3B82F6] hover:underline font-medium"
      >
        {PHONE}
      </a>
    ),
  },
  {
    icon: Mail,
    title: 'Email',
    content: (
      <a
        href={EMAIL_HREF}
        className="text-sm text-[#3B82F6] hover:underline font-medium"
      >
        {EMAIL}
      </a>
    ),
  },
  {
    icon: Globe,
    title: 'Website',
    content: (
      <a
        href={WEBSITE}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-[#3B82F6] hover:underline font-medium"
      >
        {WEBSITE_DISPLAY}
      </a>
    ),
  },
  {
    icon: Clock,
    title: 'Business Hours',
    content: (
      <p className="text-sm text-[#64748B] leading-relaxed">
        {BUSINESS_HOURS.days}
        <br />
        {BUSINESS_HOURS.time}
      </p>
    ),
  },
];

export default function ContactInfoPanels() {
  return (
    <div className="space-y-4">
      {panels.map((panel, index) => {
        const Icon = panel.icon;
        return (
          <motion.div
            key={panel.title}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="rounded-[20px] bg-white border border-[#E2E8F0] p-5 sm:p-6 shadow-[0_2px_8px_rgba(15,23,42,0.04)] hover:shadow-md transition-shadow"
          >
            <div className="flex gap-4">
              <div className="shrink-0 w-11 h-11 rounded-xl bg-[#F8FBFF] border border-[#E2E8F0] flex items-center justify-center">
                <Icon className="text-[#3B82F6]" size={20} strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="font-bold text-[#0F172A] text-sm mb-2">{panel.title}</h3>
                {panel.content}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
