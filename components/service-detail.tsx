import { ArrowLeft, CheckCircle2, MapPin, MessageCircle, Phone, Route, Truck } from 'lucide-react';

import { buttonVariants } from '@/components/ui/button';
import type { ServicePage } from '@/lib/service-pages';
import { siteUrl } from '@/lib/service-pages';
import { withBasePath } from '@/lib/site';
import { cn } from '@/lib/utils';

const phoneDisplay = '0541 541 32 89';
const phoneInternational = '905415413289';

export function ServiceDetail({ service }: { service: ServicePage }) {
  const pageUrl = `${siteUrl}/${service.slug}`;
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.metaTitle.split('|')[0].trim(),
      description: service.description,
      areaServed: { '@type': 'Country', name: 'Türkiye' },
      provider: {
        '@type': 'LocalBusiness',
        name: 'Cantalya Lojistik',
        telephone: '+90 541 541 32 89',
        url: siteUrl,
      },
      url: pageUrl,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: service.metaTitle.split('|')[0].trim(), item: pageUrl },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: service.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    },
  ];

  const whatsAppMessage = `Merhaba Cantalya Lojistik, ${service.metaTitle.split('|')[0].trim().toLocaleLowerCase('tr-TR')} için fiyat almak istiyorum.`;

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071826]/95 text-white backdrop-blur-xl">
        <div className="site-shell flex h-20 items-center justify-between gap-5">
          <a href={withBasePath('/')} className="flex items-center gap-3" aria-label="Cantalya Lojistik ana sayfa">
            <span className="logo-mark" aria-hidden="true">C</span>
            <span>
              <span className="block text-[15px] font-bold tracking-[0.12em]">CANTALYA</span>
              <span className="block text-[10px] font-semibold tracking-[0.18em] text-orange-300">LOJİSTİK &amp; NAKLİYAT</span>
            </span>
          </a>
          <div className="flex items-center gap-3">
            <a href={withBasePath('/#hizmetler')} className="hidden text-sm font-medium text-slate-300 hover:text-white sm:inline-flex">Tüm hizmetler</a>
            <a href={`tel:+${phoneInternational}`} className={cn(buttonVariants({ size: 'lg' }), 'h-11 rounded-xl bg-white px-4 font-semibold text-slate-950 hover:bg-orange-50')}>
              <Phone className="size-4" aria-hidden="true" />
              <span className="hidden sm:inline">{phoneDisplay}</span>
              <span className="sm:hidden">Ara</span>
            </a>
          </div>
        </div>
      </header>

      <section className="hero-section">
        <div className="site-shell grid items-center gap-12 py-16 lg:grid-cols-[1.12fr_.88fr] lg:py-24">
          <div>
            <a href={withBasePath('/')} className="inline-flex items-center gap-2 text-sm font-semibold text-orange-300 hover:text-orange-200">
              <ArrowLeft className="size-4" aria-hidden="true" /> Ana sayfaya dön
            </a>
            <p className="eyebrow mt-8 text-orange-300">{service.eyebrow}</p>
            <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.08] tracking-[-0.045em] text-white sm:text-6xl">{service.title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{service.lead}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {service.highlights.map((item) => (
                <span key={item} className="hero-pill"><CheckCircle2 className="size-4 text-orange-400" aria-hidden="true" />{item}</span>
              ))}
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={`https://wa.me/${phoneInternational}?text=${encodeURIComponent(whatsAppMessage)}`} target="_blank" rel="noreferrer" className={cn(buttonVariants({ size: 'lg' }), 'h-13 rounded-xl bg-orange-500 px-6 text-base font-semibold text-white hover:bg-orange-400')}>
                <MessageCircle className="size-5" aria-hidden="true" /> Uygun fiyat teklifi alın
              </a>
              <a href={`tel:+${phoneInternational}`} className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'h-13 rounded-xl border-white/20 bg-white/5 px-6 text-base text-white hover:bg-white/10 hover:text-white')}>
                <Phone className="size-5" aria-hidden="true" /> Hemen arayın
              </a>
            </div>
          </div>
          <aside className="rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-7 text-white shadow-[0_28px_70px_rgb(0_0_0/28%)] sm:p-9">
            <span className="service-icon"><Truck className="size-6" aria-hidden="true" /></span>
            <h2 className="mt-7 text-2xl font-semibold">Bu hizmet kimler için uygun?</h2>
            <ul className="mt-6 grid gap-4">
              {service.idealFor.map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-300"><CheckCircle2 className="size-5 shrink-0 text-orange-400" aria-hidden="true" />{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="site-shell grid gap-6 py-6 text-sm font-medium text-slate-600 sm:grid-cols-3">
          <div className="trust-item"><MapPin className="size-5 text-orange-600" aria-hidden="true" />Türkiye geneli hizmet</div>
          <div className="trust-item"><Route className="size-5 text-orange-600" aria-hidden="true" />Profesyonel rota planı</div>
          <div className="trust-item"><CheckCircle2 className="size-5 text-orange-600" aria-hidden="true" />İhtiyaca uygun fiyat</div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="site-shell">
          <div className="max-w-3xl">
            <p className="eyebrow">Nasıl çalışıyoruz?</p>
            <h2 className="section-title">Üç adımda net ve profesyonel taşıma planı.</h2>
          </div>
          <ol className="mt-12 grid gap-5 lg:grid-cols-3">
            {service.steps.map((step, index) => (
              <li key={step.title} className="service-card">
                <span className="text-sm font-bold tracking-[0.12em] text-orange-600">0{index + 1}</span>
                <h3 className="mt-5 text-xl font-semibold text-slate-950">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-20 sm:py-28">
        <div className="site-shell grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
          <div>
            <p className="eyebrow">Sık sorulanlar</p>
            <h2 className="section-title">Teklif almadan önce merak edilenler.</h2>
            <p className="section-copy">Fotoğraf, ölçü, yaklaşık ağırlık ve çıkış-varış bilgisini göndererek hızlıca değerlendirme alabilirsiniz.</p>
          </div>
          <div className="grid gap-4">
            {service.faqs.map((faq) => (
              <article key={faq.question} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="font-semibold text-slate-950">{faq.question}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="site-shell">
          <div className="contact-panel">
            <div>
              <p className="eyebrow text-orange-200">Taşıma talebinizi değerlendirelim</p>
              <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-[-0.035em] text-white sm:text-5xl">Yükünüzü anlatın, uygun araç ve fiyat seçeneğini sunalım.</h2>
            </div>
            <a href={`https://wa.me/${phoneInternational}?text=${encodeURIComponent(whatsAppMessage)}`} target="_blank" rel="noreferrer" className={cn(buttonVariants({ size: 'lg' }), 'h-13 rounded-xl bg-white px-6 text-base font-semibold text-slate-950 hover:bg-orange-50')}>
              <MessageCircle className="size-5" aria-hidden="true" /> WhatsApp’tan teklif alın
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white py-10">
        <div className="site-shell flex flex-col justify-between gap-5 text-sm text-slate-500 sm:flex-row sm:items-center">
          <div><strong className="block text-base text-slate-900">Cantalya Lojistik</strong><span>Türkiye geneli nakliye ve taşımacılık</span></div>
          <div className="flex flex-wrap gap-x-6 gap-y-2"><a className="hover:text-orange-600" href={`tel:+${phoneInternational}`}>{phoneDisplay}</a><a className="hover:text-orange-600" href={withBasePath('/#hizmetler')}>Tüm hizmetler</a></div>
        </div>
      </footer>
    </main>
  );
}
