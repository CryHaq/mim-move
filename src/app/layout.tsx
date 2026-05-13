import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const BASE_URL = "https://mimove.com.tr";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "MIM+MOVE | Mimari Danışmanlık",
    template: "%s | MIM+MOVE",
  },
  description:
    "Firmanızın ihtiyacı olan mimari desteği abonelikle alın. Proje revizyonu, maliyet optimizasyonu, malzeme danışmanlığı ve düzenli toplantı sistemi ile her zaman yanınızdayız.",
  keywords: [
    "mimari danışmanlık",
    "proje revizyonu",
    "maliyet optimizasyonu",
    "malzeme danışmanlığı",
    "mimarlık",
    "3D yorumlama",
    "abonelik mimarlık",
    "İstanbul mimar",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: BASE_URL,
    siteName: "MIM+MOVE Mimari Danışmanlık",
    title: "MIM+MOVE | Mimari Danışmanlık",
    description:
      "Firmanızın ihtiyacı olan mimari desteği abonelikle alın. Proje revizyonu, maliyet optimizasyonu ve malzeme danışmanlığı.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MIM+MOVE Mimari Danışmanlık",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MIM+MOVE | Mimari Danışmanlık",
    description:
      "Firmanızın ihtiyacı olan mimari desteği abonelikle alın.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${poppins.variable} ${montserrat.variable} antialiased`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "MIM+MOVE Mimari Danışmanlık",
              url: BASE_URL,
              logo: `${BASE_URL}/images/og-image.jpg`,
              description:
                "Abonelik bazlı mimari danışmanlık platformu. Proje revizyonu, maliyet optimizasyonu, malzeme danışmanlığı.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "İstanbul",
                addressCountry: "TR",
              },
              telephone: "+905551234567",
              email: "info@mimove.com.tr",
              priceRange: "₺₺",
              serviceType: [
                "Mimari Danışmanlık",
                "Proje Kontrol",
                "Çizim Revizyon",
                "Maliyet Optimizasyonu",
                "Malzeme Danışmanlığı",
                "3D Yorumlama",
              ],
            }),
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
