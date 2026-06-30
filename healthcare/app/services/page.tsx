import type { Metadata } from 'next';
import ServicesPageContent from './services-page';

export const metadata: Metadata = {
  title: 'Healthcare Services | PharmEFC Healthcare',
  description:
    'PharmEFC healthcare services — consultancy, medical tourism, hospital planning, NABH accreditation, quality management, audits, telemedicine, and training.',
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
