import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script';
import { GoogleAdsConversionTracker } from '@/components/google-ads-conversion-tracker';
import { siteUrl } from '@/lib/site';
import './globals.css';

export const dynamic = 'force-static';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Antalya Evden Eve Nakliyat | Cantalya Nakliye & Lojistik',
  description:
    'Antalya şehir içi evden eve nakliyat, asansörlü taşıma ve parça eşya taşıma. Ücretsiz keşif ve hızlı teklif: Konyaaltı, Muratpaşa, Kepez, Döşemealtı.',
  openGraph: {
    title: 'Antalya Evden Eve Nakliyat | Cantalya Nakliye & Lojistik',
    description:
      'Eviniz veya birkaç parça eşyanız için Antalya şehir içi taşıma. Ücretsiz keşif, ambalajlama ve ihtiyacınıza uygun fiyat teklifi.',
    type: 'website',
    locale: 'tr_TR',
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1600,
        height: 900,
        alt: 'Cantalya Nakliye & Lojistik',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Antalya Evden Eve Nakliyat | Cantalya Nakliye & Lojistik',
    description:
      'Antalya şehir içi ev taşıma ve küçük nakliye. Ücretsiz keşif, asansörlü taşıma ve hızlı teklif.',
    images: [`${siteUrl}/og.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {process.env.NODE_ENV === 'production' && <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18420736857"
          strategy="afterInteractive"
        />}
        {process.env.NODE_ENV === 'production' && <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            window.gtag = window.gtag || function(){window.dataLayer.push(arguments);};
            window.gtag('js', new Date());
            window.gtag('config', 'AW-18420736857');
          `}
        </Script>}
        <GoogleAdsConversionTracker />
        {children}
      </body>
    </html>
  );
}
