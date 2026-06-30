import type { Metadata } from 'next';
import LeadershipPageContent from './leadership-page';

export const metadata: Metadata = {
  title: 'Leadership | PharmEFC Healthcare Private Limited',
  description:
    'Meet PharmEFC leadership — Dr. Kunal Basu, Rahul Yadav, Syed Asif Haider, and Kuber Singh Patel guiding pharmaceutical and healthcare direction.',
};

export default function Page() {
  return <LeadershipPageContent />;
}
