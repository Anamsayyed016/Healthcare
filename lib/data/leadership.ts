export type Leader = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  education: string;
  experience: string;
  group: 'executive' | 'advisory';
  image?: string;
};

export const leaders: Leader[] = [
  {
    slug: 'managing-director',
    name: 'Dr. Kunal Basu',
    role: 'Chief Executive Officer (CEO)',
    bio: 'Distinguished engineer, academician, researcher, and healthcare entrepreneur providing strategic leadership across PharmEFC\'s pharmaceutical and healthcare initiatives.',
    education: 'Focuses on research-led development, innovation, and long-term organizational vision.',
    experience: 'Provides strategic direction and leadership for PharmEFC\'s medicines portfolio and healthcare services.',
    group: 'executive',
    image:
      'https://res.cloudinary.com/wslwkiwr/image/upload/v1783373795/chat4_vdd5v2.png',
  },
  {
    slug: 'director',
    name: 'Rahul Yadav',
    role: 'Chief Distribution Officer',
    bio: 'Healthcare entrepreneur leading business development, operations, and strategic growth for PharmEFC.',
    education: 'Focuses on operational execution, commercial development, and sustainable business expansion.',
    experience: 'Oversees day-to-day operations, partner engagement, and organizational growth initiatives.',
    group: 'executive',
    image:
      'https://res.cloudinary.com/wslwkiwr/image/upload/v1783373795/chat1_kqfxe1.png',
  },
  {
    slug: 'chief-marketing-officer',
    name: 'Syed Asif Haider',
    role: 'Chief Marketing Officer',
    bio: 'Leads marketing strategy, branding, and market expansion for PharmEFC\'s pharmaceutical products and healthcare services.',
    education: 'Focuses on brand positioning, market outreach, and stakeholder communication.',
    experience: 'Directs marketing initiatives that strengthen PharmEFC\'s presence across pharmaceutical and healthcare markets.',
    group: 'executive',
    image:
      'https://res.cloudinary.com/wslwkiwr/image/upload/v1783373796/chat2_tluf18.png',
  },
  {
    slug: 'content-creator-educator',
    name: 'Kuber Singh Patel',
    role: 'Product Manager',
    bio: 'Creates educational content and healthcare awareness initiatives that support informed engagement with pharmaceutical and health topics.',
    education: 'Focuses on accessible health education and clear, professional communication.',
    experience: 'Develops content that promotes healthcare awareness and supports PharmEFC\'s educational outreach.',
    group: 'executive',
    image:
      'https://res.cloudinary.com/wslwkiwr/image/upload/v1783373794/chat3_vhbuet.png',
  },
];

export const executiveLeaders = leaders.filter((l) => l.group === 'executive');
export const advisoryBoard = leaders.filter((l) => l.group === 'advisory');
