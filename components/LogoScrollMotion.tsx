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
      const vh = window.innerHeight;

      // Scroll range: starts in hero, ends into next section
      const start = vh * 0.1;
      const end = vh * 2.0;

      const progress = Math.min(
        Math.max((start - rect.top) / (start - end), 0),
        1
      );

      const leftLen = leftPathRef.current.getTotalLength();
      const rightLen = rightPathRef.current.getTotalLength();

      const leftPt = leftPathRef.current.getPointAtLength(
        leftLen * progress
      );
      const rightPt = rightPathRef.current.getPointAtLength(
        rightLen * progress
      );

      // Subtle squash only mid-motion
      const squash =
        progress > 0.1 && progress < 0.9 ? 1.06 : 1;

      leftCircleRef.current.setAttribute(
        "transform",
        `translate(${leftPt.x}, ${leftPt.y}) scale(${squash}, ${2 - squash})`
      );

      rightCircleRef.current.setAttribute(
        "transform",
        `translate(${rightPt.x}, ${rightPt.y}) scale(${squash}, ${2 - squash})`
      );
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="
  absolute 
  right-0 
  top-1/2 
  -translate-y-1/2 
  translate-x-[-80px]
  w-[420px] 
  h-[320px]
  pointer-events-none
"

    >
      <svg
        viewBox="0 0 420 320"
        className="w-full h-full"
        fill="none"
      >
        {/* === PILLS (FROM YOUR SVG) === */}
        <g opacity="0.25">
          <rect
            x="80"
            y="40"
            width="90"
            height="240"
            rx="45"
            fill="white"
            transform="rotate(-30 80 40)"
          />
          <rect
            x="160"
            y="60"
            width="90"
            height="220"
            rx="45"
            fill="white"
            transform="rotate(-30 160 60)"
          />
          <rect
            x="240"
            y="80"
            width="90"
            height="200"
            rx="45"
            fill="white"
            transform="rotate(-30 240 80)"
          />
        </g>

        {/* === MOTION PATHS (INVISIBLE) === */}
        {/* Left circle: bottom-left → top-left */}
        <path
          ref={leftPathRef}
          d="M 135 260 C 105 210, 105 150, 135 95"
          fill="none"
        />

        {/* Right circle: top-right → bottom-right */}
        <path
          ref={rightPathRef}
          d="M 305 95 C 335 150, 335 210, 305 260"
          fill="none"
        />

        {/* === MOVING CIRCLES === */}
        <circle
          ref={leftCircleRef}
          r="18"
          fill="#ffffff"
        />
        <circle
          ref={rightCircleRef}
          r="18"
          fill="#ffffff"
        />
      </svg>
    </div>
  );
}
