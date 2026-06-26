'use client';

import { ExternalLink, Mail } from 'lucide-react';

const leaders = [
  {
    name: 'Dr. Sarah Mitchell',
    title: 'Chief Executive Officer',
    specialty: 'Healthcare Administration',
    bio: 'Over 25 years of experience in healthcare leadership and strategic development.',
  },
  {
    name: 'Dr. James Chen',
    title: 'Chief Medical Officer',
    specialty: 'Internal Medicine',
    bio: 'Board-certified physician with expertise in clinical operations and quality assurance.',
  },
  {
    name: 'Dr. Emily Rodriguez',
    title: 'Chief of Cardiology',
    specialty: 'Interventional Cardiology',
    bio: 'Leading expert in advanced cardiac procedures with 1000+ successful surgeries.',
  },
  {
    name: 'Dr. Michael Thompson',
    title: 'Chief of Neurology',
    specialty: 'Neurosurgery',
    bio: 'Pioneering research in neurological disorders and innovative treatment methods.',
  },
];

export default function Leadership() {
  return (
    <section id="team" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Leadership Team</h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Meet the experienced professionals guiding HealthCare+ toward excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leaders.map((leader, index) => (
            <div key={index} className="group">
              <div className="bg-linear-to-br from-primary/10 to-accent/10 rounded-lg h-64 mb-4 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-accent/20 group-hover:opacity-0 transition"></div>
                <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center">
                  <div className="text-5xl font-bold text-primary/40">{leader.name.charAt(0)}</div>
                </div>
              </div>
              
              <h3 className="font-bold text-lg mb-1">{leader.name}</h3>
              <p className="text-primary text-sm font-semibold mb-2">{leader.title}</p>
              <p className="text-accent text-xs mb-3">{leader.specialty}</p>
              <p className="text-muted text-sm mb-4">{leader.bio}</p>
              
              <div className="flex gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-primary/10 hover:bg-primary/20 rounded text-primary transition text-sm">
                  <Mail size={16} />
                  Email
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-accent/10 hover:bg-accent/20 rounded text-accent transition text-sm">
                  <ExternalLink size={16} />
                  Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
