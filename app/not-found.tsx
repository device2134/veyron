"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-discord-darker text-white">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-black text-[#9B59B6]">404</h1>
        <h2 className="text-2xl font-bold">Page Not Found</h2>
        <p className="text-discord-textMuted max-w-md">
          The page you're looking for doesn't exist.
        </p>
        <Button asChild className="bg-[#9B59B6] hover:bg-[#8E44AD]">
          <Link href="/">
            <Home className="w-4 h-4 mr-2" />
            Go Home
          </Link>
        </Button>
      </div>
    </div>
  );
}

