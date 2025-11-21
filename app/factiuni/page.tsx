"use client";

import WikiLayout from "@/components/WikiLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Shield, 
  Building2, 
  Users, 
  Target, 
  MapPin, 
  Clock, 
  AlertTriangle,
  Zap,
  Lock,
  Briefcase,
  Car,
  GraduationCap,
  Newspaper,
  Skull,
  Swords,
  TrendingUp
} from "lucide-react";

interface Faction {
  nameKey: string;
  descriptionKey: string;
  featuresKey: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
  borderColor: string;
}

const getFactions = (t: (key: string) => string): Record<string, Faction[]> => ({
  police: [
    {
      nameKey: "lspdName",
      descriptionKey: "lspdDesc",
      featuresKey: "lspdFeatures",
      icon: Shield,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/50"
    },
    {
      nameKey: "fbiName",
      descriptionKey: "fbiDesc",
      featuresKey: "fbiFeatures",
      icon: Target,
      color: "text-indigo-400",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/50"
    },
    {
      nameKey: "ngName",
      descriptionKey: "ngDesc",
      featuresKey: "ngFeatures",
      icon: Building2,
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/50"
    }
  ],
  peaceful: [
    {
      nameKey: "taxiName",
      descriptionKey: "taxiDesc",
      featuresKey: "taxiFeatures",
      icon: Car,
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/50"
    },
    {
      nameKey: "schoolName",
      descriptionKey: "schoolDesc",
      featuresKey: "schoolFeatures",
      icon: GraduationCap,
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/50"
    },
    {
      nameKey: "newsName",
      descriptionKey: "newsDesc",
      featuresKey: "newsFeatures",
      icon: Newspaper,
      color: "text-red-400",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/50"
    }
  ],
  mafia: [
    {
      nameKey: "hitmanName",
      descriptionKey: "hitmanDesc",
      featuresKey: "hitmanFeatures",
      icon: Skull,
      color: "text-gray-400",
      bgColor: "bg-gray-500/10",
      borderColor: "border-gray-500/50"
    },
    {
      nameKey: "groveName",
      descriptionKey: "groveDesc",
      featuresKey: "groveFeatures",
      icon: Users,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/50"
    },
    {
      nameKey: "aztecasName",
      descriptionKey: "aztecasDesc",
      featuresKey: "aztecasFeatures",
      icon: Swords,
      color: "text-orange-400",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/50"
    },
    {
      nameKey: "ballasName",
      descriptionKey: "ballasDesc",
      featuresKey: "ballasFeatures",
      icon: Zap,
      color: "text-pink-400",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/50"
    }
  ]
});

