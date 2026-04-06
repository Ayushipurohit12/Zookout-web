"use client";
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
    icon: "/Assets/merchants/healthcare.svg",
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
    icon: "/Assets/merchants/food.svg",
    label: "Food",
    desc: "Find real customers step in your restaurant",
  },
];

export default function MerchantsSection() {
  return (
    <section className="bg-[#0F0F0E] pt-8 pb-10">
      <div className="max-w-[1200px] mx-auto px-0">
        <p className="text-center font-['Inter',sans-serif] font-medium text-[11px] text-[#7a7a75] tracking-[0.2px] mb-6">
          Merchants already on ZookOut
        </p>
        <div className="flex items-start justify-between">
          {merchants.map((m) => (
            <div
              key={m.label}
              className="flex flex-col items-center text-center w-[138px]"
            >
              <div className="bg-[#FFFFFF14] rounded-[8px] h-[56px] justify-center flex flex-col items-center w-[70px]">
                <div className=" flex items-center justify-center text-[22px] shadow-[0px_1px_4px_rgba(0,0,0,0.08)] mb-2">
                  <img src={m.icon} alt={m.label} className="w-7 h-auto" />
                </div>
                <span className="font-['Inter',sans-serif] font-semibold text-[11.5px] leading-[16px] text-[#FFFFFF] text-center">
                  {m.label}
                </span>
              </div>
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
