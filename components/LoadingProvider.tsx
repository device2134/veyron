"use client";

import { useEffect, useState } from "react";
import LoadingScreen from "./LoadingScreen";

export default function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Simulăm timpul de încărcare
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Așteptăm puțin pentru fade-out, apoi afișăm conținutul
      setTimeout(() => {
        setShowContent(true);
      }, 300);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 z-50 transition-opacity duration-300">
          <LoadingScreen />
        </div>
      )}
      <div 
        className={`transition-all duration-500 ${
          showContent 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-4"
        }`}
      >
        {children}
      </div>
    </>
  );
}

