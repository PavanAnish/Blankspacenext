"use client";

import { useEffect, useRef } from "react";

export default function ParallaxSVG({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const idleOffset = useRef(0);
  const isScrolling = useRef(false);

  useEffect(() => {
    let rafId: number;

    const onScroll = () => {
      lastScrollY.current = window.scrollY;
      isScrolling.current = true;

      if (ref.current) {
        const offset = Math.min(lastScrollY.current * 0.03, 12);
        ref.current.style.transform = `translateY(${-offset}px)`;
      }

      clearTimeout((onScroll as any).timeout);
      (onScroll as any).timeout = setTimeout(() => {
        isScrolling.current = false;
      }, 120);
    };

    const idleAnimate = () => {
      if (!isScrolling.current && ref.current) {
        idleOffset.current += 0.005;
        const drift = Math.sin(idleOffset.current) * 4;
        ref.current.style.transform = `translateY(${drift}px)`;
      }

      rafId = requestAnimationFrame(idleAnimate);
    };

    window.addEventListener("scroll", onScroll);
    idleAnimate();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div ref={ref} className="will-change-transform">
      {children}
    </div>
  );
}
