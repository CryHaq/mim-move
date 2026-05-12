import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
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
    num: "01",
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
    num: "02",
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
    num: "03",
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
    num: "04",
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
    num: "05",
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
    num: "06",
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
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/services/architecture.jpg" alt="Mimari" fill className="object-cover" />
          <div className="absolute inset-0 bg-navy/90" />
        </div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
        <div className="absolute inset-0 noise" />
        <div className="absolute top-12 right-12 w-16 h-16 hidden lg:block">
          <div className="absolute top-0 right-0 w-full h-px bg-orange/20" />
          <div className="absolute top-0 right-0 h-full w-px bg-orange/20" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="inline-block text-orange font-semibold text-xs font-body tracking-[0.2em] uppercase mb-4">
              — Hizmetlerimiz
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white tracking-tight mb-6">
              Mimari projeleriniz için
              <br />
              <span className="text-orange">kapsamlı destek</span>
            </h1>
            <p className="text-white/50 font-body text-lg leading-relaxed max-w-xl">
              Proje kontrolünden maliyet optimizasyonuna, malzeme danışmanlığından
              3D yorumlamaya kadar her aşamada yanınızdayız.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 sm:py-28 bg-cream relative">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="space-y-16 sm:space-y-28">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  index % 2 === 1 ? "" : ""
                }`}
              >
                <ScrollReveal variant={index % 2 === 0 ? "left" : "right"} className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div>
                    <span className="text-orange/30 font-heading font-bold text-5xl sm:text-7xl leading-none select-none">{service.num}</span>
                    <div className="bg-gradient-to-br from-orange/10 to-transparent w-14 h-14 rounded-xl flex items-center justify-center mt-4 mb-6">
                      <service.icon className="w-7 h-7 text-orange" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy tracking-tight mb-4">
                      {service.title}
                    </h2>
                    <p className="text-navy/50 font-body text-lg leading-relaxed mb-8">
                      {service.desc}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-3 group/item">
                          <CheckCircle className="w-5 h-5 text-orange shrink-0 mt-0.5" />
                          <span className="text-navy/60 font-body group-hover/item:text-navy transition-colors">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/iletisim"
                      className="inline-flex items-center gap-2 text-orange font-semibold font-body hover:gap-3 transition-all group"
                    >
                      Bu hizmet hakkında bilgi alın <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </ScrollReveal>
                <ScrollReveal variant={index % 2 === 0 ? "right" : "left"} className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative bg-white rounded-3xl border border-navy/[0.06] aspect-[4/3] flex items-center justify-center overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-navy/[0.02] to-orange/[0.02]" />
                    <service.icon className="w-24 h-24 text-navy/[0.06] group-hover:text-orange/[0.08] transition-colors duration-500" />
                    {/* Corner accent */}
                    <div className="absolute top-6 right-6 w-10 h-10">
                      <div className="absolute top-0 right-0 w-full h-px bg-orange/20" />
                      <div className="absolute top-0 right-0 h-full w-px bg-orange/20" />
                    </div>
                    <div className="absolute bottom-6 left-6 w-10 h-10">
                      <div className="absolute bottom-0 left-0 w-full h-px bg-navy/[0.06]" />
                      <div className="absolute bottom-0 left-0 h-full w-px bg-navy/[0.06]" />
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-28 bg-navy relative overflow-hidden noise">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
        <div className="absolute top-0 right-[20%] w-[400px] h-[400px] bg-orange/[0.05] rounded-full blur-[120px]" />
        <ScrollReveal>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <span className="inline-block text-orange/60 text-xs font-body tracking-[0.2em] uppercase mb-6">— Hemen Başlayın</span>
            <h2 className="text-4xl sm:text-5xl font-bold font-heading text-white tracking-tight mb-6">
              Hangi hizmete ihtiyacınız var?
            </h2>
            <p className="text-white/40 font-body text-lg mb-12">
              Ücretsiz keşif görüşmesiyle projenizi değerlendirelim.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/iletisim" className="group inline-flex items-center justify-center bg-orange hover:bg-orange-dark text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange/30">
                Ücretsiz Görüşme Al <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/paketler" className="inline-flex items-center justify-center bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.08] text-white/80 font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-1">
                Paketleri İncele
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
