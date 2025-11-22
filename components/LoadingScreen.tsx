"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Loading...");
  const [dots, setDots] = useState("");

  // Always use English text for loading screen
  const loadingMessages = [
    "Loading...",
    "Preparing wiki...",
    "Almost ready...",
    "Finishing...",
  ];

  useEffect(() => {
    let messageIndex = 0;
    setLoadingText(loadingMessages[0]);
    
    // Animație pentru puncte
    const dotsInterval = setInterval(() => {
      setDots((prev) => {
        if (prev === "...") return "";
        return prev + ".";
      });
    }, 500);
    
    // Simulăm progresul de încărcare
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 12;
        
        // Schimbăm mesajul în funcție de progres
        if (newProgress > 25 && messageIndex === 0) {
          messageIndex = 1;
          setLoadingText(loadingMessages[1]);
        } else if (newProgress > 50 && messageIndex === 1) {
          messageIndex = 2;
          setLoadingText(loadingMessages[2]);
        } else if (newProgress > 75 && messageIndex === 2) {
          messageIndex = 3;
          setLoadingText(loadingMessages[3]);
        }
        
        if (newProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return newProgress;
      });
    }, 80);

    // Ascundem loading screen-ul după ce progresul este complet
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => {
      clearInterval(interval);
      clearInterval(dotsInterval);
      clearTimeout(timer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-discord-darker overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-discord-darker via-purple-900/10 to-discord-darker animate-gradient-shift" />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(88, 101, 242, 0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(88, 101, 242, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }} />
      </div>

      <div className="flex flex-col items-center justify-center space-y-12 relative z-10">
        {/* Main Title with animated gradient */}
        <div className="text-center space-y-4">
          <h1 className="text-7xl font-black tracking-tight">
            <span className="inline-block animate-text-gradient bg-gradient-to-r from-white via-discord-accent to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto]">
              VEYRON
            </span>
          </h1>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-discord-accent to-transparent animate-pulse-glow" />
          <p className="text-xl text-discord-textMuted font-light tracking-widest uppercase animate-fade-in-delay">
            Rage Multiplayer RPG
          </p>
        </div>

        {/* Loading text with animated dots */}
        <div className="text-center space-y-6">
          <div className="relative">
            <p className="text-2xl font-semibold text-white animate-text-shimmer">
              {loadingText}
              <span className="inline-block w-8 text-left animate-dots">
                {dots}
              </span>
            </p>
          </div>

          {/* Progress bar */}
          <div className="w-96 space-y-3">
            <div className="w-full bg-discord-sidebar/50 rounded-full h-2 overflow-hidden border border-discord-active/30 backdrop-blur-sm">
              <div
                className="h-full bg-gradient-to-r from-discord-accent via-purple-500 to-pink-500 rounded-full transition-all duration-300 ease-out relative overflow-hidden"
                style={{ width: `${Math.min(progress, 100)}%` }}
              >
                <div className="absolute inset-0 bg-white opacity-30 animate-shimmer" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-40 animate-shimmer-delay" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white/50 to-transparent animate-glow-sweep" />
              </div>
            </div>

            {/* Progress percentage */}
            <div className="flex justify-center">
              <span className="text-3xl font-bold text-discord-accent tabular-nums animate-count-up">
                {Math.round(Math.min(progress, 100))}
                <span className="text-lg text-discord-textMuted">%</span>
              </span>
            </div>
          </div>
        </div>

        {/* Animated text line */}
        <div className="text-center">
          <p className="text-sm text-discord-textMuted/60 font-light tracking-wider uppercase animate-fade-in-slow">
            Progress
          </p>
        </div>
      </div>
    </div>
  );
}

