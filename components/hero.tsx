'use client';

import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl">
        <div className="inline-block mb-6 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
          <span className="text-accent text-sm font-semibold">Welcome to Modern Healthcare</span>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
          Transforming Patient Care with
          <span className="text-primary"> Advanced Technology</span>
        </h1>

        <p className="text-xl text-muted mb-8 max-w-2xl mx-auto text-balance">
          Delivering exceptional healthcare solutions through innovation, compassion, and clinical excellence. We partner with leading medical institutions to improve patient outcomes.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary-light transition flex items-center justify-center gap-2">
            Schedule Consultation
            <ArrowRight size={20} />
          </button>
          <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary/5 transition">
            Learn More
          </button>
        </div>
      </div>

      <div className="mt-20 relative max-w-5xl w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">25K+</div>
              <p className="text-muted">Patients Served</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-muted">Partner Hospitals</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">99%</div>
              <p className="text-muted">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
