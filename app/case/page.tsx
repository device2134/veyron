"use client";

import WikiLayout from "@/components/WikiLayout";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CasePage() {
  const { t } = useLanguage();

  return (
    <WikiLayout>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">{t("housesTitle")}</h1>
        
        <div className="space-y-6">
          <div className="bg-discord-sidebar rounded-lg p-6 border border-discord-active">
            <h2 className="text-xl font-semibold mb-3">{t("housesAbout")}</h2>
            <p className="text-discord-textMuted">
              {t("housesAboutText")}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-discord-sidebar rounded-lg p-6 border border-discord-active">
              <h3 className="text-lg font-semibold mb-2">{t("houseTypes")}</h3>
              <ul className="space-y-2 text-discord-textMuted">
                <li>• {t("houses")} mici (1-2 camere)</li>
                <li>• {t("houses")} medii (3-4 camere)</li>
                <li>• {t("houses")} mari (5+ camere)</li>
                <li>• Vila</li>
              </ul>
            </div>

            <div className="bg-discord-sidebar rounded-lg p-6 border border-discord-active">
              <h3 className="text-lg font-semibold mb-2">{t("facilities")}</h3>
              <ul className="space-y-2 text-discord-textMuted">
                <li>• Garaj pentru vehicule</li>
                <li>• Spațiu de depozitare</li>
                <li>• Personalizare interioară</li>
                <li>• Sistem de securitate</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </WikiLayout>
  );
}

