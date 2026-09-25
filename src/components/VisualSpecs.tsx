"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useBooking } from "@/context/BookingContext";

// ── Variant Data ───────────────────────────────────────────────────────────────
const variants = [
    {
        id: "v1",
        label: "V1 CORE",
        price: "₹4,50,000",
        subtext: "Core – aluminium sub frame with glass fiber body",
        image: "/Hero/core.jpg",
    },
    {
        id: "v2",
        label: "V2 ADVANCE",
        price: "₹5,50,000",
        subtext: "Advance – carbon monocoque + glass fiber body",
        image: "/Hero/advance.jpg",
    },
    {
        id: "v3",
        label: "V3 ULTIMATE",
        price: "₹6,50,000",
        subtext: "Ultimate – carbon monocoque + carbon fiber body",
        image: "/Hero/ultimate.jpg",
    },
];

// ── Spec Lists ─────────────────────────────────────────────────────────────────
const specsLeft = [
    {
        label: "Carbon Fiber Seat and Tank",
        detail: "(Single Unit – Sub Frame) Structural Member (No metal subframe underneath)",
    },
    {
        label: "Rear Suspensions",
        detail: "Maselli Rear Suspensions (Preload, Compression, Rebound)",
    },
    { label: "Sprocket", detail: "Aluminium" },
    { label: "Swingarm", detail: "Billet Aluminium" },
    { label: "Triple Clamp", detail: "Billet Aluminium" },
];

const specsRight = [
    { label: "Tyre", detail: "110/80 R14" },
    { label: "Clip On", detail: "Billet Aluminium" },
    { label: "Front Fork", detail: "Maselli Forks (Preload, Compression, Rebound)" },
    { label: "Chassis Main Frame", detail: "Aluminium" },
    { label: "Fairing", detail: "(Carbon or Glass Fiber) Optional" },
    { label: "Rims", detail: "R14" },
];

const specsBottom = [
    { label: "Engine", detail: "160 cc, 18 bhp" },
    { label: "Vehicle Weight", detail: "82 kg" },
    { label: "Weight Distribution", detail: "51:49 :: F:R" },
];

