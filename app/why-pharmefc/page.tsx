import type { Metadata } from 'next';
import WhyPharmefcPageContent from './why-pharmefc-page';

export const metadata: Metadata = {
  title: 'Why PharmEFC | PharmEFC Healthcare Private Limited',
  description:
    'Why choose PharmEFC — quality-assured products, WHO-GMP manufacturing, experienced leadership, ethical practices, and end-to-end healthcare solutions.',
};

export default function WhyPharmefcPage() {
  return <WhyPharmefcPageContent />;
}
