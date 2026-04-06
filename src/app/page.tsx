import CTASection from "./cta/CTASection";
import DifferenceSection from "./differnce/DifferenceSection";
import FAQSection from "./FAQ/FAQSection";
import FeaturesSection from "./features/FeaturesSection";
import Footer from "./footer/Footer";
import HeroSection from "./Hero/HeroSection";
import MerchantsSection from "./merchants/MerchantsSection";
import Navbar from "./navbar/Navbar";
import OffersSection from "./offers/OffersSection";
import StatsSection from "./stats/StatsSection";
import TestimonialsSection from "./testimonials/TestimonialsSection";
import WinWinSection from "./win/WinWinSection";



export default function Page() {
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