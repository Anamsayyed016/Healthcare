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
  healthcare: 'text-pharm-blue-brand',
  heart: 'text-pharm-red-accent',
  security: 'text-pharm-blue-brand',
  innovation: 'text-pharm-red-accent',
  pharmaceutical: 'text-pharm-blue-brand',
  research: 'text-pharm-blue-brand',
  quality: 'text-pharm-blue-brand',
  support: 'text-pharm-blue-brand',
  'medical-highlight': 'text-pharm-green',
};

/** Shared glassmorphism icon container classes */
export const ICON_GLASS_SM = 'icon-glass icon-glass-sm icon-glass-float';
export const ICON_GLASS_MD = 'icon-glass icon-glass-md';
export const ICON_GLASS_LG = 'icon-glass icon-glass-lg';
export const ICON_GLASS_XL = 'icon-glass icon-glass-xl';
export const ICON_GLASS_HEART = 'icon-glass icon-glass-heart icon-glass-float';
export const ICON_GLASS_PILL = 'icon-glass icon-glass-pill icon-glass-float';

export function iconColor(semantic: IconSemantic): string {
  return iconSemanticClass[semantic];
}

export function getWhyChooseIconColor(icon: WhyChooseIcon): string {
  const map: Record<WhyChooseIcon, string> = {
    shield: iconSemanticClass.quality,
    users: iconSemanticClass.support,
    globe: iconSemanticClass.healthcare,
    heart: iconSemanticClass.heart,
    scale: iconSemanticClass.support,
    layers: iconSemanticClass.innovation,
  };
  return map[icon];
}

export function getServiceIconColor(icon: ServiceIcon): string {
  const map: Record<ServiceIcon, string> = {
    globe: iconSemanticClass.healthcare,
    briefcase: iconSemanticClass.support,
    building: iconSemanticClass.healthcare,
    badge: iconSemanticClass.quality,
    clipboard: iconSemanticClass.quality,
    search: iconSemanticClass.research,
    workflow: iconSemanticClass.support,
    video: iconSemanticClass.healthcare,
    graduation: iconSemanticClass.support,
    settings: iconSemanticClass.support,
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
