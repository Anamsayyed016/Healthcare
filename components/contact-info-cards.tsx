'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, Globe } from 'lucide-react';
import {
  OFFICE_ADDRESS,
  EMAIL,
  EMAIL_HREF,
  WEBSITE,
  WEBSITE_DISPLAY,
  BUSINESS_HOURS,
} from '@/lib/contact';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Office Address',
    content: (
      <address className="not-italic text-sm text-slate-700 leading-relaxed">
        {OFFICE_ADDRESS.line1}
        <br />
        {OFFICE_ADDRESS.line2}
        <br />
        {OFFICE_ADDRESS.line3}
      </address>
    ),
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Mail,
    title: 'Email',
    content: (
      <a
        href={EMAIL_HREF}
        className="text-sm text-[#1B5AAE] hover:underline font-medium"
      >
        {EMAIL}
      </a>
    ),
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Globe,
    title: 'Website',
    content: (
      <a
        href={WEBSITE}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-[#1B5AAE] hover:underline font-medium"
      >
        {WEBSITE_DISPLAY}
      </a>
    ),
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    content: (
      <p className="text-sm text-slate-700 leading-relaxed">
        {BUSINESS_HOURS.days}
        <br />
        {BUSINESS_HOURS.time}
      </p>
    ),
    color: 'from-orange-500 to-amber-500',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactInfoCards() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {contactInfo.map((info) => {
        const Icon = info.icon;
        return (
          <motion.div
            key={info.title}
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="group"
          >
            <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-lg hover:shadow-xl transition-all hover:border-slate-300">
              <div
                className={`w-12 h-12 rounded-xl bg-linear-to-br ${info.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <Icon className="text-white" size={24} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{info.title}</h3>
              {info.content}
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
