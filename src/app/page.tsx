import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import ScrollReveal from "@/components/ScrollReveal";
import Marquee from "@/components/Marquee";
import AnimatedCounter from "@/components/AnimatedCounter";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import ProcessTimeline from "@/components/ProcessTimeline";
import TextReveal from "@/components/TextReveal";
import {
  FileSearch,
  PenTool,
  Calculator,
  Package,
  Box,
  TrendingUp,
  Check,
  ArrowRight,
  Award,
  Building2,
  PiggyBank,
  Headphones,
  Clock,
  MapPin,
} from "lucide-react";

const services = [
  { icon: FileSearch, title: "Proje Kontrol", desc: "Projelerinizin mevzuata ve standartlara uygunluğunu inceliyoruz.", num: "01" },
  { icon: PenTool, title: "Çizim Revizyon", desc: "Plan, kesit ve detay çizimlerinizi revize ederek en doğru hale getiriyoruz.", num: "02" },
  { icon: Calculator, title: "Maliyet Optimizasyonu", desc: "Bütçenizi analiz ediyor, gereksiz maliyetleri ortadan kaldırıyoruz.", num: "03" },
  { icon: Package, title: "Malzeme Danışmanlığı", desc: "Kaliteli ve bütçeye uygun malzeme seçimi konusunda destek oluyoruz.", num: "04" },
  { icon: Box, title: "3D Yorumlama", desc: "Tasarımlarınızı 3D olarak değerlendiriyor, karar sürecinizi kolaylaştırıyoruz.", num: "05" },
  { icon: TrendingUp, title: "Yatırımcı Danışmanlığı", desc: "Fizibilite ve getiri analizleri ile yol gösteriyoruz.", num: "06" },
];

const plans = [
  {
    name: "Başlangıç",
    price: "1.999",
    popular: false,
    features: ["Aylık 2 online görüşme", "Proje inceleme (PDF/DWG)", "Malzeme önerisi"],
  },
  {
    name: "Profesyonel",
    price: "4.999",
    popular: true,
    features: ["Aylık 4 toplantı", "2 revizyon çalışma", "Maliyet optimizasyon raporu"],
  },
  {
    name: "Premium",
    price: "9.999",
    popular: false,
    features: ["Sınırsız soru-cevap", "Haftalık proje yönetimi", "Özel WhatsApp hattı"],
  },
];

const reasons = [
  { icon: Award, title: "10+ Yıllık Tecrübe", desc: "Farklı ölçeklerde birçok proje deneyimi." },
  { icon: Building2, title: "Çeşitli Sektör Deneyimi", desc: "Konut, ofis, restoran, villa ve daha fazlası." },
  { icon: PiggyBank, title: "Maliyet Avantajı", desc: "Doğru planlama ile bütçenizi koruyoruz." },
  { icon: Headphones, title: "Sürekli İletişim", desc: "Her adımda yanınızda, şeffaf yönetim." },
];

const projects = [
  { title: "Ofis Projesi", location: "İstanbul", category: "Ticari", image: "/images/projects/ofis.jpg" },
  { title: "Restoran Tasarımı", location: "İzmir", category: "Hospitality", image: "/images/projects/restoran.jpg" },
  { title: "Villa Projesi", location: "Bodrum", category: "Konut", image: "/images/projects/villa.jpg" },
  { title: "Mağaza Tasarımı", location: "Ankara", category: "Perakende", image: "/images/projects/magaza.jpg" },
];

const posts = [
  { title: "Bütçeyi %30 Düşüren En Kritik 7 Mimari Karar", readTime: "5 dk", category: "Maliyet", slug: "butceyi-dusuren-7-mimari-karar", image: "/images/blog/maliyet.jpg" },
  { title: "Malzeme Seçiminde Yapılan 5 Büyük Hata", readTime: "4 dk", category: "Malzeme", slug: "malzeme-seciminde-5-buyuk-hata", image: "/images/blog/malzeme.jpg" },
  { title: "Küçük İşletmeler İçin Hızlı Mimari Çözümler", readTime: "6 dk", category: "Rehber", slug: "kucuk-isletmeler-icin-mimari-cozumler", image: "/images/blog/rehber.jpg" },
];

