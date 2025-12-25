"use client";
import { useEffect } from "react";

export default function AmbientParallax() {
  useEffect(() => {
    const glows = document.querySelectorAll<HTMLElement>(".glow");

    function onScroll() {
      const scrollY = window.scrollY;

      glows.forEach((glow, index) => {
        const speed = (index + 1) * 0.08; // VERY subtle
        glow.style.transform = `translateY(${scrollY * speed}px)`;
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
