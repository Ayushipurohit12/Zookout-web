"use client";

import { useState } from "react";

const steps = [
  {
    number: "01",
    title: "Create Offer",
    desc: "Set your discount, validity period, and max redemptions. Takes under 30 seconds.",
  },
  {
    number: "02",
    title: "Customers Discover You",
    desc: "Your offers show up when nearby customers open ZookOut. Zero advertising cost.",
  },
  {
    number: "03",
    title: "Scan & Redeem",
    desc: "Customer scans at your counter. You verify. They redeem. Simple as that.",
  },
  {
    number: "04",
    title: "Track & Grow",
    desc: "See real-time walk-ins, redemptions, and revenue impact. Adjust offers anytime.",
  },
];

const featuredOffers = [
  { icon: "☕", name: "0% Off Coffee", dist: "0.1km away", pct: "10%" },
  { icon: "💇", name: "Free Hair Wash", dist: "0.2km away", pct: "20%" },
  { icon: "🍕", name: "Buy 1 Get 1 Pizza", dist: "0.3km away", pct: "30%" },
];

const weeklyStats = [
  { label: "Mon", value: 42, highlight: false },
  { label: "Tue", value: 55, highlight: false },
  { label: "Wed", value: 34, highlight: false },
  { label: "Thu", value: 78, highlight: true },
  { label: "Fri", value: 48, highlight: false },
  { label: "Sat", value: 92, highlight: true },
  { label: "Sun", value: 64, highlight: false },
];

export default function OffersSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="bg-[#f5f2ec] py-20 px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-['GT_Walsheim_Trial',sans-serif] text-[64px] font-normal tracking-tight text-[#0f0f0e] leading-tight mb-2">
            Launch Offers in Seconds
          </h2>
          <p className="text-[#7a7a75] text-lg">No ads. No setup cost. Just go live.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="flex-1 relative rounded-[2rem] bg-[#0f0f10] border border-white/10 p-8 shadow-[0_28px_80px_rgba(15,15,14,0.25)]">
            {/* <div className="relative w-full overflow-hidden rounded-[2rem] bg-[#1C1C1A] border border-white/10 p-8 shadow-[0_28px_80px_rgba(15,15,14,0.25)]">
               <div className="pointer-events-none absolute -left-16 -top-16 h-72 w-72 rounded-full bg-[#ff6b00]/10 blur-3xl" />
              <div className="pointer-events-none absolute -right-10 -bottom-10 h-56 w-56 rounded-full bg-white/10 blur-3xl" /> */}
                 {activeStep === 0 && (
                  <div className="relative w-full overflow-hidden rounded-[2rem] bg-[#1C1C1A] border border-white/10 p-8 shadow-[0_28px_80px_rgba(15,15,14,0.25)]">
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
                <div className="flex gap-4 mb-6">
                  <div className="flex-1">
                    <label className="block text-white/60 text-sm font-medium mb-1.5">Valid Until</label>
                    <div className="border border-white/10 rounded-xl px-4 py-3 bg-white/5">
                      <span className="text-white/60 text-sm">31 Dec 2024</span>
                    </div>
                  </div>
                  <div className="flex-1">
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
                  )}
                {activeStep === 1 && (
                  <div className="relative w-full overflow-hidden rounded-[2rem] bg-[#1C1C1A] border border-white/10 p-8 shadow-[0_28px_80px_rgba(15,15,14,0.25)]">
               <div className="pointer-events-none absolute -left-16 -top-16 h-72 w-72 rounded-full bg-[#ff6b00]/10 blur-3xl" />
              <div className="pointer-events-none absolute -right-10 -bottom-10 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
                <div className="p-5">
                 <p className="text-[10px] uppercase tracking-widest text-[#555] mb-4">
                    Featured Offers Near You
                </p>
              <div className="flex flex-col gap-2.5">
             {featuredOffers.map((o, i) => (
              <div key={i} className="bg-[#1a1a24] rounded-2xl px-4 py-3.5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#22222e] flex items-center justify-center text-xl flex-shrink-0">
                   {o.icon}
                 </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-white">{o.name}</p>
                 <p className="text-xs text-[#555] mt-0.5">{o.dist}</p>
                 </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-emerald-400 leading-none">{o.pct}</p>
                  <p className="text-[11px] text-[#555] mt-1">off</p>
              </div>
                 </div>
              ))}
             </div>
               </div>
             </div>
            )}

            {activeStep === 2 && (
              <div className="relative w-full overflow-hidden rounded-[2rem] bg-[#1C1C1A] border border-white/10 p-8 shadow-[0_28px_80px_rgba(15,15,14,0.25)]">
               <div className="pointer-events-none absolute -left-16 -top-16 h-72 w-72 rounded-full bg-[#ff6b00]/10 blur-3xl" />
              <div className="pointer-events-none absolute -right-10 -bottom-10 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
              <div className="text-center">
                  <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-2xl bg-white text-5xl">
                    <img src="/Assets/offer/eye-scan.svg" alt="Eye Scan" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">Scan to Redeem</h4>
                  <p className="mt-2 text-sm text-white/60">Show this at the counter for customer verification</p>
                  <button className="mt-4 w-full rounded-2xl bg-[#34D39926] py-3 font-semibold text-white transition">
                    ✓ Verified
                  </button>
              </div>
              </div>
            )}
          {activeStep === 3 && (
           <div className="mt-6 mx-auto rounded-2xl bg-[#0f0f12] p-5 space-y-3">
    {/* Stat Cards */}
       <div className="grid grid-cols-2 gap-3">
      <div className="rounded-2xl bg-[#1C1C1A] p-4">
        <p className="text-[11px] uppercase tracking-widest text-slate-500">Walk-ins</p>
        <p className="mt-3 text-2xl font-semibold text-white">342</p>
        <p className="mt-1 text-sm text-emerald-400">↑ 18%</p>
      </div>
      <div className="rounded-2xl bg-[#1C1C1A] p-4">
        <p className="text-[11px] uppercase tracking-widest text-slate-500">Revenue</p>
        <p className="mt-3 text-2xl font-semibold text-white">₹64K</p>
        <p className="mt-1 text-sm text-emerald-400">↑ 24%</p>
      </div>
    </div>

    {/* Bar Chart */}
    <div className="rounded-2xl bg-[#1C1C1A] p-4">
      <p className="text-sm font-medium text-white mb-4">This Week</p>
      <div className="flex items-end gap-3 h-28 mb-4">
        {weeklyStats.map((item) => (
          <div key={item.label} className="flex-1 flex flex-col items-center gap-2 h-full">
            <div className="w-full flex items-end h-full">
              <div
                className={`w-full rounded-t ${item.highlight ? "bg-[#FF6B00]" : "bg-[#1A3CFF80]"}`}
                style={{ height: `${item.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)}
          </div>

          <div className="flex-1 space-y-4">
            {steps.map((step, i) => (
              <div key={step.title} className="relative">
                {i < steps.length - 1 && (
                  <div className={`absolute bottom-0 left-0 right-0 h-px transition-colors duration-300 ${activeStep === i ? "bg-[#1A3CFF]" : "bg-[#e2ddd5]"}`} />
                )}
                <div 
                  className={`flex gap-5 pb-8 transition-all duration-300 cursor-pointer ${activeStep === i ? "opacity-100" : "opacity-40"}`}
                  onClick={() => setActiveStep(i)}
                >
                  <div className="pt-1.5">
                    {activeStep === i && (
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
