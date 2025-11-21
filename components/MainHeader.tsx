"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, MessageSquare, BookOpen, Wrench, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

export default function MainHeader() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [showTooltip, setShowTooltip] = useState<string | null>(null);

  const navItems = [
    { 
      name: t("shop"), 
      href: "#", 
      icon: ShoppingCart, 
      disabled: true,
      tooltip: t("underDevelopment")
    },
    { 
      name: t("ucp"), 
      href: "#", 
      icon: MessageSquare, 
      disabled: true,
      tooltip: t("underDevelopment")
    },
    { 
      name: t("wiki"), 
      href: "/wiki", 
      icon: BookOpen, 
      disabled: false
    },
    { 
      name: t("changelog"), 
      href: "#", 
      icon: Wrench, 
      disabled: true,
      tooltip: t("underDevelopment")
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-discord-darker/95 backdrop-blur-sm border-b border-discord-active">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-discord-accent to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">V</span>
          </div>
          <span className="text-white font-bold text-xl">VEYRON MULTIPLAYER</span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            const isDisabled = item.disabled;

            if (isDisabled) {
              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setShowTooltip(item.name)}
                  onMouseLeave={() => setShowTooltip(null)}
                >
                  <button
                    disabled
                    className={`
                      flex items-center gap-2 px-4 py-2 rounded-lg
                      text-discord-textMuted cursor-not-allowed
                      transition-all duration-150
                      opacity-50
                    `}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </button>
                  {showTooltip === item.name && (
                    <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-discord-sidebar border border-discord-active rounded-lg px-3 py-2 text-sm text-discord-text whitespace-nowrap z-50">
                      {item.tooltip}
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-discord-sidebar border-l border-t border-discord-active rotate-45" />
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-lg
                  transition-all duration-150
                  ${
                    isActive
                      ? "bg-discord-accent text-white"
                      : "text-white hover:bg-discord-hover"
                  }
                `}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

