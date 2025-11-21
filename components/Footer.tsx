"use client";

import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-discord-active bg-discord-sidebar/50 backdrop-blur-sm mt-auto">
      <div className="max-w-6xl mx-auto px-8 py-6">
        <div className="flex items-center justify-center gap-2 text-discord-textMuted">
          <span className="text-sm">Made by</span>
          <span className="text-sm font-semibold text-white">Device</span>
          <span className="text-sm">with</span>
          <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-heartbeat" />
        </div>
      </div>
    </footer>
  );
}

