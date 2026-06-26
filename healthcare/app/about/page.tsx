import type { Metadata } from 'next';
import AboutPageContent from './about-page';

export const metadata: Metadata = {
  title: 'About Us | PharmEFC Healthcare Private Limited',
  description:
    'Learn about PharmEFC Healthcare — our story, vision, mission, core values, leadership, and company philosophy.',
};

export default function Page() {
  return <AboutPageContent />;
}
