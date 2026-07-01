'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { EMAIL_HREF } from '@/lib/contact';

export default function WhatsAppButton() {
  return (
    <motion.a
      href={EMAIL_HREF}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 left-8 z-40 p-4 rounded-full bg-linear-to-br from-[#1B5AAE] to-[#3B82F6] text-white shadow-lg hover:shadow-xl transition-shadow"
      title="Email PharmEFC Healthcare"
      aria-label="Email PharmEFC Healthcare"
    >
      <Mail size={28} />
    </motion.a>
  );
}
