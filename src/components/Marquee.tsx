"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
  items: string[];
  speed?: number;
  reverse?: boolean;
  separator?: "dot" | "line" | "diamond";
}

export default function Marquee({
  items,
  speed = 30,
  reverse = false,
  separator = "dot",
}: MarqueeProps) {
  const doubled = [...items, ...items];

  const separatorEl = {
    dot: <span className="w-2 h-2 bg-orange/40 rounded-full shrink-0" />,
    line: <span className="w-6 h-px bg-orange/30 shrink-0" />,
    diamond: <span className="w-2.5 h-2.5 bg-orange/30 rotate-45 shrink-0" />,
  }[separator];

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex items-center gap-10 whitespace-nowrap"
        animate={{ x: reverse ? ["0%", "50%"] : ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="text-navy/15 font-heading text-2xl sm:text-3xl font-bold tracking-tight">
              {item}
            </span>
            {separatorEl}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
