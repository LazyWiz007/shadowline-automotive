"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fadeInVariants: any = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

function GenesisSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-24 px-6 md:px-12 bg-black overflow-hidden">
      {/* Background glow or subtle styling */}
      <div className="absolute inset-0 z-0">
        <Image src="/team/garage pic.jpg" alt="Garage" fill className="object-cover opacity-20 hover:opacity-30 transition-opacity duration-1000" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/90"></div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInVariants}
        className="relative z-10 max-w-4xl mx-auto space-y-8"
      >
        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter text-white font-brand text-center">
          The Genesis
        </h1>
        <div className="w-24 h-1 bg-white mx-auto"></div>
        <div className="space-y-8 text-justify max-w-3xl mx-auto">
          <p className="text-justify text-lg md:text-2xl text-gray-300 leading-relaxed font-light">
            Our journey began when five distinct passions converged into a singular, uncompromising vision: to build India’s future in performance.
          </p>
          <p className="text-justify text-base md:text-xl text-gray-400 leading-relaxed">
            Our story isn&apos;t about a single founder—it&apos;s about a collective uprising. Five co-founders, each masters of their own craft, united by the realization that the ultimate stage for true Indian performance machines simply didn&apos;t exist. Together, they set out to build a platform where raw passion would never be forced to fade.
          </p>
          <p className="text-justify text-base md:text-xl text-gray-400 leading-relaxed">
            The team brought together a father whose fire for racing matched his children&apos;s, and a visionary motorcycle designer restless to shatter boundaries and sketch lines that could finally breathe without compromise. They were joined by a ride dynamics specialist dedicated to elevating handling—engineering a premium connection to the road.
          </p>
          <p className="text-justify text-base md:text-xl text-gray-400 leading-relaxed">
            Rounding out the founding team was a mastermind in material science, driven to exploit the extreme limits of aerospace-grade metals and racing composites, alongside an automotive photographer who had spent years immortalizing the world’s finest machines—now determined to bring their collective vision to life in metal and carbon.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

function TeamSection() {
  const carouselImages = [
    "/team/full group pic 2 .jpg",
    "/team/on track.jpg",
  ];

  return (
    <section className="relative bg-zinc-950 py-32 border-t border-zinc-900 overflow-hidden">
      <div className="max-w-[100vw] mx-auto space-y-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInVariants}
          className="text-center max-w-4xl mx-auto px-6"
        >
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-white font-brand mb-8">The Founders</h2>
          <div className="w-16 h-1 bg-gray-500 mx-auto"></div>
          <p className="text-justify text-lg md:text-2xl text-gray-400 font-light leading-relaxed mt-10">
            We are a unified force. Master designers, ride dynamics specialists, material scientists, and racing enthusiasts bound by blood and passion. Operating as one entity to redefine Indian engineering.
          </p>
        </motion.div>

        {/* Carousel / Image Showcase */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInVariants}
          className="w-full flex md:justify-center gap-6 overflow-x-auto snap-x snap-mandatory px-6 md:px-12 pb-8 scrollbar-hide"
        >
          {carouselImages.map((src, idx) => (
            <div key={idx} className="relative w-[85vw] md:w-[42vw] lg:w-[40vw] shrink-0 aspect-[16/9] md:aspect-[4/3] rounded-2xl overflow-hidden snap-center border border-white/5">
              <Image src={src} alt="Team" fill className="object-cover hover:scale-105 transition-transform duration-1000 ease-out grayscale hover:grayscale-0" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CarbonSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-zinc-950 py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInVariants}
          className="space-y-8 order-2 md:order-1"
        >
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-white font-brand">
            Mastery of <br /><span className="text-gray-500">Structural Carbon</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light text-justify">
            Beyond passion lies absolute precision. We don&apos;t just use carbon fiber as a finish; we engineer it as the very skeleton of our machines.
          </p>
          <p className="text-base md:text-lg text-gray-400 leading-relaxed text-justify">
            Mastering structural carbon allows us to strip away the unnecessary, achieving an uncompromising power-to-weight ratio. Every weave is meticulously calculated to deliver extreme torsional rigidity while shedding every possible gram. It isn&apos;t just about saving weight—it&apos;s about re-engineering the very soul of the motorcycle.
          </p>
        </motion.div>

        {/* Abstract Structural Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative aspect-square w-full order-1 md:order-2 flex items-center justify-center overflow-hidden rounded-xl border border-zinc-800 hover:border-zinc-700 transition-colors bg-zinc-900"
        >
          <div className="absolute inset-0 bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-1000" style={{ backgroundImage: "url('/Hero/3.png')" }}></div>
        </motion.div>
      </div>
    </section>
  );
}

function EngineeringSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden bg-black text-white py-24 px-6 md:px-12">
      {/* Background Graphic */}
      <motion.div
        style={{ y: yParallax }}
        className="absolute inset-0 opacity-10 flex items-center justify-center font-brand font-bold text-[15rem] leading-none whitespace-nowrap overflow-hidden select-none pointer-events-none"
      >
        ENGINEERING
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInVariants}
        >
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-white font-brand mb-8">
            Engineering Strength
          </h2>
          <div className="w-16 h-1 bg-gray-500 mx-auto mb-8"></div>
          <p className="text-justify text-xl md:text-3xl text-gray-200 leading-relaxed font-light mb-6">
            Strength without control is wasted.
          </p>
          <p className="text-justify text-base md:text-xl text-gray-400 leading-relaxed font-light max-w-3xl mx-auto">
            Our engineering philosophy centers on creating an unbreakable bond between rider and road. By combining aerospace-grade metals with advanced geometry, we&apos;ve crafted a chassis capable of absorbing extreme forces without hesitation. It is engineering born on the track, refined for the purist. Form follows function, and every curve has a purpose.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function MovementSection() {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center items-center text-center border-t border-zinc-900 bg-black px-6 md:px-12 py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src="/team/full group pic.jpg" alt="Team Outro" fill className="object-cover opacity-30 grayscale mix-blend-luminosity hover:opacity-50 hover:grayscale-0 transition-all duration-1000" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black"></div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInVariants}
        className="relative z-10 max-w-4xl mx-auto space-y-8"
      >
        <h2 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter text-white font-brand leading-none">
          Igniting a <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-600">Movement</span>
        </h2>
        <p className="text-justify text-xl md:text-3xl text-gray-300 font-light mt-8 px-4 leading-relaxed tracking-wide">
          Together, we aren&apos;t just building motorcycles. We are united by mastery and an unrelenting passion to create something truly extraordinary.
          <br /><br />
          An unparalleled appetite for performance—born in India, destined for the world.
        </p>
      </motion.div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      <Header />

      <GenesisSection />
      <TeamSection />
      <CarbonSection />
      <EngineeringSection />
      <MovementSection />

      <Footer />
    </main>
  );
}
