"use client";

import WikiLayout from "@/components/WikiLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  TrendingUp, 
  Clock, 
  Star, 
  Briefcase, 
  Target, 
  Lock, 
  DollarSign,
  Zap,
  Sparkles,
  User
} from "lucide-react";
import { useState } from "react";

export default function LevelPage() {
  const { t } = useLanguage();
  const [showBadgeTooltip, setShowBadgeTooltip] = useState(false);

  // Example data for demonstration
  const currentLevel = 25;
  const maxLevel = 50;
  const currentXP = 12500;
  const xpForNextLevel = 20000;
  const progressPercentage = (currentXP / xpForNextLevel) * 100;

  const activities = [
    { name: t("levelJobs"), icon: Briefcase, xp: "+50-200 XP", color: "text-blue-400" },
    { name: t("levelMissions"), icon: Target, xp: "+100-500 XP", color: "text-green-400" },
    { name: t("levelHeists"), icon: Lock, xp: "+500-2000 XP", color: "text-purple-400" },
    { name: t("levelRobberies"), icon: DollarSign, xp: "+200-1000 XP", color: "text-yellow-400" },
    { name: t("levelOtherActivities"), icon: Zap, xp: "+25-500 XP", color: "text-pink-400" },
  ];

  return (
    <WikiLayout>
      <div className="p-8 space-y-8">
        {/* Header Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-gradient-to-br from-[#9B59B6] to-[#8E44AD] rounded-xl">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-black text-white">{t("levelTitle")}</h1>
              <p className="text-discord-textMuted text-lg">{t("levelSystemText")}</p>
            </div>
          </div>
        </div>

        {/* Current Level Progress Card */}
        <Card className="bg-gradient-to-br from-discord-sidebar to-discord-darker/50 border-[#9B59B6]/30">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl text-white mb-2">
                  {t("levelSystem")}
                </CardTitle>
                <CardDescription className="text-discord-textMuted">
                  Level {currentLevel} / {maxLevel}
                </CardDescription>
              </div>
              <Badge className="bg-[#9B59B6] text-white text-lg px-4 py-2">
                <Star className="w-4 h-4 mr-2" />
                Level {currentLevel}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-discord-textMuted">
                <span>XP: {currentXP.toLocaleString()} / {xpForNextLevel.toLocaleString()}</span>
                <span>{Math.round(progressPercentage)}%</span>
              </div>
              <Progress 
                value={progressPercentage} 
                className="h-3 bg-discord-active"
              />
            </div>
            <div className="flex items-center gap-2 text-sm text-discord-textMuted">
              <TrendingUp className="w-4 h-4 text-[#9B59B6]" />
              <span>{(xpForNextLevel - currentXP).toLocaleString()} XP până la Level {currentLevel + 1}</span>
            </div>
          </CardContent>
        </Card>

        {/* Main Content Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Personalized Payday */}
          <Card className="bg-discord-sidebar border-discord-active hover:border-[#9B59B6]/50 transition-colors">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#9B59B6]/20 rounded-lg">
                  <Clock className="w-6 h-6 text-[#9B59B6]" />
                </div>
                <CardTitle className="text-xl text-white">{t("personalizedPayday")}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-discord-textMuted leading-relaxed">
                {t("personalizedPaydayDesc")}
              </p>
              <div className="mt-4 p-3 bg-discord-active/50 rounded-lg border border-discord-active/50">
                <div className="flex items-center gap-2 text-sm text-[#9B59B6]">
                  <Sparkles className="w-4 h-4" />
                  <span className="font-semibold">Timer individual pentru fiecare jucător</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Experience System */}
          <Card className="bg-discord-sidebar border-discord-active hover:border-[#9B59B6]/50 transition-colors">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#9B59B6]/20 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-[#9B59B6]" />
                </div>
                <CardTitle className="text-xl text-white">{t("experienceSystem")}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-discord-textMuted leading-relaxed mb-4">
                {t("experienceSystemDesc")}
              </p>
              <div className="space-y-2">
                {activities.map((activity, index) => {
                  const Icon = activity.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2 bg-discord-active/30 rounded-lg hover:bg-discord-active/50 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <Icon className={`w-4 h-4 ${activity.color}`} />
                        <span className="text-sm text-white">{activity.name}</span>
                      </div>
                      <Badge variant="outline" className="text-xs border-[#9B59B6]/50 text-[#9B59B6]">
                        {activity.xp}
                      </Badge>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Max Level */}
          <Card className="bg-gradient-to-br from-[#9B59B6]/10 to-[#8E44AD]/10 border-[#9B59B6]/50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#9B59B6] rounded-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl text-white">{t("maxLevel")}</CardTitle>
                  <CardDescription className="text-[#9B59B6] font-bold text-lg">
                    Level {t("maxLevelValue")}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-discord-textMuted leading-relaxed mb-4">
                {t("maxLevelDesc")}
              </p>
              <div className="flex items-center gap-2 p-3 bg-[#9B59B6]/20 rounded-lg border border-[#9B59B6]/30">
                <Star className="w-5 h-5 text-[#9B59B6]" />
                <span className="text-sm text-white font-semibold">
                  Odată ajuns la Level {t("maxLevelValue")}, vei debloca sistemul de Reborn
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Reborn System */}
          <Card className="bg-gradient-to-br from-[#8E44AD]/10 to-[#6A1B9A]/10 border-[#8E44AD]/50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#8E44AD] rounded-lg">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-white">{t("rebornSystem")}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-discord-textMuted leading-relaxed">
                {t("rebornSystemDesc")}
              </p>
              <div className="mt-4 flex items-center gap-2 p-3 bg-[#8E44AD]/20 rounded-lg border border-[#8E44AD]/30">
                <Zap className="w-5 h-5 text-[#8E44AD]" />
                <span className="text-sm text-white">
                  Continuă să progresezi chiar și după Level {t("maxLevelValue")}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Max Level Badge Section */}
        <Card className="bg-gradient-to-r from-[#9B59B6]/20 via-[#8E44AD]/20 to-[#6A1B9A]/20 border-[#9B59B6]/50">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-br from-[#9B59B6] to-[#8E44AD] rounded-xl">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-2xl text-white">{t("maxLevelBadge")}</CardTitle>
                <CardDescription className="text-discord-textMuted">
                  Badge special pentru jucătorii de nivel maxim
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-discord-textMuted leading-relaxed mb-6">
              {t("maxLevelBadgeDesc")}
            </p>
            
            {/* User Panel Preview */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-white mb-4">Preview User Panel</h4>
              <div className="bg-discord-darker rounded-xl p-6 border border-discord-active">
                <div className="flex items-center gap-4">
                  {/* User Avatar/Icon */}
                  <div className="w-16 h-16 bg-discord-sidebar rounded-full flex items-center justify-center border-2 border-discord-active">
                    <User className="w-8 h-8 text-discord-textMuted" />
                  </div>
                  
                  {/* User Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h5 className="text-white font-semibold">Player Name</h5>
                      <span className="text-discord-textMuted text-sm">Level {t("maxLevelValue")}</span>
                    </div>
                    <p className="text-discord-textMuted text-sm">Online</p>
                  </div>
                  
                  {/* Badge Preview */}
                  <div className="relative">
                    <div
                      className="w-12 h-12 bg-gradient-to-br from-[#9B59B6] to-[#8E44AD] rounded-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg shadow-[#9B59B6]/30 border-2 border-[#9B59B6]"
                      onMouseEnter={() => setShowBadgeTooltip(true)}
                      onMouseLeave={() => setShowBadgeTooltip(false)}
                    >
                      <Star className="w-7 h-7 text-white fill-white" />
                    </div>
                    
                    {/* Tooltip */}
                    {showBadgeTooltip && (
                      <div className="absolute right-0 top-full mt-2 z-50 bg-discord-sidebar border border-discord-active rounded-lg px-4 py-3 shadow-xl min-w-[200px]">
                        <div className="flex items-center gap-2 mb-2">
                          <Star className="w-5 h-5 text-[#9B59B6]" />
                          <span className="font-semibold text-white">Nivel Maxim</span>
                        </div>
                        <p className="text-sm text-discord-textMuted">
                          Ai atins nivelul maxim (Level {t("maxLevelValue")})
                        </p>
                        <div className="absolute -top-1 right-4 w-2 h-2 bg-discord-sidebar border-l border-t border-discord-active rotate-45" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <p className="text-xs text-discord-textMuted mt-3 text-center">
                💡 Treci cu cursorul peste badge-ul cu steluță pentru a vedea tooltip-ul
              </p>
            </div>
            
            <div className="flex items-center gap-4 p-6 bg-discord-sidebar/50 rounded-xl border border-[#9B59B6]/30">
              <div className="p-4 bg-gradient-to-br from-[#9B59B6] to-[#8E44AD] rounded-lg">
                <Star className="w-12 h-12 text-white" />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-white mb-2">Badge în User Panel</h4>
                <p className="text-sm text-discord-textMuted">
                  Iconița cu steluță apare în user panel când ai atins Level {t("maxLevelValue")}. 
                  Treci cu cursorul peste ea pentru a vedea informațiile despre nivelul tău maxim.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </WikiLayout>
  );
}
