"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative bg-black min-h-screen pt-24 pb-32 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute right-0 top-0 h-full w-auto max-w-none"
          animate={{
            y: [0, -20, 0],
            opacity: [0.7, 0.85, 0.7]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <img
            src="/Assets/home/hoomebg.svg"
            alt=""
            className="h-full w-auto max-w-none object-cover"
          />
        </motion.div>
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"
          animate={{
            background: [
              "linear-gradient(to right, rgb(0,0,0), rgb(0,0,0,0.8), transparent)",
              "linear-gradient(to right, rgb(10,10,10), rgb(0,0,0,0.75), transparent)",
              "linear-gradient(to right, rgb(0,0,0), rgb(0,0,0,0.8), transparent)"
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-12">
        <div className="max-w-[652px] mx-auto md:mx-0">
          <motion.h1
            className="text-white font-['GT_Walsheim_Trial',sans-serif] text-4xl md:text-[64px] leading-[1.06] tracking-[-1.3px] font-normal mb-6 text-center md:text-left"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Bring Real Customers. Pay nothing.
          </motion.h1>
        </div>
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 md:gap-6 mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.a
            href="#"
            className="bg-[#ff6b00] text-white font-semibold text-base px-9 py-4 rounded-full shadow-[0px_3px_14px_0px_rgba(255,107,0,0.35)] hover:bg-[#e55f00] transition-colors duration-200 whitespace-nowrap"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join ZookOut — Free
          </motion.a>
          <motion.a
            href="#"
            className="backdrop-blur-sm bg-white/40 border border-[#d9d5cb] text-black font-semibold text-base px-9 py-4 rounded-full hover:bg-white/60 transition-colors duration-200 whitespace-nowrap"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            See How It Works
          </motion.a>
        </motion.div>
        <motion.ul
          className="text-white text-lg md:text-xl font-normal list-none md:list-disc pl-0 md:pl-5 space-y-1 text-center md:text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <li>No upfront Costs.</li>
          <li>NO Commission.</li>
          <li>Only Sales.</li>
        </motion.ul>
      </div>
      <div className="relative z-10 max-w-[890px] mx-auto mt-20 px-4">
        <div className="bg-white/10 border border-[#b1b1b1] rounded-2xl p-3 backdrop-blur-sm absolute">
          <div className="bg-white rounded-t-xl overflow-hidden">
            <div className="bg-white border-b border-gray-100 px-4 py-2.5 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 bg-black/5 rounded-md py-1 px-3 text-center">
                <span className="text-[9px] text-white/30 font-normal">app.zookout.com/dashboard</span>
              </div>
            </div>
            <div className="overflow-hidden">
              <img
                src="/Assets/home/dashboard.png"
                alt="ZookOut Dashboard"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
