"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RiyanshiStory() {
  const router = useRouter();

  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // --- INTERACTIVE STATE ---
  
  // Section 2: Favorite Drink
  const [drinkAnswered, setDrinkAnswered] = useState(false);
  const [coffeeOffset, setCoffeeOffset] = useState({ x: 0, y: 0 });

  const handleCoffeeInteraction = () => {
    const range = 140;
    let newX = (Math.random() - 0.5) * 2 * range;
    let newY = (Math.random() - 0.5) * 2 * range;
    if (Math.abs(newX) < 50) newX = newX >= 0 ? 60 : -60;
    if (Math.abs(newY) < 50) newY = newY >= 0 ? 60 : -60;
    setCoffeeOffset({ x: newX, y: newY });
  };

  // Section 3: Next Trip
  const [tripAnswered, setTripAnswered] = useState(false);
  const [tripOffset, setTripOffset] = useState({ x: 0, y: 0 });

  const handleTripInteraction = () => {
    const range = 140;
    let newX = (Math.random() - 0.5) * 2 * range;
    let newY = (Math.random() - 0.5) * 2 * range;
    if (Math.abs(newX) < 50) newX = newX >= 0 ? 60 : -60;
    if (Math.abs(newY) < 50) newY = newY >= 0 ? 60 : -60;
    setTripOffset({ x: newX, y: newY });
  };

  // Section 4: Mystery Box
  const [boxOpened, setBoxOpened] = useState(false);

  // Section 6: Unexpected Error Gate
  // Stage 0: Initial dramatic error
  // Stage 1: LEAVE THIS PAGE clicked -> asks "SAHI MAI JARI HAII?"
  // Stage 2: YES or HAAA clicked -> displays "TO JAA NAAA 😭" + GO BACK button
  // Stage 3: GO BACK clicked -> displays "TU ABHI TAK GAII NAHII 😭" + CONTINUE → button
  const [errorStage, setErrorStage] = useState(0);

  // Floating leaves animation state
  const [leaves, setLeaves] = useState<{ id: number; char: string; left: string; delay: string; duration: string; size: string; opacity: number }[]>([]);
  useEffect(() => {
    const leafPool = ["🍃", "🌿", "🌱", "🍀"];
    const generatedLeaves = [...Array(14)].map((_, i) => ({
      id: i,
      char: leafPool[Math.floor(Math.random() * leafPool.length)],
      left: `${Math.random() * 90 + 5}%`,
      delay: `${Math.random() * 8}s`,
      duration: `${11 + Math.random() * 6}s`,
      size: `${16 + Math.random() * 20}px`,
      opacity: 0.2 + Math.random() * 0.25
    }));
    setLeaves(generatedLeaves);
  }, []);

  const handleBackToHQ = () => {
    router.push("/");
  };

  return (
    <main className="relative bg-gradient-to-b from-emerald-50 via-teal-50 to-green-100 text-emerald-950 min-h-screen overflow-x-hidden selection:bg-emerald-200 selection:text-emerald-900">
      
      {/* OVERRIDE GLOBAL HACKER OVERLAYS AND ADD FLOATING ANIMATIONS */}
      <style jsx global>{`
        /* Completely disable global CRT scanline overlays for this page */
        .scanlines, .scanline-bar {
          display: none !important;
        }

        /* Floating Leaves Animation */
        @keyframes floatUpLeaf {
          0% {
            transform: translateY(110vh) translateX(0) scale(0.8) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: var(--leaf-opacity, 0.4);
          }
          90% {
            opacity: var(--leaf-opacity, 0.4);
          }
          100% {
            transform: translateY(-20vh) translateX(45px) scale(1.1) rotate(360deg);
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
          transform: scale(1.03) translateY(-1px);
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

      {/* FLOATING LEAVES BACKDROP */}
      <div className="fixed inset-0 pointer-events-none select-none z-0">
        {leaves.map((leaf) => (
          <span
            key={leaf.id}
            className="floating-leaf text-emerald-600"
            style={{
              left: leaf.left,
              animationDelay: leaf.delay,
              animationDuration: leaf.duration,
              fontSize: leaf.size,
              "--leaf-opacity": leaf.opacity
            } as React.CSSProperties}
          >
            {leaf.char}
          </span>
        ))}
      </div>

      {/* SOFT PARTOON BACKGROUND GLOWS */}
      <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-emerald-200/40 blur-[90px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-teal-200/30 blur-[100px] pointer-events-none z-0" />

      {/* --- SECTION 1: WELCOME --- */}
      <section
        id="sec-1"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden"
      >
        <div className="shrink-0 h-2" />

        {/* Content Container */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-sm overflow-hidden my-auto space-y-5">
          {/* Large Photo Placeholder */}
          <div className="w-full max-w-[280px] sm:max-w-xs md:max-w-[320px] h-[45vh] md:h-[40vh] max-h-[50vh] md:max-h-[42vh] rounded-3xl border-4 border-emerald-450 bg-white/60 backdrop-blur-md flex flex-col items-center justify-center p-4 shadow-[0_10px_25px_rgba(16,185,129,0.12)] relative overflow-hidden group flex-shrink-0">
            <span className="text-5xl mb-2 animate-bounce">📸</span>
            <p className="font-sans text-sm font-bold tracking-wider text-emerald-800 uppercase text-center px-4 leading-relaxed">
              RIYANSHI PHOTO PLACEHOLDER
            </p>
            <span className="text-[10px] text-emerald-600 font-extrabold uppercase tracking-widest mt-3 px-3 py-1 bg-emerald-50 rounded-full shadow-sm border border-emerald-200">
              🌱 CORE ROSTER 🌱
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-emerald-800 drop-shadow-[0_2px_4px_rgba(16,185,129,0.15)] text-center shrink-0">
            WELCOME CHIAAAAAAAA 💚
          </h1>
        </div>

        {/* Button */}
        <button
          onClick={() => scrollToSection("sec-2")}
          className="btn-bounce w-full max-w-xs py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold tracking-widest text-xs uppercase shadow-[0_8px_16px_rgba(16,185,129,0.25)] transition-colors cursor-pointer shrink-0"
        >
          NEXT →
        </button>
      </section>

      {/* --- SECTION 2: FAVORITE DRINK --- */}
      <section
        id="sec-2"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden border-t border-emerald-200/60"
      >
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-emerald-800 text-center shrink-0">
          FAVORITE DRINK 🍵
        </h2>

        {/* Content Container (Runaway Button implementation) */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-md overflow-hidden my-auto space-y-6 shrink-0 relative">
          
          <div className="w-full max-w-sm rounded-3xl border-4 border-emerald-450 bg-white/70 backdrop-blur-md p-6 min-h-[260px] flex flex-col justify-center items-center shadow-[0_12px_24px_rgba(16,185,129,0.08)] relative overflow-visible">
            
            {!drinkAnswered ? (
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center relative min-h-[140px] overflow-visible">
                {/* MATCHA BUTTON */}
                <button
                  onClick={() => setDrinkAnswered(true)}
                  className="btn-bounce w-36 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs tracking-widest uppercase shadow-md cursor-pointer z-10 border-2 border-emerald-450"
                >
                  MATCHA
                </button>

                {/* RUNAWAY COFFEE BUTTON */}
                <div
                  style={{
                    transform: `translate(${coffeeOffset.x}px, ${coffeeOffset.y}px)`,
                    transition: "transform 0.15s cubic-bezier(0.2, 0.8, 0.2, 1)"
                  }}
                  className="absolute sm:relative z-20"
                >
                  <button
                    onMouseEnter={handleCoffeeInteraction}
                    onTouchStart={handleCoffeeInteraction}
                    onPointerDown={handleCoffeeInteraction}
                    onClick={handleCoffeeInteraction}
                    className="w-36 py-3.5 rounded-full bg-white border-2 border-emerald-300 text-emerald-700 font-bold text-xs tracking-widest uppercase shadow-md cursor-pointer"
                  >
                    COFFEE
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4 w-full text-center animate-scale-in px-4">
                {/* Large Matcha Placeholder */}
                <div className="w-full max-w-[200px] h-[18vh] rounded-2xl border-2 border-emerald-400 bg-emerald-50/50 flex flex-col items-center justify-center p-2 mx-auto">
                  <span className="text-3xl mb-1">🍵</span>
                  <p className="font-sans text-[10px] font-black text-emerald-800 uppercase tracking-widest">
                    MATCHA IMAGE COMING SOON
                  </p>
                </div>
                <p className="font-sans text-sm sm:text-base text-emerald-600 font-black tracking-wider uppercase leading-snug">
                  MACHA PILADOOOOOOOO 😭💚
                </p>
              </div>
            )}

          </div>
        </div>

        {/* Transition Fact & Button */}
        <div className="w-full flex flex-col items-center space-y-3 shrink-0">
          <span className="text-[10px] font-mono text-emerald-700 uppercase tracking-widest select-none font-bold">
            "Beverage selections tracked."
          </span>
          <div className="w-full max-w-xs min-h-[50px] flex items-center justify-center">
            {drinkAnswered ? (
              <button
                onClick={() => scrollToSection("sec-3")}
                className="btn-bounce w-full py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold tracking-widest text-xs uppercase shadow-[0_8px_16px_rgba(16,185,129,0.2)] transition-colors cursor-pointer animate-fade-in"
              >
                CONTINUE →
              </button>
            ) : (
              <span className="text-[10px] font-mono text-emerald-600 uppercase tracking-widest font-bold">
                Please complete choice above
              </span>
            )}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: TRIP PLAN --- */}
      <section
        id="sec-3"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden border-t border-emerald-200/60"
      >
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-emerald-800 text-center shrink-0 uppercase leading-snug px-2">
          AGLI BAAR KAHA CHALENGEEE? 🌊
        </h2>

        {/* Content Container (Runaway Button implementation) */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-md overflow-hidden my-auto space-y-6 shrink-0 relative">
          
          <div className="w-full max-w-sm rounded-3xl border-4 border-emerald-450 bg-white/70 backdrop-blur-md p-6 min-h-[200px] flex flex-col justify-center items-center shadow-[0_12px_24px_rgba(16,185,129,0.08)] relative overflow-visible">
            
            {!tripAnswered ? (
              <div className="flex flex-col gap-4 w-full justify-center items-center relative min-h-[120px] overflow-visible">
                {/* WATERPARK BUTTON */}
                <button
                  onClick={() => setTripAnswered(true)}
                  className="btn-bounce w-48 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs tracking-widest uppercase shadow-md cursor-pointer z-10 border-2 border-emerald-450"
                >
                  WATERPARK
                </button>

                {/* RUNAWAY OTHER BUTTON */}
                <div
                  style={{
                    transform: `translate(${tripOffset.x}px, ${tripOffset.y}px)`,
                    transition: "transform 0.15s cubic-bezier(0.2, 0.8, 0.2, 1)"
                  }}
                  className="absolute z-20"
                >
                  <button
                    onMouseEnter={handleTripInteraction}
                    onTouchStart={handleTripInteraction}
                    onPointerDown={handleTripInteraction}
                    onClick={handleTripInteraction}
                    className="w-48 py-3.5 rounded-full bg-white border-2 border-emerald-300 text-emerald-700 font-bold text-[10px] tracking-widest uppercase shadow-md cursor-pointer"
                  >
                    USKE ALAVA KAHI BHI
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-3 w-full text-center animate-scale-in px-4">
                <span className="text-5xl mb-2 block animate-bounce">🏖️</span>
                <p className="font-sans text-sm sm:text-base text-emerald-600 font-black tracking-wider uppercase leading-snug">
                  DEKH AB TUNE KHUDNE BOLA HAI 😭
                </p>
              </div>
            )}

          </div>
        </div>

        {/* Transition Fact & Button */}
        <div className="w-full flex flex-col items-center space-y-3 shrink-0">
          <span className="text-[10px] font-mono text-emerald-700 uppercase tracking-widest select-none font-bold">
            "Destination locked in memory."
          </span>
          <div className="w-full max-w-xs min-h-[50px] flex items-center justify-center">
            {tripAnswered ? (
              <button
                onClick={() => scrollToSection("sec-4")}
                className="btn-bounce w-full py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold tracking-widest text-xs uppercase shadow-[0_8px_16px_rgba(16,185,129,0.2)] transition-colors cursor-pointer animate-fade-in"
              >
                CONTINUE →
              </button>
            ) : (
              <span className="text-[10px] font-mono text-emerald-600 uppercase tracking-widest font-bold">
                Please lock choice above
              </span>
            )}
          </div>
        </div>
      </section>

      {/* --- SECTION 4: MYSTERY BOX --- */}
      <section
        id="sec-4"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden border-t border-emerald-200/60"
      >
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-emerald-800 text-center shrink-0 uppercase">
          WHAT DO YOU NEED? 📦
        </h2>

        {/* Content Container */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-sm overflow-hidden my-auto space-y-4 shrink-0">
          
          <button
            onClick={() => setBoxOpened(true)}
            className={`rounded-3xl border-4 border-emerald-450 p-6 text-center shadow-md flex flex-col justify-center items-center min-h-[180px] w-full max-w-[280px] sm:max-w-xs cursor-pointer transition-all ${
              boxOpened ? "bg-emerald-100/50 border-emerald-500" : "bg-white/70 hover:bg-emerald-50/50"
            }`}
          >
            <span className="text-5xl mb-2">{boxOpened ? "📱" : "🎁"}</span>
            <p className="font-sans text-xs font-bold text-emerald-700 uppercase tracking-widest mb-2">
              MYSTERY BOX
            </p>
            {boxOpened ? (
              <div className="animate-scale-in space-y-2">
                <p className="font-sans text-sm font-black text-emerald-700 uppercase leading-snug">
                  NAYA PHONE LELE BEHEN
                </p>
                <p className="text-[10px] text-emerald-600 font-extrabold uppercase tracking-wider leading-relaxed">
                  KAB TAK ISE CHALEYGI 😭
                </p>
              </div>
            ) : (
              <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">CLICK TO OPEN</p>
            )}
          </button>

        </div>

        {/* Transition Fact & Button */}
        <div className="w-full flex flex-col items-center space-y-3 shrink-0">
          <span className="text-[10px] font-mono text-emerald-700 uppercase tracking-widest select-none font-bold">
            {boxOpened ? "Mystery revealed." : "Mystery box remains sealed."}
          </span>
          <div className="w-full max-w-xs min-h-[50px] flex items-center justify-center">
            {boxOpened ? (
              <button
                onClick={() => scrollToSection("sec-5")}
                className="btn-bounce w-full py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold tracking-widest text-xs uppercase shadow-[0_8px_16px_rgba(16,185,129,0.2)] transition-colors cursor-pointer animate-fade-in"
              >
                CONTINUE →
              </button>
            ) : (
              <span className="text-[10px] font-mono text-emerald-600 uppercase tracking-widest font-bold">
                Please open the box
              </span>
            )}
          </div>
        </div>
      </section>

      {/* --- SECTION 5: CAROUSEL ARCHIVES --- */}
      <section
        id="sec-5"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden border-t border-emerald-200/60"
      >
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-emerald-800 text-center shrink-0 uppercase">
          CHIA ARCHIVES 📸
        </h2>

        {/* Swipeable Grid Horizontal Carousel */}
        <div className="flex-grow flex items-center justify-center w-full max-w-5xl overflow-hidden my-auto py-2 shrink-0">
          <div className="w-full overflow-x-auto flex flex-row flex-nowrap gap-6 py-4 px-2 snap-x snap-mandatory no-scrollbar scroll-smooth">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div
                key={num}
                className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.33%-16px)] flex-shrink-0 snap-center rounded-3xl border-4 border-emerald-400 bg-white/70 backdrop-blur-md flex flex-col items-center justify-center p-6 shadow-md h-[40vh] md:h-[38vh] max-h-[44vh] select-none hover:border-emerald-600 transition-colors animate-fade-in"
              >
                <span className="text-4xl mb-3">📸</span>
                <p className="font-sans text-sm font-black tracking-widest text-emerald-800 uppercase text-center">
                  PHOTO SLOT 0{num}
                </p>
                <span className="font-sans text-[10px] text-emerald-600 font-bold uppercase tracking-wider mt-3">
                  Memory Record 00{num}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Transition Fact & Button */}
        <div className="w-full flex flex-col items-center space-y-3 shrink-0">
          <span className="text-[10px] font-mono text-emerald-700 uppercase tracking-widest select-none font-bold">
            "Photos remain highly classified."
          </span>
          <button
            onClick={() => scrollToSection("sec-6")}
            className="btn-bounce w-full max-w-xs py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold tracking-widest text-xs uppercase shadow-[0_8px_16px_rgba(16,185,129,0.2)] transition-colors cursor-pointer shrink-0"
          >
            NEXT →
          </button>
        </div>
      </section>

      {/* --- SECTION 6: SUDDEN DARK THEME ERROR --- */}
      <section
        id="sec-6"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-20 overflow-hidden bg-zinc-950 text-red-500 border-t-4 border-red-950 transition-colors duration-500"
      >
        <div className="shrink-0 h-4" />

        {/* Content Container based on errorStage */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-md overflow-hidden my-auto space-y-6 shrink-0 relative select-none">
          
          {errorStage === 0 && (
            <div className="text-center space-y-5 px-4 animate-scale-in">
              <span className="text-6xl block animate-bounce">⚠️</span>
              <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-white uppercase drop-shadow-[0_2px_8px_rgba(239,68,68,0.5)]">
                UNEXPECTED ERROR ⚠️
              </h3>
              <p className="font-mono text-xs uppercase tracking-widest text-red-400 font-extrabold">
                YOU NEED TO LEAVE THIS PAGE
              </p>
              
              <button
                onClick={() => setErrorStage(1)}
                className="btn-bounce mt-4 px-8 py-3.5 rounded-xl bg-red-650 hover:bg-red-700 text-white font-bold tracking-widest text-xs uppercase shadow-md cursor-pointer border border-red-500 block mx-auto"
              >
                LEAVE THIS PAGE
              </button>
            </div>
          )}

          {errorStage === 1 && (
            <div className="text-center space-y-6 px-4 animate-scale-in w-full">
              <p className="font-sans text-lg sm:text-xl text-white font-black tracking-wider uppercase">
                SAHI MAI JARI HAII?
              </p>
              
              <div className="flex gap-4 w-full max-w-xs justify-center mx-auto">
                <button
                  onClick={() => setErrorStage(2)}
                  className="btn-bounce flex-1 py-3.5 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-bold tracking-widest uppercase cursor-pointer"
                >
                  YES
                </button>
                <button
                  onClick={() => setErrorStage(2)}
                  className="btn-bounce flex-1 py-3.5 rounded-full bg-zinc-900 border border-zinc-700 text-red-400 text-xs font-bold tracking-widest uppercase cursor-pointer"
                >
                  HAAA
                </button>
              </div>
            </div>
          )}

          {errorStage === 2 && (
            <div className="text-center space-y-6 px-4 animate-scale-in">
              <p className="font-sans text-2xl sm:text-3xl text-red-450 font-black tracking-wider uppercase animate-pulse">
                TO JAA NAAA 😭
              </p>
              
              <button
                onClick={() => setErrorStage(3)}
                className="btn-bounce mt-4 px-8 py-3.5 rounded-full bg-zinc-900 border border-red-800 text-red-400 font-bold tracking-widest text-xs uppercase shadow-md cursor-pointer block mx-auto"
              >
                GO BACK
              </button>
            </div>
          )}

          {errorStage === 3 && (
            <div className="text-center space-y-6 px-4 animate-scale-in">
              <p className="font-sans text-lg sm:text-xl text-white font-black tracking-wider uppercase leading-relaxed">
                TU ABHI TAK GAII NAHII 😭
              </p>
            </div>
          )}

        </div>

        {/* Transition Fact & Button */}
        <div className="w-full flex flex-col items-center space-y-3 shrink-0">
          <span className="text-[10px] font-mono text-zinc-650 uppercase tracking-widest select-none">
            {errorStage < 3 ? "Gate restriction active." : "Security gate bypassed."}
          </span>
          <div className="w-full max-w-xs min-h-[50px] flex items-center justify-center">
            {errorStage === 3 ? (
              <button
                onClick={() => scrollToSection("sec-final")}
                className="btn-bounce w-full py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold tracking-widest text-xs uppercase shadow-[0_8px_16px_rgba(16,185,129,0.3)] transition-colors cursor-pointer border-2 border-emerald-450 animate-fade-in"
              >
                CONTINUE →
              </button>
            ) : (
              <span className="text-[10px] font-mono text-zinc-550 uppercase tracking-widest font-bold">
                Follow warning prompts above
              </span>
            )}
          </div>
        </div>
      </section>

      {/* --- SECTION 7: FINAL SCREEN --- */}
      <section
        id="sec-final"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden border-t border-emerald-200/60"
      >
        <div className="shrink-0 h-6" />

        {/* Soft green glow container */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-lg overflow-hidden my-auto space-y-6 shrink-0 relative select-none">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 z-0">
            <span className="text-xl absolute -top-8 left-1/4 animate-pulse text-emerald-500">🍃</span>
            <span className="text-2xl absolute top-8 right-1/4 animate-pulse delay-75 text-emerald-500">🍃</span>
            <span className="text-lg absolute bottom-8 left-1/3 animate-pulse delay-100 text-emerald-500">🌿</span>
          </div>

          <div className="space-y-6 text-center z-10 relative">
            <span className="text-5xl md:text-6xl block animate-pulse">💚</span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-emerald-800 drop-shadow-[0_2px_10px_rgba(16,185,129,0.2)] leading-snug uppercase text-center px-4">
              LUVVV YU YAAR CHIAAAA
            </h2>
            <span className="text-5xl md:text-6xl block animate-pulse">💚</span>
          </div>
        </div>

        {/* Footer actions */}
        <div className="w-full max-w-xs flex flex-col items-center space-y-4 shrink-0">
          <div className="space-y-0.5 text-center shrink-0">
            <h3 className="font-sans text-base font-black text-emerald-850 uppercase tracking-widest">
              NEVER CHANGEEE
            </h3>
          </div>

          <button
            onClick={handleBackToHQ}
            className="btn-bounce w-full py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-sans text-xs tracking-widest font-black uppercase shadow-[0_8px_16px_rgba(16,185,129,0.25)] transition-colors cursor-pointer"
          >
            BACK TO HQ
          </button>
        </div>
      </section>

    </main>
  );
}
