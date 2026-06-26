export type ProductIcon = 'pill' | 'tablets' | 'flask';

export type Product = {
  slug: string;
  name: string;
  category: string;
  icon: ProductIcon;
  description: string;
  overview: string;
  manufacturing: string;
  qualityStandards: string;
};

export const PRODUCT_DESCRIPTION =
  'Manufactured under stringent WHO-GMP quality standards to ensure safety, consistency, and reliability.';

export const WHO_GMP_MESSAGE =
  'All products are manufactured through reputed WHO-GMP manufacturing partners under stringent quality standards.';

export const products: Product[] = [
  {
    slug: 'bone-efc-tablet',
    name: 'Bone EFC Tablet',
    category: 'Bone Health',
    icon: 'pill',
    description: PRODUCT_DESCRIPTION,
    overview:
      'Bone EFC Tablet is part of PharmEFC\'s pharmaceutical portfolio, developed with a focus on quality manufacturing and consistent formulation standards.',
    manufacturing:
      'Manufactured through reputed WHO-GMP certified manufacturing partners following validated production processes and documented quality controls.',
    qualityStandards:
      'Produced under stringent quality assurance protocols including batch documentation, stability monitoring, and compliance with applicable pharmaceutical regulations.',
  },
  {
    slug: 'nerve-efc-tablet',
    name: 'Nerve EFC Tablet',
    category: 'Neurology',
    icon: 'tablets',
    description: PRODUCT_DESCRIPTION,
    overview:
      'Nerve EFC Tablet represents PharmEFC\'s commitment to delivering reliable neurological care solutions through disciplined pharmaceutical manufacturing.',
    manufacturing:
      'Produced at WHO-GMP compliant facilities with established quality management systems and standardized operating procedures.',
    qualityStandards:
      'Subject to rigorous in-process and finished-product quality checks to ensure consistency, safety, and regulatory compliance.',
  },
  {
    slug: 'itracient-100-capsule',
    name: 'Itracient 100 Capsule',
    category: 'Antifungal',
    icon: 'tablets',
    description: PRODUCT_DESCRIPTION,
    overview:
      'Itracient 100 Capsule is a pharmaceutical formulation in PharmEFC\'s antifungal product range, manufactured to enterprise quality benchmarks.',
    manufacturing:
      'Manufactured through WHO-GMP partners utilizing controlled environments and validated capsule production processes.',
    qualityStandards:
      'Quality verified through documented testing, batch release procedures, and adherence to pharmaceutical good manufacturing practices.',
  },
  {
    slug: 'itracient-200-capsule',
    name: 'Itracient 200 Capsule',
    category: 'Antifungal',
    icon: 'tablets',
    description: PRODUCT_DESCRIPTION,
    overview:
      'Itracient 200 Capsule extends PharmEFC\'s antifungal portfolio with a formulation produced under the same rigorous quality framework.',
    manufacturing:
      'Manufactured at WHO-GMP certified facilities with full traceability from raw materials through finished product dispatch.',
    qualityStandards:
      'Maintained through systematic quality control, stability studies, and compliance with applicable pharmaceutical standards.',
  },
  {
    slug: 'lulicient-cream',
    name: 'Lulicient Cream',
    category: 'Dermatology',
    icon: 'flask',
    description: PRODUCT_DESCRIPTION,
    overview:
      'Lulicient Cream is a dermatological formulation in PharmEFC\'s product catalogue, developed with precision and quality at its foundation.',
    manufacturing:
      'Produced through WHO-GMP manufacturing partners using validated topical formulation and packaging processes.',
    qualityStandards:
      'Quality assured through microbiological controls, homogeneity testing, and comprehensive batch documentation.',
  },
  {
    slug: 'terbicient-250-tablet',
    name: 'Terbicient 250 Tablet',
    category: 'Antifungal',
    icon: 'pill',
    description: PRODUCT_DESCRIPTION,
    overview:
      'Terbicient 250 Tablet is a trusted antifungal offering within PharmEFC\'s pharmaceutical product line.',
    manufacturing:
      'Manufactured under WHO-GMP standards with established quality systems governing every stage of production.',
    qualityStandards:
      'Verified through analytical testing, quality audits, and adherence to pharmaceutical manufacturing best practices.',
  },
  {
    slug: 'levocient-5-tablet',
    name: 'Levocient 5 Tablet',
    category: 'Allergy Care',
    icon: 'pill',
    description: PRODUCT_DESCRIPTION,
    overview:
      'Levocient 5 Tablet is part of PharmEFC\'s allergy care portfolio, reflecting our dedication to quality pharmaceutical solutions.',
    manufacturing:
      'Produced at WHO-GMP compliant facilities with controlled manufacturing environments and validated processes.',
    qualityStandards:
      'Ensured through documented quality procedures, batch consistency checks, and regulatory compliance frameworks.',
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
