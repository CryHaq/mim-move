import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { Check, X, ChevronDown, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Paketler",
  description:
    "Başlangıç, Profesyonel ve Premium abonelik paketlerimizi karşılaştırın. İhtiyacınıza uygun mimari danışmanlık planını seçin.",
};

interface Feature {
  text: string;
  starter: boolean;
  pro: boolean;
  premium: boolean;
}

const features: Feature[] = [
  { text: "Online görüşme", starter: true, pro: true, premium: true },
  { text: "Proje inceleme (PDF/DWG)", starter: true, pro: true, premium: true },
  { text: "Malzeme önerisi", starter: true, pro: true, premium: true },
  { text: "Revizyon çalışma", starter: false, pro: true, premium: true },
  { text: "Maliyet optimizasyon raporu", starter: false, pro: true, premium: true },
  { text: "Tedarikçi listesi", starter: false, pro: true, premium: true },
  { text: "Haftalık proje yönetimi", starter: false, pro: false, premium: true },
  { text: "Özel WhatsApp hattı", starter: false, pro: false, premium: true },
  { text: "Sunum hazırlama desteği", starter: false, pro: false, premium: true },
  { text: "Fizibilite analizi", starter: false, pro: false, premium: true },
  { text: "Geri dönüş süresi", starter: true, pro: true, premium: true },
];

const geriDonus: Record<string, string> = {
  starter: "48 saat",
  pro: "24 saat",
  premium: "Anlık",
};

const faqs = [
  {
    q: "Aboneliğimi istediğim zaman iptal edebilir miyim?",
    a: "Evet, aboneliğinizi herhangi bir zamanda iptal edebilirsiniz. İptal ettiğiniz ay sonuna kadar hizmetlerimizden yararlanmaya devam edersiniz.",
  },
  {
    q: "Paketler arasında geçiş yapabilir miyim?",
    a: "Elbette! İhtiyaçlarınız değiştikçe paketler arasında dilediğiniz zaman geçiş yapabilirsiniz. Fark ücreti orantılı olarak hesaplanır.",
  },
  {
    q: "Ücretsiz görüşmede ne konuşuyoruz?",
    a: "15 dakikalık keşif görüşmesinde projenizi ve ihtiyaçlarınızı anlıyor, size en uygun paketi ve çalışma şeklini öneriyoruz. Hiçbir taahhüt yok.",
  },
  {
    q: "Projelerim gizli kalır mı?",
    a: "Kesinlikle. Tüm proje dosyalarınız ve bilgileriniz gizlilik sözleşmesi kapsamında korunur. %100 gizlilik garantisi veriyoruz.",
  },
  {
    q: "Hangi dosya formatlarını kabul ediyorsunuz?",
    a: "AutoCAD (DWG/DXF), Revit, PDF, SketchUp ve diğer yaygın mimari dosya formatlarının hepsiyle çalışabiliyoruz.",
  },
];

