import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import ProcessTimeline from "@/components/ProcessTimeline";
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

const reasons = [
  { icon: Award, title: "10+ Yıllık Tecrübe", desc: "Farklı ölçeklerde birçok proje ve uygulama deneyimi." },
  { icon: Building2, title: "Çeşitli Sektör Deneyimi", desc: "Konut, ofis, restoran, villa, ticari mekan ve daha fazlası." },
  { icon: PiggyBank, title: "Maliyet ve Zaman Avantajı", desc: "Doğru planlama ile bütçenizi koruyor, zaman kazandırıyoruz." },
  { icon: Headphones, title: "Sürekli İletişim", desc: "Her adımda yanınızda olarak süreci şeffaf yönetiyoruz." },
];

const projects = [
  { title: "Ofis Projesi", location: "İstanbul", category: "Ticari", image: "/images/projects/ofis.jpg" },
  { title: "Restoran Tasarımı", location: "İzmir", category: "Hospitality", image: "/images/projects/restoran.jpg" },
  { title: "Villa Projesi", location: "Bodrum", category: "Konut", image: "/images/projects/villa.jpg" },
  { title: "Mağaza Tasarımı", location: "Ankara", category: "Ticari", image: "/images/projects/magaza.jpg" },
];

export default function HakkimizdaPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/about-hero.jpg" alt="Mimari" fill className="object-cover" />
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
              — Hakkımızda
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white tracking-tight mb-6">
              Mimari danışmanlığın
              <br />
              <span className="text-orange">yeni nesil</span> adresi
            </h1>
            <p className="text-white/50 font-body text-lg leading-relaxed max-w-xl">
              Mim+Move olarak, mimar arayan firmaları tek seferlik ücret derdi
              olmadan, aylık abonelikle hızlı, güvenilir ve uzman danışmanlık
              hizmetine ulaştırıyoruz.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32">
          <div className="bg-navy rounded-3xl p-10 lg:p-14 relative overflow-hidden noise">
            <div className="absolute top-0 right-0 w-48 h-48 bg-orange/10 rounded-full blur-[80px]" />
            <div className="absolute top-6 right-6 w-8 h-8">
              <div className="absolute top-0 right-0 w-full h-px bg-orange/30" />
              <div className="absolute top-0 right-0 h-full w-px bg-orange/30" />
            </div>
            <div className="relative">
              <AnimatedCounter
                stats={[
                  { value: 10, suffix: "+", label: "Yıllık Deneyim" },
                  { value: 200, suffix: "+", label: "Tamamlanan Proje" },
                  { value: 50, suffix: "+", label: "Aktif Müşteri" },
                  { value: 98, prefix: "%", suffix: "", label: "Müşteri Memnuniyeti" },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Misyon & Vizyon */}
      <section className="py-28 bg-cream relative">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-orange font-semibold text-xs font-body tracking-[0.2em] uppercase mb-4">— Kim Biz?</span>
              <h2 className="text-4xl sm:text-5xl font-bold font-heading text-navy tracking-tight">Misyon & Vizyon</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal variant="left">
              <div className="bg-white border border-navy/[0.06] rounded-3xl p-10 h-full hover:shadow-xl hover:shadow-navy/[0.03] transition-all duration-500">
                <div className="bg-gradient-to-br from-orange/10 to-transparent w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-orange" />
                </div>
                <h2 className="text-2xl font-bold font-heading text-navy mb-4">Misyonumuz</h2>
                <p className="text-navy/50 font-body leading-relaxed">
                  Mimar arayan firmaları, tek seferlik ücret derdi olmadan, aylık
                  abonelikle hızlı, güvenilir ve uzman danışmanlık hizmetine
                  ulaştırmak. Mimari danışmanlığı erişilebilir ve sürdürülebilir
                  kılmak.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal variant="right">
              <div className="bg-white border border-navy/[0.06] rounded-3xl p-10 h-full hover:shadow-xl hover:shadow-navy/[0.03] transition-all duration-500">
                <div className="bg-gradient-to-br from-orange/10 to-transparent w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-orange" />
                </div>
                <h2 className="text-2xl font-bold font-heading text-navy mb-4">Vizyonumuz</h2>
                <p className="text-navy/50 font-body leading-relaxed">
                  Türkiye&apos;nin lider abonelik bazlı mimari danışmanlık platformu olmak.
                  Her ölçekte firmaya profesyonel mimari destek sunarak sektörde
                  standartları yükseltmek.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Neden Biz */}
      <section className="py-28 bg-white relative">
        <div className="absolute inset-0 blueprint-dots" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-orange font-semibold text-xs font-body tracking-[0.2em] uppercase mb-4">— Avantajlarımız</span>
              <h2 className="text-4xl sm:text-5xl font-bold font-heading text-navy tracking-tight">Neden Mim+Move?</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r, i) => (
              <ScrollReveal key={r.title} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
                <div className="bg-cream border border-navy/[0.06] rounded-2xl p-8 text-center hover:shadow-xl hover:shadow-orange/[0.04] hover:-translate-y-1.5 transition-all duration-500 h-full">
                  <div className="bg-white border border-navy/[0.06] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <r.icon className="w-7 h-7 text-orange" />
                  </div>
                  <h3 className="font-heading font-semibold text-navy text-lg mb-3">{r.title}</h3>
                  <p className="text-navy/50 font-body text-sm leading-relaxed">{r.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Müşteri Akışı */}
      <section className="py-28 bg-cream relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <ScrollReveal variant="left">
                <span className="inline-block text-orange font-semibold text-xs font-body tracking-[0.2em] uppercase mb-4">— Nasıl Çalışıyoruz?</span>
                <h2 className="text-4xl sm:text-5xl font-bold font-heading text-navy tracking-tight mb-6">
                  Müşteri Akış
                  <br />
                  <span className="text-orange">Süreci</span>
                </h2>
                <p className="text-navy/50 font-body text-lg leading-relaxed mb-8">
                  Başvurudan danışmanlık sürecine kadar her adımda şeffaf ve
                  sistematik bir yaklaşım izliyoruz.
                </p>
              </ScrollReveal>
              <ProcessTimeline />
            </div>
            <ScrollReveal variant="right">
              <div className="relative">
                <div className="bg-navy rounded-3xl p-10 text-white relative overflow-hidden noise">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-orange/10 rounded-full blur-[80px]" />
                  <div className="absolute top-6 right-6 w-8 h-8">
                    <div className="absolute top-0 right-0 w-full h-px bg-orange/30" />
                    <div className="absolute top-0 right-0 h-full w-px bg-orange/30" />
                  </div>
                  <div className="relative">
                    <span className="text-orange/60 text-xs font-body tracking-[0.2em] uppercase">Hedef Kitlemiz</span>
                    <h3 className="font-heading font-bold text-xl mt-2 mb-8">Kimler İçin Uygun?</h3>
                    <ul className="space-y-4">
                      {["İnşaat firmaları","Gayrimenkul geliştiricileri","İç mimarlık ofisleri","Tadilat yapan işletmeler","Kentsel dönüşüm danışmanları","Proje optimizasyonu isteyen KOBİ'ler"].map((item) => (
                        <li key={item} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 bg-orange rounded-full shrink-0" />
                          <span className="text-white/60 font-body text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Referans Projeler */}
      <section className="py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-orange font-semibold text-xs font-body tracking-[0.2em] uppercase mb-4">— Portföyümüz</span>
              <h2 className="text-4xl sm:text-5xl font-bold font-heading text-navy tracking-tight">Referans Projelerimiz</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {projects.map((project, i) => (
              <ScrollReveal key={project.title} variant="scale" delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
                <div className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer">
                  <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                    <div className="w-full h-full border border-white/[0.2] rounded-lg" />
                  </div>
                  <div className="absolute top-5 left-5 z-10">
                    <span className="bg-black/30 backdrop-blur-sm text-white/90 text-[11px] font-body font-semibold px-3 py-1 rounded-full tracking-wider uppercase">{project.category}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <h3 className="font-heading font-bold text-white text-xl tracking-tight">{project.title}</h3>
                    <div className="flex items-center gap-1.5 mt-2 text-white/70 text-sm font-body">
                      <MapPin className="w-3.5 h-3.5" />{project.location}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-navy relative overflow-hidden noise">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
        <div className="absolute top-0 right-[20%] w-[400px] h-[400px] bg-orange/[0.05] rounded-full blur-[120px]" />
        <div className="absolute top-12 left-12 w-16 h-16 hidden lg:block">
          <div className="absolute top-0 left-0 w-full h-px bg-white/[0.06]" />
          <div className="absolute top-0 left-0 h-full w-px bg-white/[0.06]" />
        </div>
        <div className="absolute bottom-12 right-12 w-16 h-16 hidden lg:block">
          <div className="absolute bottom-0 right-0 w-full h-px bg-orange/20" />
          <div className="absolute bottom-0 right-0 h-full w-px bg-orange/20" />
        </div>
        <ScrollReveal>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <span className="inline-block text-orange/60 text-xs font-body tracking-[0.2em] uppercase mb-6">— Hemen Başlayın</span>
            <h2 className="text-4xl sm:text-5xl font-bold font-heading text-white tracking-tight mb-6">
              Birlikte çalışmaya
              <br />
              <span className="text-orange">hazır mısınız?</span>
            </h2>
            <p className="text-white/40 font-body text-lg mb-12">
              15 dakikalık ücretsiz keşif görüşmesiyle tanışalım.
            </p>
            <Link href="/iletisim" className="group inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange/30">
              Ücretsiz Görüşme Al <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
