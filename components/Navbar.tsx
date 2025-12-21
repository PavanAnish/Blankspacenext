"use client";

import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav
  className={`
    fixed top-0 left-0 w-full z-50
    transition-all duration-300
    ${
      isHome
        ? "bg-white/10 backdrop-blur-xl border-b border-white/10"
        : "bg-[#2b1b4a] border-b border-white/10"
    }
  `}
>



      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Blankspace" className="h-9 w-auto" />
          <div>
            <p className="text-white font-semibold leading-tight">BLANKSPACE1</p>
            <p className="text-xs text-purple-200">BLANKSPACE</p>
          </div>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-purple-100">
          <a href="/" className="hover:text-white">Home</a>
          <a href="/programs" className="hover:text-white">Programs</a>
          <a href="/about" className="hover:text-white">About</a>
          <a href="/contact" className="hover:text-white">Contact</a>
        </div>

      </div>
    </nav>
  );
}
