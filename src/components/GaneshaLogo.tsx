import React from "react";

export function GaneshaLogo({ className = "w-10 h-10 text-primary" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Head and crown */}
      <path d="M50,15 C45,15 45,25 50,25 C55,25 55,15 50,15 Z" />
      {/* Ears and face outline */}
      <path d="M35,35 C20,35 25,50 35,50 C35,65 50,75 50,75 C50,75 65,65 65,50 C75,50 80,35 65,35" />
      {/* Trunk curving to the right */}
      <path d="M50,45 C45,55 42,65 48,70 C53,74 58,68 54,63 C51,59 47,60 48,54" />
      {/* Tilak on forehead */}
      <path d="M50,28 L50,33 M47,30 L53,30" strokeWidth="2.5" />
    </svg>
  );
}
