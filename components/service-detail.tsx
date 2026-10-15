import { ArrowLeft, ArrowRight, CheckCircle2, MapPin, MessageCircle, Phone, Route, Truck } from 'lucide-react';

import { buttonVariants } from '@/components/ui/button';
import type { ServicePage } from '@/lib/service-pages';
import { siteUrl } from '@/lib/service-pages';
import { withBasePath } from '@/lib/site';
import { cn } from '@/lib/utils';

const phoneDisplay = '0541 541 32 89';
const phoneInternational = '905415413289';

export function ServiceDetail({ service }: { service: ServicePage }) {
  const pageUrl = `${siteUrl}/${service.slug}`;
  const offersIntercity = service.slug === 'evden-eve-nakliyat' || !service.localDistricts;
  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.metaTitle.split('|')[0].trim(),
      description: service.description,
      areaServed: offersIntercity
        ? { '@type': 'Country', name: 'Türkiye' }
        : [
            { '@type': 'AdministrativeArea', name: 'Antalya' },
            ...service.localDistricts!.map((district) => ({ '@type': 'AdministrativeArea', name: `${district}, Antalya` })),
          ],
      provider: {
        '@type': 'LocalBusiness',
        name: 'Cantalya Nakliye & Lojistik',
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

  const whatsAppMessage = service.whatsAppMessage ?? `Merhaba Cantalya Nakliye & Lojistik, ${service.metaTitle.split('|')[0].trim().toLocaleLowerCase('tr-TR')} için fiyat almak istiyorum.`;
  const whatsAppUrl = `https://wa.me/${phoneInternational}?text=${encodeURIComponent(whatsAppMessage)}`;

  return (
    <main className="min-h-screen overflow-x-clip bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071826]/95 text-white backdrop-blur-xl">
        <div className="site-shell flex h-20 items-center justify-between gap-5">
          <a href={withBasePath('/')} className="flex items-center gap-3" aria-label="Cantalya Nakliye ve Lojistik ana sayfa">
            <span className="logo-mark" aria-hidden="true">C</span>
            <span>
              <span className="block text-[15px] font-bold tracking-[0.12em]">CANTALYA</span>
              <span className="block text-[10px] font-semibold tracking-[0.18em] text-orange-300">NAKLİYE&amp;LOJİSTİK</span>
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
              <a href={whatsAppUrl} target="_blank" rel="noreferrer" className={cn(buttonVariants({ size: 'lg' }), 'min-h-13 h-auto whitespace-normal rounded-xl bg-orange-500 px-6 py-3 text-base font-semibold text-white hover:bg-orange-400')}>
                <MessageCircle className="size-5 shrink-0" aria-hidden="true" /> {service.quoteLabel ?? 'Uygun fiyat teklifi alın'}
              </a>
              <a href={`tel:+${phoneInternational}`} className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'h-13 rounded-xl border-white/20 bg-white/5 px-6 text-base text-white hover:bg-white/10 hover:text-white')}>
                <Phone className="size-5" aria-hidden="true" /> Hemen arayın
              </a>
            </div>
            {service.localDistricts && (
              <a href={withBasePath(service.slug === 'antalya-parca-esya-tasima' ? '/?hizmet=parca#teklif' : '/#teklif')} className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-slate-300 underline decoration-white/30 underline-offset-4 hover:text-white">
                Taşıma bilgilerinizi teklif formuyla paylaşın <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
              </a>
            )}
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
          <div className="trust-item"><MapPin className="size-5 text-orange-600" aria-hidden="true" />{offersIntercity ? 'Şehir içi ve şehirler arası hizmet' : 'Antalya geneli hizmet'}</div>
          <div className="trust-item"><Route className="size-5 text-orange-600" aria-hidden="true" />{service.localDistricts ? 'İhtiyaca göre araç ve ekip' : 'Profesyonel rota planı'}</div>
          <div className="trust-item"><CheckCircle2 className="size-5 text-orange-600" aria-hidden="true" />İhtiyaca uygun fiyat</div>
        </div>
      </section>

      {service.details && (
        <section className="border-b border-slate-200 bg-white py-20 sm:py-24">
          <div className="site-shell">
            <div className="max-w-3xl">
              <p className="eyebrow">Hizmetin kapsamı</p>
              <h2 className="section-title">{service.details.heading}</h2>
              <p className="section-copy">{service.details.intro}</p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {service.details.items.map((item) => (
                <article key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
                  <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

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

      {service.localDistricts && (
        <section className="border-t border-slate-200 bg-orange-50/60 py-14 sm:py-20">
          <div className="site-shell grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div>
              <p className="eyebrow">Antalya hizmet bölgesi</p>
              <h2 className="section-title">{offersIntercity ? 'Şehir içi ve şehirler arası ev taşıma.' : 'Antalya genelinde, ilçeler arası taşıma.'}</h2>
              <p className="section-copy">Konyaaltı, Muratpaşa, Kepez, Döşemealtı, Aksu ve Serik dahil alım ve varış adreslerini birlikte değerlendiriyoruz. Hizmetimiz bu ilçelerle sınırlı değil. İki binanın katları, araç yanaşma alanı ve eşya miktarı teklifin temelini oluşturur.</p>
            </div>
            <ul className="grid grid-cols-2 gap-3" aria-label="Hizmet verilen Antalya ilçelerinden bazıları">
              {service.localDistricts.map((district) => (
                <li key={district} className="flex items-center gap-2 rounded-2xl border border-orange-200 bg-white px-3 py-5 text-sm font-semibold text-slate-900 sm:px-4 sm:text-base">
                  <MapPin className="size-4 shrink-0 text-orange-600" aria-hidden="true" />{district}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="border-y border-slate-200 bg-white py-20 sm:py-28">
        <div className="site-shell grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
          <div>
            <p className="eyebrow">Sık sorulanlar</p>
            <h2 className="section-title">Teklif almadan önce merak edilenler.</h2>
            <p className="section-copy">{service.quoteIntro ?? 'Fotoğraf, ölçü, yaklaşık ağırlık ve çıkış-varış bilgisini göndererek hızlıca değerlendirme alabilirsiniz.'}</p>
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

      {service.relatedServices && (
        <section className="border-b border-slate-200 bg-white py-12">
          <div className="site-shell">
            <h2 className="text-xl font-semibold text-slate-950">İhtiyacınıza uygun diğer taşıma hizmetleri</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {service.relatedServices.map((related) => (
                <a key={related.slug} href={withBasePath(`/${related.slug}`)} className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 px-5 py-4 text-sm font-semibold text-slate-700 transition hover:border-orange-300 hover:text-orange-700">
                  {related.label}<ArrowRight className="size-4 shrink-0" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 sm:py-28">
        <div className="site-shell">
          <div className="contact-panel">
            <div>
              <p className="eyebrow text-orange-200">Taşıma talebinizi değerlendirelim</p>
              <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-[-0.035em] text-white sm:text-5xl">{service.quoteTitle ?? 'Yükünüzü anlatın, uygun araç ve fiyat seçeneğini sunalım.'}</h2>
            </div>
            <a href={whatsAppUrl} target="_blank" rel="noreferrer" className={cn(buttonVariants({ size: 'lg' }), 'h-13 rounded-xl bg-white px-6 text-base font-semibold text-slate-950 hover:bg-orange-50')}>
              <MessageCircle className="size-5" aria-hidden="true" /> WhatsApp’tan teklif alın
            </a>
          </div>
        </div>
      </section>

      <footer className={cn('border-t border-slate-200 bg-white py-10', service.localDistricts && 'pb-28 sm:pb-10')}>
        <div className="site-shell flex flex-col justify-between gap-5 text-sm text-slate-500 sm:flex-row sm:items-center">
          <div><strong className="block text-base text-slate-900">Cantalya Nakliye &amp; Lojistik</strong><span>{offersIntercity ? 'Şehir içi ve şehirler arası nakliye ve taşımacılık' : 'Antalya genelinde ev ve parça eşya taşıma'}</span></div>
          <div className="flex flex-wrap gap-x-6 gap-y-2"><a className="hover:text-orange-600" href={`tel:+${phoneInternational}`}>{phoneDisplay}</a><a className="hover:text-orange-600" href={withBasePath('/#hizmetler')}>Tüm hizmetler</a><a className="hover:text-orange-600" href={withBasePath('/gizlilik')}>Gizlilik</a></div>
        </div>
      </footer>

      {service.localDistricts && (
        <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-3 border-t border-slate-200 bg-white/95 px-4 pt-3 pb-[max(.75rem,env(safe-area-inset-bottom))] shadow-[0_-6px_24px_rgb(0_0_0/8%)] backdrop-blur sm:hidden">
          <a href={`tel:+${phoneInternational}`} className={cn(buttonVariants({ size: 'lg' }), 'h-12 rounded-xl bg-slate-950 text-white hover:bg-slate-800')}>
            <Phone className="size-4" aria-hidden="true" /> Hemen ara
          </a>
          <a href={whatsAppUrl} target="_blank" rel="noreferrer" className={cn(buttonVariants({ size: 'lg' }), 'h-12 rounded-xl bg-orange-600 text-white hover:bg-orange-500')}>
            <MessageCircle className="size-4" aria-hidden="true" /> Teklif al
          </a>
        </div>
      )}
    </main>
  );
}
