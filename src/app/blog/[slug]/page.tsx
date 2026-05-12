import type { Metadata } from "next";
import Link from "next/link";
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
      <section className="pt-32 pb-20 bg-white min-h-screen">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold font-heading text-navy mb-4">Yazı Bulunamadı</h1>
          <Link href="/blog" className="text-orange font-semibold">Blog&apos;a Dön</Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy via-navy-light to-navy">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/60 hover:text-white font-body text-sm mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Blog&apos;a Dön
          </Link>
          <span className="inline-block bg-orange/20 text-orange text-xs font-bold font-body px-3 py-1 rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-6">
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
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none">
            {post.content.map((para, i) => (
              <p key={i} className="text-navy/70 font-body text-lg leading-relaxed mb-6">
                {para}
              </p>
            ))}
          </article>

          <div className="mt-16 pt-8 border-t border-gray">
            <div className="bg-gray-light rounded-2xl p-8 text-center">
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
          </div>
        </div>
      </section>
    </>
  );
}
