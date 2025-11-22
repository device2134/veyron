"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Users, 
  Home as HomeIcon, 
  Building2, 
  Car, 
  User, 
  TrendingUp, 
  Award,
  Menu,
  X,
  BookOpen,
  Languages
} from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import MainHeader from "@/components/MainHeader";
import Footer from "@/components/Footer";
import VeyronLogo from "@/components/VeyronLogo";

interface NavItem {
  nameKey: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  { nameKey: "factions", href: "/factiuni", icon: Users },
  { nameKey: "houses", href: "/case", icon: HomeIcon },
  { nameKey: "apartments", href: "/apartamente", icon: Building2 },
  { nameKey: "vehicles", href: "/vehicule", icon: Car },
  { nameKey: "account", href: "/cont", icon: User },
  { nameKey: "progress", href: "/progres", icon: TrendingUp },
  { nameKey: "level", href: "/level", icon: Award },
];

export default function WikiLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="flex flex-col h-screen bg-discord-darker text-discord-text overflow-hidden">
      <MainHeader />
      <div className="flex flex-1 overflow-hidden" style={{ marginTop: "73px" }}>
      {/* Mobile menu button */}
      <button
        className="lg:hidden fixed top-20 left-4 z-50 p-2 bg-discord-sidebar rounded-lg text-discord-text hover:bg-discord-hover shadow-lg"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static
          top-[73px] lg:top-[73px]
          left-0
          w-72 bg-discord-sidebar
          border-r border-discord-active
          z-40
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
          shadow-xl lg:shadow-none
        `}
        style={{ height: "calc(100vh - 73px)" }}
      >
        <div className="flex flex-col h-full">
          {/* Logo/Header */}
          <div className="p-6 bg-gradient-to-br from-discord-sidebar to-discord-darker/50">
            <Link href="/wiki" className="flex justify-center">
              <VeyronLogo size="md" showText={true} className="items-center justify-center" asLink={false} />
            </Link>
          </div>

          {/* Language Switcher */}
          <div className="px-4 py-4 border-b border-discord-active">
            <div className="flex items-center gap-2 bg-discord-active/50 backdrop-blur-sm rounded-xl p-2 border border-discord-active/50">
              <Languages className="w-4 h-4 text-discord-textMuted" />
              <button
                onClick={() => setLanguage("ro")}
                className={`flex-1 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  language === "ro"
                    ? "bg-discord-accent text-white shadow-lg shadow-discord-accent/30"
                    : "text-discord-textMuted hover:text-discord-text hover:bg-discord-hover/50"
                }`}
              >
                RO
              </button>
              <div className="w-px h-5 bg-discord-active" />
              <button
                onClick={() => setLanguage("en")}
                className={`flex-1 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  language === "en"
                    ? "bg-discord-accent text-white shadow-lg shadow-discord-accent/30"
                    : "text-discord-textMuted hover:text-discord-text hover:bg-discord-hover/50"
                }`}
              >
                ENG
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4 wiki-sidebar-scroll">
            <div className="space-y-2">
              <Link
                href="/wiki"
                prefetch={true}
                onClick={() => setSidebarOpen(false)}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-xl
                  transition-all duration-150
                  ${
                    pathname === "/wiki"
                      ? "bg-discord-accent text-white shadow-lg shadow-discord-accent/30"
                      : "text-discord-textMuted hover:bg-discord-hover/70 hover:text-discord-text hover:translate-x-1"
                  }
                `}
              >
                <BookOpen className="w-5 h-5" />
                <span className="font-semibold">{t("home")}</span>
              </Link>
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    prefetch={true}
                    onClick={() => setSidebarOpen(false)}
                    className={`
                      flex items-center gap-3 px-4 py-3 rounded-xl
                      transition-all duration-150
                      ${
                        isActive
                          ? "bg-discord-accent text-white shadow-lg shadow-discord-accent/30"
                          : "text-discord-textMuted hover:bg-discord-hover/70 hover:text-discord-text hover:translate-x-1"
                      }
                    `}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-semibold">{t(item.nameKey)}</span>
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <main className="flex-1 overflow-y-auto bg-discord-darker wiki-content-scroll flex flex-col">
        <div className="flex-1">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </div>
        <Footer />
      </main>
      </div>
    </div>
  );
}

