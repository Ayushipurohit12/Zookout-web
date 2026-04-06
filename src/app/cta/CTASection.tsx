"use client";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="bg-[#f5f2ec] pt-16 md:pt-24 pb-16 md:pb-24 px-4 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="relative bg-[#0f0f0e] rounded-t-[32px] border-t border-white/10 overflow-hidden py-12 md:py-20 px-6 md:px-16 text-center">
          <div 
            className="absolute inset-0" 
            style={{ background: 'radial-gradient(50% 60% at 80% 30%, rgba(255, 107, 0, 0.18) 0%, rgba(0, 0, 0, 0) 55%), radial-gradient(70% 80% at 30% 50%, rgba(26, 60, 255, 0.28) 0%, rgba(0, 0, 0, 0) 60%)' }}
          />
          <div className="relative z-10">
            <motion.h2
              className="font-['GT_Walsheim_Trial',sans-serif] text-3xl md:text-[52px] font-normal tracking-tight text-white leading-tight mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Start getting <br />
              <span className="text-[#ff6b00]">real customers today</span>
            </motion.h2>
            <motion.p
              className="text-white/55 text-sm md:text-base mb-8 md:mb-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Join 500+ businesses growing with ZookOut
            </motion.p>
            <motion.div
              className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <a
                href="#"
                className="bg-[#ff6b00] text-white font-semibold text-sm md:text-base px-6 md:px-8 py-3 md:py-4 rounded-full shadow-[0px_3px_14px_0px_rgba(255,107,0,0.4)] hover:bg-[#e55f00] transition-colors duration-200 text-center"
              >
                Join Free — No Credit Card →
              </a>
              <a
                href="#"
                className="border border-[#d9d5cb] text-white font-semibold text-sm md:text-base px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-white/10 transition-colors duration-200 text-center"
              >
                Talk to Us
              </a>
            </motion.div>
            <motion.p
              className="text-white/30 text-xs md:text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              viewport={{ once: true }}
            >
              No setup fees · No monthly fees · No commission           
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
