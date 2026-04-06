"use client";

// Figma node: 2:84 — Container section
// bg: #f5f2ec | width: 1200px | height: 252.5px
// Label: "Merchants already on ZookOut" (Inter Medium, #7a7a75, 11px)
// Icons row: 7 categories, each 138px wide, height ~141-156px

const merchants = [
  {
    icon: "/Assets/merchants/salon.svg",
    label: "Salon",
    desc: "Fill your chair with verified walk-ins",
  },
  {
    icon: "/Assets/merchants/Spa.svg",
    label: "Spa",
    desc: "More people more earnings",
  },
  {
    icon: "/Assets/merchants/activities.svg",
    label: "Activities",
    desc: "Boost events turnout without fees",
  },
  {
    icon: "/Assets/merchants/Healthcare.svg",
    label: "Healthcare",
    desc: "Find real customers with zookout",
  },
  {
    icon: "/Assets/merchants/hotels.svg",
    label: "Travel",
    desc: "Fill your hotels in minutes",
  },
  {
    icon: "/Assets/merchants/nightlife.svg",
    label: "Nightlife",
    desc: "Pack your bar with real customers",
  },
  {
    icon: "/Assets/merchants/Food.svg",
    label: "Food",
    desc: "Find real customers step in your restaurant",
  },
];

export default function MerchantsSection() {
  return (
    // Figma: bg-[#f5f2ec], pt-8 pb-10 matching ~64px container offset
    <section className="bg-[#0F0F0E] pt-8 pb-10">
      <div className="max-w-[1200px] mx-auto px-0">

        {/* Figma node 2:85 — label row, height 16.5px, mt 32px from top */}
        {/* text: Inter Medium, 11px, #7a7a75, letter-spacing normal, uppercase */}
        <p className="text-center font-['Inter',sans-serif] font-medium text-[11px] text-[#7a7a75] tracking-[0.2px] mb-6">
          Merchants already on ZookOut
        </p>

        {/* Figma node 2:87 — icons container, height 156px */}
        {/* 7 children each ~138px wide, flex row, space-between from -12px to 1212px */}
        <div className="flex items-start justify-between">
          {merchants.map((m) => (
            // Figma: each Container 138×141px, flex-col, items-center
            <div
              key={m.label}
              className="flex flex-col items-center text-center w-[138px]"
            >
              {/* Figma: inner container 93×95px with rounded-rect icon 61×47 at y=8 */}
              <div className="bg-[#FFFFFF14] rounded-[8px] h-[56px] justify-center flex flex-col items-center w-[70px]">
                {/* Icon box — white bg, rounded-[8px], 61×47px, shadow-sm */}
                <div className=" flex items-center justify-center text-[22px] shadow-[0px_1px_4px_rgba(0,0,0,0.08)] mb-2">
                  <img src={m.icon} alt={m.label} className="w-7 h-auto" />
                </div>
                {/* Figma node: label text frame 54×32px (Salon), Inter SemiBold ~11-12px */}
                {/* color: #0f0f0e, centered */}
                <span className="font-['Inter',sans-serif] font-semibold text-[11.5px] leading-[16px] text-[#FFFFFF] text-center">
                  {m.label}
                </span>
              </div>

              {/* Figma node: desc text 138×34px (2-line), Inter Regular ~10px, color #7a7a75 */}
              <p className="font-['Inter',sans-serif] font-normal text-[10px] leading-[17px] text-[#FFFFFF] text-center mt-1 w-full">
                {m.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
