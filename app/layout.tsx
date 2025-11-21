import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import LoadingProvider from "@/components/LoadingProvider";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  title: "Veyron Wiki - Rage Multiplayer RPG",
  description: "Wiki pentru serverul Rage Multiplayer RPG Veyron",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ro">
      <body>
        <LanguageProvider>
          <LoadingProvider>{children}</LoadingProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}

