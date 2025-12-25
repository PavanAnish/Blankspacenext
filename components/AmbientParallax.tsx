"use client";
import { useEffect } from "react";

export default function AmbientParallax() {
  useEffect(() => {
    const wrappers =
      document.querySelectorAll<HTMLElement>(".glow-wrapper");

    function onScroll() {
      const scrollY = window.scrollY;

      wrappers.forEach((wrapper, index) => {
        const depth = [0.18, 0.1, 0.06][index] || 0.08;
        const y = scrollY * depth;

        wrapper.style.transform = `translate3d(0, ${y}px, 0)`;
      });
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
