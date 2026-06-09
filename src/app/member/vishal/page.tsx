"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function VishalStory() {
  const router = useRouter();

  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // --- STATE FOR INTERACTIONS ---
  // Section 2: Travel Progression
  const [travelStep, setTravelStep] = useState(0); // 0: find, 1: chomu, 2: jnu

  // Section 5: Attendance Progress
  const [attendance, setAttendance] = useState(30);
  const [attendanceStep, setAttendanceStep] = useState(0);
  const [attendanceMsg, setAttendanceMsg] = useState("");
  const [confetti, setConfetti] = useState<{ id: number; left: string; top: string; scale: string; delay: string }[]>([]);

  // Section 6: Chasma Game
  const [gameStarted, setGameStarted] = useState(false);
  const [gameSelected, setGameSelected] = useState<string | null>(null);

  // Generate background sparkles
  const [sparkles, setSparkles] = useState<{ id: number; left: string; delay: string; duration: string; size: string }[]>([]);

  useEffect(() => {
    const generatedSparkles = [...Array(15)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 90 + 5}%`,
      delay: `${Math.random() * 6}s`,
      duration: `${10 + Math.random() * 8}s`,
      size: `${14 + Math.random() * 18}px`
    }));
    setSparkles(generatedSparkles);
  }, []);

  const handleIncreaseAttendance = () => {
    if (attendanceStep === 0) {
      setAttendance(50);
      setAttendanceMsg("Lag gai proxy.");
      setAttendanceStep(1);
    } else if (attendanceStep === 1) {
      setAttendance(60);
      setAttendanceMsg("Proctor ki jaan pehchan and gend chatai.");
      setAttendanceStep(2);

      // Trigger star confetti explosion
      const explosion = [...Array(30)].map((_, i) => ({
        id: i,
        left: `${20 + Math.random() * 60}%`,
        top: `${30 + Math.random() * 40}%`,
        scale: `${0.5 + Math.random() * 1.2}`,
        delay: `${Math.random() * 0.4}s`
      }));
      setConfetti(explosion);
    }
  };

  const handleBackToHQ = () => {
    const currentUser = localStorage.getItem("bkl_current_user");
    if (currentUser) {
      router.push(`/member/${currentUser}`);
    } else {
      router.push("/login");
    }
  };

  return (
    <main className="relative bg-[#fffbeb] text-zinc-700 min-h-screen overflow-x-hidden selection:bg-amber-200">
      
      {/* OVERRIDE GLOBAL HACKER OVERLAYS AND ADD FLOATING ANIMATIONS */}
      <style jsx global>{`
        /* Completely disable global CRT scanline overlays for this page */
        .scanlines, .scanline-bar {
          display: none !important;
        }

        /* Floating Sparkles Animation */
        @keyframes floatUpSparkle {
          0% {
            transform: translateY(110vh) translateX(0) scale(0.6) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.5;
          }
          90% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-20vh) translateX(25px) scale(1.1) rotate(180deg);
            opacity: 0;
          }
        }
        .floating-sparkle {
          position: fixed;
          bottom: -50px;
          user-select: none;
          pointer-events: none;
          z-index: 5;
          animation: floatUpSparkle linear infinite;
        }

        /* Attendance Confetti Animation */
        @keyframes confettiPop {
          0% {
            transform: translate(0, 0) scale(0.3) rotate(0deg);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translate(var(--tw-x, 40px), var(--tw-y, -100px)) scale(1.2) rotate(360deg);
            opacity: 0;
          }
        }
        .confetti-piece {
          position: absolute;
          animation: confettiPop 1.5s cubic-bezier(0.1, 0.8, 0.3, 1) forwards;
          pointer-events: none;
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
            className="floating-sparkle text-amber-400/50"
            style={{
              left: sparkle.left,
              animationDelay: sparkle.delay,
              animationDuration: sparkle.duration,
              fontSize: sparkle.size
            }}
          >
            ✨
          </span>
        ))}
      </div>

      {/* SOFT PASTEL BACKGROUND DECORATIONS */}
      <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-amber-200/20 blur-[90px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-orange-100/30 blur-[100px] pointer-events-none z-0" />

      {/* --- SECTION 1: WELCOME --- */}
      <section
        id="sec-1"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden"
      >
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-amber-600 drop-shadow-[0_2px_4px_rgba(217,119,6,0.1)] text-center">
          WELCOME GENDUU 💛
        </h1>

        {/* Content Container */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-sm overflow-hidden my-auto space-y-4">
          {/* Photo Placeholder */}
          <div className="w-full max-w-[280px] sm:max-w-xs md:max-w-[320px] h-[45vh] md:h-[40vh] max-h-[50vh] md:max-h-[42vh] rounded-3xl border-4 border-white bg-amber-100/40 backdrop-blur-md flex flex-col items-center justify-center p-4 shadow-[0_10px_25px_rgba(217,119,6,0.08)] relative overflow-hidden group flex-shrink-0">
            <span className="text-4xl mb-2">💩</span>
            <p className="font-sans text-xs font-bold tracking-wider text-zinc-650 uppercase text-center px-4 leading-relaxed">
              VISHAL PHOTO
            </p>
            <span className="text-[9px] text-amber-500 font-bold uppercase tracking-widest mt-3">
              ✨ Genduu Archive ✨
            </span>
          </div>

          {/* Tagline */}
          <p className="text-sm md:text-base font-black tracking-widest text-amber-700/80 uppercase shrink-0">
            PROFESSIONAL KACHRAAA
          </p>
        </div>

        {/* Transition Fact & Button */}
        <div className="w-full flex flex-col items-center space-y-3 shrink-0">
          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest select-none">
            "Loading personality..."
          </span>
          <button
            onClick={() => scrollToSection("sec-2")}
            className="btn-bounce w-full max-w-xs py-3.5 rounded-full bg-amber-500 hover:bg-amber-600 text-white font-bold tracking-widest text-xs uppercase shadow-[0_8px_16px_rgba(217,119,6,0.15)] transition-colors cursor-pointer"
          >
            NEXT →
          </button>
        </div>
      </section>

      {/* --- SECTION 2: FAVORITE TRAVEL PLACE (REWORKED PROGRESSIVE REVEAL) --- */}
      <section
        id="sec-2"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden border-t border-amber-100"
      >
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-amber-600 text-center shrink-0">
          FAVORITE TRAVEL PLACE 🌍
        </h2>

        {/* Content Container (Step-wise reveal content) */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-sm overflow-hidden my-auto space-y-4 shrink-0">
          
          {/* Step 0: Find Destination Initial Trigger */}
          {travelStep === 0 && (
            <button
              onClick={() => setTravelStep(1)}
              className="btn-bounce px-10 py-4.5 rounded-full bg-amber-500 hover:bg-amber-600 text-white font-sans text-sm tracking-widest font-black uppercase shadow-md cursor-pointer"
            >
              FIND DESTINATION
            </button>
          )}

          {/* Step 1 & 2: Show Chomu Pulia */}
          {travelStep >= 1 && (
            <div className="w-full rounded-2xl border-4 border-white bg-amber-100/30 p-4 text-center shadow-sm animate-scale-in">
              <p className="font-sans text-xs font-black tracking-wider text-zinc-700 uppercase mb-1">
                CHOMU PULIAA
              </p>
              <p className="text-[11px] text-zinc-500 font-semibold leading-relaxed uppercase">
                "Best tourist destination according to internal research."
              </p>
            </div>
          )}

          {/* Step 1: Future Destination Trigger */}
          {travelStep === 1 && (
            <button
              onClick={() => setTravelStep(2)}
              className="btn-bounce w-full py-3.5 rounded-full bg-white border border-amber-300 hover:bg-amber-50 text-amber-600 text-xs font-bold tracking-widest uppercase transition-colors cursor-pointer shadow-md"
            >
              WHAT ABOUT THE FUTURE?
            </button>
          )}

          {/* Step 2: Show Jaipur National University */}
          {travelStep === 2 && (
            <div className="w-full rounded-2xl border-4 border-white bg-amber-100/30 p-4 text-center shadow-sm animate-scale-in">
              <p className="font-sans text-xs font-black tracking-wider text-zinc-700 uppercase mb-1">
                JAIPUR NATIONAL UNIVERSITY
              </p>
              <p className="text-[11px] text-zinc-500 font-semibold leading-relaxed uppercase">
                "Future expansion project under consideration."
              </p>
            </div>
          )}

        </div>

        {/* Transition Fact & Button */}
        <div className="w-full flex flex-col items-center space-y-3 shrink-0">
          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest select-none">
            "Travel expert since Chomu Pulia."
          </span>
          <div className="w-full max-w-xs min-h-[50px] flex items-center justify-center">
            {travelStep === 2 ? (
              <button
                onClick={() => scrollToSection("sec-3")}
                className="btn-bounce w-full py-3.5 rounded-full bg-amber-500 hover:bg-amber-600 text-white font-bold tracking-widest text-xs uppercase shadow-[0_8px_16px_rgba(217,119,6,0.15)] transition-colors cursor-pointer animate-fade-in"
              >
                CONTINUE →
              </button>
            ) : (
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                Find all destinations to unlock
              </span>
            )}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: MEMORIES CAROUSEL --- */}
      <section
        id="sec-3"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden border-t border-amber-100"
      >
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-amber-600 text-center shrink-0">
          MEMORIES ARCHIVE 📸
        </h2>

        {/* Swipeable Grid Horizontal Carousel */}
        <div className="flex-grow flex items-center justify-center w-full max-w-5xl overflow-hidden my-auto py-2 shrink-0">
          <div className="w-full overflow-x-auto flex flex-row flex-nowrap gap-6 py-4 px-2 snap-x snap-mandatory no-scrollbar scroll-smooth">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div
                key={num}
                className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.33%-16px)] flex-shrink-0 snap-center rounded-3xl border-4 border-white bg-amber-50/80 backdrop-blur-md flex flex-col items-center justify-center p-6 shadow-md h-[40vh] md:h-[38vh] max-h-[44vh] select-none hover:border-amber-400 transition-colors animate-fade-in"
              >
                <span className="text-3xl mb-3">🌻</span>
                <p className="font-sans text-sm font-black tracking-widest text-amber-500 uppercase text-center">
                  PHOTO SLOT 0{num}
                </p>
                <span className="font-sans text-[9px] text-zinc-400 font-bold uppercase tracking-wider mt-3">
                  Friendship Memory 00{num}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Transition Fact & Button */}
        <div className="w-full flex flex-col items-center space-y-3 shrink-0">
          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest select-none">
            "Professional kachra detected."
          </span>
          <button
            onClick={() => scrollToSection("sec-4")}
            className="btn-bounce w-full max-w-xs py-3.5 rounded-full bg-amber-505 hover:bg-amber-600 text-white font-bold tracking-widest text-xs uppercase shadow-[0_8px_16px_rgba(217,119,6,0.15)] transition-colors cursor-pointer"
          >
            NEXT →
          </button>
        </div>
      </section>

      {/* --- SECTION 4: FAVORITE FIELDING SET --- */}
      <section
        id="sec-4"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden border-t border-amber-100"
      >
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-amber-600 text-center shrink-0">
          FAVORITE FIELDING SET
        </h2>

        {/* Content Container */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-sm overflow-hidden my-auto space-y-4 shrink-0">
          {/* Card */}
          <div className="w-full max-w-[280px] sm:max-w-xs md:max-w-[320px] h-[45vh] md:h-[40vh] max-h-[50vh] md:max-h-[42vh] rounded-3xl border-4 border-white bg-amber-100/40 backdrop-blur-md flex flex-col items-center justify-center p-6 shadow-[0_10px_25px_rgba(217,119,6,0.08)] relative overflow-hidden group flex-shrink-0">
            <span className="text-5xl mb-4">☕</span>
            <p className="font-sans text-base font-black tracking-widest text-zinc-700 uppercase text-center px-4 leading-relaxed">
              APEX KI TAPRII
            </p>
            
            {/* Funny Badge */}
            <div className="mt-4 px-4 py-1.5 rounded-full border-2 border-white bg-amber-250 text-zinc-650 text-[10px] font-black tracking-widest uppercase shadow-sm">
              CERTIFIED LOCATION
            </div>
          </div>
        </div>

        {/* Transition Fact & Button */}
        <div className="w-full flex flex-col items-center space-y-3 shrink-0">
          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest select-none">
            "Loading personality..."
          </span>
          <button
            onClick={() => scrollToSection("sec-5")}
            className="btn-bounce w-full max-w-xs py-3.5 rounded-full bg-amber-505 hover:bg-amber-600 text-white font-bold tracking-widest text-xs uppercase shadow-[0_8px_16px_rgba(217,119,6,0.15)] transition-colors cursor-pointer"
          >
            CONTINUE →
          </button>
        </div>
      </section>

      {/* --- SECTION 5: ATTENDANCE METER --- */}
      <section
        id="sec-5"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden border-t border-amber-100"
      >
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-amber-600 text-center shrink-0">
          ATTENDANCE METER
        </h2>

        {/* Confetti Explosion Layer */}
        {attendance === 60 && (
          <div className="absolute inset-0 pointer-events-none z-30 select-none overflow-hidden">
            {confetti.map((c) => (
              <span
                key={c.id}
                className="confetti-piece text-amber-500"
                style={{
                  left: c.left,
                  top: c.top,
                  animationDelay: c.delay,
                  "--tw-x": `${(Math.random() - 0.5) * 200}px`,
                  "--tw-y": `${-100 - Math.random() * 150}px`,
                  transform: `scale(${c.scale})`
                } as React.CSSProperties}
              >
                ✨
              </span>
            ))}
          </div>
        )}

        {/* Content Container */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-md overflow-hidden my-auto space-y-6 shrink-0 relative">
          <div className="w-full max-w-sm rounded-3xl border-4 border-white bg-amber-100/50 backdrop-blur-md p-6 sm:p-8 space-y-6 shadow-[0_12px_24px_rgba(217,119,6,0.06)] flex flex-col items-center">
            
            {/* Progress Label */}
            <div className="flex justify-between w-full font-sans text-sm font-black text-zinc-650 tracking-wider">
              <span>CURRENT ATTENDANCE:</span>
              <span className="text-amber-600">{attendance}%</span>
            </div>

            {/* Visual progress bar */}
            <div className="w-full h-8 bg-zinc-200/50 rounded-full border-4 border-white overflow-hidden shadow-inner relative">
              <div
                className="h-full bg-gradient-to-r from-amber-400 to-amber-600 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${attendance}%` }}
              />
            </div>

            {/* Prompt feedback */}
            {attendanceMsg && (
              <div className="p-3.5 rounded-2xl border-2 border-white bg-white/70 text-zinc-700 text-xs font-bold leading-relaxed text-center animate-fade-in w-full">
                {attendanceMsg}
              </div>
            )}

            {/* YAYYY Alert */}
            {attendance === 60 && (
              <div className="text-2xl font-black text-amber-600 animate-bounce tracking-widest pt-2">
                YAYYYYY 🎉
              </div>
            )}

            <button
              onClick={handleIncreaseAttendance}
              disabled={attendanceStep >= 2}
              className="btn-bounce w-full py-4 rounded-full bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-white font-sans text-xs tracking-widest font-black uppercase shadow-md cursor-pointer transition-colors"
            >
              {attendanceStep >= 2 ? "MAX ATTENDANCE REACHED" : "INCREASE ATTENDANCE"}
            </button>
          </div>
        </div>

        {/* Transition Fact & Button */}
        <div className="w-full flex flex-col items-center space-y-3 shrink-0">
          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest select-none">
            "Attendance department under investigation."
          </span>
          <div className="w-full max-w-xs min-h-[50px] flex items-center justify-center">
            {attendanceStep >= 2 ? (
              <button
                onClick={() => scrollToSection("sec-6")}
                className="btn-bounce w-full py-3.5 rounded-full bg-amber-500 hover:bg-amber-600 text-white font-bold tracking-widest text-xs uppercase shadow-[0_8px_16px_rgba(217,119,6,0.15)] transition-colors cursor-pointer animate-fade-in"
              >
                NEXT →
              </button>
            ) : (
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                Increase attendance to unlock
              </span>
            )}
          </div>
        </div>
      </section>

      {/* --- SECTION 6: CHASMA GAME --- */}
      <section
        id="sec-6"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden border-t border-amber-100"
      >
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-amber-600 text-center shrink-0">
          LET'S PLAY A GAME 🎮
        </h2>

        {/* Content Container */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-md overflow-hidden my-auto space-y-4 shrink-0">
          
          <div className="w-full rounded-3xl border-4 border-white bg-amber-100/50 backdrop-blur-md p-6 min-h-[220px] flex flex-col justify-center items-center shadow-[0_12px_24px_rgba(217,119,6,0.06)] relative">
            
            {!gameStarted ? (
              <button
                onClick={() => setGameStarted(true)}
                className="btn-bounce px-12 py-4 rounded-full bg-amber-500 hover:bg-amber-600 text-white font-sans text-sm tracking-widest font-black uppercase shadow-md cursor-pointer"
              >
                PLAY
              </button>
            ) : (
              <div className="space-y-4 w-full text-center">
                <p className="font-sans text-xs font-bold text-zinc-655 uppercase tracking-wider mb-2">
                  FIND YOUR CHASMAA 👓
                </p>

                {/* 3 visually different glasses placeholders */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: "g1", icon: "🕶️", style: "Aviator Style" },
                    { id: "g2", icon: "👓", style: "Retro Round" },
                    { id: "g3", icon: "🤓", style: "Classic Square" }
                  ].map((g) => (
                    <button
                      key={g.id}
                      onClick={() => setGameSelected(g.id)}
                      disabled={gameSelected !== null}
                      className={`btn-bounce rounded-2xl border-4 border-white p-3 flex flex-col items-center justify-center shadow-sm cursor-pointer transition-all ${
                        gameSelected === g.id
                          ? "bg-amber-300 border-amber-500 scale-105"
                          : "bg-white/80 hover:bg-white"
                      }`}
                    >
                      <span className="text-3xl mb-1">{g.icon}</span>
                      <span className="text-[8px] font-sans text-zinc-400 font-bold uppercase select-none leading-none">
                        {g.style}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Roast reveal with animation */}
                {gameSelected && (
                  <div className="pt-2 animate-slide-up space-y-1">
                    <p className="font-sans text-sm text-amber-600 font-black uppercase leading-snug">
                      "Aapkaa to toot gaya kabkaaa :)"
                    </p>
                    <p className="font-sans text-[10px] text-zinc-400 font-semibold tracking-wide uppercase">
                      "Recovery impossible."
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Transition Fact & Button */}
        <div className="w-full flex flex-col items-center space-y-3 shrink-0">
          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest select-none">
            "Professional kachra detected."
          </span>
          <div className="w-full max-w-xs min-h-[50px] flex items-center justify-center">
            {gameSelected ? (
              <button
                onClick={() => scrollToSection("sec-final")}
                className="btn-bounce w-full py-3.5 rounded-full bg-amber-500 hover:bg-amber-600 text-white font-bold tracking-widest text-xs uppercase shadow-[0_8px_16px_rgba(217,119,6,0.15)] transition-colors cursor-pointer animate-fade-in"
              >
                Continue →
              </button>
            ) : (
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                Please play game above
              </span>
            )}
          </div>
        </div>
      </section>

      {/* --- SECTION 7: FINAL SCREEN --- */}
      <section
        id="sec-final"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden border-t border-amber-100"
      >
        <div className="shrink-0 h-6" />

        {/* Ending messages with subtle sparkles */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-lg overflow-hidden my-auto space-y-6 shrink-0 relative select-none">
          {/* Subtle floating sparkles layered behind text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 z-0">
            <span className="text-xl absolute -top-8 left-1/4 animate-pulse">✨</span>
            <span className="text-2xl absolute top-8 right-1/4 animate-pulse delay-75">✨</span>
            <span className="text-lg absolute bottom-8 left-1/3 animate-pulse delay-100">✨</span>
          </div>

          <div className="space-y-6 text-center z-10 relative">
            <span className="text-4xl md:text-5xl block animate-pulse">💛</span>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-amber-600 drop-shadow-[0_2px_10px_rgba(217,119,6,0.1)] leading-none uppercase text-center px-4">
              LUVV YU YAAR QT
            </h2>
            <span className="text-4xl md:text-5xl block animate-pulse">💛</span>
          </div>
        </div>

        {/* Footer actions */}
        <div className="w-full max-w-xs flex flex-col items-center space-y-4 shrink-0">
          <div className="space-y-0.5 text-center shrink-0">
            <p className="font-sans text-[10px] text-zinc-400 font-black uppercase tracking-[0.2em]">
              Officially Certified:
            </p>
            <p className="font-sans text-sm font-black text-amber-600 uppercase tracking-widest">
              Genduu.
            </p>
          </div>

          <button
            onClick={handleBackToHQ}
            className="btn-bounce w-full py-3.5 rounded-full bg-amber-500 hover:bg-amber-600 text-white font-sans text-xs tracking-widest font-black uppercase shadow-[0_8px_16px_rgba(217,119,6,0.15)] transition-colors cursor-pointer"
          >
            BACK TO HQ
          </button>
        </div>
      </section>

    </main>
  );
}
