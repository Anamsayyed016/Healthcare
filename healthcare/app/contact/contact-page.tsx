'use client';

import Header from '@/components/header';
import Footer from '@/components/footer';
import ScrollToTop from '@/components/scroll-to-top';
import ContactForm from '@/components/contact-form';
import ContactInfoCards from '@/components/contact-info-cards';
import OfficeMap from '@/components/office-map';
import { motion } from 'framer-motion';
import { COMPANY_NAME } from '@/lib/contact';

export default function ContactPage() {
  return (
    <div className="w-full bg-white text-foreground">
      <Header />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900/50 to-slate-900 py-20 sm:py-28">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-500 rounded-full blur-3xl opacity-15" />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-sm font-semibold uppercase tracking-widest text-[#4ADE80]">
                {COMPANY_NAME}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                Get in <span className="text-[#4F9DF8]">Touch</span>
              </h1>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Reach out to our team for inquiries, partnerships, or support. We are here to
                assist you during business hours.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <ContactInfoCards />

            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <ContactForm />
              <OfficeMap className="h-full min-h-96 lg:min-h-[32rem]" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
