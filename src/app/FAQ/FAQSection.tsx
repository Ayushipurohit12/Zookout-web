"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Is it really free?",
    a: "No. There is no fee to apply.",
  },
  {
    q: "How does ZookOut earn?",
    a: "Early to growth stage. We welcome startups at various stages of development.",
  },
  {
    q: "What kind of customers?",
    a: "Yes. Indian-origin founders globally are eligible to apply.",
  },
  {
    q: "Can I control offers?",
    a: "Typically 6–8 weeks from application to the final pitch event.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[#100501] py-20 px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className=" p-10">
          <h2 className="font-['GT_Walsheim_Trial',sans-serif] text-[72px] text-center font-normal tracking-tight text-[#FFFFFF] mb-10">
            Frequently Asked Questions
          </h2>
          <div className="divide-y divide-[#e2ddd5]">
            {faqs.map((faq, i) => (
              <div key={faq.q} className="py-5">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between text-left group"
                >
                  <span className="text-[#FFFFFF] font-semibold text-lg">{faq.q}</span>
                  <span
                    className={`text-[#7a7a75] text-xl transition-transform duration-200 ${open === i ? "rotate-45" : ""
                      }`}
                  >
                    +
                  </span>
                </button>
                {open === i && (
                  <p className="mt-3 text-[#7a7a75] text-sm leading-relaxed max-w-[760px]">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}