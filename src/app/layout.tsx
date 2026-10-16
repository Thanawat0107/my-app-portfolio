import type { Metadata } from 'next';
import './globals.css';
import { fontVariables } from '@/config/fonts.config';
import { LanguageProvider } from '@/context/LanguageContext';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { seoConfig } from '@/config/seo.config';

export const metadata: Metadata = {
  title: seoConfig.siteTitle,
  description: seoConfig.siteDescription,
  keywords: seoConfig.keywords,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="th"
      className={`${fontVariables} font-sans scroll-smooth`}
    >
      <body className="bg-slate-950 text-slate-100 antialiased font-sans selection:bg-emerald-500/30 selection:text-emerald-300">
        <LanguageProvider>
          <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
            <Navbar />
            <main className="flex-grow">
              <Container>{children}</Container>
            </main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
