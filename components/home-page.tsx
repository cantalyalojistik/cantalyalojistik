'use client';

import { FormEvent, useEffect, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  House,
  MapPin,
  MessageCircle,
  MoveVertical,
  PackageCheck,
  Phone,
  ShieldCheck,
  Sofa,
} from 'lucide-react';
import { Button, buttonVariants } from '@/components/ui/button';
import { reportContactConversion } from '@/components/google-ads-conversion-tracker';
import { MovingPhoto, type MovingPhotoKind } from '@/components/moving-photo';
import { Input } from '@/components/ui/input';
import { siteUrl, withBasePath } from '@/lib/site';
import { cn } from '@/lib/utils';

const phoneDisplay = '0541 541 32 89';
const phoneInternational = '905415413289';
type QuoteService = 'Evden eve nakliyat' | 'Şehir içi parça eşya taşıma';

const localServices = [
  {
    icon: House,
    photo: 'packing' as MovingPhotoKind,
    href: '/evden-eve-nakliyat',
    title: 'Evden eve nakliyat',
    description:
      'Ücretsiz keşif, ambalajlama, mobilya sökme-kurma ve profesyonel ekibimizle evinizi şehir içinde veya şehirler arasında taşıyalım.',
  },
  {
    icon: Sofa,
    photo: 'packing' as MovingPhotoKind,
    href: '/antalya-parca-esya-tasima',
    title: 'Şehir içi parça eşya taşıma',
    description:
      'Bir koltuk, buzdolabı veya birkaç parça eşya için de buradayız. Eşya miktarına ve mesafeye uygun küçük nakliye teklifi alın.',
  },
  {
    icon: MoveVertical,
    photo: 'lift' as MovingPhotoKind,
    href: '/asansorlu-evden-eve-nakliyat',
    title: 'Asansörlü ev taşıma',
    description:
      'Kat, bina cephesi ve araç yaklaşma alanını değerlendirelim; uygun yapılarda dış cephe asansörlü taşımayı planlayalım.',
  },
];

const otherServices = [
  ['Türkiye geneli parça eşya taşıma', '/parca-esya-tasima'],
  ['Paletli yük taşıma', '/paletli-yuk-tasima'],
  ['Parsiyel nakliye', '/parsiyel-nakliye'],
  ['Ambar nakliye', '/ambar-nakliye'],
  ['Şehirler arası nakliye', '/sehirler-arasi-nakliye'],
  ['Ticari yük taşıma', '/ticari-yuk-tasima'],
  ['Antalya nakliye hizmetleri', '/antalya-nakliye'],
];

const districts = [
  {
    id: 'konyaalti',
    name: 'Konyaaltı',
    description:
      'Apartman veya site taşınmalarında araç girişini, katları ve asansör kurulabilecek alanı keşifte birlikte değerlendiriyoruz.',
  },
  {
    id: 'muratpasa',
    name: 'Muratpaşa',
    description:
      'Evden eve taşımada ve tek parça teslimatlarda sokak erişimi, yükleme noktası ve bina girişine göre taşıma planı hazırlıyoruz.',
  },
  {
    id: 'kepez',
    name: 'Kepez',
    description:
      'Evinizin tamamı, yeni aldığınız mobilya veya birkaç beyaz eşya için eşya listesine uygun araç ve ekip planlıyoruz.',
  },
  {
    id: 'dosemealti',
    name: 'Döşemealtı',
    description:
      'Daire, müstakil ev ve site taşınmalarında iki adres arasındaki mesafeyi, araç yaklaşımını ve taşınacak eşya hacmini birlikte hesaplıyoruz.',
  },
  {
    id: 'aksu',
    name: 'Aksu',
    description:
      'Evden eve taşınma veya birkaç parça eşyanın teslimatı için alım ve varış adreslerini, katları ve gereken taşıma ekibini birlikte planlıyoruz.',
  },
  {
    id: 'serik',
    name: 'Serik',
    description:
      'Serik içindeki ve diğer ilçelerle arasındaki taşımalarınızda güzergâhı, eşya hacmini ve yükleme koşullarını değerlendirerek teklif hazırlıyoruz.',
  },
];

