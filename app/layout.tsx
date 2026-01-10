import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { metadata as seoMetadata, generatePersonStructuredData } from '@/lib/seo';
import { GoogleAnalytics } from '@/lib/analytics';
import ThemeRegistry from '@/theme/ThemeRegistry';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = seoMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = generatePersonStructuredData();

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <GoogleAnalytics />
      </head>
      <body className={inter.className}>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
