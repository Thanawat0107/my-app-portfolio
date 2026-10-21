import type { Metadata } from 'next';
import './globals.css';
import { fontVariables } from '@/config/fonts.config';
import { LanguageProvider } from '@/context/LanguageContext';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { seoConfig } from '@/config/seo.config';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: seoConfig.siteTitle,
  description: seoConfig.siteDescription,
  keywords: seoConfig.keywords,
  authors: [{ name: 'TB' }],
  creator: 'TB',
  openGraph: {
    title: seoConfig.siteTitle,
    description: seoConfig.siteDescription,
    type: 'website',
    siteName: 'TB Profile',
    images: [
      {
        url: '/icon.png',
        width: 128,
        height: 128,
        alt: 'TB Profile',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: seoConfig.siteTitle,
    description: seoConfig.siteDescription,
    images: ['/icon.png'],
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: '/icon.png',
  },
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
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/icon.png" />
      </head>
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
