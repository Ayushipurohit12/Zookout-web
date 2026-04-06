"use client";

export default function HeroSection() {
  return (
    <section className="relative bg-black min-h-screen pt-24 pb-32 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/Assets/home/hoomebg.svg"
          alt=""
          className="absolute right-0 top-0 h-full w-auto max-w-none object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      </div>
      <div className="relative z-10 max-w-[1200px] mx-auto px-12">
        <div className="max-w-[652px]">
          <h1 className="text-white font-['GT_Walsheim_Trial',sans-serif] text-[64px] leading-[1.06] tracking-[-1.3px] font-normal mb-6">
            Bring Real Customers. Pay nothing.
          </h1>
        </div>
        <div className="flex items-center gap-6 mb-8">
          <a
            href="#"
            className="bg-[#ff6b00] text-white font-semibold text-base px-9 py-4 rounded-full shadow-[0px_3px_14px_0px_rgba(255,107,0,0.35)] hover:bg-[#e55f00] transition-colors duration-200 whitespace-nowrap"
          >
            Join ZookOut — Free
          </a>
          <a
            href="#"
            className="backdrop-blur-sm bg-white/40 border border-[#d9d5cb] text-black font-semibold text-base px-9 py-4 rounded-full hover:bg-white/60 transition-colors duration-200 whitespace-nowrap"
          >
            See How It Works
          </a>
        </div>
        <ul className="text-white text-xl font-normal list-disc pl-5 space-y-1">
          <li>No upfront Costs.</li>
          <li>NO Commission.</li>
          <li>Only Sales.</li>
        </ul>
      </div>
      <div className="relative z-10 max-w-[890px] mx-auto mt-20 px-4">
        <div className="bg-white/10 border border-[#b1b1b1] rounded-2xl p-3 backdrop-blur-sm absolute">
          <div className="bg-white rounded-t-xl overflow-hidden">
            <div className="bg-white border-b border-gray-100 px-4 py-2.5 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 bg-black/5 rounded-md py-1 px-3 text-center">
                <span className="text-[9px] text-white/30 font-normal">app.zookout.com/dashboard</span>
              </div>
            </div>
            <div className="overflow-hidden">
              <img
                src="/Assets/home/dashboard.png"
                alt="ZookOut Dashboard"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
