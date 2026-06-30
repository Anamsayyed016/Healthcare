export type WhyChooseIcon =
  | 'shield'
  | 'users'
  | 'globe'
  | 'heart'
  | 'scale'
  | 'layers';

export type WhyChooseReason = {
  title: string;
  description: string;
  icon: WhyChooseIcon;
  position: string;
};

export const whyChooseReasons: WhyChooseReason[] = [
  {
    title: 'Quality-Assured Products',
    description:
      'Pharmaceutical products manufactured through reputed WHO-GMP partners under stringent quality standards.',
    icon: 'shield',
    position: 'md:col-start-1 md:row-start-1',
  },
  {
    title: 'Experienced Leadership',
    description:
      'A leadership team with expertise across engineering, healthcare entrepreneurship, operations, and market development.',
    icon: 'users',
    position: 'md:col-start-2 md:row-start-1',
  },
  {
    title: 'WHO-GMP Manufacturing',
    description:
      'Manufacturing partnerships aligned with WHO-GMP quality frameworks for safety, consistency, and reliability.',
    icon: 'globe',
    position: 'md:col-start-3 md:row-start-1',
  },
  {
    title: 'Customer-Centric Approach',
    description:
      'Responsive support and attentive service for hospitals, partners, and clients across products and consultancy.',
    icon: 'heart',
    position: 'md:col-start-1 md:row-start-2',
  },
  {
    title: 'Ethical Business Practices',
    description:
      'Integrity, transparency, and accountability guide every product enquiry, service engagement, and partnership.',
    icon: 'scale',
    position: 'md:col-start-2 md:row-start-2',
  },
  {
    title: 'End-to-End Healthcare Solutions',
    description:
      'From pharmaceutical products to hospital planning, accreditation, and operations — comprehensive support under one company.',
    icon: 'layers',
    position: 'md:col-start-3 md:row-start-2',
  },
];
