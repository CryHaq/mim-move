import type { Metadata } from "next";
import Link from "next/link";
import {
  Award,
  Building2,
  PiggyBank,
  Headphones,
  MapPin,
  ArrowRight,
  Target,
  Eye,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Mim+Move Mimari Danışmanlık hakkında. 10+ yıllık deneyim, 200+ tamamlanan proje ve %98 müşteri memnuniyeti.",
};

const stats = [
  { val: "10+", label: "Yıllık Deneyim" },
  { val: "200+", label: "Tamamlanan Proje" },
  { val: "50+", label: "Aktif Müşteri" },
  { val: "%98", label: "Müşteri Memnuniyeti" },
];

const reasons = [
  { icon: Award, title: "10+ Yıllık Tecrübe", desc: "Farklı ölçeklerde birçok proje ve uygulama deneyimi." },
  { icon: Building2, title: "Çeşitli Sektör Deneyimi", desc: "Konut, ofis, restoran, villa, ticari mekan ve daha fazlası." },
  { icon: PiggyBank, title: "Maliyet ve Zaman Avantajı", desc: "Doğru planlama ile bütçenizi koruyor, zaman kazandırıyoruz." },
  { icon: Headphones, title: "Sürekli İletişim", desc: "Her adımda yanınızda olarak süreci şeffaf yönetiyoruz." },
];

const projects = [
  { title: "Ofis Projesi", location: "İstanbul", category: "Ticari", color: "from-navy/80 to-navy" },
  { title: "Restoran Tasarımı", location: "İzmir", category: "Hospitality", color: "from-orange/80 to-orange-dark" },
  { title: "Villa Projesi", location: "Bodrum", category: "Konut", color: "from-navy-light/80 to-navy" },
  { title: "Mağaza Tasarımı", location: "Ankara", category: "Ticari", color: "from-navy/70 to-navy-dark" },
];

const steps = [
  { num: "1", title: "Siteye Ziyaret", desc: "Firma sitemize gelir." },
  { num: "2", title: "Paketleri İnceleme", desc: "İhtiyacına uygun paketi seçer." },
  { num: "3", title: "Ücretsiz Görüşme", desc: "15 dakikalık keşif görüşmesi yapılır." },
  { num: "4", title: "Paket Seçimi", desc: "Firma doğru pakete yönlendirilir." },
  { num: "5", title: "Ödeme & Abonelik", desc: "Online ödeme ile abonelik başlatılır." },
  { num: "6", title: "Proje Yükleme", desc: "Proje dosyaları (Drive/Notion) yüklenir." },
  { num: "7", title: "Danışmanlık Süreci", desc: "Toplantılar ve destek süreci başlar." },
  { num: "8", title: "Sürekli Destek", desc: "Firma memnun kalır, aboneliği uzatır." },
];

export default function HakkimizdaPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy via-navy-light to-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-orange font-semibold text-sm font-body tracking-wider uppercase mb-3">
              Hakkımızda
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold font-heading text-white mb-6">
              Mimari danışmanlığın{" "}
              <span className="text-orange">yeni nesil</span> adresi
            </h1>
            <p className="text-white/70 font-body text-lg leading-relaxed">
              Mim+Move olarak, mimar arayan firmaları tek seferlik ücret derdi
              olmadan, aylık abonelikle hızlı, güvenilir ve uzman danışmanlık
              hizmetine ulaştırıyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-28">
          <div className="bg-navy rounded-3xl p-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold font-heading text-orange mb-2">{s.val}</div>
                <div className="text-white/60 font-body text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Misyon & Vizyon */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-light rounded-3xl p-10">
              <div className="bg-orange/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-orange" />
              </div>
              <h2 className="text-2xl font-bold font-heading text-navy mb-4">Misyonumuz</h2>
              <p className="text-navy/60 font-body leading-relaxed">
                Mimar arayan firmaları, tek seferlik ücret derdi olmadan, aylık
                abonelikle hızlı, güvenilir ve uzman danışmanlık hizmetine
                ulaştırmak. Mimari danışmanlığı erişilebilir ve sürdürülebilir
                kılmak.
              </p>
            </div>
            <div className="bg-gray-light rounded-3xl p-10">
              <div className="bg-orange/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-orange" />
              </div>
              <h2 className="text-2xl font-bold font-heading text-navy mb-4">Vizyonumuz</h2>
              <p className="text-navy/60 font-body leading-relaxed">
                Türkiye&apos;nin lider abonelik bazlı mimari danışmanlık platformu olmak.
                Her ölçekte firmaya profesyonel mimari destek sunarak sektörde
                standartları yükseltmek.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Neden Biz */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-orange font-semibold text-sm font-body tracking-wider uppercase mb-3">
              Avantajlarımız
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-navy">
              Neden Mim+Move?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((r) => (
              <div key={r.title} className="bg-white rounded-2xl p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="bg-orange/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <r.icon className="w-8 h-8 text-orange" />
                </div>
                <h3 className="font-heading font-semibold text-navy text-lg mb-3">{r.title}</h3>
                <p className="text-navy/60 font-body text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Müşteri Akışı */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-orange font-semibold text-sm font-body tracking-wider uppercase mb-3">
              Nasıl Çalışıyoruz?
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-navy">
              Müşteri Akış Süreci
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="relative">
                <div className="bg-gray-light rounded-2xl p-6 h-full">
                  <div className="w-10 h-10 bg-orange text-white font-bold font-heading rounded-full flex items-center justify-center text-sm mb-4">
                    {step.num}
                  </div>
                  <h4 className="font-heading font-semibold text-navy mb-2">{step.title}</h4>
                  <p className="text-navy/60 font-body text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Referans Projeler */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-orange font-semibold text-sm font-body tracking-wider uppercase mb-3">
              Portföyümüz
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-navy">
              Referans Projelerimiz
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project) => (
              <div key={project.title} className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color}`} />
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-8 left-8 right-8 h-px bg-white" />
                  <div className="absolute top-8 left-8 w-px h-20 bg-white" />
                </div>
                <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <span className="text-orange text-xs font-body font-semibold uppercase tracking-wider">{project.category}</span>
                  <h3 className="font-heading font-bold text-white text-xl mt-1">{project.title}</h3>
                  <div className="flex items-center gap-1 mt-2 text-white/70 text-sm font-body">
                    <MapPin className="w-3.5 h-3.5" />
                    {project.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange/10 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-6">
            Birlikte çalışmaya <span className="text-orange">hazır mısınız?</span>
          </h2>
          <p className="text-white/60 font-body text-lg mb-10">
            15 dakikalık ücretsiz keşif görüşmesiyle tanışalım.
          </p>
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-semibold px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5"
          >
            Ücretsiz Görüşme Al <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
