import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface MenuToggleProps {
    isOpen: boolean;
    toggle: () => void;
}

export default function MenuToggle({ isOpen, toggle }: MenuToggleProps) {
    return (
        <button
            onClick={toggle}
            className="relative z-[70] w-12 h-12 flex items-center justify-center focus:outline-none group"
            aria-label={isOpen ? "Close menu" : "Open menu"}
        >
            <AnimatePresence mode="wait">
                {isOpen ? (
                    <motion.div
                        key="close"
                        initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                        transition={{ duration: 0.2 }}
                    >
                        <X className="w-8 h-8 text-white group-hover:text-gray-300 transition-colors" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="menu"
                        initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                        exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Menu className="w-8 h-8 text-white group-hover:text-gray-300 transition-colors" strokeWidth={2} />
                    </motion.div>
                )}
            </AnimatePresence>
        </button>
    );
}
