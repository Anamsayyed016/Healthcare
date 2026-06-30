import type { ServiceIcon } from '@/lib/data/services';

export const servicesOverview = {
  heading: 'Our Healthcare Expertise',
  paragraph:
    'PharmEFC provides professional healthcare consultancy and institutional support — helping hospitals and healthcare organizations with planning, accreditation, quality systems, audits, telemedicine, training, and operational improvement.',
  highlights: [
    {
      title: 'Healthcare Consultancy',
      desc: 'Strategic advisory for hospitals and healthcare institutions',
      icon: 'award' as const,
    },
    {
      title: 'WHO-GMP Standards',
      desc: 'Quality frameworks aligned with pharmaceutical manufacturing partners',
      icon: 'shield' as const,
    },
    {
      title: 'Institutional Support',
      desc: 'Services designed around compliance, operations, and better delivery',
      icon: 'heart' as const,
    },
  ],
};

export const serviceKeyBenefits: Record<string, string> = {
  'healthcare-consultancy': 'Strategic advisory and institutional guidance',
  'medical-tourism': 'Coordinated medical tourism facilitation',
  'hospital-planning': 'Infrastructure planning and development support',
  'nabh-accreditation': 'Accreditation readiness and documentation support',
  'quality-management': 'Practical quality management system implementation',
  'healthcare-audits': 'Independent compliance and governance assessments',
  telemedicine: 'Accessible digital healthcare delivery',
  'training-skill-development': 'Professional healthcare training programs',
  'hospital-operations': 'Operational improvement and service efficiency',
  'clinical-process-optimization': 'Workflow coordination and process improvement',
};

export const featuredServices: {
  slug: string;
  detail: string;
  benefits: string[];
  process: string;
}[] = [
  {
    slug: 'healthcare-consultancy',
    detail:
      'Our healthcare consultancy supports hospitals, clinics, and healthcare organizations with strategic guidance, operational review, and practical recommendations for improvement. We help leadership teams address compliance, growth, and service delivery with a professional, structured approach.',
    benefits: [
      'Strategic planning and advisory support',
      'Operational and institutional review',
      'Practical improvement frameworks',
    ],
    process: 'Consultation → Assessment → Recommendations → Implementation support',
  },
  {
    slug: 'medical-tourism',
    detail:
      'PharmEFC\'s medical tourism service supports coordinated enquiries and facilitation, helping patients and partners navigate trusted healthcare pathways with professional assistance and clear communication.',
    benefits: [
      'Structured enquiry and facilitation support',
      'Coordination across healthcare stakeholders',
      'Professional communication throughout the process',
    ],
    process: 'Enquiry → Assessment → Coordination → Follow-up support',
  },
  {
    slug: 'hospital-planning',
    detail:
      'From new projects to facility expansion, our hospital planning and development support covers feasibility, planning advisory, infrastructure considerations, and readiness for operational launch.',
    benefits: [
      'Feasibility and planning support',
      'Infrastructure and development advisory',
      'Operational readiness guidance',
    ],
    process: 'Feasibility → Planning → Development support → Readiness review',
  },
  {
    slug: 'nabh-accreditation',
    detail:
      'We support healthcare institutions preparing for NABH accreditation through documentation guidance, process alignment, training support, and readiness review for national healthcare quality standards.',
    benefits: [
      'Documentation and gap review support',
      'Process alignment guidance',
      'Accreditation readiness preparation',
    ],
    process: 'Gap review → Documentation → Training → Readiness support',
  },
];

export const processSteps = [
  { step: 1, title: 'Consultation', desc: 'Understanding your organization\'s needs and objectives' },
  { step: 2, title: 'Assessment', desc: 'Reviewing current operations, requirements, and priorities' },
  { step: 3, title: 'Strategy & Implementation', desc: 'Delivering tailored support with professional oversight' },
  { step: 4, title: 'Continuous Support', desc: 'Ongoing partnership, refinement, and follow-up' },
];

export const whyChooseServices = [
  { title: 'Experienced Team', desc: 'Leadership and specialists across pharmaceutical and healthcare services', icon: 'users' as const },
  { title: 'Ethical Healthcare Practices', desc: 'Integrity and transparency in every engagement', icon: 'scale' as const },
  { title: 'Industry Expertise', desc: 'Knowledge across medicines, hospitals, and institutional support', icon: 'briefcase' as const },
  { title: 'Quality Standards', desc: 'Commitment to WHO-GMP and healthcare compliance frameworks', icon: 'shield' as const },
  { title: 'Customized Solutions', desc: 'Support aligned with each organization\'s goals and context', icon: 'settings' as const },
  { title: 'End-to-End Support', desc: 'From consultation through implementation and follow-up', icon: 'layers' as const },
];

export const bentoLayout: Record<string, string> = {
  'healthcare-consultancy': 'lg:col-span-1',
  'medical-tourism': 'lg:col-span-2 lg:row-span-2',
  'hospital-planning': 'lg:col-span-1',
  'nabh-accreditation': 'lg:col-span-1',
  'quality-management': 'lg:col-span-1',
  'healthcare-audits': 'lg:col-span-1',
  'clinical-process-optimization': 'lg:col-span-1',
  telemedicine: 'lg:col-span-1',
  'training-skill-development': 'lg:col-span-1',
  'hospital-operations': 'lg:col-span-2',
};

export type ServicesPageIcon = ServiceIcon | 'award' | 'shield' | 'heart' | 'users' | 'scale' | 'settings' | 'layers';
