"use client";
import { useEffect } from "react";

export default function AmbientParallax() {
  useEffect(() => {
    const wrappers =
      document.querySelectorAll<HTMLElement>(".glow-wrapper");

    function onScroll() {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;

      wrappers.forEach((wrapper, index) => {
        // Normalize scroll (0 → 1 per viewport)
        const progress = Math.min(scrollY / vh, 2);

        // Depth-based intensity
        const baseOpacity = [0.45, 0.28, 0.2][index] || 0.2;
        const opacity =
          baseOpacity - progress * 0.12;

        const scale =
          1 + Math.min(progress * 0.08, 0.12);

        wrapper.style.opacity = `${Math.max(opacity, 0.08)}`;
        wrapper.style.transform = `scale(${scale})`;
      });
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
