import type { Metadata } from 'next';
import ContactPage from './contact-page';

export const metadata: Metadata = {
  title: 'Contact Us | PharmEFC Healthcare Private Limited',
  description:
    'Contact PharmEFC Healthcare Private Limited in Vadodara, Gujarat. Email info@pharmefc.com or visit our office at Plot No. 14, Makarpura, Tarsali Road.',
};

export default function Page() {
  return <ContactPage />;
}
