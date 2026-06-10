"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AyushStory() {
  const router = useRouter();

  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // --- STATE FOR INTERACTIONS ---
  // Section 2: Are you single?
  const [singleAnswered, setSingleAnswered] = useState(false);

  // Section 3: Favorite Singer & Runaway Arijit
  const [singerAnswered, setSingerAnswered] = useState(false);
  const [arijitOffset, setArijitOffset] = useState({ x: 0, y: 0 });

  const handleArijitInteraction = () => {
    const range = 130;
    let newX = (Math.random() - 0.5) * 2 * range;
    let newY = (Math.random() - 0.5) * 2 * range;
    if (Math.abs(newX) < 45) newX = newX >= 0 ? 55 : -55;
    if (Math.abs(newY) < 45) newY = newY >= 0 ? 55 : -55;
    setArijitOffset({ x: newX, y: newY });
  };

  // Section 4: What is difficult to understand?
  const [understandChoice, setUnderstandChoice] = useState<string | null>(null);

  // Section 6: Asli Dukh
  const [dukhRevealed, setDukhRevealed] = useState(false);

  // Section 7: Favorite Vehicle & Runaway Thar
  const [vehicleAnswered, setVehicleAnswered] = useState(false);
  const [tharOffset, setTharOffset] = useState({ x: 0, y: 0 });

  const handleTharInteraction = () => {
    const range = 130;
    let newX = (Math.random() - 0.5) * 2 * range;
    let newY = (Math.random() - 0.5) * 2 * range;
    if (Math.abs(newX) < 45) newX = newX >= 0 ? 55 : -55;
    if (Math.abs(newY) < 45) newY = newY >= 0 ? 55 : -55;
    setTharOffset({ x: newX, y: newY });
  };

  // Section 8: Gift
  const [giftOpened, setGiftOpened] = useState(false);

  // Generate background sparkles
  const [sparkles, setSparkles] = useState<{ id: number; left: string; delay: string; duration: string; size: string; opacity: number }[]>([]);
  useEffect(() => {
    const generatedSparkles = [...Array(14)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 90 + 5}%`,
      delay: `${Math.random() * 8}s`,
      duration: `${12 + Math.random() * 8}s`,
      size: `${14 + Math.random() * 22}px`,
      opacity: 0.15 + Math.random() * 0.2
    }));
    setSparkles(generatedSparkles);
  }, []);

  const handleBackToHQ = () => {
    router.push("/");
  };

  return (
    <main className="relative bg-[#f5f3ff] text-zinc-700 min-h-screen overflow-x-hidden selection:bg-purple-200">
      
      {/* OVERRIDE GLOBAL HACKER OVERLAYS AND ADD FLOATING ANIMATIONS */}
      <style jsx global>{`
        /* Completely disable global CRT scanline overlays for this page */
        .scanlines, .scanline-bar {
          display: none !important;
        }

        /* Floating Purple Sparkles Animation */
        @keyframes floatUpPurple {
          0% {
            transform: translateY(110vh) translateX(0) scale(0.7) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: var(--sparkle-opacity, 0.3);
          }
          90% {
            opacity: var(--sparkle-opacity, 0.3);
          }
          100% {
            transform: translateY(-20vh) translateX(30px) scale(1.1) rotate(180deg);
            opacity: 0;
          }
        }
        .floating-purple-sparkle {
          position: fixed;
          bottom: -70px;
          user-select: none;
          pointer-events: none;
          z-index: 5;
          animation: floatUpPurple linear infinite;
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

      {/* CUTE FLOATING SPARKLES BACKDROP */}
      <div className="fixed inset-0 pointer-events-none select-none z-0">
        {sparkles.map((sparkle) => (
          <span
            key={sparkle.id}
            className="floating-purple-sparkle text-purple-400"
            style={{
              left: sparkle.left,
              animationDelay: sparkle.delay,
              animationDuration: sparkle.duration,
              fontSize: sparkle.size,
              "--sparkle-opacity": sparkle.opacity
            } as React.CSSProperties}
          >
            💜
          </span>
        ))}
      </div>

      {/* SOFT PASTEL BACKGROUND DECORATIONS */}
      <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-purple-200/30 blur-[90px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-indigo-100/30 blur-[100px] pointer-events-none z-0" />

      {/* --- SECTION 1: WELCOME --- */}
      <section
        id="sec-1"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden"
      >
        <div className="shrink-0 h-2" />

        {/* Content Container */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-sm overflow-hidden my-auto space-y-4">
          {/* Large Photo Placeholder */}
          <div className="w-full max-w-[280px] sm:max-w-xs md:max-w-[320px] h-[45vh] md:h-[40vh] max-h-[50vh] md:max-h-[42vh] rounded-3xl border-4 border-white bg-purple-100/40 backdrop-blur-md flex flex-col items-center justify-center p-4 shadow-[0_10px_25px_rgba(168,85,247,0.08)] relative overflow-hidden group flex-shrink-0">
            <span className="text-4xl mb-2">📸</span>
            <p className="font-sans text-xs font-bold tracking-wider text-zinc-650 uppercase text-center px-4 leading-relaxed">
              AYUSH PHOTO PLACEHOLDER
            </p>
            <span className="text-[9px] text-purple-400 font-bold uppercase tracking-widest mt-3">
              ✨ Core Roster ✨
            </span>
          </div>

          <div className="space-y-1 text-center shrink-0">
            <p className="font-sans text-[11px] text-zinc-400 font-black uppercase tracking-[0.25em]">
              SAB SIDE HAT JAO
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-purple-600 drop-shadow-[0_2px_4px_rgba(168,85,247,0.1)] uppercase">
              BAATE CHODNE WALE AA GAYE 💜
            </h1>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={() => scrollToSection("sec-2")}
          className="btn-bounce w-full max-w-xs py-3.5 rounded-full bg-purple-400 hover:bg-purple-500 text-white font-bold tracking-widest text-xs uppercase shadow-[0_8px_16px_rgba(168,85,247,0.15)] transition-colors cursor-pointer shrink-0"
        >
          NEXT →
        </button>
      </section>

      {/* --- SECTION 2: ARE YOU SINGLE --- */}
      <section
        id="sec-2"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden border-t border-purple-100"
      >
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-purple-600 text-center shrink-0">
          ARE YOU SINGLE? 💔
        </h2>

        {/* Content Container */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-sm overflow-hidden my-auto space-y-4 shrink-0">
          {!singleAnswered ? (
            <div className="flex gap-4 w-full justify-center">
              <button
                onClick={() => setSingleAnswered(true)}
                className="btn-bounce flex-1 py-4 rounded-full bg-purple-400 hover:bg-purple-500 text-white text-xs font-bold tracking-widest uppercase transition-colors cursor-pointer shadow-md"
              >
                YES
              </button>
              <button
                onClick={() => setSingleAnswered(true)}
                className="btn-bounce flex-1 py-4 rounded-full bg-white border border-purple-300 hover:bg-purple-50 text-rose-500 text-xs font-bold tracking-widest uppercase transition-colors cursor-pointer shadow-md"
              >
                HAA
              </button>
            </div>
          ) : (
            <div className="w-full rounded-3xl border-4 border-white bg-purple-100/40 p-6 text-center shadow-sm animate-scale-in flex flex-col justify-center items-center">
              <span className="text-4xl mb-3 animate-bounce">😭</span>
              <p className="font-sans text-sm md:text-base font-black text-purple-600 uppercase tracking-wider leading-relaxed">
                MAI BHI SINGLE HI HU BHAI 😭
              </p>
            </div>
          )}
        </div>

        {/* Button */}
        <div className="w-full max-w-xs shrink-0 min-h-[50px] flex items-center justify-center">
          {singleAnswered ? (
            <button
              onClick={() => scrollToSection("sec-3")}
              className="btn-bounce w-full py-3.5 rounded-full bg-purple-400 hover:bg-purple-500 text-white font-bold tracking-widest text-xs uppercase shadow-[0_8px_16px_rgba(168,85,247,0.15)] transition-colors cursor-pointer animate-fade-in"
            >
              CONTINUE →
            </button>
          ) : (
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
              Please answer the question
            </span>
          )}
        </div>
      </section>

      {/* --- SECTION 3: RUNAWAY ARIJIT SINGH --- */}
      <section
        id="sec-3"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden border-t border-purple-100"
      >
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-purple-600 text-center shrink-0">
          FAVORITE SINGER 🎤
        </h2>

        {/* Content Container (Runaway Button implementation) */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-md overflow-hidden my-auto space-y-6 shrink-0 relative">
          
          <div className="w-full max-w-sm rounded-3xl border-4 border-white bg-purple-100/50 backdrop-blur-md p-6 min-h-[200px] flex flex-col justify-center items-center shadow-[0_12px_24px_rgba(168,85,247,0.06)] relative overflow-visible">
            
            {!singerAnswered ? (
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center relative min-h-[120px] overflow-visible">
                {/* MASOOM SHARMA BUTTON */}
                <button
                  onClick={() => setSingerAnswered(true)}
                  className="btn-bounce w-36 py-3.5 rounded-full bg-purple-400 hover:bg-purple-500 text-white font-bold text-xs tracking-widest uppercase shadow-md cursor-pointer z-10"
                >
                  MASOOM SHARMA
                </button>

                {/* RUNAWAY ARIJIT SINGH BUTTON */}
                <div
                  style={{
                    transform: `translate(${arijitOffset.x}px, ${arijitOffset.y}px)`,
                    transition: "transform 0.15s cubic-bezier(0.2, 0.8, 0.2, 1)"
                  }}
                  className="absolute sm:relative z-20"
                >
                  <button
                    onMouseEnter={handleArijitInteraction}
                    onTouchStart={handleArijitInteraction}
                    onPointerDown={handleArijitInteraction}
                    onClick={handleArijitInteraction}
                    className="w-36 py-3.5 rounded-full bg-white border border-purple-300 text-purple-500 font-bold text-xs tracking-widest uppercase shadow-md cursor-pointer"
                  >
                    ARIJIT SINGH
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4 w-full text-center animate-scale-in px-4">
                <p className="font-sans text-sm sm:text-base text-purple-650 font-black tracking-wider uppercase leading-relaxed">
                  BHAAGO CHASME WALE BADMASH AA GAYE 😭
                </p>
              </div>
            )}

          </div>
        </div>

        {/* Transition Fact & Button */}
        <div className="w-full flex flex-col items-center space-y-3 shrink-0">
          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest select-none">
            "Singer consensus logged."
          </span>
          <div className="w-full max-w-xs min-h-[50px] flex items-center justify-center">
            {singerAnswered ? (
              <button
                onClick={() => scrollToSection("sec-4")}
                className="btn-bounce w-full py-3.5 rounded-full bg-purple-400 hover:bg-purple-500 text-white font-bold tracking-widest text-xs uppercase shadow-[0_8px_16px_rgba(168,85,247,0.15)] transition-colors cursor-pointer animate-fade-in"
              >
                CONTINUE →
              </button>
            ) : (
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                Please complete choice above
              </span>
            )}
          </div>
        </div>
      </section>

      {/* --- SECTION 4: WHAT IS DIFFICULT TO UNDERSTAND --- */}
      <section
        id="sec-4"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden border-t border-purple-100"
      >
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-purple-600 text-center shrink-0 px-2 leading-tight uppercase">
          WHAT IS DIFFICULT TO UNDERSTAND?
        </h2>

        {/* Content Container */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-md overflow-hidden my-auto space-y-4 shrink-0">
          <div className="w-full max-w-sm rounded-3xl border-4 border-white bg-purple-100/50 backdrop-blur-md p-6 min-h-[160px] flex flex-col justify-center items-center shadow-[0_12px_24px_rgba(168,85,247,0.06)] relative">
            {!understandChoice ? (
              <div className="flex flex-col gap-3 w-full">
                <button
                  onClick={() => setUnderstandChoice("maths")}
                  className="btn-bounce w-full py-3.5 rounded-full bg-white border border-purple-300 hover:bg-purple-50 text-purple-650 font-bold text-xs tracking-widest uppercase transition-colors cursor-pointer shadow-sm"
                >
                  MATHS
                </button>
                <button
                  onClick={() => setUnderstandChoice("baate")}
                  className="btn-bounce w-full py-3.5 rounded-full bg-white border border-purple-300 hover:bg-purple-50 text-purple-650 font-bold text-xs tracking-widest uppercase transition-colors cursor-pointer shadow-sm"
                >
                  USKI BAATE
                </button>
              </div>
            ) : (
              <div className="space-y-4 w-full text-center animate-scale-in">
                {understandChoice === "maths" ? (
                  <p className="font-sans text-sm sm:text-base text-purple-600 font-black tracking-wider uppercase">
                    ONLY CORRECT OPTION ✅
                  </p>
                ) : (
                  <p className="font-sans text-sm sm:text-base text-rose-500 font-black tracking-wider uppercase">
                    ACCHA LAUDE 😭
                  </p>
                )}
                
                {/* Reset button to let them view both options */}
                <button
                  onClick={() => setUnderstandChoice(null)}
                  className="text-[10px] font-mono text-zinc-400 hover:text-zinc-650 uppercase tracking-widest underline cursor-pointer"
                >
                  Reset Choice
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Transition Fact & Button */}
        <div className="w-full flex flex-col items-center space-y-3 shrink-0">
          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest select-none">
            "Conceptual limits reached."
          </span>
          <div className="w-full max-w-xs min-h-[50px] flex items-center justify-center">
            {understandChoice ? (
              <button
                onClick={() => scrollToSection("sec-5")}
                className="btn-bounce w-full py-3.5 rounded-full bg-purple-400 hover:bg-purple-500 text-white font-bold tracking-widest text-xs uppercase shadow-[0_8px_16px_rgba(168,85,247,0.15)] transition-colors cursor-pointer animate-fade-in"
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

      {/* --- SECTION 5: ARCHIVES CAROUSEL --- */}
      <section
        id="sec-5"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden border-t border-purple-100"
      >
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-purple-600 text-center shrink-0">
          AYUSH ARCHIVES 📸
        </h2>

        {/* Swipeable Grid Horizontal Carousel */}
        <div className="flex-grow flex items-center justify-center w-full max-w-5xl overflow-hidden my-auto py-2 shrink-0">
          <div className="w-full overflow-x-auto flex flex-row flex-nowrap gap-6 py-4 px-2 snap-x snap-mandatory no-scrollbar scroll-smooth">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div
                key={num}
                className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.33%-16px)] flex-shrink-0 snap-center rounded-3xl border-4 border-white bg-purple-50/80 backdrop-blur-md flex flex-col items-center justify-center p-6 shadow-md h-[40vh] md:h-[38vh] max-h-[44vh] select-none hover:border-purple-400 transition-colors animate-fade-in"
              >
                <span className="text-3xl mb-3">🔮</span>
                <p className="font-sans text-sm font-black tracking-widest text-purple-500 uppercase text-center">
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
            onClick={() => scrollToSection("sec-6")}
            className="btn-bounce w-full max-w-xs py-3.5 rounded-full bg-purple-400 hover:bg-purple-500 text-white font-bold tracking-widest text-xs uppercase shadow-[0_8px_16px_rgba(168,85,247,0.15)] transition-colors cursor-pointer shrink-0"
          >
            NEXT →
          </button>
        </div>
      </section>

      {/* --- SECTION 6: ASLI DUKH --- */}
      <section
        id="sec-6"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden border-t border-purple-100"
      >
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-purple-600 text-center shrink-0">
          ASLI DUKH 😔
        </h2>

        {/* Content Container */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-sm overflow-hidden my-auto space-y-4 shrink-0">
          {!dukhRevealed ? (
            <button
              onClick={() => setDukhRevealed(true)}
              className="btn-bounce px-10 py-4.5 rounded-full bg-purple-400 hover:bg-purple-500 text-white font-sans text-sm tracking-widest font-black uppercase shadow-md cursor-pointer"
            >
              TAP TO REVEAL
            </button>
          ) : (
            <div className="w-full rounded-3xl border-4 border-white bg-purple-100/40 p-6 text-center shadow-sm animate-scale-in flex flex-col justify-center items-center min-h-[160px]">
              <span className="text-4xl mb-3">💸</span>
              <p className="font-sans text-sm md:text-base font-black text-purple-650 uppercase tracking-wider leading-relaxed">
                BACK KE PESE KESE JUGADENGE
              </p>
            </div>
          )}
        </div>

        {/* Transition Fact & Button */}
        <div className="w-full flex flex-col items-center space-y-3 shrink-0">
          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest select-none">
            {dukhRevealed ? "Financial worries confirmed." : "Awaiting emotional clearance..."}
          </span>
          <div className="w-full max-w-xs min-h-[50px] flex items-center justify-center">
            {dukhRevealed ? (
              <button
                onClick={() => scrollToSection("sec-7")}
                className="btn-bounce w-full py-3.5 rounded-full bg-purple-400 hover:bg-purple-500 text-white font-bold tracking-widest text-xs uppercase shadow-[0_8px_16px_rgba(168,85,247,0.15)] transition-colors cursor-pointer animate-fade-in"
              >
                CONTINUE →
              </button>
            ) : (
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                Tap above to unlock
              </span>
            )}
          </div>
        </div>
      </section>

      {/* --- SECTION 7: RUNAWAY THAR VEHICLE --- */}
      <section
        id="sec-7"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden border-t border-purple-100"
      >
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-purple-600 text-center shrink-0">
          FAVORITE VEHICLE 🚗
        </h2>

        {/* Content Container (Runaway Button implementation) */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-md overflow-hidden my-auto space-y-6 shrink-0 relative">
          
          <div className="w-full max-w-sm rounded-3xl border-4 border-white bg-purple-100/50 backdrop-blur-md p-6 min-h-[200px] flex flex-col justify-center items-center shadow-[0_12px_24px_rgba(168,85,247,0.06)] relative overflow-visible">
            
            {!vehicleAnswered ? (
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center relative min-h-[120px] overflow-visible">
                {/* OLA BUTTON */}
                <button
                  onClick={() => setVehicleAnswered(true)}
                  className="btn-bounce w-36 py-3.5 rounded-full bg-purple-400 hover:bg-purple-500 text-white font-bold text-xs tracking-widest uppercase shadow-md cursor-pointer z-10"
                >
                  OLA
                </button>

                {/* RUNAWAY THAR BUTTON */}
                <div
                  style={{
                    transform: `translate(${tharOffset.x}px, ${tharOffset.y}px)`,
                    transition: "transform 0.15s cubic-bezier(0.2, 0.8, 0.2, 1)"
                  }}
                  className="absolute sm:relative z-20"
                >
                  <button
                    onMouseEnter={handleTharInteraction}
                    onTouchStart={handleTharInteraction}
                    onPointerDown={handleTharInteraction}
                    onClick={handleTharInteraction}
                    className="w-36 py-3.5 rounded-full bg-white border border-purple-300 text-purple-500 font-bold text-xs tracking-widest uppercase shadow-md cursor-pointer"
                  >
                    THAR
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4 w-full text-center animate-scale-in px-4">
                <p className="font-sans text-[11px] text-zinc-400 font-black uppercase tracking-[0.2em] mb-1">
                  SIDE HAT JAO
                </p>
                <p className="font-sans text-sm sm:text-base text-purple-650 font-black tracking-wider uppercase leading-relaxed">
                  ELECTRIC SCOOTY WALE AA GAYE ⚡
                </p>
              </div>
            )}

          </div>
        </div>

        {/* Transition Fact & Button */}
        <div className="w-full flex flex-col items-center space-y-3 shrink-0">
          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest select-none">
            "Scooty metrics logged."
          </span>
          <div className="w-full max-w-xs min-h-[50px] flex items-center justify-center">
            {vehicleAnswered ? (
              <button
                onClick={() => scrollToSection("sec-8")}
                className="btn-bounce w-full py-3.5 rounded-full bg-purple-400 hover:bg-purple-500 text-white font-bold tracking-widest text-xs uppercase shadow-[0_8px_16px_rgba(168,85,247,0.15)] transition-colors cursor-pointer animate-fade-in"
              >
                CONTINUE →
              </button>
            ) : (
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                Please complete choice above
              </span>
            )}
          </div>
        </div>
      </section>

      {/* --- SECTION 8: HERE IS A GIFT --- */}
      <section
        id="sec-8"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden border-t border-purple-100"
      >
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-purple-600 text-center shrink-0">
          HERE IS A GIFT 🎁
        </h2>

        {/* Content Container */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-sm overflow-hidden my-auto space-y-4 shrink-0">
          
          <button
            onClick={() => setGiftOpened(true)}
            className={`rounded-3xl border-4 border-white p-6 text-center shadow-md flex flex-col justify-center items-center min-h-[160px] w-full max-w-[280px] sm:max-w-xs cursor-pointer transition-all ${
              giftOpened ? "bg-purple-100/60" : "bg-white hover:bg-purple-50"
            }`}
          >
            <span className="text-4xl mb-2">{giftOpened ? "🧴" : "🎁"}</span>
            <p className="font-sans text-xs font-black text-purple-500 uppercase tracking-widest mb-2">
              GIFT BOX
            </p>
            {giftOpened ? (
              <div className="animate-scale-in space-y-2">
                <p className="font-sans text-sm font-black text-zinc-700 uppercase leading-snug">
                  MINOXIDIL <br />
                  <span className="text-xs text-rose-500 font-semibold">&</span> <br />
                  AADIWASI HAIR OIL
                </p>
                <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider">
                  FOR OBVIOUS REASONS 😭
                </p>
              </div>
            ) : (
              <p className="text-[10px] text-zinc-400 font-bold uppercase">CLICK TO OPEN</p>
            )}
          </button>

        </div>

        {/* Transition Fact & Button */}
        <div className="w-full flex flex-col items-center space-y-3 shrink-0">
          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest select-none">
            {giftOpened ? "Gift successfully inspected." : "Unopened gift detected."}
          </span>
          <div className="w-full max-w-xs min-h-[50px] flex items-center justify-center">
            {giftOpened ? (
              <button
                onClick={() => scrollToSection("sec-final")}
                className="btn-bounce w-full py-3.5 rounded-full bg-purple-400 hover:bg-purple-500 text-white font-bold tracking-widest text-xs uppercase shadow-[0_8px_16px_rgba(168,85,247,0.15)] transition-colors cursor-pointer animate-fade-in"
              >
                CONTINUE →
              </button>
            ) : (
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                Please open the gift
              </span>
            )}
          </div>
        </div>
      </section>

      {/* --- SECTION 9: FINAL SCREEN --- */}
      <section
        id="sec-final"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden border-t border-purple-100"
      >
        <div className="shrink-0 h-6" />

        {/* Ending messages */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-lg overflow-hidden my-auto space-y-6 shrink-0 relative select-none">
          {/* Subtle floating purple sparkles behind text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 z-0">
            <span className="text-xl absolute -top-8 left-1/4 animate-pulse text-purple-400">✨</span>
            <span className="text-2xl absolute top-8 right-1/4 animate-pulse delay-75 text-purple-400">✨</span>
            <span className="text-lg absolute bottom-8 left-1/3 animate-pulse delay-100 text-purple-400">✨</span>
          </div>

          <div className="space-y-6 text-center z-10 relative">
            <span className="text-4xl md:text-5xl block animate-pulse">💜</span>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-purple-500 drop-shadow-[0_2px_10px_rgba(168,85,247,0.1)] leading-none uppercase text-center px-4">
              LUVVV YU YAAR QT
            </h2>
            <span className="text-4xl md:text-5xl block animate-pulse">💜</span>
          </div>
        </div>

        {/* Footer actions */}
        <div className="w-full max-w-xs flex flex-col items-center space-y-4 shrink-0">
          <div className="space-y-0.5 text-center shrink-0">
            <p className="font-sans text-[10px] text-zinc-400 font-black uppercase tracking-[0.2em]">
              ORIGINAL MANSAROVAR BADDIE
            </p>
          </div>

          <button
            onClick={handleBackToHQ}
            className="btn-bounce w-full py-3.5 rounded-full bg-purple-400 hover:bg-purple-500 text-white font-sans text-xs tracking-widest font-black uppercase shadow-[0_8px_16px_rgba(168,85,247,0.15)] transition-colors cursor-pointer"
          >
            BACK TO HQ
          </button>
        </div>
      </section>

    </main>
  );
}
