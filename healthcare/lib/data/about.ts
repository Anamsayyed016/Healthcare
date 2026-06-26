import { COMPANY_NAME } from '@/lib/contact';

export const aboutContent = {
  companyName: COMPANY_NAME,
  tagline: 'Leading innovation in healthcare and pharmaceutical excellence',
  heroIntro:
    'PharmEFC Healthcare Private Limited is a trusted pharmaceutical and healthcare partner delivering quality products, consultancy, and end-to-end solutions across India and beyond.',
  story: `${COMPANY_NAME} represents a new paradigm in healthcare delivery, combining cutting-edge medical technology with compassionate, patient-centered care. We are committed to transforming lives through innovative pharmaceutical solutions and exceptional medical services.`,
  highlights: [
    'Pioneering pharmaceutical innovations',
    'State-of-the-art diagnostic capabilities',
    'Patient-centric care approach',
  ],
  vision:
    'To be the globally recognized leader in healthcare and pharmaceutical innovation, delivering exceptional patient outcomes through advanced medical science, compassionate care, and transformative healthcare solutions that improve lives worldwide.',
  mission:
    'To provide accessible, affordable, and high-quality healthcare services and pharmaceutical products through innovation, research, and excellence. We commit to enhancing quality of life, advancing medical science, and maintaining the highest ethical standards in all we do.',
  coreValues: [
    { title: 'Innovation', desc: 'Pioneering medical and pharmaceutical breakthroughs', icon: 'lightbulb' as const },
    { title: 'Quality', desc: 'Uncompromising standards in every product and service', icon: 'shield' as const },
    { title: 'Integrity', desc: 'Ethical excellence in all business practices', icon: 'scale' as const },
    { title: 'Patient-Centric Care', desc: 'Putting patient wellbeing at the heart of everything', icon: 'heart' as const },
    { title: 'Excellence', desc: 'Relentless pursuit of the highest standards', icon: 'award' as const },
    { title: 'Ethics', desc: 'Transparency and accountability in every partnership', icon: 'handshake' as const },
  ],
  whyWeExist:
    'We exist to bridge the gap between world-class pharmaceutical manufacturing and accessible healthcare services — empowering patients, partners, and healthcare institutions with trusted solutions that improve lives.',
  philosophy:
    'Our philosophy is rooted in quality without compromise, ethical business practices, and a relentless commitment to patient wellbeing. Every product we offer and every service we deliver reflects our belief that healthcare should be accessible, reliable, and built on trust.',
  timeline: [
    {
      id: 'founded',
      year: '2010',
      title: 'Founded',
      desc: 'PharmEFC established with a vision for quality pharmaceutical distribution and healthcare services.',
      icon: 'flag' as const,
    },
    {
      id: 'growth',
      year: '2015',
      title: 'Growth',
      desc: 'Expanded operations and strengthened pharmaceutical distribution networks.',
      icon: 'trending' as const,
    },
    {
      id: 'expansion',
      year: '2017',
      title: 'Healthcare Expansion',
      desc: 'Broadened healthcare service offerings across institutional partnerships.',
      icon: 'building' as const,
    },
    {
      id: 'products',
      year: '2015',
      title: 'Pharmaceutical Products',
      desc: 'Expanded product portfolio through WHO-GMP manufacturing partnerships.',
      icon: 'pill' as const,
    },
    {
      id: 'services',
      year: '2019',
      title: 'Healthcare Services',
      desc: 'Launched hospital planning, NABH accreditation, and consultancy services.',
      icon: 'stethoscope' as const,
    },
    {
      id: 'future',
      year: '2025',
      title: 'Future Vision',
      desc: 'Advancing medical tourism and international healthcare collaborations.',
      icon: 'globe' as const,
    },
  ],
  achievements: [
    {
      title: 'Pharmaceutical Products',
      desc: 'Curated portfolio manufactured through WHO-GMP partners',
      icon: 'pill' as const,
    },
    {
      title: 'Healthcare Services',
      desc: 'Comprehensive consultancy and operational excellence',
      icon: 'services' as const,
    },
    {
      title: 'Leadership Excellence',
      desc: 'Experienced team guiding pharmaceutical innovation',
      icon: 'users' as const,
    },
    {
      title: 'Quality Standards',
      desc: 'Committed to ethical, patient-centric healthcare',
      icon: 'shield' as const,
    },
  ],
};
