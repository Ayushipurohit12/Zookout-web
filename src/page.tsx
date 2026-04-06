import CTASection from "./app/cta/CTASection";
import DifferenceSection from "./app/differnce/DifferenceSection";
import FAQSection from "./app/FAQ/FAQSection";
import FeaturesSection from "./app/features/FeaturesSection";
import Footer from "./app/footer/Footer";
import HeroSection from "./app/Hero/HeroSection";
import MerchantsSection from "./app/merchants/MerchantsSection";
import Navbar from "./app/navbar/Navbar";
import OffersSection from "./app/offers/OffersSection";
import StatsSection from "./app/stats/StatsSection";
import TestimonialsSection from "./app/testimonials/TestimonialsSection";
import WinWinSection from "./app/win/WinWinSection";



export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <MerchantsSection />
      <StatsSection />
      <DifferenceSection  />
      <WinWinSection />
      <FeaturesSection />
      <OffersSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}