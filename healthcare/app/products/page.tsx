import type { Metadata } from 'next';
import SiteLayout from '@/components/site-layout';
import ProductsBreadcrumb from '@/components/products/products-breadcrumb';
import ProductsHero from '@/components/products/products-hero';
import ProductsCatalogue from '@/components/products/products-catalogue';

export const metadata: Metadata = {
  title: 'Pharmaceutical Products | PharmEFC Healthcare',
  description:
    'Browse PharmEFC\'s pharmaceutical product portfolio — WHO-GMP manufactured tablets, capsules, and dermatological formulations.',
};

export default function ProductsPage() {
  return (
    <SiteLayout>
      <ProductsBreadcrumb />
      <ProductsHero />
      <ProductsCatalogue />
    </SiteLayout>
  );
}
