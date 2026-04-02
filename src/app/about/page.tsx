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
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/40 via-black to-black opacity-60"></div>
      
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInVariants}
        className="relative z-10 max-w-4xl mx-auto text-center space-y-8"
      >
        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter text-white font-brand">
          The Genesis
        </h1>
        <div className="w-24 h-1 bg-white mx-auto"></div>
        <p className="text-lg md:text-2xl text-gray-300 leading-relaxed font-light">
          Our journey began when five distinct passions converged into a singular, uncompromising vision: to build India’s future in performance.
        </p>
        <p className="text-base md:text-xl text-gray-400 leading-relaxed">
          It started with a father. Watching his children race with fire in their hearts, he realized the ultimate stage for their dreams didn&apos;t exist—so he set out to build a platform where raw passion would never be forced to fade.
        </p>
        <p className="text-base md:text-xl text-gray-400 leading-relaxed">
          He was joined by a visionary motorcycle designer, restless to shatter boundaries and sketch lines that could finally breathe without compromise. Together with a ride dynamics specialist dedicated to elevating handling and behavior, they engineered a premium connection to the road—delivering an experience as profoundly refined as it is thrilling.
        </p>
        <p className="text-base md:text-xl text-gray-400 leading-relaxed">
          Beside them stood a mind steeped in machinery and material science, driven to exploit the extreme limits of aerospace-grade metals and racing composites, pushing the boundaries of pure lightness and strength. Completing the circle was an automotive photographer who had spent years immortalizing the world’s finest machines through a lens, now determined to bring his own vision to life in metal and carbon.
        </p>
      </motion.div>
    </section>
  );
}

function TeamSection() {
  const team = [
    {
      role: "The Visionary Founder",
      image: "/team/founder.png",
      story: "A father who watched his children race with fire in their hearts, only to realize the ultimate stage for their dreams didn't exist. He set out to build a platform where raw passion would never fade."
    },
    {
      role: "The Motorcycle Designer",
      image: "/team/designer.png",
      story: "A visionary artist, restless to shatter boundaries and sketch lines that could finally breathe without compromise, turning raw metal into absolute emotion."
    },
    {
      role: "The Dynamics Specialist",
      image: "/team/engineer.png",
      story: "Dedicated to elevating handling and behavior, engineering a premium connection to the road. This ensures every ride is profoundly refined and intensely thrilling."
    },
    {
      role: "The Material Scientist",
      image: "/team/scientist.png",
      story: "A mind driven to exploit the extreme limits of aerospace-grade metals and racing composites, pushing the boundaries of pure lightness and structural strength."
    },
    {
      role: "The Automotive Photographer",
      image: "/team/photographer.png",
      story: "Having spent years immortalizing the world's finest machines through a lens, they are now determined to bring their own vision to life in metal and carbon."
    }
  ];

  return (
    <section className="relative bg-zinc-950 py-24 px-6 md:px-12 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto space-y-24">
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInVariants}
            className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-white font-brand mb-8">The Team</h2>
          <div className="w-16 h-1 bg-gray-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 justify-center">
          {team.map((member, index) => (
            <motion.div 
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInVariants}
              className="bg-black border border-zinc-900 overflow-hidden hover:border-zinc-700 transition-colors group"
            >
              <div className="relative aspect-square w-full overflow-hidden">
                <Image 
                  src={member.image} 
                  alt={member.role} 
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" 
                />
              </div>
              <div className="p-8 space-y-4">
                <h3 className="text-xl md:text-2xl font-bold uppercase text-white font-brand">{member.role}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{member.story}</p>
              </div>
            </motion.div>
          ))}
        </div>
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
            Mastery of <br/><span className="text-gray-500">Structural Carbon</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
            Beyond passion lies absolute precision. We don&apos;t just use carbon fiber as a finish; we engineer it as the very skeleton of our machines. 
          </p>
          <p className="text-base md:text-lg text-gray-400 leading-relaxed">
            Mastering structural carbon allows us to strip away the unnecessary, achieving an uncompromising power-to-weight ratio. Every weave is meticulously calculated to deliver extreme torsional rigidity while shedding every possible gram. It isn&apos;t just about saving weight—it&apos;s about re-engineering the very soul of the motorcycle.
          </p>
        </motion.div>

        {/* Abstract Structural Visual Placeholder */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1 }}
           viewport={{ once: true }}
           className="relative aspect-square w-full order-1 md:order-2 flex items-center justify-center overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900"
        >
            <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1623912629631-0164c39ce988?auto=format&fit=crop&q=80&w=1600')] bg-cover bg-center mix-blend-overlay"></div>
            <div className="relative text-zinc-700 tracking-widest uppercase text-sm font-bold rotate-90 scale-150">
              Carbon Fiber / Structural Rigidity
            </div>
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
          <p className="text-xl md:text-3xl text-gray-200 leading-relaxed font-light mb-6">
            Strength without control is wasted.
          </p>
          <p className="text-base md:text-xl text-gray-400 leading-relaxed font-light max-w-3xl mx-auto">
            Our engineering philosophy centers on creating an unbreakable bond between rider and road. By combining aerospace-grade metals with advanced geometry, we&apos;ve crafted a chassis capable of absorbing extreme forces without hesitation. It is engineering born on the track, refined for the purist. Form follows function, and every curve has a purpose.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function MovementSection() {
  return (
    <section className="relative min-h-[70vh] flex flex-col justify-center items-center text-center bg-zinc-950 px-6 md:px-12 py-24">
      <motion.div
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, margin: "-100px" }}
         variants={fadeInVariants}
         className="max-w-4xl mx-auto space-y-8"
      >
        <h2 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter text-white font-brand leading-none">
          Igniting a <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-600">Movement</span>
        </h2>
        <p className="text-lg md:text-2xl text-gray-300 font-light mt-8">
          Together, we aren&apos;t just building motorcycles. We are united by mastery and an unrelenting passion to create something truly extraordinary. An unparalleled appetite for performance—born in India, destined for the world.
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
