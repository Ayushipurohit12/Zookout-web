"use client";

// Figma node: 2:137 — Container section
// bg: #f5f2ec | width: 1200px | height: 141px
// 4 stat columns, each 300.27px wide (last: 299.18px)
// Each column: large number (GT Walsheim, 56-60px, #0f0f0e) + label (Inter Medium, 14px, #7a7a75)
// Vertical dividers between columns (border-r border-[#e2ddd5])

const stats = [
  {
    // Figma node 2:140: "2.4K+" — GT Walsheim Trial Rg, 60px, leading ~60px
    value: (
      <>
        2.4<span className="text-[#ff6b00]">K+</span>
      </>
    ),
    // Figma node 2:142: "Active Users" — Inter Medium, 14px
    label: "Active Users",
  },
  {
    // Figma node 2:145: "98%" — GT Walsheim Trial Rg, 60px
    value: (
      <>
        98<span className="text-[#ff6b00]">%</span>
      </>
    ),
    // Figma node 2:147: "Verified Paying Customers"
    label: "Verified Paying Customers",
  },
  {
    // Figma node 2:150: "₹0" — GT Walsheim Trial Rg, 60px
    value: "₹0",
    // Figma node 2:153: "₹0 Platform Fees"
    label: "₹0 Platform Fees",
  },
  {
    // Figma node 2:156: "5min" — GT Walsheim Trial Rg, 60px
    value: (
      <>
        5<span className="text-[#ff6b00]">min</span>
      </>
    ),
    // Figma node 2:158: "Go Live in 5 Minutes"
    label: "Go Live in 5 Minutes",
  },
];

export default function StatsSection() {
  return (
    // Figma: bg-[#f5f2ec], height 141px, full 1200px
    <section className="bg-[#FFFFFF]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            // Figma: each column has border-r on all except last; py matches ~28px top offset + 19.5px label
            className={`flex flex-col items-center justify-center py-7 ${
              i < stats.length - 1
                ? "border-r border-[#e2ddd5]"
                : ""
            }`}
          >
            {/* Figma: large stat value — GT Walsheim Trial Rg, ~56-60px, color #0f0f0e, leading ~60px */}
            <span
              className="font-['GT_Walsheim_Trial',sans-serif] font-normal text-[56px] leading-[60px] tracking-[-1px] text-[#0f0f0e] mb-1"
            >
              {s.value}
            </span>

            {/* Figma: stat label — Inter Medium, 14px, leading 20px, color #7a7a75 */}
            <span className="font-['Inter',sans-serif] font-medium text-[13px] leading-[20px] text-[#7a7a75] text-center">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
