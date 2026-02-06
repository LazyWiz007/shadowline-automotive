"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const faqs = [
    {
        id: "01",
        question: "Purpose-Built Balance",
        answer: "Helium 160 is engineered around balance before brute force. With a near-perfect 51:49 front-to-rear weight distribution and an ultra-light 82 kg total mass, the bike remains composed under braking, stable at lean, and predictable at the limit. This is not accidental geometry — it is intentional control, designed to let riders push harder with confidence, lap after lap",
    },
    {
        id: "02",
        question: "Structural Carbon Architecture",
        answer: "The carbon fiber seat and tank are not cosmetic additions — they are load-bearing structural members. By eliminating a traditional metal subframe, Helium achieves exceptional rigidity with minimal weight. The result is a tighter feedback loop between rider and machine, where every input translates instantly into motion.",
    },
    {
        id: "03",
        question: "Race-Ready Without Excess",
        answer: "Every component exists for a reason. Billet aluminium triple clamps, swingarm, and clip-ons. Fully adjustable Maselli suspension front and rear. Compact 14-inch race wheels with a focused tyre profile. Nothing is overbuilt, nothing is wasted. Helium 160 delivers a true Mini GP experience — without the cost, complexity, or compromise of imported alternatives",
    },
];

export default function ExtremePerformance() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-black text-white py-24 min-h-screen flex items-center relative overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">

                {/* Left Content */}
                <div className="flex flex-col z-10">
                    <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-white font-bold uppercase tracking-wider text-sm mb-12"
                    >
                        Extreme Performance
                    </motion.h4>

                    {/* FAQ List */}
                    <div className="flex flex-col gap-8">
                        {faqs.map((faq, index) => (
                            <div key={faq.id} className="border-b border-gray-800 pb-8">
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full flex items-start text-left gap-8 group"
                                >
                                    <span className="text-xs font-mono text-gray-500 pt-1 tracking-widest">
                                        {faq.id}
                                    </span>
                                    <div className="flex-1">
                                        <h3 className={`text-xl md:text-2xl font-normal transition-colors duration-300 ${openIndex === index ? "text-white" : "text-gray-400 group-hover:text-white"}`}>
                                            {faq.question}
                                        </h3>
                                        <AnimatePresence>
                                            {openIndex === index && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                                    animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                                                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                    className="overflow-hidden"
                                                >
                                                    <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md">
                                                        {faq.answer}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                    <motion.div
                                        animate={{ rotate: openIndex === index ? 90 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ArrowRight className={`w-5 h-5 ${openIndex === index ? "text-white" : "text-gray-600"}`} />
                                    </motion.div>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Content - Title & Image */}
                <div className="relative h-full flex flex-col justify-between">


                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full aspect-[4/5] lg:aspect-square mt-12 lg:mt-32"
                    >
                        <Image
                            src="/Hero/3.jpg"
                            alt="Extreme Performance Engineering"
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50" />
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
