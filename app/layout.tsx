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
  title: 'Cantalya Nakliye & Lojistik | Türkiye Geneli Taşımacılık',
  description:
    'Türkiye genelinde profesyonel ve uygun fiyatlı parça eşya, paletli yük, parsiyel nakliye, ticari sevkiyat ve evden eve nakliyat. 81 ilde hizmet.',
  keywords: [
    'Türkiye geneli nakliye',
    'Türkiye geneli parça eşya taşıma',
    'parça yük taşıma',
    'küçük yük taşıma',
    'koli taşıma',
    'palet nakliye',
    'ambar nakliye',
    'nakliye firması',
    'nakliye fiyatı',
    'evden eve nakliyat',
    'şehirler arası evden eve nakliyat',
    'ofis taşıma',
    'Antalya evden eve nakliyat',
    'Antalya nakliye',
    'Antalya nakliye firması',
    'Antalya parça eşya taşıma',
    'Antalya paletli yük taşıma',
    'Antalya parsiyel nakliye',
    'Antalya ambar',
    'Antalya lojistik',
    'şehirler arası yük taşıma',
    'şehirler arası nakliye',
  ],
  openGraph: {
    title: 'Cantalya Nakliye & Lojistik | Türkiye Geneli Nakliye',
    description:
      'Türkiye genelinde profesyonel ve uygun fiyatlı yük taşıma ve evden eve nakliyat.',
    type: 'website',
    locale: 'tr_TR',
    url: siteUrl,
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 1600,
        height: 900,
        alt: 'Cantalya Nakliye & Lojistik — parça yük, paletli malzeme ve parsiyel taşıma',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cantalya Nakliye & Lojistik | Türkiye Geneli Nakliye',
    description:
      'Türkiye genelinde profesyonel ve uygun fiyatlı yük taşıma ve evden eve nakliyat.',
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18420736857"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            window.gtag = window.gtag || function(){window.dataLayer.push(arguments);};
            window.gtag('js', new Date());
            window.gtag('config', 'AW-18420736857');
          `}
        </Script>
        <GoogleAdsConversionTracker />
        {children}
      </body>
    </html>
  );
}
