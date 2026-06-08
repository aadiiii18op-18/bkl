"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ParticlesBackground from "@/components/ParticlesBackground";
import GlassCard from "@/components/GlassCard";

const SAMPLE_ROASTS = [
  "Agent Pappu: 'Tera resume read karne se accha mai Terms & Conditions read kar lu.'",
  "Agent Bunty: 'Bhai, startup idea hai... but funding 0 hai, coding aati nhi, aur design copy krna hai.'",
  "Agent Chintu: 'Maine CSS border adjust krne me 6 ghante spend kiye... custom scrollbar abhi bhi toota hai.'",
  "System Notification: Chai break detected. All agents went offline for an indefinite period.",
  "Agent Pappu: 'Bhai is weekend goa chalein?' -> consensus failed: budget is in negative values.",
  "System Alert: Agent Chintu tried to write clean code. Emotional damage resistance check failed.",
];

export default function Dashboard() {
  const router = useRouter();
  const [nickname, setNickname] = useState("Agent Pappu");
  const [clearance, setClearance] = useState("LEVEL 4: CERTIFIED BAKCHOD");
  const [damageLevel, setDamageLevel] = useState(50);
  const [roasts, setRoasts] = useState<string[]>([]);
  const [isSimulating, setIsSimulating] = useState(false);

  useEffect(() => {
    // Read credentials from localStorage
    const savedName = localStorage.getItem("bkl_agent_nickname");
    const savedLevel = localStorage.getItem("bkl_clearance_level");

    if (savedName) setNickname(savedName);
    if (savedLevel) setClearance(savedLevel);

    // Seed default roasts
    setRoasts(SAMPLE_ROASTS.slice(0, 3));
  }, []);

  const handleDisconnect = () => {
    localStorage.removeItem("bkl_agent_nickname");
    localStorage.removeItem("bkl_clearance_level");
    router.push("/");
  };

  const getDamageDescription = (level: number) => {
    if (level === 0) return "IMMUNE: No emotional damage. Pure stone cold robot.";
    if (level <= 20) return "TIS BUT A SCRATCH: Minor teasing. You laughed it off.";
    if (level <= 50) return "MODERATE DAMAGE: Mummy ko call karne ka mind ho rha hai.";
    if (level <= 80) return "CRITICAL BURN: Keval tapri ki ek cup chai can fix this state.";
    return "FATAL DAMAGE: Uninstalled WhatsApp, blocked everyone, moved to the Himalayas.";
  };

  const simulateRoast = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setIsSimulating(false);
      const randomRoast = SAMPLE_ROASTS[Math.floor(Math.random() * SAMPLE_ROASTS.length)];
      const timestamp = new Date().toLocaleTimeString();
      setRoasts((prev) => [`[${timestamp}] ${randomRoast}`, ...prev.slice(0, 4)]);
    }, 600);
  };

  return (
    <main className="relative min-h-screen flex flex-col p-4 md:p-8 overflow-hidden select-none">
      {/* Background Particles */}
      <ParticlesBackground />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none -z-20" />

      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-950/5 rounded-full blur-[80px] pointer-events-none -z-25" />

      {/* Dashboard Wrapper */}
      <div className="w-full max-w-5xl mx-auto flex flex-col space-y-6 z-10 my-auto">
        
        {/* HEADER SECTION */}
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-white/5 pb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse-green" />
              <h1 className="text-xl md:text-2xl font-black tracking-widest font-mono text-neutral-100 uppercase">
                BKL SECRET HQ
              </h1>
            </div>
            <p className="text-xs md:text-sm font-mono text-neutral-400">
              Welcome back, <span className="text-red-400 font-semibold">{nickname}</span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-block text-[10px] font-mono border border-red-500/20 bg-red-950/20 text-red-400 px-3 py-1.5 rounded-md uppercase tracking-wider">
              {clearance}
            </span>
            <button
              onClick={handleDisconnect}
              className="px-4 py-2 border border-neutral-800 hover:border-red-500/50 hover:bg-red-950/10 text-neutral-400 hover:text-red-400 text-xs font-mono tracking-widest rounded-lg transition-all uppercase cursor-pointer"
            >
              DISCONNECT
            </button>
          </div>
        </header>

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* COLUMN 1: ORGANIZATION STATS */}
          <GlassCard className="md:col-span-1 border-white/5 flex flex-col justify-between">
            <div>
              <h2 className="text-xs font-mono font-bold tracking-widest uppercase text-neutral-400 border-b border-white/5 pb-3 mb-4">
                HQ Core Statistics
              </h2>
              <div className="space-y-4 font-mono text-xs">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-neutral-500">ACTIVE AGENTS:</span>
                  <span className="text-neutral-200">4 (All Asleep)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-neutral-500">UNEMPLOYMENT RATE:</span>
                  <span className="text-red-400 font-semibold">100%</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-neutral-500">CHAI BREAKS TODAY:</span>
                  <span className="text-neutral-200">18</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-neutral-500">SYSTEM CLEARANCE:</span>
                  <span className="text-emerald-400">STABLE (0 LOGIC)</span>
                </div>
              </div>
            </div>

            <div className="mt-6 p-3 rounded-lg bg-black/40 border border-neutral-900 text-[10px] font-mono text-neutral-500">
              ⚡ Status: Active Roasting protocol configured. No production code allowed.
            </div>
          </GlassCard>

          {/* COLUMN 2: INTERACTIVE EMOTIONAL DAMAGE CALCULATOR */}
          <GlassCard className="md:col-span-2 border-white/5 flex flex-col justify-between">
            <div>
              <h2 className="text-xs font-mono font-bold tracking-widest uppercase text-neutral-400 border-b border-white/5 pb-3 mb-4 flex justify-between items-center">
                <span>Emotional Damage Calculator</span>
                <span className="text-red-400 font-bold">{damageLevel}%</span>
              </h2>

              <div className="space-y-6">
                <p className="text-xs font-mono text-neutral-400 leading-relaxed">
                  Use the slider to evaluate the current level of psychological impact sustained during roast sessions:
                </p>

                {/* SLIDER INPUT */}
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={damageLevel}
                    onChange={(e) => setDamageLevel(Number(e.target.value))}
                    className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-red-500"
                  />
                  <div className="flex justify-between font-mono text-[9px] text-neutral-600">
                    <span>0% (ROBOT)</span>
                    <span>50% (SAD)</span>
                    <span>100% (HIMALAYAS)</span>
                  </div>
                </div>

                {/* CALCULATED OUTPUT */}
                <div className="p-4 rounded-lg border border-red-500/20 bg-red-950/10 min-h-[72px] flex items-center">
                  <p className="font-mono text-xs md:text-sm text-red-400 uppercase tracking-wide">
                    {getDamageDescription(damageLevel)}
                  </p>
                </div>
              </div>
            </div>

            <p className="text-[10px] font-mono text-neutral-500 mt-4 text-right">
              Disclaimer: BKL Samaj takes zero responsibility for broken egos.
            </p>
          </GlassCard>

          {/* COLUMN 3: ROAST LOGS (CONSOLE MONITOR) */}
          <GlassCard className="md:col-span-3 border-white/5">
            <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4">
              <h2 className="text-xs font-mono font-bold tracking-widest uppercase text-neutral-400">
                Agent Roast Console (Classified Feed)
              </h2>
              <button
                onClick={simulateRoast}
                disabled={isSimulating}
                className="px-3 py-1.5 border border-red-500/30 bg-red-950/20 hover:bg-red-950/30 text-white font-mono text-[10px] tracking-wider rounded uppercase hover:border-red-500 transition-all cursor-pointer"
              >
                {isSimulating ? "DECRYPTING FEED..." : "SIMULATE ROAST"}
              </button>
            </div>

            {/* CONSOLE OUTPUT BOX */}
            <div className="bg-black/60 border border-neutral-900 rounded-xl p-4 min-h-[160px] max-h-[200px] overflow-y-auto font-mono text-xs space-y-2.5 text-left">
              {roasts.map((roast, index) => (
                <div
                  key={index}
                  className={`border-l-2 pl-2 transition-all duration-300 ${
                    roast.includes("System")
                      ? "border-emerald-500/50 text-emerald-400"
                      : "border-red-500/50 text-neutral-300"
                  }`}
                >
                  {roast}
                </div>
              ))}
              <div className="text-neutral-700 animate-pulse text-[10px]">
                _ console listener active. awaiting chat trigger...
              </div>
            </div>
          </GlassCard>

        </div>

        {/* CLASSIFIED POLICIES SECTION */}
        <section className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
          <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-neutral-500 mb-3 text-left">
            Active Group Protocols
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-[11px] text-neutral-400">
            <div className="p-2 border border-neutral-900 rounded bg-black/20 text-left">
              <span className="text-red-400 font-bold">/bhai</span>
              <p className="text-neutral-500 text-[10px] mt-1">Pings everyone to ask for a code review (no one replies).</p>
            </div>
            <div className="p-2 border border-neutral-900 rounded bg-black/20 text-left">
              <span className="text-red-400 font-bold">/daru</span>
              <p className="text-neutral-500 text-[10px] mt-1">Weekend planning command. Initiates budget calculation (-0).</p>
            </div>
            <div className="p-2 border border-neutral-900 rounded bg-black/20 text-left">
              <span className="text-red-400 font-bold">/crying</span>
              <p className="text-neutral-500 text-[10px] mt-1">Triggers auto-reply: 'Bhai console log laga ke dekh.'</p>
            </div>
            <div className="p-2 border border-neutral-900 rounded bg-black/20 text-left">
              <span className="text-red-400 font-bold">/unemployed</span>
              <p className="text-neutral-500 text-[10px] mt-1">Default state indicator. Automatically active.</p>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
