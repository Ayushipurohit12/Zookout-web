"use client";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#000000E0] border-b border-[rgba(0,0,0,0)] flex items-center justify-between px-11 py-4 backdrop-blur-sm">
      {/* Logo */}
      <div className="flex items-center">
        <Image src="/Assets/logo.svg" alt="ZookOut Logo" width={120} height={40} />
      </div>

      {/* Nav Links - Desktop */}
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

      {/* CTA Buttons - Desktop */}
      <div className="hidden md:flex items-center gap-3">
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

      {/* Hamburger Menu Button - Mobile */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#000000E0] backdrop-blur-sm border-b border-[rgba(0,0,0,0)] px-11 py-4">
          <div className="flex flex-col gap-4">
            {["Why ZookOut", "How It Works", "Dashboard", "Merchants"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[#7a7a75] text-sm font-medium hover:text-white transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="flex flex-col gap-3 mt-4">
              <a
                href="#"
                className="border border-[#d9d5cb] text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-white/10 transition-colors duration-200 text-center"
                onClick={() => setIsOpen(false)}
              >
                Careers
              </a>
              <a
                href="#"
                className="bg-[#0f0f0e] text-[#f5f2ec] text-sm font-semibold px-6 py-2.5 rounded-full shadow-[0px_2px_8px_0px_rgba(0,0,0,0.2)] hover:bg-[#222] transition-colors duration-200 text-center"
                onClick={() => setIsOpen(false)}
              >
                Join Free →
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
