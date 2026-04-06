"use client";
import { motion } from "framer-motion";

const cards = [
  {
    stars: "★★★★★",
    quote:
      "Real customers, simple tool. I can see what's working.",
    name: "Zoomin",
    badge: "Website",
    icon: "/Assets/testimanials/zoomin.svg",
    topBg: { backgroundColor: "#952200" },
  },
  {
    stars: "★★★★★",
    quote:
      "More walk-ins in two weeks than in two months before.",
    name: "Naturals",
    badge: "Salon",
    icon: "/Assets/testimanials/natulals.svg",
    topBg: { background: "linear-gradient(135deg, #1A0030 0%, #1D0035 7.14%, #20003B 14.29%, #240040 21.43%, #270045 28.57%, #2A004B 35.71%, #2E0051 42.86%, #310056 50%, #35005C 57.14%, #380062 64.29%, #3C0068 71.43%, #3F006E 78.57%, #430074 85.71%, #46007A 92.86%, #4A0080 100%)" },
  },
  {
    stars: "★★★★★",
    quote:
      "No commission, no nonsense. The dashboard tells me everything.",
    name: "Lavion",
    badge: "Salon",
    icon: "/Assets/testimanials/lavion.svg",
    topBg: { backgroundColor: "#433504" },
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#F5F2EC] pt-16 md:pt-24 pb-16 md:pb-24">
      <div className="max-w-[1200px] mx-auto px-4 md:px-12">
        <div className="text-center mb-12 md:mb-20 max-w-[680px] mx-auto">
          <blockquote className="font-['GT_Walsheim_Trial',sans-serif] font-normal text-2xl md:text-[34px] leading-[1.35] tracking-[-0.5px] text-[#0F0F0E] mb-5 md:mb-7">
            ZookOut changed how I find new customers — real people, no ads, no commission.
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-[#171717] rounded-full flex items-center justify-center text-lg md:text-xl shrink-0 text-[#ff6b00]">
              ☕
            </div>
            <div className="text-left">
              <p className="font-['Inter',sans-serif] font-semibold text-sm md:text-[14px] leading-[21px] text-[#0F0F0E]">
                Arjun M.
              </p>
              <p className="font-['Inter',sans-serif] font-normal text-xs md:text-[13px] leading-[19.5px] text-[#7A7A75]">
                Owner, Brew &amp; Co. — Koramangala
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {cards.map((card, i) => (
            <motion.div
              key={card.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="border border-white/10 rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
            >
              <div 
                style={card.topBg}
                className="h-32 md:h-[155px] flex items-center justify-center"
              >
                <img src={card.icon} alt={card.name} className="h-10 md:h-12 w-auto object-contain opacity-90" />
              </div>
              <div className="bg-[#FFFFFF] px-4 md:px-6 py-4 md:py-5">
                <p className="text-[#ff6b00] text-xs md:text-[13px] mb-2 tracking-wide">
                  {card.stars}
                </p>
                <p className="font-['Inter',sans-serif] font-normal text-xs md:text-[13px] leading-[23px] text-[#0F0F0E] mb-3 md:mb-4">
                  "{card.quote}"
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-['Inter',sans-serif] font-semibold text-xs md:text-[13px] text-[#0F0F0E]">
                    {card.name}
                  </span>
                  <span className="bg-[#F5F2EC] text-[#7A7A75] font-['Inter',sans-serif] font-medium border border-[#D9D5CB] text-[10px] md:text-[11px] px-2 md:px-3 py-1 rounded-full">
                    {card.badge}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
