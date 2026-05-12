import type { Metadata } from "next";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Mim+Move Mimari Danışmanlık ile iletişime geçin. Ücretsiz 15 dakikalık keşif görüşmesi alın.",
};

export default function IletisimPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-40 pb-24 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
        <div className="absolute inset-0 noise" />
        <div className="absolute top-12 right-12 w-16 h-16 hidden lg:block">
          <div className="absolute top-0 right-0 w-full h-px bg-orange/20" />
          <div className="absolute top-0 right-0 h-full w-px bg-orange/20" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="inline-block text-orange font-semibold text-xs font-body tracking-[0.2em] uppercase mb-4">
                — İletişim
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white tracking-tight mb-6">
                Projenizi <span className="text-orange">konuşalım</span>
              </h1>
              <p className="text-white/70 font-body text-lg leading-relaxed">
                Ücretsiz 15 dakikalık keşif görüşmesiyle ihtiyaçlarınızı anlayalım ve
                size en uygun çözümü birlikte belirleyelim.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Content */}
      <section className="relative py-28 bg-cream overflow-hidden">
        <div className="absolute inset-0 blueprint-dots opacity-50" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left - Info */}
            <ScrollReveal variant="left">
              <div>
                <h2 className="text-2xl font-bold font-heading text-navy mb-8">
                  Bize Ulaşın
                </h2>

                <div className="space-y-6 mb-12">
                  <div className="flex items-center gap-4 p-4 bg-white border border-navy/[0.06] rounded-2xl">
                    <div className="bg-orange/10 p-3 rounded-xl shrink-0">
                      <Phone className="w-6 h-6 text-orange" />
                    </div>
                    <div>
                      <div className="text-sm text-navy/50 font-body">WhatsApp</div>
                      <div className="font-semibold font-body text-navy text-lg">
                        +90 555 123 45 67
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white border border-navy/[0.06] rounded-2xl">
                    <div className="bg-orange/10 p-3 rounded-xl shrink-0">
                      <Mail className="w-6 h-6 text-orange" />
                    </div>
                    <div>
                      <div className="text-sm text-navy/50 font-body">E-posta</div>
                      <div className="font-semibold font-body text-navy text-lg">
                        info@mimove.com.tr
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white border border-navy/[0.06] rounded-2xl">
                    <div className="bg-orange/10 p-3 rounded-xl shrink-0">
                      <MapPin className="w-6 h-6 text-orange" />
                    </div>
                    <div>
                      <div className="text-sm text-navy/50 font-body">Adres</div>
                      <div className="font-semibold font-body text-navy text-lg">
                        İstanbul / Türkiye
                      </div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-500 p-3 rounded-xl shrink-0">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-navy mb-2">
                        WhatsApp ile Hızlı İletişim
                      </h3>
                      <p className="text-navy/60 text-sm font-body mb-4">
                        Hızlı yanıt almak için bize WhatsApp&apos;tan yazabilirsiniz.
                      </p>
                      <a
                        href="https://wa.me/905551234567"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp ile Yazın
                      </a>
                    </div>
                  </div>
                </div>

                {/* Privacy */}
                <div className="relative bg-navy rounded-2xl p-6 flex items-start gap-4 overflow-hidden noise">
                  {/* Corner accents */}
                  <div className="absolute top-4 right-4 w-8 h-8">
                    <div className="absolute top-0 right-0 w-full h-px bg-orange/30" />
                    <div className="absolute top-0 right-0 h-full w-px bg-orange/30" />
                  </div>
                  <div className="absolute bottom-4 left-4 w-8 h-8">
                    <div className="absolute bottom-0 left-0 w-full h-px bg-white/10" />
                    <div className="absolute bottom-0 left-0 h-full w-px bg-white/10" />
                  </div>

                  <div className="relative bg-orange/20 p-2 rounded-lg shrink-0">
                    <svg className="w-6 h-6 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div className="relative">
                    <h4 className="font-heading font-semibold text-white mb-1">
                      %100 Gizlilik Garantisi
                    </h4>
                    <p className="text-white/60 text-sm font-body">
                      Projeleriniz bizim için değerlidir. Tüm dosyalarınız gizlilik ilkesi
                      çerçevesinde korunur.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right - Form */}
            <ScrollReveal variant="right">
              <div className="relative bg-white border border-navy/[0.06] shadow-xl shadow-navy/5 rounded-3xl p-8 sm:p-10 overflow-hidden">
                {/* Architectural corner accents */}
                <div className="absolute top-6 right-6 w-8 h-8">
                  <div className="absolute top-0 right-0 w-full h-px bg-orange/30" />
                  <div className="absolute top-0 right-0 h-full w-px bg-orange/30" />
                </div>
                <div className="absolute bottom-6 left-6 w-8 h-8">
                  <div className="absolute bottom-0 left-0 w-full h-px bg-navy/10" />
                  <div className="absolute bottom-0 left-0 h-full w-px bg-navy/10" />
                </div>

                <div className="relative">
                  <h3 className="font-heading font-bold text-xl text-navy mb-2">
                    İletişim Formu
                  </h3>
                  <p className="text-navy/50 font-body text-sm mb-8">
                    Formu doldurun, size en kısa sürede dönüş yapalım.
                  </p>
                  <form className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium font-body text-navy/70 mb-1.5">
                          Ad Soyad *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Adınız Soyadınız"
                          className="w-full px-4 py-3 rounded-xl border border-gray bg-white font-body text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:ring-2 focus:ring-orange/30 focus:border-orange transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium font-body text-navy/70 mb-1.5">
                          Telefon *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+90 5XX XXX XX XX"
                          className="w-full px-4 py-3 rounded-xl border border-gray bg-white font-body text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:ring-2 focus:ring-orange/30 focus:border-orange transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium font-body text-navy/70 mb-1.5">
                        Firma Adı
                      </label>
                      <input
                        type="text"
                        placeholder="Firma adınız"
                        className="w-full px-4 py-3 rounded-xl border border-gray bg-white font-body text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:ring-2 focus:ring-orange/30 focus:border-orange transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium font-body text-navy/70 mb-1.5">
                        E-posta
                      </label>
                      <input
                        type="email"
                        placeholder="email@firma.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray bg-white font-body text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:ring-2 focus:ring-orange/30 focus:border-orange transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium font-body text-navy/70 mb-1.5">
                        Mesajınız *
                      </label>
                      <textarea
                        rows={5}
                        required
                        placeholder="Projeniz hakkında kısaca bilgi verin..."
                        className="w-full px-4 py-3 rounded-xl border border-gray bg-white font-body text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:ring-2 focus:ring-orange/30 focus:border-orange transition-all resize-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium font-body text-navy/70 mb-1.5">
                        Proje Dosyası / Drive Linki (isteğe bağlı)
                      </label>
                      <input
                        type="url"
                        placeholder="Google Drive veya dosya linki"
                        className="w-full px-4 py-3 rounded-xl border border-gray bg-white font-body text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:ring-2 focus:ring-orange/30 focus:border-orange transition-all"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-orange hover:bg-orange-dark text-white font-semibold font-body py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-orange/25 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Mesaj Gönder
                    </button>
                  </form>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
