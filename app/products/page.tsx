import type { Metadata } from 'next';
import SiteLayout from '@/components/site-layout';
import ProductsBreadcrumb from '@/components/products/products-breadcrumb';
import ProductsHero from '@/components/products/products-hero';
import ProductsCatalogue from '@/components/products/products-catalogue';
import {
  getPublishedProductCategories,
  getPublishedProducts,
} from '@/lib/repositories/products';

export const metadata: Metadata = {
  title: 'Pharmaceutical Products | PharmEFC Healthcare',
  description:
    'PharmEFC pharmaceutical products — Bone EFC™, Nerve EFC™, Itracient™, Lulicient™, Terbicient™, and Levocient™ manufactured through reputed WHO-GMP partners.',
};

export const revalidate = 60;

export default async function ProductsPage() {
  const [products, categories] = await Promise.all([
    getPublishedProducts(),
    getPublishedProductCategories(),
  ]);

  return (
    <SiteLayout>
      <ProductsBreadcrumb />
      <ProductsHero />
      <ProductsCatalogue products={products} categories={categories} />
    </SiteLayout>
  );
}
