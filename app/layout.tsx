import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import LoadingProvider from "@/components/LoadingProvider";
import { LanguageProvider } from "@/contexts/LanguageContext";

// Optimize font loading with next/font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  title: {
    default: "Veyron Wiki - Rage Multiplayer RPG",
    template: "%s | Veyron Wiki",
  },
  description: "Official wiki for the Veyron Rage Multiplayer RPG server. Complete guide for factions, properties, vehicles, and game progress.",
  keywords: ["Veyron", "Rage Multiplayer", "RPG", "GTA V", "Multiplayer", "Wiki", "Gaming"],
  authors: [{ name: "Device" }],
  creator: "Device",
  metadataBase: new URL("https://veyron.ro"),
  openGraph: {
    type: "website",
    locale: "ro_RO",
    alternateLocale: "en_US",
    url: "https://veyron.ro",
    siteName: "Veyron Wiki",
    title: "Veyron Wiki - Rage Multiplayer RPG",
    description: "Official wiki for the Veyron Rage Multiplayer RPG server",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Veyron Wiki",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Veyron Wiki - Rage Multiplayer RPG",
    description: "Official wiki for the Veyron Rage Multiplayer RPG server",
    creator: "@device",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here if needed
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ro" className={`${inter.variable} dark`}>
      <head>
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          <LoadingProvider>{children}</LoadingProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}

