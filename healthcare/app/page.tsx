import type { Metadata } from 'next';
import HomePage from './home-page';

export const metadata: Metadata = {
  title: 'PharmEFC Healthcare Private Limited | Pharmaceutical & Healthcare Excellence',
  description:
    'PharmEFC Healthcare Private Limited — quality medicines, healthcare consultancy, and professional services. WHO-GMP pharmaceutical products from Vadodara, Gujarat.',
};

export default function Page() {
  return <HomePage />;
}
