"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import HomePage from "./home/page";

export default function Home() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [pathname]);

  return (
    <div className="min-h-screen">
      <HomePage />
    </div>
  );
}
