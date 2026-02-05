"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="bg-black text-white border-t border-white/10 relative overflow-hidden">
            {/* CTA Section */}
            <div className="py-24 px-6 md:px-12 relative z-10">
                <div className="max-w-7xl mx-auto text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-8xl font-brand font-bold uppercase italic tracking-tighter mb-8"
                    >
                        Ready to <span className="text-accent">Ride?</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 font-sans text-lg md:text-xl max-w-2xl mx-auto mb-12"
                    >
                        Experience the future of cycling. Pre-orders are now open for the 2026 production run.
                    </motion.p>
                    <motion.button
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-12 py-5 bg-accent text-black font-brand font-bold uppercase tracking-widest text-lg hover:bg-white transition-colors duration-300"
                    >
                        Reserve Yours
                    </motion.button>
                </div>
            </div>

            {/* Footer Content */}
            <div className="bg-[#050505] py-12 border-t border-white/5 relative z-10">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-brand font-bold uppercase italic tracking-widest text-white mb-2">Shadowline</h3>
                        <p className="text-xs text-gray-500 font-sans uppercase tracking-wide">Automotive Grade Bicycles</p>
                    </div>

                    <div className="flex space-x-8">
                        {['Instagram', 'Twitter', 'YouTube'].map((social) => (
                            <a
                                key={social}
                                href="#"
                                className="text-gray-400 hover:text-accent transition-colors text-xs font-bold uppercase tracking-wider font-brand"
                            >
                                {social}
                            </a>
                        ))}
                    </div>

                    <div className="text-xs text-gray-600 font-sans">
                        &copy; {new Date().getFullYear()} Shadowline Automotive.
                    </div>
                </div>
            </div>

            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
        </footer>
    );
}
