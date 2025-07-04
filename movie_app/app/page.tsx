// filepath: c:\Users\princ\Desktop\Learn_react\movie_app\app\page.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/movies");
  }, [router]);

  return null;
}