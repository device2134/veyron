"use client";

import WikiLayout from "@/components/WikiLayout";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ApartamentePage() {
  const { t } = useLanguage();

  return (
    <WikiLayout>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">{t("apartmentsTitle")}</h1>
        
        <div className="space-y-6">
          <div className="bg-discord-sidebar rounded-lg p-6 border border-discord-active">
            <h2 className="text-xl font-semibold mb-3">{t("apartmentsAbout")}</h2>
            <p className="text-discord-textMuted">
              {t("apartmentsAboutText")}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-discord-sidebar rounded-lg p-6 border border-discord-active">
              <h3 className="text-lg font-semibold mb-2">{t("advantages")}</h3>
              <ul className="space-y-2 text-discord-textMuted">
                <li>• Prețuri accesibile</li>
                <li>• Locație centrală</li>
                <li>• Acces rapid la servicii</li>
                <li>• Opțiuni de personalizare</li>
              </ul>
            </div>

            <div className="bg-discord-sidebar rounded-lg p-6 border border-discord-active">
              <h3 className="text-lg font-semibold mb-2">{t("locations")}</h3>
              <p className="text-discord-textMuted">
                {t("locationsText")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </WikiLayout>
  );
}

