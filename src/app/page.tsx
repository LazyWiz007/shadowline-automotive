import Hero from "@/components/Hero";
import Header from "@/components/Header";
import TechSpecs from "@/components/TechSpecs";
import Footer from "@/components/Footer";
import RaceReady from "@/components/RaceReady";
import VisualSpecs from "@/components/VisualSpecs";
import PerformanceSection from "@/components/PerformanceSection";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Header />
      <Hero />
      <RaceReady />
      <VisualSpecs />
      <PerformanceSection />
      <Gallery />
      <Footer />
    </main>
  );
}
