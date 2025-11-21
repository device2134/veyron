"use client";

import WikiLayout from "@/components/WikiLayout";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContPage() {
  const { t } = useLanguage();

  return (
    <WikiLayout>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">{t("accountTitle")}</h1>
        
        <div className="space-y-6">
          <div className="bg-discord-sidebar rounded-lg p-6 border border-discord-active">
            <h2 className="text-xl font-semibold mb-3">{t("accountManagement")}</h2>
            <p className="text-discord-textMuted">
              {t("accountManagementText")}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-discord-sidebar rounded-lg p-6 border border-discord-active">
              <h3 className="text-lg font-semibold mb-2">{t("basicSettings")}</h3>
              <ul className="space-y-2 text-discord-textMuted">
                <li>• Nume de utilizator</li>
                <li>• Email</li>
                <li>• Parolă</li>
                <li>• Avatar</li>
              </ul>
            </div>

            <div className="bg-discord-sidebar rounded-lg p-6 border border-discord-active">
              <h3 className="text-lg font-semibold mb-2">{t("security")}</h3>
              <ul className="space-y-2 text-discord-textMuted">
                <li>• Autentificare în doi pași</li>
                <li>• Istoric de conectare</li>
                <li>• Dispozitive autorizate</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </WikiLayout>
  );
}

