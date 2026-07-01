'use client';

import Link from 'next/link';
import { Mail, MapPin, Globe, Clock, Share2, MessageCircle, Users, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
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
import { products } from '@/lib/data/products';
import { services } from '@/lib/data/services';
import Logo from '@/components/logo';

const socialLinks = [
  { Icon: Users, href: '#', label: 'LinkedIn' },
  { Icon: Share2, href: '#', label: 'Share' },
  { Icon: MessageCircle, href: EMAIL_HREF, label: 'Email' },
];

export default function Footer() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-linear-to-b from-slate-900 to-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12"
        >
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Logo className="h-8 w-auto max-h-10 object-contain shrink-0 sm:h-10" />
              <span className="font-bold text-lg leading-tight">PharmEFC</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">{COMPANY_NAME}</p>
            <div className="flex gap-3">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-slate-400">
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Why PharmEFC', href: '/why-pharmefc' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-lg mb-6">Products</h4>
            <ul className="space-y-3 text-slate-400">
              {products.slice(0, 4).map((product) => (
                <li key={product.slug}>
                  <Link
                    href={`/products/${product.slug}`}
                    className="hover:text-white transition-colors text-sm"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/products" className="text-[#4F9DF8] hover:text-white text-sm">
                  View All →
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3 text-slate-400">
              {services.slice(0, 4).map((service) => (
                <li key={service.slug}>
                  <Link href="/services" className="hover:text-white transition-colors text-sm">
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-[#4F9DF8] hover:text-white text-sm">
                  View All →
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <div className="space-y-4 text-slate-400 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#4F9DF8] shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed">
                  {OFFICE_ADDRESS.line1}
                  <br />
                  {OFFICE_ADDRESS.line2}
                  <br />
                  {OFFICE_ADDRESS.line3}
                </address>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#4F9DF8]" />
                <a href={PHONE_HREF} className="hover:text-white transition-colors">
                  {PHONE}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#4F9DF8]" />
                <a href={EMAIL_HREF} className="hover:text-white transition-colors">
                  {EMAIL}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Globe size={18} className="text-[#4F9DF8]" />
                <a href={WEBSITE} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  {WEBSITE_DISPLAY}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={18} className="text-[#4F9DF8] shrink-0 mt-0.5" />
                <div>
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
          <p>
            &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
          </p>
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
