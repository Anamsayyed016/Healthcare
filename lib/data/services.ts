export type ServiceIcon =
  | 'globe'
  | 'briefcase'
  | 'building'
  | 'badge'
  | 'clipboard'
  | 'search'
  | 'video'
  | 'graduation'
  | 'settings';

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: ServiceIcon;
  span?: string;
  accent?: string;
  iconBg?: string;
};

export const services: Service[] = [
  {
    slug: 'healthcare-consultancy',
    title: 'Healthcare Consultancy',
    shortTitle: 'Healthcare Consultancy',
    description:
      'Comprehensive consultancy for hospitals, clinics, healthcare organizations, and institutions — supporting operational efficiency, strategic planning, compliance, and patient care improvement.',
    icon: 'briefcase',
    span: 'lg:col-span-1',
    accent: 'from-white via-[#F8FBFF] to-sky-50/70',
    iconBg: 'from-[#6366F1] to-[#4F9DF8]',
  },
  {
    slug: 'medical-tourism',
    title: 'Medical Tourism',
    shortTitle: 'Medical Tourism',
    description:
      'Coordinated medical tourism services helping domestic and international patients access quality healthcare through hospital selection, treatment planning, travel support, and follow-up.',
    icon: 'globe',
    span: 'lg:col-span-2 lg:row-span-2',
    accent: 'from-sky-50/90 via-white to-emerald-50/80',
    iconBg: 'from-[#4F9DF8] to-[#38BDF8]',
  },
  {
    slug: 'hospital-planning',
    title: 'Hospital Planning & Development',
    shortTitle: 'Hospital Planning',
    description:
      'Planning, design, setup, expansion, and operational development support for hospitals and healthcare facilities focused on infrastructure, workflow, and patient-centered care.',
    icon: 'building',
    span: 'lg:col-span-1',
    accent: 'from-[#F4FFF7]/80 via-white to-sky-50/60',
    iconBg: 'from-[#34D399] to-[#4ADE80]',
  },
  {
    slug: 'nabh-accreditation',
    title: 'NABH Accreditation Support',
    shortTitle: 'NABH Accreditation',
    description:
      'Structured guidance through the NABH accreditation process, including gap analysis, documentation, staff training, quality implementation, and mock assessments.',
    icon: 'badge',
    span: 'lg:col-span-1',
    accent: 'from-white via-[#F8FBFF] to-emerald-50/50',
    iconBg: 'from-[#2DD4BF] to-[#4ADE80]',
  },
  {
    slug: 'quality-management',
    title: 'Quality Management Systems',
    shortTitle: 'Quality Management',
    description:
      'Design and implementation of quality management systems for healthcare organizations, focused on clinical outcomes, patient safety, compliance, and continuous improvement.',
    icon: 'clipboard',
    span: 'lg:col-span-1',
    accent: 'from-sky-50/70 via-white to-[#F4FFF7]/60',
    iconBg: 'from-[#4F9DF8] to-[#7DD3FC]',
  },
  {
    slug: 'healthcare-audits',
    title: 'Healthcare Audits',
    shortTitle: 'Healthcare Audits',
    description:
      'Evaluation of clinical, operational, and administrative processes to identify opportunities for improved efficiency, compliance, and service quality.',
    icon: 'search',
    span: 'lg:col-span-1',
    accent: 'from-white to-[#F8FBFF]',
    iconBg: 'from-[#818CF8] to-[#4F9DF8]',
  },
  {
    slug: 'telemedicine',
    title: 'Telemedicine Services',
    shortTitle: 'Telemedicine',
    description:
      'Secure remote consultations between patients and qualified healthcare professionals, improving accessibility, continuity of care, and convenient healthcare access.',
    icon: 'video',
    span: 'lg:col-span-1',
    accent: 'from-sky-50/80 via-white to-emerald-50/60',
    iconBg: 'from-[#4ADE80] to-[#34D399]',
  },
  {
    slug: 'training-skill-development',
    title: 'Training & Skill Development',
    shortTitle: 'Training & Development',
    description:
      'Professional training programs for healthcare professionals, hospital staff, and healthcare organizations across quality management, patient safety, and operational excellence.',
    icon: 'graduation',
    span: 'lg:col-span-1',
    accent: 'from-white via-[#F8FBFF] to-sky-50/70',
    iconBg: 'from-[#F472B6] to-[#4F9DF8]',
  },
  {
    slug: 'hospital-operations',
    title: 'Hospital Operations Improvement',
    shortTitle: 'Operations Improvement',
    description:
      'Customized operational improvement solutions for hospitals and healthcare institutions — optimizing workflow, resource use, efficiency, and patient satisfaction.',
    icon: 'settings',
    span: 'lg:col-span-2',
    accent: 'from-[#F8FBFF] via-white to-[#F4FFF7]/90',
    iconBg: 'from-[#4F9DF8] to-[#4ADE80]',
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
