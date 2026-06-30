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
  'Manufactured through reputed WHO-GMP manufacturing partners under stringent quality standards.';

export const WHO_GMP_MESSAGE =
  'All pharmaceutical products are manufactured through reputed WHO-GMP manufacturing partners under stringent quality standards.';

export const products: Product[] = [
  {
    slug: 'bone-efc-tablet',
    name: 'Bone EFC™',
    category: 'Tablet',
    icon: 'pill',
    description: PRODUCT_DESCRIPTION,
    overview:
      'Bone EFC™ is part of PharmEFC\'s pharmaceutical portfolio, offered with a focus on consistent formulation quality and dependable manufacturing standards.',
    manufacturing:
      'Manufactured through reputed WHO-GMP manufacturing partners using validated production processes and documented quality controls.',
    qualityStandards:
      'Produced under stringent quality assurance protocols with batch documentation and compliance with applicable pharmaceutical regulations.',
  },
  {
    slug: 'nerve-efc-tablet',
    name: 'Nerve EFC™',
    category: 'Tablet',
    icon: 'tablets',
    description: PRODUCT_DESCRIPTION,
    overview:
      'Nerve EFC™ reflects PharmEFC\'s commitment to reliable pharmaceutical supply through disciplined manufacturing partnerships and quality oversight.',
    manufacturing:
      'Produced at WHO-GMP compliant facilities with established quality management systems and standardized operating procedures.',
    qualityStandards:
      'Subject to rigorous quality checks to ensure consistency, safety, and compliance with pharmaceutical good manufacturing practices.',
  },
  {
    slug: 'itracient-100-capsule',
    name: 'Itracient™ 100',
    category: 'Capsule',
    icon: 'tablets',
    description: PRODUCT_DESCRIPTION,
    overview:
      'Itracient™ 100 is a capsule formulation in PharmEFC\'s pharmaceutical range, supported by WHO-GMP manufacturing partnerships.',
    manufacturing:
      'Manufactured through WHO-GMP partners utilizing controlled environments and validated capsule production processes.',
    qualityStandards:
      'Quality verified through documented testing, batch release procedures, and adherence to pharmaceutical manufacturing standards.',
  },
  {
    slug: 'itracient-200-capsule',
    name: 'Itracient™ 200',
    category: 'Capsule',
    icon: 'tablets',
    description: PRODUCT_DESCRIPTION,
    overview:
      'Itracient™ 200 extends PharmEFC\'s capsule portfolio with the same commitment to manufacturing quality and product consistency.',
    manufacturing:
      'Manufactured at WHO-GMP certified facilities with traceability from raw materials through finished product dispatch.',
    qualityStandards:
      'Maintained through systematic quality control and compliance with applicable pharmaceutical standards.',
  },
  {
    slug: 'lulicient-cream',
    name: 'Lulicient™ Cream',
    category: 'Cream',
    icon: 'flask',
    description: PRODUCT_DESCRIPTION,
    overview:
      'Lulicient™ Cream is a topical formulation in PharmEFC\'s product catalogue, produced with precision and quality at its foundation.',
    manufacturing:
      'Produced through WHO-GMP manufacturing partners using validated topical formulation and packaging processes.',
    qualityStandards:
      'Quality assured through documented controls, batch consistency checks, and comprehensive manufacturing documentation.',
  },
  {
    slug: 'terbicient-250-tablet',
    name: 'Terbicient™ 250',
    category: 'Tablet',
    icon: 'pill',
    description: PRODUCT_DESCRIPTION,
    overview:
      'Terbicient™ 250 is a tablet formulation within PharmEFC\'s pharmaceutical product line, backed by trusted manufacturing partnerships.',
    manufacturing:
      'Manufactured under WHO-GMP standards with established quality systems governing every stage of production.',
    qualityStandards:
      'Verified through analytical testing and adherence to pharmaceutical manufacturing best practices.',
  },
  {
    slug: 'levocient-5-tablet',
    name: 'Levocient™ 5',
    category: 'Tablet',
    icon: 'pill',
    description: PRODUCT_DESCRIPTION,
    overview:
      'Levocient™ 5 is part of PharmEFC\'s tablet portfolio, reflecting our dedication to quality pharmaceutical products and dependable supply.',
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
