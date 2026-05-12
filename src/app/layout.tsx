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

export const metadata: Metadata = {
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
  ],
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
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