const faqs = [
  {
    question: 'Antalya evden eve nakliyat fiyatı nasıl belirlenir?',
    answer:
      'Oda ve eşya miktarı, iki konum arasındaki mesafe, katlar, asansör ihtiyacı, ambalajlama ve sökme-kurma kapsamı birlikte değerlendirilir. Fotoğraf veya ücretsiz yerinde keşif sonrasında hizmet kapsamı belirtilen teklif hazırlanır.',
  },
  {
    question: 'Sadece iki parça eşya, koltuk veya buzdolabı taşıyor musunuz?',
    answer:
      'Evet. Antalya şehir içinde bir koltuk, buzdolabı, çamaşır makinesi ya da birkaç parça ev eşyası için de taşıma hizmeti sunuyoruz. Eşya fotoğraflarını, çıkış-varış ilçelerini ve kat bilgilerini paylaşarak teklif alabilirsiniz.',
  },
  {
    question: 'Ücretsiz keşif için ne yapmalıyım?',
    answer:
      'Telefon veya WhatsApp üzerinden bize ulaşabilirsiniz. Fotoğraf ve görüntüyle ön değerlendirme yapabilir, ev taşımanız için uygun bir zamanda ücretsiz yerinde keşif planlayabiliriz.',
  },
  {
    question: 'Her binada asansörlü taşıma yapılabilir mi?',
    answer:
      'Dış cephe asansörü için bina cephesi, pencere veya balkon erişimi, kat ve araç kurulacak alanın uygun olması gerekir. Uygunluğu keşifte değerlendirir, mümkün değilse diğer taşıma seçeneklerini konuşuruz.',
  },
  {
    question: 'Ambalajlama ve mobilya sökme-kurma yapıyor musunuz?',
    answer:
      'Evet. Ambalajlama ve mobilya sökme-kurma hizmetleri sunuyoruz. Hangi eşyalar için bu işlemlerin gerektiğini teklif öncesinde belirleyip taşıma kapsamına yazıyoruz.',
  },
  {
    question: 'Sigortalı taşımanın kapsamı nedir?',
    answer:
      'Sigortalı taşıma hizmeti sunuyoruz. Teminat, limitler ve istisnalar ilgili poliçenin koşullarına bağlıdır; taşıma öncesinde teklif ve poliçe kapsamını birlikte netleştiriyoruz.',
  },
  {
    question: 'Hangi ilçelerde şehir içi taşıma yapıyorsunuz?',
    answer:
      'Konyaaltı, Muratpaşa, Kepez, Döşemealtı, Aksu ve Serik dahil Antalya genelinde evden eve ve parça eşya taşıma taleplerinizi değerlendiriyoruz. Hizmetimiz bu ilçelerle sınırlı değil; alım ve varış adreslerini, katları ve tarihi paylaşarak teklif alabilirsiniz.',
  },
  {
    question: 'Şehirler arası evden eve nakliyat yapıyor musunuz?',
    answer:
      'Evet. Antalya şehir içi taşımaların yanında Türkiye genelinde şehirler arası profesyonel evden eve nakliyat hizmeti de sunuyoruz. Çıkış ve varış illerini, eşya miktarını ve tarihi paylaşın; araç, ekip ve taşıma kapsamını birlikte planlayalım.',
  },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'MovingCompany',
  '@id': `${siteUrl}/#business`,
  name: 'Cantalya Nakliye & Lojistik',
  url: siteUrl,
  description:
    'Antalya şehir içi ve şehirler arası profesyonel evden eve nakliyat, asansörlü taşıma ve Antalya genelinde parça eşya taşıma.',
  telephone: '+90 541 541 32 89',
  areaServed: [
    { '@type': 'Country', name: 'Türkiye' },
    { '@type': 'AdministrativeArea', name: 'Antalya' },
    ...districts.map(({ name }) => ({
      '@type': 'AdministrativeArea',
      name: `${name}, Antalya`,
    })),
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Şehir içi ve şehirler arası taşıma hizmetleri',
    itemListElement: localServices.map(({ title, href }) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: title,
        url: `${siteUrl}${href}`,
      },
    })),
  },
};

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
};

