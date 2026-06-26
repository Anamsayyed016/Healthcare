'use client';

import { ArrowRight, CheckCircle } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="bg-linear-to-br from-primary via-primary-light to-accent rounded-2xl p-12 md:p-20 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Health?</h2>
              <p className="text-lg mb-8 text-white/90">
                Join thousands of patients who have experienced exceptional healthcare at HealthCare+. Our team is ready to help you achieve optimal wellness.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} />
                  <span>Free initial consultation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} />
                  <span>Personalized treatment plans</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={20} />
                  <span>24/7 patient support</span>
                </div>
              </div>
              
              <button className="bg-white text-primary px-8 py-4 rounded-lg hover:bg-gray-100 transition font-semibold flex items-center gap-2 text-lg">
                Schedule Your Visit
                <ArrowRight size={20} />
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-lg p-8">
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white/50"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white/50"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:border-white/50"
                />
                <select className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:border-white/50">
                  <option value="" className="text-gray-800">Select a Service</option>
                  <option value="cardiology" className="text-gray-800">Cardiology</option>
                  <option value="neurology" className="text-gray-800">Neurology</option>
                  <option value="emergency" className="text-gray-800">Emergency Care</option>
                  <option value="preventive" className="text-gray-800">Preventive Health</option>
                </select>
                <button
                  type="submit"
                  className="w-full bg-white text-primary px-6 py-3 rounded-lg hover:bg-gray-100 transition font-semibold"
                >
                  Request Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
