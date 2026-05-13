import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowLeft, Clock, Calendar, ArrowRight } from "lucide-react";

const posts: Record<string, { title: string; category: string; date: string; readTime: string; content: string[] }> = {
  "butceyi-dusuren-7-mimari-karar": {
    title: "Bütçeyi %30 Düşüren En Kritik 7 Mimari Karar",
    category: "Maliyet",
    date: "2026-05-01",
    readTime: "5 dk",
    content: [
      "Mimari projelerde bütçe aşımı en sık karşılaşılan sorunlardan biridir. Ancak doğru zamanda doğru kararlar alarak maliyetlerinizi ciddi oranda düşürebilirsiniz.",
      "1. Tasarım Aşamasında Maliyet Analizi: Projenin en başında maliyet analizi yapılması, ilerleyen aşamalarda ortaya çıkacak sürpriz maliyetlerin önüne geçer.",
      "2. Modüler Tasarım Yaklaşımı: Standart ölçülerde malzeme kullanımı, fire oranını düşürür ve işçilik maliyetlerini azaltır.",
      "3. Malzeme Alternatifleri: Her zaman en pahalı malzeme en iyi sonucu vermez. Performans/fiyat oranı yüksek alternatifleri değerlendirin.",
      "4. Enerji Verimliliği: İlk yatırım maliyeti daha yüksek olsa da, enerji verimli çözümler uzun vadede ciddi tasarruf sağlar.",
      "5. Doğru Tedarikçi Seçimi: Toplu alım indirimleri ve güvenilir tedarikçi ilişkileri maliyetleri %10-15 düşürebilir.",
      "6. Proje Revizyonu: İnşaat başlamadan önce detaylı bir revizyon, sahada karşılaşılacak sorunları minimize eder.",
      "7. Profesyonel Danışmanlık: Uzman bir mimari danışman, tecrübesinden yola çıkarak maliyetleri optimize eder.",
    ],
  },
  "malzeme-seciminde-5-buyuk-hata": {
    title: "Malzeme Seçiminde Yapılan 5 Büyük Hata",
    category: "Malzeme",
    date: "2026-04-25",
    readTime: "4 dk",
    content: [
      "Malzeme seçimi, bir mimari projenin hem estetiğini hem de bütçesini doğrudan etkiler. İşte en sık yapılan hatalar.",
      "1. Sadece Fiyata Bakarak Karar Vermek: En ucuz malzeme uzun vadede en pahalıya mal olabilir. Dayanıklılık ve bakım maliyetlerini göz ardı etmeyin.",
      "2. Numune İncelememek: Katalog görselleri yanıltıcı olabilir. Malzemeyi mutlaka fiziksel olarak inceleyin.",
      "3. İklim Koşullarını Göz Ardı Etmek: Her malzeme her iklimde aynı performansı göstermez. Bölgesel koşulları mutlaka değerlendirin.",
      "4. Tedarik Süresini Hesaplamamak: Uzun tedarik süreli malzemeler proje takviminizi bozabilir. Alternatif planlarınız olsun.",
      "5. Sürdürülebilirliği Görmezden Gelmek: Çevre dostu malzemeler hem maliyet avantajı hem de marka değeri sağlar.",
    ],
  },
  "kucuk-isletmeler-icin-mimari-cozumler": {
    title: "Küçük İşletmeler İçin Hızlı Mimari Çözümler",
    category: "Rehber",
    date: "2026-04-18",
    readTime: "6 dk",
    content: [
      "Küçük işletmeler genellikle mimari danışmanlık hizmetlerini lüks olarak görür. Oysa doğru yaklaşımla, sınırlı bütçeyle bile profesyonel sonuçlar elde etmek mümkündür.",
      "Neden Küçük İşletmeler Mimari Desteğe İhtiyaç Duyar? Müşteri deneyimi, marka algısı ve operasyonel verimlilik doğrudan mekan tasarımıyla ilgilidir. Kötü planlanmış bir mağaza veya ofis, hem çalışan verimliliğini hem de müşteri memnuniyetini düşürür.",
      "1. Önceliklendirme Yapın: Her şeyi bir anda yapmak zorunda değilsiniz. Müşterinin ilk gördüğü alanları — giriş, vitrin, karşılama alanı — öncelikli olarak ele alın.",
      "2. Modüler ve Esnek Tasarım: İşletmeniz büyüdükçe mekanınız da uyum sağlamalı. Sabit duvarlar yerine hareketli bölücüler ve modüler mobilyalar tercih edin.",
      "3. Aydınlatma ile Fark Yaratın: Mekan tasarımında en düşük maliyetle en büyük etkiyi aydınlatma değişiklikleri yaratır. Doğru ışık planlaması mekanınızı tamamen dönüştürebilir.",
      "4. Renk Psikolojisini Kullanın: Renk seçimleri müşteri davranışını doğrudan etkiler. Sıcak tonlar yeme-içme mekanlarında, soğuk tonlar ise ofis ortamlarında daha etkilidir.",
      "5. Dijital Araçlardan Faydalanın: 3D modelleme ve sanal turlar, fiziksel değişiklik yapmadan önce sonucu görmenizi sağlar. Bu da hatalı kararların ve gereksiz maliyetlerin önüne geçer.",
      "6. Abonelik Bazlı Danışmanlık: Tek seferlik büyük yatırımlar yerine, aylık abonelik modeliyle düzenli mimari destek almak küçük işletmeler için çok daha sürdürülebilir bir çözümdür.",
    ],
  },
  "proje-revizyonu-nasil-yapilir": {
    title: "Proje Revizyonu Nasıl Yapılır?",
    category: "Rehber",
    date: "2026-04-10",
    readTime: "7 dk",
    content: [
      "Proje revizyonu, bir mimari projenin inşaat öncesinde veya sırasında gözden geçirilip iyileştirilmesi sürecidir. Doğru yapıldığında hem zamandan hem de bütçeden ciddi tasarruf sağlar.",
      "Proje Revizyonu Neden Gerekli? İlk çizimler ne kadar detaylı olursa olsun, uygulama aşamasında karşılaşılacak sorunları tamamen öngörmek imkansızdır. Revizyon, bu sorunları sahaya inmeden tespit etmeyi sağlar.",
      "1. Mevcut Projeyi Detaylı İnceleyin: Revizyon sürecinin ilk adımı, mevcut projenin tüm bileşenlerini — plan, kesit, görünüş, detay çizimleri — titizlikle incelemektir. Eksik veya çelişkili bilgileri not alın.",
      "2. Mevzuat Uyumluluğunu Kontrol Edin: İmar planı, yapı yönetmelikleri ve yerel mevzuata uygunluk mutlaka kontrol edilmelidir. Mevzuat dışı bir detay, ilerleyen aşamalarda ciddi sorunlara yol açabilir.",
      "3. Maliyet Etkisini Değerlendirin: Her revizyon kararının bir maliyet etkisi vardır. Değişikliklerin bütçeye olan etkisini önceden hesaplayın ve alternatifler sunun.",
      "4. Disiplinler Arası Koordinasyon: Mimari, mekanik, elektrik ve statik projeler birbiriyle uyumlu olmalıdır. Revizyon sürecinde tüm disiplinlerin koordineli çalışması kritiktir.",
      "5. Revizyon Takip Sistemi Kurun: Her değişikliği kayıt altına alın. Revizyon numaraları, tarihler ve açıklamalar sistematik olarak tutulmalıdır. Bu, sahada karışıklıkların önüne geçer.",
      "6. Müşteri Onayını Alın: Revizyon sürecinde müşterinin bilgilendirilmesi ve onayının alınması, ilerleyen aşamalarda anlaşmazlıkların önlenmesi için zorunludur.",
      "7. Revizyon Sonrası Kontrol: Son revizyon tamamlandıktan sonra, tüm projenin bir bütün olarak tekrar kontrol edilmesi gerekir. Parça parça yapılan düzeltmeler bazen yeni çelişkiler doğurabilir.",
    ],
  },
  "tedarikci-secerken-dikkat-edilecekler": {
    title: "Tedarikçi Seçerken Nelere Dikkat Etmeli?",
    category: "Malzeme",
    date: "2026-04-02",
    readTime: "5 dk",
    content: [
      "Doğru tedarikçi seçimi, mimari projenizin kalitesini, zamanlamasını ve bütçesini doğrudan etkileyen stratejik bir karardır. Yanlış bir tercih, tüm projeyi riske atabilir.",
      "1. Referans ve Portföy İncelemesi: Tedarikçinin daha önce teslim ettiği projeleri inceleyin. Benzer ölçekte ve türde projelerde deneyimi olup olmadığını değerlendirin.",
      "2. Kalite Sertifikaları: ISO belgeleri, TSE onayları ve uluslararası kalite standartlarına uygunluk, tedarikçi güvenilirliğinin en önemli göstergelerindendir.",
      "3. Teslimat Güvenilirliği: Zamanında teslimat, proje takviminin korunması için kritiktir. Tedarikçinin geçmiş performansını ve lojistik kapasitesini değerlendirin.",
      "4. Fiyat-Kalite Dengesi: En ucuz teklif her zaman en iyi teklif değildir. Toplam sahip olma maliyetini hesaplayın — malzeme kalitesi, garanti süresi ve satış sonrası destek de denklemin parçasıdır.",
      "5. İletişim ve Esneklik: Projelerde değişiklikler kaçınılmazdır. Tedarikçinin iletişim kalitesi ve değişen koşullara uyum sağlama kapasitesi çok önemlidir.",
      "6. Stok ve Kapasite Durumu: Büyük projelerde tedarikçinin stok kapasitesi ve üretim hızı belirleyici olabilir. Özellikle özel üretim malzemelerde bu faktörü mutlaka değerlendirin.",
      "7. Uzun Vadeli İlişki Potansiyeli: Tek seferlik alımlar yerine uzun vadeli tedarikçi ilişkileri kurmak, hem fiyat avantajı hem de öncelikli hizmet sağlar.",
    ],
  },
  "3d-gorsellestime-neden-onemli": {
    title: "3D Görselleştirme Neden Önemli?",
    category: "Teknoloji",
    date: "2026-03-25",
    readTime: "4 dk",
    content: [
      "3D görselleştirme, mimari projelerde artık bir lüks değil, bir zorunluluk haline geldi. Hem tasarım sürecinde hem de müşteri iletişiminde kritik bir rol oynuyor.",
      "Geleneksel 2D Çizimlerden Farkı: 2D planlar teknik bilgi sunar ancak mekanı 'hissetme' imkanı vermez. 3D görselleştirme, mekanı inşa edilmeden önce deneyimlemenizi sağlar.",
      "1. Karar Sürecini Hızlandırır: Müşteriler 3D görseller üzerinden çok daha hızlı ve isabetli kararlar verir. 'Şurayı böyle yapsak nasıl olur?' sorusunun cevabı anında görselleştirilebilir.",
      "2. Hataları Erkenden Yakalar: 3D modelleme sırasında, 2D çizimlerde fark edilmeyen mekansal sorunlar ortaya çıkar — düşük tavan yükseklikleri, dar geçişler, oransal uyumsuzluklar gibi.",
      "3. Malzeme ve Renk Denemesi: Farklı malzeme ve renk kombinasyonlarını sanal ortamda deneyerek, fiziksel numune maliyeti ve zamanından tasarruf edersiniz.",
      "4. Pazarlama ve Satış Aracı: Gayrimenkul projelerinde 3D görselleştirmeler, inşaat başlamadan önce satış sürecini başlatmanıza olanak tanır. Potansiyel alıcılar mekanı görmeden karar verebilir.",
      "5. Paydaş İletişimi: Proje sahipleri, müteahhitler ve tasarımcılar arasındaki iletişimi güçlendirir. Herkes aynı vizyonu paylaşır, yanlış anlaşılmalar minimize olur.",
      "6. Maliyet Kontrolü: 3D modelde yapılan değişikliklerin maliyeti sıfıra yakındır. Sahada yapılan değişiklikler ise hem pahalı hem de zaman alıcıdır. Erken aşamada 3D ile deneyimlemek, sahada sürprizleri önler.",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: "Yazı Bulunamadı" };
  return { title: post.title, description: post.content[0] };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    return (
      <section className="pt-40 pb-24 bg-cream min-h-screen">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold font-heading text-navy mb-4">Yazı Bulunamadı</h1>
          <Link href="/blog" className="text-orange font-semibold">Blog&apos;a Dön</Link>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="absolute inset-0 noise" />
        <div className="absolute top-12 right-12 w-16 h-16 hidden lg:block">
          <div className="absolute top-0 right-0 w-full h-px bg-orange/20" />
          <div className="absolute top-0 right-0 h-full w-px bg-orange/20" />
        </div>

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <Link href="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-white font-body text-sm mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Blog&apos;a Dön
            </Link>
            <span className="inline-block bg-orange/20 text-orange text-xs font-bold font-body px-3 py-1 rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight mb-6">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-white/50 text-sm font-body">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime} okuma
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-28 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <article className="prose prose-lg max-w-none">
              {post.content.map((para, i) => (
                <p key={i} className="text-navy/70 font-body text-lg leading-relaxed mb-6">
                  {para}
                </p>
              ))}
            </article>
          </ScrollReveal>

          <div className="arch-line-h mt-16 mb-16" />

          <ScrollReveal delay={200}>
            <div className="bg-white border border-navy/[0.06] rounded-2xl p-8 text-center">
              <h3 className="font-heading font-bold text-navy text-xl mb-3">
                Bu konuda desteğe mi ihtiyacınız var?
              </h3>
              <p className="text-navy/60 font-body mb-6">
                Ücretsiz keşif görüşmesiyle projenizi değerlendirelim.
              </p>
              <Link
                href="/iletisim"
                className="inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-semibold px-6 py-3 rounded-xl transition-all"
              >
                Ücretsiz Görüşme Al <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
