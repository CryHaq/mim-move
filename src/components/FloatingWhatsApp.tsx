"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-16 right-0 w-72 bg-white rounded-2xl shadow-2xl shadow-navy/10 border border-navy/[0.06] overflow-hidden mb-2"
          >
            {/* Header */}
            <div className="bg-[#075E54] px-5 py-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-heading font-bold text-sm">
                M+M
              </div>
              <div>
                <div className="text-white font-heading font-semibold text-sm">
                  Mim+Move
                </div>
                <div className="text-white/60 text-xs font-body">
                  Genelde birkaç dakikada yanıt verir
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="p-4 bg-[#ECE5DD]">
              <div className="bg-white rounded-xl rounded-tl-none px-4 py-3 shadow-sm max-w-[90%]">
                <p className="text-[13px] text-navy/80 font-body leading-relaxed">
                  Merhaba! Mimari danışmanlık hizmetlerimiz hakkında bilgi almak ister misiniz? Size yardımcı olalım.
                </p>
                <span className="text-[10px] text-navy/30 font-body mt-1 block text-right">
                  şimdi
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="p-3">
              <a
                href="https://wa.me/905551234567?text=Merhaba%2C%20mimari%20dan%C4%B1%C5%9Fmanl%C4%B1k%20hizmetleriniz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-sm py-3 rounded-xl transition-colors w-full"
              >
                <MessageCircle className="w-4 h-4" />
                Sohbeti Başlat
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-lg shadow-[#25D366]/30 flex items-center justify-center transition-colors"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse ring */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        )}
      </motion.button>
    </div>
  );
}