function QuoteForm({
  service,
  onServiceChange,
}: {
  service: QuoteService;
  onServiceChange: (service: QuoteService) => void;
}) {
  const isSmallMove = service === 'Şehir içi parça eşya taşıma';

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const field = (name: string) => String(fields.get(name) ?? '').trim();
    const message = [
      'Merhaba Cantalya Nakliye & Lojistik, taşıma hizmetiniz için teklif almak istiyorum.',
      `Hizmet: ${service}`,
      `Çıkış ili / ilçesi / mahallesi: ${field('origin')}`,
      `Varış ili / ilçesi / mahallesi: ${field('destination')}`,
      `${isSmallMove ? 'Taşınacak eşyalar' : 'Oda / eşya bilgisi'}: ${field('items')}`,
      `Çıkış ve varış katları / asansör: ${field('access') || 'Görüşmede paylaşacağım'}`,
      `Tercih edilen tarih: ${field('date') || 'Birlikte planlayalım'}`,
      `Ek ihtiyaçlar: ${field('details') || 'Görüşmede netleştirelim'}`,
    ].join('\n');
    reportContactConversion('whatsapp');
    window.open(
      `https://wa.me/${phoneInternational}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer',
    );
  }

  return (
    <form
      id="teklif"
      onSubmit={handleSubmit}
      className="quote-card scroll-mt-28"
      aria-labelledby="quote-title"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow text-orange-300">
            Ücretsiz keşif • Hızlı teklif
          </p>
          <h2
            id="quote-title"
            className="mt-2 text-2xl font-semibold text-white"
          >
            Neyi, nereye taşıyalım?
          </h2>
        </div>
        <span className="rounded-2xl bg-orange-500/15 p-3 text-orange-300">
          <MessageCircle className="size-6" aria-hidden="true" />
        </span>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="field-label sm:col-span-2">
          Hizmet seçin
          <select
            name="service"
            value={service}
            onChange={(event) =>
              onServiceChange(event.target.value as QuoteService)
            }
            className="quote-select pr-9"
          >
            <option>Evden eve nakliyat</option>
            <option>Şehir içi parça eşya taşıma</option>
          </select>
        </label>
        <label className="field-label">
          Nereden? İl / ilçe / mahalle
          <Input
            name="origin"
            required
            maxLength={120}
            placeholder="Konyaaltı / Hurma"
            className="quote-input"
          />
        </label>
        <label className="field-label">
          Nereye? İl / ilçe / mahalle
          <Input
            name="destination"
            required
            maxLength={120}
            placeholder="Muratpaşa / Fener"
            className="quote-input"
          />
        </label>
        <label className="field-label sm:col-span-2">
          {isSmallMove
            ? 'Hangi eşyalar taşınacak?'
            : 'Oda sayısı / eşya miktarı'}
          <Input
            name="items"
            required
            maxLength={300}
            placeholder={
              isSmallMove
                ? 'Örn. 1 koltuk ve 1 buzdolabı'
                : 'Örn. 2+1 ev, tüm ev eşyası'
            }
            className="quote-input"
          />
        </label>
        <label className="field-label sm:col-span-2">
          Katlar ve asansör durumu{' '}
          <span className="sr-only">(isteğe bağlı)</span>
          <Input
            name="access"
            maxLength={200}
            placeholder="Örn. 3. kattan 2. kata, bina asansörü var"
            className="quote-input"
          />
        </label>
      </div>
      <details className="mt-4 text-sm text-slate-300">
        <summary className="cursor-pointer rounded-lg py-1 font-medium underline decoration-white/25 underline-offset-4 focus-visible:outline-2 focus-visible:outline-orange-400">
          Tarih veya ek ihtiyaç ekleyin (isteğe bağlı)
        </summary>
        <div className="mt-4 grid gap-4">
          <label className="field-label">
            Tercih ettiğiniz tarih
            <Input
              name="date"
              type="date"
              className="quote-input [color-scheme:dark]"
            />
          </label>
          <label className="field-label">
            Ek ihtiyaçlar
            <Input
              name="details"
              maxLength={300}
              placeholder="Ambalajlama, sökme-kurma, asansör veya keşif"
              className="quote-input"
            />
          </label>
        </div>
      </details>
      <Button
        type="submit"
        size="lg"
        className="mt-5 h-12 w-full rounded-xl bg-orange-500 px-4 text-base font-semibold text-white hover:bg-orange-400"
      >
        <MessageCircle className="size-5" aria-hidden="true" />
        WhatsApp’tan teklif iste
      </Button>
      <p className="mt-3 text-xs leading-5 text-slate-400">
        WhatsApp’ta mesaj taslağı açılır; göndermeden önce düzenleyebilir, eşya
        fotoğraflarınızı orada ekleyebilirsiniz. İlk teklif için açık adres
        gerekmez.{' '}
        <a
          className="underline underline-offset-2 hover:text-white"
          href={withBasePath('/gizlilik')}
        >
          Gizlilik bilgisi
        </a>
      </p>
    </form>
  );
}

export default function Home() {
  const [service, setService] = useState<QuoteService>('Evden eve nakliyat');
  useEffect(() => {
    if (new URLSearchParams(window.location.search).get('hizmet') === 'parca') {
      setService('Şehir içi parça eşya taşıma');
    }
  }, []);
  return (
    <main className="min-h-screen overflow-x-clip bg-background pb-24 text-foreground sm:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071826]/95 text-white backdrop-blur-xl">
        <div className="site-shell flex h-20 items-center justify-between gap-4">
          <a
            href="#top"
            className="flex items-center gap-3"
            aria-label="Cantalya Nakliye & Lojistik ana sayfa"
          >
            <span className="logo-mark" aria-hidden="true">
              C
            </span>
            <span>
              <span className="block text-[15px] font-bold tracking-[0.12em]">
                CANTALYA
              </span>
              <span className="block text-[10px] font-semibold tracking-[0.18em] text-orange-300">
                NAKLİYE&amp;LOJİSTİK
              </span>
            </span>
          </a>
          <nav
            className="hidden items-center gap-6 text-sm text-slate-300 lg:flex"
            aria-label="Ana menü"
          >
            <a className="nav-link" href="#hizmetler">
              Hizmetler
            </a>
            <a className="nav-link" href="#nasil-calisir">
              Nasıl çalışır?
            </a>
            <a className="nav-link" href="#bolgeler">
              Hizmet bölgeleri
            </a>
            <a className="nav-link" href="#iletisim">
              İletişim
            </a>
          </nav>
          <a
            href={`tel:+${phoneInternational}`}
            className={cn(
              buttonVariants({ size: 'lg' }),
              'h-11 rounded-xl bg-white px-4 font-semibold text-slate-950 hover:bg-orange-50',
            )}
          >
            <Phone className="size-4" aria-hidden="true" />
            <span className="hidden sm:inline">{phoneDisplay}</span>
            <span className="sm:hidden">Ara</span>
          </a>
        </div>
      </header>
      <section id="top" className="hero-section photo-hero scroll-mt-24">
        <div className="hero-media" aria-hidden="true">
          <MovingPhoto kind="packing" priority decorative />
        </div>
        <div className="hero-photo-shade" aria-hidden="true" />
        <div className="site-shell grid items-center gap-10 py-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-12 lg:py-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-300/25 bg-orange-400/10 px-4 py-2 text-sm font-medium text-orange-200">
              <MapPin className="size-4 shrink-0" aria-hidden="true" />
              Antalya’da ev ve parça eşya taşıma
            </div>
            <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.1] tracking-[-0.045em] text-white sm:text-6xl">
              Antalya Şehir İçi ve Şehirler Arası{' '}
              <span className="text-orange-400">
                Profesyonel Evden Eve Nakliyat
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Evinizin tamamını da, birkaç parça eşyanızı da profesyonel
              ekibimizle taşıyoruz. Ücretsiz keşifle ihtiyacınızı belirleyelim,
              kapsamı net ve uygun fiyatlı teklifinizi hazırlayalım.
            </p>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              Konyaaltı · Muratpaşa · Kepez · Döşemealtı · Aksu · Serik ve
              Antalya’nın diğer ilçeleri
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {['Asansörlü taşıma', 'Ambalajlama', 'Mobilya sökme-kurma'].map(
                (item) => (
                  <span key={item} className="hero-pill">
                    <CheckCircle2
                      className="size-4 text-orange-400"
                      aria-hidden="true"
                    />
                    {item}
                  </span>
                ),
              )}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <a
                href="#teklif"
                onClick={() => setService('Evden eve nakliyat')}
                className={cn(
                  buttonVariants({ size: 'lg' }),
                  'h-13 rounded-xl bg-orange-500 px-5 text-base font-semibold text-white hover:bg-orange-400',
                )}
              >
                <House className="size-5" aria-hidden="true" />
                Evimi taşıtacağım
              </a>
              <a
                href="#teklif"
                onClick={() => setService('Şehir içi parça eşya taşıma')}
                className={cn(
                  buttonVariants({ variant: 'outline', size: 'lg' }),
                  'h-13 rounded-xl border-white/25 bg-white/5 px-5 text-base text-white hover:bg-white/10 hover:text-white',
                )}
              >
                <Sofa className="size-5" aria-hidden="true" />
                Parça eşya taşıtacağım
              </a>
            </div>
            <p className="mt-5 text-sm leading-6 text-slate-400">
              Yerinde veya WhatsApp üzerinden keşif · İhtiyaca uygun araç ve
              ekip
            </p>
          </div>
          <QuoteForm service={service} onServiceChange={setService} />
        </div>
      </section>
      <section
        className="border-b border-slate-200 bg-white"
        aria-label="Taşıma hizmetlerimiz"
      >
        <div className="site-shell grid gap-5 py-7 text-sm font-medium text-slate-600 sm:grid-cols-3">
          <div className="trust-item">
            <House
              className="size-5 shrink-0 text-orange-600"
              aria-hidden="true"
            />
            Ücretsiz yerinde keşif
          </div>
          <div className="trust-item">
            <PackageCheck
              className="size-5 shrink-0 text-orange-600"
              aria-hidden="true"
            />
            Ambalajlama ve sökme-kurma
          </div>
          <div className="trust-item">
            <ShieldCheck
              className="size-5 shrink-0 text-orange-600"
              aria-hidden="true"
            />
            Poliçe kapsamında sigortalı taşıma
          </div>
        </div>
      </section>
      <section id="hizmetler" className="scroll-mt-24 py-16 sm:py-24">
        <div className="site-shell">
          <div className="max-w-3xl">
            <p className="eyebrow">Taşınmanın büyüğü, küçüğü</p>
            <h2 className="section-title">
              Yeni evinize de, tek eşyanıza da aynı özen.
            </h2>
            <p className="section-copy">
              Evden eve taşınmanızın tüm adımlarını birlikte planlayalım. Sadece
              koltuk, beyaz eşya veya birkaç parça taşıtacaksanız tam ev taşıma
              yerine ihtiyacınıza uygun küçük nakliye teklifi hazırlayalım.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {localServices.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.href}
                  href={withBasePath(item.href)}
                  className="service-photo-card group"
                >
                  <div className="service-photo-media">
                    <MovingPhoto
                      kind={item.photo}
                      sizes="(min-width: 1280px) 380px, (min-width: 768px) 33vw, 100vw"
                      className={
                        item.icon === Sofa ? 'small-move-photo' : undefined
                      }
                    />
                  </div>
                  <div className="service-photo-shade" aria-hidden="true" />
                  <div className="service-photo-content">
                    <div className="flex items-center justify-between">
                      <span className="grid size-11 place-items-center rounded-xl border border-white/20 bg-white/10 text-orange-300 backdrop-blur-sm">
                        <Icon className="size-6" aria-hidden="true" />
                      </span>
                      <ArrowUpRight
                        className="size-5 text-orange-300 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mb-5 mt-3 text-sm leading-6 text-slate-200">
                      {item.description}
                    </p>
                    <span className="mt-auto inline-flex text-sm font-semibold text-orange-300">
                      Hizmeti inceleyin
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
      <section
        id="nasil-calisir"
        className="moving-process scroll-mt-24 bg-[#0b2234] py-16 text-white sm:py-24"
      >
        <div className="process-media" aria-hidden="true">
          <MovingPhoto kind="lift" decorative />
        </div>
        <div className="process-photo-shade" aria-hidden="true" />
        <div className="site-shell relative grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <p className="eyebrow text-orange-300">
              Önce keşif, sonra net plan
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] sm:text-5xl">
              Taşınma günü ne olacağını önceden konuşalım.
            </h2>
            <p className="mt-5 leading-7 text-slate-300">
              Eşya miktarını, katları ve ihtiyaç duyduğunuz hizmetleri
              belirleyelim. Araç, ekip, ambalajlama, asansör ve sigorta
              kapsamını teklif aşamasında netleştirelim.
            </p>
          </div>
          <ol className="grid gap-4">
            {[
              [
                '01',
                'Eşyanızı ve iki konumu paylaşın',
                'İlçe, mahalle, kat ve eşya fotoğraflarıyla başlayalım. Ev taşımanız için ücretsiz yerinde keşif de yapalım.',
              ],
              [
                '02',
                'Hizmet kapsamını ve fiyatı netleştirelim',
                'Ambalajlama, sökme-kurma, asansör ihtiyacı, poliçe koşulları ve taşıma tarihini teklifinizde belirleyelim.',
              ],
              [
                '03',
                'Kararlaştırılan plana göre taşıyalım',
                'Alım ve teslimatı konuştuğumuz gün ve koşullarda gerçekleştirelim; süreç boyunca doğrudan iletişimde kalalım.',
              ],
            ].map(([number, title, description]) => (
              <li key={number} className="process-row">
                <span className="text-sm font-bold text-orange-300">
                  {number}
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section id="bolgeler" className="scroll-mt-24 py-16 sm:py-24">
        <div className="site-shell">
          <p className="eyebrow">Antalya ve şehirler arası taşıma</p>
          <h2 className="section-title">
            Antalya genelinde evden eve ve parça eşya taşıma.
          </h2>
          <p className="section-copy">
            Aynı mahallede, Antalya’nın ilçeleri arasında veya başka bir şehre
            taşınabilirsiniz. Hizmetimiz aşağıdaki ilçelerle sınırlı değil.
            Nereden nereye taşınacağınızı söyleyin; bina ve eşya koşullarına
            göre planlayalım.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {districts.map((district) => (
              <article
                id={district.id}
                key={district.id}
                className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-6"
              >
                <MapPin className="size-5 text-orange-600" aria-hidden="true" />
                <h3 className="mt-3 text-xl font-semibold">
                  {district.name} evden eve nakliyat
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {district.description}
                </p>
                <a
                  href="#teklif"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-orange-700"
                >
                  Taşıma için teklif alın
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="border-y border-slate-200 bg-white py-16 sm:py-24">
        <div className="site-shell grid gap-10 lg:grid-cols-[.65fr_1.35fr]">
          <div>
            <p className="eyebrow">Sık sorulanlar</p>
            <h2 className="section-title">
              Taşınmadan önce bilmek istedikleriniz.
            </h2>
            <p className="section-copy">
              Fiyat ve hizmet kapsamı eşyanıza ve taşıma koşullarına göre
              belirlenir. Kendi taşınmanız için bizi arayabilirsiniz.
            </p>
          </div>
          <div className="grid gap-3">
            {faqs.map(({ question, answer }) => (
              <details
                key={question}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <summary className="cursor-pointer font-semibold leading-6 text-slate-950 focus-visible:outline-2 focus-visible:outline-orange-500">
                  {question}
                </summary>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section id="diger-hizmetler" className="py-12 sm:py-16">
        <div className="site-shell grid gap-7 md:grid-cols-[1fr_240px] md:items-center">
          <div>
            <p className="eyebrow">Diğer nakliye ve lojistik hizmetleri</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">
              Şehirler arası ve ticari taşıma da devam ediyor.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
              Türkiye geneli parça eşya, ambar, parsiyel ve paletli yük
              talepleriniz için ilgili hizmet sayfasından bilgi alabilirsiniz.
            </p>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3">
              {otherServices.map(([title, href]) => (
                <a
                  key={href}
                  href={withBasePath(href)}
                  className="inline-flex items-center gap-1 text-sm font-medium text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-orange-700"
                >
                  {title}
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-[#071826]">
            <img
              src={withBasePath('/hero.jpg')}
              alt="Kapalı kasa nakliye kamyonu"
              width={480}
              height={270}
              loading="lazy"
              className="aspect-video w-full object-cover"
            />
          </figure>
        </div>
      </section>
      <section id="iletisim" className="scroll-mt-24 pb-16 sm:pb-24">
        <div className="site-shell">
          <div className="contact-panel">
            <div>
              <p className="eyebrow text-orange-100">
                Eviniz ya da birkaç parça eşyanız
              </p>
              <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-[-0.035em] text-white sm:text-4xl">
                Neyi, nereden nereye taşıtmak istiyorsunuz?
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-orange-50">
                Şehir içi veya şehirler arası taşımanız için fotoğraf gönderin
                ya da ücretsiz keşif isteyin. İhtiyacınıza uygun teklifi
                birlikte netleştirelim.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={`https://wa.me/${phoneInternational}?text=${encodeURIComponent('Merhaba Cantalya Nakliye & Lojistik, evden eve veya parça eşya taşıma için teklif almak istiyorum.')}`}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ size: 'lg' }),
                  'h-13 rounded-xl bg-white px-6 text-base font-semibold text-slate-950 hover:bg-orange-50',
                )}
              >
                <MessageCircle className="size-5" aria-hidden="true" />
                WhatsApp’tan yazın
              </a>
              <a
                href={`tel:+${phoneInternational}`}
                className={cn(
                  buttonVariants({ variant: 'outline', size: 'lg' }),
                  'h-13 rounded-xl border-white/30 bg-transparent px-6 text-base text-white hover:bg-white/10 hover:text-white',
                )}
              >
                <Phone className="size-5" aria-hidden="true" />
                {phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className="border-t border-slate-200 bg-white py-9">
        <div className="site-shell flex flex-col justify-between gap-5 text-sm text-slate-500 lg:flex-row lg:items-center">
          <div>
            <strong className="block text-base text-slate-900">
              Cantalya Nakliye &amp; Lojistik
            </strong>
            <p className="mt-1">
              Şehir içi ve şehirler arası evden eve nakliyat · Antalya parça
              eşya taşıma
            </p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-3">
            <a
              className="hover:text-orange-700"
              href={`tel:+${phoneInternational}`}
            >
              {phoneDisplay}
            </a>
            <a className="hover:text-orange-700" href="#diger-hizmetler">
              Diğer hizmetler
            </a>
            <a
              className="hover:text-orange-700"
              href={withBasePath('/gizlilik')}
            >
              Gizlilik
            </a>
          </div>
        </div>
      </footer>
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-3 border-t border-slate-200 bg-white/95 px-4 pt-3 pb-[max(.75rem,env(safe-area-inset-bottom))] shadow-[0_-6px_24px_rgb(0_0_0/8%)] backdrop-blur sm:hidden">
        <a
          href={`tel:+${phoneInternational}`}
          className={cn(
            buttonVariants({ size: 'lg' }),
            'h-12 rounded-xl bg-slate-950 text-white hover:bg-slate-800',
          )}
        >
          <Phone className="size-4" aria-hidden="true" /> Hemen ara
        </a>
        <a
          href="#teklif"
          className={cn(
            buttonVariants({ size: 'lg' }),
            'h-12 rounded-xl bg-orange-600 text-white hover:bg-orange-500',
          )}
        >
          <MessageCircle className="size-4" aria-hidden="true" /> Teklif al
        </a>
      </div>
    </main>
  );
}