export default function FactiuniPage() {
  const { t } = useLanguage();
  const factions = getFactions(t);

  return (
    <WikiLayout>
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-3 text-white">{t("factionsTitle")}</h1>
          <p className="text-discord-textMuted text-lg max-w-3xl">
            {t("factionsAboutText")}
          </p>
        </div>

        {/* Police Factions */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-blue-400" />
            <h2 className="text-3xl font-bold text-white">{t("policeForces")}</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {factions.police.map((faction) => {
              const Icon = faction.icon;
              const features = t(faction.featuresKey).split("|");
              return (
                <div
                  key={faction.nameKey}
                  className={`${faction.bgColor} ${faction.borderColor} border-2 rounded-xl p-6 hover:scale-105 transition-all duration-200 group`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`${faction.bgColor} ${faction.borderColor} border-2 rounded-lg p-3 group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-8 h-8 ${faction.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{t(faction.nameKey)}</h3>
                      <p className="text-sm text-discord-textMuted">{t(faction.descriptionKey)}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-discord-textMuted uppercase tracking-wide">{t("capabilities")}</p>
                    <ul className="space-y-1">
                      {features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-white/80 flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full ${faction.color.replace('text-', 'bg-')}`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Peaceful Factions */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-8 h-8 text-purple-400" />
            <h2 className="text-3xl font-bold text-white">{t("peacefulFactions")}</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {factions.peaceful.map((faction) => {
              const Icon = faction.icon;
              const features = t(faction.featuresKey).split("|");
              return (
                <div
                  key={faction.nameKey}
                  className={`${faction.bgColor} ${faction.borderColor} border-2 rounded-xl p-6 hover:scale-105 transition-all duration-200 group`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`${faction.bgColor} ${faction.borderColor} border-2 rounded-lg p-3 group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-8 h-8 ${faction.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{t(faction.nameKey)}</h3>
                      <p className="text-sm text-discord-textMuted">{t(faction.descriptionKey)}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-discord-textMuted uppercase tracking-wide">{t("services")}</p>
                    <ul className="space-y-1">
                      {features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-white/80 flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full ${faction.color.replace('text-', 'bg-')}`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mafia Factions */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Skull className="w-8 h-8 text-red-400" />
            <h2 className="text-3xl font-bold text-white">{t("mafiaHitman")}</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {factions.mafia.map((faction) => {
              const Icon = faction.icon;
              const features = t(faction.featuresKey).split("|");
              return (
                <div
                  key={faction.nameKey}
                  className={`${faction.bgColor} ${faction.borderColor} border-2 rounded-xl p-6 hover:scale-105 transition-all duration-200 group`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`${faction.bgColor} ${faction.borderColor} border-2 rounded-lg p-3 group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-8 h-8 ${faction.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{t(faction.nameKey)}</h3>
                      <p className="text-sm text-discord-textMuted">{t(faction.descriptionKey)}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-discord-textMuted uppercase tracking-wide">{t("capabilities")}</p>
                    <ul className="space-y-1">
                      {features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-white/80 flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full ${faction.color.replace('text-', 'bg-')}`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* War System Information */}
        <div className="bg-gradient-to-br from-red-500/10 via-orange-500/10 to-pink-500/10 border-2 border-red-500/30 rounded-xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Swords className="w-8 h-8 text-red-400" />
            <h2 className="text-3xl font-bold text-white">{t("warSystemTitle")}</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-discord-sidebar/50 rounded-lg p-6 border border-red-500/20">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-red-400" />
                <h3 className="text-xl font-bold text-white">{t("territories")}</h3>
              </div>
              <p className="text-discord-textMuted mb-4">
                {t("territoriesDesc")}
              </p>
              <div className="flex items-center gap-2 text-sm text-yellow-400">
                <Zap className="w-4 h-4" />
                <span>{t("territoriesBlink")}</span>
              </div>
            </div>

            <div className="bg-discord-sidebar/50 rounded-lg p-6 border border-red-500/20">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-red-400" />
                <h3 className="text-xl font-bold text-white">{t("warDuration")}</h3>
              </div>
              <p className="text-discord-textMuted mb-4">
                {t("warDurationDesc")}
              </p>
              <div className="flex items-center gap-2 text-sm text-orange-400">
                <AlertTriangle className="w-4 h-4" />
                <span>{t("warTimeRemaining")}</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-discord-sidebar/50 rounded-lg p-6 border border-red-500/20">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-red-400" />
                <h3 className="text-xl font-bold text-white">{t("attackScheduling")}</h3>
              </div>
              <p className="text-discord-textMuted">
                {t("attackSchedulingDesc")}
              </p>
            </div>

            <div className="bg-discord-sidebar/50 rounded-lg p-6 border border-red-500/20">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-6 h-6 text-red-400" />
                <h3 className="text-xl font-bold text-white">{t("failSystem")}</h3>
              </div>
              <p className="text-discord-textMuted mb-4">
                {t("failSystemDesc")}
              </p>
              <div className="flex items-center gap-2 text-sm text-red-400">
                <AlertTriangle className="w-4 h-4" />
                <span>{t("failWarning")}</span>
              </div>
            </div>
          </div>

          <div className="bg-discord-sidebar/50 rounded-lg p-6 border border-red-500/20">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-6 h-6 text-red-400" />
              <h3 className="text-xl font-bold text-white">{t("mafiaAdvantages")}</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-white font-semibold mb-2">{t("specialRobberies")}</p>
                <p className="text-discord-textMuted text-sm">
                  {t("specialRobberiesDesc")}
                </p>
              </div>
              <div>
                <p className="text-white font-semibold mb-2">{t("heists")}</p>
                <p className="text-discord-textMuted text-sm">
                  {t("heistsDesc")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How to Join */}
        <div className="bg-discord-sidebar rounded-lg p-6 border border-discord-active">
          <h3 className="text-xl font-semibold mb-3 text-white">{t("howToJoin")}</h3>
          <p className="text-discord-textMuted">
            {t("howToJoinText")}
          </p>
        </div>
      </div>
    </WikiLayout>
  );
}

