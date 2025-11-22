"use client";

import Link from "next/link";

interface VeyronLogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
  asLink?: boolean;
  href?: string;
}

export default function VeyronLogo({ 
  size = "md", 
  showText = true, 
  className = "",
  asLink = true,
  href = "/"
}: VeyronLogoProps) {
  const veyronSize = size === "sm" ? "text-2xl" : size === "lg" ? "text-6xl" : "text-4xl";
  const multiplayerSize = size === "sm" ? "text-xs" : size === "lg" ? "text-xl" : "text-base";

  const content = (
    <>
      {showText && (
        <>
          <span
            className={`${veyronSize} font-black text-white leading-none tracking-tight`}
            style={{
              textShadow: `
                2px 0 0 rgba(255, 0, 0, 0.6),
                -2px 0 0 rgba(0, 0, 255, 0.6),
                0 2px 0 rgba(255, 0, 0, 0.4),
                0 -2px 0 rgba(0, 0, 255, 0.4),
                0 0 10px rgba(255, 255, 255, 0.2)
              `,
              letterSpacing: "0.05em",
            }}
          >
            VEYRON
          </span>
          <span
            className={`${multiplayerSize} font-bold leading-none mt-1 bg-gradient-to-r from-[#9B59B6] via-[#8E44AD] to-[#6A1B9A] bg-clip-text text-transparent`}
            style={{
              textShadow: `
                1px 0 0 rgba(155, 89, 182, 0.6),
                -1px 0 0 rgba(138, 43, 226, 0.6),
                0 0 8px rgba(155, 89, 182, 0.3)
              `,
              letterSpacing: "0.1em",
            }}
          >
            MULTIPLAYER
          </span>
        </>
      )}
    </>
  );

  if (asLink) {
    return (
      <Link href={href} className={`flex flex-col ${className || "items-center justify-center"}`}>
        {content}
      </Link>
    );
  }

  return (
    <div className={`flex flex-col ${className || "items-center justify-center"}`}>
      {content}
    </div>
  );
}
