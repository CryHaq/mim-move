"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Ahmet Yılmaz",
    role: "Genel Müdür",
    company: "Yılmaz İnşaat",
    text: "Mim+Move ile çalışmaya başladıktan sonra projelerimizin maliyet kontrolü çok daha etkin hale geldi. Tam zamanlı mimar tutmak yerine abonelik modeli ile hem tasarruf ettik hem de uzman desteğe ulaştık.",
  },
  {
    name: "Elif Kaya",
    role: "Proje Koordinatörü",
    company: "Kaya Gayrimenkul",
    text: "Özellikle çizim revizyon süreçlerinde inanılmaz hızlılar. 24 saat içinde geri dönüş sözlerini her zaman tuttular. Artık tüm projelerimizde Mim+Move danışmanlığını kullanıyoruz.",
  },
  {
    name: "Mehmet Demir",
    role: "Kurucu Ortak",
    company: "Demir & Partners Mimarlık",
    text: "Premium paket ile sanki bünyemizde bir mimar daha varmış gibi çalışıyoruz. Malzeme danışmanlığı ve tedarikçi önerileri sayesinde son projemizde %25 maliyet düşüşü sağladık.",
  },
  {
    name: "Zeynep Arslan",
    role: "İç Mimar",
    company: "ZA Design Studio",
    text: "3D yorumlama hizmetleri müşterilerime sunum yaparken büyük fark yaratıyor. Profesyonel ve sonuç odaklı bir ekip. Kesinlikle tavsiye ediyorum.",
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.96,
    }),
  };

  return (
    <div className="relative">
      {/* Quote accent */}
      <div className="absolute -top-6 left-0 lg:left-10">
        <Quote className="w-16 h-16 text-orange/10 fill-orange/5" />
      </div>

      <div className="relative overflow-hidden min-h-[280px] flex items-center">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <blockquote className="relative">
              <p className="text-xl sm:text-2xl font-body font-light text-white/80 leading-relaxed mb-8 lg:pr-12">
                &ldquo;{testimonials[current].text}&rdquo;
              </p>
              <footer className="flex items-center gap-4">
                {/* Avatar placeholder */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange to-orange-dark flex items-center justify-center text-white font-heading font-bold text-lg shrink-0">
                  {testimonials[current].name[0]}
                </div>
                <div>
                  <div className="font-heading font-semibold text-white text-[15px]">
                    {testimonials[current].name}
                  </div>
                  <div className="text-white/40 font-body text-sm">
                    {testimonials[current].role} · {testimonials[current].company}
                  </div>
                </div>
              </footer>
            </blockquote>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4 mt-10">
        <button
          onClick={() => paginate(-1)}
          className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center text-white/50 hover:text-orange hover:border-orange/30 transition-all duration-300"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => paginate(1)}
          className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center text-white/50 hover:text-orange hover:border-orange/30 transition-all duration-300"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2 ml-4">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className="relative h-2 transition-all duration-300"
              style={{ width: i === current ? 24 : 8 }}
            >
              <div
                className={`absolute inset-0 rounded-full transition-all duration-300 ${
                  i === current ? "bg-orange" : "bg-white/20"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
