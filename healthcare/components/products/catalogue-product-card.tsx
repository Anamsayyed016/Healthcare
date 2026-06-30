'use client';

import type { Product } from '@/lib/data/products';
import PremiumProductCard from '@/components/products/premium-product-card';

type CatalogueProductCardProps = {
  product: Product;
  index?: number;
};

export default function CatalogueProductCard({ product, index = 0 }: CatalogueProductCardProps) {
  return <PremiumProductCard product={product} index={index} variant="catalogue" />;
}
