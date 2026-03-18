import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PartnersStrip from "@/components/PartnersStrip";
import AppShowcaseSection from "@/components/AppShowcaseSection";
import SellSection from "@/components/SellSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import GradesSection from "@/components/GradesSection";
import TrustSection from "@/components/TrustSection";
import ReviewsSection from "@/components/ReviewsSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
export default async function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <PartnersStrip />
        <AppShowcaseSection />
        <SellSection />
        <HowItWorksSection />
        <GradesSection />
        <TrustSection />
        <ReviewsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}
