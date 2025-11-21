"use client";

import WikiLayout from "@/components/WikiLayout";
import { useLanguage } from "@/contexts/LanguageContext";

export default function VehiculePage() {
  const { t } = useLanguage();

  return (
    <WikiLayout>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">{t("vehiclesTitle")}</h1>
        
        <div className="space-y-6">
          <div className="bg-discord-sidebar rounded-lg p-6 border border-discord-active">
            <h2 className="text-xl font-semibold mb-3">{t("vehiclesAbout")}</h2>
            <p className="text-discord-textMuted">
              {t("vehiclesAboutText")}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-discord-sidebar rounded-lg p-6 border border-discord-active">
              <h3 className="text-lg font-semibold mb-2">{t("cars")}</h3>
              <p className="text-discord-textMuted text-sm">
                {t("carsText")}
              </p>
            </div>

            <div className="bg-discord-sidebar rounded-lg p-6 border border-discord-active">
              <h3 className="text-lg font-semibold mb-2">{t("motorcycles")}</h3>
              <p className="text-discord-textMuted text-sm">
                {t("motorcyclesText")}
              </p>
            </div>

            <div className="bg-discord-sidebar rounded-lg p-6 border border-discord-active">
              <h3 className="text-lg font-semibold mb-2">{t("customization")}</h3>
              <p className="text-discord-textMuted text-sm">
                {t("customizationText")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </WikiLayout>
  );
}

