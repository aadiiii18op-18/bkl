"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SaloniStory() {
  const router = useRouter();

  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // --- STATE FOR INTERACTIONS ---
  // Section 2: Are you a bauni?
  const [bauniAnswered, setBauniAnswered] = useState(false);
  const [noOffset, setNoOffset] = useState({ x: 0, y: 0 });

  const handleNoInteraction = () => {
    const range = 130;
    let newX = (Math.random() - 0.5) * 2 * range;
    let newY = (Math.random() - 0.5) * 2 * range;
    if (Math.abs(newX) < 45) newX = newX >= 0 ? 55 : -55;
    if (Math.abs(newY) < 45) newY = newY >= 0 ? 55 : -55;
    setNoOffset({ x: newX, y: newY });
  };

  // Section 3: Are you a badmosh?
  const [badmoshAnswered, setBadmoshAnswered] = useState(false);

  // Section 6: Kya khelegi game choice
  const [gameChoice, setGameChoice] = useState<string | null>(null);

  // Section 7: Gift
  const [giftOpened, setGiftOpened] = useState(false);

  // Generate background hearts
  const [hearts, setHearts] = useState<{ id: number; left: string; delay: string; duration: string; size: string; opacity: number }[]>([]);
  useEffect(() => {
    const generatedHearts = [...Array(14)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 90 + 5}%`,
      delay: `${Math.random() * 8}s`,
      duration: `${12 + Math.random() * 8}s`,
      size: `${14 + Math.random() * 22}px`,
      opacity: 0.15 + Math.random() * 0.2
    }));
    setHearts(generatedHearts);
  }, []);

  const handleBackToHQ = () => {
    const currentUser = localStorage.getItem("bkl_current_user");
    if (currentUser) {
      router.push(`/member/${currentUser}`);
    } else {
      router.push("/login");
    }
  };

  return (
    <main className="relative bg-gradient-to-b from-[#1c0202] via-[#0f0101] to-black text-[#ffe4e6] min-h-screen overflow-x-hidden selection:bg-rose-900 selection:text-rose-100">
      
      {/* OVERRIDE GLOBAL HACKER OVERLAYS AND ADD FLOATING ANIMATIONS */}
      <style jsx global>{`
        /* Completely disable global CRT scanline overlays for this page */
        .scanlines, .scanline-bar {
          display: none !important;
        }

        /* Floating Red Hearts Animation */
        @keyframes floatUpRedHeart {
          0% {
            transform: translateY(110vh) translateX(0) scale(0.7) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: var(--heart-opacity, 0.3);
          }
          90% {
            opacity: var(--heart-opacity, 0.3);
          }
          100% {
            transform: translateY(-20vh) translateX(30px) scale(1.1) rotate(360deg);
            opacity: 0;
          }
        }
        .floating-red-heart {
          position: fixed;
          bottom: -70px;
          user-select: none;
          pointer-events: none;
          z-index: 5;
          animation: floatUpRedHeart linear infinite;
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

      {/* CUTE FLOATING HEARTS BACKDROP */}
      <div className="fixed inset-0 pointer-events-none select-none z-0">
        {hearts.map((heart) => (
          <span
            key={heart.id}
            className="floating-red-heart text-rose-600"
            style={{
              left: heart.left,
              animationDelay: heart.delay,
              animationDuration: heart.duration,
              fontSize: heart.size,
              "--heart-opacity": heart.opacity
            } as React.CSSProperties}
          >
            ❤️
          </span>
        ))}
      </div>

      {/* SOFT PASTEL BACKGROUND DECORATIONS */}
      <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-rose-950/20 blur-[90px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-red-950/30 blur-[100px] pointer-events-none z-0" />

      {/* --- SECTION 1: WELCOME --- */}
      <section
        id="sec-1"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden"
      >
        <div className="shrink-0 h-2" />

        {/* Content Container */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-sm overflow-hidden my-auto space-y-4">
          {/* Large Photo Placeholder */}
          <div className="w-full max-w-[280px] sm:max-w-xs md:max-w-[320px] h-[45vh] md:h-[40vh] max-h-[50vh] md:max-h-[42vh] rounded-3xl border-4 border-rose-900 bg-black/40 backdrop-blur-md flex flex-col items-center justify-center p-4 shadow-[0_10px_25px_rgba(225,29,72,0.08)] relative overflow-hidden group flex-shrink-0">
            <span className="text-4xl mb-2">📸</span>
            <p className="font-sans text-xs font-bold tracking-wider text-rose-350 uppercase text-center px-4 leading-relaxed">
              SALONI PHOTO PLACEHOLDER
            </p>
            <span className="text-[9px] text-rose-500 font-bold uppercase tracking-widest mt-3">
              ✨ Core Roster ✨
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-rose-500 drop-shadow-[0_2px_4px_rgba(225,29,72,0.15)] text-center shrink-0">
            WELCOME BAUNII ❤️
          </h1>
        </div>

        {/* Button */}
        <button
          onClick={() => scrollToSection("sec-2")}
          className="btn-bounce w-full max-w-xs py-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold tracking-widest text-xs uppercase shadow-[0_8px_16px_rgba(225,29,72,0.2)] transition-colors cursor-pointer shrink-0"
        >
          NEXT →
        </button>
      </section>

      {/* --- SECTION 2: ARE YOU A BAUNII --- */}
      <section
        id="sec-2"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden border-t border-rose-950/30"
      >
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-rose-500 text-center shrink-0">
          ARE YOU A BAUNII?
        </h2>

        {/* Content Container (Runaway Button implementation) */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-md overflow-hidden my-auto space-y-6 shrink-0 relative">
          
          <div className="w-full max-w-sm rounded-3xl border-4 border-rose-900 bg-black/40 backdrop-blur-md p-6 min-h-[200px] flex flex-col justify-center items-center shadow-[0_12px_24px_rgba(225,29,72,0.06)] relative overflow-visible">
            
            {!bauniAnswered ? (
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center relative min-h-[120px] overflow-visible">
                {/* YES BUTTON */}
                <button
                  onClick={() => setBauniAnswered(true)}
                  className="btn-bounce w-36 py-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs tracking-widest uppercase shadow-md cursor-pointer z-10"
                >
                  YES
                </button>

                {/* RUNAWAY NO BUTTON */}
                <div
                  style={{
                    transform: `translate(${noOffset.x}px, ${noOffset.y}px)`,
                    transition: "transform 0.15s cubic-bezier(0.2, 0.8, 0.2, 1)"
                  }}
                  className="absolute sm:relative z-20"
                >
                  <button
                    onMouseEnter={handleNoInteraction}
                    onTouchStart={handleNoInteraction}
                    onPointerDown={handleNoInteraction}
                    onClick={handleNoInteraction}
                    className="w-36 py-3.5 rounded-full bg-black border border-rose-900 text-rose-400 font-bold text-xs tracking-widest uppercase shadow-md cursor-pointer"
                  >
                    NO
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-3 w-full text-center animate-scale-in px-4">
                <p className="font-sans text-sm sm:text-base text-rose-500 font-black tracking-wider uppercase leading-snug">
                  MAAN GAIII
                </p>
                <p className="font-sans text-xs text-rose-350 font-bold tracking-wide uppercase leading-relaxed">
                  BAUNII HEHEHE 😭❤️
                </p>
              </div>
            )}

          </div>
        </div>

        {/* Transition Fact & Button */}
        <div className="w-full flex flex-col items-center space-y-3 shrink-0">
          <span className="text-[10px] font-mono text-rose-450 uppercase tracking-widest select-none">
            "Design parameters optimized."
          </span>
          <div className="w-full max-w-xs min-h-[50px] flex items-center justify-center">
            {bauniAnswered ? (
              <button
                onClick={() => scrollToSection("sec-3")}
                className="btn-bounce w-full py-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold tracking-widest text-xs uppercase shadow-[0_8px_16px_rgba(225,29,72,0.2)] transition-colors cursor-pointer animate-fade-in"
              >
                CONTINUE →
              </button>
            ) : (
              <span className="text-[10px] font-mono text-rose-450 uppercase tracking-widest">
                Please complete choice above
              </span>
            )}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: ARE YOU A BADMOSHH --- */}
      <section
        id="sec-3"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden border-t border-rose-950/30"
      >
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-rose-500 text-center shrink-0 border-rose-950/30">
          ARE YOU A BADMOSHH?
        </h2>

        {/* Content Container */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-sm overflow-hidden my-auto space-y-4 shrink-0">
          {!badmoshAnswered ? (
            <div className="flex gap-4 w-full justify-center">
              <button
                onClick={() => setBadmoshAnswered(true)}
                className="btn-bounce flex-1 py-4 rounded-full bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold tracking-widest uppercase transition-colors cursor-pointer shadow-md"
              >
                HAAA
              </button>
              <button
                onClick={() => setBadmoshAnswered(true)}
                className="btn-bounce flex-1 py-4 rounded-full bg-black border border-rose-900 text-rose-400 text-xs font-bold tracking-widest uppercase transition-colors cursor-pointer shadow-md"
              >
                YES
              </button>
            </div>
          ) : (
            <div className="w-full rounded-3xl border-4 border-rose-900 bg-black/40 p-6 text-center shadow-sm animate-scale-in flex flex-col justify-center items-center min-h-[160px]">
              <span className="text-4xl mb-3 animate-bounce">👿</span>
              <p className="font-sans text-sm md:text-base font-black text-rose-500 uppercase tracking-wider leading-relaxed">
                ISME TO KOI SAWAL HI NHI THAA 😭
              </p>
            </div>
          )}
        </div>

        {/* Button */}
        <div className="w-full max-w-xs shrink-0 min-h-[50px] flex items-center justify-center">
          {badmoshAnswered ? (
            <button
              onClick={() => scrollToSection("sec-4")}
              className="btn-bounce w-full py-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold tracking-widest text-xs uppercase shadow-[0_8px_16px_rgba(225,29,72,0.2)] transition-colors cursor-pointer animate-fade-in"
            >
              CONTINUE →
            </button>
          ) : (
            <span className="text-[10px] font-mono text-rose-450 uppercase tracking-widest">
              Please answer the question
            </span>
          )}
        </div>
      </section>

      {/* --- SECTION 4: TEXT OVER PHOTO OVERLAY --- */}
      <section
        id="sec-4"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden border-t border-rose-950/30"
      >
        <div className="shrink-0 h-4" />

        {/* Content Container (Text over image overlay) */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-sm overflow-hidden my-auto space-y-4">
          <div className="w-full max-w-[280px] sm:max-w-xs md:max-w-[320px] h-[45vh] md:h-[40vh] max-h-[50vh] md:max-h-[42vh] rounded-3xl border-4 border-rose-900 bg-black/40 backdrop-blur-md flex flex-col items-center justify-center shadow-lg relative overflow-hidden group flex-shrink-0">
            {/* Dark vignette tint inside photo card */}
            <div className="absolute inset-0 bg-black/60 z-10" />
            
            {/* Icon */}
            <span className="text-5xl mb-4 relative z-25">😈❤️</span>
            
            {/* Text Overlay centered over image */}
            <p className="font-sans text-xl sm:text-2xl font-black text-rose-500 uppercase tracking-widest text-center px-4 leading-snug z-25 drop-shadow-[0_4px_12px_rgba(225,29,72,0.4)] animate-pulse">
              BAUNI BADMOS ❤️
            </p>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={() => scrollToSection("sec-5")}
          className="btn-bounce w-full max-w-xs py-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold tracking-widest text-xs uppercase shadow-[0_8px_16px_rgba(225,29,72,0.2)] transition-colors cursor-pointer shrink-0"
        >
          NEXT →
        </button>
      </section>

      {/* --- SECTION 5: CAROUSEL ARCHIVES --- */}
      <section
        id="sec-5"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden border-t border-rose-950/30"
      >
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-rose-500 text-center shrink-0">
          SALONI ARCHIVES 📸
        </h2>

        {/* Swipeable Grid Horizontal Carousel */}
        <div className="flex-grow flex items-center justify-center w-full max-w-5xl overflow-hidden my-auto py-2 shrink-0">
          <div className="w-full overflow-x-auto flex flex-row flex-nowrap gap-6 py-4 px-2 snap-x snap-mandatory no-scrollbar scroll-smooth">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div
                key={num}
                className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.33%-16px)] flex-shrink-0 snap-center rounded-3xl border-4 border-rose-900 bg-black/40 backdrop-blur-md flex flex-col items-center justify-center p-6 shadow-md h-[40vh] md:h-[38vh] max-h-[44vh] select-none hover:border-rose-650 transition-colors animate-fade-in"
              >
                <span className="text-3xl mb-3">🍷</span>
                <p className="font-sans text-sm font-black tracking-widest text-rose-400 uppercase text-center">
                  PHOTO SLOT 0{num}
                </p>
                <span className="font-sans text-[9px] text-rose-500 font-bold uppercase tracking-wider mt-3">
                  Memory Record 00{num}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Transition Fact & Button */}
        <div className="w-full flex flex-col items-center space-y-3 shrink-0">
          <span className="text-[10px] font-mono text-rose-455 uppercase tracking-widest select-none">
            "Photos remain highly classified."
          </span>
          <button
            onClick={() => scrollToSection("sec-6")}
            className="btn-bounce w-full max-w-xs py-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold tracking-widest text-xs uppercase shadow-[0_8px_16px_rgba(225,29,72,0.2)] transition-colors cursor-pointer shrink-0"
          >
            NEXT →
          </button>
        </div>
      </section>

      {/* --- SECTION 6: KYA KHELEGI GAME CHOICE --- */}
      <section
        id="sec-6"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden border-t border-rose-950/30"
      >
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-rose-500 text-center shrink-0">
          LET'S PLAY A GAME 🎮
        </h2>

        {/* Content Container */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-md overflow-hidden my-auto space-y-4 shrink-0">
          
          <div className="w-full max-w-sm rounded-3xl border-4 border-rose-900 bg-black/40 backdrop-blur-md p-6 min-h-[220px] flex flex-col justify-center items-center shadow-[0_12px_24px_rgba(225,29,72,0.06)] relative">
            
            {!gameChoice ? (
              <div className="space-y-4 w-full">
                <p className="font-sans text-xs font-bold text-rose-350 uppercase tracking-wider mb-2">
                  KYA KHELEGI?
                </p>

                {/* Three game options */}
                <div className="flex flex-col gap-3 w-full">
                  <button
                    onClick={() => setGameChoice("volleyball")}
                    className="btn-bounce w-full py-3 rounded-full bg-rose-650 hover:bg-rose-700 text-white font-bold text-xs tracking-widest uppercase transition-colors cursor-pointer"
                  >
                    VOLLEYBALL
                  </button>
                  <button
                    onClick={() => setGameChoice("running")}
                    className="btn-bounce w-full py-3 rounded-full bg-rose-650 hover:bg-rose-700 text-white font-bold text-xs tracking-widest uppercase transition-colors cursor-pointer"
                  >
                    RUNNING
                  </button>
                  <button
                    onClick={() => setGameChoice("ladai")}
                    className="btn-bounce w-full py-3 rounded-full bg-rose-650 hover:bg-rose-700 text-white font-bold text-xs tracking-widest uppercase transition-colors cursor-pointer"
                  >
                    LADAI
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-5 w-full text-center animate-scale-in">
                {gameChoice === "volleyball" && (
                  <p className="font-sans text-sm sm:text-base text-rose-400 font-black tracking-wider uppercase leading-relaxed">
                    USME AAPKA CHASMA TOOT JAYEGA 😭
                  </p>
                )}
                {gameChoice === "running" && (
                  <p className="font-sans text-sm sm:text-base text-rose-400 font-black tracking-wider uppercase leading-relaxed">
                    ITNE CHOTE CHOTE PAIRO SE KAHA BHAGEGI 😭
                  </p>
                )}
                {gameChoice === "ladai" && (
                  <p className="font-sans text-sm sm:text-base text-rose-450 font-black tracking-wider uppercase leading-relaxed animate-pulse">
                    BAS BAAT BAAT PE LADAI KARVALO 😭
                  </p>
                )}
                
                {/* Reset choice trigger */}
                <button
                  onClick={() => setGameChoice(null)}
                  className="text-[10px] font-mono text-zinc-500 hover:text-zinc-350 uppercase tracking-widest underline cursor-pointer"
                >
                  Change Game
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Transition Fact & Button */}
        <div className="w-full flex flex-col items-center space-y-3 shrink-0">
          <span className="text-[10px] font-mono text-rose-450 uppercase tracking-widest select-none">
            "Game parameters finalized."
          </span>
          <div className="w-full max-w-xs min-h-[50px] flex items-center justify-center">
            {gameChoice ? (
              <button
                onClick={() => scrollToSection("sec-7")}
                className="btn-bounce w-full py-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold tracking-widest text-xs uppercase shadow-[0_8px_16px_rgba(225,29,72,0.2)] transition-colors cursor-pointer animate-fade-in"
              >
                CONTINUE →
              </button>
            ) : (
              <span className="text-[10px] font-mono text-rose-450 uppercase tracking-widest">
                Please make a choice above
              </span>
            )}
          </div>
        </div>
      </section>

      {/* --- SECTION 7: HERE IS A GIFT --- */}
      <section
        id="sec-7"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden border-t border-rose-950/30"
      >
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-rose-500 text-center shrink-0 px-2 leading-tight uppercase">
          HERE IS A GIFT FOR YOU 🎁
        </h2>

        {/* Content Container */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-sm overflow-hidden my-auto space-y-4 shrink-0">
          
          <button
            onClick={() => setGiftOpened(true)}
            className={`rounded-3xl border-4 border-rose-900 p-6 text-center shadow-md flex flex-col justify-center items-center min-h-[160px] w-full max-w-[280px] sm:max-w-xs cursor-pointer transition-all ${
              giftOpened ? "bg-rose-950/40" : "bg-black/50 hover:bg-rose-950/10"
            }`}
          >
            <span className="text-4xl mb-2">{giftOpened ? "🥤" : "🎁"}</span>
            <p className="font-sans text-xs font-bold text-rose-400 uppercase tracking-widest mb-2">
              GIFT BOX
            </p>
            {giftOpened ? (
              <div className="animate-scale-in space-y-2">
                <p className="font-sans text-sm font-black text-rose-400 uppercase leading-snug">
                  COMPLAIN 🥤
                </p>
                <p className="text-[9px] text-rose-350 font-bold uppercase tracking-wider leading-relaxed">
                  PEE LETI TO BADI HO JATII 😭
                </p>
              </div>
            ) : (
              <p className="text-[10px] text-zinc-500 font-bold uppercase">CLICK TO OPEN</p>
            )}
          </button>

        </div>

        {/* Transition Fact & Button */}
        <div className="w-full flex flex-col items-center space-y-3 shrink-0">
          <span className="text-[10px] font-mono text-rose-455 uppercase tracking-widest select-none">
            {giftOpened ? "Gift successfully inspected." : "Unopened gift detected."}
          </span>
          <div className="w-full max-w-xs min-h-[50px] flex items-center justify-center">
            {giftOpened ? (
              <button
                onClick={() => scrollToSection("sec-final")}
                className="btn-bounce w-full py-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold tracking-widest text-xs uppercase shadow-[0_8px_16px_rgba(225,29,72,0.2)] transition-colors cursor-pointer animate-fade-in"
              >
                CONTINUE →
              </button>
            ) : (
              <span className="text-[10px] font-mono text-rose-455 uppercase tracking-widest">
                Please open the gift
              </span>
            )}
          </div>
        </div>
      </section>

      {/* --- SECTION 8: FINAL SCREEN --- */}
      <section
        id="sec-final"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden border-t border-rose-950/30"
      >
        <div className="shrink-0 h-6" />

        {/* Ending messages with subtle sparkles */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-lg overflow-hidden my-auto space-y-6 shrink-0 relative select-none">
          {/* Subtle floating red sparkles behind text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 z-0">
            <span className="text-xl absolute -top-8 left-1/4 animate-pulse text-rose-500">✨</span>
            <span className="text-2xl absolute top-8 right-1/4 animate-pulse delay-75 text-rose-500">✨</span>
            <span className="text-lg absolute bottom-8 left-1/3 animate-pulse delay-100 text-rose-500">✨</span>
          </div>

          <div className="space-y-6 text-center z-10 relative">
            <span className="text-4xl md:text-5xl block animate-pulse">❤️</span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-rose-500 drop-shadow-[0_2px_10px_rgba(225,29,72,0.2)] leading-snug uppercase text-center px-4">
              LUVV YU YAAR BAUNIII
            </h2>
            <span className="text-4xl md:text-5xl block animate-pulse">❤️</span>
          </div>
        </div>

        {/* Footer actions */}
        <div className="w-full max-w-xs flex flex-col items-center space-y-4 shrink-0">
          <div className="space-y-0.5 text-center shrink-0">
            <p className="font-sans text-[10px] text-rose-400 font-black uppercase tracking-[0.2em]">
              CUTEST BAUNI EVER
            </p>
            <p className="font-sans text-xs font-black text-rose-500 uppercase tracking-widest">
              AUR BADMOS BHI
            </p>
          </div>

          <button
            onClick={handleBackToHQ}
            className="btn-bounce w-full py-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-sans text-xs tracking-widest font-black uppercase shadow-[0_8px_16px_rgba(225,29,72,0.2)] transition-colors cursor-pointer"
          >
            BACK TO HQ
          </button>
        </div>
      </section>

    </main>
  );
}
