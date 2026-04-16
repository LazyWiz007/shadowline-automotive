"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useBooking } from "@/context/BookingContext";

export default function Hero() {
    const { openModal } = useBooking();

    return (
        <section id="helium" className="relative h-screen w-full overflow-hidden bg-white">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                {/* Mobile Background */}
                <Image
                    src="/Hero/mobile1.jpg"
                    alt="Helium 160 Background"
                    fill
                    priority
                    className="object-cover md:hidden"
                />
                {/* Desktop Background */}
                <Image
                    src="/Hero/1.jpg"
                    alt="Helium 160 Background"
                    fill
                    priority
                    className="object-cover hidden md:block"
                />

                {/* Refined Gradient - Black for Dark Mode */}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.3)_40%,transparent_100%)] z-10" />
            </div>

            {/* Desktop Content - Title & Buttons below it */}
            <div className="absolute bottom-12 md:bottom-24 left-8 md:left-24 z-20 hidden md:block">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h1 className="text-6xl font-extrabold tracking-wide uppercase italic text-white drop-shadow-sm font-brand leading-none">
                        Helium 160
                    </h1>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                        className="mt-12 flex gap-4"
                    >
                        <button 
                            onClick={openModal}
                            className="px-8 py-3 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-black hover:text-white border border-white transition-all duration-300"
                        >
                            Book Now
                        </button>
                        <button 
                            className="px-8 py-3 bg-transparent border border-white text-white font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300"
                        >
                            Tech Specs
                        </button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Mobile Content - Cluster at bottom */}
            <div className="md:hidden absolute inset-0 z-20 flex flex-col justify-end p-8 pb-16 pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="pointer-events-auto mb-8"
                >
                    <h1 className="text-4xl font-extrabold tracking-wide uppercase italic text-white drop-shadow-sm font-brand leading-none">
                        Helium 160
                    </h1>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    className="flex flex-col gap-3 w-full pointer-events-auto"
                >
                    <button 
                        onClick={openModal}
                        className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-black hover:text-white border border-white transition-all duration-300"
                    >
                        Book Now
                    </button>
                    <button 
                        className="w-full py-4 bg-transparent border border-white text-white font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all duration-300"
                    >
                        Tech Specs
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
