export type ProductIcon = 'pill' | 'tablets' | 'flask';

export type Product = {
  slug: string;
  name: string;
  category: string;
  categoryBadge?: string;
  icon: ProductIcon;
  image?: string;
  imageUrl?: string;
  thumbnail?: string;
  description: string;
  overview: string;
  composition: string[];
  benefits: string[];
  cardHighlights?: string[];
  suitableFor?: string[];
  indications?: string[];
  manufacturing: string;
  qualityStandards: string;
};

export const DEFAULT_QUALITY_BADGES = [
  'WHO-GMP Manufactured',
  'Quality Assured',
  'Trusted Formulation',
];

export function getProductImage(product: Product): string | undefined {
  return product.image ?? product.imageUrl ?? product.thumbnail;
}

export function getCategoryBadge(product: Product): string {
  return product.categoryBadge ?? product.category;
}

export function getCardHighlights(product: Product): string[] {
  if (product.cardHighlights?.length) return product.cardHighlights;
  return product.composition.slice(0, 3);
}

export const MANUFACTURING_STATEMENT =
  'All PharmEFC pharmaceutical products are manufactured through reputed WHO-GMP manufacturing partners under stringent quality standards, ensuring quality, safety, and consistency.';

export const PRODUCT_DESCRIPTION =
  'Manufactured through reputed WHO-GMP manufacturing partners under stringent quality standards.';

export const WHO_GMP_MESSAGE = MANUFACTURING_STATEMENT;

