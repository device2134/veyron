"use client";

import WikiLayout from "@/components/WikiLayout";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LevelPage() {
  const { t } = useLanguage();

  return (
    <WikiLayout>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">{t("levelTitle")}</h1>
        
        <div className="space-y-6">
          <div className="bg-discord-sidebar rounded-lg p-6 border border-discord-active">
            <h2 className="text-xl font-semibold mb-3">{t("levelSystem")}</h2>
            <p className="text-discord-textMuted">
              {t("levelSystemText")}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-discord-sidebar rounded-lg p-6 border border-discord-active">
              <h3 className="text-lg font-semibold mb-2">{t("howToGainXP")}</h3>
              <ul className="space-y-2 text-discord-textMuted">
                <li>• Completarea misiunilor</li>
                <li>• Participarea la evenimente</li>
                <li>• Interacțiuni sociale</li>
                <li>• Activități zilnice</li>
              </ul>
            </div>

            <div className="bg-discord-sidebar rounded-lg p-6 border border-discord-active">
              <h3 className="text-lg font-semibold mb-2">{t("levelRewards")}</h3>
              <ul className="space-y-2 text-discord-textMuted">
                <li>• Bani bonus</li>
                <li>• Item-uri exclusive</li>
                <li>• Acces la zone noi</li>
                <li>• Abilități speciale</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </WikiLayout>
  );
}

