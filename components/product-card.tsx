'use client';

import type { Product } from '@/lib/data/products';
import PremiumProductCard from '@/components/products/premium-product-card';

type ProductCardProps = {
  product: Product;
  index?: number;
};

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return <PremiumProductCard product={product} index={index} variant="compact" />;
}
