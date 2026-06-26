'use client';

import { Heart, Brain, Zap, Shield, Users, Microscope } from 'lucide-react';

const services = [
  {
    icon: Heart,
    title: 'Cardiology',
    description: 'Comprehensive heart and cardiovascular care with state-of-the-art diagnostic and treatment facilities.'
  },
  {
    icon: Brain,
    title: 'Neurology',
    description: 'Expert neurological diagnosis and treatment for complex brain and nervous system disorders.'
  },
  {
    icon: Zap,
    title: 'Emergency Care',
    description: '24/7 emergency services with rapid response teams and critical care capabilities.'
  },
  {
    icon: Shield,
    title: 'Preventive Health',
    description: 'Proactive wellness programs and screening services to maintain optimal health.'
  },
  {
    icon: Users,
    title: 'Telemedicine',
    description: 'Remote consultations with specialists from the comfort of your home or office.'
  },
  {
    icon: Microscope,
    title: 'Research',
    description: 'Cutting-edge medical research advancing treatment protocols and patient care standards.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Comprehensive healthcare solutions designed to meet all your medical needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition group"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition">
                  <Icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
