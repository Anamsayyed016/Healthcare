import {
  Pill,
  Tablets,
  FlaskConical,
  Globe2,
  Briefcase,
  Building2,
  BadgeCheck,
  ClipboardCheck,
  SearchCheck,
  Workflow,
  Video,
  GraduationCap,
  Settings2,
  ShieldCheck,
  Users,
  HeartHandshake,
  Scale,
  Layers,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { ProductIcon } from '@/lib/data/products';
import type { ServiceIcon } from '@/lib/data/services';
import type { WhyChooseIcon } from '@/lib/data/why-choose-us';

export const productIconMap: Record<ProductIcon, LucideIcon> = {
  pill: Pill,
  tablets: Tablets,
  flask: FlaskConical,
};

export const serviceIconMap: Record<ServiceIcon, LucideIcon> = {
  globe: Globe2,
  briefcase: Briefcase,
  building: Building2,
  badge: BadgeCheck,
  clipboard: ClipboardCheck,
  search: SearchCheck,
  workflow: Workflow,
  video: Video,
  graduation: GraduationCap,
  settings: Settings2,
};

export const whyChooseIconMap: Record<WhyChooseIcon, LucideIcon> = {
  shield: ShieldCheck,
  users: Users,
  globe: Globe2,
  heart: HeartHandshake,
  scale: Scale,
  layers: Layers,
};

/** Semantic icon color hierarchy — blue primary, red accent only */
export type IconSemantic =
  | 'healthcare'
  | 'heart'
  | 'security'
  | 'innovation'
  | 'pharmaceutical'
  | 'research'
  | 'quality'
  | 'support'
  | 'medical-highlight';

export const iconSemanticClass: Record<IconSemantic, string> = {
  healthcare: 'text-pharm-red-accent',
  heart: 'text-pharm-red-accent',
  security: 'text-pharm-red-soft',
  innovation: 'text-pharm-red-accent',
  pharmaceutical: 'text-pharm-blue-light',
  research: 'text-pharm-blue-light',
  quality: 'text-pharm-blue-light',
  support: 'text-pharm-blue-light',
  'medical-highlight': 'text-pharm-red-soft',
};

export function iconColor(semantic: IconSemantic): string {
  return iconSemanticClass[semantic];
}

export function getWhyChooseIconColor(icon: WhyChooseIcon): string {
  const map: Record<WhyChooseIcon, string> = {
    shield: iconSemanticClass.security,
    users: iconSemanticClass.support,
    globe: iconSemanticClass.support,
    heart: iconSemanticClass.heart,
    scale: iconSemanticClass.support,
    layers: iconSemanticClass.support,
  };
  return map[icon];
}

export type AboutValueIcon =
  | 'lightbulb'
  | 'shield'
  | 'scale'
  | 'heart'
  | 'award'
  | 'handshake';

export function getAboutValueIconColor(icon: AboutValueIcon): string {
  const map: Record<AboutValueIcon, string> = {
    lightbulb: iconSemanticClass.innovation,
    shield: iconSemanticClass.quality,
    scale: iconSemanticClass.support,
    heart: iconSemanticClass.heart,
    award: iconSemanticClass.quality,
    handshake: iconSemanticClass.support,
  };
  return map[icon];
}
