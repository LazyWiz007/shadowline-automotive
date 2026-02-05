import Hero from "@/components/Hero";
import Header from "@/components/Header";
import TechSpecs from "@/components/TechSpecs";
import Footer from "@/components/Footer";
import RaceReady from "@/components/RaceReady";
import VisualSpecs from "@/components/VisualSpecs";
import PerformanceSection from "@/components/PerformanceSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Header />
      <Hero />
      <RaceReady />
      <VisualSpecs />
      <PerformanceSection />
      {/* 
      <TechSpecs />
      <section className="py-32 bg-zinc-900 flex justify-center items-center">
        <div className="text-center px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase italic">
            Experience the <span className="text-accent">Evolution</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10">
            The Helium 160 is not just a bike. It's a statement.
            Pre-orders are now open for the 2026 production run.
          </p>
          <button className="px-10 py-4 bg-accent text-black font-bold uppercase tracking-widest hover:bg-yellow-400 transition-colors">
            Reserve Yours
          </button>
        </div>
      </section>
      <Footer /> 
      */}
    </main>
  );
}
