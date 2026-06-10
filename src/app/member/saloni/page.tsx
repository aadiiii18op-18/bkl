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

  // Generate background funny stickers / emojis for meme energy
  const [stickers, setStickers] = useState<{ id: number; char: string; left: string; delay: string; duration: string; size: string; opacity: number }[]>([]);
  useEffect(() => {
    const emojiPool = ["✨", "🔥", "😎", "🤡", "🤣", "💥", "👾", "👻", "⚡", "🌟", "👑"];
    const generatedStickers = [...Array(15)].map((_, i) => ({
      id: i,
      char: emojiPool[Math.floor(Math.random() * emojiPool.length)],
      left: `${Math.random() * 90 + 5}%`,
      delay: `${Math.random() * 8}s`,
      duration: `${10 + Math.random() * 6}s`,
      size: `${18 + Math.random() * 22}px`,
      opacity: 0.25 + Math.random() * 0.25
    }));
    setStickers(generatedStickers);
  }, []);

  const handleBackToHQ = () => {
    router.push("/");
  };

  // Carousel item emojis mapping
  const itemEmojis = ["🍕", "😎", "🤡", "💥", "👾", "🔥"];

  return (
    <main className="relative bg-gradient-to-b from-[#fef08a] via-[#fde047] to-[#fbbf24] text-zinc-900 min-h-screen overflow-x-hidden selection:bg-amber-400 selection:text-zinc-950">
      
      {/* OVERRIDE GLOBAL HACKER OVERLAYS AND ADD COMIC ANIMATIONS */}
      <style jsx global>{`
        /* Completely disable global CRT scanline overlays for this page */
        .scanlines, .scanline-bar {
          display: none !important;
        }

        /* Floating Meme Stickers Animation */
        @keyframes floatUpSticker {
          0% {
            transform: translateY(110vh) translateX(0) scale(0.7) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: var(--sticker-opacity, 0.4);
          }
          90% {
            opacity: var(--sticker-opacity, 0.4);
          }
          100% {
            transform: translateY(-20vh) translateX(40px) scale(1.2) rotate(360deg);
            opacity: 0;
          }
        }
        .floating-sticker {
          position: fixed;
          bottom: -70px;
          user-select: none;
          pointer-events: none;
          z-index: 5;
          animation: floatUpSticker linear infinite;
        }

        /* Comic/Cartoon styled borders and shadows */
        .comic-border {
          border: 4px solid #1c1917;
        }
        .comic-shadow {
          box-shadow: 6px 6px 0px #1c1917;
        }
        .comic-shadow-sm {
          box-shadow: 4px 4px 0px #1c1917;
        }
        .comic-shadow-lg {
          box-shadow: 8px 8px 0px #1c1917;
        }

        /* Bounce Animation for Comic Buttons */
        .btn-bounce {
          transition: transform 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.15s ease;
        }
        .btn-bounce:hover {
          transform: scale(1.02) translate(-2px, -2px);
          box-shadow: 8px 8px 0px #1c1917;
        }
        .btn-bounce:active {
          transform: scale(0.98) translate(2px, 2px);
          box-shadow: 2px 2px 0px #1c1917;
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

      {/* FLOATING COMIC STICKERS BACKDROP */}
      <div className="fixed inset-0 pointer-events-none select-none z-0">
        {stickers.map((sticker) => (
          <span
            key={sticker.id}
            className="floating-sticker text-zinc-900"
            style={{
              left: sticker.left,
              animationDelay: sticker.delay,
              animationDuration: sticker.duration,
              fontSize: sticker.size,
              "--sticker-opacity": sticker.opacity
            } as React.CSSProperties}
          >
            {sticker.char}
          </span>
        ))}
      </div>

      {/* SOFT PARTOON BACKGROUND GLOWS */}
      <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-white/30 blur-[95px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-orange-300/35 blur-[105px] pointer-events-none z-0" />

      {/* --- SECTION 1: WELCOME --- */}
      <section
        id="sec-1"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden"
      >
        <div className="shrink-0 h-2" />

        {/* Content Container */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-sm overflow-hidden my-auto space-y-5">
          {/* Large Photo Placeholder styled as a polaroid comic sticker */}
          <div className="w-full max-w-[280px] sm:max-w-xs md:max-w-[320px] h-[45vh] md:h-[40vh] max-h-[50vh] md:max-h-[42vh] rounded-2xl comic-border bg-white flex flex-col items-center justify-center p-4 comic-shadow relative overflow-hidden group flex-shrink-0">
            <span className="text-5xl mb-2 animate-bounce">📸</span>
            <p className="font-sans text-sm font-black tracking-wider text-zinc-900 uppercase text-center px-4 leading-relaxed">
              SALONI PHOTO PLACEHOLDER
            </p>
            <span className="text-[10px] text-orange-600 font-extrabold uppercase tracking-widest mt-3 px-3 py-1 bg-[#fef08a] comic-border rounded-full shadow-sm">
              ⚡ Core Roster ⚡
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-900 drop-shadow-[4px_4px_0px_#ffffff] text-center shrink-0 uppercase">
            WELCOME BAUNII ❤️
          </h1>
        </div>

        {/* Button */}
        <button
          onClick={() => scrollToSection("sec-2")}
          className="btn-bounce w-full max-w-xs py-3.5 rounded-xl bg-orange-500 text-white font-black tracking-widest text-xs uppercase comic-border comic-shadow cursor-pointer shrink-0"
        >
          NEXT →
        </button>
      </section>

      {/* --- SECTION 2: ARE YOU A BAUNII --- */}
      <section
        id="sec-2"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden border-t-4 border-zinc-900"
      >
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-900 drop-shadow-[4px_4px_0px_#ffffff] text-center shrink-0 uppercase">
          ARE YOU A BAUNII?
        </h2>

        {/* Content Container (Runaway Button implementation) */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-md overflow-hidden my-auto space-y-6 shrink-0 relative">
          
          <div className="w-full max-w-sm rounded-2xl comic-border bg-white p-6 min-h-[200px] flex flex-col justify-center items-center comic-shadow relative overflow-visible">
            
            {!bauniAnswered ? (
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center relative min-h-[120px] overflow-visible">
                {/* YES BUTTON */}
                <button
                  onClick={() => setBauniAnswered(true)}
                  className="btn-bounce w-36 py-3.5 rounded-xl bg-orange-500 text-white font-black text-xs tracking-widest uppercase comic-border comic-shadow-sm cursor-pointer z-10"
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
                    className="w-36 py-3.5 rounded-xl bg-zinc-100 border-4 border-zinc-900 text-zinc-900 font-black text-xs tracking-widest uppercase comic-shadow-sm hover:comic-shadow cursor-pointer"
                  >
                    NO
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-3 w-full text-center animate-scale-in px-4">
                <p className="font-sans text-lg text-orange-600 font-black tracking-wider uppercase leading-snug">
                  MAAN GAIII
                </p>
                <p className="font-sans text-sm text-zinc-900 font-extrabold tracking-wide uppercase leading-relaxed">
                  BAUNII HEHEHE 😭❤️
                </p>
              </div>
            )}

          </div>
        </div>

        {/* Transition Fact & Button */}
        <div className="w-full flex flex-col items-center space-y-3 shrink-0">
          <span className="text-xs font-black text-zinc-800 uppercase tracking-widest select-none bg-[#fef08a] px-3 py-1 comic-border rounded-full">
            "Design parameters optimized."
          </span>
          <div className="w-full max-w-xs min-h-[50px] flex items-center justify-center">
            {bauniAnswered ? (
              <button
                onClick={() => scrollToSection("sec-3")}
                className="btn-bounce w-full py-3.5 rounded-xl bg-orange-500 text-white font-black tracking-widest text-xs uppercase comic-border comic-shadow cursor-pointer animate-fade-in"
              >
                CONTINUE →
              </button>
            ) : (
              <span className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest font-bold">
                Please complete choice above
              </span>
            )}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: ARE YOU A BADMOSHH --- */}
      <section
        id="sec-3"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden border-t-4 border-zinc-900"
      >
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-900 drop-shadow-[4px_4px_0px_#ffffff] text-center shrink-0 uppercase">
          ARE YOU A BADMOSHH?
        </h2>

        {/* Content Container */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-sm overflow-hidden my-auto space-y-4 shrink-0">
          {!badmoshAnswered ? (
            <div className="flex gap-4 w-full justify-center">
              <button
                onClick={() => setBadmoshAnswered(true)}
                className="btn-bounce flex-1 py-4 rounded-xl bg-orange-500 text-white text-xs font-black tracking-widest uppercase transition-colors cursor-pointer comic-border comic-shadow"
              >
                HAAA
              </button>
              <button
                onClick={() => setBadmoshAnswered(true)}
                className="btn-bounce flex-1 py-4 rounded-xl bg-white text-zinc-900 text-xs font-black tracking-widest uppercase transition-colors cursor-pointer comic-border comic-shadow"
              >
                YES
              </button>
            </div>
          ) : (
            <div className="w-full rounded-2xl comic-border bg-white p-6 text-center comic-shadow animate-scale-in flex flex-col justify-center items-center min-h-[160px]">
              <span className="text-5xl mb-3 animate-bounce">👿</span>
              <p className="font-sans text-base font-black text-zinc-900 uppercase tracking-wider leading-relaxed">
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
              className="btn-bounce w-full py-3.5 rounded-xl bg-orange-500 text-white font-black tracking-widest text-xs uppercase comic-border comic-shadow cursor-pointer animate-fade-in"
            >
              CONTINUE →
            </button>
          ) : (
            <span className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest font-bold">
              Please answer the question
            </span>
          )}
        </div>
      </section>

      {/* --- SECTION 4: TEXT OVER PHOTO OVERLAY --- */}
      <section
        id="sec-4"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden border-t-4 border-zinc-900"
      >
        <div className="shrink-0 h-4" />

        {/* Content Container (Text over image overlay) */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-sm overflow-hidden my-auto space-y-4">
          <div className="w-full max-w-[280px] sm:max-w-xs md:max-w-[320px] h-[45vh] md:h-[40vh] max-h-[50vh] md:max-h-[42vh] rounded-2xl comic-border bg-white flex flex-col items-center justify-center comic-shadow relative overflow-hidden group flex-shrink-0">
            {/* Comic style yellow/orange diagonal tint overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-400/80 via-yellow-350/50 to-transparent z-10" />
            
            {/* Icon */}
            <span className="text-5xl mb-4 relative z-25">😈✨</span>
            
            {/* Text Overlay centered over image */}
            <p className="font-sans text-2xl font-black text-zinc-900 uppercase tracking-widest text-center px-4 leading-snug z-25 drop-shadow-[2px_2px_0px_#ffffff] animate-pulse">
              BAUNI BADMOS ❤️
            </p>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={() => scrollToSection("sec-5")}
          className="btn-bounce w-full max-w-xs py-3.5 rounded-xl bg-orange-500 text-white font-black tracking-widest text-xs uppercase comic-border comic-shadow cursor-pointer shrink-0"
        >
          NEXT →
        </button>
      </section>

      {/* --- SECTION 5: CAROUSEL ARCHIVES --- */}
      <section
        id="sec-5"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden border-t-4 border-zinc-900"
      >
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-900 drop-shadow-[4px_4px_0px_#ffffff] text-center shrink-0 uppercase">
          SALONI ARCHIVES 📸
        </h2>

        {/* Swipeable Grid Horizontal Carousel */}
        <div className="flex-grow flex items-center justify-center w-full max-w-5xl overflow-hidden my-auto py-2 shrink-0">
          <div className="w-full overflow-x-auto flex flex-row flex-nowrap gap-6 py-4 px-2 snap-x snap-mandatory no-scrollbar scroll-smooth">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div
                key={num}
                className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.33%-16px)] flex-shrink-0 snap-center rounded-2xl comic-border bg-white flex flex-col items-center justify-center p-6 comic-shadow-sm h-[40vh] md:h-[38vh] max-h-[44vh] select-none hover:border-orange-500 hover:comic-shadow transition-all animate-fade-in"
              >
                <span className="text-4xl mb-3">{itemEmojis[num - 1]}</span>
                <p className="font-sans text-base font-black tracking-widest text-zinc-900 uppercase text-center">
                  PHOTO SLOT 0{num}
                </p>
                <span className="font-sans text-[10px] text-orange-600 font-extrabold uppercase tracking-wider mt-3 px-3 py-1 bg-[#fef08a] comic-border rounded-full">
                  Memory Record 00{num}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Transition Fact & Button */}
        <div className="w-full flex flex-col items-center space-y-3 shrink-0">
          <span className="text-xs font-black text-zinc-800 uppercase tracking-widest select-none bg-[#fef08a] px-3 py-1 comic-border rounded-full">
            "Photos remain highly classified."
          </span>
          <button
            onClick={() => scrollToSection("sec-6")}
            className="btn-bounce w-full max-w-xs py-3.5 rounded-xl bg-orange-500 text-white font-black tracking-widest text-xs uppercase comic-border comic-shadow cursor-pointer shrink-0"
          >
            NEXT →
          </button>
        </div>
      </section>

      {/* --- SECTION 6: KYA KHELEGI GAME CHOICE --- */}
      <section
        id="sec-6"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden border-t-4 border-zinc-900"
      >
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-zinc-900 drop-shadow-[4px_4px_0px_#ffffff] text-center shrink-0 uppercase">
          LET'S PLAY A GAME 🎮
        </h2>

        {/* Content Container */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-md overflow-hidden my-auto space-y-4 shrink-0">
          
          <div className="w-full max-w-sm rounded-2xl comic-border bg-white p-6 min-h-[220px] flex flex-col justify-center items-center comic-shadow relative">
            
            {!gameChoice ? (
              <div className="space-y-4 w-full">
                <p className="font-sans text-xs font-black text-zinc-700 uppercase tracking-wider mb-2 text-center">
                  KYA KHELEGI?
                </p>

                {/* Three game options */}
                <div className="flex flex-col gap-3 w-full">
                  <button
                    onClick={() => setGameChoice("volleyball")}
                    className="btn-bounce w-full py-3 rounded-xl bg-orange-500 text-white font-black text-xs tracking-widest uppercase comic-border comic-shadow-sm cursor-pointer"
                  >
                    VOLLEYBALL
                  </button>
                  <button
                    onClick={() => setGameChoice("running")}
                    className="btn-bounce w-full py-3 rounded-xl bg-orange-500 text-white font-black text-xs tracking-widest uppercase comic-border comic-shadow-sm cursor-pointer"
                  >
                    RUNNING
                  </button>
                  <button
                    onClick={() => setGameChoice("ladai")}
                    className="btn-bounce w-full py-3 rounded-xl bg-orange-500 text-white font-black text-xs tracking-widest uppercase comic-border comic-shadow-sm cursor-pointer"
                  >
                    LADAI
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-5 w-full text-center animate-scale-in">
                {gameChoice === "volleyball" && (
                  <p className="font-sans text-sm sm:text-base text-zinc-900 font-black tracking-wider uppercase leading-relaxed">
                    USME AAPKA CHASMA TOOT JAYEGA 😭
                  </p>
                )}
                {gameChoice === "running" && (
                  <p className="font-sans text-sm sm:text-base text-zinc-900 font-black tracking-wider uppercase leading-relaxed">
                    ITNE CHOTE CHOTE PAIRO SE KAHA BHAGEGI 😭
                  </p>
                )}
                {gameChoice === "ladai" && (
                  <p className="font-sans text-sm sm:text-base text-orange-600 font-black tracking-wider uppercase leading-relaxed animate-pulse">
                    BAS BAAT BAAT PE LADAI KARVALO 😭
                  </p>
                )}
                
                {/* Reset choice trigger */}
                <button
                  onClick={() => setGameChoice(null)}
                  className="text-xs font-black text-zinc-500 hover:text-zinc-800 uppercase tracking-widest underline cursor-pointer block mx-auto mt-2"
                >
                  Change Game
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Transition Fact & Button */}
        <div className="w-full flex flex-col items-center space-y-3 shrink-0">
          <span className="text-xs font-black text-zinc-800 uppercase tracking-widest select-none bg-[#fef08a] px-3 py-1 comic-border rounded-full">
            "Game parameters finalized."
          </span>
          <div className="w-full max-w-xs min-h-[50px] flex items-center justify-center">
            {gameChoice ? (
              <button
                onClick={() => scrollToSection("sec-7")}
                className="btn-bounce w-full py-3.5 rounded-xl bg-orange-500 text-white font-black tracking-widest text-xs uppercase comic-border comic-shadow cursor-pointer animate-fade-in"
              >
                CONTINUE →
              </button>
            ) : (
              <span className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest font-bold">
                Please make a choice above
              </span>
            )}
          </div>
        </div>
      </section>

      {/* --- SECTION 7: HERE IS A GIFT --- */}
      <section
        id="sec-7"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden border-t-4 border-zinc-900"
      >
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-zinc-900 drop-shadow-[4px_4px_0px_#ffffff] text-center shrink-0 px-2 leading-tight uppercase">
          HERE IS A GIFT FOR YOU 🎁
        </h2>

        {/* Content Container */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-sm overflow-hidden my-auto space-y-4 shrink-0">
          
          <button
            onClick={() => setGiftOpened(true)}
            className={`comic-border p-6 text-center flex flex-col justify-center items-center min-h-[160px] w-full max-w-[280px] sm:max-w-xs cursor-pointer transition-all rounded-2xl ${
              giftOpened ? "bg-amber-100 comic-shadow-sm" : "bg-white hover:bg-amber-50 comic-shadow"
            }`}
          >
            <span className="text-5xl mb-2">{giftOpened ? "🥤" : "🎁"}</span>
            <p className="font-sans text-sm font-black text-zinc-900 uppercase tracking-widest mb-2">
              GIFT BOX
            </p>
            {giftOpened ? (
              <div className="animate-scale-in space-y-2">
                <p className="font-sans text-base font-black text-orange-600 uppercase leading-snug">
                  COMPLAIN 🥤
                </p>
                <p className="text-[10px] text-zinc-900 font-extrabold uppercase tracking-wider leading-relaxed">
                  PEE LETI TO BADI HO JATII 😭
                </p>
              </div>
            ) : (
              <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider">CLICK TO OPEN</p>
            )}
          </button>

        </div>

        {/* Transition Fact & Button */}
        <div className="w-full flex flex-col items-center space-y-3 shrink-0">
          <span className="text-xs font-black text-zinc-800 uppercase tracking-widest select-none bg-[#fef08a] px-3 py-1 comic-border rounded-full">
            {giftOpened ? "Gift successfully inspected." : "Unopened gift detected."}
          </span>
          <div className="w-full max-w-xs min-h-[50px] flex items-center justify-center">
            {giftOpened ? (
              <button
                onClick={() => scrollToSection("sec-final")}
                className="btn-bounce w-full py-3.5 rounded-xl bg-orange-500 text-white font-black tracking-widest text-xs uppercase comic-border comic-shadow cursor-pointer animate-fade-in"
              >
                CONTINUE →
              </button>
            ) : (
              <span className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest font-bold">
                Please open the gift
              </span>
            )}
          </div>
        </div>
      </section>

      {/* --- SECTION 8: FINAL SCREEN --- */}
      <section
        id="sec-final"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden border-t-4 border-zinc-900"
      >
        <div className="shrink-0 h-6" />

        {/* Ending messages with subtle sparkles */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-lg overflow-hidden my-auto space-y-6 shrink-0 relative select-none">
          {/* Subtle floating yellow sparkles behind text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-55 z-0">
            <span className="text-2xl absolute -top-8 left-1/4 animate-pulse text-zinc-900">✨</span>
            <span className="text-3xl absolute top-8 right-1/4 animate-pulse delay-75 text-zinc-900">✨</span>
            <span className="text-xl absolute bottom-8 left-1/3 animate-pulse delay-100 text-zinc-900">✨</span>
          </div>

          <div className="space-y-6 text-center z-10 relative">
            <span className="text-4xl md:text-5xl block animate-pulse">✨</span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 drop-shadow-[4px_4px_0px_#ffffff] leading-snug uppercase text-center px-4">
              LUVV YU YAAR BAUNIII
            </h2>
            <span className="text-4xl md:text-5xl block animate-pulse">✨</span>
          </div>
        </div>

        {/* Footer actions */}
        <div className="w-full max-w-xs flex flex-col items-center space-y-4 shrink-0">
          <div className="space-y-0.5 text-center shrink-0">
            <p className="font-sans text-[10px] text-zinc-800 font-black uppercase tracking-[0.2em]">
              CUTEST BAUNI EVER
            </p>
            <p className="font-sans text-xs font-black text-orange-600 uppercase tracking-widest">
              AUR BADMOS BHI
            </p>
          </div>

          <button
            onClick={handleBackToHQ}
            className="btn-bounce w-full py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-sans text-xs tracking-widest font-black uppercase comic-border comic-shadow cursor-pointer"
          >
            BACK TO HQ
          </button>
        </div>
      </section>

    </main>
  );
}
