import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delayClass?: string; // Tailwind animation delay class
}

export default function GlassCard({ children, className = "", delayClass = "" }: GlassCardProps) {
  return (
    <div
      className={`glass-panel rounded-2xl p-6 md:p-8 transition-all duration-300 ease-out ${className} ${delayClass}`}
    >
      {/* Decorative corners to enhance secret agency aesthetic */}
      <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-white/20 rounded-tl-md pointer-events-none" />
      <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-white/20 rounded-tr-md pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-white/20 rounded-bl-md pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-white/20 rounded-br-md pointer-events-none" />

      {children}
    </div>
  );
}
