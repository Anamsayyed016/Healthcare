export type Leader = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  education: string;
  experience: string;
  group: 'executive' | 'advisory';
};

export const leaders: Leader[] = [
  {
    slug: 'managing-director',
    name: 'Dr. Rajesh Kumar',
    role: 'Managing Director',
    bio: 'Visionary healthcare entrepreneur leading PharmEFC\'s strategic direction with a focus on pharmaceutical excellence and healthcare innovation.',
    education: 'MD, MBBS, MBA (Healthcare Management)',
    experience: '25+ years in pharmaceutical innovation, healthcare leadership, and business development.',
    group: 'executive',
  },
  {
    slug: 'director',
    name: 'Dr. Priya Sharma',
    role: 'Director',
    bio: 'Oversees clinical operations and medical excellence, ensuring PharmEFC maintains the highest standards across all healthcare initiatives.',
    education: 'MD, PhD (Medical Sciences)',
    experience: '20+ years in clinical research, hospital administration, and healthcare quality systems.',
    group: 'executive',
  },
  {
    slug: 'chief-marketing-officer',
    name: 'Arjun Mehta',
    role: 'Chief Marketing Officer',
    bio: 'Drives brand strategy, market expansion, and stakeholder engagement for PharmEFC\'s pharmaceutical and healthcare services portfolio.',
    education: 'MBA (Marketing), B.Pharm',
    experience: '15+ years in pharmaceutical marketing, brand management, and market development.',
    group: 'executive',
  },
  {
    slug: 'content-creator-educator',
    name: 'Dr. Aisha Patel',
    role: 'Content Creator & Educator',
    bio: 'Leads health education initiatives, digital content strategy, and professional training programs for healthcare audiences.',
    education: 'PhD (Pharmaceutical Sciences), MBBS',
    experience: '12+ years in medical communications, health education, and pharmaceutical training.',
    group: 'executive',
  },
  {
    slug: 'advisory-dr-singh',
    name: 'Dr. Vikram Singh',
    role: 'Advisory Board Member',
    bio: 'Provides strategic counsel on regulatory affairs, quality systems, and international healthcare standards.',
    education: 'MD, Fellowship in Healthcare Administration',
    experience: '30+ years in healthcare policy, regulatory compliance, and hospital governance.',
    group: 'advisory',
  },
  {
    slug: 'advisory-ms-desai',
    name: 'Ms. Neha Desai',
    role: 'Advisory Board Member',
    bio: 'Advises on corporate strategy, partnerships, and sustainable growth in the pharmaceutical sector.',
    education: 'CA, MBA (Finance)',
    experience: '18+ years in corporate finance, healthcare investments, and business advisory.',
    group: 'advisory',
  },
];

export const executiveLeaders = leaders.filter((l) => l.group === 'executive');
export const advisoryBoard = leaders.filter((l) => l.group === 'advisory');
