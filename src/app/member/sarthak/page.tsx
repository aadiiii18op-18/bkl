"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SarthakStory() {
  const router = useRouter();

  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // --- STATE FOR INTERACTIONS ---
  // Section 3: Do you like me?
  const [likeSelected, setLikeSelected] = useState(false);

  // Section 5: Football club
  const [footballAnswered, setFootballAnswered] = useState(false);
  const [madridOffset, setMadridOffset] = useState({ x: 0, y: 0 });

  const handleMadridInteraction = () => {
    const range = 130; // Max offset in pixels
    let newX = (Math.random() - 0.5) * 2 * range;
    let newY = (Math.random() - 0.5) * 2 * range;
    
    // Ensure the button jumps a minimum distance so it's noticeably moving
    if (Math.abs(newX) < 45) newX = newX >= 0 ? 55 : -55;
    if (Math.abs(newY) < 45) newY = newY >= 0 ? 55 : -55;
    
    setMadridOffset({ x: newX, y: newY });
  };

  // Section 6: Gift Boxes
  const [gift1Opened, setGift1Opened] = useState(false);
  const [gift2Opened, setGift2Opened] = useState(false);

  // Section 7: Favorite Food Again
  const [foodAgainRevealed, setFoodAgainRevealed] = useState(false);

  // Generate background hearts
  const [hearts, setHearts] = useState<{ id: number; left: string; delay: string; duration: string; size: string; opacity: number }[]>([]);
  useEffect(() => {
    const generatedHearts = [...Array(12)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 90 + 5}%`,
      delay: `${Math.random() * 8}s`,
      duration: `${14 + Math.random() * 8}s`,
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
    <main className="relative bg-[#fff1f2] text-zinc-700 min-h-screen overflow-x-hidden selection:bg-rose-200">
      
      {/* OVERRIDE GLOBAL HACKER OVERLAYS AND ADD FLOATING ANIMATIONS */}
      <style jsx global>{`
        /* Completely disable global CRT scanline overlays for this page */
        .scanlines, .scanline-bar {
          display: none !important;
        }

        /* Floating Hearts Animation */
        @keyframes floatUpHeart {
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
            transform: translateY(-20vh) translateX(35px) scale(1.1) rotate(360deg);
            opacity: 0;
          }
        }
        .floating-heart {
          position: fixed;
          bottom: -70px;
          user-select: none;
          pointer-events: none;
          z-index: 5;
          animation: floatUpHeart linear infinite;
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
            className="floating-heart text-rose-300"
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
      <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-rose-200/30 blur-[90px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-red-100/30 blur-[100px] pointer-events-none z-0" />

      {/* --- SECTION 1: WELCOME --- */}
      <section
        id="sec-1"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden"
      >
        <div className="shrink-0 h-2" />

        {/* Content Container */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-sm overflow-hidden my-auto space-y-4">
          {/* Large Photo Placeholder */}
          <div className="w-full max-w-[280px] sm:max-w-xs md:max-w-[320px] h-[45vh] md:h-[40vh] max-h-[50vh] md:max-h-[42vh] rounded-3xl border-4 border-white bg-rose-100/40 backdrop-blur-md flex flex-col items-center justify-center p-4 shadow-[0_10px_25px_rgba(244,63,94,0.08)] relative overflow-hidden group flex-shrink-0">
            <span className="text-4xl mb-2">📸</span>
            <p className="font-sans text-xs font-bold tracking-wider text-zinc-650 uppercase text-center px-4 leading-relaxed">
              SARTHAK PHOTO PLACEHOLDER
            </p>
            <span className="text-[9px] text-rose-400 font-bold uppercase tracking-widest mt-3">
              ✨ Core Roster ✨
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-rose-600 drop-shadow-[0_2px_4px_rgba(244,63,94,0.1)] text-center shrink-0">
            WELCOME BHOSDI ❤️
          </h1>
        </div>

        {/* Button */}
        <button
          onClick={() => scrollToSection("sec-2")}
          className="btn-bounce w-full max-w-xs py-3.5 rounded-full bg-rose-400 hover:bg-rose-500 text-white font-bold tracking-widest text-xs uppercase shadow-[0_8px_16px_rgba(244,63,94,0.15)] transition-colors cursor-pointer shrink-0"
        >
          NEXT →
        </button>
      </section>

      {/* --- SECTION 2: FOOD AND CAR DUAL CARDS --- */}
      <section
        id="sec-2"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden border-t border-rose-100"
      >
        <div className="shrink-0 h-4" />

        {/* Content Container (Two cards together) */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-sm overflow-hidden my-auto space-y-6 shrink-0">
          <div className="grid grid-cols-2 gap-4 w-full">
            {/* Card 1 */}
            <div className="rounded-3xl border-4 border-white bg-rose-50/70 p-4 text-center shadow-md flex flex-col justify-center min-h-[140px]">
              <span className="text-3xl mb-1">🍜</span>
              <p className="font-sans text-[10px] font-black text-rose-500 uppercase tracking-widest mb-1">
                FAVORITE FOOD
              </p>
              <p className="font-sans text-xs font-black text-zinc-700 uppercase">
                KAISH MOMOS
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-3xl border-4 border-white bg-rose-50/70 p-4 text-center shadow-md flex flex-col justify-center min-h-[140px]">
              <span className="text-3xl mb-1">🚗</span>
              <p className="font-sans text-[10px] font-black text-rose-500 uppercase tracking-widest mb-1">
                FAVORITE GADI
              </p>
              <p className="font-sans text-xs font-black text-zinc-700 uppercase">
                BLACK SCORPIO
              </p>
            </div>
          </div>

          {/* Large funny text below */}
          <div className="p-4 rounded-3xl border-4 border-white bg-white/70 shadow-sm text-center w-full">
            <p className="font-sans text-sm sm:text-base font-black text-rose-600 uppercase tracking-wider">
              AUR CHUTNEY 2 BAAR AAI THIII
            </p>
          </div>
        </div>

        {/* Transition Fact & Button */}
        <div className="w-full flex flex-col items-center space-y-3 shrink-0">
          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest select-none">
            "Extra chutney is a BKL mandate."
          </span>
          <button
            onClick={() => scrollToSection("sec-3")}
            className="btn-bounce w-full max-w-xs py-3.5 rounded-full bg-rose-400 hover:bg-rose-500 text-white font-bold tracking-widest text-xs uppercase shadow-[0_8px_16px_rgba(244,63,94,0.15)] transition-colors cursor-pointer shrink-0"
          >
            CONTINUE →
          </button>
        </div>
      </section>

      {/* --- SECTION 3: DO YOU LIKE ME --- */}
      <section
        id="sec-3"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden border-t border-rose-100"
      >
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-rose-600 text-center shrink-0">
          DO YOU LIKE ME? ❤️
        </h2>

        {/* Content Container */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-sm overflow-hidden my-auto space-y-4 shrink-0">
          {!likeSelected ? (
            <div className="flex gap-4 w-full justify-center">
              <button
                onClick={() => setLikeSelected(true)}
                className="btn-bounce flex-1 py-4 rounded-full bg-rose-400 hover:bg-rose-500 text-white text-xs font-bold tracking-widest uppercase transition-colors cursor-pointer shadow-md"
              >
                YES
              </button>
              <button
                onClick={() => setLikeSelected(true)}
                className="btn-bounce flex-1 py-4 rounded-full bg-white border border-rose-300 hover:bg-rose-50 text-rose-500 text-xs font-bold tracking-widest uppercase transition-colors cursor-pointer shadow-md"
              >
                HELL YES
              </button>
            </div>
          ) : (
            <div className="w-full flex flex-col items-center space-y-4 animate-scale-in">
              <h3 className="text-xl font-black text-rose-500 uppercase tracking-widest animate-bounce">
                LUVV YU YAAR QT 💛
              </h3>
              
              {/* Photo placeholder below */}
              <div className="w-full max-w-[240px] sm:max-w-xs h-[30vh] md:h-[28vh] rounded-3xl border-4 border-white bg-rose-100/40 flex flex-col items-center justify-center p-4 shadow-sm relative overflow-hidden flex-shrink-0">
                <span className="text-4xl mb-2">📸</span>
                <p className="font-sans text-xs font-bold tracking-widest text-zinc-500 uppercase text-center">
                  PHOTO COMING SOON
                </p>
                <span className="text-[8px] text-rose-400 font-bold uppercase tracking-widest mt-2">
                  ✨ Secured Vault ✨
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Transition Fact & Button */}
        <div className="w-full flex flex-col items-center space-y-3 shrink-0">
          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest select-none">
            {likeSelected ? "Affection metrics completed." : "Awaiting user feedback..."}
          </span>
          <div className="w-full max-w-xs min-h-[50px] flex items-center justify-center">
            {likeSelected ? (
              <button
                onClick={() => scrollToSection("sec-4")}
                className="btn-bounce w-full py-3.5 rounded-full bg-rose-400 hover:bg-rose-500 text-white font-bold tracking-widest text-xs uppercase shadow-[0_8px_16px_rgba(244,63,94,0.15)] transition-colors cursor-pointer animate-fade-in"
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

      {/* --- SECTION 4: ARCHIVES CAROUSEL --- */}
      <section
        id="sec-4"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden border-t border-rose-100"
      >
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-rose-600 text-center shrink-0">
          SARTHAK ARCHIVES 📸
        </h2>

        {/* Swipeable Grid Horizontal Carousel */}
        <div className="flex-grow flex items-center justify-center w-full max-w-5xl overflow-hidden my-auto py-2 shrink-0">
          <div className="w-full overflow-x-auto flex flex-row flex-nowrap gap-6 py-4 px-2 snap-x snap-mandatory no-scrollbar scroll-smooth">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div
                key={num}
                className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.33%-16px)] flex-shrink-0 snap-center rounded-3xl border-4 border-white bg-rose-50/80 backdrop-blur-md flex flex-col items-center justify-center p-6 shadow-md h-[40vh] md:h-[38vh] max-h-[44vh] select-none hover:border-rose-400 transition-colors animate-fade-in"
              >
                <span className="text-3xl mb-3">🌹</span>
                <p className="font-sans text-sm font-black tracking-widest text-rose-500 uppercase text-center">
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
            onClick={() => scrollToSection("sec-5")}
            className="btn-bounce w-full max-w-xs py-3.5 rounded-full bg-rose-400 hover:bg-rose-500 text-white font-bold tracking-widest text-xs uppercase shadow-[0_8px_16px_rgba(244,63,94,0.15)] transition-colors cursor-pointer shrink-0"
          >
            NEXT →
          </button>
        </div>
      </section>

      {/* --- SECTION 5: RUNAWAY FOOTBALL CLUB --- */}
      <section
        id="sec-5"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden border-t border-rose-100"
      >
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-rose-600 text-center shrink-0 px-2 leading-tight uppercase">
          CHOOSE YOUR FAVORITE FOOTBALL CLUB ⚽
        </h2>

        {/* Content Container (Runaway Button implementation) */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-md overflow-hidden my-auto space-y-6 shrink-0 relative">
          
          <div className="w-full max-w-sm rounded-3xl border-4 border-white bg-rose-100/50 backdrop-blur-md p-6 min-h-[200px] flex flex-col justify-center items-center shadow-[0_12px_24px_rgba(244,63,94,0.06)] relative overflow-visible">
            
            {!footballAnswered ? (
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center relative min-h-[120px] overflow-visible">
                {/* ARSENAL BUTTON */}
                <button
                  onClick={() => setFootballAnswered(true)}
                  className="btn-bounce w-36 py-3.5 rounded-full bg-rose-400 hover:bg-rose-500 text-white font-bold text-xs tracking-widest uppercase shadow-md cursor-pointer z-10"
                >
                  ARSENAL
                </button>

                {/* RUNAWAY REAL MADRID BUTTON */}
                <div
                  style={{
                    transform: `translate(${madridOffset.x}px, ${madridOffset.y}px)`,
                    transition: "transform 0.15s cubic-bezier(0.2, 0.8, 0.2, 1)"
                  }}
                  className="absolute sm:relative z-20"
                >
                  <button
                    onMouseEnter={handleMadridInteraction}
                    onTouchStart={handleMadridInteraction}
                    onPointerDown={handleMadridInteraction}
                    onClick={handleMadridInteraction}
                    className="w-36 py-3.5 rounded-full bg-white border border-rose-300 text-rose-500 font-bold text-xs tracking-widest uppercase shadow-md cursor-pointer"
                  >
                    REAL MADRID
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4 w-full text-center animate-scale-in px-4">
                <p className="font-sans text-sm sm:text-base text-rose-600 font-black tracking-wider uppercase leading-relaxed">
                  KNEW YOU HARAMBALL MOTHERFUCKER 😭
                </p>
              </div>
            )}

          </div>
        </div>

        {/* Transition Fact & Button */}
        <div className="w-full flex flex-col items-center space-y-3 shrink-0">
          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest select-none">
            "Madridistas not verified."
          </span>
          <div className="w-full max-w-xs min-h-[50px] flex items-center justify-center">
            {footballAnswered ? (
              <button
                onClick={() => scrollToSection("sec-6")}
                className="btn-bounce w-full py-3.5 rounded-full bg-rose-400 hover:bg-rose-500 text-white font-bold tracking-widest text-xs uppercase shadow-[0_8px_16px_rgba(244,63,94,0.15)] transition-colors cursor-pointer animate-fade-in"
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

      {/* --- SECTION 6: GIFT BOXES --- */}
      <section
        id="sec-6"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden border-t border-rose-100"
      >
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-rose-600 text-center shrink-0">
          HERE IS A GIFT 🎁
        </h2>

        {/* Content Container */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-sm overflow-hidden my-auto space-y-4 shrink-0">
          <div className="grid grid-cols-2 gap-4 w-full">
            {/* Gift Box 1 */}
            <button
              onClick={() => setGift1Opened(true)}
              className={`rounded-3xl border-4 border-white p-4 text-center shadow-md flex flex-col justify-center items-center min-h-[140px] cursor-pointer transition-all ${
                gift1Opened ? "bg-rose-100/60" : "bg-white hover:bg-rose-50"
              }`}
            >
              <span className="text-3xl mb-1">{gift1Opened ? "🧢" : "🎁"}</span>
              <p className="font-sans text-[10px] font-black text-rose-500 uppercase tracking-widest mb-1">
                GIFT BOX 1
              </p>
              {gift1Opened ? (
                <div className="animate-scale-in space-y-0.5">
                  <p className="font-sans text-xs font-black text-zinc-700 uppercase">CAP</p>
                  <p className="text-[8px] text-zinc-500 font-semibold uppercase leading-tight">TERI HAIRLINE CHHUPANE KE LIE</p>
                </div>
              ) : (
                <p className="text-[9px] text-zinc-400 font-bold uppercase">CLICK TO OPEN</p>
              )}
            </button>

            {/* Gift Box 2 */}
            <button
              onClick={() => setGift2Opened(true)}
              className={`rounded-3xl border-4 border-white p-4 text-center shadow-md flex flex-col justify-center items-center min-h-[140px] cursor-pointer transition-all ${
                gift2Opened ? "bg-rose-100/60" : "bg-white hover:bg-rose-50"
              }`}
            >
              <span className="text-3xl mb-1">{gift2Opened ? "🧴" : "🎁"}</span>
              <p className="font-sans text-[10px] font-black text-rose-500 uppercase tracking-widest mb-1">
                GIFT BOX 2
              </p>
              {gift2Opened ? (
                <div className="animate-scale-in space-y-0.5">
                  <p className="font-sans text-xs font-black text-zinc-700 uppercase">SHAMPOO</p>
                  <p className="text-[8px] text-zinc-500 font-semibold uppercase leading-tight">TAAKI TERE BAAL WAPAS AA JAYE</p>
                </div>
              ) : (
                <p className="text-[9px] text-zinc-400 font-bold uppercase">CLICK TO OPEN</p>
              )}
            </button>
          </div>
        </div>

        {/* Transition Fact & Button */}
        <div className="w-full flex flex-col items-center space-y-3 shrink-0">
          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest select-none">
            {gift1Opened && gift2Opened ? "Gifts successfully inspected." : "Unopened gifts detected."}
          </span>
          <div className="w-full max-w-xs min-h-[50px] flex items-center justify-center">
            {gift1Opened && gift2Opened ? (
              <button
                onClick={() => scrollToSection("sec-7")}
                className="btn-bounce w-full py-3.5 rounded-full bg-rose-400 hover:bg-rose-500 text-white font-bold tracking-widest text-xs uppercase shadow-[0_8px_16px_rgba(244,63,94,0.15)] transition-colors cursor-pointer animate-fade-in"
              >
                CONTINUE →
              </button>
            ) : (
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                Please open both gifts
              </span>
            )}
          </div>
        </div>
      </section>

      {/* --- SECTION 7: FAVORITE FOOD AGAIN --- */}
      <section
        id="sec-7"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden border-t border-rose-100"
      >
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-rose-600 text-center shrink-0">
          FAVORITE FOOD AGAIN 🧅
        </h2>

        {/* Content Container */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-sm overflow-hidden my-auto space-y-4 shrink-0">
          {!foodAgainRevealed ? (
            <button
              onClick={() => setFoodAgainRevealed(true)}
              className="btn-bounce px-10 py-4.5 rounded-full bg-rose-400 hover:bg-rose-500 text-white font-sans text-sm tracking-widest font-black uppercase shadow-md cursor-pointer"
            >
              TAP TO REVEAL
            </button>
          ) : (
            <div className="w-full flex flex-col items-center space-y-4 animate-scale-in">
              {/* Image placeholder */}
              <div className="w-full max-w-[240px] sm:max-w-xs h-[30vh] md:h-[28vh] rounded-3xl border-4 border-white bg-rose-100/40 flex flex-col items-center justify-center p-4 shadow-sm relative overflow-hidden flex-shrink-0">
                <span className="text-4xl mb-2 animate-bounce">🧅</span>
                <p className="font-sans text-xs font-bold tracking-widest text-zinc-500 uppercase text-center">
                  PHOTO COMING SOON
                </p>
                <span className="text-[8px] text-rose-400 font-bold uppercase tracking-widest mt-2">
                  ✨ Secure File ✨
                </span>
              </div>
              
              <h3 className="text-xl font-black text-rose-650 uppercase tracking-widest">
                KACCHA PYAZ
              </h3>
            </div>
          )}
        </div>

        {/* Transition Fact & Button */}
        <div className="w-full flex flex-col items-center space-y-3 shrink-0">
          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest select-none">
            {foodAgainRevealed ? "Onion index verified." : "Awaiting onion coordinates..."}
          </span>
          <div className="w-full max-w-xs min-h-[50px] flex items-center justify-center">
            {foodAgainRevealed ? (
              <button
                onClick={() => scrollToSection("sec-final")}
                className="btn-bounce w-full py-3.5 rounded-full bg-rose-400 hover:bg-rose-500 text-white font-bold tracking-widest text-xs uppercase shadow-[0_8px_16px_rgba(244,63,94,0.15)] transition-colors cursor-pointer animate-fade-in"
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

      {/* --- SECTION 8: FINAL SCREEN --- */}
      <section
        id="sec-final"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden border-t border-rose-100"
      >
        <div className="shrink-0 h-6" />

        {/* Ending messages */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-lg overflow-hidden my-auto space-y-6 shrink-0 relative select-none">
          {/* Subtle floating red sparkles behind text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 z-0">
            <span className="text-xl absolute -top-8 left-1/4 animate-pulse text-rose-400">✨</span>
            <span className="text-2xl absolute top-8 right-1/4 animate-pulse delay-75 text-rose-400">✨</span>
            <span className="text-lg absolute bottom-8 left-1/3 animate-pulse delay-100 text-rose-400">✨</span>
          </div>

          <div className="space-y-6 text-center z-10 relative">
            <span className="text-4xl md:text-5xl block animate-pulse">💛</span>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-rose-500 drop-shadow-[0_2px_10px_rgba(244,63,94,0.1)] leading-none uppercase text-center px-4">
              LUVV YU YAAR QT
            </h2>
            <span className="text-4xl md:text-5xl block animate-pulse">💛</span>
          </div>
        </div>

        {/* Footer actions */}
        <div className="w-full max-w-xs flex flex-col items-center space-y-4 shrink-0">
          <div className="space-y-0.5 text-center shrink-0">
            <p className="font-sans text-[10px] text-zinc-400 font-black uppercase tracking-[0.2em]">
              THE ORIGINAL BHOSDI
            </p>
          </div>

          <button
            onClick={handleBackToHQ}
            className="btn-bounce w-full py-3.5 rounded-full bg-rose-400 hover:bg-rose-500 text-white font-sans text-xs tracking-widest font-black uppercase shadow-[0_8px_16px_rgba(244,63,94,0.15)] transition-colors cursor-pointer"
          >
            BACK TO HQ
          </button>
        </div>
      </section>

    </main>
  );
}
