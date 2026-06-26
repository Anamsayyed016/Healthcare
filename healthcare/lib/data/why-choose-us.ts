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
    title: 'Quality Assured Products',
    description:
      'Every pharmaceutical offering meets rigorous quality benchmarks through trusted WHO-GMP manufacturing partnerships.',
    icon: 'shield',
    position: 'md:col-start-1 md:row-start-1',
  },
  {
    title: 'Experienced Leadership Team',
    description:
      'Seasoned healthcare leaders guiding strategy with deep industry expertise and proven operational excellence.',
    icon: 'users',
    position: 'md:col-start-2 md:row-start-1',
  },
  {
    title: 'Global Healthcare Perspective',
    description:
      'International best practices and global standards woven into every solution we deliver for modern healthcare.',
    icon: 'globe',
    position: 'md:col-start-3 md:row-start-1',
  },
  {
    title: 'Customer-Centric Approach',
    description:
      'Personalized attention and responsive support ensuring every client and patient receives dedicated care.',
    icon: 'heart',
    position: 'md:col-start-1 md:row-start-2',
  },
  {
    title: 'Ethical Business Practices',
    description:
      'Integrity, transparency, and accountability form the foundation of every partnership and transaction.',
    icon: 'scale',
    position: 'md:col-start-2 md:row-start-2',
  },
  {
    title: 'End-to-End Healthcare Solutions',
    description:
      'From pharmaceuticals to hospital consultancy — comprehensive services under one trusted healthcare partner.',
    icon: 'layers',
    position: 'md:col-start-3 md:row-start-2',
  },
];
