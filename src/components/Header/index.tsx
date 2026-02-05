"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MenuToggle from "./MenuToggle";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const mainLinks = [
        { name: "Helium 160", href: "#" },
        { name: "Technology", href: "#technology" },
        { name: "About", href: "#about" },
        { name: "History", href: "#history" },
    ];

    const secondaryLinks = [
        { name: "Dealer locator", href: "#" },
        { name: "Shop", href: "#" },
        { name: "Contact", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press", href: "#" },
        { name: "Factory tours", href: "#" },
    ];

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-[70] py-6 px-6 md:py-8 md:px-12 bg-transparent pointer-events-none">
                <div className="flex items-center justify-between w-full pointer-events-auto">
                    {/* Logo */}
                    <Link href="/" className="z-[70] relative group block w-48 h-auto">
                        <Image
                            src="/logo/SLlogo.png"
                            alt="Shadowline"
                            width={200}
                            height={40}
                            className="w-full h-auto object-contain opacity-100 group-hover:opacity-80 transition-opacity"
                        />
                    </Link>

                    {/* Animated Menu Toggle */}
                    <MenuToggle isOpen={isMenuOpen} toggle={() => setIsMenuOpen(!isMenuOpen)} />
                </div>
            </nav>

            {/* Full Screen Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[60] bg-black flex flex-col justify-between p-12"
                    >
                        {/* Header in Overlay - Logo duplication for layout balance if needed, but nav is z-70 so visible */}
                        {/* We just need spacing here effectively */}
                        <div className="flex justify-between items-start opacity-0 pointer-events-none">
                            <div className="w-48 h-auto relative">
                                <Image
                                    src="/logo/SLlogo.png"
                                    alt="Shadowline"
                                    width={200}
                                    height={40}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                            {/* Placeholder to push content down roughly same amount */}
                            <div className="w-12 h-12" />
                        </div>

                        {/* Main Content */}
                        <div className="flex flex-col lg:flex-row items-end lg:items-end justify-between w-full h-full pb-12 mt-12 md:mt-20 overflow-y-auto">

                            {/* Left: Giant Links with Hover Focus Effect */}
                            <div className="flex flex-col space-y-1 sm:space-y-0 group w-full lg:w-auto">
                                {mainLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-3xl sm:text-5xl md:text-8xl font-bold text-white uppercase tracking-tighter transition-all duration-300 group-hover:opacity-60 hover:!opacity-100 font-brand leading-none"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>

                            {/* Right: Secondary Links */}
                            <div className="w-full lg:w-auto mt-12 lg:mt-0 grid grid-cols-2 gap-x-6 md:gap-x-12 text-right">
                                {/* Left Column: Corporate/Info */}
                                <div className="flex flex-col space-y-3 md:space-y-4">
                                    {secondaryLinks.slice(3, 6).map(link => (
                                        <Link key={link.name} href={link.href} className="block text-sm md:text-lg text-gray-200 hover:text-white transition-colors font-sans">{link.name}</Link>
                                    ))}
                                </div>

                                {/* Right Column: Commerce/Contact */}
                                <div className="flex flex-col space-y-3 md:space-y-4">
                                    {secondaryLinks.slice(0, 3).map(link => (
                                        <Link key={link.name} href={link.href} className="block text-sm md:text-lg text-gray-200 hover:text-white transition-colors font-sans">{link.name}</Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