export const products: Product[] = [
  {
    slug: 'bone-efc-tablet',
    name: 'Bone EFC™ Tablet',
    category: 'Bone Health Supplement',
    categoryBadge: 'Bone Health',
    icon: 'pill',
    image:
      'https://res.cloudinary.com/wslwkiwr/image/upload/v1782805999/Bone_efc_3d_1_sfvvmp.jpg',
    cardHighlights: ['Calcium Orotate', 'Vitamin D3', 'Magnesium Orotate'],
    description:
      'Formulated with Calcium Orotate, Magnesium Orotate, and Vitamin D3 to support bone strength, healthy teeth, and overall musculoskeletal health.',
    overview:
      'Bone EFC™ Tablet is formulated to support bone strength and overall musculoskeletal health through a balanced combination of Calcium Orotate, Magnesium Orotate, and Vitamin D3.',
    composition: ['Calcium Orotate', 'Magnesium Orotate', 'Vitamin D3'],
    benefits: [
      'Supports healthy bone density',
      'Promotes strong teeth',
      'Helps reduce calcium deficiency',
      'Supports overall musculoskeletal health',
    ],
    suitableFor: [
      'Osteoporosis',
      'Osteopenia',
      'Post-menopausal women',
      'Elderly individuals',
      'Increased calcium requirements',
    ],
    manufacturing: MANUFACTURING_STATEMENT,
    qualityStandards: MANUFACTURING_STATEMENT,
  },
  {
    slug: 'nerve-efc-tablet',
    name: 'Nerve EFC™ Tablet',
    category: 'Neurology',
    categoryBadge: 'Neurology',
    icon: 'tablets',
    cardHighlights: ['Alpha Lipoic Acid', 'Methylcobalamin', 'Benfotiamine', 'Neurotropic Support'],
    description:
      'Advanced neurotropic formulation with Alpha Lipoic Acid, Methylcobalamin, Benfotiamine, and supporting nutrients for healthy nerve function.',
    overview:
      'Nerve EFC™ Tablet is an advanced neurotropic formulation designed to support healthy nerve function and nutritional balance.',
    composition: [
      'Alpha Lipoic Acid',
      'Methylcobalamin',
      'Benfotiamine',
      'Folic Acid',
      'Chromium',
      'Inositol',
      'Pyridoxine',
    ],
    benefits: [
      'Supports nerve regeneration',
      'Promotes healthy nerve function',
      'Helps reduce neuropathic discomfort',
      'Nutritional support for diabetic neuropathy and vitamin deficiencies',
    ],
    manufacturing: MANUFACTURING_STATEMENT,
    qualityStandards: MANUFACTURING_STATEMENT,
  },
  {
    slug: 'itracient-100-capsule',
    name: 'Itracient™ 100 Capsule',
    category: 'Antifungal',
    categoryBadge: 'Antifungal',
    icon: 'tablets',
    cardHighlights: ['Itraconazole 100 mg', 'Broad Spectrum', 'Oral Capsule'],
    description:
      'Itraconazole 100 mg broad-spectrum triazole antifungal capsule for effective management of fungal infections.',
    overview:
      'Itracient™ 100 Capsule is a broad-spectrum triazole antifungal medicine formulated for effective management of fungal infections.',
    composition: ['Itraconazole 100 mg'],
    benefits: [
      'Broad-spectrum triazole antifungal activity',
      'Formulated for effective management of fungal infections',
    ],
    indications: [
      'Skin infections',
      'Nail infections',
      'Internal fungal infections',
      'Dermatophytosis',
      'Candidiasis',
      'Other susceptible fungal infections',
    ],
    manufacturing: MANUFACTURING_STATEMENT,
    qualityStandards: MANUFACTURING_STATEMENT,
  },
  {
    slug: 'itracient-200-capsule',
    name: 'Itracient™ 200 Capsule',
    category: 'Antifungal',
    categoryBadge: 'Antifungal',
    icon: 'tablets',
    cardHighlights: ['Itraconazole 200 mg', 'Broad Spectrum', 'Oral Capsule'],
    description:
      'Itraconazole 200 mg broad-spectrum antifungal capsule formulated for moderate to severe fungal infections.',
    overview:
      'Itracient™ 200 Capsule is a broad-spectrum antifungal medicine formulated for moderate to severe fungal infections.',
    composition: ['Itraconazole 200 mg'],
    benefits: [
      'Reliable clinical efficacy',
      'Convenient dosing',
      'Broad-spectrum antifungal activity',
    ],
    manufacturing: MANUFACTURING_STATEMENT,
    qualityStandards: MANUFACTURING_STATEMENT,
  },
  {
    slug: 'lulicient-cream',
    name: 'Lulicient™ Cream',
    category: 'Dermatology',
    categoryBadge: 'Dermatology',
    icon: 'flask',
    cardHighlights: ['Luliconazole 1%', 'Topical Cream', 'Superficial Infections'],
    description:
      'Luliconazole 1% topical antifungal cream for common superficial fungal infections including ringworm and athlete\'s foot.',
    overview:
      'Lulicient™ Cream is a topical antifungal cream designed to help manage common superficial fungal infections.',
    composition: ['Luliconazole 1%'],
    benefits: [
      'Helps relieve itching',
      'Reduces redness',
      'Helps relieve irritation',
      'Eliminates fungal organisms',
    ],
    suitableFor: [
      'Ringworm',
      'Athlete\'s Foot',
      'Jock Itch',
      'Other superficial fungal infections',
    ],
    manufacturing: MANUFACTURING_STATEMENT,
    qualityStandards: MANUFACTURING_STATEMENT,
  },
  {
    slug: 'terbicient-250-tablet',
    name: 'Terbicient™ 250 Tablet',
    category: 'Antifungal',
    categoryBadge: 'Antifungal',
    icon: 'pill',
    cardHighlights: ['Terbinafine 250 mg', 'Oral Tablet', 'Broad Antifungal'],
    description:
      'Terbinafine 250 mg oral antifungal tablet for fungal infections affecting skin, hair, and nails.',
    overview:
      'Terbicient™ 250 Tablet is an oral antifungal medicine formulated for fungal infections affecting skin, hair, and nails.',
    composition: ['Terbinafine 250 mg'],
    benefits: [
      'Excellent cure rates',
      'Favorable safety profile',
      'Broad antifungal support',
    ],
    manufacturing: MANUFACTURING_STATEMENT,
    qualityStandards: MANUFACTURING_STATEMENT,
  },
  {
    slug: 'levocient-5-tablet',
    name: 'Levocient™ 5 Tablet',
    category: 'Allergy Care',
    categoryBadge: 'Allergy Care',
    icon: 'pill',
    cardHighlights: ['Levocetirizine 5 mg', 'Long Lasting', 'Minimal Drowsiness'],
    description:
      'Levocetirizine 5 mg second-generation antihistamine for allergic rhinitis, urticaria, and related allergic conditions.',
    overview:
      'Levocient™ 5 Tablet is a second-generation antihistamine formulated for allergic conditions.',
    composition: ['Levocetirizine 5 mg'],
    benefits: [
      'Long-lasting relief',
      'Helps reduce sneezing',
      'Helps relieve runny nose',
      'Helps relieve watery eyes',
      'Helps reduce itching',
      'Minimal drowsiness',
    ],
    indications: [
      'Allergic rhinitis',
      'Urticaria',
      'Other allergic conditions',
    ],
    manufacturing: MANUFACTURING_STATEMENT,
    qualityStandards: MANUFACTURING_STATEMENT,
  },
];

export const productCategories = [
  'All',
  ...Array.from(new Set(products.map((p) => p.category))),
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(slug: string, limit = 3): Product[] {
  const current = getProductBySlug(slug);
  if (!current) return products.slice(0, limit);
  return products.filter((p) => p.slug !== slug && p.category === current.category).slice(0, limit);
}
