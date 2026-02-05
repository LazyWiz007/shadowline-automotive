"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
    {
        label: "Engine",
        value: "160",
        unit: "CC",
        detail: "High Performance",
    },
    {
        label: "Weight",
        value: "82",
        unit: "KG",
        detail: "Ultralight Build",
    },
    {
        label: "Power",
        value: "18",
        unit: "BHP",
        detail: "Peak Output",
    },
    {
        label: "Balance",
        value: "51:49",
        unit: "F:R",
        detail: "Weight Dist.",
    },
];

export default function PerformanceSection() {
    return (
        <section className="relative min-h-screen text-white overflow-hidden py-24">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/Hero/bg2.jpg"
                    alt="Engineering Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="max-w-[1600px] mx-auto px-6 h-full flex flex-col lg:flex-row items-center relative z-10">

                {/* Left Content - Specs */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center gap-16 order-2 lg:order-1 mt-12 lg:mt-0">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-8"
                    >
                        <h2 className="text-4xl md:text-6xl font-brand font-bold uppercase italic tracking-tighter leading-tight mb-4">
                            Engineering <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
                                Excellence
                            </span>
                        </h2>
                        <p className="text-gray-400 font-sans text-sm md:text-base max-w-md leading-relaxed">
                            Every curve, every component is engineered for pure speed and control. The Helium 160 redefines the power-to-weight ratio.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 gap-x-12 gap-y-16">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="flex items-baseline gap-1 mb-2">
                                    <span className="text-3xl md:text-5xl font-brand font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-blue-500 transition-all duration-300">
                                        {stat.value}
                                    </span>
                                    <span className="text-lg md:text-xl font-brand font-bold text-gray-500 group-hover:text-white transition-colors duration-300">
                                        {stat.unit}
                                    </span>
                                </div>
                                <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-1">
                                    {stat.label}
                                </h4>
                                <p className="text-gray-500 text-xs font-medium uppercase tracking-wide">
                                    {stat.detail}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right Content - Image */}
                <div className="w-full lg:w-1/2 h-[50vh] lg:h-[80vh] relative order-1 lg:order-2">
                    <div className="relative w-full h-full">
                        {/* Mobile Image */}
                        <div className="block lg:hidden w-full h-full relative">
                            <Image
                                src="/Hero/mobile3.jpg"
                                alt="Helium 160 Performance Engineering - Mobile"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Desktop Image */}

                        {/* Gradient Overlay for blending */}
                        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-black via-transparent to-transparent" />
                    </div>
                </div>
            </div>
        </section>
    );
}
