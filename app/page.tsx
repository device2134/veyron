"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirecționează întotdeauna către landing page
    router.push("/landing");
  }, [router]);

  return null;
}

