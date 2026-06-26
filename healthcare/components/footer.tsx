'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Share2, MessageCircle, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

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
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#4F9DF8] to-[#4ADE80] flex items-center justify-center">
                <span className="text-white font-bold">HC</span>
              </div>
              <span className="font-bold text-xl">HealthCare+</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Delivering exceptional healthcare through innovation, compassion, and clinical excellence.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Share2, href: '#' },
                { Icon: MessageCircle, href: '#' },
                { Icon: Heart, href: '#' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
                >
                  <social.Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3 text-slate-400">
              {['Cardiology', 'Neurology', 'Emergency Care', 'Telemedicine'].map((service) => (
                <li key={service}>
                  <Link href="#" className="hover:text-white transition-colors text-sm">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-lg mb-6">Products</h4>
            <ul className="space-y-3 text-slate-400">
              {['Pharmaceuticals', 'Diagnostics', 'Wellness', 'Supplements'].map((product) => (
                <li key={product}>
                  <Link href="#" className="hover:text-white transition-colors text-sm">
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3 text-slate-400">
              {['About Us', 'Careers', 'Blog', 'Press'].map((link) => (
                <li key={link}>
                  <Link href="#" className="hover:text-white transition-colors text-sm">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <div className="space-y-4 text-slate-400 text-sm">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#4F9DF8]" />
                <span>+1 (800) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#4F9DF8]" />
                <span>info@healthcare-plus.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#4F9DF8] flex-shrink-0 mt-0.5" />
                <span>Healthcare+ Center, Medical District, Metro City</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-8"></div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between text-slate-400 text-sm"
        >
          <p>&copy; 2024 HealthCare+. All rights reserved.</p>
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
