"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";

export default function SafeImage({ alt, className, ...props }: ImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={`bg-gradient-to-br from-navy/90 to-navy flex items-center justify-center ${className ?? ""}`}
        style={props.fill ? { position: "absolute", inset: 0 } : { width: props.width, height: props.height }}
      >
        <div className="text-center px-4">
          <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-orange/10 flex items-center justify-center">
            <svg className="w-5 h-5 text-orange/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.41a2.25 2.25 0 013.182 0l2.909 2.91m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
          </div>
          <span className="text-white/30 text-xs font-body">{alt}</span>
        </div>
      </div>
    );
  }

  return (
    <Image
      alt={alt}
      className={className}
      onError={() => setError(true)}
      {...props}
    />
  );
}
