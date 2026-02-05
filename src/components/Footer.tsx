"use client";

import { motion } from "framer-motion";

const links = {
    product: ["Helium 160", "Accessories", "Apparel", "Configurator"],
    company: ["About Shadowline", "Engineering", "Careers", "Press"],
    support: ["Contact Us", "Warranty", "Find a Dealer", "Owner's Manual"],
};

export default function Footer() {
    return (
        <footer className="bg-[#050505] text-white pt-24 pb-12 overflow-hidden relative">
            <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-32 mb-32">
                    {/* Left: Slogan */}
                    <div className="w-full lg:w-1/2">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-6xl md:text-8xl lg:text-[7rem] leading-[0.9] font-brand font-bold uppercase tracking-tighter"
                        >
                            THE RIDE <br />
                            NEVER <br />
                            ENDS
                        </motion.h1>
                    </div>

                    {/* Right: Navigation Grid */}
                    <div className="w-full lg:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-8">
                        <div>
                            <h4 className="font-sans text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Product</h4>
                            <ul className="space-y-4">
                                {links.product.map(link => (
                                    <li key={link}>
                                        <a href="#" className="font-sans text-sm font-medium hover:text-teal-400 transition-colors duration-300">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-sans text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Company</h4>
                            <ul className="space-y-4">
                                {links.company.map(link => (
                                    <li key={link}>
                                        <a href="#" className="font-sans text-sm font-medium hover:text-teal-400 transition-colors duration-300">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-sans text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Support</h4>
                            <ul className="space-y-4">
                                {links.support.map(link => (
                                    <li key={link}>
                                        <a href="#" className="font-sans text-sm font-medium hover:text-teal-400 transition-colors duration-300">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/10">
                    {/* Socials */}
                    <div className="flex space-x-6">
                        {['Instagram', 'Twitter', 'YouTube', 'LinkedIn'].map((social) => (
                            <a
                                key={social}
                                href="#"
                                className="text-white hover:text-teal-400 transition-colors"
                            >
                                {/* Simple icon placeholders or text logic */}
                                <span className="sr-only">{social}</span>
                                <div className="w-5 h-5 bg-current mask-icon" />
                                {/* Using text for simplicity if icons aren't imported, but assuming text fallback or actual icons later. 
                                    For now reverting to text based on previous implementation but cleaner.
                                */}
                                <span className="text-xs font-bold uppercase tracking-wider font-brand">{social}</span>
                            </a>
                        ))}
                    </div>

                    {/* Certifications / Logo Placeholder */}
                    <div className="flex items-center gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
                        {/* Placeholder for ISO/Brand Logos */}
                        <div className="h-8 w-8 border border-white/30 rounded-full flex items-center justify-center text-[8px] font-mono">ISO</div>
                        <div className="h-8 w-8 border border-white/30 rounded-full flex items-center justify-center text-[8px] font-mono">TUV</div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8 text-[10px] text-gray-600 font-sans uppercase tracking-wider">
                    <p>Copyright © {new Date().getFullYear()} - Shadowline Automotive</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Sitemap</a>
                        <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Legal Links</a>
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                    </div>
                </div>
            </div>
            {/* Background Glow */}
            <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-teal-900/10 blur-[150px] rounded-full pointer-events-none" />
        </footer>
    );
}
