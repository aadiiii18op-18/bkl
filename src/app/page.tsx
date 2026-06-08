import Link from "next/link";
import ParticlesBackground from "@/components/ParticlesBackground";
import GlassCard from "@/components/GlassCard";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col justify-center items-center p-4 overflow-hidden select-none">
      {/* Dynamic interactive particles */}
      <ParticlesBackground />

      {/* Futuristic Grid Overlay Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none -z-20" />
      
      {/* Cinematic Ambient Glow Radial Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-950/10 rounded-full blur-[120px] pointer-events-none -z-25" />

      {/* Main Container */}
      <div className="w-full max-w-xl flex flex-col items-center justify-center text-center space-y-8 z-10 my-auto">
        
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

      {/* 6. FOOTER */}
      <footer className="w-full mt-auto pt-8 pb-4 text-center z-10 animate-fade-in opacity-0" style={{ animationDelay: "900ms" }}>
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