export default function PaketlerPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-navy" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
        <div className="absolute inset-0 noise" />
        <div className="absolute top-0 right-[15%] w-[500px] h-[500px] bg-orange/[0.06] rounded-full blur-[120px]" />
        <div className="absolute top-12 right-12 w-16 h-16 hidden lg:block">
          <div className="absolute top-0 right-0 w-full h-px bg-orange/20" />
          <div className="absolute top-0 right-0 h-full w-px bg-orange/20" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="inline-block text-orange font-semibold text-xs font-body tracking-[0.2em] uppercase mb-4">
              — Fiyatlandırma
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white tracking-tight mb-6">
              Size uygun <span className="text-orange">planı seçin</span>
            </h1>
            <p className="text-white/50 font-body text-lg max-w-xl mx-auto">
              Her bütçeye ve ihtiyaca uygun paketlerimizle mimari danışmanlık
              hizmetine hemen başlayın.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-28 bg-cream relative">
        <div className="absolute inset-0 blueprint-dots" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch -mt-40">
            {/* Başlangıç */}
            <ScrollReveal delay={1}>
              <div className="bg-white rounded-2xl p-8 lg:p-10 flex flex-col shadow-xl border border-navy/[0.06] hover:-translate-y-2 transition-all duration-500 h-full">
                <h3 className="font-heading font-bold text-2xl text-navy mb-2">Başlangıç</h3>
                <p className="text-navy/40 font-body text-sm mb-6">
                  Yeni başlayan firmalar veya küçük işletmeler için ideal.
                </p>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-5xl font-bold font-heading text-navy tracking-tight">1.999</span>
                  <span className="text-base font-body text-navy/40">TL / ay</span>
                </div>
                <div className="w-full h-px bg-navy/[0.06] mb-8" />
                <ul className="space-y-4 mb-10 flex-1">
                  <li className="flex items-center gap-3"><Check className="w-5 h-5 text-orange shrink-0" /><span className="text-sm font-body text-navy/70">Aylık 2 online görüşme</span></li>
                  <li className="flex items-center gap-3"><Check className="w-5 h-5 text-orange shrink-0" /><span className="text-sm font-body text-navy/70">Proje inceleme (PDF/DWG)</span></li>
                  <li className="flex items-center gap-3"><Check className="w-5 h-5 text-orange shrink-0" /><span className="text-sm font-body text-navy/70">Malzeme önerisi</span></li>
                  <li className="flex items-center gap-3"><Check className="w-5 h-5 text-orange shrink-0" /><span className="text-sm font-body text-navy/70">48 saat içinde geri dönüş</span></li>
                  <li className="flex items-center gap-3"><X className="w-5 h-5 text-navy/15 shrink-0" /><span className="text-sm font-body text-navy/25 line-through">Revizyon hazırlama</span></li>
                </ul>
                <Link href="/iletisim" className="block text-center font-semibold font-body py-4 rounded-xl bg-navy/[0.04] hover:bg-navy text-navy hover:text-white transition-all duration-300">
                  Bu Pakete Başla
                </Link>
              </div>
            </ScrollReveal>

            {/* Profesyonel */}
            <ScrollReveal delay={2}>
              <div className="bg-navy rounded-2xl p-8 lg:p-10 flex flex-col shadow-2xl shadow-navy/30 md:scale-[1.03] relative hover:-translate-y-2 transition-all duration-500 h-full noise">
                <div className="absolute -top-3.5 left-8">
                  <span className="bg-orange text-white text-[11px] font-bold font-body px-4 py-1.5 rounded-full uppercase tracking-widest">Popüler</span>
                </div>
                <div className="absolute top-6 right-6 w-8 h-8">
                  <div className="absolute top-0 right-0 w-full h-px bg-orange/30" />
                  <div className="absolute top-0 right-0 h-full w-px bg-orange/30" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-white mb-2">Profesyonel</h3>
                <p className="text-white/40 font-body text-sm mb-6">
                  Düzenli proje desteği isteyen firmalar için.
                </p>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-5xl font-bold font-heading text-white tracking-tight">4.999</span>
                  <span className="text-base font-body text-white/40">TL / ay</span>
                </div>
                <div className="w-full h-px bg-white/10 mb-8" />
                <ul className="space-y-4 mb-10 flex-1">
                  {["Aylık 4 toplantı","2 revizyon çalışma","Maliyet optimizasyon raporu","Tedarikçi listesi","24 saat içinde geri dönüş"].map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-orange flex items-center justify-center shrink-0"><Check className="w-3 h-3 text-white" /></div>
                      <span className="text-sm font-body text-white/80">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/iletisim" className="block text-center font-semibold font-body py-4 rounded-xl bg-orange hover:bg-orange-dark text-white transition-all duration-300 hover:shadow-lg hover:shadow-orange/30">
                  Profesyonel Başlat
                </Link>
              </div>
            </ScrollReveal>

            {/* Premium */}
            <ScrollReveal delay={3}>
              <div className="bg-white rounded-2xl p-8 lg:p-10 flex flex-col shadow-xl border border-navy/[0.06] hover:-translate-y-2 transition-all duration-500 h-full">
                <h3 className="font-heading font-bold text-2xl text-navy mb-2">Premium</h3>
                <p className="text-navy/40 font-body text-sm mb-6">
                  Sanki firmanızda çalışan özel mimarınız.
                </p>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-5xl font-bold font-heading text-navy tracking-tight">9.999</span>
                  <span className="text-base font-body text-navy/40">TL / ay</span>
                </div>
                <div className="w-full h-px bg-navy/[0.06] mb-8" />
                <ul className="space-y-4 mb-10 flex-1">
                  {["Sınırsız soru-cevap","Haftalık proje yönetimi","Özel WhatsApp hattı","Sunum hazırlama desteği","Fizibilite analizi"].map((f) => (
                    <li key={f} className="flex items-center gap-3"><Check className="w-5 h-5 text-orange shrink-0" /><span className="text-sm font-body text-navy/70">{f}</span></li>
                  ))}
                </ul>
                <Link href="/iletisim" className="block text-center font-semibold font-body py-4 rounded-xl bg-navy/[0.04] hover:bg-navy text-navy hover:text-white transition-all duration-300">
                  Premium&apos;a Geç
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Comparison Table */}
          <ScrollReveal className="mt-24">
            <div className="bg-white rounded-2xl shadow-xl border border-navy/[0.06] overflow-hidden">
              <div className="p-8 border-b border-navy/[0.06]">
                <span className="inline-block text-orange font-semibold text-xs font-body tracking-[0.2em] uppercase mb-2">— Karşılaştırma</span>
                <h2 className="text-2xl font-bold font-heading text-navy">Detaylı Karşılaştırma</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-navy/[0.06]">
                      <th className="text-left py-4 px-8 font-heading font-semibold text-navy/40 text-xs tracking-wider uppercase">Özellik</th>
                      <th className="text-center py-4 px-4 font-heading font-semibold text-navy text-sm">Başlangıç</th>
                      <th className="text-center py-4 px-4 font-heading font-semibold text-orange text-sm">Profesyonel</th>
                      <th className="text-center py-4 px-4 font-heading font-semibold text-navy text-sm">Premium</th>
                    </tr>
                  </thead>
                  <tbody>
                    {features.map((f) => (
                      <tr key={f.text} className="border-b border-navy/[0.04] last:border-0 hover:bg-cream/50 transition-colors">
                        <td className="py-4 px-8 text-sm font-body text-navy/70">{f.text}</td>
                        <td className="text-center py-4 px-4">
                          {f.text === "Geri dönüş süresi" ? (
                            <span className="text-sm font-body text-navy/50">{geriDonus.starter}</span>
                          ) : f.starter ? (
                            <Check className="w-5 h-5 text-orange mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-navy/10 mx-auto" />
                          )}
                        </td>
                        <td className="text-center py-4 px-4 bg-orange/[0.03]">
                          {f.text === "Geri dönüş süresi" ? (
                            <span className="text-sm font-body font-semibold text-orange">{geriDonus.pro}</span>
                          ) : f.pro ? (
                            <Check className="w-5 h-5 text-orange mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-navy/10 mx-auto" />
                          )}
                        </td>
                        <td className="text-center py-4 px-4">
                          {f.text === "Geri dönüş süresi" ? (
                            <span className="text-sm font-body text-navy/50">{geriDonus.premium}</span>
                          ) : f.premium ? (
                            <Check className="w-5 h-5 text-orange mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-navy/10 mx-auto" />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 bg-white relative">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-orange font-semibold text-xs font-body tracking-[0.2em] uppercase mb-4">— SSS</span>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-navy tracking-tight">
                Sık Sorulan Sorular
              </h2>
            </div>
          </ScrollReveal>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <ScrollReveal key={faq.q} delay={Math.min(i + 1, 5) as 1 | 2 | 3 | 4 | 5}>
                <details className="group bg-white border border-navy/[0.06] rounded-2xl hover:shadow-lg hover:shadow-navy/[0.03] transition-all duration-300">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-heading font-semibold text-navy text-[15px]">
                    {faq.q}
                    <ChevronDown className="w-5 h-5 text-navy/30 group-open:rotate-180 group-open:text-orange transition-all duration-300 shrink-0 ml-4" />
                  </summary>
                  <div className="px-6 pb-6 -mt-2">
                    <p className="text-navy/50 font-body leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