// ── Component ──────────────────────────────────────────────────────────────────
export default function VisualSpecs() {
    const [activeIdx, setActiveIdx] = useState(0);
    const [touchStartX, setTouchStartX] = useState<number | null>(null);
    const { openModal, setVariant } = useBooking();

    const active = variants[activeIdx];

    const handleBookNow = () => {
        setVariant(active);
        openModal();
    };

    const handlePrev = () => {
        setActiveIdx((prev) => (prev - 1 + variants.length) % variants.length);
    };

    const handleNext = () => {
        setActiveIdx((prev) => (prev + 1) % variants.length);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStartX(e.touches[0].clientX);
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX === null) return;
        const diff = touchStartX - e.changedTouches[0].clientX;
        if (diff > 45) {
            handleNext();
        } else if (diff < -45) {
            handlePrev();
        }
        setTouchStartX(null);
    };

    return (
        <section className="relative bg-[#b0b2b5] text-black overflow-hidden select-none">

            {/* ═══════════════════════════════════════════════════════════════
                DESKTOP  (lg+)
            ════════════════════════════════════════════════════════════════ */}
            <div className="hidden lg:block">

                {/* Full-screen interactive canvas */}
                <div
                    className="relative w-full h-screen overflow-hidden"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >

                    {/* Bike image layer – seamless crossfade, no white blanking */}
                    <div className="absolute inset-0 bg-[#b0b2b5]">
                        <AnimatePresence>
                            <motion.div
                                key={active.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.35, ease: "easeInOut" }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={active.image}
                                    alt={active.label}
                                    fill
                                    className="object-contain object-center pointer-events-none"
                                    priority
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Top Bar: Selector on left, Price + Book Now on right corner */}
                    <div className="absolute top-0 left-0 right-0 z-30 px-8 xl:px-14 pt-8 pb-4 flex items-start justify-between pointer-events-none">

                        {/* Top-Left: Variant Selector */}
                        <div className="flex flex-col items-start gap-3 pointer-events-auto">
                            <motion.p
                                initial={{ opacity: 0, y: -6 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-[10px] font-mono tracking-[0.35em] text-black/70 uppercase font-semibold"
                            >
                                Helium 160 — Select Your Motorcycle
                            </motion.p>

                            <div className="flex items-center gap-3">
                                {variants.map((v, i) => (
                                    <button
                                        key={v.id}
                                        onClick={() => setActiveIdx(i)}
                                        className={`px-6 py-2.5 text-xs font-bold uppercase tracking-widest rounded-full border transition-all duration-300 cursor-pointer backdrop-blur-md shadow-sm ${
                                            activeIdx === i
                                                ? "bg-black text-white border-black shadow-lg scale-105"
                                                : "bg-white/70 text-black border-black/20 hover:border-black hover:bg-white"
                                        }`}
                                    >
                                        {v.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Top-Right Corner: Price & Book Now Call to Action */}
                        <div className="flex items-center gap-6 text-right pointer-events-auto">
                            <div className="flex flex-col items-end">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={active.id + "-corner-price"}
                                        initial={{ opacity: 0, y: -6 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 6 }}
                                        transition={{ duration: 0.2 }}
                                        className="flex flex-col items-end"
                                    >
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-[10px] font-mono tracking-[0.25em] text-black/60 uppercase font-semibold">
                                                {active.label}
                                            </span>
                                            <span className="text-[10px] text-black/40 font-mono">· EX-SHOWROOM</span>
                                        </div>
                                        <div className="text-3xl xl:text-4xl font-brand font-black tracking-tight text-black leading-none my-1">
                                            {active.price}
                                        </div>
                                        <div className="text-[11px] font-sans text-black/60 max-w-[260px] leading-snug">
                                            {active.subtext}
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.96 }}
                                onClick={handleBookNow}
                                className="px-8 py-3.5 bg-black text-white font-brand font-bold uppercase tracking-widest text-xs rounded-full hover:bg-zinc-800 transition-all duration-300 shadow-xl cursor-pointer flex items-center gap-2 group whitespace-nowrap"
                            >
                                <span>Book Now</span>
                                <svg
                                    className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                </svg>
                            </motion.button>
                        </div>
                    </div>

                    {/* Prev / Next navigation buttons */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/60 hover:bg-white text-black/70 hover:text-black flex items-center justify-center transition-all duration-200 backdrop-blur-md border border-black/10 shadow-md cursor-pointer group"
                        aria-label="Previous variant"
                    >
                        <svg className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/60 hover:bg-white text-black/70 hover:text-black flex items-center justify-center transition-all duration-200 backdrop-blur-md border border-black/10 shadow-md cursor-pointer group"
                        aria-label="Next variant"
                    >
                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Left Specs */}
                    <div className="absolute top-[54%] -translate-y-1/2 left-8 xl:left-14 flex flex-col gap-5 xl:gap-7 text-left w-64 xl:w-72 z-20 pointer-events-none">
                        {specsLeft.map((spec, i) => (
                            <motion.div
                                key={spec.label}
                                initial={{ opacity: 0, x: -16 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="pointer-events-auto"
                            >
                                <h4 className="text-black font-brand font-bold uppercase tracking-widest text-xs mb-0.5">
                                    {spec.label}
                                </h4>
                                <p className="text-black/60 font-sans text-xs leading-relaxed">
                                    {spec.detail}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Specs */}
                    <div className="absolute top-[54%] -translate-y-1/2 right-8 xl:right-14 flex flex-col gap-5 xl:gap-7 text-right w-64 xl:w-72 z-20 pointer-events-none">
                        {specsRight.map((spec, i) => (
                            <motion.div
                                key={spec.label}
                                initial={{ opacity: 0, x: 16 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="pointer-events-auto"
                            >
                                <h4 className="text-black font-brand font-bold uppercase tracking-widest text-xs mb-0.5">
                                    {spec.label}
                                </h4>
                                <p className="text-black/60 font-sans text-xs leading-relaxed">
                                    {spec.detail}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Bottom Stats bar – frosted strip */}
                    <div className="absolute bottom-0 left-0 right-0 z-20 bg-white/60 backdrop-blur-md border-t border-black/10">
                        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-center gap-16 xl:gap-24">
                            {specsBottom.map((spec, i) => (
                                <motion.div
                                    key={spec.label}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 + i * 0.08 }}
                                    className="text-center"
                                >
                                    <h4 className="text-black font-brand font-bold uppercase tracking-widest text-xs xl:text-sm mb-0.5">
                                        {spec.label}
                                    </h4>
                                    <p className="text-black/60 font-sans text-xs xl:text-sm">{spec.detail}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ═══════════════════════════════════════════════════════════════
                MOBILE  (below lg)
            ════════════════════════════════════════════════════════════════ */}
            <div className="lg:hidden bg-[#b0b2b5]">
                {/* Header */}
                <div className="px-6 pt-10 pb-4 text-center">
                    <p className="text-[10px] font-mono tracking-[0.35em] text-black/60 uppercase mb-2">
                        Helium 160 — Select Your Motorcycle
                    </p>
                    <h2 className="text-2xl font-brand font-black uppercase italic tracking-tighter text-black">
                        Choose Your Variant
                    </h2>
                </div>

                {/* Tabs */}
                <div className="flex justify-center gap-2.5 px-6 pb-4 flex-wrap">
                    {variants.map((v, i) => (
                        <button
                            key={v.id}
                            onClick={() => setActiveIdx(i)}
                            className={`px-4 py-2 text-[11px] font-bold uppercase tracking-widest rounded-full border transition-all duration-300 cursor-pointer ${
                                activeIdx === i
                                    ? "bg-black text-white border-black shadow-md"
                                    : "bg-white/70 text-black border-black/20 hover:border-black/60"
                            }`}
                        >
                            {v.label}
                        </button>
                    ))}
                </div>

                {/* Mobile Active Variant & Price summary badge */}
                <div className="px-6 pb-4 flex flex-col items-center text-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active.id + "-mob-summary"}
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 4 }}
                            transition={{ duration: 0.2 }}
                            className="flex flex-col items-center"
                        >
                            <span className="text-3xl font-brand font-black tracking-tight text-black">
                                {active.price}
                            </span>
                            <span className="text-xs text-black/60 font-sans max-w-xs mt-0.5">
                                {active.subtext}
                            </span>
                        </motion.div>
                    </AnimatePresence>

                    <motion.button
                        whileTap={{ scale: 0.96 }}
                        onClick={handleBookNow}
                        className="mt-3 px-8 py-3 bg-black text-white font-brand font-bold uppercase tracking-widest text-xs rounded-full hover:bg-zinc-800 transition-colors shadow-lg cursor-pointer flex items-center gap-2"
                    >
                        <span>Book Now</span>
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </motion.button>
                </div>

                {/* Bike Image with Touch Swipe Support */}
                <div
                    className="relative w-full aspect-[4/3] bg-[#b0b2b5] overflow-hidden"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    <AnimatePresence>
                        <motion.div
                            key={active.id + "-mob-img"}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.35, ease: "easeInOut" }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={active.image}
                                alt={active.label}
                                fill
                                className="object-contain object-center"
                                priority
                            />
                        </motion.div>
                    </AnimatePresence>

                    {/* Mobile swipe helper indicator */}
                    <div className="absolute bottom-2 left-0 right-0 flex justify-center items-center gap-1.5 text-[9px] font-mono text-black/40 uppercase tracking-widest pointer-events-none">
                        <span>← Swipe to switch model →</span>
                    </div>
                </div>

                {/* Specs – stacked cards */}
                <div className="px-5 py-6 grid grid-cols-1 gap-3">
                    {[...specsLeft, ...specsRight].map((spec) => (
                        <div
                            key={spec.label}
                            className="bg-white/60 backdrop-blur-sm p-4 border-l-2 border-black/30 shadow-sm rounded-r"
                        >
                            <h4 className="text-black font-brand font-bold uppercase tracking-widest text-xs mb-1">
                                {spec.label}
                            </h4>
                            <p className="text-black/60 font-sans text-xs leading-relaxed">
                                {spec.detail}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom stats */}
                <div className="border-t border-black/10 bg-white/50 backdrop-blur-sm px-6 py-6 flex flex-wrap justify-center gap-8">
                    {specsBottom.map((spec) => (
                        <div key={spec.label} className="text-center">
                            <h4 className="text-black font-brand font-bold uppercase tracking-widest text-xs mb-0.5">
                                {spec.label}
                            </h4>
                            <p className="text-black/60 font-sans text-xs">{spec.detail}</p>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA strip */}
                <div className="bg-white/70 backdrop-blur-md border-t border-black/10 px-6 py-10 flex flex-col items-center gap-4 text-center">
                    <p className="text-[10px] font-mono tracking-[0.35em] text-black/50 uppercase">
                        {active.label}
                    </p>
                    <p className="text-4xl font-brand font-black tracking-tighter text-black">
                        {active.price}
                    </p>
                    <p className="text-black/60 font-sans text-xs max-w-xs">
                        {active.subtext}
                    </p>
                    <motion.button
                        whileTap={{ scale: 0.97 }}
                        onClick={handleBookNow}
                        className="mt-1 px-8 py-3.5 bg-black text-white font-bold uppercase tracking-widest text-xs rounded-full hover:bg-zinc-800 transition-colors duration-300 shadow-lg cursor-pointer"
                    >
                        Book Now — {active.label}
                    </motion.button>
                    <p className="text-[9px] text-black/40 font-mono tracking-widest uppercase">
                        * Ex-showroom price · Subject to change
                    </p>
                </div>
            </div>
        </section>
    );
}
