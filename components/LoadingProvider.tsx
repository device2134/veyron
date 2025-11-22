"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import LoadingScreen from "./LoadingScreen";

export default function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    
    // Doar la prima încărcare afișăm loading screen-ul complet
    if (!hasLoadedOnce) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        setTimeout(() => {
          setShowContent(true);
          setHasLoadedOnce(true);
        }, 300);
      }, 2500);

      return () => clearTimeout(timer);
    } else {
      // La navigare între pagini, afișăm imediat conținutul
      setIsLoading(false);
      setShowContent(true);
    }
  }, [pathname, hasLoadedOnce]);

  // Prevenim hidratarea diferită pe server
  if (!mounted) {
    return <>{children}</>;
  }

  // Dacă a fost încărcat deja o dată, nu mai afișăm loading screen
  if (hasLoadedOnce) {
    return <>{children}</>;
  }

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

