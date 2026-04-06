"use client";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(0,0,0,0.88)] border-b border-[rgba(0,0,0,0)] flex items-center justify-between px-11 py-4 backdrop-blur-sm">
      {/* Logo */}
      <div className="flex items-center">
        <span className="text-[#ff6b00] font-bold text-2xl tracking-tight font-sans">ZOOKOUT</span>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-7">
        {["Why ZookOut", "How It Works", "Dashboard", "Merchants"].map((item) => (
          <a
            key={item}
            href="#"
            className="text-[#7a7a75] text-sm font-medium hover:text-white transition-colors duration-200"
          >
            {item}
          </a>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="flex items-center gap-3">
        <a
          href="#"
          className="border border-[#d9d5cb] text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-white/10 transition-colors duration-200"
        >
          Careers
        </a>
        <a
          href="#"
          className="bg-[#0f0f0e] text-[#f5f2ec] text-sm font-semibold px-6 py-2.5 rounded-full shadow-[0px_2px_8px_0px_rgba(0,0,0,0.2)] hover:bg-[#222] transition-colors duration-200"
        >
          Join Free →
        </a>
      </div>
    </nav>
  );
}
