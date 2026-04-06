"use client";

export default function Footer() {
  return (
    <footer className="bg-[rgba(15,15,14,0.96)] border-t border-white/8">
      {/* Bottom bar */}
      <div className="max-w-[1200px] mx-auto px-12 py-5 flex items-center justify-between">
        <p className="text-white text-sm">
          <span className="font-bold">Ready to grow?</span>{" "}
          <span className="text-white/55">Join 500+ merchants today</span>
        </p>
        <a
          href="#"
          className="bg-[#ff6b00] text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-[#e55f00] transition-colors duration-200"
        >
          Join Free →
        </a>
      </div>
    </footer>
  );
}
