"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ParticlesBackground from "@/components/ParticlesBackground";
import GlassCard from "@/components/GlassCard";

const JOKE_ERRORS = [
  "ACCESS DENIED: Maturity Index too high. BKL headquarters requires a maximum maturity score of 12%.",
  "ERROR: Unemployment check failed. Active taxpayer detected. Access restricted.",
  "WARNING: Actual productivity levels detected. System locked. Please do some time-wasting activity and retry.",
  "DENIED: Emotional damage resilience check failed. You look like you get offended by memes.",
  "CRITICAL: User is suspected of having a healthy sleeping cycle. Access forbidden.",
  "SYSTEM BLOCK: Intrusive thoughts not approved. Please consult a fellow BSDK member immediately.",
];

export default function Login() {
  const router = useRouter();
  const [nickname, setNickname] = useState("");
  const [clearancePhrase, setClearancePhrase] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [jokesIndex, setJokesIndex] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nickname.trim()) {
      setError("AUTHENTICATION ERROR: Agent Nickname is required.");
      return;
    }
    if (!clearancePhrase.trim()) {
      setError("AUTHENTICATION ERROR: Clearance Phrase is required.");
      return;
    }

    setIsLoading(true);
    setError("");

    // Humorous check: if the clearance code includes 'bsdk', 'bkl' or is 'bohot khaas' - success!
    const normalizedCode = clearancePhrase.toLowerCase().trim();
    
    setTimeout(() => {
      setIsLoading(false);
      if (
        normalizedCode.includes("bsdk") ||
        normalizedCode.includes("bkl") ||
        normalizedCode.includes("bakchod") ||
        normalizedCode.includes("samaj")
      ) {
        // Authenticated! Save agent info to localStorage for dashboard
        localStorage.setItem("bkl_agent_nickname", nickname);
        localStorage.setItem("bkl_clearance_level", "LEVEL 4: CERTIFIED BAKCHOD");
        router.push("/dashboard");
      } else {
        // Show a joke error message
        setError(JOKE_ERRORS[jokesIndex]);
        // Cycle through jokes
        setJokesIndex((prev) => (prev + 1) % JOKE_ERRORS.length);
      }
    }, 1200); // Cinematic delay
  };

  const handleBypass = () => {
    setIsLoading(true);
    setError("");
    
    setTimeout(() => {
      setIsLoading(false);
      localStorage.setItem("bkl_agent_nickname", nickname.trim() || "Anonymous BSDK");
      localStorage.setItem("bkl_clearance_level", "LEVEL 5: EMERGENCY BYPASS (UNEMPLOYED ENGINEER)");
      router.push("/dashboard");
    }, 800);
  };

  return (
    <main className="relative min-h-screen flex flex-col justify-center items-center p-4 overflow-hidden select-none">
      {/* Dynamic interactive particles */}
      <ParticlesBackground />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none -z-20" />
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-950/5 rounded-full blur-[100px] pointer-events-none -z-25" />

      {/* Main Glassmorphism Form Container */}
      <div className="w-full max-w-md flex flex-col space-y-6 z-10 my-auto animate-slide-up opacity-0" style={{ animationDelay: "150ms" }}>
        
        {/* Back Link */}
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-neutral-300 transition-colors w-fit group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> BACK TO MAIN GATEway
        </Link>

        <GlassCard className="relative border-red-500/20">
          {/* Glowing Red Warning Header Line */}
          <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />

          <div className="text-center space-y-2 mb-8">
            <h2 className="text-xl md:text-2xl font-black tracking-widest text-neutral-100 font-mono uppercase">
              BKL SECURITY GATE
            </h2>
            <p className="text-xs text-neutral-500 font-mono uppercase tracking-wider">
              Identity Verification Terminal
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Nickname Input */}
            <div className="space-y-2">
              <label className="block text-[10px] md:text-xs font-mono text-neutral-400 uppercase tracking-widest">
                Agent Nickname (e.g. Pappu, Bunty)
              </label>
              <input
                type="text"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                placeholder="ENTER AGENT CODENAME"
                className="w-full bg-black/40 border border-neutral-800 hover:border-neutral-700 focus:border-red-500/60 rounded-lg px-4 py-3 text-sm text-neutral-200 font-mono tracking-wide placeholder-neutral-700 outline-none transition-all"
                disabled={isLoading}
              />
            </div>

            {/* Clearance Phrase Input */}
            <div className="space-y-2">
              <label className="block text-[10px] md:text-xs font-mono text-neutral-400 uppercase tracking-widest">
                Clearance Phrase (Hint: What is a BSDK?)
              </label>
              <input
                type="password"
                value={clearancePhrase}
                onChange={(e) => setClearancePhrase(e.target.value)}
                placeholder="••••••••••••••"
                className="w-full bg-black/40 border border-neutral-800 hover:border-neutral-700 focus:border-red-500/60 rounded-lg px-4 py-3 text-sm text-neutral-200 font-mono tracking-wide placeholder-neutral-700 outline-none transition-all"
                disabled={isLoading}
              />
            </div>

            {/* Error Message Panel */}
            {error && (
              <div className="p-3.5 rounded-lg border border-red-500/20 bg-red-950/20 text-red-400 text-xs font-mono leading-relaxed text-left animate-fade-in">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full relative inline-flex items-center justify-center py-3.5 rounded-lg border border-red-500/30 bg-red-950/20 hover:bg-red-950/30 text-white font-mono text-xs tracking-widest font-bold uppercase transition-all duration-200 hover:border-red-500/80 hover:shadow-[0_0_15px_rgba(239,68,68,0.15)] disabled:opacity-50 cursor-pointer"
            >
              {isLoading ? "DECRYPTING CLEARANCE..." : "VERIFY IDENTITY"}
            </button>
          </form>

          {/* Emergency Bypass Divider */}
          <div className="relative my-6 text-center">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-neutral-800" />
            </div>
            <span className="relative bg-[#070b19] px-3 font-mono text-[9px] text-neutral-600 uppercase tracking-widest">
              Emergency Procedures
            </span>
          </div>

          {/* Bypass Button */}
          <button
            type="button"
            onClick={handleBypass}
            disabled={isLoading}
            className="w-full bg-neutral-900/60 hover:bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 text-neutral-400 hover:text-neutral-200 text-[10px] font-mono tracking-widest py-2.5 rounded-lg transition-all uppercase cursor-pointer"
          >
            Initiate Emergency BSDK Bypass Code
          </button>
        </GlassCard>

        {/* Warning text */}
        <p className="text-[10px] font-mono text-neutral-600 text-center uppercase tracking-wider">
          Warning: IP logged. Intrusive thoughts tracked. Cookies will be eaten.
        </p>
      </div>
    </main>
  );
}
