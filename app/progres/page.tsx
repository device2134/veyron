"use client";

import WikiLayout from "@/components/WikiLayout";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ProgresPage() {
  const { t } = useLanguage();

  return (
    <WikiLayout>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">{t("progressTitle")}</h1>
        
        <div className="space-y-6">
          <div className="bg-discord-sidebar rounded-lg p-6 border border-discord-active">
            <h2 className="text-xl font-semibold mb-3">{t("progressSystem")}</h2>
            <p className="text-discord-textMuted">
              {t("progressSystemText")}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-discord-sidebar rounded-lg p-6 border border-discord-active">
              <h3 className="text-lg font-semibold mb-2">{t("skills")}</h3>
              <ul className="space-y-2 text-discord-textMuted">
                <li>• Conducere</li>
                <li>• Luptă</li>
                <li>• Business</li>
                <li>• Social</li>
              </ul>
            </div>

            <div className="bg-discord-sidebar rounded-lg p-6 border border-discord-active">
              <h3 className="text-lg font-semibold mb-2">{t("achievements")}</h3>
              <p className="text-discord-textMuted">
                {t("achievementsText")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </WikiLayout>
  );
}

