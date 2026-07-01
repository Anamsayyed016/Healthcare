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
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1782805999/Bone_efc_tab_box_ar1zfx.jpg';
const BONE_EFC_3D_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1782805999/Bone_efc_3d_1_sfvvmp.jpg';
const BONE_EFC_TAB_FRONT_IMAGE = '/products/bone-efc/tab-front.jpg';
const BONE_EFC_TAB_FRONT_BOX_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1782806006/Bone_efc_tab_front_g78qoh.jpg';
const BONE_EFC_BACK_BOX_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1782805998/Bone_efc_Tab_back_enopav.jpg';
const BONE_EFC_STRIP_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1782805999/Bone_efc_strip_ahvvxt.jpg';
const NERVE_EFC_TABLETS_3D_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1782806023/Nerve_EFC_Tablets_3d_n2bzpe.jpg';
const NERVE_EFC_TABLETS_STRIP_3D_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1782806026/Nerve_EFC_Tablets_strip_3d_cwmkqc.jpg';
const NERVE_EFC_TABLETS_BOX_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1782806026/Nerve_EFC_Tablets_box_lm2hxp.jpg';
const NERVE_EFC_TABLETS_STRIP_BACK_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1782806031/Nerve_EFC_Tablets_strip_back_sq8m1t.jpg';
const NERVE_EFC_TABLETS_STRIP_FRONT_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1782806031/Nerve_EFC_Tablets_strip_front_uvzegr.jpg';
const NERVE_EFC_TABLETS_MRP_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1782806033/Nerve_EFC_Tablets_mrp_mtpn9l.jpg';
const NERVE_EFC_TABLETS_STRIP_COMPOSITION_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1782806034/Nerve_EFC_Tablets_strip_e0s5vl.jpg';
const NERVE_EFC_TABLETS_DETAILS_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1782806036/Nerve_EFC_Tablets_details_rv1wft.jpg';
const ITRACIENT_100_3D_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1782806005/Itracient_100_Cap_3d_rplato.jpg';
const ITRACIENT_100_FRONT_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1782806008/Itracient_100_Cap_front_pqwjnj.jpg';
const ITRACIENT_100_DETAILS_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1782806011/Itracient_100_Cap_details_riay76.jpg';
const ITRACIENT_100_STRIP_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1782806012/Itracient_100_cap_strip_o9kjhd.jpg';
const ITRACIENT_200_BOX_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1782806000/Itracient_200_Cap_box_isw1my.jpg';
const ITRACIENT_200_3D_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1782806007/ITRACIENT_200_CAP_3D_vxqdfj.jpg';
const ITRACIENT_200_STRIP_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1782806011/ITRACIENT_200_CAP_F_B_wwauvk.jpg';
const ITRACIENT_200_DETAILS_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1782806013/ITRACIENT_200_CAP_DETAILS_iy47ta.jpg';
const ITRACIENT_200_STRIP_FRONT_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1782806018/ITRACIENT_200_CAP_STRIP_kmcoco.jpg';
const LEVOCIENT_5_3D_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1782806012/Levocient_5_Tablets_3d_qbwzdf.jpg';
const LEVOCIENT_5_BOX_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1782806015/Levocient_5mg_Tablets_box_fug2v9.jpg';
const LEVOCIENT_5_MRP_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1782806017/Levocient_5mg_Tablets_mrp_tsxs9a.jpg';
const LEVOCIENT_5_STRIP_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1782806018/Levocient_5mg_Tablets_strip_hljpxg.jpg';
const LULICIENT_CREAM_DETAILS_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1782806022/Lulicient_Cream_details_igtubf.jpg';
const LULICIENT_CREAM_FRONT_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1782806023/Lulicient_Cream_front_azptuc.jpg';
const LULICIENT_CREAM_MFD_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1782806023/LULICIENT_MFD_r4wchy.jpg';
const LULICIENT_CREAM_TUBE_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1782806026/Lulicient_Cream_tube_dok5b6.jpg';
const TERBICIENT_250_TAB_3D_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1782806035/TERBICIENT_250_TAB_3D_uezxed.jpg';
const TERBICIENT_250_TAB_FRONT_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1782806043/TERBICIENT_250_TAB_FRONT_ijozqa.jpg';
const TERBICIENT_250_TAB_STRIP_1_IMAGE =
  'https://res.cloudinary.com/wslwkiwr/image/upload/v1782806043/TERBICIENT_250_TAB_STRIP_1_sh7jdl.jpg';

export function optimizeProductImageUrl(url: string): string {
  if (!url.includes('res.cloudinary.com')) return url;
  if (url.includes('/upload/')) {
    return url.replace('/upload/', '/upload/f_auto,q_auto/');
  }
  return url;
}

export function resolveProductImageSrc(url: string): string {
  return optimizeProductImageUrl(url);
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
    image: BONE_EFC_PRIMARY_IMAGE,
    gallery: [
      BONE_EFC_PRIMARY_IMAGE,
      BONE_EFC_3D_IMAGE,
      BONE_EFC_TAB_FRONT_IMAGE,
      BONE_EFC_BACK_BOX_IMAGE,
      BONE_EFC_STRIP_IMAGE,
      BONE_EFC_TAB_FRONT_BOX_IMAGE,
    ],
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
    gallery: [
      NERVE_EFC_TABLETS_3D_IMAGE,
      NERVE_EFC_TABLETS_STRIP_3D_IMAGE,
      NERVE_EFC_TABLETS_BOX_IMAGE,
      NERVE_EFC_TABLETS_STRIP_BACK_IMAGE,
      NERVE_EFC_TABLETS_STRIP_FRONT_IMAGE,
      NERVE_EFC_TABLETS_MRP_IMAGE,
      NERVE_EFC_TABLETS_STRIP_COMPOSITION_IMAGE,
      NERVE_EFC_TABLETS_DETAILS_IMAGE,
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
    gallery: [
      ITRACIENT_100_3D_IMAGE,
      ITRACIENT_100_FRONT_IMAGE,
      ITRACIENT_100_DETAILS_IMAGE,
      ITRACIENT_100_STRIP_IMAGE,
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
    gallery: [
      ITRACIENT_200_BOX_IMAGE,
      ITRACIENT_200_3D_IMAGE,
      ITRACIENT_200_STRIP_IMAGE,
      ITRACIENT_200_DETAILS_IMAGE,
      ITRACIENT_200_STRIP_FRONT_IMAGE,
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
    gallery: [
      LULICIENT_CREAM_DETAILS_IMAGE,
      LULICIENT_CREAM_FRONT_IMAGE,
      LULICIENT_CREAM_MFD_IMAGE,
      LULICIENT_CREAM_TUBE_IMAGE,
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
    gallery: [
      TERBICIENT_250_TAB_3D_IMAGE,
      TERBICIENT_250_TAB_FRONT_IMAGE,
      TERBICIENT_250_TAB_STRIP_1_IMAGE,
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
    gallery: [
      LEVOCIENT_5_3D_IMAGE,
      LEVOCIENT_5_BOX_IMAGE,
      LEVOCIENT_5_MRP_IMAGE,
      LEVOCIENT_5_STRIP_IMAGE,
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
