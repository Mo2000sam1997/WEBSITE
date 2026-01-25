import Hero from "@/components/Hero";
import CategoryCards from "@/components/CategoryCards";
import HowItWorks from "@/components/HowItWorks";
import AppGrid from "@/components/AppGrid";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import FloatingBlocks from "@/components/FloatingBlocks";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary noise-overlay relative">
      <FloatingBlocks />
      <Navbar />
      <Hero />
      <CategoryCards />
      <AppGrid />
      <CTABanner />
      <HowItWorks />
      <Footer />
    </main>
  );
}
