import type { ServiceIcon } from '@/lib/data/services';

export const servicesOverview = {
  heading: 'Our Healthcare Expertise',
  paragraph:
    'PharmEFC delivers professional healthcare services for hospitals, clinics, healthcare organizations, and institutions — from consultancy and medical tourism to hospital planning, NABH accreditation, quality systems, audits, telemedicine, training, and operations improvement.',
  highlights: [
    {
      title: 'Healthcare Consultancy',
      desc: 'Strategic and operational advisory for healthcare institutions',
      icon: 'award' as const,
    },
    {
      title: 'Institutional Support',
      desc: 'Planning, accreditation, quality systems, and operational improvement',
      icon: 'shield' as const,
    },
    {
      title: 'Patient-Centered Services',
      desc: 'Solutions focused on care quality, access, and organizational performance',
      icon: 'heart' as const,
    },
  ],
};

export const serviceKeyBenefits: Record<string, string> = {
  'healthcare-consultancy':
    'Practical strategies for performance, compliance, and operational excellence',
  'medical-tourism':
    'A seamless healthcare journey at every stage of medical travel',
  'hospital-planning':
    'Efficient facilities with high standards of care and performance',
  'nabh-accreditation':
    'Simplified accreditation preparation and stronger quality systems',
  'quality-management':
    'Sustainable quality standards that improve healthcare delivery',
  'healthcare-audits':
    'Clear insight to improve efficiency, compliance, and service quality',
  telemedicine: 'Expanded healthcare access through reliable digital consultations',
  'training-skill-development':
    'Stronger healthcare teams through continuous professional development',
  'hospital-operations':
    'Improved productivity and better patient experiences',
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
      'PharmEFC provides comprehensive healthcare consultancy services for hospitals, clinics, healthcare organizations, and institutions. Our advisory support helps leadership teams strengthen day-to-day operations and long-term institutional performance.',
    benefits: [
      'Operational Efficiency',
      'Strategic Planning',
      'Regulatory Compliance',
      'Quality Standards',
      'Patient Care Improvement',
    ],
    process:
      'We support healthcare organizations with practical strategies that enhance performance, compliance, and long-term operational excellence.',
  },
  {
    slug: 'medical-tourism',
    detail:
      'We assist domestic and international patients in accessing quality healthcare through coordinated medical tourism services, managing each stage of the journey with professional facilitation and clear communication.',
    benefits: [
      'Hospital Selection',
      'Specialist Consultations',
      'Treatment Planning',
      'Travel Assistance',
      'Accommodation Coordination',
      'Post-Treatment Follow-Up',
    ],
    process:
      'We deliver a seamless healthcare journey by coordinating every stage of the patient\'s medical travel experience.',
  },
  {
    slug: 'hospital-planning',
    detail:
      'Our hospital planning and development services support the planning, design, setup, expansion, and operational development of hospitals and healthcare facilities.',
    benefits: [
      'Infrastructure Planning',
      'Facility Design',
      'Workflow Optimization',
      'Operational Development',
      'Patient-Centered Care',
    ],
    process:
      'We help healthcare institutions build efficient facilities that deliver high standards of care and operational performance.',
  },
  {
    slug: 'nabh-accreditation',
    detail:
      'We guide hospitals through the NABH accreditation process with structured support across documentation, training, quality implementation, and readiness assessment.',
    benefits: [
      'Gap Analysis',
      'Documentation',
      'Staff Training',
      'Quality Implementation',
      'Mock Assessments',
      'Continuous Compliance',
    ],
    process:
      'We simplify accreditation preparation while strengthening quality systems and regulatory readiness.',
  },
  {
    slug: 'quality-management',
    detail:
      'PharmEFC designs and implements quality management systems for healthcare organizations, helping institutions embed quality practices across clinical and operational functions.',
    benefits: [
      'Clinical Outcomes',
      'Patient Safety',
      'Operational Efficiency',
      'Regulatory Compliance',
      'Continuous Improvement',
    ],
    process:
      'We promote sustainable quality standards that improve healthcare delivery and organizational performance.',
  },
  {
    slug: 'healthcare-audits',
    detail:
      'Our healthcare audit services evaluate clinical, operational, and administrative processes to provide a clear view of current performance and areas for improvement.',
    benefits: [
      'Clinical Practices',
      'Operations',
      'Administration',
      'Compliance',
      'Quality Improvement',
    ],
    process:
      'We identify opportunities to improve efficiency, maintain compliance, and enhance healthcare service quality.',
  },
  {
    slug: 'telemedicine',
    detail:
      'PharmEFC facilitates secure remote consultations between patients and qualified healthcare professionals, supporting accessible and convenient care delivery.',
    benefits: [
      'Improved Accessibility',
      'Continuity of Care',
      'Secure Digital Consultations',
      'Convenient Healthcare Access',
    ],
    process:
      'We expand access to healthcare through reliable digital consultation services.',
  },
  {
    slug: 'training-skill-development',
    detail:
      'We deliver professional training programs for healthcare professionals, hospital staff, and healthcare organizations, supporting continuous learning across essential institutional competencies.',
    benefits: [
      'Quality Management',
      'Patient Safety',
      'Communication Skills',
      'Operational Excellence',
    ],
    process:
      'We strengthen healthcare teams through continuous learning and professional development.',
  },
  {
    slug: 'hospital-operations',
    detail:
      'PharmEFC provides customized operational improvement solutions for hospitals and healthcare institutions, addressing workflow, resource use, and service delivery challenges.',
    benefits: [
      'Workflow Optimization',
      'Cost Reduction',
      'Resource Utilization',
      'Operational Efficiency',
      'Patient Satisfaction',
    ],
    process:
      'We help healthcare organizations improve productivity while delivering better patient experiences.',
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
  { title: 'Quality Standards', desc: 'Commitment to structured quality and healthcare compliance frameworks', icon: 'shield' as const },
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
  telemedicine: 'lg:col-span-1',
  'training-skill-development': 'lg:col-span-1',
  'hospital-operations': 'lg:col-span-2',
};

export type ServicesPageIcon = ServiceIcon | 'award' | 'shield' | 'heart' | 'users' | 'scale' | 'settings' | 'layers';
