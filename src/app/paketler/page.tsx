import type { Metadata } from "next";
import Link from "next/link";
import { Check, X, ChevronDown } from "lucide-react";

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
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy via-navy-light to-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-orange font-semibold text-sm font-body tracking-wider uppercase mb-3">
            Fiyatlandırma
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold font-heading text-white mb-6">
            Size uygun <span className="text-orange">planı seçin</span>
          </h1>
          <p className="text-white/70 font-body text-lg max-w-2xl mx-auto">
            Her bütçeye ve ihtiyaca uygun paketlerimizle mimari danışmanlık
            hizmetine hemen başlayın.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch -mt-32">
            {/* Başlangıç */}
            <div className="bg-white rounded-2xl p-8 flex flex-col shadow-xl border border-gray/50 hover:-translate-y-2 transition-all duration-300">
              <h3 className="font-heading font-bold text-2xl text-navy mb-2">Başlangıç</h3>
              <p className="text-navy/50 font-body text-sm mb-6">
                Yeni başlayan firmalar veya küçük işletmeler için ideal.
              </p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-bold font-heading text-navy">1.999</span>
                <span className="text-lg font-body text-navy/50">TL / ay</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-orange" />
                  <span className="text-sm font-body text-navy/80">Aylık 2 online görüşme</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-orange" />
                  <span className="text-sm font-body text-navy/80">Proje inceleme (PDF/DWG)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-orange" />
                  <span className="text-sm font-body text-navy/80">Malzeme önerisi</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-orange" />
                  <span className="text-sm font-body text-navy/80">48 saat içinde geri dönüş</span>
                </li>
                <li className="flex items-center gap-3">
                  <X className="w-5 h-5 text-red-400" />
                  <span className="text-sm font-body text-navy/30 line-through">Revizyon hazırlama</span>
                </li>
              </ul>
              <Link
                href="/iletisim"
                className="block text-center font-semibold font-body py-4 rounded-xl bg-navy/5 hover:bg-navy text-navy hover:text-white transition-all"
              >
                Bu Pakete Başla
              </Link>
            </div>

            {/* Profesyonel */}
            <div className="bg-navy rounded-2xl p-8 flex flex-col shadow-2xl shadow-navy/20 md:scale-105 relative hover:-translate-y-2 transition-all duration-300">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-orange text-white text-xs font-bold font-body px-4 py-1.5 rounded-full uppercase tracking-wider">
                  Popüler
                </span>
              </div>
              <h3 className="font-heading font-bold text-2xl text-white mb-2">Profesyonel</h3>
              <p className="text-white/50 font-body text-sm mb-6">
                Düzenli proje desteği isteyen firmalar için. Projelerde yanınızdayız.
              </p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-bold font-heading text-white">4.999</span>
                <span className="text-lg font-body text-white/50">TL / ay</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-orange flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm font-body text-white/90">Aylık 4 toplantı</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-orange flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm font-body text-white/90">2 revizyon çalışma</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-orange flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm font-body text-white/90">Maliyet optimizasyon raporu</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-orange flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm font-body text-white/90">Tedarikçi listesi</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-orange flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm font-body text-white/90">24 saat içinde geri dönüş</span>
                </li>
              </ul>
              <Link
                href="/iletisim"
                className="block text-center font-semibold font-body py-4 rounded-xl bg-orange hover:bg-orange-dark text-white transition-all"
              >
                Profesyonel Başlat
              </Link>
            </div>

            {/* Premium */}
            <div className="bg-white rounded-2xl p-8 flex flex-col shadow-xl border border-gray/50 hover:-translate-y-2 transition-all duration-300">
              <h3 className="font-heading font-bold text-2xl text-navy mb-2">Premium</h3>
              <p className="text-navy/50 font-body text-sm mb-6">
                Sanki firmanızda çalışan özel mimarınız. Sürekli iletişim ve destek.
              </p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-bold font-heading text-navy">9.999</span>
                <span className="text-lg font-body text-navy/50">TL / ay</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-orange" />
                  <span className="text-sm font-body text-navy/80">Sınırsız soru-cevap</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-orange" />
                  <span className="text-sm font-body text-navy/80">Haftalık proje yönetimi</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-orange" />
                  <span className="text-sm font-body text-navy/80">Özel WhatsApp hattı</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-orange" />
                  <span className="text-sm font-body text-navy/80">Sunum hazırlama desteği</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-orange" />
                  <span className="text-sm font-body text-navy/80">Fizibilite analizi</span>
                </li>
              </ul>
              <Link
                href="/iletisim"
                className="block text-center font-semibold font-body py-4 rounded-xl bg-navy/5 hover:bg-navy text-navy hover:text-white transition-all"
              >
                Premium&apos;a Geç
              </Link>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="mt-20 bg-white rounded-2xl shadow-xl border border-gray/50 overflow-hidden">
            <div className="p-8 border-b border-gray">
              <h2 className="text-2xl font-bold font-heading text-navy">Detaylı Karşılaştırma</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray">
                    <th className="text-left py-4 px-8 font-heading font-semibold text-navy/60 text-sm">Özellik</th>
                    <th className="text-center py-4 px-4 font-heading font-semibold text-navy text-sm">Başlangıç</th>
                    <th className="text-center py-4 px-4 font-heading font-semibold text-orange text-sm">Profesyonel</th>
                    <th className="text-center py-4 px-4 font-heading font-semibold text-navy text-sm">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((f) => (
                    <tr key={f.text} className="border-b border-gray/50 last:border-0">
                      <td className="py-4 px-8 text-sm font-body text-navy/80">{f.text}</td>
                      <td className="text-center py-4 px-4">
                        {f.text === "Geri dönüş süresi" ? (
                          <span className="text-sm font-body text-navy/60">{geriDonus.starter}</span>
                        ) : f.starter ? (
                          <Check className="w-5 h-5 text-orange mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-navy/20 mx-auto" />
                        )}
                      </td>
                      <td className="text-center py-4 px-4 bg-orange/5">
                        {f.text === "Geri dönüş süresi" ? (
                          <span className="text-sm font-body font-semibold text-orange">{geriDonus.pro}</span>
                        ) : f.pro ? (
                          <Check className="w-5 h-5 text-orange mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-navy/20 mx-auto" />
                        )}
                      </td>
                      <td className="text-center py-4 px-4">
                        {f.text === "Geri dönüş süresi" ? (
                          <span className="text-sm font-body text-navy/60">{geriDonus.premium}</span>
                        ) : f.premium ? (
                          <Check className="w-5 h-5 text-orange mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-navy/20 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-heading text-navy mb-4">
              Sık Sorulan Sorular
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="group bg-gray-light rounded-2xl">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-heading font-semibold text-navy">
                  {faq.q}
                  <ChevronDown className="w-5 h-5 text-navy/40 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 -mt-2">
                  <p className="text-navy/60 font-body leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
