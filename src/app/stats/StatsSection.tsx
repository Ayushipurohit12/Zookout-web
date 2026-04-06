"use client";

const stats = [
  {
    value: (
      <>
        2.4<span className="text-[#ff6b00]">K+</span>
      </>
    ),
    label: "Active Users",
  },
  {
    value: (
      <>
        98<span className="text-[#ff6b00]">%</span>
      </>
    ),
    label: "Verified Paying Customers",
  },
  {
    value: "₹0",
    label: "₹0 Platform Fees",
  },
  {
    value: (
      <>
        5<span className="text-[#ff6b00]">min</span>
      </>
    ),
    label: "Go Live in 5 Minutes",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-[#FFFFFF]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`flex flex-col items-center justify-center py-7 ${
              i < stats.length - 1
                ? "border-r border-[#e2ddd5]"
                : ""
            }`}
          >
            <span
              className="font-['GT_Walsheim_Trial',sans-serif] font-normal text-[56px] leading-[60px] tracking-[-1px] text-[#0f0f0e] mb-1"
            >
              {s.value}
            </span>
            <span className="font-['Inter',sans-serif] font-medium text-[13px] leading-[20px] text-[#7a7a75] text-center">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
