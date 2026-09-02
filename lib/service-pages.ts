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
      'Türkiye genelinde parça eşya, koli, mobilya ve küçük yük taşıma. Yükünüze uygun araç planı ve net fiyat teklifi için Cantalya Nakliye & Lojistik.',
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
  'ambar-nakliye': {
    slug: 'ambar-nakliye',
    eyebrow: 'Türkiye geneli ambar nakliye',
    title: 'Koli, parça eşya ve paletli yükler için ekonomik ambar taşımacılığı.',
    metaTitle: 'Ambar Nakliye | Türkiye Geneli Parça Yük Taşıma',
    description:
      'Türkiye geneli ambar nakliye, koli, parça eşya ve paletli yük taşıma. Uygun güzergâh, profesyonel planlama ve fiyat teklifi alın.',
    lead:
      'Komple araç gerektirmeyen yüklerinizi uygun hat ve sevkiyat planıyla taşıyoruz. Tek koliden paletli ticari yüke kadar her talebi ölçü, ağırlık ve rotasına göre değerlendiriyoruz.',
    highlights: ['Tek koli ve parça yük kabulü', 'Paletli malzeme taşıma', 'Uygun hat ve fiyat planı'],
    idealFor: ['Koli ve paketler', 'Parça eşya', 'Paletli ürünler', 'Mobilya ve beyaz eşya', 'Ticari malzeme', 'Makine ve ekipman'],
    steps: [
      { title: 'Yük detayını paylaşın', description: 'Koli veya palet adedi, ölçüler, ağırlık ve fotoğrafları gönderin.' },
      { title: 'Ambar hattını planlayalım', description: 'Çıkış ve varış noktasına uygun güzergâh ve araç seçeneğini belirleyelim.' },
      { title: 'Alım ve teslimatı yapalım', description: 'Planlanan zamanda yükü alıp varış noktasına ulaştıralım.' },
    ],
    faqs: [
      { question: 'Tek koli ambarla taşınır mı?', answer: 'Evet. Tek koli, birkaç parça eşya veya tek paletlik talepler güzergâh uygunluğuna göre taşınabilir.' },
      { question: 'Ambar nakliye fiyatı nasıl hesaplanır?', answer: 'Yükün hacmi, ağırlığı, çıkış-varış noktası ve yükleme koşulları birlikte değerlendirilir.' },
      { question: 'Ev eşyası ambarla taşınabilir mi?', answer: 'Az miktardaki ev eşyası uygun ambalajlama ve rota planıyla parça eşya veya ambar taşıması olarak değerlendirilebilir.' },
    ],
  },
  'sehirler-arasi-nakliye': {
    slug: 'sehirler-arasi-nakliye',
    eyebrow: 'Türkiye geneli şehirler arası nakliye',
    title: 'Şehirler arası yükünüzü doğru araç ve net planla taşıyalım.',
    metaTitle: 'Şehirler Arası Nakliye | Türkiye Geneli Taşımacılık',
    description:
      'Türkiye geneli şehirler arası nakliye; parça eşya, paletli yük, ticari sevkiyat ve ev eşyası taşıma için profesyonel ve uygun fiyatlı çözüm.',
    lead:
      'Çıkış ve varış ili fark etmeksizin parça yük, paletli malzeme, ticari ürün ve ev eşyası taleplerini yüke uygun araç ve güzergâhla planlıyoruz.',
    highlights: ['81 il için talep değerlendirme', 'Yüke uygun araç seçimi', 'Tek muhatapla planlama'],
    idealFor: ['Şehirler arası parça eşya', 'Paletli ticari yük', 'Ev ve ofis eşyası', 'Mağaza ve depo sevkiyatı', 'Makine ve ekipman', 'Düzenli işletme yükleri'],
    steps: [
      { title: 'Rotayı ve yükü bildirin', description: 'Çıkış-varış ili, yük türü, adet, ölçü ve ağırlık bilgisini paylaşın.' },
      { title: 'Doğru taşıma seçeneğini bulalım', description: 'Komple, parsiyel veya ambar seçeneğini ihtiyacınıza göre planlayalım.' },
      { title: 'Şehirler arası teslimatı tamamlayalım', description: 'Alım ve varış zamanını netleştirip sevkiyatı gerçekleştirelim.' },
    ],
    faqs: [
      { question: 'Hangi şehirlere nakliye yapıyorsunuz?', answer: 'Türkiye genelindeki tüm iller arasındaki talepleri güzergâh ve araç uygunluğuna göre değerlendiriyoruz.' },
      { question: 'Şehirler arası tek parça eşya taşınır mı?', answer: 'Evet. Tek parça eşya, birkaç koli veya tek palet için parsiyel ve ambar seçenekleri planlanabilir.' },
      { question: 'Şehirler arası nakliye ne kadar sürer?', answer: 'Teslim süresi rota, yük türü ve araç planına göre değişir; teklif sırasında tahmini süre paylaşılır.' },
    ],
  },
  'antalya-nakliye': {
    slug: 'antalya-nakliye',
    eyebrow: 'Türkiye geneli nakliye ve lojistik',
    title: 'Antalya’da şehir içi, şehirler arası ve Türkiye geneli nakliye.',
    metaTitle: 'Antalya Nakliye ve Lojistik | Cantalya',
    description:
      'Antalya nakliye ve lojistik hizmetleri: parça eşya, paletli yük, ambar, parsiyel taşıma ve evden eve nakliyat. Profesyonel ve uygun fiyatlı teklif alın.',
    lead:
      'Antalya dahil Türkiye’nin tüm illeri arasındaki parça eşya, paletli malzeme, ticari yük ve ev eşyası taşıma taleplerini profesyonelce planlıyoruz.',
    highlights: ['Türkiye geneli', 'Şehir içi ve şehirler arası', 'Parça yük ve evden eve'],
    idealFor: ['Antalya dahil şehir içi parça eşya', 'Türkiye’nin tüm illeri arasında yük', 'Paletli ve ticari sevkiyat', 'Evden eve nakliyat', 'Ambar ve parsiyel taşıma', 'Ofis ve mağaza eşyası'],
    steps: [
      { title: 'Yük detayını gönderin', description: 'Çıkış ili, varış noktası, yük türü ve yaklaşık miktarı paylaşın.' },
      { title: 'Araç ve fiyatı planlayalım', description: 'Şehir içi veya şehirler arası ihtiyaca uygun seçeneği belirleyelim.' },
      { title: 'Taşımayı gerçekleştirelim', description: 'Belirlenen zamanda alım yapıp yükü güvenli şekilde teslim edelim.' },
    ],
    faqs: [
      { question: 'Antalya’nın hangi ilçelerine hizmet veriyorsunuz?', answer: 'Antalya’nın tüm ilçelerindeki talepleri çıkış-varış ve araç uygunluğuna göre değerlendiriyoruz.' },
      { question: 'Antalya’dan Türkiye’nin her yerine yük taşır mısınız?', answer: 'Evet. Antalya çıkışlı veya varışlı taleplerin yanı sıra Türkiye’nin diğer illeri arasındaki taşımaları da değerlendiriyoruz.' },
      { question: 'Antalya nakliye fiyatı nasıl belirlenir?', answer: 'Mesafe, yükün hacmi ve ağırlığı, kat bilgisi, yükleme koşulları ve gereken araç tipi fiyatı belirler.' },
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
      'Profesyonel evden eve nakliyat ve şehirler arası ev taşıma. Türkiye genelinde uygun fiyat teklifi için Cantalya Nakliye & Lojistik.',
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
