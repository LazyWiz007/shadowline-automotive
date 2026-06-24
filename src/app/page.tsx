import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RaceReady from "@/components/RaceReady";
import VisualSpecs from "@/components/VisualSpecs";
import PerformanceSection from "@/components/PerformanceSection";
import Gallery from "@/components/Gallery";
import ExtremePerformance from "@/components/ExtremePerformance";
import ProductShowcase from "@/components/ProductShowcase";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProductShowcase />
      <RaceReady />
      <PerformanceSection />
      <VisualSpecs />
      <ExtremePerformance />
      <Gallery />
      <Footer />
    </main>
  );
}
