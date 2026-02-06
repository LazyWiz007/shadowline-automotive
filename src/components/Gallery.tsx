"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
    {
        src: "/Hero/Artboard 1.jpg",
        alt: "Helium 160 Side Profile",
        className: "col-span-1 md:col-span-2 row-span-2 h-[60vh] md:h-[80vh]",
    },
    {
        src: "/Hero/2.png",
        alt: "Helium 160 Cockpit View",
        className: "col-span-1 h-[30vh] md:h-[40vh]",
    },
    {
        src: "/Hero/3.jpg",
        alt: "Helium 160 Rear Angle",
        className: "col-span-1 h-[30vh] md:h-[40vh]",
    },
    {
        src: "/Hero/4.png",
        alt: "Helium 160 Rear Angle",
        className: " h-[50vh] md:h-[30vh]",
    }
];

export default function Gallery() {
    return (
        <section className="bg-black py-24 px-4 md:px-8">
            <div className="max-w-[1800px] mx-auto mb-16 px-4">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-brand font-bold uppercase italic tracking-tighter text-white"
                >
                    Pure <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-teal">Aesthetics</span>
                </motion.h2>
            </div>

            <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {images.map((img, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className={`relative overflow-hidden group ${img.className}`}
                    >
                        <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
