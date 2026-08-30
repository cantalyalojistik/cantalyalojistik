'use client';

import { FormEvent, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  CheckCircle2,
  Clock3,
  House,
  MapPin,
  MessageCircle,
  PackageCheck,
  Phone,
  Route,
  ShieldCheck,
  Truck,
  Warehouse,
} from 'lucide-react';

import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { siteUrl, withBasePath } from '@/lib/site';
import { cn } from '@/lib/utils';

const phoneDisplay = '0541 541 32 89';
const phoneInternational = '905415413289';

const services = [
  {
    icon: Boxes,
    href: '/parca-esya-tasima',
    title: 'Parça eşya taşıma',
    description:
      'Aracı tamamen doldurmayan koli, mobilya, ekipman ve ticari yükler için ekonomik sevkiyat planı.',
  },
  {
    icon: PackageCheck,
    href: '/paletli-yuk-tasima',
    title: 'Paletli yük taşıma',
    description:
      'Paletli ürün, makine parçası ve işletme malzemeleri için yüke uygun araç ve düzenli yükleme.',
  },
  {
    icon: Warehouse,
    href: '/parsiyel-nakliye',
    title: 'Parsiyel ve ambar',
    description:
      'Farklı gönderileri aynı güzergahta planlayarak şehirler arası maliyet avantajı sağlayan taşıma.',
  },
  {
    icon: Truck,
    href: '/ticari-yuk-tasima',
    title: 'Ticari sevkiyat',
    description:
      'Mağaza, üretici, tedarikçi ve küçük işletmeler için tek seferlik veya düzenli yük transferi.',
  },
  {
    icon: House,
    href: '/evden-eve-nakliyat',
    title: 'Evden eve nakliyat',
    description:
      'Ev ve ofis eşyaları için şehir içi veya şehirler arası taşıma planı; yükleme ve yerleştirme sürecinde tek muhatap.',
  },
];

const cargoTypes = [
  'Ev eşyası / evden eve',
  'Parça eşya',
  'Paletli malzeme',
  'Koli / paket',
  'Makine / ekipman',
  'Ticari ürün',
  'Diğer',
];

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Cantalya Lojistik',
  url: siteUrl,
  description:
    'Türkiye genelinde parça yük, paletli malzeme, parsiyel taşıma, ticari sevkiyat ve evden eve nakliyat. Merkez Antalya.',
  telephone: '+90 541 541 32 89',
  areaServed: {
    '@type': 'Country',
    name: 'Türkiye',
  },
  sameAs: ['https://www.instagram.com/cantalyanakliyat'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Yük taşıma hizmetleri',
    itemListElement: [
      'Parça eşya taşıma',
      'Paletli yük taşıma',
      'Parsiyel nakliye',
      'Ticari malzeme taşımacılığı',
      'Evden eve nakliyat',
    ].map((name) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name },
    })),
  },
};

