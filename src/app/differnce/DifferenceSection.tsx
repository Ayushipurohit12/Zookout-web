"use client";


export default function DifferenceSection() {
  return (
    <section className="bg-[#f5f2ec] py-16 px-12">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-4 h-[1.5px] bg-[#7a7a75] rounded" />
            <span className="text-[#7a7a75] text-xs font-semibold tracking-widest uppercase">
              The Difference
            </span>
          </div>
          <h2 className="text-[#0f0f0e] font-['GT_Walsheim_Trial',sans-serif] text-[42px] tracking-tight font-normal">
            Stop Paying for Fake Growth
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-[#e8e4db] border border-[#d9d5cb] rounded-[32px] overflow-hidden">
            <div className="h-[300px] bg-[#d5d0c7] overflow-hidden flex items-center justify-center">
              <img src="/Assets/difference/oldway.png" alt="Old Way" className="w-full h-full object-cover" />
            </div>
            <div className="p-8">
              <span className="bg-black/7 text-[#7a7a75] text-[11px] font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-5 inline-block">
                Old Way
              </span>
              <h3 className="text-[#0f0f0e] text-[22px] font-semibold tracking-tight mb-2">
                Expensive Platforms
              </h3>
              <p className="text-[#7a7a75] text-sm leading-relaxed mb-5">
                Pay 20-30% commission. Get fake bookings. Zero control over your brand.
              </p>
              <div className="flex flex-col gap-2">
                {["High commission fees", "Unverified customers", "Race to bottom pricing"].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <div className="bg-[#ffecec] rounded-lg w-5 h-5 flex items-center justify-center shrink-0">
                      <span className="text-[#e57373] text-[10px] font-bold">✗</span>
                    </div>
                    <span className="text-[#7a7a75] text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-[#0f0f0e] border border-[#d9d5cb] rounded-[32px] overflow-hidden">
            <div className="h-[300px] bg-[#0d0d0c] overflow-hidden flex items-center justify-center relative">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(26,60,255,0.25)_0%,transparent_70%)]" />
              <img src="/Assets/difference/newway.png" alt="New Way" className="w-full h-full object-cover " />
            </div>
            <div className="p-8">
              <span className="bg-white/10 text-white/55 text-[11px] font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-5 inline-block">
                New Way
              </span>
              <h3 className="text-white text-[22px] font-semibold tracking-tight mb-2">
                ZookOut Platform
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-5">
                Zero commission. 100% verified walk-ins. Full control over your offers.
              </p>
              <div className="flex flex-col gap-2">
                {["No commission ever", "Verified customers only", "You set the offers"].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <div className="bg-[rgba(52,211,153,0.15)] rounded-lg w-5 h-5 flex items-center justify-center shrink-0">
                      <span className="text-[#34d399] text-[10px] font-bold">✓</span>
                    </div>
                    <span className="text-white/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
