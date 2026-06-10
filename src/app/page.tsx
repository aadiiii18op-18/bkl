"use client";

import Link from "next/link";
import React from "react";
import ParticlesBackground from "@/components/ParticlesBackground";
import GlassCard from "@/components/GlassCard";

const MEMORY_ITEMS = [
  { title: "Group Trip", description: "Vibe check in the mountains.", date: "NOV 2025" },
  { title: "First Semester", description: "Where the chaos started.", date: "DEC 2024" },
  { title: "Second Semester", description: "More exams, more bakchodi.", date: "MAY 2025" },
  { title: "Random Bakchodi", description: "Late night talks & chai.", date: "EVERYDAY" },
  { title: "Food Archives", description: "Momos, chai, and endless rolls.", date: "ONGOING" },
  { title: "Future Memories", description: "Awaiting initialization.", date: "COMING SOON" }
];

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center py-12 px-4 overflow-y-auto select-none bg-[#030712]">
      {/* Dynamic interactive particles */}
      <ParticlesBackground />

      {/* Futuristic Grid Overlay Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none -z-20" />
      
      {/* Cinematic Ambient Glow Radial Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-950/10 rounded-full blur-[120px] pointer-events-none -z-25" />

      {/* CSS Animation for Infinite Scroll */}
      <style jsx>{`
        @keyframes infiniteScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-infinite-scroll {
          animation: infiniteScroll 30s linear infinite;
        }
      `}</style>

      {/* Main Container */}
      <div className="w-full max-w-xl flex flex-col items-center justify-center text-center space-y-8 z-10 mt-8 mb-4">
        
        {/* 1. CONFIDENTIAL BADGE */}
        <div className="animate-fade-in opacity-0" style={{ animationDelay: "150ms" }}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-500/30 bg-red-950/20 text-red-400 text-xs font-mono tracking-[0.15em] uppercase animate-pulse-glow">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
            ⚠️ CONFIDENTIAL ORGANIZATION ⚠️
          </div>
        </div>

        {/* 2. MAIN HEADER */}
        <div className="space-y-2 animate-slide-up opacity-0" style={{ animationDelay: "300ms" }}>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white via-neutral-100 to-neutral-500 drop-shadow-[0_4px_16px_rgba(255,255,255,0.1)] select-none">
            BKL
          </h1>
          <p className="text-sm md:text-base font-bold tracking-[0.3em] text-neutral-400 uppercase select-none font-mono">
            BOHOT KHAAS LOG SAMAJ™
          </p>
        </div>

        {/* 3. CLASSIFIED STATEMENTS */}
        <div className="space-y-3 px-4 font-mono text-xs md:text-sm text-neutral-400 animate-slide-up opacity-0" style={{ animationDelay: "450ms" }}>
          <p className="border-b border-white/5 pb-2">
            This website contains personal and bakchodi-related information.
          </p>
          <p className="text-neutral-300">
            Keval <span className="text-red-400 font-semibold">BKL members</span> aur <span className="text-red-400 font-semibold">certified bakchods</span> are allowed beyond this point.
          </p>
          <p className="text-red-500/80 font-semibold text-xs tracking-wider uppercase">
            Unauthorized access is prohibited.
          </p>
        </div>

        {/* 4. ACCESS REQUIREMENTS CARD */}
        <div className="w-full animate-slide-up opacity-0" style={{ animationDelay: "600ms" }}>
          <GlassCard className="relative overflow-hidden group">
            {/* Glowing vertical wire on the left */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-red-500/20 to-transparent group-hover:via-red-500/40 transition-all duration-500" />
            
            <h2 className="text-neutral-200 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-5 border-b border-white/5 pb-2 font-mono text-left flex justify-between items-center">
              <span>Access Requirements</span>
              <span className="text-[10px] text-red-500/80 bg-red-950/30 border border-red-500/20 px-2 py-0.5 rounded font-normal tracking-normal uppercase">
                Required
              </span>
            </h2>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs md:text-sm text-left">
              {[
                "Friendship Verification",
                "Bakchodi Clearance",
                "Emotional Damage Resistance",
                "Certified Group Membership",
              ].map((req, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 text-neutral-400 hover:text-neutral-200 transition-colors duration-200 cursor-default"
                >
                  <span className="flex items-center justify-center w-5 h-5 rounded-full border border-emerald-500/30 bg-emerald-950/20 text-emerald-400 text-xs shadow-[0_0_8px_rgba(16,185,129,0.15)] animate-pulse-green">
                    ✓
                  </span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>

        {/* 5. CTA BUTTON */}
        <div className="w-full pt-2 animate-slide-up opacity-0" style={{ animationDelay: "750ms" }}>
          <Link
            href="/login"
            className="group relative w-full inline-flex items-center justify-center px-8 py-4 rounded-xl border border-red-500/40 bg-gradient-to-b from-red-950/30 to-red-950/10 hover:from-red-900/40 hover:to-red-950/20 text-white font-mono text-sm tracking-widest font-bold uppercase transition-all duration-300 hover:border-red-500 hover:shadow-[0_0_30px_rgba(239,68,68,0.25)] focus:outline-none focus:ring-2 focus:ring-red-500/50"
          >
            {/* Shimmer Effect */}
            <span className="absolute inset-0 w-full h-full rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            
            ENTER BKL & BSDK HEADQUARTERS
          </Link>
        </div>

      </div>

      {/* 5.5 MEMORY LANE SECTION */}
      <div className="w-full max-w-5xl mt-16 mb-12 space-y-8 animate-slide-up opacity-0 relative z-10 text-center" style={{ animationDelay: "900ms" }}>
        
        {/* Section Header */}
        <div className="space-y-2 px-4">
          <h2 className="text-3xl md:text-4xl font-black tracking-widest text-neutral-100 font-mono uppercase drop-shadow-[0_2px_8px_rgba(255,255,255,0.05)]">
            MEMORY LANE 📸
          </h2>
          <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest leading-relaxed">
            <p>Some memories.</p>
            <p>Many regrets.</p>
          </div>
        </div>

        {/* Carousel viewport */}
        <div className="w-full overflow-hidden relative py-4">
          
          {/* Subtle gradient fading mask on left and right for soft look */}
          <div className="absolute top-0 bottom-0 left-0 w-8 md:w-20 bg-gradient-to-r from-[#030712] to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-8 md:w-20 bg-gradient-to-l from-[#030712] to-transparent z-20 pointer-events-none" />

          {/* Scrolling track */}
          <div className="flex gap-6 w-max animate-infinite-scroll hover:[animation-play-state:paused] transition-all">
            {/* First Set of Memory Cards */}
            {MEMORY_ITEMS.map((item, idx) => (
              <div
                key={`m1-${idx}`}
                className="w-72 sm:w-80 md:w-[350px] h-48 sm:h-56 md:h-60 rounded-2xl border border-white/5 hover:border-white/10 bg-neutral-900/30 backdrop-blur-md p-5 flex flex-col justify-between relative overflow-hidden group select-none transition-colors cursor-default shrink-0 shadow-lg"
              >
                {/* Photo overlay vignette */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80 z-10" />
                <div className="absolute inset-0 bg-red-950/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                {/* Top Label */}
                <div className="flex justify-between items-start z-20 font-mono text-[9px] text-neutral-500 uppercase tracking-wider">
                  <span>MEM_RECORD_0{idx + 1}</span>
                  <span>{item.date}</span>
                </div>

                {/* Center placeholder image frame */}
                <div className="flex-grow flex items-center justify-center z-20">
                  <span className="text-4xl text-neutral-700 group-hover:scale-110 transition-transform duration-500 select-none">🖼️</span>
                </div>

                {/* Bottom Metadata */}
                <div className="z-20 text-left space-y-1">
                  <h3 className="font-mono text-sm font-bold text-neutral-200 uppercase tracking-wide group-hover:text-red-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="font-mono text-[10px] text-neutral-500">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
            
            {/* Duplicate Set of Memory Cards for Seamless Looping */}
            {MEMORY_ITEMS.map((item, idx) => (
              <div
                key={`m2-${idx}`}
                className="w-72 sm:w-80 md:w-[350px] h-48 sm:h-56 md:h-60 rounded-2xl border border-white/5 hover:border-white/10 bg-neutral-900/30 backdrop-blur-md p-5 flex flex-col justify-between relative overflow-hidden group select-none transition-colors cursor-default shrink-0 shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80 z-10" />
                <div className="absolute inset-0 bg-red-950/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <div className="flex justify-between items-start z-20 font-mono text-[9px] text-neutral-500 uppercase tracking-wider">
                  <span>MEM_RECORD_0{idx + 1}</span>
                  <span>{item.date}</span>
                </div>

                <div className="flex-grow flex items-center justify-center z-20">
                  <span className="text-4xl text-neutral-700 group-hover:scale-110 transition-transform duration-500 select-none">🖼️</span>
                </div>

                <div className="z-20 text-left space-y-1">
                  <h3 className="font-mono text-sm font-bold text-neutral-200 uppercase tracking-wide group-hover:text-red-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="font-mono text-[10px] text-neutral-500">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* 6. FOOTER */}
      <footer className="w-full mt-auto pt-8 pb-4 text-center z-10 animate-fade-in opacity-0" style={{ animationDelay: "1000ms" }}>
        <div className="flex flex-col items-center gap-1 font-mono text-[10px] md:text-xs text-neutral-600">
          <p className="hover:text-neutral-500 transition-colors duration-200 cursor-default">
            "Established by unemployed engineers with internet access."
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-neutral-700" />
            <span className="tracking-widest uppercase hover:text-neutral-500 transition-colors duration-200">
              Version 1.0.0
            </span>
            <span className="w-1 h-1 rounded-full bg-neutral-700" />
          </div>
        </div>
      </footer>
    </main>
  );
}
