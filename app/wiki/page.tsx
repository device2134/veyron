"use client";

import WikiLayout from "@/components/WikiLayout";
import Link from "next/link";
import { Users, Home as HomeIcon, Building2, Car, User, TrendingUp, Award, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const categories = [
  { nameKey: "factions", href: "/factiuni", icon: Users, descKey: "factionsDesc" },
  { nameKey: "houses", href: "/case", icon: HomeIcon, descKey: "housesDesc" },
  { nameKey: "apartments", href: "/apartamente", icon: Building2, descKey: "apartmentsDesc" },
  { nameKey: "vehicles", href: "/vehicule", icon: Car, descKey: "vehiclesDesc" },
  { nameKey: "account", href: "/cont", icon: User, descKey: "accountDesc" },
  { nameKey: "progress", href: "/progres", icon: TrendingUp, descKey: "progressDesc" },
  { nameKey: "level", href: "/level", icon: Award, descKey: "levelDesc" },
];

export default function WikiPage() {
  const { t } = useLanguage();

  return (
    <WikiLayout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-3">{t("welcome")}</h1>
          <p className="text-discord-textMuted text-lg max-w-2xl">
            {t("welcomeDescription")}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.href}
                href={category.href}
                className="group bg-discord-sidebar rounded-lg p-6 border border-discord-active hover:border-discord-accent transition-all duration-200 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-discord-active rounded-lg group-hover:bg-discord-accent transition-colors">
                    <Icon className="w-6 h-6 text-discord-text" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-discord-accent transition-colors">
                      {t(category.nameKey)}
                    </h3>
                    <p className="text-discord-textMuted text-sm mb-3">
                      {t(category.descKey)}
                    </p>
                    <div className="flex items-center text-discord-accent text-sm font-medium">
                      {t("learnMore")}
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 bg-discord-sidebar rounded-lg p-6 border border-discord-active">
          <h2 className="text-2xl font-semibold mb-3">{t("aboutServer")}</h2>
          <p className="text-discord-textMuted">
            {t("aboutServerText")}
          </p>
        </div>
      </div>
    </WikiLayout>
  );
}

