"use client";
import { useRef } from "react";

export default function MagneticButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLButtonElement>(null);

  function handleMouseMove(e: React.MouseEvent) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    ref.current.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  }

  function reset() {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0px, 0px)";
  }

  return (
    <button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      className={className}
      style={{ transition: "transform 0.25s ease-out" }}
    >
      {children}
    </button>
  );
}
