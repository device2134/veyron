"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, Youtube, MessageCircle, BookOpen, Download, Search, ExternalLink, AlertTriangle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import MainHeader from "@/components/MainHeader";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import VeyronLogo from "@/components/VeyronLogo";
import TikTokIcon from "@/components/TikTokIcon";

export default function LandingPage() {
  const { t, language, setLanguage } = useLanguage();
  
  // Force English on landing page
  React.useEffect(() => {
    if (language !== "en") {
      setLanguage("en");
    }
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#1a1a1a]">
      {/* Background with image and blur */}
      <div className="fixed inset-0 z-0">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://wallpapercave.com/wp/wp9075024.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
            quality={90}
            style={{
              filter: 'blur(8px) brightness(0.3)',
            }}
          />
        </div>
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e27]/80 via-[#1a1f3a]/70 to-[#0f1419]/80" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(155, 89, 182, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(155, 89, 182, 0.1) 1px, transparent 1px)`,
              backgroundSize: '100px 100px',
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <MainHeader />
        
        <main className="pt-24 pb-16 px-6">
          <div className="max-w-7xl mx-auto w-full space-y-16">
            
            {/* Hero Section with Logo */}
            <section className="text-center space-y-8 py-16">
              <div className="flex justify-center mb-8">
                <VeyronLogo size="lg" showText={true} />
              </div>
              
              <Badge variant="outline" className="bg-yellow-500/20 border-yellow-500/50 text-yellow-300 backdrop-blur-sm px-4 py-2">
                <AlertTriangle className="w-3 h-3 mr-2" />
                {t("serverUnderDevelopment")}
              </Badge>

              <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight max-w-4xl mx-auto">
                <span className="block bg-gradient-to-r from-white via-[#9B59B6] to-[#8E44AD] bg-clip-text text-transparent">
                  {t("landingHeadline")}
                </span>
              </h1>

              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                {t("landingDescription")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  size="lg"
                  className="bg-[#9B59B6] hover:bg-[#8E44AD] text-white font-bold text-lg h-14 shadow-lg shadow-[#9B59B6]/50"
                  asChild
                >
                  <Link href="/wiki">
                    {t("startPlaying")}
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 text-white font-semibold text-lg h-14"
                  asChild
                >
                  <a href="https://discord.gg/BTVBCCD8ru" target="_blank" rel="noopener noreferrer">
                    {t("joinDiscord")}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
              </div>
            </section>

            {/* How to Play Section */}
            <section className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-4xl font-black text-white">{t("howToPlay")}</h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  {t("howToPlayDescription")}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Step 1 */}
                <Card className="bg-[#2a2a2a]/80 backdrop-blur-sm border-[#9B59B6]/30">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-[#9B59B6]">{t("step1")}</span>
                      <div className="w-16 h-16 bg-[#9B59B6]/20 rounded-lg flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">V</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white">{t("step1Title")}</h3>
                    <p className="text-gray-400 text-sm">{t("step1Description")}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <a href="https://store.steampowered.com" target="_blank" rel="noopener noreferrer" className="text-[#9B59B6] hover:text-[#8E44AD] text-sm flex items-center gap-1">
                        Steam <ExternalLink className="w-3 h-3" />
                      </a>
                      <span className="text-gray-500">|</span>
                      <a href="https://www.rockstargames.com" target="_blank" rel="noopener noreferrer" className="text-[#9B59B6] hover:text-[#8E44AD] text-sm flex items-center gap-1">
                        Rockstar <ExternalLink className="w-3 h-3" />
                      </a>
                      <span className="text-gray-500">|</span>
                      <a href="https://www.epicgames.com" target="_blank" rel="noopener noreferrer" className="text-[#9B59B6] hover:text-[#8E44AD] text-sm flex items-center gap-1">
                        Epic Games <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* Step 2 */}
                <Card className="bg-[#2a2a2a]/80 backdrop-blur-sm border-[#9B59B6]/30">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-[#9B59B6]">{t("step2")}</span>
                      <div className="w-16 h-16 bg-[#9B59B6]/20 rounded-lg flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">R</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white">{t("step2Title")}</h3>
                    <p className="text-gray-400 text-sm">{t("step2Description")}</p>
                    <Button
                      className="w-full bg-[#9B59B6] hover:bg-[#8E44AD] text-white font-bold mt-4"
                      asChild
                    >
                      <a href="https://rage.mp" target="_blank" rel="noopener noreferrer">
                        <Download className="w-4 h-4 mr-2" />
                        {t("downloadRage")}
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* Step 3 */}
                <Card className="bg-[#2a2a2a]/80 backdrop-blur-sm border-[#9B59B6]/30">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-[#9B59B6]">{t("step3")}</span>
                      <div className="w-16 h-16 bg-[#9B59B6]/20 rounded-lg flex items-center justify-center">
                        <Search className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white">{t("step3Title")}</h3>
                    <p className="text-gray-400 text-sm">{t("step3Description")}</p>
                    <div className="mt-4 p-3 bg-[#9B59B6]/10 rounded-lg border border-[#9B59B6]/30">
                      <code className="text-[#9B59B6] font-mono text-sm">{t("serverAddress")}</code>
                    </div>
                    <div className="mt-4 p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/30">
                      <div className="flex items-start gap-2">
                        <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-yellow-400 font-semibold text-sm mb-1">{t("serverUnderDevelopment")}</p>
                          <p className="text-yellow-300/80 text-xs">{t("serverUnderDevelopmentDesc")}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Social Media Section */}
            <section className="text-center space-y-6">
              <h3 className="text-2xl font-bold text-white">{t("followUs")}</h3>
              <div className="flex items-center justify-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-14 h-14 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white"
                  asChild
                >
                  <a href="#" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                    <Youtube className="w-6 h-6" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-14 h-14 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white"
                  asChild
                >
                  <a href="https://discord.gg/BTVBCCD8ru" aria-label="Discord" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-6 h-6" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-14 h-14 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white"
                  asChild
                >
                  <a href="#" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                    <TikTokIcon className="w-6 h-6" />
                  </a>
                </Button>
              </div>
            </section>

          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
