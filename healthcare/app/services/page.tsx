import type { Metadata } from 'next';
import ServicesPageContent from './services-page';

export const metadata: Metadata = {
  title: 'Healthcare Services | PharmEFC Healthcare',
  description:
    'Healthcare consultancy, hospital planning, NABH accreditation, telemedicine, and operational excellence services by PharmEFC.',
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
