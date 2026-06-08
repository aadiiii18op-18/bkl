"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import ParticlesBackground from "@/components/ParticlesBackground";
import GlassCard from "@/components/GlassCard";

const ALLOWED_MEMBERS = [
  "aadi",
  "vishal",
  "raju",
  "samyak",
  "saloni",
  "riyanshi",
  "sarthak",
  "alok",
  "riya",
  "ayush",
  "rohit"
];

export default function MemberProfile() {
  const router = useRouter();
  const params = useParams();
  const usernameParam = params?.username as string;

  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);
  const [normalizedName, setNormalizedName] = useState("");

  useEffect(() => {
    if (!usernameParam) return;

    const nameLower = usernameParam.toLowerCase().trim();
    if (ALLOWED_MEMBERS.includes(nameLower)) {
      setIsAuthorized(true);
      setNormalizedName(nameLower);
    } else {
      setIsAuthorized(false);
    }
  }, [usernameParam]);

  const handleDisconnect = () => {
    localStorage.removeItem("bkl_current_user");
    router.push("/login");
  };

  // 1. LOADING STATE
  if (isAuthorized === null) {
    return (
      <main className="relative min-h-screen flex items-center justify-center bg-[#030712] text-neutral-400 font-mono">
        <ParticlesBackground />
        <div className="flex flex-col items-center gap-3">
          <span className="w-6 h-6 border-2 border-t-transparent border-neutral-500 rounded-full animate-spin" />
          <p className="text-xs uppercase tracking-widest">Accessing BKL Database...</p>
        </div>
      </main>
    );
  }

  // 2. UNAUTHORIZED LOCK PAGE
  if (!isAuthorized) {
    return (
      <main className="relative min-h-screen flex flex-col justify-center items-center p-4 overflow-hidden font-mono">
        <ParticlesBackground />
        
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none -z-20" />

        <div className="w-full max-w-md animate-slide-up opacity-0">
          <GlassCard className="border-red-500/20 text-center space-y-6">
            <div className="w-12 h-12 rounded-full border border-red-500/30 bg-red-950/20 text-red-500 text-xl flex items-center justify-center mx-auto animate-pulse-glow">
              🔒
            </div>

            <div className="space-y-2">
              <h1 className="text-lg font-black tracking-widest text-neutral-100 uppercase">
                UNAUTHORIZED TERMINAL
              </h1>
              <p className="text-xs text-neutral-500 uppercase tracking-wider">
                Identity unregistered in BKL Database
              </p>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed bg-black/40 border border-neutral-900 p-4 rounded-lg">
              The identity <span className="text-red-400 font-bold">"{usernameParam}"</span> is not recognized as a registered member of Bohot Khaas Log Samaj™.
            </p>

            <button
              onClick={() => router.push("/login")}
              className="w-full py-3 rounded-lg border border-neutral-800 hover:border-neutral-500 bg-neutral-900/60 hover:bg-neutral-800 text-white text-xs tracking-widest font-bold uppercase transition-all duration-200 cursor-pointer"
            >
              RETURN TO SECURITY GATE
            </button>
          </GlassCard>
        </div>
      </main>
    );
  }

  // 3. PREMIUM AUTHORIZED PROFILE PAGE
  const displayTitle = normalizedName.toUpperCase();

  return (
    <main className="relative min-h-screen flex flex-col p-4 md:p-8 overflow-hidden font-mono">
      <ParticlesBackground />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none -z-20" />

      {/* Glowing radial gradient */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-neutral-900/5 rounded-full blur-[80px] pointer-events-none -z-25" />

      {/* Profile Container */}
      <div className="w-full max-w-5xl mx-auto flex flex-col space-y-6 z-10 my-auto animate-slide-up opacity-0" style={{ animationDelay: "100ms" }}>
        
        {/* HEADER SECTION */}
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/5 pb-6">
          <div className="space-y-1 text-left">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-green" />
              <p className="text-[10px] text-neutral-500 tracking-[0.2em] uppercase">
                BKL SECURE DIRECTORY
              </p>
            </div>
            <h1 className="text-xl md:text-2xl font-black tracking-widest text-neutral-100 uppercase">
              MEMBER ARCHIVE // {displayTitle}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[10px] border border-emerald-500/20 bg-emerald-950/20 text-emerald-400 px-3 py-1.5 rounded-md uppercase tracking-wider">
              CLEARANCE: VERIFIED
            </span>
            <button
              onClick={handleDisconnect}
              className="px-4 py-2 border border-neutral-800 hover:border-red-500/50 hover:bg-red-950/10 text-neutral-400 hover:text-red-400 text-xs tracking-widest rounded-lg transition-all uppercase cursor-pointer"
            >
              DISCONNECT
            </button>
          </div>
        </header>

        {/* PROFILE WORKSPACE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* PROFILE SUMMARY */}
          <GlassCard className="md:col-span-1 border-white/5 text-left flex flex-col justify-between">
            <div className="space-y-6">
              <h2 className="text-xs font-bold tracking-widest uppercase text-neutral-400 border-b border-white/5 pb-3">
                Profile Specs
              </h2>
              
              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-neutral-500">MEMBER NAME:</span>
                  <span className="text-neutral-200 uppercase">{normalizedName}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-neutral-500">ROLE:</span>
                  <span className="text-neutral-200">CORE SAMAJ MEMBER</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-neutral-500">LAST SYNC:</span>
                  <span className="text-neutral-200">JUST NOW</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-neutral-500">STATUS:</span>
                  <span className="text-emerald-400 font-bold uppercase">ACTIVE</span>
                </div>
              </div>
            </div>

            <div className="mt-6 p-3 rounded-lg bg-black/40 border border-neutral-900 text-[10px] text-neutral-500">
              ⚡ Secure token successfully generated for session.
            </div>
          </GlassCard>

          {/* DEDICATED VAULT PLACEHOLDER */}
          <GlassCard className="md:col-span-2 border-white/5 text-left flex flex-col justify-between min-h-[280px]">
            <div className="space-y-4">
              <h2 className="text-xs font-bold tracking-widest uppercase text-neutral-400 border-b border-white/5 pb-3">
                Secure Personal Vault
              </h2>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Welcome to your dedicated BKL space, <span className="text-emerald-400 uppercase font-semibold">{normalizedName}</span>. Your private digital terminal holds personalized parameters:
              </p>
            </div>

            {/* PREMIUM VAULT PLACEHOLDER GRAPHIC */}
            <div className="relative flex-grow flex flex-col items-center justify-center border border-dashed border-neutral-800 rounded-lg bg-black/20 p-6 my-4 select-none">
              <span className="text-2xl mb-2 animate-pulse">📁</span>
              <p className="text-neutral-400 text-xs font-bold uppercase tracking-wider mb-1">
                Awaiting Content Initialization
              </p>
              <p className="text-neutral-600 text-[10px] max-w-xs text-center leading-relaxed">
                Personalized dashboard modules and group archives are being structured by the administrator. Check back in subsequent versions.
              </p>
            </div>

            <p className="text-[10px] text-neutral-600 uppercase tracking-widest text-right">
              Archive Version 1.0.0
            </p>
          </GlassCard>

          {/* SECURE SESSION FEED */}
          <GlassCard className="md:col-span-3 border-white/5 text-left">
            <h2 className="text-xs font-bold tracking-widest uppercase text-neutral-400 border-b border-white/5 pb-3 mb-4">
              Secure Feed Logger (Session Trace)
            </h2>
            
            <div className="bg-black/60 border border-neutral-900 rounded-xl p-4 min-h-[110px] max-h-[140px] overflow-y-auto text-[11px] space-y-2 text-neutral-300">
              <div>
                <span className="text-neutral-600 font-semibold">[00:01]</span> [SYSTEM] SECURE HANDSHAKE COMPLETED. SESSION ESTABLISHED FOR AGENT_{displayTitle}.
              </div>
              <div className="text-emerald-400">
                <span className="text-neutral-600 font-semibold">[00:02]</span> [SECURITY] INTEGRITY AUDIT PASSED. NATIVE MEMBER CLEARANCE DETECTED.
              </div>
              <div>
                <span className="text-neutral-600 font-semibold">[00:02]</span> [DATABASE] DOWNLOADING INDIVIDUAL ARCHIVES... INITIALIZING BLOCKS...
              </div>
              <div className="text-neutral-500 animate-pulse">
                _ terminal listening for command triggers...
              </div>
            </div>
          </GlassCard>

        </div>

      </div>
    </main>
  );
}
