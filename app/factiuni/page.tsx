"use client";

import WikiLayout from "@/components/WikiLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
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
  TrendingUp,
  X,
  UserPlus,
  Info
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";

interface Faction {
  nameKey: string;
  descriptionKey: string;
  featuresKey: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
  borderColor: string;
  maxSlots: number;
  category: "police" | "peaceful" | "mafia";
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
      borderColor: "border-blue-500/50",
      maxSlots: 30,
      category: "police"
    },
    {
      nameKey: "fbiName",
      descriptionKey: "fbiDesc",
      featuresKey: "fbiFeatures",
      icon: Target,
      color: "text-indigo-400",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/50",
      maxSlots: 30,
      category: "police"
    },
    {
      nameKey: "ngName",
      descriptionKey: "ngDesc",
      featuresKey: "ngFeatures",
      icon: Building2,
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/50",
      maxSlots: 30,
      category: "police"
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
      borderColor: "border-yellow-500/50",
      maxSlots: 15,
      category: "peaceful"
    },
    {
      nameKey: "schoolName",
      descriptionKey: "schoolDesc",
      featuresKey: "schoolFeatures",
      icon: GraduationCap,
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/50",
      maxSlots: 15,
      category: "peaceful"
    },
    {
      nameKey: "newsName",
      descriptionKey: "newsDesc",
      featuresKey: "newsFeatures",
      icon: Newspaper,
      color: "text-red-400",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/50",
      maxSlots: 15,
      category: "peaceful"
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
      borderColor: "border-gray-500/50",
      maxSlots: 20,
      category: "mafia"
    },
    {
      nameKey: "groveName",
      descriptionKey: "groveDesc",
      featuresKey: "groveFeatures",
      icon: Users,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/50",
      maxSlots: 20,
      category: "mafia"
    },
    {
      nameKey: "aztecasName",
      descriptionKey: "aztecasDesc",
      featuresKey: "aztecasFeatures",
      icon: Swords,
      color: "text-orange-400",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/50",
      maxSlots: 20,
      category: "mafia"
    },
    {
      nameKey: "ballasName",
      descriptionKey: "ballasDesc",
      featuresKey: "ballasFeatures",
      icon: Zap,
      color: "text-pink-400",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/50",
      maxSlots: 20,
      category: "mafia"
    }
  ]
});

