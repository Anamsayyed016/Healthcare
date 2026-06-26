import type { ServiceIcon } from '@/lib/data/services';

export const servicesOverview = {
  heading: 'Our Healthcare Expertise',
  paragraph:
    'PharmEFC delivers integrated healthcare consulting and pharmaceutical support — combining strategic advisory, operational excellence, and quality-driven solutions to help organizations achieve sustainable healthcare outcomes.',
  highlights: [
    {
      title: 'Healthcare Excellence',
      desc: 'End-to-end solutions for hospitals and healthcare institutions',
      icon: 'award' as const,
    },
    {
      title: 'WHO-GMP Standards',
      desc: 'Quality frameworks aligned with global manufacturing benchmarks',
      icon: 'shield' as const,
    },
    {
      title: 'Patient-Centric Solutions',
      desc: 'Services designed around safety, access, and better outcomes',
      icon: 'heart' as const,
    },
  ],
};

export const serviceKeyBenefits: Record<string, string> = {
  'medical-tourism': 'Coordinated global care pathways',
  'healthcare-consultancy': 'Strategic growth and operational advisory',
  'hospital-planning': 'Infrastructure planning and development',
  'nabh-accreditation': 'Accreditation readiness and compliance',
  'quality-management': 'Robust QMS implementation',
  'healthcare-audits': 'Independent compliance assessments',
  'clinical-process-optimization': 'Workflow efficiency and outcomes',
  telemedicine: 'Accessible digital healthcare delivery',
  'training-skill-development': 'Professional upskilling programs',
  'hospital-operations': 'Resource optimization and excellence',
};

export const featuredServices: {
  slug: string;
  detail: string;
  benefits: string[];
  process: string;
}[] = [
  {
    slug: 'medical-tourism',
    detail:
      'Our medical tourism services connect patients and partners with trusted healthcare destinations, coordinating treatment pathways, logistics, and post-care support for a seamless international healthcare experience.',
    benefits: [
      'End-to-end patient facilitation',
      'Trusted hospital network access',
      'Coordinated care and follow-up',
    ],
    process: 'Assessment → Hospital matching → Care coordination → Follow-up support',
  },
  {
    slug: 'healthcare-consultancy',
    detail:
      'We provide strategic healthcare consultancy for hospitals, clinics, and healthcare enterprises — helping leadership teams navigate growth, compliance, and operational transformation with data-driven insights.',
    benefits: [
      'Strategic planning and advisory',
      'Operational performance review',
      'Sustainable growth frameworks',
    ],
    process: 'Discovery → Analysis → Strategy formulation → Implementation support',
  },
  {
    slug: 'hospital-planning',
    detail:
      'From greenfield projects to facility expansion, our hospital planning and development services cover feasibility, design advisory, equipment planning, and commissioning support for modern healthcare infrastructure.',
    benefits: [
      'Comprehensive feasibility studies',
      'Infrastructure and layout planning',
      'Commissioning and launch support',
    ],
    process: 'Feasibility → Planning → Development → Operational readiness',
  },
  {
    slug: 'nabh-accreditation',
    detail:
      'Achieve NABH accreditation with expert guidance on documentation, process alignment, staff training, and mock assessments — ensuring your organization meets national healthcare quality standards.',
    benefits: [
      'Documentation and gap analysis',
      'Process standardization support',
      'Mock audit preparation',
    ],
    process: 'Gap assessment → Documentation → Training → Accreditation readiness',
  },
];

export const processSteps = [
  { step: 1, title: 'Consultation', desc: 'Understanding your organization\'s needs and objectives' },
  { step: 2, title: 'Assessment', desc: 'Comprehensive evaluation of current operations and gaps' },
  { step: 3, title: 'Strategy & Implementation', desc: 'Tailored solutions deployed with expert oversight' },
  { step: 4, title: 'Continuous Support', desc: 'Ongoing monitoring, refinement, and partnership' },
];

export const whyChooseServices = [
  { title: 'Experienced Team', desc: 'Seasoned healthcare consultants and industry specialists', icon: 'users' as const },
  { title: 'Ethical Healthcare Practices', desc: 'Integrity and transparency in every engagement', icon: 'scale' as const },
  { title: 'Industry Expertise', desc: 'Deep knowledge across pharmaceutical and hospital sectors', icon: 'briefcase' as const },
  { title: 'Quality Standards', desc: 'Commitment to WHO-GMP and healthcare compliance frameworks', icon: 'shield' as const },
  { title: 'Customized Solutions', desc: 'Tailored strategies aligned with your organization\'s goals', icon: 'settings' as const },
  { title: 'End-to-End Support', desc: 'From consultation through implementation and beyond', icon: 'layers' as const },
];

export const bentoLayout: Record<string, string> = {
  'medical-tourism': 'lg:col-span-2 lg:row-span-2',
  'healthcare-consultancy': 'lg:col-span-1',
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
