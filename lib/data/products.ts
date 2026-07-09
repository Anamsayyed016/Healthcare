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
  gallery?: string[];
  brochure?: string;
  pdf?: string;
  description: string;
  overview: string;
  composition: string[];
  benefits: string[];
  cardHighlights?: string[];
  suitableFor?: string[];
  indications?: string[];
  packSize?: string;
  relatedProducts?: string[];
  manufacturing: string;
  qualityStandards: string;
};

export const DEFAULT_QUALITY_BADGES = [
  'WHO-GMP Manufactured',
  'Quality Assured',
  'Trusted Formulation',
];

export function getProductImage(product: Product): string | undefined {
  return product.image ?? product.imageUrl ?? product.thumbnail ?? product.gallery?.[0];
}

export function getProductGallery(product: Product): string[] {
  if (product.gallery?.length) return product.gallery;
  const main = getProductImage(product);
  return main ? [main] : [];
}

export function getProductBrochure(product: Product): string | undefined {
  return product.brochure ?? product.pdf;
}

export function getCategoryBadge(product: Product): string {
  return product.categoryBadge ?? product.category;
}

export function getCardHighlights(product: Product): string[] {
  if (product.cardHighlights?.length) return product.cardHighlights;
  return product.composition.slice(0, 3);
}

const BONE_EFC_PRIMARY_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1783500104/4_iqfzpd.png';
const BONE_EFC_PACKAGING_VARIANT_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1783500103/5_fnp2fn.png';
const BONE_EFC_GALLERY_VARIANT_2_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1783500106/1_oz3p2z.png';
const BONE_EFC_GALLERY_VARIANT_3_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1783581648/hide1_qkzss8.png';
const ITRACIENT_100_PRIMARY_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1783500104/6_s6bqqi.png';
const ITRACIENT_100_GALLERY_VARIANT_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1783500111/7_fbervx.png';
const ITRACIENT_100_GALLERY_VARIANT_2_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1783500114/12_gayhtj.png';
const ITRACIENT_100_GALLERY_VARIANT_3_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1783582673/hide2_daftxb.png';
const ITRACIENT_200_PRIMARY_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1783500111/10_nwhhbq.png';
const ITRACIENT_200_GALLERY_VARIANT_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1783500116/11_dqwjs9.png';
const ITRACIENT_200_GALLERY_VARIANT_2_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1783583942/hide3_indvgt.png';
const ITRACIENT_200_GALLERY_VARIANT_3_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1783586366/hide4_ptsnsi.png';
const LEVOCIENT_5_PRIMARY_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1783500119/16_uxg8np.png';
const LEVOCIENT_5_GALLERY_VARIANT_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1783500118/17_o6b7pb.png';
const LEVOCIENT_5_GALLERY_VARIANT_2_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1783500120/15_bozvam.png';
const LEVOCIENT_5_GALLERY_VARIANT_3_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1783587457/hide5_m9g667.png';
const LEVOCIENT_5_GALLERY_VARIANT_4_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1783588171/hide6_jvxwep.png';
const LULICIENT_CREAM_PRIMARY_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1783500126/21_h7sps4.png';
const LULICIENT_CREAM_GALLERY_VARIANT_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1783500142/22_ky3a7t.png';
const NERVE_EFC_PRIMARY_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1783500133/25_bbudb8.png';
const NERVE_EFC_GALLERY_VARIANT_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1783500134/24_u4cblr.png';
const NERVE_EFC_GALLERY_VARIANT_2_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1783500138/26_p5imaq.png';
const NERVE_EFC_GALLERY_VARIANT_3_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1783500139/28_vpgom2.png';
const NERVE_EFC_GALLERY_VARIANT_4_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1783500145/30_xvpvta.png';
const NERVE_EFC_GALLERY_VARIANT_5_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1783500149/29_kldjbl.png';
const TERBICIENT_250_PRIMARY_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1783500146/32_fohwww.png';
const TERBICIENT_250_GALLERY_VARIANT_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1783500148/33_kxk1yt.png';

/** Delivery URL: trim near-white canvas so packages fill the preview evenly. */
export function optimizeProductImageUrl(url: string, width = 640): string {
  if (!url.includes('res.cloudinary.com') || !url.includes('/upload/')) {
    return url;
  }

  // e_trim:10:white removes excess white margins without cropping packaging artwork
  const transform = `e_trim:10:white/f_auto,q_auto,w_${width}`;
  return url.replace('/upload/', `/upload/${transform}/`);
}

export function resolveProductImageSrc(url: string, width = 640): string {
  return optimizeProductImageUrl(url, width);
}

export const MANUFACTURING_STATEMENT =
  'All PharmEFC pharmaceutical products are manufactured through reputed WHO-GMP manufacturing partners under stringent quality standards, ensuring quality, safety, and consistency.';

