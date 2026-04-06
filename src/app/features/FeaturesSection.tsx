"use client";

const features = [
  {
     icon: "/Assets/features/eye-scan.svg",
    title: "QR Redemption",
    desc: "Customers scan. You verify. That's it.",
  },
  {
    icon: "/Assets/features/set-up.svg",
    title: "Local Discovery",
    desc: "Show up when customers are looking for you.",
  },
  {
    icon: "/Assets/features/check.svg",
    title: "Verified Customers",
    desc: "No fake bookings. Ever. 100% real people.",
  },
  {
    icon: "/Assets/features/chat-bar.svg",
    title: "Dashboard",
    desc: "See everything in real-time. No delays.",
  },
  {
     icon: "/Assets/features/stop-circle.svg",
    title: "Zero Commission",
    desc: "Free forever. No hidden fees. Period.",
  },
  {
    icon: "/Assets/features/discovery.svg",
    title: "5-Min Setup",
    desc: "Create account, add offers, go live instantly.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-white py-20 px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-['GT_Walsheim_Trial',sans-serif] text-[42px] font-normal tracking-tight text-[#0f0f0e] max-w-[394px] mx-auto leading-tight">
            Everything You Need to Drive Walk-ins
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-[#e2ddd5] rounded-3xl overflow-hidden">
          {features.map((f, i) => {
            const isLastRow = i >= 3;
            const isRightEdge = (i + 1) % 3 === 0;
            return (
              <div
                key={f.title}
                className={`p-9 ${!isRightEdge ? "border-r border-[#e2ddd5]" : ""} ${!isLastRow ? "border-b border-[#e2ddd5]" : ""}`}
              >
                <div className="bg-[#f5f2ec] w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-6">
                  <img src={f.icon} alt={f.title} className="w-6 h-6" />
                </div>
                <h3 className="text-[#0f0f0e] font-semibold text-lg tracking-tight mb-2">{f.title}</h3>
                <p className="text-[#7a7a75] text-sm leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
