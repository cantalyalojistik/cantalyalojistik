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
  localDistricts?: string[];
  details?: { heading: string; intro: string; items: Array<{ title: string; description: string }> };
  relatedServices?: Array<{ slug: string; label: string }>;
  quoteIntro?: string;
  quoteTitle?: string;
  quoteLabel?: string;
  whatsAppMessage?: string;
};

const antalyaDistricts = ['Konyaaltı', 'Muratpaşa', 'Kepez', 'Döşemealtı', 'Aksu', 'Serik'];

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
    eyebrow: 'Antalya şehir içi ve şehirler arası ev taşıma',
    title: 'Antalya Şehir İçi ve Şehirler Arası Profesyonel Evden Eve Nakliyat',
    metaTitle: 'Antalya Evden Eve Nakliyat | Cantalya Nakliye & Lojistik',
    description:
      'Antalya şehir içi ve şehirler arası profesyonel evden eve nakliyat. Ücretsiz keşif, asansörlü taşıma, ambalajlama ve mobilya sökme-kurma için teklif alın.',
    lead:
      'Evinizi Antalya içinde veya Türkiye genelinde şehirler arasında doğru araç ve profesyonel ekibimizle taşıyoruz. Konyaaltı, Muratpaşa, Kepez, Döşemealtı, Aksu ve Serik dahil alım ve varış adreslerinize göre ücretsiz keşif, ambalajlama, mobilya sökme-kurma ve asansör ihtiyacını baştan planlıyoruz.',
    highlights: ['Ücretsiz keşif', 'Ambalajlama ve mobilya montajı', 'Asansörlü taşıma seçeneği'],
    idealFor: ['Şehir içi ve şehirler arası ev taşıma', 'Daire ve müstakil ev taşımaları', 'Bina ve site içi taşınma', 'Ambalajlı ev eşyası taşıma', 'Mobilya sökme ve kurma', 'Az eşyalı veya komple ev taşımaları'],
    localDistricts: antalyaDistricts,
    quoteIntro: 'Taşınma tarihinizi, iki konumu, oda sayısını ve katları paylaşın. Ücretsiz yerinde keşif veya WhatsApp’tan fotoğraflarla teklif kapsamını netleştirelim.',
    quoteTitle: 'Evinizi taşımadan önce ücretsiz keşif ve net teklif alın.',
    quoteLabel: 'Ücretsiz keşif isteyin',
    whatsAppMessage: 'Merhaba Cantalya Nakliye & Lojistik, evden eve nakliyat için ücretsiz keşif ve fiyat teklifi almak istiyorum. Çıkış-varış il ve ilçelerini, eşya bilgilerini ve tarihi paylaşabilirim.',
    details: {
      heading: 'Ev taşıma teklifinde neleri birlikte netleştiriyoruz?',
      intro: 'Taşıma planı yalnızca araçtan ibaret değil. Eşyanın hazırlanmasından yeni evde yerleşimine kadar ihtiyaç duyduğunuz hizmetleri teklif sırasında ayrı ayrı konuşuyoruz.',
      items: [
        { title: 'Ambalajlama ve eşya hazırlığı', description: 'Mobilya, beyaz eşya ve hassas eşyalarınız için uygun koruma ve ambalajlama planlanır. Hangi eşyaların sizin tarafınızdan hazırlanacağı keşifte netleştirilir.' },
        { title: 'Mobilya sökme ve kurma', description: 'Gardırop, yatak ve sökülmesi gereken mobilyalar taşıma öncesi değerlendirilir. Sökme-kurma işlerinin kapsamı ve yeni adresteki yerleşim ihtiyacı teklife dahil edilir.' },
        { title: 'Asansör ve bina erişimi', description: 'Katlar, bina asansörü, merdivenler ve dış cephe erişimi kontrol edilir. Taşıma asansörü kullanılacaksa uygun kurulum alanı ve çalışma koşulları önceden değerlendirilir.' },
        { title: 'Sigortalı taşıma', description: 'Sigortalı taşıma hizmeti sunuyoruz. Taşınacak eşya ile poliçenin teminat, limit ve istisnalarını taşıma öncesinde birlikte netleştiriyoruz.' },
      ],
    },
    relatedServices: [
      { slug: 'asansorlu-evden-eve-nakliyat', label: 'Antalya asansörlü evden eve nakliyat' },
      { slug: 'antalya-parca-esya-tasima', label: 'Antalya şehir içi parça eşya taşıma' },
      { slug: 'sehirler-arasi-nakliye', label: 'Şehirler arası taşıma seçenekleri' },
    ],
    steps: [
      { title: 'Ücretsiz keşif yapalım', description: 'Yerinde keşif veya WhatsApp’tan fotoğraf ve görüntülerle eşya miktarını, katları ve bina erişimini değerlendirelim.' },
      { title: 'Kapsamı ve fiyatı netleştirelim', description: 'Araç, ekip, ambalajlama, mobilya montajı, asansör ve sigorta detaylarını taşıma tarihinden önce birlikte belirleyelim.' },
      { title: 'Planlanan günde taşıyalım', description: 'Eşyaları hazırlayıp yükleme, taşıma ve kararlaştırılan kurulum işlerini belirlenen planla tamamlayalım.' },
    ],
    faqs: [
      { question: 'Antalya evden eve nakliyat fiyatları nasıl belirlenir?', answer: 'Oda sayısının yanında eşya hacmi, iki adres arasındaki mesafe, katlar, bina erişimi, taşıma tarihi ve ambalajlama, montaj veya asansör ihtiyacı fiyatı etkiler. Keşif sonrası kapsamı net bir teklif sunarız; herkese aynı sabit fiyat uygulanmaz.' },
      { question: 'Ücretsiz keşif için eve geliyor musunuz?', answer: 'Evet, yerinde ücretsiz keşif yapıyoruz. İsterseniz WhatsApp’tan fotoğraf veya görüntü paylaşarak da ilk değerlendirmeyi alabilirsiniz. Randevu ve gerekebilecek ek inceleme birlikte planlanır.' },
      { question: 'Hangi Antalya ilçelerinde ev taşıyorsunuz?', answer: 'Konyaaltı, Muratpaşa, Kepez, Döşemealtı, Aksu ve Serik dahil Antalya genelinde hizmet sunuyoruz. Hizmetimiz bu ilçelerle sınırlı değil; alım ve varış adreslerinize göre taşıma planı ve teklif hazırlıyoruz.' },
      { question: 'Ambalajlama ve mobilya sökme-kurma dahil mi?', answer: 'Bu hizmetleri sunuyoruz. Hangi eşyaların ambalajlanacağı ve hangi mobilyaların sökülüp kurulacağı keşifte belirlenir; teklifin kapsamı taşıma öncesinde açıkça paylaşılır.' },
      { question: 'Taşıma sigortası her hasarı karşılar mı?', answer: 'Sigortalı taşıma hizmetimiz var; ancak teminatlar, limitler ve istisnalar poliçeye bağlıdır. Eşyanıza uygun kapsamı taşıma öncesinde birlikte kontrol edip netleştiririz.' },
      { question: 'Yalnızca birkaç parça eşya taşıtabilir miyim?', answer: 'Evet. Koltuk, beyaz eşya, yatak veya birkaç parça mobilya için Antalya şehir içi parça eşya hizmetimizi kullanabilirsiniz; komple ev taşıtmanız gerekmez.' },
      { question: 'Şehirler arası ev taşıma hizmeti devam ediyor mu?', answer: 'Evet. Antalya şehir içi taşımaların yanında Türkiye genelinde şehirler arası profesyonel evden eve nakliyat hizmeti sunuyoruz. Çıkış ve varış illerini, tarihi ve eşya miktarını paylaşın; araç, ekip ve taşıma kapsamını birlikte netleştirelim.' },
    ],
  },
  'antalya-parca-esya-tasima': {
    slug: 'antalya-parca-esya-tasima',
    eyebrow: 'Koltuk, beyaz eşya ve az eşya için küçük nakliye',
    title: 'Antalya Şehir İçi Parça Eşya Taşıma',
    metaTitle: 'Antalya Parça Eşya Taşıma ve Küçük Nakliye | Cantalya',
    description:
      'Antalya genelinde parça eşya taşıma: koltuk, buzdolabı, beyaz eşya ve küçük nakliye. Aksu, Serik ve diğer Antalya ilçeleri için hızlı teklif alın.',
    lead:
      'Komple bir ev taşınmasa da nakliyeye ihtiyaç olur. İki parça mobilya, yeni aldığınız koltuk veya başka bir adrese gidecek beyaz eşyanız için Konyaaltı, Muratpaşa, Kepez, Döşemealtı, Aksu ve Serik dahil Antalya genelinde eşyanıza uygun araç ve ekip planlıyoruz.',
    highlights: ['Tek veya birkaç parça eşya', 'Eşyaya uygun araç ve ekip', 'Fotoğrafla hızlı teklif'],
    idealFor: ['Koltuk ve koltuk takımı taşıma', 'Buzdolabı ve çamaşır makinesi', 'Yatak, baza ve gardırop', 'İkinci el mobilya teslimatı', 'Öğrenci ve az eşyalı ev taşımaları', 'Mağazadan veya başka evden eşya alımı'],
    localDistricts: antalyaDistricts,
    quoteIntro: 'Eşyanın fotoğrafını, adedini, alınacağı ve bırakılacağı ilçeleri, katları ve taşıma tarihini paylaşın. Yalnızca araç mı yoksa taşıma ekibi ve montaj da mı gerektiğini birlikte belirleyelim.',
    quoteTitle: 'Az eşyanız için doğru aracı ve taşıma fiyatını öğrenin.',
    quoteLabel: 'Eşya fotoğrafıyla teklif alın',
    whatsAppMessage: 'Merhaba Cantalya Nakliye & Lojistik, Antalya şehir içi parça eşya taşıma için fiyat almak istiyorum. Eşya fotoğraflarını, alınacak ve bırakılacak konumları, katları ve tarihi paylaşacağım.',
    details: {
      heading: 'Birkaç parça eşya için nasıl bir taşıma gerekiyor?',
      intro: 'Küçük nakliyede fiyatı yalnızca eşya adedi belirlemez. Eşyanın boyutu, taşıma mesafesi ve evden araca kadar olan erişim aynı derecede önemlidir.',
      items: [
        { title: 'Koltuk, yatak ve mobilya', description: 'Koltuk, baza, yatak veya gardırop için ölçü ve fotoğraf paylaşın. Kapı ve merdiven geçişleriyle sökme-kurma ihtiyacını önceden değerlendirelim.' },
        { title: 'Beyaz eşya taşıma', description: 'Buzdolabı, çamaşır makinesi ve diğer beyaz eşyalarda boyut, ağırlık, kat ve bina asansörü bilgisiyle ekip ve araç ihtiyacını belirleyelim.' },
        { title: 'İkinci el eşya ve mağaza teslimatı', description: 'Satıcıdan veya mağazadan aldığınız eşyayı yeni adresine taşıyabiliriz. Alım saati, satıcıyla buluşma ve yükleme koşullarını taşıma öncesi birlikte netleştirelim.' },
        { title: 'Araç, işçilik ve ambalaj kapsamı', description: 'Teklifte yükleme-boşaltma, ambalajlama ve gerekiyorsa mobilya sökme-kurma işlerini açıkça belirleriz. Araç seçimi eşya adedinin yanında ölçü ve toplam hacme göre yapılır.' },
      ],
    },
    relatedServices: [
      { slug: 'evden-eve-nakliyat', label: 'Antalya komple evden eve nakliyat' },
      { slug: 'asansorlu-evden-eve-nakliyat', label: 'Asansörlü eşya taşıma seçeneği' },
      { slug: 'parca-esya-tasima', label: 'Şehirler arası parça eşya taşıma' },
    ],
    steps: [
      { title: 'Eşyanızı gösterin', description: 'Fotoğraf, adet ve varsa ölçüleri WhatsApp’tan gönderin. Koltuk, beyaz eşya veya mobilya türünü belirtin.' },
      { title: 'İki konumu ve katları paylaşın', description: 'Alınacak ve bırakılacak yerleri, katları, asansör durumunu, tarihi ve taşıma ekibi ihtiyacını bildirin.' },
      { title: 'Teklifi netleştirip taşıyalım', description: 'Araç, işçilik, ambalaj ve gerekiyorsa montaj kapsamını belirleyelim; uygun gün ve saatte taşımayı planlayalım.' },
    ],
    faqs: [
      { question: 'Antalya’da tek koltuk veya iki parça eşya taşır mısınız?', answer: 'Evet. Tek koltuk, bir beyaz eşya ya da iki-üç parça mobilya için teklif alabilirsiniz. Araç ve ekip, eşyanın boyutu ile yükleme koşullarına göre belirlenir.' },
      { question: 'Antalya şehir içi küçük nakliye fiyatı neye göre değişir?', answer: 'Eşyanın hacmi ve ağırlığı, adresler arası mesafe, katlar, asansör, araç yanaşma mesafesi ve gereken işçilik fiyatı etkiler. Fotoğraf ve konum bilgisiyle ihtiyacınıza özel teklif veririz.' },
      { question: 'Buzdolabı veya çamaşır makinesi taşıyor musunuz?', answer: 'Evet. Beyaz eşya taşımaları için eşyanın türünü, ölçüsünü, katları ve bina asansörü bilgisini paylaşmanız yeterli. Taşıma öncesi hazırlık ve yükleme koşullarını birlikte konuşuruz.' },
      { question: 'İkinci el aldığım mobilyayı satıcıdan alabilir misiniz?', answer: 'Evet. İkinci el satıcıdan, mağazadan veya başka bir evden alım planlayabiliriz. Eşyanın hazır olması, alım saati ve iki adresteki erişim bilgileri önceden netleştirilir.' },
      { question: 'Yükleme-boşaltma ve sökme-kurma fiyata dahil mi?', answer: 'Bu hizmetleri sunuyoruz; her talepte gereken işçilik farklıdır. Yalnızca araç talebiyle ekipli taşıma aynı değildir. Hangi işlerin dahil olduğunu teklif sırasında açıkça belirtiriz.' },
      { question: 'Aynı gün küçük nakliye yapılabilir mi?', answer: 'Araç, ekip ve saat uygunluğuna bağlıdır. Acil talebinizi eşya fotoğrafı ve konumlarla iletin; uygun saat ve araç kontrolünden sonra size net bilgi paylaşalım.' },
      { question: 'Şehir dışına parça eşya gönderimi de var mı?', answer: 'Evet, mevcut Türkiye geneli parça eşya hizmetimiz devam ediyor. Bu sayfa Antalya şehir içi taşıma içindir; şehirler arası gönderi için ayrıca çıkış-varış ilini ve tarihi paylaşın.' },
    ],
  },
  'asansorlu-evden-eve-nakliyat': {
    slug: 'asansorlu-evden-eve-nakliyat',
    eyebrow: 'Antalya’da binaya uygun taşıma planı',
    title: 'Antalya Asansörlü Evden Eve Nakliyat',
    metaTitle: 'Antalya Asansörlü Evden Eve Nakliyat | Cantalya',
    description:
      'Antalya asansörlü evden eve nakliyat. Ücretsiz keşifle bina erişimini ve asansör ihtiyacını değerlendirin; ambalajlı ev taşıma için teklif alın.',
    lead:
      'Konyaaltı, Muratpaşa, Kepez, Döşemealtı, Aksu ve Serik dahil Antalya genelinde ev eşyalarınızın taşınmasını bina ve sokak koşullarına göre planlıyoruz. Dış cephe taşıma asansörünün uygunluğunu ücretsiz keşifte değerlendirip araç, ekip ve ambalajlama ihtiyacını birlikte belirliyoruz.',
    highlights: ['Ücretsiz yerinde keşif', 'Bina ve erişim değerlendirmesi', 'Ambalajlama ve montaj planı'],
    idealFor: ['Yüksek katlardan ev taşıma', 'Merdiven geçişi dar olan binalar', 'Büyük ve hacimli mobilyalar', 'Bina asansörü yetersiz olan taşınmalar', 'Komple ev eşyası taşıma', 'Uygun cepheden parça eşya taşıma'],
    localDistricts: antalyaDistricts,
    quoteIntro: 'Katları, binanın dış cephe fotoğrafını, araç kurulabilecek alanı ve taşınacak eşya bilgisini paylaşın. Yerinde ücretsiz keşifle asansör kullanımının uygunluğunu değerlendirelim.',
    quoteTitle: 'Asansör ihtiyacını ücretsiz keşifte netleştirelim.',
    quoteLabel: 'Ücretsiz keşif isteyin',
    whatsAppMessage: 'Merhaba Cantalya Nakliye & Lojistik, Antalya asansörlü evden eve nakliyat için ücretsiz keşif ve teklif almak istiyorum. Kat, bina erişimi ve eşya bilgilerini paylaşabilirim.',
    details: {
      heading: 'Asansörlü taşıma her binaya uygun mu?',
      intro: 'Yalnızca kat sayısına bakarak asansörlü taşıma kararı vermiyoruz. Güvenli kurulum ve eşyanın geçeceği alan keşifte birlikte değerlendirilir.',
      items: [
        { title: 'Araç kurulacak alan', description: 'Sokak genişliği, park alanı, zemin ve binaya yaklaşma mesafesi kontrol edilir. Gerekli alanın taşıma gününde kullanılabilir olması planlanır.' },
        { title: 'Cephe ve eşya geçişi', description: 'Balkon veya pencere erişimi, eşya ölçüleri ve çevredeki engeller değerlendirilir. Binanız ve eşyanız için uygun taşıma yöntemi keşif sonunda belirlenir.' },
        { title: 'Bina ve site koordinasyonu', description: 'Yönetimle taşıma saati, ortak alan kullanımı ve gerekiyorsa alınacak izinler önceden netleştirilir. Eşyanın araca taşınacağı yol da planın parçasıdır.' },
        { title: 'Eşyaya uygun hazırlık', description: 'Asansör kullanılması ambalajlama ve montaj ihtiyacını ortadan kaldırmaz. Mobilyaların korunması, sökülmesi ve yeni evde kurulması gereken işler ayrıca belirlenir.' },
      ],
    },
    relatedServices: [
      { slug: 'evden-eve-nakliyat', label: 'Antalya evden eve nakliyat hizmeti' },
      { slug: 'antalya-parca-esya-tasima', label: 'Antalya az eşya ve küçük nakliye' },
      { slug: 'sehirler-arasi-nakliye', label: 'Şehirler arası taşıma seçenekleri' },
    ],
    steps: [
      { title: 'Binayı ve eşyayı inceleyelim', description: 'Yerinde ücretsiz keşifle kat, cephe, kurulum alanı ve taşınacak eşyanın geçiş koşullarını değerlendirelim.' },
      { title: 'Taşıma yöntemini belirleyelim', description: 'Asansörün uygunluğunu, ekip ihtiyacını, ambalajlama ve mobilya montajı kapsamını netleştirip teklif sunalım.' },
      { title: 'Günü ve çalışma alanını hazırlayalım', description: 'Taşıma saati ve gerekli bina/site koordinasyonunu planlayarak kararlaştırılan kapsamda taşımayı tamamlayalım.' },
    ],
    faqs: [
      { question: 'Asansörlü evden eve nakliyat fiyatı nasıl hesaplanır?', answer: 'Eşya miktarı, kat, kurulum alanı, iki adres arasındaki mesafe ve gereken araç-ekip süresi değerlendirilir. Asansörün bir veya iki adreste kullanılması da planı etkiler. Keşif sonrası kapsamı net bir fiyat verilir.' },
      { question: 'Her binada taşıma asansörü kullanılabilir mi?', answer: 'Hayır. Uygun kurulum alanı, cephe erişimi, çevredeki engeller ve eşyanın geçişi incelenmelidir. Uygunluk ücretsiz keşifte netleşir; uygun değilse alternatif taşıma yöntemi değerlendirilir.' },
      { question: 'Bina asansörü varken dış cephe asansörü gerekir mi?', answer: 'Her zaman gerekmez. Bina asansörünün kapasitesi, eşyanın ölçüleri ve bina kullanım koşulları dikkate alınır. Gereksiz bir hizmet önermek yerine taşıma ihtiyacına uygun yöntem planlanır.' },
      { question: 'Tek parça büyük mobilya için de kullanılır mı?', answer: 'Evet, eşya ve bina koşulları uygun olduğunda parça eşya taşımasında da değerlendirilebilir. Fotoğraf, ölçü ve kat bilgisiyle teklif isteyebilirsiniz.' },
      { question: 'Ambalajlama, montaj ve sigorta hizmeti var mı?', answer: 'Ambalajlama, mobilya sökme-kurma ve sigortalı taşıma hizmetleri sunuyoruz. Hangi işlemlerin dahil olduğu ile poliçe teminat ve istisnaları taşıma öncesinde açıkça belirlenir.' },
      { question: 'Hangi ilçeler için keşif isteyebilirim?', answer: 'Aksu ve Serik dahil Antalya genelindeki taşınmalar için ücretsiz keşif talep edebilirsiniz; hizmetimiz listedeki ilçelerle sınırlı değildir. İki adres ve uygun olduğunuz tarih üzerinden randevu planlanır.' },
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
