import type { Metadata } from "next";
import Link from "next/link";
import {
  FileSearch,
  PenTool,
  Calculator,
  Package,
  Box,
  TrendingUp,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Hizmetler",
  description:
    "Proje kontrol, çizim revizyon, maliyet optimizasyonu, malzeme danışmanlığı, 3D yorumlama ve yatırımcı danışmanlığı hizmetlerimiz.",
};

const services = [
  {
    icon: FileSearch,
    title: "Proje Kontrol",
    desc: "Projelerinizin mevzuata, standartlara ve teknik detaylara uygunluğunu detaylı olarak inceliyoruz.",
    details: [
      "İmar ve yapı mevzuatına uygunluk kontrolü",
      "Teknik şartname incelemesi",
      "Proje uyumluluk raporu hazırlama",
      "Eksik ve hata tespiti",
    ],
  },
  {
    icon: PenTool,
    title: "Çizim Revizyon",
    desc: "Plan, kesit, görünüş ve detay çizimlerinizi revize ederek en doğru, en verimli hale getiriyoruz.",
    details: [
      "AutoCAD / Revit çizim revizyonu",
      "Ölçü ve detay düzeltmeleri",
      "Proje sunum çizimleri",
      "Uygulama projesi hazırlık desteği",
    ],
  },
  {
    icon: Calculator,
    title: "Maliyet Optimizasyonu",
    desc: "Bütçenizi analiz ediyor, gereksiz maliyetleri tespit ederek projenizi daha verimli hale getiriyoruz.",
    details: [
      "Metraj ve keşif analizi",
      "Alternatif çözüm önerileri",
      "Maliyet karşılaştırma raporları",
      "Bütçe takip ve planlama",
    ],
  },
  {
    icon: Package,
    title: "Malzeme Danışmanlığı",
    desc: "Kaliteli, sürdürülebilir ve bütçeye uygun malzeme seçimi konusunda uzman destek sağlıyoruz.",
    details: [
      "Malzeme performans karşılaştırması",
      "Tedarikçi önerileri ve listeleme",
      "Sürdürülebilir malzeme danışmanlığı",
      "Numune değerlendirme desteği",
    ],
  },
  {
    icon: Box,
    title: "3D Yorumlama",
    desc: "Tasarımlarınızı üç boyutlu olarak değerlendiriyor, karar verme sürecinizi görsel olarak kolaylaştırıyoruz.",
    details: [
      "3D model inceleme ve yorum",
      "Mekan algısı değerlendirmesi",
      "Tasarım alternatifi önerileri",
      "Sunum görseli hazırlama desteği",
    ],
  },
  {
    icon: TrendingUp,
    title: "Yatırımcı Danışmanlığı",
    desc: "Yatırım kararlarınızda fizibilite ve getiri analizleri ile yol gösteriyoruz.",
    details: [
      "Fizibilite raporu hazırlama",
      "Getiri ve maliyet analizi",
      "Pazar araştırması desteği",
      "Yatırım sunum hazırlama",
    ],
  },
];

export default function HizmetlerPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy via-navy-light to-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-orange font-semibold text-sm font-body tracking-wider uppercase mb-3">
              Hizmetlerimiz
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold font-heading text-white mb-6">
              Mimari projeleriniz için{" "}
              <span className="text-orange">kapsamlı destek</span>
            </h1>
            <p className="text-white/70 font-body text-lg leading-relaxed">
              Proje kontrolünden maliyet optimizasyonuna, malzeme danışmanlığından
              3D yorumlamaya kadar her aşamada yanınızdayız.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="bg-orange/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-orange" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy mb-4">
                    {service.title}
                  </h2>
                  <p className="text-navy/60 font-body text-lg leading-relaxed mb-8">
                    {service.desc}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange shrink-0 mt-0.5" />
                        <span className="text-navy/70 font-body">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/iletisim"
                    className="inline-flex items-center gap-2 text-orange font-semibold font-body hover:gap-3 transition-all"
                  >
                    Bu hizmet hakkında bilgi alın <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="bg-gradient-to-br from-navy/5 to-gray-light rounded-3xl aspect-[4/3] flex items-center justify-center">
                    <service.icon className="w-24 h-24 text-navy/10" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-navy mb-6">
            Hangi hizmete ihtiyacınız var?
          </h2>
          <p className="text-navy/60 font-body text-lg mb-10">
            Ücretsiz keşif görüşmesiyle projenizi değerlendirelim.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center bg-orange hover:bg-orange-dark text-white font-semibold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5"
            >
              Ücretsiz Görüşme Al
            </Link>
            <Link
              href="/paketler"
              className="inline-flex items-center justify-center bg-navy hover:bg-navy-light text-white font-semibold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5"
            >
              Paketleri İncele
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