function QuoteForm() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [cargoType, setCargoType] = useState(cargoTypes[0]);
  const [load, setLoad] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const message = [
      'Merhaba Cantalya Lojistik, taşıma teklifi almak istiyorum.',
      `Çıkış: ${origin}`,
      `Varış: ${destination}`,
      `Yük türü: ${cargoType}`,
      `Yaklaşık miktar: ${load || 'Belirtilmedi'}`,
    ].join('\n');

    window.open(
      `https://wa.me/${phoneInternational}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer',
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="quote-card"
      aria-labelledby="quote-title"
    >
      <div className="flex items-start justify-between gap-5">
        <div>
          <p className="eyebrow text-orange-300">Profesyonel hizmet • Uygun fiyat</p>
          <h2 id="quote-title" className="mt-2 text-2xl font-semibold text-white">
            Size uygun fiyat teklifini alın
          </h2>
        </div>
        <span className="rounded-2xl bg-orange-500/15 p-3 text-orange-300">
          <Route className="size-6" aria-hidden="true" />
        </span>
      </div>

      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        <label className="field-label">
          Çıkış noktası
          <Input
            required
            value={origin}
            onChange={(event) => setOrigin(event.target.value)}
            placeholder="İstanbul / Kadıköy"
            className="quote-input"
          />
        </label>
        <label className="field-label">
          Varış noktası
          <Input
            required
            value={destination}
            onChange={(event) => setDestination(event.target.value)}
            placeholder="Antalya / Kepez"
            className="quote-input"
          />
        </label>
        <label className="field-label">
          Yük türü
          <select
            value={cargoType}
            onChange={(event) => setCargoType(event.target.value)}
            className="quote-select"
          >
            {cargoTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </label>
        <label className="field-label">
          Yaklaşık miktar
          <Input
            value={load}
            onChange={(event) => setLoad(event.target.value)}
            placeholder="2 palet / 350 kg"
            className="quote-input"
          />
        </label>
      </div>

      <Button
        type="submit"
        size="lg"
        className="mt-5 h-12 w-full rounded-xl bg-orange-500 px-5 text-base font-semibold text-white hover:bg-orange-400"
      >
        <MessageCircle className="size-5" aria-hidden="true" />
        WhatsApp’tan fiyat iste
      </Button>
      <p className="mt-3 text-center text-xs leading-5 text-slate-400">
        Bilgileriniz yalnızca taşıma talebinizi yanıtlamak için kullanılır.
      </p>
    </form>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071826]/95 text-white backdrop-blur-xl">
        <div className="site-shell flex h-20 items-center justify-between gap-6">
          <a href="#top" className="flex items-center gap-3" aria-label="Cantalya ana sayfa">
            <span className="logo-mark" aria-hidden="true">
              C
            </span>
            <span>
              <span className="block text-[15px] font-bold tracking-[0.12em]">CANTALYA</span>
              <span className="block text-[10px] font-semibold tracking-[0.18em] text-orange-300">
                NAKLİYE &amp; LOJİSTİK
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-slate-300 lg:flex" aria-label="Ana menü">
            <a className="nav-link" href="#hizmetler">
              Hizmetler
            </a>
            <a className="nav-link" href="#nasil-calisir">
              Nasıl çalışır?
            </a>
            <a className="nav-link" href="#bolgeler">
              Hizmet bölgesi
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

      <section id="top" className="hero-section scroll-mt-24">
        <div className="site-shell grid items-center gap-12 py-16 lg:grid-cols-[1.04fr_.96fr] lg:py-24">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-300/25 bg-orange-400/10 px-4 py-2 text-sm font-medium text-orange-200">
              <MapPin className="size-4" aria-hidden="true" />
              Türkiye geneli taşıma • Merkez Antalya
            </div>
            <h1 className="mt-7 max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.045em] text-white sm:text-6xl">
              Türkiye genelinde yükünüzü ve ev eşyanızı
              <span className="text-orange-400"> doğru araçla taşıyoruz.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Paletli malzeme, ticari ürün, koli, parça eşya ve evden eve nakliyat için şehir içi
              ve şehirler arası profesyonel, planlı ve uygun fiyatlı taşıma çözümleri.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {['Parsiyel yük', 'Paletli malzeme', 'Evden eve nakliyat'].map((item) => (
                <span key={item} className="hero-pill">
                  <CheckCircle2 className="size-4 text-orange-400" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={`https://wa.me/${phoneInternational}?text=${encodeURIComponent('Merhaba, taşıma hizmeti için fiyat almak istiyorum.')}`}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ size: 'lg' }),
                  'h-13 rounded-xl bg-orange-500 px-6 text-base font-semibold text-white hover:bg-orange-400',
                )}
              >
                Uygun fiyat teklifi alın
                <ArrowRight className="size-5" aria-hidden="true" />
              </a>
              <a
                href="#hizmetler"
                className={cn(
                  buttonVariants({ variant: 'outline', size: 'lg' }),
                  'h-13 rounded-xl border-white/20 bg-white/5 px-6 text-base text-white hover:bg-white/10 hover:text-white',
                )}
              >
                Taşıdığımız yükler
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-6">
              <div>
                <strong className="block text-xl text-white">Teklif</strong>
                <span className="text-xs text-slate-400">Hızlı geri dönüş</span>
              </div>
              <div>
                <strong className="block text-xl text-white">Planlama</strong>
                <span className="text-xs text-slate-400">Yüke uygun araç</span>
              </div>
              <div>
                <strong className="block text-xl text-white">Teslimat</strong>
                <span className="text-xs text-slate-400">Tek muhatap</span>
              </div>
            </div>
          </div>

          <QuoteForm />
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="site-shell grid gap-6 py-6 text-sm font-medium text-slate-600 sm:grid-cols-3">
          <div className="trust-item">
            <ShieldCheck className="size-5 text-orange-600" aria-hidden="true" />
            Profesyonel taşıma planı
          </div>
          <div className="trust-item">
            <Clock3 className="size-5 text-orange-600" aria-hidden="true" />
            Yükünüze uygun fiyat seçeneği
          </div>
          <div className="trust-item">
            <Route className="size-5 text-orange-600" aria-hidden="true" />
            Türkiye genelinde şehir içi ve şehirler arası
          </div>
        </div>
      </section>

      <section className="bg-white py-10 sm:py-14">
        <div className="site-shell">
          <figure className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-[#071826] shadow-[0_24px_70px_rgb(15_23_42/12%)]">
            <img
              src={withBasePath('/og.png')}
              alt="Cantalya Nakliye & Lojistik için paletli yüklerin yanında bekleyen ticari taşıma kamyonu"
              className="aspect-video w-full object-cover"
            />
          </figure>
        </div>
      </section>

      <section id="hizmetler" className="scroll-mt-24 py-20 sm:py-28">
        <div className="site-shell">
          <div className="max-w-3xl">
            <p className="eyebrow">Ne taşıyoruz?</p>
            <h2 className="section-title">Bir tek koliniz bile olsa yükünüz yola çıkar.</h2>
            <p className="section-copy">
              Ev eşyasından paletli malzemeye; bireysel ve ticari yükleri Türkiye genelinde şehir
              içi veya şehirler arası profesyonelce planlıyor, ihtiyacınıza uygun fiyat seçeneği
              sunuyoruz.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <a key={service.title} href={withBasePath(service.href)} className="service-card block">
                  <div className="flex items-center justify-between">
                    <span className="service-icon">
                      <Icon className="size-6" aria-hidden="true" />
                    </span>
                    <span className="flex items-center gap-2 text-xs font-bold tracking-[0.12em] text-slate-300">
                      0{index + 1}
                      <ArrowUpRight className="size-4 text-orange-500" aria-hidden="true" />
                    </span>
                  </div>
                  <h3 className="mt-7 text-xl font-semibold text-slate-950">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
                  <span className="mt-5 inline-flex text-sm font-semibold text-orange-600">
                    Hizmeti inceleyin
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section id="nasil-calisir" className="scroll-mt-24 bg-[#0b2234] py-20 text-white sm:py-28">
        <div className="site-shell grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow text-orange-300">Basit süreç, net iletişim</p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.035em] sm:text-5xl">
              Yük bilgisi sizden, doğru sevkiyat planı bizden.
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-slate-300">
              Çıkış ve varış noktasını, yükün ölçüsünü ve ağırlığını paylaşın. Uygun araç ve
              güzergah planını profesyonelce hazırlayıp bütçenize uygun net teklif ile dönelim.
            </p>
          </div>

          <ol className="grid gap-4">
            {[
              ['01', 'Yük bilgisini paylaşın', 'Nereden nereye, kaç parça veya palet ve yaklaşık ağırlık.'],
              ['02', 'Sevkiyatı planlayalım', 'Yükünüze ve güzergaha uygun taşıma seçeneğini belirleyelim.'],
              ['03', 'Yükünüzü teslim edelim', 'Belirlenen zamanda alım yapalım ve varış noktasına ulaştıralım.'],
            ].map(([number, title, description]) => (
              <li key={number} className="process-row">
                <span className="text-sm font-bold text-orange-300">{number}</span>
                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-400">{description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="bolgeler" className="scroll-mt-24 py-20 sm:py-28">
        <div className="site-shell">
          <div className="route-panel">
            <div className="relative z-10 max-w-2xl">
              <p className="eyebrow">Türkiye geneli taşıma ağı</p>
              <h2 className="section-title">Merkez Antalya, taşıma Türkiye genelinde.</h2>
              <p className="section-copy">
                Merkezimiz Antalya’da. Türkiye’nin tüm illeri arasında parça yük, paletli malzeme,
                ticari sevkiyat ve evden eve nakliyat taleplerini değerlendiriyoruz.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {['Antalya merkez', 'İstanbul', 'Ankara', 'İzmir', 'Bursa', 'Konya', 'Türkiye geneli'].map(
                  (city) => (
                    <span key={city} className="route-chip">
                      {city}
                    </span>
                  ),
                )}
              </div>
            </div>
            <div className="route-orbit" aria-hidden="true">
              <MapPin className="size-9" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-20 sm:py-28">
        <div className="site-shell grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
          <div>
            <p className="eyebrow">Sık sorulanlar</p>
            <h2 className="section-title">Göndermeden önce bilmek istedikleriniz.</h2>
            <p className="section-copy">
              Yükünüz farklıysa fotoğraf, ölçü ve yaklaşık ağırlığı WhatsApp’tan paylaşmanız yeterli.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              [
                'Parça eşya taşıma nedir?',
                'Aracın tamamını doldurmayan yüklerin uygun güzergah ve araç planıyla şehirler arasında taşınmasıdır.',
              ],
              [
                'Paletli malzeme kabul ediyor musunuz?',
                'Evet. Palet sayısı, ölçüler, yaklaşık ağırlık ve yükleme koşullarına göre uygun taşıma planı oluşturulur.',
              ],
              [
                'Hangi illere taşıma yapıyorsunuz?',
                'Merkezimiz Antalya’dadır; taşıma taleplerini çıkış ve varış ili fark etmeksizin Türkiye genelinde değerlendiriyoruz.',
              ],
              [
                'Evden eve nakliyat yapıyor musunuz?',
                'Evet. Ev ve ofis eşyaları için şehir içi ve şehirler arası nakliyat hizmeti sunuyoruz.',
              ],
              [
                'Nakliye fiyatı nasıl belirlenir?',
                'Çıkış-varış noktası, yük türü, hacim, ağırlık, kat ve yükleme koşulları birlikte değerlendirilir.',
              ],
            ].map(([question, answer]) => (
              <article key={question} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="font-semibold text-slate-950">{question}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="iletisim" className="scroll-mt-24 py-20 sm:py-28">
        <div className="site-shell">
          <div className="contact-panel">
            <div>
              <p className="eyebrow text-orange-200">Yükünüz hazır mı?</p>
              <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-[-0.035em] text-white sm:text-5xl">
                Profesyonel taşıma, uygun fiyat: çıkış ve varış noktasını gönderin.
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={`https://wa.me/${phoneInternational}?text=${encodeURIComponent('Merhaba, parça yük / paletli malzeme / evden eve taşıma için bilgi almak istiyorum.')}`}
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
                  'h-13 rounded-xl border-white/25 bg-transparent px-6 text-base text-white hover:bg-white/10 hover:text-white',
                )}
              >
                <Phone className="size-5" aria-hidden="true" />
                {phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white py-10">
        <div className="site-shell flex flex-col justify-between gap-6 text-sm text-slate-500 sm:flex-row sm:items-center">
          <div>
            <strong className="block text-base text-slate-900">Cantalya Lojistik</strong>
            <span>Parça yük, paletli malzeme, parsiyel taşıma ve evden eve nakliyat</span>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a className="hover:text-orange-600" href={`tel:+${phoneInternational}`}>
              {phoneDisplay}
            </a>
            <span>Türkiye geneli hizmet • Merkez Antalya</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
