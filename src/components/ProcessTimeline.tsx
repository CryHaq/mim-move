"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Keşif Görüşmesi", desc: "15 dakikalık ücretsiz online görüşme ile ihtiyaçlarınızı anlıyoruz." },
  { num: "02", title: "Paket Seçimi", desc: "Size en uygun abonelik paketini birlikte belirliyoruz." },
  { num: "03", title: "Proje Teslimi", desc: "Projelerinizi güvenli şekilde Google Drive veya Notion üzerinden paylaşıyorsunuz." },
  { num: "04", title: "Danışmanlık Başlıyor", desc: "Düzenli toplantılar ve sürekli destek ile projeleriniz ilerliyor." },
];

export default function ProcessTimeline() {
  return (
    <div className="relative">
      {/* Connecting line */}
      <div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-orange/30 via-orange/10 to-transparent hidden sm:block" />

      <div className="space-y-0">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-start gap-6 py-8 group"
          >
            {/* Number circle */}
            <div className="relative z-10 shrink-0">
              <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/[0.08] group-hover:border-orange/30 flex items-center justify-center transition-all duration-300 group-hover:bg-orange/10">
                <span className="text-orange font-heading font-bold text-sm">{step.num}</span>
              </div>
            </div>

            {/* Content */}
            <div className="pt-1.5">
              <h4 className="font-heading font-semibold text-white text-lg mb-2 group-hover:text-orange transition-colors">
                {step.title}
              </h4>
              <p className="text-white/50 font-body text-[15px] leading-relaxed max-w-md">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
