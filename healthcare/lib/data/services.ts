export type ServiceIcon =
  | 'globe'
  | 'briefcase'
  | 'building'
  | 'badge'
  | 'clipboard'
  | 'search'
  | 'workflow'
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
    slug: 'medical-tourism',
    title: 'Medical Tourism Services',
    shortTitle: 'Medical Tourism',
    description:
      'End-to-end medical tourism facilitation connecting patients with trusted healthcare destinations and coordinated care pathways.',
    icon: 'globe',
    span: 'lg:col-span-2 lg:row-span-2',
    accent: 'from-sky-50/90 via-white to-emerald-50/80',
    iconBg: 'from-[#4F9DF8] to-[#38BDF8]',
  },
  {
    slug: 'healthcare-consultancy',
    title: 'Healthcare Consultancy',
    shortTitle: 'Healthcare Consultancy',
    description:
      'Strategic advisory for healthcare organizations seeking operational excellence and sustainable growth.',
    icon: 'briefcase',
    span: 'lg:col-span-1',
    accent: 'from-white via-[#F8FBFF] to-sky-50/70',
    iconBg: 'from-[#6366F1] to-[#4F9DF8]',
  },
  {
    slug: 'hospital-planning',
    title: 'Hospital Planning & Development',
    shortTitle: 'Hospital Planning',
    description:
      'Comprehensive planning and development support for new and expanding hospital infrastructure.',
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
      'Expert guidance through NABH accreditation processes, documentation, and compliance readiness.',
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
      'Design and implementation of robust quality management frameworks aligned with healthcare standards.',
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
      'Independent audits and assessments to strengthen compliance, safety, and clinical governance.',
    icon: 'search',
    span: 'lg:col-span-1',
    accent: 'from-white to-[#F8FBFF]',
    iconBg: 'from-[#818CF8] to-[#4F9DF8]',
  },
  {
    slug: 'clinical-process-optimization',
    title: 'Clinical Process Optimization',
    shortTitle: 'Clinical Optimization',
    description:
      'Streamlining clinical workflows to improve efficiency, outcomes, and patient experience.',
    icon: 'workflow',
    span: 'lg:col-span-1',
    accent: 'from-[#F4FFF7]/70 via-white to-sky-50/50',
    iconBg: 'from-[#22D3EE] to-[#4F9DF8]',
  },
  {
    slug: 'telemedicine',
    title: 'Telemedicine Services',
    shortTitle: 'Telemedicine',
    description:
      'Digital healthcare delivery solutions enabling remote consultations and accessible patient care.',
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
      'Professional training programs to upskill healthcare teams and elevate organizational capability.',
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
      'Operational excellence initiatives to optimize resources, reduce bottlenecks, and improve service delivery.',
    icon: 'settings',
    span: 'lg:col-span-2',
    accent: 'from-[#F8FBFF] via-white to-[#F4FFF7]/90',
    iconBg: 'from-[#4F9DF8] to-[#4ADE80]',
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
