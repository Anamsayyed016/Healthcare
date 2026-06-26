import type { Metadata } from 'next';
import LeadershipPageContent from './leadership-page';

export const metadata: Metadata = {
  title: 'Leadership | PharmEFC Healthcare Private Limited',
  description:
    'Meet the PharmEFC leadership team and advisory board — experienced professionals in healthcare and pharmaceuticals.',
};

export default function Page() {
  return <LeadershipPageContent />;
}
