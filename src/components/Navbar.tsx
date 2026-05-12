"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/paketler", label: "Paketler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/blog", label: "Blog" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const showTransparent = isHome && !scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showTransparent
          ? "bg-transparent"
          : "bg-white/80 backdrop-blur-xl shadow-[0_1px_0_rgba(10,26,47,0.06)]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <span
              className={`text-[22px] font-bold font-heading tracking-tight transition-colors duration-300 ${
                showTransparent ? "text-white" : "text-navy"
              }`}
            >
              MIM<span className="text-orange">+</span>MOVE
            </span>
            <div className={`hidden sm:block w-px h-5 transition-colors duration-300 ${showTransparent ? "bg-white/20" : "bg-navy/10"}`} />
            <span
              className={`hidden sm:block text-[10px] font-body tracking-[0.15em] uppercase transition-colors duration-300 ${
                showTransparent ? "text-white/50" : "text-navy/40"
              }`}
            >
              Mimari Danışmanlık
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-[13px] font-medium font-body transition-all duration-300 px-4 py-2 rounded-lg hover:text-orange ${
                  pathname === link.href
                    ? "text-orange"
                    : showTransparent
                      ? "text-white/80 hover:bg-white/[0.06]"
                      : "text-navy/60 hover:bg-navy/[0.03]"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-orange rounded-full" />
                )}
              </Link>
            ))}
            <div className="ml-4">
              <Link
                href="/iletisim"
                className="group inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white font-semibold text-[13px] px-5 py-2.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-orange/20"
              >
                Ücretsiz Görüşme
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2.5 rounded-xl transition-all duration-300 ${
              showTransparent
                ? "text-white hover:bg-white/[0.08]"
                : "text-navy hover:bg-navy/[0.04]"
            }`}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-400 overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white/95 backdrop-blur-xl border-t border-navy/[0.06] px-4 py-5 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block font-medium text-sm py-3 px-4 rounded-xl transition-all duration-300 ${
                pathname === link.href
                  ? "text-orange bg-orange/[0.05]"
                  : "text-navy/70 hover:text-orange hover:bg-navy/[0.02]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3">
            <Link
              href="/iletisim"
              className="flex items-center justify-center gap-2 bg-orange text-white font-semibold text-sm text-center py-3.5 px-4 rounded-xl hover:bg-orange-dark transition-all"
            >
              Ücretsiz Görüşme
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
