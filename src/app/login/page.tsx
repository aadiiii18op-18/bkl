"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
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

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    if (!trimmedUsername) {
      setError("Please enter your name.");
      return;
    }
    if (!trimmedPassword) {
      setError("Please enter your password.");
      return;
    }

    setIsLoading(true);

    // Normalize username for lookup
    const normalizedUsername = trimmedUsername.toLowerCase();

    setTimeout(() => {
      setIsLoading(false);
      
      if (ALLOWED_MEMBERS.includes(normalizedUsername)) {
        // Authenticate and redirect to dedicated profile route
        localStorage.setItem("bkl_current_user", normalizedUsername);
        router.push(`/member/${normalizedUsername}`);
      } else {
        setError("Access denied. Member not found in database.");
      }
    }, 1000); // Smooth professional transition delay
  };

  return (
    <main className="relative min-h-screen flex flex-col justify-center items-center p-4 overflow-hidden select-none">
      {/* Background canvas particles */}
      <ParticlesBackground />

      {/* Security Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none -z-20" />
      
      {/* Background glow radial */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neutral-900/5 rounded-full blur-[100px] pointer-events-none -z-25" />

      {/* Main Glassmorphism Portal */}
      <div className="w-full max-w-md flex flex-col space-y-6 z-10 my-auto animate-slide-up opacity-0" style={{ animationDelay: "100ms" }}>
        
        {/* Navigation Link */}
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-neutral-300 transition-colors w-fit group">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> BACK TO MAIN GATEWAY
        </Link>

        <GlassCard className="relative border-neutral-800">
          {/* Subtle glowing header line */}
          <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-neutral-700/30 to-transparent" />

          <div className="text-center space-y-2 mb-8">
            <h2 className="text-xl font-bold tracking-widest text-neutral-100 font-mono uppercase">
              MEMBER ACCESS GATE
            </h2>
            <p className="text-xs text-neutral-500 font-mono uppercase tracking-wider">
              BKL Database Verification
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username Input */}
            <div className="space-y-2">
              <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider">
                What's Your Name?
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your name"
                className="w-full bg-black/40 border border-neutral-800 hover:border-neutral-700 focus:border-neutral-500 rounded-lg px-4 py-3 text-sm text-neutral-200 font-mono placeholder-neutral-600 outline-none transition-all"
                disabled={isLoading}
              />
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full bg-black/40 border border-neutral-800 hover:border-neutral-700 focus:border-neutral-500 rounded-lg px-4 py-3 text-sm text-neutral-200 font-mono placeholder-neutral-600 outline-none transition-all"
                disabled={isLoading}
              />
            </div>

            {/* Clean Error Notification */}
            {error && (
              <div className="p-3 rounded-lg border border-red-500/20 bg-red-950/10 text-red-400 text-xs font-mono text-left animate-fade-in">
                {error}
              </div>
            )}

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 rounded-lg border border-neutral-700 bg-neutral-900/60 hover:bg-neutral-850 hover:border-neutral-500 text-white font-mono text-xs tracking-widest font-bold uppercase transition-all duration-200 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] disabled:opacity-50 cursor-pointer"
            >
              {isLoading ? "VERIFYING CREDENTIALS..." : "LOGIN"}
            </button>
          </form>
        </GlassCard>

        {/* Small subtle footer info */}
        <p className="text-[10px] font-mono text-neutral-600 text-center uppercase tracking-widest">
          Secure Encrypted Session
        </p>
      </div>
    </main>
  );
}
