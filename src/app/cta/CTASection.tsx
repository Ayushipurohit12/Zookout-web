"use client";

export default function CTASection() {
  return (
    <section className="bg-[#f5f2ec] pt-24 pb-24 px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="relative bg-[#0f0f0e] rounded-t-[32px] border-t border-white/10 overflow-hidden py-20 px-16 text-center">
          <div 
            className="absolute inset-0" 
            style={{ background: 'radial-gradient(50% 60% at 80% 30%, rgba(255, 107, 0, 0.18) 0%, rgba(0, 0, 0, 0) 55%), radial-gradient(70% 80% at 30% 50%, rgba(26, 60, 255, 0.28) 0%, rgba(0, 0, 0, 0) 60%)' }}
          />
          <div className="relative z-10">
            <h2 className="font-['GT_Walsheim_Trial',sans-serif] text-[52px] font-normal tracking-tight text-white leading-tight mb-4">
              Start getting <br />
              <span className="text-[#ff6b00]">real customers today</span>
            </h2>
            <p className="text-white/55 text-base mb-10">
              Join 500+ businesses growing with ZookOut
            </p>
            <div className="flex items-center justify-center gap-4 mb-6">
              <a
                href="#"
                className="bg-[#ff6b00] text-white font-semibold text-base px-8 py-4 rounded-full shadow-[0px_3px_14px_0px_rgba(255,107,0,0.4)] hover:bg-[#e55f00] transition-colors duration-200"
              >
                Join Free — No Credit Card →
              </a>
              <a
                href="#"
                className="border border-[#d9d5cb] text-white font-semibold text-base px-8 py-4 rounded-full hover:bg-white/10 transition-colors duration-200"
              >
                Talk to Us
              </a>
            </div>
            <p className="text-white/30 text-sm">
              No setup fees · No monthly fees · No commission           
           </p>
          </div>
        </div>
      </div>
    </section>
  );
}
