"use client";
import { useState } from "react";

interface PhoneImageProps {
  src: string;
  alt: string;
  className?: string;
}

function PhoneSVG({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 80 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="8" y="2" width="64" height="116" rx="12" fill="#1c1c1e" />
      <rect x="12" y="6" width="56" height="108" rx="9" fill="#2c2c2e" />
      <rect x="28" y="8" width="24" height="6" rx="3" fill="#1c1c1e" />
      <rect x="16" y="18" width="48" height="76" rx="4" fill="#3a3a3c" />
      <circle cx="40" cy="105" r="5" fill="#3a3a3c" stroke="#555" strokeWidth="1" />
      <text x="40" y="60" textAnchor="middle" fill="#8e8e93" fontSize="9" fontFamily="sans-serif">iPhone</text>
    </svg>
  );
}

export default function PhoneImage({ src, alt, className }: PhoneImageProps) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return <PhoneSVG className={className} />;
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setErrored(true)}
    />
  );
}
