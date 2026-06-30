import type { Product } from '@/lib/data/products';
import { productIconMap } from '@/lib/icons';

type ProductCardVisualProps = {
  product: Product;
  variant: 'catalogue' | 'compact';
};

export default function ProductCardVisual({ product, variant }: ProductCardVisualProps) {
  const Icon = productIconMap[product.icon];

  if (product.image) {
    const containerClass =
      variant === 'catalogue'
        ? 'w-24 h-32 rounded-xl bg-[#F8FBFF] border border-[#E2E8F0] flex items-center justify-center shrink-0 overflow-hidden p-2'
        : 'w-24 h-28 rounded-xl bg-[#F8FBFF] border border-[#E2E8F0] flex items-center justify-center shrink-0 overflow-hidden p-2';

    return (
      <div className={containerClass}>
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
          className="max-h-full max-w-full object-contain"
        />
      </div>
    );
  }

  if (variant === 'catalogue') {
    return (
      <div className="w-12 h-12 rounded-xl bg-[#F8FBFF] border border-[#E2E8F0] flex items-center justify-center shrink-0">
        <Icon className="text-[#3B82F6]" size={22} strokeWidth={1.75} />
      </div>
    );
  }

  return (
    <div className="w-11 h-11 rounded-full bg-[#F8FBFF] border border-[#E2E8F0] flex items-center justify-center shrink-0">
      <Icon className="text-[#1E6FD9]" size={20} strokeWidth={1.75} />
    </div>
  );
}
