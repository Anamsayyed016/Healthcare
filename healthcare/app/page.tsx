import type { Metadata } from 'next';
import HomePage from './home-page';

export const metadata: Metadata = {
  title: 'PharmEFC Healthcare Private Limited | Pharmaceutical & Healthcare Excellence',
  description:
    'PharmEFC Healthcare Private Limited — premium pharmaceutical products, healthcare consultancy, and hospital services in Vadodara, Gujarat.',
};

export default function Page() {
  return <HomePage />;
}
