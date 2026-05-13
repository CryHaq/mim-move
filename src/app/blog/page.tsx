import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import BlogGrid from "@/components/BlogGrid";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Mimari danışmanlık, maliyet optimizasyonu, malzeme seçimi ve proje yönetimi hakkında güncel yazılar ve rehberler.",
};

const posts = [
  {
    slug: "butceyi-dusuren-7-mimari-karar",
    title: "Bütçeyi %30 Düşüren En Kritik 7 Mimari Karar",
    excerpt:
      "Proje maliyetlerini düşürmek için tasarım aşamasında alınması gereken kritik kararları inceliyoruz. Doğru zamanda doğru kararlar bütçenizi ciddi oranda koruyabilir.",
    readTime: "5 dk",
    category: "Maliyet",
    date: "2026-05-01",
  },
  {
    slug: "malzeme-seciminde-5-buyuk-hata",
    title: "Malzeme Seçiminde Yapılan 5 Büyük Hata",
    excerpt:
      "Yanlış malzeme seçimi projenizin hem bütçesini hem de süresini olumsuz etkiler. İşte en sık yapılan hatalar ve çözümleri.",
    readTime: "4 dk",
    category: "Malzeme",
    date: "2026-04-25",
  },
  {
    slug: "kucuk-isletmeler-icin-mimari-cozumler",
    title: "Küçük İşletmeler İçin Hızlı Mimari Çözümler",
    excerpt:
      "Sınırlı bütçeyle maksimum mimari kalite elde etmenin yollarını paylaşıyoruz. KOBİ'lere özel pratik öneriler.",
    readTime: "6 dk",
    category: "Rehber",
    date: "2026-04-18",
  },
  {
    slug: "proje-revizyonu-nasil-yapilir",
    title: "Proje Revizyonu Nasıl Yapılır?",
    excerpt:
      "Proje revizyonu sürecinde dikkat edilmesi gereken adımlar, kontrol listeleri ve en iyi uygulamalar.",
    readTime: "7 dk",
    category: "Rehber",
    date: "2026-04-10",
  },
  {
    slug: "tedarikci-secerken-dikkat-edilecekler",
    title: "Tedarikçi Seçerken Nelere Dikkat Etmeli?",
    excerpt:
      "Doğru tedarikçi seçimi projenizin başarısını doğrudan etkiler. Seçim sürecinde kritik faktörler ve ipuçları.",
    readTime: "5 dk",
    category: "Malzeme",
    date: "2026-04-02",
  },
  {
    slug: "3d-gorsellestime-neden-onemli",
    title: "3D Görselleştirme Neden Önemli?",
    excerpt:
      "Mimari projelerde 3D görselleştirmenin karar sürecine, müşteri memnuniyetine ve proje kalitesine etkisini keşfedin.",
    readTime: "4 dk",
    category: "Teknoloji",
    date: "2026-03-25",
  },
];

const categories = ["Tümü", "Maliyet", "Malzeme", "Rehber", "Teknoloji"];

export default function BlogPage() {
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="inline-block text-orange font-semibold text-xs font-body tracking-[0.2em] uppercase mb-4">
                — Blog / Kaynak Merkezi
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white tracking-tight mb-6">
                Mimari <span className="text-orange">bilgi kaynağı</span>
              </h1>
              <p className="text-white/50 font-body text-lg leading-relaxed max-w-xl">
                Maliyet optimizasyonu, malzeme seçimi, proje yönetimi ve daha fazlası
                hakkında uzman içerikler.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <BlogGrid posts={posts} categories={categories} />
    </>
  );
}
