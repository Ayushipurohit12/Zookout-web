"use client";

const steps = [
  {
    number: "01",
    title: "Create Offer",
    desc: "Set your discount, validity period, and max redemptions. Takes under 30 seconds.",
    active: true,
  },
  {
    number: "02",
    title: "Customers Discover You",
    desc: "Your offers show up when nearby customers open ZookOut. Zero advertising cost.",
    active: false,
  },
  {
    number: "03",
    title: "Scan & Redeem",
    desc: "Customer scans at your counter. You verify. They redeem. Simple as that.",
    active: false,
  },
  {
    number: "04",
    title: "Track & Grow",
    desc: "See real-time walk-ins, redemptions, and revenue impact. Adjust offers anytime.",
    active: false,
  },
];

export default function OffersSection() {
  return (
    <section className="bg-[#f5f2ec] py-20 px-12">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="font-['GT_Walsheim_Trial',sans-serif] text-[64px] font-normal tracking-tight text-[#0f0f0e] leading-tight mb-2">
            Launch Offers in Seconds
          </h2>
          <p className="text-[#7a7a75] text-lg">No ads. No setup cost. Just go live.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className=" relative rounded-[2rem] bg-[#0f0f10] border border-white/10 p-8 shadow-[0_28px_80px_rgba(15,15,14,0.25)]">
          <div className="relative w-2/2 overflow-hidden rounded-[2rem] bg-[#1C1C1A] border border-white/10 p-8 shadow-[0_28px_80px_rgba(15,15,14,0.25)]">
            <div className="pointer-events-none absolute -left-16 -top-16 h-72 w-72 rounded-full bg-[#ff6b00]/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-10 -bottom-10 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
            <div className="relative">
              <h3 className="text-white font-semibold text-lg mb-6">Create Your Offer</h3>
              <div className="mb-5">
                <label className="block text-white/60 text-sm font-medium mb-1.5">Offer Title</label>
                <div className="border border-white/10 rounded-xl px-4 py-3 bg-white/5">
                  <span className="text-white/60 text-sm">20% Off Coffee</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-white/60 text-sm font-medium mb-1.5">Valid Until</label>
                  <div className="border border-white/10 rounded-xl px-4 py-3 bg-white/5">
                    <span className="text-white/60 text-sm">31 Dec 2024</span>
                  </div>
                </div>
                <div>
                  <label className="block text-white/60 text-sm font-medium mb-1.5">Max Uses</label>
                  <div className="border border-white/10 rounded-xl px-4 py-3 bg-white/5">
                    <span className="text-white/60 text-sm">100</span>
                  </div>
                </div>
              </div>
              <button className="w-full bg-[#FF6B00] text-white font-semibold text-base py-3.5 rounded-xl hover:bg-[#e55f00] transition-colors duration-200">
                Create Offer
              </button>
            </div>
          </div>
          </div>
          <div className="space-y-0">
            {steps.map((step, i) => (
              <div key={step.title} className="relative">
                {i < steps.length - 1 && (
                  <div className={`absolute bottom-0 left-0 right-0 h-px transition-colors duration-300 ${step.active ? "bg-[#1A3CFF]" : "bg-[#e2ddd5]"}`} />
                )}
                <div className={`flex gap-5 pb-8 transition-all duration-300 ${step.active ? "opacity-100" : "opacity-40"}`}>
                  <div className="pt-1.5">
                    {step.active && (
                      <div className="text-xs font-semibold tracking-widest uppercase mb-1 text-[#1A3CFF]">
                        Active
                      </div>
                    )}
                    <h4 className="text-[#0F0F0E] font-semibold text-xl tracking-tight mb-1.5">
                      {step.title}
                    </h4>
                    <p className="text-[#7a7a75] text-sm leading-relaxed max-w-[400px]">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
