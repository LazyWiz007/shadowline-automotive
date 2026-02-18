"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
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

                {/* Refined Gradient - White for Light Mode */}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.3)_40%,transparent_100%)] z-10" />
            </div>

            {/* Content Content - Aligned with Navbar */}
            <div className="absolute top-[25%] md:top-[40%] left-6 md:left-24 z-20">
                <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-2xl sm:text-7xl md:text-8xl lg:text-3xl font-extrabold tracking-wide uppercase italic text-black drop-shadow-sm font-brand leading-none"
                >
                    Helium 160
                </motion.h1>
            </div>
        </section>
    );
}
