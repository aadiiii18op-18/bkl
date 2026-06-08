"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RajuStory() {
  const router = useRouter();

  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // --- STATE FOR INTERACTIONS ---
  // Section 4 popups
  const [sec4Popup, setSec4Popup] = useState<string | null>(null);
  const [sec4Completed, setSec4Completed] = useState(false);

  // Section 6 game roast
  const [gamePlayed, setGamePlayed] = useState(false);

  // Section 7 music survey
  const [musicClicked, setMusicClicked] = useState(false);

  const handleBackToHQ = () => {
    const currentUser = localStorage.getItem("bkl_current_user");
    if (currentUser) {
      router.push(`/member/${currentUser}`);
    } else {
      router.push("/login");
    }
  };

  // Generate arrays for floating hearts
  const [hearts, setHearts] = useState<{ id: number; left: string; delay: string; duration: string; size: string }[]>([]);
  useEffect(() => {
    const generatedHearts = [...Array(15)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 90 + 5}%`,
      delay: `${Math.random() * 8}s`,
      duration: `${12 + Math.random() * 8}s`,
      size: `${14 + Math.random() * 20}px`
    }));
    setHearts(generatedHearts);
  }, []);

  return (
    <main className="relative bg-[#fff1f2] text-zinc-700 min-h-screen overflow-x-hidden selection:bg-pink-200">
      
      {/* OVERRIDE GLOBAL HACKER OVERLAYS AND ADD FLOATING ANIMATIONS */}
      <style jsx global>{`
        /* Completely disable global CRT scanline overlays for this page */
        .scanlines, .scanline-bar {
          display: none !important;
        }

        /* Floating Hearts Animation */
        @keyframes floatUp {
          0% {
            transform: translateY(110vh) translateX(0) scale(0.6) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.4;
          }
          90% {
            opacity: 0.4;
          }
          100% {
            transform: translateY(-20vh) translateX(30px) scale(1.1) rotate(360deg);
            opacity: 0;
          }
        }
        .floating-heart {
          position: fixed;
          bottom: -50px;
          user-select: none;
          pointer-events: none;
          z-index: 5;
          animation: floatUp linear infinite;
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
            className="floating-heart text-rose-300/40"
            style={{
              left: heart.left,
              animationDelay: heart.delay,
              animationDuration: heart.duration,
              fontSize: heart.size
            }}
          >
            💛
          </span>
        ))}
      </div>

      {/* SOFT PASTEL BACKGROUND DECORATIONS */}
      <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-pink-200/20 blur-[90px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-rose-200/20 blur-[100px] pointer-events-none z-0" />

      {/* --- SECTION 1: WELCOME --- */}
      <section
        id="sec-1"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden"
      >
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-rose-500 shrink-0">
          WELCOME BAUNE ❤️
        </h1>

        {/* Content Container (Flexible layout to guarantee no button overflow) */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-sm overflow-hidden my-auto space-y-4">
          {/* Photo Placeholder - scaled specifically to fit desktop & mobile viewports */}
          <div className="w-full max-w-[280px] sm:max-w-xs md:max-w-[320px] h-[45vh] md:h-[40vh] max-h-[50vh] md:max-h-[42vh] rounded-3xl border-4 border-white bg-pink-100/50 backdrop-blur-md flex flex-col items-center justify-center p-4 shadow-[0_10px_25px_rgba(244,63,94,0.08)] relative overflow-hidden group flex-shrink-0">
            <span className="text-4xl mb-2 animate-bounce">🥛</span>
            <p className="font-sans text-xs font-bold tracking-wider text-zinc-600 uppercase text-center px-4 leading-relaxed">
              COMPLAIN PEENE WALA PHOTO
            </p>
            <span className="text-[9px] text-rose-400 font-bold uppercase tracking-widest mt-3">
              ✨ Locked Memory ✨
            </span>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={() => scrollToSection("sec-2")}
          className="btn-bounce w-full max-w-xs py-3.5 rounded-full bg-rose-400 hover:bg-rose-500 text-white font-bold tracking-widest text-xs uppercase shadow-[0_8px_16px_rgba(244,63,94,0.15)] transition-colors cursor-pointer shrink-0"
        >
          NEXT →
        </button>
      </section>

      {/* --- SECTION 2: QT NOTICE --- */}
      <section
        id="sec-2"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden border-t border-rose-100"
      >
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-rose-500 shrink-0">
          LUVV YOU YAAR QT 💛
        </h2>

        {/* Content Container */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-sm overflow-hidden my-auto space-y-4">
          {/* Photo Placeholder */}
          <div className="w-full max-w-[280px] sm:max-w-xs md:max-w-[320px] h-[45vh] md:h-[40vh] max-h-[50vh] md:max-h-[42vh] rounded-3xl border-4 border-white bg-pink-100/50 backdrop-blur-md flex flex-col items-center justify-center p-4 shadow-[0_10px_25px_rgba(244,63,94,0.08)] relative overflow-hidden group flex-shrink-0">
            <span className="text-4xl mb-2">🥰</span>
            <p className="font-sans text-xs font-bold tracking-wider text-zinc-600 uppercase text-center px-4 leading-relaxed">
              RAJU PHOTO PLACEHOLDER
            </p>
            <span className="text-[9px] text-rose-400 font-bold uppercase tracking-widest mt-3">
              ✨ Best Friend Archive ✨
            </span>
          </div>

          {/* Subtitle box */}
          <div className="w-full max-w-[280px] sm:max-w-xs p-3.5 rounded-2xl bg-white border border-rose-100 shadow-[0_8px_16px_rgba(0,0,0,0.01)] text-left shrink-0">
            <p className="font-bold text-rose-500 text-[10px] uppercase tracking-widest mb-0.5">Official BKL Notice:</p>
            <p className="text-[11px] text-zinc-500 leading-relaxed font-semibold">Subject remains emotionally compromised.</p>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={() => scrollToSection("sec-3")}
          className="btn-bounce w-full max-w-xs py-3.5 rounded-full bg-rose-400 hover:bg-rose-500 text-white font-bold tracking-widest text-xs uppercase shadow-[0_8px_16px_rgba(244,63,94,0.15)] transition-colors cursor-pointer shrink-0"
        >
          CONTINUE →
        </button>
      </section>

      {/* --- SECTION 3: GOT CAUGHT --- */}
      <section
        id="sec-3"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden border-t border-rose-100"
      >
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-rose-500 shrink-0">
          PAKDA GAYA BADMASH 🚨
        </h2>

        {/* Content Container */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-sm overflow-hidden my-auto space-y-4">
          {/* Photo Placeholder */}
          <div className="w-full max-w-[280px] sm:max-w-xs md:max-w-[320px] h-[45vh] md:h-[40vh] max-h-[50vh] md:max-h-[42vh] rounded-3xl border-4 border-white bg-pink-100/50 backdrop-blur-md flex flex-col items-center justify-center p-4 shadow-[0_10px_25px_rgba(244,63,94,0.08)] relative overflow-hidden group flex-shrink-0">
            <span className="text-4xl mb-2 animate-bounce">🕵️‍♂️</span>
            <p className="font-sans text-xs font-bold tracking-wider text-zinc-600 uppercase text-center px-4 leading-relaxed">
              PAKDA GAYA BADMASH PHOTO<br />
              <span className="text-[10px] text-rose-400 font-normal mt-1 block">(COMING SOON)</span>
            </p>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-rose-200 bg-rose-50 text-rose-600 text-[10px] font-bold tracking-widest uppercase shadow-sm shrink-0">
            🚨 Got caught 😂
          </div>
        </div>

        {/* Button */}
        <button
          onClick={() => scrollToSection("sec-4")}
          className="btn-bounce w-full max-w-xs py-3.5 rounded-full bg-rose-400 hover:bg-rose-500 text-white font-bold tracking-widest text-xs uppercase shadow-[0_8px_16px_rgba(244,63,94,0.15)] transition-colors cursor-pointer shrink-0"
        >
          PROCEED →
        </button>
      </section>

      {/* --- SECTION 4: BARBAAD QUESTION --- */}
      <section
        id="sec-4"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden border-t border-rose-100"
      >
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-rose-500 uppercase shrink-0">
          QUESTION CARD
        </h2>

        {/* Content Container */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-md overflow-hidden my-auto space-y-4 shrink-0">
          {/* Question card */}
          <div className="w-full max-w-sm rounded-3xl border-4 border-white bg-pink-100/50 backdrop-blur-md p-6 space-y-6 shadow-[0_12px_24px_rgba(244,63,94,0.06)] relative">
            <p className="font-sans text-lg font-black tracking-wide text-zinc-700 uppercase leading-snug">
              KYA AAPKO BARBAAD HONA HAI?
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  setSec4Popup("K naam ki ladki se ektarfaa pyaar kar lo.");
                  setSec4Completed(true);
                }}
                className="btn-bounce flex-1 py-3.5 rounded-full bg-rose-400 hover:bg-rose-500 text-white text-xs font-bold tracking-widest uppercase transition-colors cursor-pointer shadow-md"
              >
                HAA
              </button>
              <button
                onClick={() => {
                  setSec4Popup("Aap pahle hi uske pyaar mein barbaad ho.");
                  setSec4Completed(true);
                }}
                className="btn-bounce flex-1 py-3.5 rounded-full bg-white border border-rose-200 hover:bg-rose-50 text-rose-500 text-xs font-bold tracking-widest uppercase transition-colors cursor-pointer shadow-md"
              >
                NAA
              </button>
            </div>
          </div>

          {/* Wholesome popup modal */}
          {sec4Popup && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-rose-950/20 backdrop-blur-md animate-fade-in">
              <div className="max-w-sm w-full rounded-3xl border-4 border-white bg-pink-50 p-6 text-center space-y-5 shadow-2xl relative animate-slide-up">
                <span className="text-4xl block animate-bounce">💘</span>
                <p className="font-sans text-xs md:text-sm font-bold text-zinc-700 leading-relaxed uppercase">
                  {sec4Popup}
                </p>
                <button
                  onClick={() => setSec4Popup(null)}
                  className="btn-bounce w-full py-2.5 rounded-full bg-rose-400 hover:bg-rose-500 text-white font-bold text-[10px] tracking-widest uppercase transition-colors cursor-pointer"
                >
                  CLOSE MESSAGE
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Button - Hidden until completed */}
        <div className="w-full max-w-xs shrink-0 min-h-[50px] flex items-center justify-center">
          {sec4Completed ? (
            <button
              onClick={() => scrollToSection("sec-5")}
              className="btn-bounce w-full py-3.5 rounded-full bg-rose-400 hover:bg-rose-500 text-white font-bold tracking-widest text-xs uppercase shadow-[0_8px_16px_rgba(244,63,94,0.15)] transition-colors cursor-pointer animate-fade-in"
            >
              MOVE FORWARD →
            </button>
          ) : (
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
              Please choose an answer above
            </span>
          )}
        </div>
      </section>

      {/* --- SECTION 5: CAROUSEL ARCHIVES (FIXED RESPONSIVE CAROUSEL) --- */}
      <section
        id="sec-5"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden border-t border-rose-100"
      >
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-rose-500 uppercase shrink-0">
          RAJU ARCHIVES
        </h2>

        {/* Horizontal scroll container (Calculated precisely to show 3 cards on desktop, 2 on tablet, 1 on mobile) */}
        <div className="flex-grow flex items-center justify-center w-full max-w-5xl overflow-hidden my-auto py-2 shrink-0">
          <div className="w-full overflow-x-auto flex flex-row flex-nowrap gap-6 py-4 px-2 snap-x snap-mandatory no-scrollbar scroll-smooth">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div
                key={num}
                className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.33%-16px)] flex-shrink-0 snap-center rounded-3xl border-4 border-white bg-pink-50/80 backdrop-blur-md flex flex-col items-center justify-center p-6 shadow-md h-[40vh] md:h-[38vh] max-h-[44vh] select-none hover:border-rose-400 transition-colors"
              >
                <span className="text-3xl mb-3">🌸</span>
                <p className="font-sans text-sm font-black tracking-widest text-rose-400 uppercase text-center">
                  PHOTO SLOT 0{num}
                </p>
                <span className="font-sans text-[9px] text-zinc-400 font-bold uppercase tracking-wider mt-3">
                  Memory Record 00{num}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <button
          onClick={() => scrollToSection("sec-6")}
          className="btn-bounce w-full max-w-xs py-3.5 rounded-full bg-rose-400 hover:bg-rose-500 text-white font-bold tracking-widest text-xs uppercase shadow-[0_8px_16px_rgba(244,63,94,0.15)] transition-colors cursor-pointer shrink-0"
        >
          NEXT CHAPTER →
        </button>
      </section>

      {/* --- SECTION 6: GAME SECTION --- */}
      <section
        id="sec-6"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden border-t border-rose-100"
      >
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-rose-500 uppercase shrink-0">
          LET'S PLAY A GAME 🎮
        </h2>

        {/* Content Container */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-md overflow-hidden my-auto space-y-4 shrink-0">
          <div className="w-full max-w-sm rounded-3xl border-4 border-white bg-pink-100/50 backdrop-blur-md p-6 min-h-[160px] flex flex-col justify-center items-center shadow-[0_12px_24px_rgba(244,63,94,0.06)] relative">
            {!gamePlayed ? (
              <button
                onClick={() => setGamePlayed(true)}
                className="btn-bounce px-10 py-3.5 rounded-full bg-rose-400 hover:bg-rose-500 text-white font-sans text-sm tracking-widest font-black uppercase shadow-[0_8px_16px_rgba(244,63,94,0.18)] cursor-pointer"
              >
                PLAY
              </button>
            ) : (
              <div className="space-y-4 w-full animate-fade-in">
                <p className="font-sans text-sm md:text-base text-rose-500 font-black leading-relaxed uppercase">
                  "Game to aapke saath wo khel gayi Raju bhai."
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Button - Hidden until game played */}
        <div className="w-full max-w-xs shrink-0 min-h-[50px] flex items-center justify-center">
          {gamePlayed ? (
            <button
              onClick={() => scrollToSection("sec-7")}
              className="btn-bounce w-full py-3.5 rounded-full bg-white border border-rose-300 hover:bg-rose-50 text-rose-500 text-xs font-bold tracking-widest uppercase transition-colors cursor-pointer shadow-md"
            >
              Continue →
            </button>
          ) : (
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
              Please click PLAY above
            </span>
          )}
        </div>
      </section>

      {/* --- SECTION 7: MUSIC SURVEY --- */}
      <section
        id="sec-7"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden border-t border-rose-100"
      >
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-rose-500 uppercase shrink-0 px-2 text-center leading-tight">
          WHO HAS THE GREATEST MUSIC TASTE?
        </h2>

        {/* Content Container */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-md overflow-hidden my-auto space-y-4 shrink-0">
          <div className="w-full max-w-sm rounded-3xl border-4 border-white bg-pink-100/50 backdrop-blur-md p-6 min-h-[160px] flex flex-col justify-center items-center shadow-[0_12px_24px_rgba(244,63,94,0.06)] relative">
            {!musicClicked ? (
              <button
                onClick={() => setMusicClicked(true)}
                className="btn-bounce w-full py-4 rounded-full bg-white border-2 border-rose-200 hover:border-rose-300 hover:bg-rose-50 text-rose-500 font-sans text-xs tracking-wider font-extrabold uppercase transition-all cursor-pointer shadow-sm"
              >
                RAJU (MYSELF)
              </button>
            ) : (
              <div className="space-y-4 w-full animate-fade-in text-left">
                <div className="font-sans text-xs sm:text-sm text-zinc-650 leading-relaxed border-l-4 border-rose-400 pl-3.5 space-y-2.5 font-semibold uppercase">
                  <p>
                    "Haa bhai maan liya tera music aur movie taste goated hai."
                  </p>
                  <p className="text-rose-500 font-black">
                    "Par ab mere laude se to utar."
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Button - Hidden until music taste checked */}
        <div className="w-full max-w-xs shrink-0 min-h-[50px] flex items-center justify-center">
          {musicClicked ? (
            <button
              onClick={() => scrollToSection("sec-final")}
              className="btn-bounce w-full py-3.5 rounded-full bg-rose-400 hover:bg-rose-500 text-white font-sans text-xs tracking-widest font-bold uppercase transition-colors cursor-pointer shadow-[0_8px_16px_rgba(244,63,94,0.15)] text-center"
            >
              REVEAL FINAL CHAPTER →
            </button>
          ) : (
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
              Please choose answer above
            </span>
          )}
        </div>
      </section>

      {/* --- SECTION 8: FINAL SCREEN --- */}
      <section
        id="sec-final"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden border-t border-rose-100"
      >
        {/* Placeholder spacer to balance layout top */}
        <div className="shrink-0 h-6" />

        {/* Content Container */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-lg overflow-hidden my-auto space-y-6 shrink-0 select-none">
          <span className="text-4xl animate-pulse">💛</span>
          
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-rose-500 drop-shadow-[0_2px_10px_rgba(244,63,94,0.1)] leading-none uppercase text-center px-4">
            LUVV YU YAAR QT
          </h2>

          <span className="text-4xl animate-pulse">💛</span>
        </div>

        {/* Footer actions */}
        <div className="w-full max-w-xs flex flex-col items-center space-y-4 shrink-0">
          <div className="space-y-0.5 text-center shrink-0">
            <p className="font-sans text-[10px] text-zinc-400 font-black uppercase tracking-[0.2em]">
              Officially Certified:
            </p>
            <p className="font-sans text-sm font-black text-rose-500 uppercase tracking-widest">
              Baune.
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
