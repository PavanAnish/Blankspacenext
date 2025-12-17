"use client";

import { useEffect, useRef } from "react";

export default function LogoScrollMotion() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftCircleRef = useRef<SVGCircleElement>(null);
  const rightCircleRef = useRef<SVGCircleElement>(null);
  const leftPathRef = useRef<SVGPathElement>(null);
  const rightPathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (
        !containerRef.current ||
        !leftCircleRef.current ||
        !rightCircleRef.current ||
        !leftPathRef.current ||
        !rightPathRef.current
      )
        return;

      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Scroll progress (starts in hero, ends slightly into next section)
      const start = viewportHeight * 0.2;
      const end = viewportHeight * 1.4;

      const progress = Math.min(
        Math.max((start - rect.top) / (start - end), 0),
        1
      );

      // Path math
      const leftLength = leftPathRef.current.getTotalLength();
      const rightLength = rightPathRef.current.getTotalLength();

      const leftPoint = leftPathRef.current.getPointAtLength(
        leftLength * progress
      );
      const rightPoint = rightPathRef.current.getPointAtLength(
        rightLength * progress
      );

      // Subtle squash only mid-motion
      const squash =
        progress > 0.1 && progress < 0.9 ? 1.06 : 1;

      // LEFT circle (bottom-left → top-left)
      leftCircleRef.current.setAttribute(
        "transform",
        `translate(${leftPoint.x}, ${leftPoint.y}) scale(${squash}, ${
          2 - squash
        })`
      );

      // RIGHT circle (top-right → bottom-right)
      rightCircleRef.current.setAttribute(
        "transform",
        `translate(${rightPoint.x}, ${rightPoint.y}) scale(${squash}, ${
          2 - squash
        })`
      );
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute right-0 top-0 h-full w-[520px] pointer-events-none"
    >
      <svg
        viewBox="0 0 520 420"
        className="w-full h-full"
        fill="none"
      >
        {/* Pills / cylinders */}
        <rect
          x="120"
          y="60"
          width="110"
          height="280"
          rx="55"
          fill="rgba(255,255,255,0.25)"
          transform="rotate(-30 120 60)"
        />
        <rect
          x="230"
          y="80"
          width="110"
          height="260"
          rx="55"
          fill="rgba(255,255,255,0.18)"
          transform="rotate(-30 230 80)"
        />
        <rect
          x="340"
          y="100"
          width="110"
          height="240"
          rx="55"
          fill="rgba(255,255,255,0.14)"
          transform="rotate(-30 340 100)"
        />

        {/* Invisible motion paths */}
        <path
          ref={leftPathRef}
          d="M 165 300 C 140 240, 140 180, 165 120"
          fill="none"
        />
        <path
          ref={rightPathRef}
          d="M 385 120 C 410 180, 410 240, 385 300"
          fill="none"
        />

        {/* Moving circles */}
        <circle
          ref={leftCircleRef}
          r="22"
          fill="#ffffff"
        />
        <circle
          ref={rightCircleRef}
          r="22"
          fill="#ffffff"
        />
      </svg>
    </div>
  );
}
