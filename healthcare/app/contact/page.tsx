import type { Metadata } from 'next';
import ContactPage from './contact-page';

export const metadata: Metadata = {
  title: 'Contact Us | PharmEFC Healthcare Private Limited',
  description:
    'Contact PharmEFC Healthcare Private Limited, Vadodara. Phone +91 9243018530, email info@pharmefc.com, Plot No. 14, Makarpura, Tarsali Road.',
};

export default function Page() {
  return <ContactPage />;
}
