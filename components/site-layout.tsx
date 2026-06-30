import Header from '@/components/header';
import Footer from '@/components/footer';
import ScrollToTop from '@/components/scroll-to-top';
import WhatsAppButton from '@/components/whatsapp-button';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full bg-white text-foreground min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  );
}
