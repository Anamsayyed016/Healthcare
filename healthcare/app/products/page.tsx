import type { Metadata } from 'next';
import SiteLayout from '@/components/site-layout';
import PageHero from '@/components/page-hero';
import ProductsCatalogue from '@/components/products-catalogue';
import { COMPANY_NAME } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Pharmaceutical Products | PharmEFC Healthcare',
  description:
    'Browse PharmEFC\'s pharmaceutical product portfolio — WHO-GMP manufactured tablets, capsules, and dermatological formulations.',
};

export default function ProductsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow={COMPANY_NAME}
        title={
          <>
            Pharmaceutical <span className="text-[#4F9DF8]">Products</span>
          </>
        }
        description="A comprehensive catalogue of pharmaceutical formulations manufactured through reputed WHO-GMP partners under stringent quality standards."
      />
      <ProductsCatalogue />
    </SiteLayout>
  );
}
