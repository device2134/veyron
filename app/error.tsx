"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Home } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-discord-darker text-white">
      <div className="text-center space-y-6 max-w-md">
        <AlertTriangle className="w-16 h-16 text-red-400 mx-auto" />
        <h1 className="text-4xl font-black text-red-400">Something went wrong!</h1>
        <p className="text-discord-textMuted">
          An error occurred. Please try again later.
        </p>
        <div className="flex gap-4 justify-center">
          <Button onClick={reset} variant="outline">
            Try again
          </Button>
          <Button asChild className="bg-[#9B59B6] hover:bg-[#8E44AD]">
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

