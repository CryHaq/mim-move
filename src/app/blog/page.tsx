import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";

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
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy via-navy-light to-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-orange font-semibold text-sm font-body tracking-wider uppercase mb-3">
              Blog / Kaynak Merkezi
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold font-heading text-white mb-6">
              Mimari <span className="text-orange">bilgi kaynağı</span>
            </h1>
            <p className="text-white/70 font-body text-lg leading-relaxed">
              Maliyet optimizasyonu, malzeme seçimi, proje yönetimi ve daha fazlası
              hakkında uzman içerikler.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b border-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 py-4 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-lg text-sm font-body font-medium transition-colors whitespace-nowrap ${
                  cat === "Tümü"
                    ? "bg-navy text-white"
                    : "bg-gray-light text-navy/60 hover:bg-navy/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group rounded-2xl border border-gray/50 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-navy/5 to-gray-light relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 border-2 border-navy/10 rounded-xl rotate-12 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange/10 text-orange text-xs font-bold font-body px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-navy/40 text-xs font-body mb-3">
                    <span>{new Date(post.date).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })}</span>
                    <span>&middot;</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime} okuma
                    </span>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="font-heading font-semibold text-navy text-lg mb-3 group-hover:text-orange transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-navy/60 font-body text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-orange font-semibold text-sm font-body inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    Devamını Oku <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
