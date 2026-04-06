"use client";
import { motion } from "framer-motion";

export default function WinWinSection() {
  return (
    <section className="bg-[#FFFFFF] pt-8 md:pt-14">
      <div className="max-w-[1200px] mx-auto px-4 md:px-12">
        <div className="text-center mb-8 md:mb-14 max-w-[920px] mx-auto">
          <h2 className="font-['GT_Walsheim_Trial',sans-serif] font-normal text-3xl md:text-[52px] leading-[1.22] tracking-[-1px] text-[#0f0f0e] mb-3">
            A Win-Win Model. <br /> <span className="text-[#ff6b00]">No Money Involved.</span>
          </h2>
          <span className="font-['Inter',sans-serif] font-normal text-base md:text-[20px] leading-[30px] text-[#000000]">
            You don't pay us. You partner with us.
          </span>
        </div>
        <div className="relative rounded-[24px] overflow-hidden mb-6 md:mb-10 h-64 md:h-[417px] bg-[#0f0f0e]">
          <img src="/Assets/winwin/map.png" alt="Map" className="w-full h-full object-cover opacity-50" />
          <svg
            className="absolute inset-0 w-full h-full opacity-30"
            viewBox="0 0 1064 440"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.line x1="205" y1="207" x2="477" y2="222" stroke="#ff6b00" strokeWidth="1.5" strokeDasharray="5 4" animate={{ pathLength: [0, 1] }} transition={{ duration: 2, delay: 0.5 }} />
            <motion.line x1="477" y1="222" x2="758" y2="182" stroke="#ff6b00" strokeWidth="1.5" strokeDasharray="5 4" animate={{ pathLength: [0, 1] }} transition={{ duration: 2, delay: 1 }} />
            <motion.line x1="477" y1="222" x2="810" y2="305" stroke="#ff6b00" strokeWidth="1.5" strokeDasharray="5 4" animate={{ pathLength: [0, 1] }} transition={{ duration: 2, delay: 1.5 }} />
            <motion.line x1="350" y1="165" x2="477" y2="222" stroke="#ff6b00" strokeWidth="1.5" strokeDasharray="5 4" animate={{ pathLength: [0, 1] }} transition={{ duration: 2, delay: 2 }} />
            <motion.line x1="477" y1="222" x2="690" y2="282" stroke="#ff6b00" strokeWidth="1.5" strokeDasharray="5 4" animate={{ pathLength: [0, 1] }} transition={{ duration: 2, delay: 2.5 }} />
            <motion.circle cx="347" cy="271" r="6.5" fill="#ff6b00" opacity="0.9" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} />
            <motion.circle cx="713" cy="147" r="6.5" fill="#ff6b00" opacity="0.9" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
            <motion.circle cx="366" cy="161" r="6.5" fill="#ff6b00" opacity="0.9" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} />
            <motion.circle cx="633" cy="164" r="6.5" fill="#ff6b00" opacity="0.9" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 1.5 }} />
            <motion.circle cx="676" cy="284" r="6.5" fill="#ff6b00" opacity="0.9" animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 2 }} />
          </svg>
          <div className="absolute top-1/2 left-[44%] -translate-x-1/2 -translate-y-1/2 z-20">
            <motion.div className="rounded-[18px] flex items-center justify-center" whileHover={{ scale: 1.1 }}>
              <img src="/Assets/winwin/zoo.png" alt="ZookOut Logo" className="w-12 h-10 md:w-22 md:h-20 object-contain" />
            </motion.div>
          </div>
          <div className="absolute bottom-[44px] md:bottom-[88px] right-[100px] md:right-[200px] bg-white rounded-xl px-2 md:px-3 py-1 md:py-1.5 shadow-lg flex items-center gap-2 z-10">
            <motion.div className="w-6 h-6 md:w-8 md:h-8 bg-[#371400] rounded-lg flex items-center justify-center text-base" whileHover={{ rotate: 10 }}>
              <img src="/Assets/winwin/Spafinal.svg" alt="ZookOut Logo" className="w-4 h-4 md:w-6 md:h-6 object-contain" />
            </motion.div>
            <div>
              <p className="text-[9px] md:text-[11px] font-semibold text-[#0f0f0e] leading-[15px]">Le bliss Spa</p>
              <p className="text-[8px] md:text-[10px] text-green-500 leading-[12px]">● Active</p>
            </div>
          </div>
          <div className="absolute top-[22px] md:top-[44px] right-[50px] md:right-[100px] bg-white rounded-xl px-2 md:px-3 py-1 md:py-1.5 shadow-lg flex items-center gap-2 z-10">
            <motion.div className="w-6 h-6 md:w-8 md:h-8 bg-[#371400] rounded-lg flex items-center justify-center text-base" whileHover={{ rotate: -10 }}>
              <img src="/Assets/winwin/meetup.svg" alt="ZookOut Logo" className="w-4 h-4 md:w-6 md:h-6 object-contain" />
            </motion.div>
            <div>
              <p className="text-[9px] md:text-[11px] font-semibold text-[#0f0f0e] leading-[15px]">Let's meet up</p>
              <p className="text-[8px] md:text-[10px] text-green-500 leading-[12px]">● Active</p>
            </div>
          </div>
          <div className="absolute top-[32px] md:top-[64px] left-[80px] md:left-[160px] bg-white rounded-xl px-2 md:px-3 py-1 md:py-1.5 shadow-lg flex items-center gap-2 z-10">
            <motion.div className="w-6 h-6 md:w-8 md:h-8 bg-[#371400] rounded-lg flex items-center justify-center text-base" whileHover={{ scale: 1.1 }}>
              <img src="/Assets/winwin/studio.svg" alt="ZookOut Logo" className="w-4 h-4 md:w-6 md:h-6 object-contain" />
            </motion.div>
            <div>
              <p className="text-[9px] md:text-[11px] font-semibold text-[#0f0f0e] leading-[15px]">Studio MV</p>
              <p className="text-[8px] md:text-[10px] text-green-500 leading-[12px]">● Active</p>
            </div>
          </div>
          <div className="absolute bottom-[30px] md:bottom-[72px] left-[50px] md:left-[100px] z-10 text-center">
            <div className="bg-[#1A3CFF] rounded-xl px-2 md:px-3 py-1 mb-1">
              <p className="text-[#FFFFFF] text-[7px] md:text-[9px] font-medium">Looking for deals</p>
            </div>
            <div className="flex justify-center">
              <motion.div className="flex items-center justify-center text-lg" whileHover={{ y: -5 }}>
                <img src="/Assets/winwin/Container.svg" alt="ZookOut Logo" className="w-8 h-8 md:w-11 md:h-11 object-contain" />
              </motion.div>
            </div>
          </div>
          <div className="absolute top-[45px] md:top-[90px] right-[30px] md:right-[60px] z-10 text-center">
            <div className="bg-[#1A3CFF] rounded-xl px-2 md:px-3 py-1 mb-1">
              <p className="text-[#FFFFFF] text-[7px] md:text-[9px] font-semibold">Found a deal!</p>
            </div>
            <div className="flex justify-center">
              <motion.div className="flex items-center justify-center text-lg" whileHover={{ y: -5 }}>
                <img src="/Assets/winwin/Container.svg" alt="ZookOut Logo" className="w-8 h-8 md:w-11 md:h-11 object-contain" />
              </motion.div>
            </div>
          </div>
          <div className="absolute bottom-[30px] md:bottom-[60px] left-[40%] md:left-[52%] z-10 text-center">
            <div className="bg-[#1A3CFF] rounded-xl px-2 md:px-3 py-1 mb-1">
              <p className="text-[#FFFFFF] text-[7px] md:text-[9px] font-medium">Nearby deals</p>
            </div>
            <div className="flex justify-center">
              <motion.div className="flex items-center justify-center text-lg" whileHover={{ y: -5 }}>
                <img src="/Assets/winwin/Container.svg" alt="ZookOut Logo" className="w-8 h-8 md:w-11 md:h-11 object-contain" />
              </motion.div>
            </div>
          </div>
        </div>
        <div className="bg-[#000000] border border-[#FFFFFF] rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-3">
          <div className="px-4 md:px-8 py-4 md:py-6 relative">
            <div className="absolute right-0 top-4 md:top-6 bottom-4 md:bottom-6 w-px bg-[#e2ddd5] md:block hidden" />
            <h4 className="font-['Inter',sans-serif] font-semibold text-sm md:text-[17px] leading-[27px] text-[#FFFFFF] mb-2 md:mb-3">
              We bring customers to your business
            </h4>
            <p className="font-['Inter',sans-serif] font-normal text-xs md:text-[13px] leading-[22px] text-[#6C6C6C]">
              Real, verified walk-in customers from your local area — ready to spend.
            </p>
          </div>
          <div className="px-4 md:px-8 py-4 md:py-6 relative flex items-center justify-center">
            <div className="absolute right-0 top-4 md:top-6 bottom-4 md:bottom-6 w-px bg-[#e2ddd5] md:block hidden" />
            <div className="space-y-2 md:space-y-3 w-full">
              {[
                "We Bring Customers",
                "You Offer Deals",
                "You Grow Revenue",
              ].map((item) => (
                <motion.div key={item} className="flex items-center gap-2 md:gap-3 bg-white border border-[#e2ddd5] rounded-xl px-3 md:px-4 py-2 md:py-3 shadow-sm transition-all hover:border-[#ff6b00]/30 hover:shadow-md" whileHover={{ scale: 1.02 }}>
                  <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-[#15A248] shrink-0" />
                  <span className="font-['Inter',sans-serif] font-medium text-xs md:text-[13px] leading-[15px] text-[#0f0f0e]">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="px-4 md:px-8 py-4 md:py-6">
            <h4 className="font-['Inter',sans-serif] font-semibold text-sm md:text-[17px] leading-[27px] text-[#FFFFFF] mb-2 md:mb-3">
              You give exclusive deals &amp; offers
            </h4>
            <p className="font-['Inter',sans-serif] font-normal text-xs md:text-[13px] leading-[22px] text-[#6C6C6C]">
              Irresistible vouchers &amp; discounts that attract customers to walk in.
            </p>
          </div>
        </div>
        <p className="text-center font-['Inter',sans-serif] font-semibold text-lg md:text-[22px] leading-[41px] text-[#0f0f0e] mt-6 md:mt-10 tracking-[-0.2px]">
          <span className="text-[#ff6b00]">Real Customers.</span> Irresistible Deals. <span className="text-[#ff6b00]">Everyone Wins.</span>
        </p>
      </div>
    </section>
  );
}
