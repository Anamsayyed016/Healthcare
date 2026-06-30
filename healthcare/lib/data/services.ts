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
    slug: 'healthcare-consultancy',
    title: 'Healthcare Consultancy',
    shortTitle: 'Healthcare Consultancy',
    description:
      'Strategic advisory for hospitals and healthcare organizations seeking operational clarity, compliance support, and sustainable improvement.',
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
      'Coordinated support for medical tourism enquiries, connecting patients and partners with trusted healthcare pathways and facilitation.',
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
      'Planning and development support for new and expanding hospital infrastructure, from feasibility to operational readiness.',
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
      'Guidance through NABH accreditation processes, documentation, training, and readiness for healthcare quality standards.',
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
      'Design and implementation of quality management frameworks aligned with healthcare and institutional requirements.',
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
      'Independent audits and assessments to strengthen compliance, governance, and operational accountability.',
    icon: 'search',
    span: 'lg:col-span-1',
    accent: 'from-white to-[#F8FBFF]',
    iconBg: 'from-[#818CF8] to-[#4F9DF8]',
  },
  {
    slug: 'telemedicine',
    title: 'Telemedicine',
    shortTitle: 'Telemedicine',
    description:
      'Digital healthcare delivery solutions that support remote consultations and accessible patient engagement.',
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
      'Professional training programs to strengthen healthcare teams and build organizational capability.',
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
      'Operational support to improve resource use, service flow, and day-to-day hospital performance.',
    icon: 'settings',
    span: 'lg:col-span-2',
    accent: 'from-[#F8FBFF] via-white to-[#F4FFF7]/90',
    iconBg: 'from-[#4F9DF8] to-[#4ADE80]',
  },
  {
    slug: 'clinical-process-optimization',
    title: 'Clinical Process Optimization',
    shortTitle: 'Clinical Optimization',
    description:
      'Support for streamlining clinical workflows to improve efficiency, coordination, and service delivery.',
    icon: 'workflow',
    span: 'lg:col-span-1',
    accent: 'from-[#F4FFF7]/70 via-white to-sky-50/50',
    iconBg: 'from-[#22D3EE] to-[#4F9DF8]',
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