const marqueeItems = [
  "Proje Kontrol", "Çizim Revizyon", "Maliyet Optimizasyonu", "Malzeme Danışmanlığı",
  "3D Yorumlama", "Yatırımcı Danışmanlığı", "Fizibilite Analizi", "Süreç Yönetimi",
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* ─── Marquee Trust Bar ─── */}
      <section className="relative z-10 pt-16 pb-16 bg-cream overflow-hidden">
        <div className="arch-line-h w-full mb-12" />
        <Marquee items={marqueeItems} speed={35} separator="dot" />
        <div className="mt-6">
          <Marquee items={[...marqueeItems].reverse()} speed={40} reverse separator="diamond" />
        </div>
        <div className="arch-line-h w-full mt-12" />
      </section>

      {/* ─── Hizmetler ─── */}
      <section className="py-28 bg-cream relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange/[0.02] rounded-full blur-[100px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-20">
              <div>
                <span className="inline-block text-orange font-semibold text-xs font-body tracking-[0.2em] uppercase mb-4">
                  — Neler Yapıyoruz
                </span>
                <h2 className="text-4xl sm:text-5xl font-bold font-heading text-navy tracking-tight">
                  Hizmetlerimiz
                </h2>
              </div>
              <Link
                href="/hizmetler"
                className="mt-6 lg:mt-0 inline-flex items-center gap-2 text-orange font-semibold font-body hover:gap-3 transition-all group"
              >
                Tüm Hizmetleri İncele
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={Math.min(i + 1, 6) as 1 | 2 | 3 | 4 | 5 | 6}>
                <div className="group relative p-8 rounded-2xl bg-white border border-navy/[0.06] hover:border-orange/20 transition-all duration-500 hover:shadow-xl hover:shadow-orange/[0.04] hover:-translate-y-1.5 h-full">
                  {/* Number accent */}
                  <span className="absolute top-6 right-6 text-[80px] font-heading font-bold leading-none text-navy/[0.03] group-hover:text-orange/[0.06] transition-colors select-none">
                    {service.num}
                  </span>
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange/10 to-transparent flex items-center justify-center mb-6 group-hover:from-orange/20 transition-all">
                      <service.icon className="w-6 h-6 text-orange" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl text-navy mb-3 group-hover:text-orange transition-colors">
                      {service.title}
                    </h3>
                    <p className="font-body text-navy/50 leading-relaxed text-[15px]">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Paketler ─── */}
      <section className="py-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0 blueprint-dots" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal>
            <div className="text-center mb-20">
              <span className="inline-block text-orange font-semibold text-xs font-body tracking-[0.2em] uppercase mb-4">
                — Size Uygun Plan
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold font-heading text-navy tracking-tight mb-4">
                Abonelik Paketlerimiz
              </h2>
              <p className="text-navy/50 font-body max-w-xl mx-auto">
                İhtiyacınıza en uygun paketi seçin, hemen başlayalım.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {plans.map((plan, i) => (
              <ScrollReveal key={plan.name} delay={Math.min(i + 1, 3) as 1 | 2 | 3}>
                <div
                  className={`relative rounded-2xl p-8 lg:p-10 flex flex-col transition-all duration-500 hover:-translate-y-2 h-full ${
                    plan.popular
                      ? "bg-navy text-white shadow-2xl shadow-navy/30 md:scale-[1.03]"
                      : "bg-cream border border-navy/[0.06]"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3.5 left-8">
                      <span className="bg-orange text-white text-[11px] font-bold font-body px-4 py-1.5 rounded-full uppercase tracking-widest">
                        Popüler
                      </span>
                    </div>
                  )}

                  <div className="mb-8">
                    <h3 className={`font-heading font-bold text-xl mb-1 ${plan.popular ? "text-white" : "text-navy"}`}>
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline gap-1 mt-4">
                      <span className={`text-5xl font-bold font-heading tracking-tight ${plan.popular ? "text-white" : "text-navy"}`}>
                        {plan.price}
                      </span>
                      <span className={`text-base font-body ${plan.popular ? "text-white/40" : "text-navy/40"}`}>
                        TL / ay
                      </span>
                    </div>
                  </div>

                  <div className={`w-full h-px mb-8 ${plan.popular ? "bg-white/10" : "bg-navy/[0.06]"}`} />

                  <ul className="space-y-4 mb-10 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.popular ? "bg-orange" : "bg-orange/10"}`}>
                          <Check className={`w-3 h-3 ${plan.popular ? "text-white" : "text-orange"}`} />
                        </div>
                        <span className={`text-sm font-body ${plan.popular ? "text-white/80" : "text-navy/60"}`}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/paketler"
                    className={`block text-center font-semibold font-body py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5 ${
                      plan.popular
                        ? "bg-orange hover:bg-orange-dark text-white hover:shadow-lg hover:shadow-orange/30"
                        : "bg-navy/[0.04] hover:bg-navy text-navy hover:text-white"
                    }`}
                  >
                    Detaylı İncele
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-14">
              <Link
                href="/paketler"
                className="inline-flex items-center gap-2 text-orange font-semibold font-body hover:gap-3 transition-all group"
              >
                Paketleri Karşılaştır
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Neden Biz ─── */}
      <section className="py-28 bg-cream relative overflow-hidden">
        <div className="absolute top-20 left-0 w-px h-40 bg-gradient-to-b from-transparent via-orange/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-7">
              <ScrollReveal variant="left">
                <span className="inline-block text-orange font-semibold text-xs font-body tracking-[0.2em] uppercase mb-4">
                  — Neden Biz?
                </span>
                <h2 className="text-4xl sm:text-5xl font-bold font-heading text-navy tracking-tight mb-6 leading-[1.1]">
                  Mimari projeleriniz için
                  <br />
                  <span className="text-orange">güvenilir partner</span>
                </h2>
                <p className="text-navy/50 font-body text-lg leading-relaxed mb-12 max-w-lg">
                  Mim+Move olarak, firmanızın mimari ihtiyaçlarını tam zamanlı mimar
                  maliyeti olmadan karşılıyoruz.
                </p>
              </ScrollReveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {reasons.map((reason, i) => (
                  <ScrollReveal key={reason.title} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
                    <div className="flex items-start gap-4 group">
                      <div className="bg-white border border-navy/[0.06] p-3 rounded-xl shrink-0 group-hover:border-orange/20 group-hover:shadow-lg group-hover:shadow-orange/[0.05] transition-all">
                        <reason.icon className="w-5 h-5 text-orange" />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-navy text-[15px] mb-1">{reason.title}</h4>
                        <p className="text-sm text-navy/50 font-body leading-relaxed">{reason.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal>
                <div className="mt-12">
                  <Link
                    href="/hakkimizda"
                    className="group inline-flex items-center gap-3 bg-navy hover:bg-navy-light text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-navy/20"
                  >
                    Hikayemizi Keşfet
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5">
              <ScrollReveal variant="right">
                <div className="relative">
                  {/* Stats card */}
                  <div className="bg-navy rounded-3xl p-10 text-white relative overflow-hidden noise">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-orange/10 rounded-full blur-[80px]" />
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-orange/5 rounded-full blur-[60px]" />

                    {/* Architectural corner accent */}
                    <div className="absolute top-6 right-6 w-8 h-8">
                      <div className="absolute top-0 right-0 w-full h-px bg-orange/30" />
                      <div className="absolute top-0 right-0 h-full w-px bg-orange/30" />
                    </div>
                    <div className="absolute bottom-6 left-6 w-8 h-8">
                      <div className="absolute bottom-0 left-0 w-full h-px bg-white/10" />
                      <div className="absolute bottom-0 left-0 h-full w-px bg-white/10" />
                    </div>

                    <div className="relative">
                      <span className="text-orange/60 text-xs font-body tracking-[0.2em] uppercase">Rakamlarla</span>
                      <h3 className="font-heading font-bold text-2xl mt-1 mb-10">Mim+Move</h3>
                      <AnimatedCounter
                        stats={[
                          { value: 10, suffix: "+", label: "Yıllık Deneyim" },
                          { value: 200, suffix: "+", label: "Tamamlanan Proje" },
                          { value: 50, suffix: "+", label: "Aktif Müşteri" },
                          { value: 98, prefix: "%", suffix: "", label: "Memnuniyet" },
                        ]}
                      />
                    </div>
                  </div>

                  {/* Floating accent card */}
                  <div className="absolute -bottom-6 -left-6 glass-dark rounded-xl px-5 py-3 hidden lg:flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full" />
                    <span className="text-white text-sm font-body">Şu an aktif danışmanlık veriyoruz</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Referans Projeler ─── */}
      <section className="py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16">
              <div>
                <span className="inline-block text-orange font-semibold text-xs font-body tracking-[0.2em] uppercase mb-4">
                  — Portföyümüz
                </span>
                <h2 className="text-4xl sm:text-5xl font-bold font-heading text-navy tracking-tight">
                  Referans Projelerimiz
                </h2>
              </div>
              <Link href="/hakkimizda" className="mt-6 sm:mt-0 inline-flex items-center gap-2 text-orange font-semibold font-body hover:gap-3 transition-all group">
                Tüm Projeler <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {projects.map((project, i) => (
              <ScrollReveal key={project.title} variant="scale" delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
                <div className="group relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Architectural accent lines */}
                  <div className="absolute inset-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                    <div className="w-full h-full border border-white/[0.2] rounded-lg" />
                  </div>

                  {/* Category tag */}
                  <div className="absolute top-5 left-5 z-10">
                    <span className="bg-black/30 backdrop-blur-sm text-white/90 text-[11px] font-body font-semibold px-3 py-1 rounded-full tracking-wider uppercase">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <h3 className="font-heading font-bold text-white text-xl tracking-tight group-hover:translate-y-0 translate-y-2 transition-transform duration-500">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1.5 mt-2 text-white/70 text-sm font-body">
                      <MapPin className="w-3.5 h-3.5" />
                      {project.location}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Blog ─── */}
      <section className="py-28 bg-cream relative">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16">
              <div>
                <span className="inline-block text-orange font-semibold text-xs font-body tracking-[0.2em] uppercase mb-4">
                  — Blog / Kaynak Merkezi
                </span>
                <h2 className="text-4xl sm:text-5xl font-bold font-heading text-navy tracking-tight">
                  Güncel Yazılar
                </h2>
              </div>
              <Link href="/blog" className="mt-6 sm:mt-0 inline-flex items-center gap-2 text-orange font-semibold font-body hover:gap-3 transition-all group">
                Tüm Yazılar <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <ScrollReveal key={post.title} delay={Math.min(i + 1, 3) as 1 | 2 | 3}>
                <article className="group rounded-2xl bg-white border border-navy/[0.06] overflow-hidden hover:shadow-xl hover:shadow-navy/[0.04] hover:-translate-y-1.5 transition-all duration-500 h-full flex flex-col">
                  <div className="h-52 relative overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-white/90 backdrop-blur-sm text-orange text-[11px] font-bold font-body px-3 py-1 rounded-full tracking-wider">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <Link href={`/blog/${post.slug}`}>
                      <h3 className="font-heading font-semibold text-navy text-lg tracking-tight mb-4 group-hover:text-orange transition-colors leading-snug">
                        {post.title}
                      </h3>
                    </Link>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-navy/[0.04]">
                      <div className="flex items-center gap-1.5 text-navy/30 text-xs font-body">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime} okuma
                      </div>
                      <Link href={`/blog/${post.slug}`} className="text-orange font-semibold text-sm font-body inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        Oku <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials + Process ─── */}
      <section className="py-28 bg-navy relative overflow-hidden noise">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="absolute top-0 left-[30%] w-[400px] h-[400px] bg-orange/[0.04] rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Testimonials */}
            <div>
              <div>
                <span className="inline-block text-orange/60 text-xs font-body tracking-[0.2em] uppercase mb-4">
                  — Müşterilerimiz Ne Diyor?
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight mb-12">
                  <TextReveal text="Güvene dayalı ilişkiler kuruyoruz" className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight" />
                </h2>
              </div>
              <TestimonialCarousel />
            </div>

            {/* Process Timeline */}
            <div>
              <div>
                <span className="inline-block text-orange/60 text-xs font-body tracking-[0.2em] uppercase mb-4">
                  — Nasıl Çalışıyoruz?
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight mb-12">
                  4 adımda başlayın
                </h2>
              </div>
              <ProcessTimeline />
            </div>
          </div>
        </div>
        {/* Bottom separator */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative mt-20">
          <div className="h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section className="py-28 bg-gradient-to-b from-navy-dark to-navy relative overflow-hidden noise">
        {/* Architectural grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="absolute top-0 right-[20%] w-[500px] h-[500px] bg-orange/[0.06] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-[10%] w-[300px] h-[300px] bg-orange/[0.03] rounded-full blur-[80px]" />

        {/* Corner accents */}
        <div className="absolute top-12 left-12 w-16 h-16 hidden lg:block">
          <div className="absolute top-0 left-0 w-full h-px bg-white/[0.08]" />
          <div className="absolute top-0 left-0 h-full w-px bg-white/[0.08]" />
        </div>
        <div className="absolute bottom-12 right-12 w-16 h-16 hidden lg:block">
          <div className="absolute bottom-0 right-0 w-full h-px bg-orange/20" />
          <div className="absolute bottom-0 right-0 h-full w-px bg-orange/20" />
        </div>

        <ScrollReveal>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <span className="inline-block text-orange/60 text-xs font-body tracking-[0.2em] uppercase mb-6">
              — Hemen Başlayın
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold font-heading text-white tracking-tight mb-6 leading-[1.1]">
              Projeniz için doğru adımı
              <br />
              <span className="text-orange">şimdi atın</span>
            </h2>
            <p className="text-white/40 font-body text-lg mb-12 max-w-lg mx-auto">
              15 dakikalık ücretsiz keşif görüşmesiyle ihtiyaçlarınızı anlayalım ve
              size en uygun çözümü birlikte belirleyelim.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/iletisim"
                className="group inline-flex items-center justify-center bg-orange hover:bg-orange-dark text-white font-semibold text-base px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-orange/30 hover:-translate-y-1"
              >
                Ücretsiz Görüşme Al
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/paketler"
                className="inline-flex items-center justify-center bg-white/[0.06] hover:bg-white/[0.12] border border-white/[0.08] text-white/80 font-semibold text-base px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-1"
              >
                Paketleri İncele
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
