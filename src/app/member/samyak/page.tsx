"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SamyakStory() {
  const router = useRouter();

  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // --- STATE FOR INTERACTIONS ---
  // Section 2: Food Reveal
  const [foodRevealed, setFoodRevealed] = useState(false);

  // Section 3: Place Reveal
  const [placeRevealed, setPlaceRevealed] = useState(false);

  // Section 5: Kaam Reveal
  const [kaamRevealed, setKaamRevealed] = useState(false);

  // Section 6: Khoon Badhvana Reveal
  const [khoonRevealed, setKhoonRevealed] = useState(false);

  // Section 7: Design Question & Runaway Button
  const [designAnswered, setDesignAnswered] = useState(false);
  const [naaOffset, setNaaOffset] = useState({ x: 0, y: 0 });

  const handleNaaInteraction = () => {
    const range = 130; // Max offset in pixels
    let newX = (Math.random() - 0.5) * 2 * range;
    let newY = (Math.random() - 0.5) * 2 * range;
    
    // Ensure the button jumps a minimum distance so it's noticeably moving
    if (Math.abs(newX) < 45) newX = newX >= 0 ? 55 : -55;
    if (Math.abs(newY) < 45) newY = newY >= 0 ? 55 : -55;
    
    setNaaOffset({ x: newX, y: newY });
  };

  // Generate background clouds
  const [clouds, setClouds] = useState<{ id: number; left: string; delay: string; duration: string; size: string; opacity: number }[]>([]);
  useEffect(() => {
    // Client-side random generation
    const generatedClouds = [...Array(10)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 90 + 5}%`,
      delay: `${Math.random() * 8}s`,
      duration: `${15 + Math.random() * 10}s`,
      size: `${24 + Math.random() * 32}px`,
      opacity: 0.15 + Math.random() * 0.2
    }));
    setClouds(generatedClouds);
  }, []);

  const handleBackToHQ = () => {
    router.push("/");
  };

  return (
    <main className="relative bg-[#f0f9ff] text-zinc-700 min-h-screen overflow-x-hidden selection:bg-sky-200">
      
      {/* OVERRIDE GLOBAL HACKER OVERLAYS AND ADD FLOATING ANIMATIONS */}
      <style jsx global>{`
        /* Completely disable global CRT scanline overlays for this page */
        .scanlines, .scanline-bar {
          display: none !important;
        }

        /* Floating Clouds Animation */
        @keyframes floatUpCloud {
          0% {
            transform: translateY(110vh) translateX(0) scale(0.7) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: var(--cloud-opacity, 0.3);
          }
          90% {
            opacity: var(--cloud-opacity, 0.3);
          }
          100% {
            transform: translateY(-20vh) translateX(35px) scale(1.1) rotate(0deg);
            opacity: 0;
          }
        }
        .floating-cloud {
          position: fixed;
          bottom: -70px;
          user-select: none;
          pointer-events: none;
          z-index: 5;
          animation: floatUpCloud linear infinite;
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

      {/* CUTE FLOATING CLOUDS BACKDROP */}
      <div className="fixed inset-0 pointer-events-none select-none z-0">
        {clouds.map((cloud) => (
          <span
            key={cloud.id}
            className="floating-cloud text-sky-300"
            style={{
              left: cloud.left,
              animationDelay: cloud.delay,
              animationDuration: cloud.duration,
              fontSize: cloud.size,
              "--cloud-opacity": cloud.opacity
            } as React.CSSProperties}
          >
            ☁️
          </span>
        ))}
      </div>

      {/* SOFT PASTEL BACKGROUND DECORATIONS */}
      <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-sky-200/30 blur-[90px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-blue-100/30 blur-[100px] pointer-events-none z-0" />

      {/* --- SECTION 1: WELCOME --- */}
      <section
        id="sec-1"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden"
      >
        <div className="shrink-0 h-2" />

        {/* Content Container */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-sm overflow-hidden my-auto space-y-4">
          {/* Large Photo Placeholder */}
          <div className="w-full max-w-[280px] sm:max-w-xs md:max-w-[320px] h-[45vh] md:h-[40vh] max-h-[50vh] md:max-h-[42vh] rounded-3xl border-4 border-white bg-sky-100/40 backdrop-blur-md flex flex-col items-center justify-center p-4 shadow-[0_10px_25px_rgba(56,189,248,0.08)] relative overflow-hidden group flex-shrink-0">
            <span className="text-4xl mb-2">📸</span>
            <p className="font-sans text-xs font-bold tracking-wider text-zinc-650 uppercase text-center px-4 leading-relaxed">
              SAMYAK PHOTO PLACEHOLDER
            </p>
            <span className="text-[9px] text-sky-400 font-bold uppercase tracking-widest mt-3">
              ✨ Core Roster ✨
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-sky-600 drop-shadow-[0_2px_4px_rgba(56,189,248,0.1)] text-center shrink-0">
            WELCOME SAMYAK BHAII 💙
          </h1>
        </div>

        {/* Button */}
        <button
          onClick={() => scrollToSection("sec-2")}
          className="btn-bounce w-full max-w-xs py-3.5 rounded-full bg-sky-400 hover:bg-sky-500 text-white font-bold tracking-widest text-xs uppercase shadow-[0_8px_16px_rgba(56,189,248,0.15)] transition-colors cursor-pointer shrink-0"
        >
          NEXT →
        </button>
      </section>

      {/* --- SECTION 2: FAVORITE FOOD --- */}
      <section
        id="sec-2"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden border-t border-sky-100"
      >
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-sky-600 text-center shrink-0">
          FAVORITE FOOD 🍴
        </h2>

        {/* Content Container */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-sm overflow-hidden my-auto space-y-4 shrink-0">
          {!foodRevealed ? (
            <button
              onClick={() => setFoodRevealed(true)}
              className="btn-bounce px-10 py-4.5 rounded-full bg-sky-400 hover:bg-sky-500 text-white font-sans text-sm tracking-widest font-black uppercase shadow-md cursor-pointer"
            >
              TAP TO REVEAL
            </button>
          ) : (
            <div className="w-full flex flex-col items-center space-y-4 animate-scale-in">
              <h3 className="text-xl font-black text-sky-600 uppercase tracking-widest">
                BUNDI KE LADDU
              </h3>
              
              {/* Large image placeholder below */}
              <div className="w-full max-w-[240px] sm:max-w-xs h-[30vh] md:h-[28vh] rounded-3xl border-4 border-white bg-sky-100/40 flex flex-col items-center justify-center p-4 shadow-sm relative overflow-hidden flex-shrink-0">
                <span className="text-4xl mb-2 animate-bounce">🟠</span>
                <p className="font-sans text-[10px] font-bold tracking-widest text-zinc-500 uppercase text-center">
                  BUNDI KE LADDU PHOTO
                </p>
                <span className="text-[8px] text-sky-400 font-bold uppercase tracking-widest mt-2">
                  ✨ Sweet Delicacy ✨
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Transition Fact & Button */}
        <div className="w-full flex flex-col items-center space-y-3 shrink-0">
          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest select-none">
            {foodRevealed ? "Laddus verified as goated." : "Awaiting food credentials..."}
          </span>
          <div className="w-full max-w-xs min-h-[50px] flex items-center justify-center">
            {foodRevealed ? (
              <button
                onClick={() => scrollToSection("sec-3")}
                className="btn-bounce w-full py-3.5 rounded-full bg-sky-400 hover:bg-sky-500 text-white font-bold tracking-widest text-xs uppercase shadow-[0_8px_16px_rgba(56,189,248,0.15)] transition-colors cursor-pointer animate-fade-in"
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

      {/* --- SECTION 3: FAVORITE PLACE --- */}
      <section
        id="sec-3"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden border-t border-sky-100"
      >
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-sky-600 text-center shrink-0">
          FAVORITE PLACE 📍
        </h2>

        {/* Content Container */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-sm overflow-hidden my-auto space-y-4 shrink-0">
          {!placeRevealed ? (
            <button
              onClick={() => setPlaceRevealed(true)}
              className="btn-bounce px-10 py-4.5 rounded-full bg-sky-400 hover:bg-sky-500 text-white font-sans text-sm tracking-widest font-black uppercase shadow-md cursor-pointer"
            >
              TAP TO REVEAL
            </button>
          ) : (
            <div className="w-full flex flex-col items-center space-y-4 animate-scale-in">
              <h3 className="text-xl font-black text-sky-600 uppercase tracking-widest">
                BUNDI
              </h3>
              
              {/* Friendly location card */}
              <div className="w-full max-w-[240px] sm:max-w-xs h-[30vh] md:h-[28vh] rounded-3xl border-4 border-white bg-sky-100/40 flex flex-col items-center justify-center p-6 shadow-sm relative overflow-hidden flex-shrink-0">
                <span className="text-4xl mb-3">🏰</span>
                <p className="font-sans text-xs font-bold tracking-widest text-zinc-600 uppercase text-center">
                  HOME OF BUNDI FORT
                </p>
                <p className="text-[9px] text-zinc-400 font-bold uppercase tracking-wider mt-2 text-center">
                  Certified Location
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Transition Fact & Button */}
        <div className="w-full flex flex-col items-center space-y-3 shrink-0">
          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest select-none">
            {placeRevealed ? "Bundi location pinned." : "Awaiting travel clearance..."}
          </span>
          <div className="w-full max-w-xs min-h-[50px] flex items-center justify-center">
            {placeRevealed ? (
              <button
                onClick={() => scrollToSection("sec-4")}
                className="btn-bounce w-full py-3.5 rounded-full bg-sky-400 hover:bg-sky-500 text-white font-bold tracking-widest text-xs uppercase shadow-[0_8px_16px_rgba(56,189,248,0.15)] transition-colors cursor-pointer animate-fade-in"
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

      {/* --- SECTION 4: ARCHIVES CAROUSEL --- */}
      <section
        id="sec-4"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden border-t border-sky-100"
      >
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-sky-600 text-center shrink-0">
          SAMYAK ARCHIVES 📸
        </h2>

        {/* Swipeable Grid Horizontal Carousel */}
        <div className="flex-grow flex items-center justify-center w-full max-w-5xl overflow-hidden my-auto py-2 shrink-0">
          <div className="w-full overflow-x-auto flex flex-row flex-nowrap gap-6 py-4 px-2 snap-x snap-mandatory no-scrollbar scroll-smooth">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div
                key={num}
                className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.33%-16px)] flex-shrink-0 snap-center rounded-3xl border-4 border-white bg-sky-50/80 backdrop-blur-md flex flex-col items-center justify-center p-6 shadow-md h-[40vh] md:h-[38vh] max-h-[44vh] select-none hover:border-sky-400 transition-colors animate-fade-in"
              >
                <span className="text-3xl mb-3">🌥️</span>
                <p className="font-sans text-sm font-black tracking-widest text-sky-500 uppercase text-center">
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
            className="btn-bounce w-full max-w-xs py-3.5 rounded-full bg-sky-400 hover:bg-sky-500 text-white font-bold tracking-widest text-xs uppercase shadow-[0_8px_16px_rgba(56,189,248,0.15)] transition-colors cursor-pointer shrink-0"
          >
            NEXT →
          </button>
        </div>
      </section>

      {/* --- SECTION 5: FAVORITE KAAM --- */}
      <section
        id="sec-5"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden border-t border-sky-100"
      >
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-sky-600 text-center shrink-0">
          FAVORITE KAAM 📷
        </h2>

        {/* Content Container */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-sm overflow-hidden my-auto space-y-4 shrink-0">
          {!kaamRevealed ? (
            <button
              onClick={() => setKaamRevealed(true)}
              className="btn-bounce px-10 py-4.5 rounded-full bg-sky-400 hover:bg-sky-500 text-white font-sans text-sm tracking-widest font-black uppercase shadow-md cursor-pointer"
            >
              TAP TO REVEAL
            </button>
          ) : (
            <div className="w-full flex flex-col items-center space-y-4 animate-scale-in">
              <h3 className="text-xl font-black text-sky-600 uppercase tracking-widest">
                PHOTO KHICHANA
              </h3>
              
              {/* Camera themed card */}
              <div className="w-full max-w-[240px] sm:max-w-xs h-[30vh] md:h-[28vh] rounded-3xl border-4 border-white bg-sky-100/40 flex flex-col items-center justify-center p-6 shadow-sm relative overflow-hidden flex-shrink-0">
                <span className="text-4xl mb-3">📸</span>
                <p className="font-sans text-xs font-black tracking-widest text-zinc-600 uppercase text-center">
                  PRO PHOTOGRAPHER MODE
                </p>
                <p className="text-[9px] text-zinc-400 font-bold uppercase tracking-wider mt-2 text-center">
                  Aesthetic Configured
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Transition Fact & Button */}
        <div className="w-full flex flex-col items-center space-y-3 shrink-0">
          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest select-none">
            {kaamRevealed ? "Photographer mode online." : "Awaiting hobby verification..."}
          </span>
          <div className="w-full max-w-xs min-h-[50px] flex items-center justify-center">
            {kaamRevealed ? (
              <button
                onClick={() => scrollToSection("sec-6")}
                className="btn-bounce w-full py-3.5 rounded-full bg-sky-400 hover:bg-sky-500 text-white font-bold tracking-widest text-xs uppercase shadow-[0_8px_16px_rgba(56,189,248,0.15)] transition-colors cursor-pointer animate-fade-in"
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

      {/* --- SECTION 6: KHOON BADHVANA INQUIRY --- */}
      <section
        id="sec-6"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden border-t border-sky-100"
      >
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-sky-600 text-center shrink-0 px-2 leading-tight">
          KYAA AAP KO KHOON BADHVANA HAI?
        </h2>

        {/* Content Container */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-sm overflow-hidden my-auto space-y-4 shrink-0">
          {!khoonRevealed ? (
            <button
              onClick={() => setKhoonRevealed(true)}
              className="btn-bounce px-12 py-4 rounded-full bg-sky-400 hover:bg-sky-500 text-white font-sans text-sm tracking-widest font-black uppercase shadow-md cursor-pointer"
            >
              YES
            </button>
          ) : (
            <div className="w-full flex flex-col items-center space-y-4 animate-scale-in">
              <h3 className="text-xl font-black text-sky-600 uppercase tracking-widest">
                CONGRATS 🎉
              </h3>
              
              {/* Funny success card */}
              <div className="w-full max-w-[240px] sm:max-w-xs h-[30vh] md:h-[28vh] rounded-3xl border-4 border-white bg-sky-100/40 flex flex-col items-center justify-center p-6 shadow-sm relative overflow-hidden flex-shrink-0">
                <span className="text-4xl mb-3">🖼️</span>
                <p className="font-sans text-xs font-black tracking-widest text-zinc-700 uppercase text-center">
                  USNE AAPKI PHOTO KHICH LI
                </p>
                <p className="text-[9px] text-zinc-400 font-bold uppercase tracking-wider mt-2 text-center">
                  +100 Blood Index
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Transition Fact & Button */}
        <div className="w-full flex flex-col items-center space-y-3 shrink-0">
          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest select-none">
            {khoonRevealed ? "Photographic growth registered." : "Awaiting diagnostic response..."}
          </span>
          <div className="w-full max-w-xs min-h-[50px] flex items-center justify-center">
            {khoonRevealed ? (
              <button
                onClick={() => scrollToSection("sec-7")}
                className="btn-bounce w-full py-3.5 rounded-full bg-sky-400 hover:bg-sky-500 text-white font-bold tracking-widest text-xs uppercase shadow-[0_8px_16px_rgba(56,189,248,0.15)] transition-colors cursor-pointer animate-fade-in"
              >
                CONTINUE →
              </button>
            ) : (
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                Please click YES above
              </span>
            )}
          </div>
        </div>
      </section>

      {/* --- SECTION 7: RUNAWAY DESIGN QUESTION --- */}
      <section
        id="sec-7"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden border-t border-sky-100"
      >
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-sky-600 text-center shrink-0 px-2 leading-tight uppercase">
          KYAA AAPKO DESIGN PASAND HAI?
        </h2>

        {/* Content Container (Runaway Button implementation) */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-md overflow-hidden my-auto space-y-6 shrink-0 relative">
          
          <div className="w-full max-w-sm rounded-3xl border-4 border-white bg-sky-100/50 backdrop-blur-md p-6 min-h-[200px] flex flex-col justify-center items-center shadow-[0_12px_24px_rgba(56,189,248,0.06)] relative overflow-visible">
            
            {!designAnswered ? (
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center relative min-h-[120px] overflow-visible">
                {/* HAA BUTTON */}
                <button
                  onClick={() => setDesignAnswered(true)}
                  className="btn-bounce w-32 py-3.5 rounded-full bg-sky-400 hover:bg-sky-500 text-white font-bold text-xs tracking-widest uppercase shadow-md cursor-pointer z-10"
                >
                  HAA
                </button>

                {/* RUNAWAY NAA BUTTON */}
                <div
                  style={{
                    transform: `translate(${naaOffset.x}px, ${naaOffset.y}px)`,
                    transition: "transform 0.15s cubic-bezier(0.2, 0.8, 0.2, 1)"
                  }}
                  className="absolute sm:relative z-20"
                >
                  <button
                    onMouseEnter={handleNaaInteraction}
                    onTouchStart={handleNaaInteraction}
                    onPointerDown={handleNaaInteraction}
                    onClick={handleNaaInteraction}
                    className="w-32 py-3.5 rounded-full bg-white border border-sky-300 text-sky-500 font-bold text-xs tracking-widest uppercase shadow-md cursor-pointer"
                  >
                    NAA
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4 w-full text-center animate-scale-in">
                <p className="font-sans text-lg text-sky-600 font-black tracking-wider uppercase">
                  PAHLE SE PATA THAA 😎
                </p>
              </div>
            )}

          </div>
        </div>

        {/* Transition Fact & Button */}
        <div className="w-full flex flex-col items-center space-y-3 shrink-0">
          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest select-none">
            "Design parameters optimized."
          </span>
          <div className="w-full max-w-xs min-h-[50px] flex items-center justify-center">
            {designAnswered ? (
              <button
                onClick={() => scrollToSection("sec-final")}
                className="btn-bounce w-full py-3.5 rounded-full bg-sky-400 hover:bg-sky-500 text-white font-bold tracking-widest text-xs uppercase shadow-[0_8px_16px_rgba(56,189,248,0.15)] transition-colors cursor-pointer animate-fade-in"
              >
                Continue →
              </button>
            ) : (
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                Please complete choice above
              </span>
            )}
          </div>
        </div>
      </section>

      {/* --- SECTION 8: FINAL SCREEN --- */}
      <section
        id="sec-final"
        className="h-screen max-h-screen w-full flex flex-col justify-between items-center py-6 px-4 md:py-8 relative z-10 overflow-hidden border-t border-sky-100"
      >
        <div className="shrink-0 h-6" />

        {/* Ending messages */}
        <div className="flex-grow flex flex-col items-center justify-center w-full max-w-lg overflow-hidden my-auto space-y-6 shrink-0 relative select-none">
          {/* Subtle floating blue sparkles behind text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 z-0">
            <span className="text-xl absolute -top-8 left-1/4 animate-pulse">✨</span>
            <span className="text-2xl absolute top-8 right-1/4 animate-pulse delay-75">✨</span>
            <span className="text-lg absolute bottom-8 left-1/3 animate-pulse delay-100">✨</span>
          </div>

          <div className="space-y-6 text-center z-10 relative">
            <span className="text-4xl md:text-5xl block animate-pulse">💙</span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-sky-600 drop-shadow-[0_2px_10px_rgba(56,189,248,0.1)] leading-snug uppercase text-center px-4">
              BEST AADMI HO SAMYAK BHAII YAAR
            </h2>
            <span className="text-4xl md:text-5xl block animate-pulse">💙</span>
          </div>
        </div>

        {/* Footer actions */}
        <div className="w-full max-w-xs flex flex-col items-center space-y-4 shrink-0">
          <div className="space-y-0.5 text-center shrink-0">
            <p className="font-sans text-[10px] text-zinc-400 font-black uppercase tracking-[0.2em]">
              Never Change
            </p>
          </div>

          <button
            onClick={handleBackToHQ}
            className="btn-bounce w-full py-3.5 rounded-full bg-sky-400 hover:bg-sky-500 text-white font-sans text-xs tracking-widest font-black uppercase shadow-[0_8px_16px_rgba(56,189,248,0.15)] transition-colors cursor-pointer"
          >
            BACK TO HQ
          </button>
        </div>
      </section>

    </main>
  );
}
