"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "ro" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ro: {
    // Navigation
    home: "Acasă",
    factions: "Factiuni",
    houses: "Case",
    apartments: "Apartamente",
    vehicles: "Vehicule Personale",
    account: "Cont",
    progress: "Progres",
    level: "Level",
    shop: "SHOP",
    ucp: "UCP",
    wiki: "WIKI",
    changelog: "CHANGELOG",
    underDevelopment: "În dezvoltare",
    
    // Home page
    welcome: "Bun venit la Wiki-ul Veyron",
    welcomeDescription: "Ghidul complet pentru serverul Rage Multiplayer RPG Veyron. Află tot ce trebuie să știi despre factiuni, proprietăți, vehicule și progresul tău în joc.",
    learnMore: "Află mai mult",
    aboutServer: "Despre Server",
    aboutServerText: "Veyron este un server Rage Multiplayer RPG care oferă o experiență imersivă de joc cu multiple factiuni, sistem de proprietăți, vehicule personalizabile și progres detaliat. Alătură-te comunității și explorează lumea vastă a Veyron-ului.",
    
    // Category descriptions
    factionsDesc: "Explorează factiunile disponibile și alătură-te unei organizații",
    housesDesc: "Găsește casa perfectă pentru tine",
    apartmentsDesc: "Apartamente moderne în centrul orașului",
    vehiclesDesc: "Personalizează-ți vehiculul ideal",
    accountDesc: "Gestionează-ți setările contului",
    progressDesc: "Urmărește-ți progresul și skill-urile",
    levelDesc: "Află despre sistemul de level și XP",
    
    // Factions page
    factionsTitle: "Factiuni",
    factionsAbout: "Despre Factiuni",
    factionsAboutText: "Factiunile sunt organizații importante în serverul Veyron. Fiecare factiune are propriile reguli, obiective și structură. Alătură-te unei factiuni pentru a beneficia de avantaje exclusive și pentru a participa la evenimente speciale.",
    availableFactions: "Factiuni Disponibile",
    howToJoin: "Cum te alături",
    howToJoinText: "Pentru a te alătura unei factiuni, contactează liderii factiunii sau aplică direct prin sistemul de factiuni din joc.",
    
    // Faction categories
    policeForces: "Forțe de Poliție",
    peacefulFactions: "Factiuni Pașnice",
    mafiaHitman: "Mafii & Hitman",
    capabilities: "Capacități:",
    services: "Servicii:",
    
    // Police factions
    lspdName: "Los Santos Police Department",
    lspdDesc: "Forța de poliție principală a Los Santos, responsabilă cu menținerea ordinii publice și aplicarea legii.",
    lspdFeatures: "Patrulare oraș|Răspuns la urgențe|Investigații criminale|Control trafic",
    fbiName: "Federal Bureau of Investigations",
    fbiDesc: "Agenție federală specializată în investigații complexe, crime organizate și securitate națională.",
    fbiFeatures: "Investigații federale|Operațiuni speciale|Surveillance|Anti-terorism",
    ngName: "National Guard",
    ngDesc: "Forțele armate naționale, responsabile cu apărarea și securitatea în situații critice.",
    ngFeatures: "Apărare națională|Răspuns la dezastre|Operațiuni militare|Securitate strategică",
    
    // Peaceful factions
    taxiName: "Taxi Cab Company",
    taxiDesc: "Companie de transport public, oferind servicii de taxi pentru locuitorii Los Santos.",
    taxiFeatures: "Transport pasageri|Servicii 24/7|Flotă de vehicule|Sistem de tarife",
    schoolName: "School Instructors",
    schoolDesc: "Instituție educațională dedicată formării și educării tinerilor din Los Santos.",
    schoolFeatures: "Educație|Formare profesională|Cursuri specializate|Dezvoltare personală",
    newsName: "News Reporters",
    newsDesc: "Organizație media responsabilă cu acoperirea știrilor și evenimentelor din Los Santos.",
    newsFeatures: "Jurnalism|Reportaje live|Acoperire evenimente|Informare publică",
    
    // Mafia factions
    hitmanName: "Hitman Agency",
    hitmanDesc: "Organizație secretă de asasini profesioniști, specializată în eliminări și contracte.",
    hitmanFeatures: "Contracte de eliminare|Operațiuni stealth|Jafuri speciale|Heisturi exclusive",
    groveName: "Grove Street",
    groveDesc: "Gang-ul legendar din Grove Street, cunoscut pentru controlul teritoriilor și războaiele cu alte mafii.",
    groveFeatures: "Control teritorii|War-uri cu alte mafii|Jafuri organizate|Heisturi",
    aztecasName: "Los Aztecas",
    aztecasDesc: "Gang puternic din zona estică, cunoscut pentru loialitate și lupte pentru teritoriu.",
    aztecasFeatures: "Control teritorii|War-uri teritoriale|Jafuri speciale|Heisturi",
    ballasName: "The Ballas Family",
    ballasDesc: "Gang rival puternic, în conflict constant pentru controlul teritoriilor din Los Santos.",
    ballasFeatures: "Control teritorii|War-uri cu Grove Street|Jafuri organizate|Heisturi",
    
    // War system
    warSystemTitle: "Sistemul de War-uri între Mafii",
    territories: "Teritorii",
    territoriesDesc: "Fiecare mafie controlează teritorii specifice în Los Santos. Teritoriile sunt marcate pe hartă și pot fi atacate de alte mafii.",
    territoriesBlink: "Teritoriile active blink-uiesc pe hartă pentru identificare ușoară",
    warDuration: "Durata War-ului",
    warDurationDesc: "Fiecare war durează exact 20 de minute. În acest timp, mafiile trebuie să mențină controlul teritoriului.",
    warTimeRemaining: "Timpul rămas este afișat în timp real",
    attackScheduling: "Programarea Atacurilor",
    attackSchedulingDesc: "Atacurile se programează din User Panel cu o zi înainte. Poți planifica atacurile pentru ziua următoare, permițând strategie și pregătire.",
    failSystem: "Sistemul de Fail",
    failSystemDesc: "Dacă mafia care atacă teritoriul nu mai are niciun membru pe turf, war-ul se consideră FAIL și teritoriul rămâne în posesia mafiei apărătoare.",
    failWarning: "Părăsirea teritoriului = Fail automat",
    mafiaAdvantages: "Avantaje Mafii",
    specialRobberies: "Jafuri Speciale",
    specialRobberiesDesc: "Mafiile au acces la jafuri exclusive disponibile doar pentru membrii factiunii.",
    heists: "Heisturi",
    heistsDesc: "Organizează heisturi complexe cu membrii factiunii pentru recompense mari.",
    
    // Houses page
    housesTitle: "Case",
    housesAbout: "Despre Case",
    housesAboutText: "Casele sunt proprietăți rezidențiale mari care oferă spațiu generos și multe facilități. Poți cumpăra o casă pentru a-ți crea un loc de refugiu personalizat în lumea Veyron.",
    houseTypes: "Tipuri de Case",
    facilities: "Facilități",
    
    // Apartments page
    apartmentsTitle: "Apartamente",
    apartmentsAbout: "Despre Apartamente",
    apartmentsAboutText: "Apartamentele sunt opțiuni mai accesibile pentru locuință în oraș. Sunt perfecte pentru jucătorii care încep sau preferă un stil de viață urban. Multe apartamente sunt situate în clădiri de apartamente moderne.",
    advantages: "Avantaje",
    locations: "Locații",
    locationsText: "Apartamentele sunt disponibile în diferite zone ale orașului. Fiecare zonă oferă acces la diferite facilități și servicii.",
    
    // Vehicles page
    vehiclesTitle: "Vehicule Personale",
    vehiclesAbout: "Despre Vehicule",
    vehiclesAboutText: "Vehiculele personale sunt esențiale pentru deplasarea rapidă în lumea Veyron. Poți cumpăra, personaliza și întreține propriile vehicule pentru a-ți îmbunătăți experiența de joc.",
    cars: "Mașini",
    carsText: "De la mașini sport la SUV-uri, găsește vehiculul perfect pentru stilul tău.",
    motorcycles: "Motoare",
    motorcyclesText: "Motoare rapide și agilite pentru cei care preferă viteza.",
    customization: "Personalizare",
    customizationText: "Personalizează-ți vehiculul cu culori, stickere și modificări de performanță.",
    
    // Account page
    accountTitle: "Cont",
    accountManagement: "Gestionarea Contului",
    accountManagementText: "Aici poți gestiona toate aspectele contului tău, de la setări de bază la preferințe avansate. Asigură-te că contul tău este securizat și configurat conform preferințelor tale.",
    basicSettings: "Setări de Bază",
    security: "Securitate",
    
    // Progress page
    progressTitle: "Progres",
    progressSystem: "Sistemul de Progres",
    progressSystemText: "Urmărește-ți progresul în serverul Veyron. Sistemul de progres include multiple aspecte ale jocului, de la skill-uri la realizări și obiective completate.",
    skills: "Skill-uri",
    achievements: "Realizări",
    achievementsText: "Deblochează realizări speciale completând obiective și provocări în joc.",
    
    // Level page
    levelTitle: "Level",
    levelSystem: "Sistemul de Level",
    levelSystemText: "Avansează în level pentru a debloca noi conținuturi și abilități. Fiecare level aduce cu sine recompense și oportunități noi în lumea Veyron.",
    howToGainXP: "Cum câștigi XP",
    levelRewards: "Recompense pe Level",
    
    // Loading screen
    loading: "Se încarcă...",
    loadingPreparing: "Pregătim wiki-ul...",
    loadingAlmost: "Aproape gata...",
    loadingFinishing: "Finalizăm...",
    progressLabel: "Progres",
    
    // Landing page
    playersOnline: "jucători conectați",
    landingHeadline: "Începe o viață nouă împreună cu noi!",
    landingDescription: "Serverul nostru este un server RPG bazat pe modificarea multiplayer RAGE Multiplayer pentru Grand Theft Auto V. Joacă ca civil, criminal sau ofițer de poliție. Există multe joburi din care poți alege și serverul este actualizat constant.",
    startPlaying: "ÎNCEPE SĂ JOCI",
    joinDiscord: "ALĂTURĂ-TE DISCORD-ULUI",
  },
  en: {
    // Navigation
    home: "Home",
    factions: "Factions",
    houses: "Houses",
    apartments: "Apartments",
    vehicles: "Personal Vehicles",
    account: "Account",
    progress: "Progress",
    level: "Level",
    shop: "SHOP",
    ucp: "UCP",
    wiki: "WIKI",
    changelog: "CHANGELOG",
    underDevelopment: "Under Development",
    
    // Home page
    welcome: "Welcome to Veyron Wiki",
    welcomeDescription: "The complete guide for the Veyron Rage Multiplayer RPG server. Learn everything you need to know about factions, properties, vehicles, and your progress in the game.",
    learnMore: "Learn more",
    aboutServer: "About Server",
    aboutServerText: "Veyron is a Rage Multiplayer RPG server that offers an immersive gaming experience with multiple factions, property system, customizable vehicles, and detailed progress. Join the community and explore the vast world of Veyron.",
    
    // Category descriptions
    factionsDesc: "Explore available factions and join an organization",
    housesDesc: "Find the perfect house for you",
    apartmentsDesc: "Modern apartments in the city center",
    vehiclesDesc: "Customize your ideal vehicle",
    accountDesc: "Manage your account settings",
    progressDesc: "Track your progress and skills",
    levelDesc: "Learn about the level and XP system",
    
    // Factions page
    factionsTitle: "Factions",
    factionsAbout: "About Factions",
    factionsAboutText: "Factions are important organizations in the Veyron server. Each faction has its own rules, objectives, and structure. Join a faction to benefit from exclusive advantages and participate in special events.",
    availableFactions: "Available Factions",
    howToJoin: "How to Join",
    howToJoinText: "To join a faction, contact the faction leaders or apply directly through the in-game faction system.",
    
    // Faction categories
    policeForces: "Police Forces",
    peacefulFactions: "Peaceful Factions",
    mafiaHitman: "Mafias & Hitman",
    capabilities: "Capabilities:",
    services: "Services:",
    
    // Police factions
    lspdName: "Los Santos Police Department",
    lspdDesc: "The main police force of Los Santos, responsible for maintaining public order and enforcing the law.",
    lspdFeatures: "City patrol|Emergency response|Criminal investigations|Traffic control",
    fbiName: "Federal Bureau of Investigations",
    fbiDesc: "Federal agency specialized in complex investigations, organized crime, and national security.",
    fbiFeatures: "Federal investigations|Special operations|Surveillance|Anti-terrorism",
    ngName: "National Guard",
    ngDesc: "National armed forces, responsible for defense and security in critical situations.",
    ngFeatures: "National defense|Disaster response|Military operations|Strategic security",
    
    // Peaceful factions
    taxiName: "Taxi Cab Company",
    taxiDesc: "Public transport company, offering taxi services for Los Santos residents.",
    taxiFeatures: "Passenger transport|24/7 services|Vehicle fleet|Fare system",
    schoolName: "School Instructors",
    schoolDesc: "Educational institution dedicated to training and educating young people in Los Santos.",
    schoolFeatures: "Education|Professional training|Specialized courses|Personal development",
    newsName: "News Reporters",
    newsDesc: "Media organization responsible for covering news and events in Los Santos.",
    newsFeatures: "Journalism|Live reports|Event coverage|Public information",
    
    // Mafia factions
    hitmanName: "Hitman Agency",
    hitmanDesc: "Secret organization of professional assassins, specialized in eliminations and contracts.",
    hitmanFeatures: "Elimination contracts|Stealth operations|Special robberies|Exclusive heists",
    groveName: "Grove Street",
    groveDesc: "The legendary gang from Grove Street, known for controlling territories and wars with other mafias.",
    groveFeatures: "Territory control|Wars with other mafias|Organized robberies|Heists",
    aztecasName: "Los Aztecas",
    aztecasDesc: "Powerful gang from the eastern area, known for loyalty and territorial fights.",
    aztecasFeatures: "Territory control|Territorial wars|Special robberies|Heists",
    ballasName: "The Ballas Family",
    ballasDesc: "Powerful rival gang, in constant conflict for control of territories in Los Santos.",
    ballasFeatures: "Territory control|Wars with Grove Street|Organized robberies|Heists",
    
    // War system
    warSystemTitle: "War System Between Mafias",
    territories: "Territories",
    territoriesDesc: "Each mafia controls specific territories in Los Santos. Territories are marked on the map and can be attacked by other mafias.",
    territoriesBlink: "Active territories blink on the map for easy identification",
    warDuration: "War Duration",
    warDurationDesc: "Each war lasts exactly 20 minutes. During this time, mafias must maintain control of the territory.",
    warTimeRemaining: "Remaining time is displayed in real-time",
    attackScheduling: "Attack Scheduling",
    attackSchedulingDesc: "Attacks are scheduled from the User Panel one day in advance. You can plan attacks for the next day, allowing strategy and preparation.",
    failSystem: "Fail System",
    failSystemDesc: "If the mafia attacking the territory no longer has any members on the turf, the war is considered FAIL and the territory remains in the possession of the defending mafia.",
    failWarning: "Leaving the territory = Automatic fail",
    mafiaAdvantages: "Mafia Advantages",
    specialRobberies: "Special Robberies",
    specialRobberiesDesc: "Mafias have access to exclusive robberies available only to faction members.",
    heists: "Heists",
    heistsDesc: "Organize complex heists with faction members for large rewards.",
    
    // Houses page
    housesTitle: "Houses",
    housesAbout: "About Houses",
    housesAboutText: "Houses are large residential properties that offer generous space and many facilities. You can buy a house to create your own customized refuge in the Veyron world.",
    houseTypes: "House Types",
    facilities: "Facilities",
    
    // Apartments page
    apartmentsTitle: "Apartments",
    apartmentsAbout: "About Apartments",
    apartmentsAboutText: "Apartments are more affordable housing options in the city. They are perfect for players who are starting out or prefer an urban lifestyle. Many apartments are located in modern apartment buildings.",
    advantages: "Advantages",
    locations: "Locations",
    locationsText: "Apartments are available in different areas of the city. Each area offers access to different facilities and services.",
    
    // Vehicles page
    vehiclesTitle: "Personal Vehicles",
    vehiclesAbout: "About Vehicles",
    vehiclesAboutText: "Personal vehicles are essential for fast travel in the Veyron world. You can buy, customize, and maintain your own vehicles to improve your gaming experience.",
    cars: "Cars",
    carsText: "From sports cars to SUVs, find the perfect vehicle for your style.",
    motorcycles: "Motorcycles",
    motorcyclesText: "Fast and agile motorcycles for those who prefer speed.",
    customization: "Customization",
    customizationText: "Customize your vehicle with colors, stickers, and performance modifications.",
    
    // Account page
    accountTitle: "Account",
    accountManagement: "Account Management",
    accountManagementText: "Here you can manage all aspects of your account, from basic settings to advanced preferences. Make sure your account is secure and configured according to your preferences.",
    basicSettings: "Basic Settings",
    security: "Security",
    
    // Progress page
    progressTitle: "Progress",
    progressSystem: "Progress System",
    progressSystemText: "Track your progress in the Veyron server. The progress system includes multiple aspects of the game, from skills to achievements and completed objectives.",
    skills: "Skills",
    achievements: "Achievements",
    achievementsText: "Unlock special achievements by completing objectives and challenges in the game.",
    
    // Level page
    levelTitle: "Level",
    levelSystem: "Level System",
    levelSystemText: "Advance in level to unlock new content and abilities. Each level brings with it rewards and new opportunities in the Veyron world.",
    howToGainXP: "How to Gain XP",
    levelRewards: "Level Rewards",
    
    // Loading screen
    loading: "Loading...",
    loadingPreparing: "Preparing wiki...",
    loadingAlmost: "Almost ready...",
    loadingFinishing: "Finishing...",
    progressLabel: "Progress",
    
    // Landing page
    playersOnline: "players online",
    landingHeadline: "Start a new life together with us!",
    landingDescription: "Our server is a RPG server based on the multiplayer modification RAGE Multiplayer for Grand Theft Auto V. Play as a civilian, criminal or police officer. There are many jobs to choose from and the server is constantly being updated and worked on.",
    startPlaying: "START PLAYING",
    joinDiscord: "JOIN OUR DISCORD",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("ro");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.ro] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

