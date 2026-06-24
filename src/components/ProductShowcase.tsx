"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const products = [
    {
        id: "helium",
        name: "Helium",
        subName: "160",
        badge: "Gasoline",
        description: "Iconic track instrument with single-unit carbon subframe. 160cc, 82 kg.",
        image: "/Hero/1.jpg",
        hasExplore: true,
        exploreId: "helium-details",
    },
    {
        id: "xpan",
        name: "Xpan",
        subName: "Electric",
        badge: "comming soon",
        description: "Precise electric racing prototype: aerodynamic carbon monocoque.",
        image: "/Hero/Xspin.png",
        hasExplore: false,
    },
];

export default function ProductShowcase() {
    const handleExploreClick = (e: React.MouseEvent, targetId: string) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="bg-black text-white py-24 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none z-0" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Heading */}
                <div className="mb-16 text-center md:text-left">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-brand font-bold uppercase italic tracking-tighter text-white mb-4"
                    >
                        Select <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-teal">Your Machine</span>
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="h-1 w-24 bg-gradient-to-r from-brand-cyan to-brand-teal origin-left mx-auto md:mx-0"
                    />
                </div>

                {/* Cards Container */}
                <div className="flex flex-col md:flex-row gap-8 w-full min-h-[600px] md:h-[650px]">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="group relative flex-1 md:hover:flex-[1.3] flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:border-brand-teal/40 hover:shadow-[0_0_30px_rgba(59,217,204,0.1)] min-h-[400px] md:min-h-0"
                        >
                            {/* Backdrop Image */}
                            <div className="absolute inset-0 z-0 overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                                    priority={index === 0}
                                />
                                {/* Overlay Gradients */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/80 z-10 transition-opacity duration-700" />
                            </div>

                            {/* Top Content: Logo / Name */}
                            <div className="relative z-20 w-full pt-12 px-8 flex flex-col items-center">
                                <h3 className="text-4xl md:text-5xl font-brand font-black uppercase italic tracking-widest text-white leading-none drop-shadow-md select-none">
                                    {product.name}
                                </h3>
                                <span className="mt-1 text-xs md:text-sm font-mono tracking-[0.3em] text-gray-400 uppercase select-none">
                                    {product.subName}
                                </span>
                            </div>

                            {/* Bottom Content: Specs, Badges & Action Buttons */}
                            <div className="relative z-20 w-full pb-10 px-8 flex flex-col gap-6 items-start mt-auto">
                                {/* Badge */}
                                <span className="px-3.5 py-1.5 bg-white/5 backdrop-blur-md border border-white/15 text-white rounded-full text-[10px] font-mono tracking-widest uppercase text-left leading-relaxed max-w-xs md:max-w-md pointer-events-none drop-shadow-sm select-none">
                                    {product.badge}
                                </span>

                                {/* Description */}
                                <p className="text-left text-gray-300 font-sans text-sm md:text-base font-normal leading-relaxed tracking-wide select-none">
                                    {product.description}
                                </p>

                                {/* Explore Button */}
                                {product.hasExplore && product.exploreId && (
                                    <a
                                        href={`#${product.exploreId}`}
                                        onClick={(e) => handleExploreClick(e, product.exploreId!)}
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 hover:border-white rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 pointer-events-auto shadow-lg hover:shadow-white/10"
                                    >
                                        Explore <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
