"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const specsLeft = [
    {
        label: "Carbon Fiber Seat and Tank",
        detail: "(Single Unit - Sub Frame) Structural Member (No metal subframe underneath)",
    },
    {
        label: "Rear Suspensions",
        detail: "Maselli Rear Suspensions (Preload, Compression, Rebound)",
    },
    {
        label: "Sprocket",
        detail: "Aluminium",
    },
    {
        label: "Swingarm",
        detail: "Billet Aluminium",
    },
    {
        label: "Triple Clamp",
        detail: "Billet Aluminium",
    },
];

const specsRight = [
    {
        label: "Tyre",
        detail: "110/80 R14",
    },
    {
        label: "Clip On",
        detail: "Billet Aluminium",
    },
    {
        label: "Front Fork",
        detail: "Maselli Forks (Preload, Compression, Rebound)",
    },
    {
        label: "Chassis Main Frame",
        detail: "Aluminium",
    },
    {
        label: "Fairing",
        detail: "(Carbon or Glass Fiber) Optional",
    },
    {
        label: "Rims",
        detail: "R14",
    },
];

const specsBottom = [
    {
        label: "Engine",
        detail: "160 cc, 18 bhp",
    },
    {
        label: "Vehicle Weight",
        detail: "82 kg",
    },
    {
        label: "Weight Distribution",
        detail: "51:49::F:R",
    },
];

export default function VisualSpecs() {
    return (
        <section className="hidden lg:block relative min-h-screen bg-black text-white overflow-hidden py-24 lg:py-0">
            {/* Main Background Image - Full Canvas */}
            <div className="absolute inset-0 z-0 h-full">
                <div className="sticky top-0 h-screen w-full overflow-hidden">
                    {/* Desktop Background */}
                    <div className="hidden lg:block relative w-full h-full">
                        <Image
                            src="/Hero/2.jpg"
                            alt="Helium 160 Specifications"
                            fill
                            className="object-cover lg:object-fill"
                            priority
                        />
                    </div>
                    {/* Mobile Background */}
                    <div className="lg:hidden relative w-full h-full">
                        <Image
                            src="/Hero/mobile3.jpg"
                            alt="Helium 160 Specifications Mobile"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    {/* Radial gradient to highlight the bike in center and fade edges to black for text */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_20%,rgba(0,0,0,0.8)_85%)]" />
                </div>
            </div>

            <div className="relative z-10 w-full h-full min-h-[80vh] lg:h-screen flex items-center justify-center">
                {/* Desktop Overlay - Floating Specs */}
                <div className="hidden lg:block w-full h-full max-w-[1600px] mx-auto relative">
                    {/* Left Specs */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-12 flex flex-col gap-16 text-left w-80">
                        {specsLeft.map((spec, i) => (
                            <motion.div
                                key={spec.label}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group cursor-pointer pointer-events-auto"
                            >
                                <h4 className="text-white font-brand font-bold uppercase tracking-widest text-sm mb-2 transition-all duration-300 group-hover:[text-shadow:0_0_15px_rgba(255,255,255,0.3)]">{spec.label}</h4>
                                <p className="text-justify text-gray-300 font-sans text-xs font-medium leading-relaxed tracking-wide opacity-90">{spec.detail}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Specs */}
                    <div className="absolute top-1/2 -translate-y-1/2 right-12 flex flex-col gap-16 text-right w-80">
                        {specsRight.map((spec, i) => (
                            <motion.div
                                key={spec.label}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group cursor-pointer pointer-events-auto"
                            >
                                <h4 className="text-white font-brand font-bold uppercase tracking-widest text-sm mb-2 transition-all duration-300 group-hover:[text-shadow:0_0_15px_rgba(255,255,255,0.3)]">{spec.label}</h4>
                                <p className="text-justify text-gray-300 font-sans text-xs font-medium leading-relaxed tracking-wide opacity-90">{spec.detail}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom Specs */}
                    <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-32 text-center w-full justify-center">
                        {specsBottom.map((spec, i) => (
                            <motion.div
                                key={spec.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 + i * 0.1 }}
                                className="group cursor-pointer pointer-events-auto"
                            >
                                <h4 className="text-white font-brand font-bold uppercase tracking-widest text-xl mb-2 transition-all duration-300 group-hover:[text-shadow:0_0_15px_rgba(255,255,255,0.3)]">{spec.label}</h4>
                                <p className="text-justify text-gray-300 font-sans text-xl font-medium leading-relaxed tracking-wide opacity-90">{spec.detail}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile Stacked Specs */}
            <div className="relative z-10 lg:hidden px-6 pb-24 grid grid-cols-1 gap-6 max-w-2xl mx-auto pt-24">
                {[...specsLeft, ...specsRight, ...specsBottom].map((spec, i) => (
                    <motion.div
                        key={spec.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="text-left bg-white/5 p-6 backdrop-blur-sm border-l-2 border-white/20 group cursor-pointer shadow-sm"
                    >
                        <h4 className="text-white font-brand font-bold uppercase tracking-widest text-sm mb-2 group-hover:[text-shadow:0_0_10px_rgba(255,255,255,0.3)]">{spec.label}</h4>
                        <p className="text-justify text-gray-300 font-sans text-xs font-medium leading-relaxed tracking-wide">{spec.detail}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