export const PRODUCT_DESCRIPTION =
  'Manufactured through reputed WHO-GMP manufacturing partners under stringent quality standards.';

export const WHO_GMP_MESSAGE = MANUFACTURING_STATEMENT;

export const products: Product[] = [
  {
    slug: 'bone-efc-tablet',
    name: 'Bone EFC™ Tablets',
    category: 'Bone Health Supplement',
    categoryBadge: 'Bone Health',
    icon: 'pill',
    image: BONE_EFC_PRIMARY_IMAGE,
    gallery: [
      BONE_EFC_PRIMARY_IMAGE,
      BONE_EFC_PACKAGING_VARIANT_IMAGE,
      BONE_EFC_GALLERY_VARIANT_2_IMAGE,
      BONE_EFC_GALLERY_VARIANT_3_IMAGE,
    ],
    cardHighlights: ['Calcium Orotate', 'Magnesium Orotate', 'Vitamin D3'],
    description:
      'Formulated with Calcium Orotate, Magnesium Orotate, and Vitamin D3 to support bone strength, healthy teeth, and overall musculoskeletal health.',
    overview:
      'Bone EFC™ Tablets are formulated to support bone strength and overall musculoskeletal health through a balanced combination of Calcium Orotate, Magnesium Orotate, and Vitamin D3.',
    composition: ['Calcium Orotate', 'Magnesium Orotate', 'Vitamin D3'],
    packSize: '10 × 1 × 10 Tablets',
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
    image: NERVE_EFC_PRIMARY_IMAGE,
    gallery: [
      NERVE_EFC_PRIMARY_IMAGE,
      NERVE_EFC_GALLERY_VARIANT_IMAGE,
      NERVE_EFC_GALLERY_VARIANT_2_IMAGE,
      NERVE_EFC_GALLERY_VARIANT_3_IMAGE,
      NERVE_EFC_GALLERY_VARIANT_4_IMAGE,
      NERVE_EFC_GALLERY_VARIANT_5_IMAGE,
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
    image: ITRACIENT_100_PRIMARY_IMAGE,
    gallery: [
      ITRACIENT_100_PRIMARY_IMAGE,
      ITRACIENT_100_GALLERY_VARIANT_IMAGE,
      ITRACIENT_100_GALLERY_VARIANT_2_IMAGE,
      ITRACIENT_100_GALLERY_VARIANT_3_IMAGE,
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
    image: ITRACIENT_200_PRIMARY_IMAGE,
    gallery: [
      ITRACIENT_200_PRIMARY_IMAGE,
      ITRACIENT_200_GALLERY_VARIANT_IMAGE,
      ITRACIENT_200_GALLERY_VARIANT_2_IMAGE,
      ITRACIENT_200_GALLERY_VARIANT_3_IMAGE,
    ],
    manufacturing: MANUFACTURING_STATEMENT,
    qualityStandards: MANUFACTURING_STATEMENT,
  },
  {
    slug: 'lulicient-cream',    name: 'Lulicient™ Cream',
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
    image: LULICIENT_CREAM_PRIMARY_IMAGE,
    gallery: [LULICIENT_CREAM_PRIMARY_IMAGE, LULICIENT_CREAM_GALLERY_VARIANT_IMAGE],
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
    image: TERBICIENT_250_PRIMARY_IMAGE,
    gallery: [TERBICIENT_250_PRIMARY_IMAGE, TERBICIENT_250_GALLERY_VARIANT_IMAGE],
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
    image: LEVOCIENT_5_PRIMARY_IMAGE,
    gallery: [
      LEVOCIENT_5_PRIMARY_IMAGE,
      LEVOCIENT_5_GALLERY_VARIANT_IMAGE,
      LEVOCIENT_5_GALLERY_VARIANT_2_IMAGE,
      LEVOCIENT_5_GALLERY_VARIANT_3_IMAGE,
      LEVOCIENT_5_GALLERY_VARIANT_4_IMAGE,
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

export function getRelatedProducts(slug: string, limit = 4): Product[] {
  const current = getProductBySlug(slug);
  if (!current) return products.slice(0, limit);

  if (current.relatedProducts?.length) {
    const explicit = current.relatedProducts
      .map((relatedSlug) => getProductBySlug(relatedSlug))
      .filter((product): product is Product => !!product);
    if (explicit.length > 0) return explicit.slice(0, limit);
  }

  const sameCategory = products.filter(
    (product) => product.slug !== slug && product.category === current.category,
  );
  if (sameCategory.length >= limit) return sameCategory.slice(0, limit);

  const others = products.filter(
    (product) => product.slug !== slug && product.category !== current.category,
  );
  return [...sameCategory, ...others].slice(0, limit);
}