export default function FactiuniPage() {
  const { t } = useLanguage();
  const factions = getFactions(t);
  const [selectedFaction, setSelectedFaction] = useState<Faction | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleFactionClick = (faction: Faction) => {
    setSelectedFaction(faction);
    setIsDialogOpen(true);
  };

  // Example: current members (you can make this dynamic)
  const getCurrentMembers = (faction: Faction) => {
    // Random number for demo, in real app this would come from API
    const percentage = Math.floor(Math.random() * 40) + 50; // 50-90%
    return Math.floor((faction.maxSlots * percentage) / 100);
  };

  const renderFactionCard = (faction: Faction) => {
    const Icon = faction.icon;
    const features = t(faction.featuresKey).split("|");
    const currentMembers = getCurrentMembers(faction);
    const slotsPercentage = (currentMembers / faction.maxSlots) * 100;

    return (
      <Card
        key={faction.nameKey}
        className={`${faction.bgColor} ${faction.borderColor} border-2 cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-300 group`}
        onClick={() => handleFactionClick(faction)}
      >
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className={`${faction.bgColor} ${faction.borderColor} border-2 rounded-xl p-4 group-hover:scale-110 transition-transform`}>
                <Icon className={`w-8 h-8 ${faction.color}`} />
              </div>
              <div>
                <CardTitle className="text-xl font-bold text-white mb-1">
                  {t(faction.nameKey)}
                </CardTitle>
                <CardDescription className="text-discord-textMuted text-sm">
                  {t(faction.descriptionKey)}
                </CardDescription>
              </div>
            </div>
            <Badge className={`${faction.color} border ${faction.borderColor} bg-transparent`}>
              {currentMembers}/{faction.maxSlots}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Slots Progress */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-discord-textMuted">{t("slotsAvailable")}</span>
                <span className="text-white font-semibold">
                  {faction.maxSlots - currentMembers} {t("slots")}
                </span>
              </div>
              <Progress 
                value={slotsPercentage} 
                className="h-2 bg-discord-active"
              />
            </div>

            {/* Features Preview */}
            <div className="space-y-2">
              <p className="text-xs font-semibold text-discord-textMuted uppercase tracking-wide">
                {faction.category === "peaceful" ? t("services") : t("capabilities")}
              </p>
              <div className="flex flex-wrap gap-2">
                {features.slice(0, 3).map((feature, idx) => (
                  <Badge
                    key={idx}
                    variant="outline"
                    className={`text-xs ${faction.borderColor} text-white/80`}
                  >
                    {feature}
                  </Badge>
                ))}
                {features.length > 3 && (
                  <Badge variant="outline" className="text-xs border-discord-active text-discord-textMuted">
                    +{features.length - 3}
                  </Badge>
                )}
              </div>
            </div>

            {/* Click indicator */}
            <div className="flex items-center gap-2 text-sm text-[#9B59B6] pt-2 border-t border-discord-active/50">
              <Info className="w-4 h-4" />
              <span>{t("clickForDetails")}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <WikiLayout>
      <div className="p-8 space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-gradient-to-br from-[#9B59B6] to-[#8E44AD] rounded-xl">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-black text-white">{t("factionsTitle")}</h1>
              <p className="text-discord-textMuted text-lg max-w-3xl mt-2">
                {t("factionsAboutText")}
              </p>
            </div>
          </div>
        </div>

        {/* Police Factions */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-blue-400" />
            <h2 className="text-3xl font-bold text-white">{t("policeForces")}</h2>
            <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/50">
              {t("maxSlots")}: 30
            </Badge>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {factions.police.map(renderFactionCard)}
          </div>
        </div>

        {/* Peaceful Factions */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Briefcase className="w-8 h-8 text-purple-400" />
            <h2 className="text-3xl font-bold text-white">{t("peacefulFactions")}</h2>
            <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/50">
              {t("maxSlots")}: 15
            </Badge>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {factions.peaceful.map(renderFactionCard)}
          </div>
        </div>

        {/* Mafia Factions */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Skull className="w-8 h-8 text-red-400" />
            <h2 className="text-3xl font-bold text-white">{t("mafiaHitman")}</h2>
            <Badge className="bg-red-500/20 text-red-400 border-red-500/50">
              {t("maxSlots")}: 20
            </Badge>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {factions.mafia.map(renderFactionCard)}
          </div>
        </div>

        {/* War System Information */}
        <Card className="bg-gradient-to-br from-red-500/10 via-orange-500/10 to-pink-500/10 border-red-500/30">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Swords className="w-8 h-8 text-red-400" />
              <CardTitle className="text-3xl font-bold text-white">{t("warSystemTitle")}</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
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
          </CardContent>
        </Card>

        {/* Faction Details Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-2xl bg-discord-sidebar border-discord-active text-white max-h-[90vh] overflow-y-auto">
            {selectedFaction && (() => {
              const Icon = selectedFaction.icon;
              const features = t(selectedFaction.featuresKey).split("|");
              const currentMembers = getCurrentMembers(selectedFaction);
              const availableSlots = selectedFaction.maxSlots - currentMembers;
              const slotsPercentage = (currentMembers / selectedFaction.maxSlots) * 100;

              return (
                <>
                  <DialogHeader>
                    <div className="flex items-center gap-4">
                      <div className={`${selectedFaction.bgColor} ${selectedFaction.borderColor} border-2 rounded-xl p-4`}>
                        <Icon className={`w-10 h-10 ${selectedFaction.color}`} />
                      </div>
                      <div className="flex-1">
                        <DialogTitle className="text-3xl font-bold text-white">
                          {t(selectedFaction.nameKey)}
                        </DialogTitle>
                        <DialogDescription className="text-discord-textMuted text-base mt-2">
                          {t(selectedFaction.descriptionKey)}
                        </DialogDescription>
                      </div>
                    </div>
                  </DialogHeader>

                  <div className="space-y-6 mt-6">
                    {/* Slots Information */}
                    <Card className="bg-discord-darker/50 border-discord-active">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Users className="w-5 h-5 text-[#9B59B6]" />
                            <CardTitle className="text-lg text-white">{t("slots")}</CardTitle>
                          </div>
                          <Badge className={`${selectedFaction.color} border ${selectedFaction.borderColor} bg-transparent text-lg px-4 py-1`}>
                            {currentMembers} / {selectedFaction.maxSlots}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-discord-textMuted">{t("slotsAvailable")}</span>
                            <span className="text-white font-semibold">
                              {availableSlots} {t("slots")}
                            </span>
                          </div>
                          <Progress 
                            value={slotsPercentage} 
                            className="h-3 bg-discord-active"
                          />
                        </div>
                        <div className="p-3 bg-[#9B59B6]/10 rounded-lg border border-[#9B59B6]/30">
                          <p className="text-sm text-white">
                            <span className="font-semibold">{t("maxSlots")}:</span> {selectedFaction.maxSlots} {t("slots")}
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Features/Capabilities */}
                    <Card className="bg-discord-darker/50 border-discord-active">
                      <CardHeader>
                        <CardTitle className="text-lg text-white">
                          {selectedFaction.category === "peaceful" ? t("services") : t("capabilities")}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-3">
                          {features.map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 p-3 bg-discord-active/30 rounded-lg hover:bg-discord-active/50 transition-colors"
                            >
                              <div className={`w-2 h-2 rounded-full ${selectedFaction.color.replace('text-', 'bg-')}`} />
                              <span className="text-sm text-white">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* How to Apply */}
                    <Card className="bg-gradient-to-br from-[#9B59B6]/10 to-[#8E44AD]/10 border-[#9B59B6]/30">
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <UserPlus className="w-5 h-5 text-[#9B59B6]" />
                          <CardTitle className="text-lg text-white">{t("howToApply")}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-discord-textMuted leading-relaxed">
                          {t("howToApplyText")}
                        </p>
                        <div className="mt-4 p-4 bg-[#9B59B6]/20 rounded-lg border border-[#9B59B6]/30">
                          <div className="flex items-start gap-3">
                            <Info className="w-5 h-5 text-[#9B59B6] mt-0.5" />
                            <div>
                              <p className="text-sm font-semibold text-white mb-1">
                                Procesul de aplicare
                              </p>
                              <ul className="text-sm text-discord-textMuted space-y-1">
                                <li>• Contactează liderii factiunii în joc</li>
                                <li>• Sau aplică direct prin User Panel → Factiuni</li>
                                <li>• Așteaptă răspunsul de la liderii factiunii</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </>
              );
            })()}
          </DialogContent>
        </Dialog>
      </div>
    </WikiLayout>
  );
}
