"use client";

import Link from "next/link";
import { ArrowRight, Play, Youtube, MessageCircle, Music, BookOpen } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import MainHeader from "@/components/MainHeader";
import Footer from "@/components/Footer";

export default function LandingPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* GTA-inspired Background */}
      <div className="fixed inset-0 z-0">
        {/* Base gradient - GTA V/VI color scheme */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0f1419]" />
        
        {/* City skyline silhouette */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-[#2a3441] to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#1a2332] to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f1419] to-transparent" />
        </div>

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(88, 101, 242, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(88, 101, 242, 0.1) 1px, transparent 1px)`,
              backgroundSize: '100px 100px',
            }}
          />
        </div>

        {/* Neon glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-discord-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Light rays */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <MainHeader />
        
        <main className="pt-32 pb-16 px-6 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Section - Content */}
              <div className="space-y-8 text-white">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-discord-accent/20 border border-discord-accent/50 rounded-full px-4 py-2 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-white">Server Online</span>
                </div>

                {/* Headline */}
                <h1 className="text-6xl lg:text-7xl font-black text-white leading-tight">
                  <span className="block bg-gradient-to-r from-white via-discord-accent to-purple-400 bg-clip-text text-transparent">
                    {t("landingHeadline")}
                  </span>
                </h1>

                {/* Description */}
                <p className="text-xl text-gray-300 max-w-xl leading-relaxed">
                  {t("landingDescription")}
                </p>

                {/* Social Media Icons */}
                <div className="flex items-center gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200 hover:scale-110"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="https://discord.gg/BTVBCCD8ru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200 hover:scale-110"
                    aria-label="Discord"
                  >
                    <MessageCircle className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-200 hover:scale-110"
                    aria-label="TikTok"
                  >
                    <Music className="w-6 h-6 text-white" />
                  </a>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link
                    href="/wiki"
                    className="flex items-center justify-center gap-2 px-8 py-4 bg-discord-accent hover:bg-discord-accent/90 text-white font-bold rounded-lg transition-all duration-200 hover:scale-105 shadow-lg shadow-discord-accent/50 text-lg"
                  >
                    {t("startPlaying")}
                  </Link>
                  <a
                    href="https://discord.gg/BTVBCCD8ru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-semibold rounded-lg transition-all duration-200 text-lg"
                  >
                    {t("joinDiscord")}
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <Link
                    href="/wiki"
                    className="flex items-center justify-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 text-white font-medium rounded-lg transition-all duration-200 text-lg"
                  >
                    <BookOpen className="w-5 h-5" />
                    WIKI
                  </Link>
                </div>
              </div>

              {/* Right Section - Video/Image Thumbnail */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden border-2 border-discord-accent/50 shadow-2xl shadow-discord-accent/30 backdrop-blur-sm">
                  <div className="aspect-video bg-gradient-to-br from-discord-sidebar/50 to-purple-900/30 flex items-center justify-center relative">
                    {/* GTA-style background image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center opacity-40"
                      style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&q=80')`,
                        filter: 'brightness(0.7) contrast(1.2) saturate(1.3)',
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    
                    {/* Play button */}
                    <button className="relative z-10 w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-200 hover:scale-110 border-2 border-white/30 group">
                      <Play className="w-12 h-12 text-white ml-1 group-hover:scale-110 transition-transform" fill="white" />
                    </button>
                  </div>
                  
                  {/* Glow effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-discord-accent via-purple-500 to-discord-accent rounded-2xl opacity-20 blur-xl -z-10 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

