"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const links = {
    product: ["Helium 160", "Accessories", "Apparel", "Configurator"],
    company: ["About Shadowline", "Engineering", "Careers", "Press"],
    support: ["Contact Us", "Warranty", "Find a Dealer", "Owner's Manual"],
};

// New data structures for the updated footer links
const product = [
    { name: "Helium 160", href: "/#" },
    { name: "Technology", href: "/#technology" },
];

const company = [
    { name: "About", href: "/about" },
    { name: "Careers", href: "#" },
];

const supportLinks = [
    { name: "Contact", href: "#" },
];


export default function Footer() {
    return (
        <footer className="bg-[#050505] text-white font-sans pt-24 pb-8 overflow-hidden relative">
            <div className="max-w-[1600px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-8 mb-24 relative z-10">

                {/* Column 1: Brand & Address */}
                <div className="flex flex-col gap-8">
                    <Link href="/" className="inline-block">
                        <img
                            src="/logo/SLlogo.png"
                            alt="Shadowline Logo"
                            className="h-12 w-auto object-contain"
                        />
                    </Link>
                    <div className="space-y-2 text-sm text-gray-600">
                        <p>Bangalore , India</p>
                    </div>
                </div>

                {/* Column 2: Product Links */}
                <div>
                    <h4 className="font-sans text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Product</h4>
                    <div className="flex flex-col gap-4">
                        {product.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium uppercase tracking-wider text-gray-400 hover:text-white transition-colors duration-300 w-fit"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Column 3: Company Links */}
                <div>
                    <h4 className="font-sans text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Company</h4>
                    <div className="flex flex-col gap-4">
                        {company.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={(e) => {
                                    if (link.name === "Careers") {
                                        e.preventDefault();
                                        alert("No vacancy at the moment, but you can mail sales@shadowlineautomotive.com");
                                    }
                                }}
                                className="text-sm font-medium uppercase tracking-wider text-gray-400 hover:text-white transition-colors duration-300 w-fit"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Column 4: Support Links */}
                <div>
                    <h4 className="font-sans text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Support</h4>
                    <div className="flex flex-col gap-4">
                        {supportLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium uppercase tracking-wider text-gray-400 hover:text-white transition-colors duration-300 w-fit"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Faint Background Grid Text */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.02]">
                <div className="w-[200%] h-[200%] absolute top-[-50%] left-[-50%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
            </div>

            {/* Bottom Bar */}
            <div className="max-w-[1600px] mx-auto px-6 relative z-10 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 uppercase tracking-widest">
                <p>&copy; 2026 Shadowline Automotive. All rights reserved.</p>
                <div className="flex gap-8">
                    <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
                </div>
            </div>
        </footer>
    );
}
