"use client";

import { motion } from "framer-motion";
import { Wind, Scale, Activity, Layers } from "lucide-react";

const specs = [
    {
        label: "Weight",
        value: "6.8 KG",
        sub: "Ultralight Frame",
        icon: Scale,
    },
    {
        label: "Aerodynamics",
        value: "0.22 CdA",
        sub: "Wind Tunnel Tested",
        icon: Wind,
    },
    {
        label: "Stiffness",
        value: "140 N/mm",
        sub: "Power Transfer",
        icon: Activity,
    },
    {
        label: "Material",
        value: "T1100",
        sub: "Carbon Fiber",
        icon: Layers,
    },
];

export default function TechSpecs() {
    return (
        <section id="technology" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#111] to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-16">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold uppercase italic tracking-tighter text-white mb-4"
                    >
                        Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2A909B] to-[#3BD9CC]">Excellence</span>
                    </motion.h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-[#2A909B] to-[#3BD9CC]" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {specs.map((spec, index) => (
                        <motion.div
                            key={spec.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-8 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <spec.icon className="w-8 h-8 text-gray-500 group-hover:text-[#3BD9CC] transition-colors" />
                                <span className="text-xs font-mono text-gray-600 uppercase tracking-widest">{`0${index + 1}`}</span>
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-2">{spec.value}</h3>
                            <p className="text-sm font-medium text-[#3BD9CC] uppercase tracking-wider mb-1">{spec.label}</p>
                            <p className="text-xs text-gray-400 font-light">{spec.sub}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
