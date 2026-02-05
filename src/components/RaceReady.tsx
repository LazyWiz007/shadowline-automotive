"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function RaceReady() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    return (
        <section ref={containerRef} className="bg-black text-white relative">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                {/* Left Column: Sticky Title */}
                <div className="hidden lg:flex h-screen sticky top-0 flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-brand font-bold uppercase italic tracking-tighter leading-tight">
                            Become <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                                Race Ready.
                            </span>
                        </h2>
                    </motion.div>
                </div>

                {/* Mobile Title (Non-sticky) */}
                <div className="lg:hidden pt-24">
                    <h2 className="text-4xl md:text-6xl font-brand font-bold uppercase italic tracking-tighter leading-tight">
                        Become <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                            Race Ready
                        </span>
                    </h2>
                </div>

                {/* Right Column: Scrolling Content */}
                <div className="flex flex-col space-y-[40vh] py-24 lg:py-[30vh]">
                    {/* Section 1: The Idea */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-20% 0px -20% 0px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl font-brand font-bold uppercase tracking-wide mb-6 text-white">
                            The Idea
                        </h3>
                        <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
                            Just as uncompromising as full-scale Grand Prix machinery, Helium
                            160 is engineered as a seamless and deliberate training
                            instrument. Every component exists for one purpose: to sharpen
                            the rider’s interaction with speed.
                        </p>
                    </motion.div>

                    {/* Section 2: Structure & Efficiency */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-20% 0px -20% 0px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl font-brand font-bold uppercase tracking-wide mb-6 text-white">
                            Structure & Efficiency
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            With an 82 kg total mass, a 51:49 front-to-rear weight
                            distribution, and a carbon-fiber seat–tank structure acting as a
                            primary load-bearing element, Helium 160 removes excess before
                            it ever becomes a problem. There is no secondary subframe. No
                            unnecessary reinforcement. Only structure where structure is
                            required.
                        </p>
                    </motion.div>

                    {/* Section 3: Control & Feedback */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ margin: "-20% 0px -20% 0px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl font-brand font-bold uppercase tracking-wide mb-6 text-white">
                            Control & Feedback
                        </h3>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            Billet aluminium controls, a rigid aluminium chassis, and fully
                            adjustable Maselli suspension work together to preserve
                            stability while amplifying feedback. The result is a machine
                            that responds instantly, predictably, and without correction.
                        </p>
                    </motion.div>

                    {/* Conclusion */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="pt-24 border-t border-white/10"
                    >
                        <div className="grid grid-cols-1 gap-8">
                            <div>
                                <p className="text-2xl md:text-3xl font-light italic text-white mb-2">
                                    How close does this feel to racing at the highest level?
                                </p>
                                <p className="text-gray-400 mb-8">
                                    Spend time on track. Watch the data. The answer becomes obvious.
                                </p>
                                <p className="text-4xl md:text-5xl font-brand font-black uppercase italic tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 text-right">
                                    NEED FOR SPEED
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
