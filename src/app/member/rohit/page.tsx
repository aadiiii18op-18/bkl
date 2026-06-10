"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RohitStory() {
  const router = useRouter();

  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // --- STATE FOR INTERACTIONS ---
  // Section 2: Sabse Bada Dukh
  const [dukhRevealed, setDukhRevealed] = useState(false);

  // Section 4: Choose One & Runaway Vishal
  const [chooseAnswered, setChooseAnswered] = useState(false);
  const [vishalOffset, setVishalOffset] = useState({ x: 0, y: 0 });

  const handleVishalInteraction = () => {
    const range = 130;
    let newX = (Math.random() - 0.5) * 2 * range;
    let newY = (Math.random() - 0.5) * 2 * range;
    if (Math.abs(newX) < 45) newX = newX >= 0 ? 55 : -55;
    if (Math.abs(newY) < 45) newY = newY >= 0 ? 55 : -55;
    setVishalOffset({ x: newX, y: newY });
  };

  // Generate background leaves
  const [leaves, setLeaves] = useState<{ id: number; left: string; delay: string; duration: string; size: string; opacity: number; icon: string }[]>([]);
  useEffect(() => {
    const icons = ["🍃", "🌿", "🌱"];
    const generatedLeaves = [...Array(14)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 90 + 5}%`,
      delay: `${Math.random() * 8}s`,
      duration: `${12 + Math.random() * 8}s`,
      size: `${14 + Math.random() * 22}px`,
      opacity: 0.15 + Math.random() * 0.2,
      icon: icons[Math.floor(Math.random() * icons.length)]
    }));
    setLeaves(generatedLeaves);
  }, []);

  const handleBackToHQ = () => {
    router.push("/");
  };

  return (
    <main className="relative bg-[#f0fdf4] text-zinc-700 min-h-screen overflow-x-hidden selection:bg-green-200">
      
      {/* OVERRIDE GLOBAL HACKER OVERLAYS AND ADD FLOATING ANIMATIONS */}
      <style jsx global>{`
        /* Completely disable global CRT scanline overlays for this page */
        .scanlines, .scanline-bar {
          display: none !important;
        }

        /* Floating Leaves Animation */
        @keyframes floatUpLeaf {
          0% {
            transform: translateY(110vh) translateX(0) scale(0.7) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: var(--leaf-opacity, 0.3);
          }
          90% {
            opacity: var(--leaf-opacity, 0.3);
          }
          100% {
            transform: translateY(-20vh) translateX(30px) scale(1.1) rotate(360deg);
            opacity: 0;
          }
        }
        .floating-leaf {
          position: fixed;
          bottom: -70px;
          user-select: none;
          pointer-events: none;
          z-index: 5;
          animation: floatUpLeaf linear infinite;
        }

        /* Bounce Animation for Friendly Buttons */
        .btn-bounce {
          transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .btn-bounce:hover {
          transform: scale(1.04) translateY(-1px);
        }
        .btn-bounce:active {
          transform: scale(0.98) translateY(0);
        }
        
        /* Hide scrollbars for carousel scroll */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* CUTE FLOATING LEAVES BACKDROP */}
      <div className="fixed inset-0 pointer-events-none select-none z-0">
        {leaves.map((leaf) => (
          <span
            key={leaf.id}
            className="floating-leaf"
            style={{
              left: leaf.left,
              animationDelay: leaf.delay,
              animationDuration: leaf.duration,
              fontSize: leaf.size,
              "--leaf-opacity": leaf.opacity
            } as React.CSSProperties}
          >
            {leaf.icon}
          </span>
        ))}
      </div>

      {/* SOFT PASTEL BACKGROUND DECORATIONS */}
      <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-green-200/30 blur-[90px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-emerald-100/30 blur-[100px] pointer-events-none z-0" />

      {/* --- SECTION 1: WELCOME --- */}
      <section
        id="sec-1"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden"
      >
        <div className="shrink-0 h-2" />

        {/* Content Container */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-sm overflow-hidden my-auto space-y-4">
          {/* Large Photo Placeholder */}
          <div className="w-full max-w-[280px] sm:max-w-xs md:max-w-[320px] h-[45vh] md:h-[40vh] max-h-[50vh] md:max-h-[42vh] rounded-3xl border-4 border-white bg-green-100/40 backdrop-blur-md flex flex-col items-center justify-center p-4 shadow-[0_10px_25px_rgba(52,211,153,0.08)] relative overflow-hidden group flex-shrink-0">
            <span className="text-4xl mb-2">📚</span>
            <p className="font-sans text-xs font-bold tracking-wider text-zinc-650 uppercase text-center px-4 leading-relaxed">
              ROHIT PHOTO PLACEHOLDER
            </p>
            <span className="text-[9px] text-green-500 font-bold uppercase tracking-widest mt-3">
              ✨ Core Roster ✨
            </span>
          </div>

          <div className="space-y-1 text-center shrink-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-green-600 drop-shadow-[0_2px_4px_rgba(52,211,153,0.1)] uppercase leading-none">
              WELCOME ROHIT BHAIII 💚
            </h1>
            <p className="font-sans text-xs sm:text-sm font-bold text-zinc-400 uppercase tracking-widest pt-2">
              🎓 ORIGINAL NOTES PROVIDER 🎓
            </p>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={() => scrollToSection("sec-2")}
          className="btn-bounce w-full max-w-xs py-3.5 rounded-full bg-green-550 hover:bg-green-650 text-white font-bold tracking-widest text-xs uppercase shadow-[0_8px_16px_rgba(52,211,153,0.15)] transition-colors cursor-pointer shrink-0"
        >
          NEXT →
        </button>
      </section>

      {/* --- SECTION 2: SABSE BADA DUKHH --- */}
      <section
        id="sec-2"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden border-t border-green-100"
      >
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-green-600 text-center shrink-0">
          SABSE BADA DUKHH 😔
        </h2>

        {/* Content Container */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-sm overflow-hidden my-auto space-y-4 shrink-0">
          {!dukhRevealed ? (
            <button
              onClick={() => setDukhRevealed(true)}
              className="btn-bounce px-10 py-4.5 rounded-full bg-green-550 hover:bg-green-650 text-white font-sans text-sm tracking-widest font-black uppercase shadow-md cursor-pointer"
            >
              TAP TO REVEAL
            </button>
          ) : (
            <div className="w-full rounded-3xl border-4 border-white bg-green-100/40 p-6 text-center shadow-sm animate-scale-in flex flex-col justify-center items-center min-h-[160px]">
              <span className="text-4xl mb-3">🚌</span>
              <p className="font-sans text-sm md:text-base font-black text-green-650 uppercase tracking-wider leading-relaxed">
                BUS SE GHAR JANE MAI 2 GHNTE LAGTE HAII 😭
              </p>
            </div>
          )}
        </div>

        {/* Button */}
        <div className="w-full max-w-xs shrink-0 min-h-[50px] flex items-center justify-center">
          {dukhRevealed ? (
            <button
              onClick={() => scrollToSection("sec-3")}
              className="btn-bounce w-full py-3.5 rounded-full bg-green-550 hover:bg-green-650 text-white font-bold tracking-widest text-xs uppercase shadow-[0_8px_16px_rgba(52,211,153,0.15)] transition-colors cursor-pointer animate-fade-in"
            >
              CONTINUE →
            </button>
          ) : (
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
              Tap above to unlock
            </span>
          )}
        </div>
      </section>

      {/* --- SECTION 3: ROHIT ARCHIVES --- */}
      <section
        id="sec-3"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden border-t border-green-100"
      >
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-green-600 text-center shrink-0">
          ROHIT ARCHIVES 📸
        </h2>

        {/* Swipeable Grid Horizontal Carousel */}
        <div className="flex-grow flex items-center justify-center w-full max-w-5xl overflow-hidden my-auto py-2 shrink-0">
          <div className="w-full overflow-x-auto flex flex-row flex-nowrap gap-6 py-4 px-2 snap-x snap-mandatory no-scrollbar scroll-smooth">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div
                key={num}
                className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.33%-16px)] flex-shrink-0 snap-center rounded-3xl border-4 border-white bg-green-50/80 backdrop-blur-md flex flex-col items-center justify-center p-6 shadow-md h-[40vh] md:h-[38vh] max-h-[44vh] select-none hover:border-green-400 transition-colors animate-fade-in"
              >
                <span className="text-3xl mb-3">🍀</span>
                <p className="font-sans text-sm font-black tracking-widest text-green-500 uppercase text-center">
                  PHOTO SLOT 0{num}
                </p>
                <span className="font-sans text-[9px] text-zinc-400 font-bold uppercase tracking-wider mt-3">
                  Memory Record 00{num}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Transition Fact & Button */}
        <div className="w-full flex flex-col items-center space-y-3 shrink-0">
          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest select-none">
            "Photos remain highly classified."
          </span>
          <button
            onClick={() => scrollToSection("sec-4")}
            className="btn-bounce w-full max-w-xs py-3.5 rounded-full bg-green-550 hover:bg-green-650 text-white font-bold tracking-widest text-xs uppercase shadow-[0_8px_16px_rgba(52,211,153,0.15)] transition-colors cursor-pointer shrink-0"
          >
            NEXT →
          </button>
        </div>
      </section>

      {/* --- SECTION 4: RUNAWAY VISHAL CHOICE --- */}
      <section
        id="sec-4"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden border-t border-green-100"
      >
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-green-600 text-center shrink-0">
          CHOOSE ONE 💚
        </h2>

        {/* Content Container (Runaway Button implementation) */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-md overflow-hidden my-auto space-y-6 shrink-0 relative">
          
          <div className="w-full max-w-sm rounded-3xl border-4 border-white bg-green-100/50 backdrop-blur-md p-6 min-h-[200px] flex flex-col justify-center items-center shadow-[0_12px_24px_rgba(52,211,153,0.06)] relative overflow-visible">
            
            {!chooseAnswered ? (
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center relative min-h-[120px] overflow-visible">
                {/* KHUSHI BUTTON */}
                <button
                  onClick={() => setChooseAnswered(true)}
                  className="btn-bounce w-36 py-3.5 rounded-full bg-green-550 hover:bg-green-650 text-white font-bold text-xs tracking-widest uppercase shadow-md cursor-pointer z-10"
                >
                  KHUSHI
                </button>

                {/* RUNAWAY VISHAL BUTTON */}
                <div
                  style={{
                    transform: `translate(${vishalOffset.x}px, ${vishalOffset.y}px)`,
                    transition: "transform 0.15s cubic-bezier(0.2, 0.8, 0.2, 1)"
                  }}
                  className="absolute sm:relative z-20"
                >
                  <button
                    onMouseEnter={handleVishalInteraction}
                    onTouchStart={handleVishalInteraction}
                    onPointerDown={handleVishalInteraction}
                    onClick={handleVishalInteraction}
                    className="w-36 py-3.5 rounded-full bg-white border border-green-300 text-green-600 font-bold text-xs tracking-widest uppercase shadow-md cursor-pointer"
                  >
                    VISHAL
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4 w-full text-center animate-scale-in px-4">
                <p className="font-sans text-sm sm:text-base text-green-650 font-black tracking-wider uppercase leading-relaxed animate-bounce">
                  HAME TO PAHLE SE PATA THAA 😭
                </p>
              </div>
            )}

          </div>
        </div>

        {/* Transition Fact & Button */}
        <div className="w-full flex flex-col items-center space-y-3 shrink-0">
          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest select-none">
            "Choice coordinates locked."
          </span>
          <div className="w-full max-w-xs min-h-[50px] flex items-center justify-center">
            {chooseAnswered ? (
              <button
                onClick={() => scrollToSection("sec-final")}
                className="btn-bounce w-full py-3.5 rounded-full bg-green-550 hover:bg-green-650 text-white font-bold tracking-widest text-xs uppercase shadow-[0_8px_16px_rgba(52,211,153,0.15)] transition-colors cursor-pointer animate-fade-in"
              >
                CONTINUE →
              </button>
            ) : (
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                Please make a choice above
              </span>
            )}
          </div>
        </div>
      </section>

      {/* --- SECTION 5: FINAL SCREEN --- */}
      <section
        id="sec-final"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden border-t border-green-100"
      >
        <div className="shrink-0 h-6" />

        {/* Ending messages with sparkles */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-lg overflow-hidden my-auto space-y-6 shrink-0 relative select-none">
          {/* Subtle floating sparkles layered behind text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 z-0">
            <span className="text-xl absolute -top-8 left-1/4 animate-pulse text-green-400">✨</span>
            <span className="text-2xl absolute top-8 right-1/4 animate-pulse delay-75 text-green-400">✨</span>
            <span className="text-lg absolute bottom-8 left-1/3 animate-pulse delay-100 text-green-400">✨</span>
          </div>

          <div className="space-y-6 text-center z-10 relative">
            <span className="text-4xl md:text-5xl block animate-pulse">💚</span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-green-600 drop-shadow-[0_2px_10px_rgba(52,211,153,0.1)] leading-snug uppercase text-center px-4">
              LUVV YU YAAR ROHIT BHAIII
            </h2>
            <span className="text-4xl md:text-5xl block animate-pulse">💚</span>
          </div>
        </div>

        {/* Footer actions */}
        <div className="w-full max-w-xs flex flex-col items-center space-y-4 shrink-0">
          <button
            onClick={handleBackToHQ}
            className="btn-bounce w-full py-3.5 rounded-full bg-green-550 hover:bg-green-650 text-white font-sans text-xs tracking-widest font-black uppercase shadow-[0_8px_16px_rgba(52,211,153,0.15)] transition-colors cursor-pointer"
          >
            BACK TO HQ
          </button>
        </div>
      </section>

    </main>
  );
}
