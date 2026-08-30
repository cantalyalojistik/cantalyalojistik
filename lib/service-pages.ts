import type { Metadata } from 'next';
import { siteUrl } from '@/lib/site';

export { siteUrl };

export type ServicePage = {
  slug: string;
  eyebrow: string;
  title: string;
  metaTitle: string;
  description: string;
  lead: string;
  highlights: string[];
  idealFor: string[];
  steps: Array<{ title: string; description: string }>;
  faqs: Array<{ question: string; answer: string }>;
};

export const servicePages: Record<string, ServicePage> = {
  'parca-esya-tasima': {
    slug: 'parca-esya-tasima',
    eyebrow: 'Türkiye geneli parça eşya taşıma',
    title: 'Az miktardaki eşyanız için komple araç ücreti ödemeyin.',
    metaTitle: 'Parça Eşya Taşıma | Türkiye Geneli Uygun Nakliye',
    description:
      'Türkiye genelinde parça eşya, koli, mobilya ve küçük yük taşıma. Yükünüze uygun araç planı ve net fiyat teklifi için Cantalya Lojistik.',
    lead:
      'Bir kamyonu doldurmayan mobilya, koli, beyaz eşya veya ticari ürünleri uygun güzergâh ve araç planıyla şehir içi ya da şehirler arasında taşıyoruz.',
    highlights: ['Komple araç zorunluluğu yok', 'Şehir içi ve şehirler arası', 'Yüke uygun fiyat planı'],
    idealFor: ['Mobilya ve beyaz eşya', 'Koli ve paketler', 'Öğrenci veya bekâr eşyası', 'Tek parça makine ve ekipman', 'Mağaza ürünleri', 'Az miktardaki ev eşyası'],
    steps: [
      { title: 'Yükü tanıyalım', description: 'Fotoğraf, ölçü, adet ve yaklaşık ağırlığı paylaşın.' },
      { title: 'Uygun rotayı planlayalım', description: 'Çıkış-varış bilgisine göre araç ve güzergâh belirleyelim.' },
      { title: 'Net teklif sunalım', description: 'Yükleme koşullarıyla birlikte anlaşılır bir fiyat paylaşalım.' },
    ],
    faqs: [
      { question: 'Tek parça eşya taşır mısınız?', answer: 'Evet. Tek mobilya, beyaz eşya, makine veya birkaç koli için taşıma talebi oluşturabilirsiniz.' },
      { question: 'Parça eşya taşıma fiyatı nasıl belirlenir?', answer: 'Mesafe, eşyanın hacmi ve ağırlığı, kat bilgisi ve yükleme koşulları birlikte değerlendirilir.' },
      { question: 'Türkiye’nin her iline taşıma var mı?', answer: 'Çıkış ve varış ili fark etmeksizin Türkiye genelindeki talepleri güzergâh uygunluğuna göre değerlendiriyoruz.' },
    ],
  },
  'paletli-yuk-tasima': {
    slug: 'paletli-yuk-tasima',
    eyebrow: 'Türkiye geneli paletli yük taşıma',
    title: 'Paletli yükünüzü ölçüsüne, ağırlığına ve rotasına göre planlayalım.',
    metaTitle: 'Paletli Yük Taşıma | Türkiye Geneli Nakliye',
    description:
      'Paletli malzeme, makine parçası ve ticari ürünler için Türkiye geneli profesyonel nakliye. Uygun araç ve fiyat teklifi alın.',
    lead:
      'Üretici, tedarikçi ve işletmelerin paletli ürünlerini; palet sayısı, ölçü, ağırlık ve yükleme imkânlarına göre doğru araçla taşıyoruz.',
    highlights: ['Yüke uygun araç seçimi', 'Ticari sevkiyat planı', 'Türkiye geneli teslimat'],
    idealFor: ['Paletli ürünler', 'Makine ve yedek parça', 'Üretim malzemeleri', 'Mağaza ve depo sevkiyatı', 'Ambalajlı ticari yük', 'Tek veya çoklu palet'],
    steps: [
      { title: 'Palet bilgilerini alın', description: 'Palet sayısı, ölçüler ve yaklaşık ağırlığı belirleyin.' },
      { title: 'Yükleme koşullarını paylaşın', description: 'Forklift, transpalet ve rampa durumunu bize bildirin.' },
      { title: 'Sevkiyatı planlayalım', description: 'Rotaya ve yük tipine uygun araçla teslimatı organize edelim.' },
    ],
    faqs: [
      { question: 'Bir palet yük taşır mısınız?', answer: 'Evet. Tek paletten çoklu palete kadar talepler güzergâh ve yük detayına göre değerlendirilir.' },
      { question: 'Forklift gerekli mi?', answer: 'Yükün ağırlığı ve yükleme yerine göre gerekebilir. Mevcut imkânları teklif öncesinde birlikte netleştiririz.' },
      { question: 'Paletli yük fiyatı nasıl hesaplanır?', answer: 'Palet ölçüsü, toplam ağırlık, mesafe, araç tipi ve yükleme-boşaltma koşulları fiyatı belirler.' },
    ],
  },
  'parsiyel-nakliye': {
    slug: 'parsiyel-nakliye',
    eyebrow: 'Parsiyel nakliye ve ambar taşımacılığı',
    title: 'Yükünüz kadar yer, rotanıza uygun profesyonel taşıma planı.',
    metaTitle: 'Parsiyel Nakliye ve Ambar Taşımacılığı | Türkiye Geneli',
    description:
      'Türkiye geneli parsiyel nakliye ve ambar taşımacılığı. Parça yük, koli ve paletli malzemeler için uygun fiyatlı taşıma planı.',
    lead:
      'Aracın tamamını kaplamayan yükleri aynı güzergâhtaki sevkiyatlarla planlayarak işletmeler ve bireysel göndericiler için maliyet avantajı oluşturuyoruz.',
    highlights: ['Yük kadar alan maliyeti', 'Planlı güzergâh', 'Parça ve paletli yük kabulü'],
    idealFor: ['Koli ve paketler', 'Paletli ürünler', 'Ticari malzeme', 'Makine ve ekipman', 'Mobilya parçaları', 'Düzenli küçük sevkiyatlar'],
    steps: [
      { title: 'Sevkiyat detayını paylaşın', description: 'Çıkış, varış, yük tipi ve hazır olma tarihini gönderin.' },
      { title: 'Uygun hattı bulalım', description: 'Yükü aynı yöndeki araç ve sevkiyat planıyla eşleştirelim.' },
      { title: 'Teslimatı takip edelim', description: 'Alımdan varış noktasına kadar tek muhatapla ilerleyin.' },
    ],
    faqs: [
      { question: 'Parsiyel nakliye nedir?', answer: 'Birden fazla göndericinin yükünün aynı araçta, uygun rota planıyla taşınmasıdır.' },
      { question: 'Ambar ile parsiyel nakliye aynı mı?', answer: 'Benzer ihtiyaca hizmet eder. Parsiyel taşımada yükler ortak güzergâhta planlanır; ambar hizmeti daha düzenli hat ve toplama yapısıyla çalışabilir.' },
      { question: 'Teslim süresi ne kadar?', answer: 'Güzergâh, yükün hazır olma tarihi ve araç planına göre değişir; teklif sırasında tahmini süre paylaşılır.' },
    ],
  },
  'ticari-yuk-tasima': {
    slug: 'ticari-yuk-tasima',
    eyebrow: 'İşletmelere özel ticari yük taşıma',
    title: 'Mağaza, üretici ve tedarikçiler için düzenli veya tek seferlik sevkiyat.',
    metaTitle: 'Ticari Yük Taşıma ve Sevkiyat | Türkiye Geneli',
    description:
      'İşletmeler için Türkiye geneli ticari yük taşıma, mağaza ve depo sevkiyatı. Profesyonel planlama ve uygun fiyat teklifi.',
    lead:
      'Tedarik, mağaza, depo ve üretim süreçlerinizdeki parça veya paletli yükleri iş akışınıza uygun şekilde planlıyoruz.',
    highlights: ['Tek seferlik veya düzenli', 'İşletmeye uygun planlama', 'Parça ve paletli sevkiyat'],
    idealFor: ['Mağaza transferleri', 'Tedarikçi sevkiyatı', 'Depolar arası taşıma', 'Üretim malzemeleri', 'Fuar ve etkinlik ekipmanı', 'E-ticaret toplu gönderileri'],
    steps: [
      { title: 'İhtiyacı belirleyelim', description: 'Yük sıklığı, rota ve teslimat beklentinizi konuşalım.' },
      { title: 'Operasyonu oluşturalım', description: 'Araç, alım ve teslim zamanlarını işinize göre planlayalım.' },
      { title: 'Tek muhatapla ilerleyin', description: 'Sevkiyat sürecini tek iletişim noktasıyla yönetin.' },
    ],
    faqs: [
      { question: 'Düzenli sevkiyat yapıyor musunuz?', answer: 'Evet. Düzenli rota, yük tipi ve sıklık bilgisine göre işletmeye özel plan oluşturulabilir.' },
      { question: 'Fatura veya irsaliye gerekiyor mu?', answer: 'Ticari yükün niteliğine göre gerekli belgeler değişebilir. Sevkiyat öncesinde evrak durumunu netleştiririz.' },
      { question: 'Aynı gün alım yapılabilir mi?', answer: 'Araç ve güzergâh uygunluğuna bağlıdır. Acil talepleri yük detaylarıyla birlikte hızlıca değerlendiriyoruz.' },
    ],
  },
  'evden-eve-nakliyat': {
    slug: 'evden-eve-nakliyat',
    eyebrow: 'Şehir içi ve şehirler arası evden eve nakliyat',
    title: 'Evinizi planlı, profesyonel ve bütçenize uygun şekilde taşıyalım.',
    metaTitle: 'Evden Eve Nakliyat | Şehir İçi ve Şehirler Arası',
    description:
      'Profesyonel evden eve nakliyat ve şehirler arası ev taşıma. Türkiye genelinde uygun fiyat teklifi için Cantalya Lojistik.',
    lead:
      'Ev ve ofis eşyalarını çıkış-varış, kat, eşya miktarı ve bina koşullarına göre planlıyor; size uygun taşıma seçeneğini sunuyoruz.',
    highlights: ['Şehir içi ve şehirler arası', 'Eşya miktarına uygun araç', 'Net fiyat planlaması'],
    idealFor: ['Ev taşıma', 'Ofis taşıma', 'Öğrenci eşyası', 'Birkaç parça ev eşyası', 'Şehirler arası taşınma', 'Bina ve site taşımaları'],
    steps: [
      { title: 'Eşya ve bina bilgisini paylaşın', description: 'Oda sayısı, kat, asansör ve eşya fotoğraflarını gönderin.' },
      { title: 'Taşıma planını oluşturalım', description: 'Araç, ekip ve zaman ihtiyacını birlikte netleştirelim.' },
      { title: 'Planlanan günde taşıyalım', description: 'Alım ve teslim sürecini tek muhatapla tamamlayalım.' },
    ],
    faqs: [
      { question: 'Evden eve nakliyat fiyatı nasıl belirlenir?', answer: 'Mesafe, eşya miktarı, katlar, bina asansörü, taşıma tarihi ve ek iş ihtiyaçları değerlendirilir.' },
      { question: 'Şehirler arası ev taşıyor musunuz?', answer: 'Evet. Türkiye genelindeki şehirler arası ev taşıma taleplerini değerlendiriyoruz.' },
      { question: 'Az miktarda ev eşyası taşınır mı?', answer: 'Evet. Eşya miktarına göre parça eşya veya uygun araç seçeneği planlanabilir.' },
    ],
  },
};

export function createServiceMetadata(slug: keyof typeof servicePages): Metadata {
  const service = servicePages[slug];

  return {
    title: service.metaTitle,
    description: service.description,
    alternates: { canonical: `${siteUrl}/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.description,
      type: 'website',
      locale: 'tr_TR',
      url: `${siteUrl}/${service.slug}`,
      images: [],
    },
    twitter: {
      card: 'summary',
      title: service.metaTitle,
      description: service.description,
      images: [],
    },
  };
}
