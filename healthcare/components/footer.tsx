'use client';

import Link from 'next/link';
import { Mail, MapPin, Globe, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  COMPANY_NAME,
  OFFICE_ADDRESS,
  EMAIL,
  EMAIL_HREF,
  WEBSITE,
  WEBSITE_DISPLAY,
  BUSINESS_HOURS,
} from '@/lib/contact';

export default function Footer() {
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

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12"
        >
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#4F9DF8] to-[#4ADE80] flex items-center justify-center">
                <span className="text-white font-bold">PE</span>
              </div>
              <span className="font-bold text-lg leading-tight">PharmEFC</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              {COMPANY_NAME}
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3 text-slate-400">
              {['Cardiology', 'Neurology', 'Emergency Care', 'Telemedicine'].map((service) => (
                <li key={service}>
                  <Link href="/services" className="hover:text-white transition-colors text-sm">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-lg mb-6">Products</h4>
            <ul className="space-y-3 text-slate-400">
              {['Pharmaceuticals', 'Diagnostics', 'Wellness', 'Supplements'].map((product) => (
                <li key={product}>
                  <Link href="/products" className="hover:text-white transition-colors text-sm">
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3 text-slate-400">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Contact', href: '/contact' },
                { label: 'Leadership', href: '/leadership' },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <div className="space-y-4 text-slate-400 text-sm">
              <p className="font-medium text-white">{COMPANY_NAME}</p>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#4F9DF8] flex-shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed">
                  {OFFICE_ADDRESS.line1}
                  <br />
                  {OFFICE_ADDRESS.line2}
                  <br />
                  {OFFICE_ADDRESS.line3}
                </address>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#4F9DF8]" />
                <a href={EMAIL_HREF} className="hover:text-white transition-colors">
                  {EMAIL}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Globe size={18} className="text-[#4F9DF8]" />
                <a
                  href={WEBSITE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {WEBSITE_DISPLAY}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Clock size={18} className="text-[#4F9DF8] flex-shrink-0 mt-0.5" />
                <div>
                  <p>Business Hours:</p>
                  <p>{BUSINESS_HOURS.days}</p>
                  <p>{BUSINESS_HOURS.time}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="border-t border-white/10 mb-8" />

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between text-slate-400 text-sm"
        >
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
              <Link key={link} href="#" className="hover:text-white transition-colors">
                {link}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
