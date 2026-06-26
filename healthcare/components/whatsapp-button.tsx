'use client';

import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  const phoneNumber = '1234567890';
  const message = 'Hello, I would like to inquire about your healthcare services.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 left-8 z-40 p-4 rounded-full bg-gradient-to-br from-[#25D366] to-[#20BA63] text-white shadow-lg hover:shadow-xl transition-shadow"
      title="Chat with us on WhatsApp"
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.255.949c-1.292.573-2.458 1.414-3.386 2.353-1.42 1.396-2.33 3.31-2.395 5.376-.066 2.066.546 4.084 1.773 5.8l.464 1.097-1.979.626 1.982-.637c1.566 1.038 3.489 1.604 5.483 1.604 5.387 0 9.778-4.378 9.778-9.78 0-2.578-.982-4.998-2.773-6.844-1.791-1.847-4.229-2.855-6.783-2.854zm0 0" />
      </svg>
    </motion.a>
  );
}
