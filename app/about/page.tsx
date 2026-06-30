import type { Metadata } from 'next';
import AboutPageContent from './about-page';

export const metadata: Metadata = {
  title: 'About Us | PharmEFC Healthcare Private Limited',
  description:
    'Learn about PharmEFC Healthcare Private Limited — a progressive healthcare and pharmaceutical company committed to quality medicines and professional healthcare services.',
};

export default function Page() {
  return <AboutPageContent />;
}
