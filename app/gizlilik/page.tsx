import type { Metadata } from 'next';
import { ArrowLeft, MessageCircle, Phone, ShieldCheck } from 'lucide-react';

import { buttonVariants } from '@/components/ui/button';
import { siteUrl, withBasePath } from '@/lib/site';
import { cn } from '@/lib/utils';

const phoneDisplay = '0541 541 32 89';
const phoneInternational = '905415413289';

export const metadata: Metadata = {
  title: 'Gizlilik Bilgisi | Cantalya Nakliye & Lojistik',
  description:
    'Cantalya Nakliye & Lojistik web sitesi, telefon ve WhatsApp iletişiminde paylaşılan bilgilerin kullanımı hakkında gizlilik bilgisi.',
  alternates: { canonical: `${siteUrl}/gizlilik` },
  openGraph: {
    title: 'Gizlilik Bilgisi | Cantalya Nakliye & Lojistik',
    description: 'İletişim bilgilerinin kullanımı ve saklanması hakkında açıklama.',
    type: 'website',
    locale: 'tr_TR',
    url: `${siteUrl}/gizlilik`,
    images: [],
  },
  twitter: {
    card: 'summary',
    title: 'Gizlilik Bilgisi | Cantalya Nakliye & Lojistik',
    description: 'İletişim bilgilerinin kullanımı ve saklanması hakkında açıklama.',
    images: [],
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-white/10 bg-[#071826] text-white">
        <div className="site-shell flex h-20 items-center justify-between gap-5">
          <a href={withBasePath('/')} className="flex items-center gap-3" aria-label="Cantalya ana sayfa">
            <span className="logo-mark" aria-hidden="true">C</span>
            <span>
              <span className="block text-[15px] font-bold tracking-[0.12em]">CANTALYA</span>
              <span className="block text-[10px] font-semibold tracking-[0.18em] text-orange-300">NAKLİYE&amp;LOJİSTİK</span>
            </span>
          </a>
          <a href={`tel:+${phoneInternational}`} className={cn(buttonVariants({ size: 'lg' }), 'h-11 rounded-xl bg-white px-4 font-semibold text-slate-950 hover:bg-orange-50')}>
            <Phone className="size-4" aria-hidden="true" />
            <span className="hidden sm:inline">{phoneDisplay}</span>
            <span className="sm:hidden">Ara</span>
          </a>
        </div>
      </header>

      <section className="hero-section text-white">
        <div className="site-shell py-16 sm:py-20">
          <a href={withBasePath('/')} className="inline-flex items-center gap-2 text-sm font-semibold text-orange-300 hover:text-orange-200">
            <ArrowLeft className="size-4" aria-hidden="true" /> Ana sayfaya dön
          </a>
          <div className="mt-8 max-w-3xl">
            <span className="service-icon"><ShieldCheck className="size-6" aria-hidden="true" /></span>
            <h1 className="mt-7 text-4xl font-bold tracking-[-0.04em] sm:text-6xl">Gizlilik bilgisi</h1>
            <p className="mt-5 text-lg leading-8 text-slate-300">Taşıma teklifi alırken paylaştığınız bilgileri yalnızca talebinizi değerlendirmek ve sizinle iletişime geçmek için kullanırız.</p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="site-shell grid max-w-4xl gap-5">
          {[
            ['Hangi bilgiler paylaşılır?', 'Web sitemiz doğrudan veri kaydetmez. WhatsApp veya telefon üzerinden kendi isteğinizle çıkış-varış noktası, yük türü, ölçü, fotoğraf ve iletişim bilgisi paylaşabilirsiniz.'],
            ['Bilgiler neden kullanılır?', 'Paylaştığınız bilgiler taşıma ihtiyacını değerlendirmek, fiyat ve araç planı oluşturmak ve talebinize dönüş yapmak amacıyla kullanılır.'],
            ['Üçüncü taraf hizmetler', 'WhatsApp üzerinden yaptığınız görüşmeler Meta’nın, telefon görüşmeleri ise kullandığınız operatörün şartlarına tabidir. Google ölçüm ve reklam araçları kullanıldığında bu sayfa güncellenir.'],
            ['İletişim', `Gizlilik konusunda bilgi almak için ${phoneDisplay} numarasından Cantalya Nakliye & Lojistik’e ulaşabilirsiniz.`],
          ].map(([title, copy]) => (
            <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_16px_36px_rgb(15_23_42/5%)] sm:p-8">
              <h2 className="text-xl font-semibold text-slate-950">{title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{copy}</p>
            </article>
          ))}

          <div className="contact-panel mt-5">
            <div>
              <p className="eyebrow text-orange-200">Sorunuz mu var?</p>
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] text-white">Bizimle doğrudan iletişime geçin.</h2>
            </div>
            <a href={`https://wa.me/${phoneInternational}?text=${encodeURIComponent('Merhaba, gizlilik bilgisi hakkında iletişime geçmek istiyorum.')}`} target="_blank" rel="noreferrer" className={cn(buttonVariants({ size: 'lg' }), 'h-13 rounded-xl bg-white px-6 text-base font-semibold text-slate-950 hover:bg-orange-50')}>
              <MessageCircle className="size-5" aria-hidden="true" /> WhatsApp’tan yazın
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
