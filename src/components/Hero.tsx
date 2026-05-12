import Link from "next/link";
import Image from "next/image";
import {
  ClipboardCheck,
  Clock,
  BadgeDollarSign,
  ArrowDown,
} from "lucide-react";

const highlights = [
  {
    icon: ClipboardCheck,
    title: "Uzman Proje Analizi",
    desc: "Projelerinizi detaylı inceliyor, en doğru çözüm önerilerini sunuyoruz.",
  },
  {
    icon: Clock,
    title: "Hızlı Geri Dönüş",
    desc: "Sorularınıza en geç 24 saat içinde geri dönüş sağlıyoruz.",
  },
  {
    icon: BadgeDollarSign,
    title: "Maliyet Odaklı Yaklaşım",
    desc: "Bütçenizi koruyan, verimli ve sürdürülebilir mimari çözümler üretiyoruz.",
  },
];

export default function Hero() {
  return (
    <section className="relative flex flex-col overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Modern mimari bina"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy/85" />
      </div>

      {/* Architectural grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Gradient accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange/[0.07] rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-orange/[0.04] rounded-full blur-[100px]" />

      {/* Architectural decorative lines */}
      <div className="absolute top-40 right-[10%] w-px h-48 bg-gradient-to-b from-transparent via-orange/20 to-transparent" />
      <div className="absolute top-60 right-[10%] w-32 h-px bg-gradient-to-r from-orange/20 to-transparent" />
      <div className="absolute bottom-48 left-[8%] w-px h-32 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-48 left-[8%] w-24 h-px bg-gradient-to-r from-white/10 to-transparent" />

      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 right-[15%] hidden lg:block">
        <div className="w-20 h-20 border border-orange/10 rotate-45" style={{ animation: "float 6s ease-in-out infinite" }} />
      </div>
      <div className="absolute bottom-1/3 right-[25%] hidden lg:block">
        <div className="w-12 h-12 border border-white/[0.06] rotate-12" style={{ animation: "float 8s ease-in-out infinite 1s" }} />
      </div>

      {/* Noise overlay */}
      <div className="absolute inset-0 noise" />

      {/* Main Content */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-20 sm:pb-32 w-full min-h-screen flex flex-col justify-center">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-white/[0.06] backdrop-blur-sm border border-white/[0.08] rounded-full px-4 sm:px-5 py-2 sm:py-2.5 mb-6 sm:mb-10">
              <div className="relative">
                <div className="w-2 h-2 bg-orange rounded-full" />
                <div className="absolute inset-0 w-2 h-2 bg-orange rounded-full" style={{ animation: "pulse-ring 2s ease-out infinite" }} />
              </div>
              <span className="text-white/70 text-sm font-body tracking-wide">
                Abonelik bazlı mimari danışmanlık
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-heading text-white leading-[1.08] mb-8">
              <span className="block text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Firmanızın ihtiyacı olan
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                mimari desteği
              </span>
              <span className="relative inline-block mt-1">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-orange">
                  abonelikle alın.
                </span>
                <span className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-orange to-orange/0" />
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-white/50 font-body font-light leading-relaxed mb-8 sm:mb-12 max-w-xl">
              Proje revizyonu, maliyet optimizasyonu, malzeme danışmanlığı ve
              düzenli toplantı sistemi ile her zaman yanınızdayız.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/iletisim"
                className="group inline-flex items-center justify-center bg-orange text-white font-semibold text-base px-8 py-4 rounded-xl transition-all duration-300 hover:bg-orange-dark hover:shadow-2xl hover:shadow-orange/30 hover:-translate-y-1"
              >
                Ücretsiz 15 Dakikalık Görüşme
                <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/paketler"
                className="inline-flex items-center justify-center bg-white/[0.06] hover:bg-white/[0.12] backdrop-blur-sm border border-white/[0.1] text-white/90 font-semibold text-base px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-1"
              >
                Paketleri İncele
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-32 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-white/20">
          <span className="text-xs font-body tracking-widest uppercase">Keşfet</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </div>
      </div>

      {/* Highlights Bar */}
      <div className="relative z-10 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="glass rounded-2xl p-7 shadow-xl shadow-navy/5 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-orange/10 to-orange/5 p-3.5 rounded-xl shrink-0 group-hover:from-orange/20 group-hover:to-orange/10 transition-all">
                    <item.icon className="w-6 h-6 text-orange" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-navy text-[15px] mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-navy/50 text-sm font-body leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
