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
