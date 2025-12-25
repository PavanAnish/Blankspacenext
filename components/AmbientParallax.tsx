"use client";
import { useEffect } from "react";

export default function AmbientParallax() {
  useEffect(() => {
    const glows = document.querySelectorAll<HTMLElement>(".glow");

    function onScroll() {
      const scrollY = window.scrollY;

      glows.forEach((glow, index) => {
        // Different depth per glow
        const depth = [0.12, 0.07, 0.04][index] || 0.05;

        // Vertical + slight horizontal drift
        const y = scrollY * depth;
        const x = scrollY * depth * 0.15;

        glow.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
    }

    onScroll(); // run once on load
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
