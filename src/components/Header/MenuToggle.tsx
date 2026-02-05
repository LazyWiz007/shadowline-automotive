"use client";

import { motion } from "framer-motion";

interface MenuToggleProps {
    isOpen: boolean;
    toggle: () => void;
}

export default function MenuToggle({ isOpen, toggle }: MenuToggleProps) {
    // Path definitions for morphing
    // Closed: Horizontal lines
    // Open: Octagonal brackets

    // Note: We duplicate points in the line state to match the number of nodes in the bracket state for smooth morphing.
    // Bracket Top: M4 16 L16 4 L32 4 L44 16
    const topLineClosed = "M4 20 L16 20 L32 20 L44 20";
    const topBracketOpen = "M4 16 L16 4 L32 4 L44 16";

    // Bracket Bottom: M4 32 L16 44 L32 44 L44 32 (Reversed direction to match line Left-to-Right flow? No, M4 32 is left)
    const bottomLineClosed = "M4 28 L16 28 L32 28 L44 28";
    const bottomBracketOpen = "M4 32 L16 44 L32 44 L44 32";

    return (
        <button
            onClick={toggle}
            className="relative z-[70] w-12 h-12 flex items-center justify-center focus:outline-none group"
        >
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">

                {/* Top Path: Line -> Bracket */}
                <motion.path
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    variants={{
                        closed: { d: topLineClosed, stroke: "white", strokeOpacity: 1, translateY: 0 },
                        open: { d: topBracketOpen, stroke: "white", strokeOpacity: 0.5, translateY: 0 },
                        hover: { translateY: -4 } // Hover expansion
                    }}
                // Use 'whileHover' on the parent button to trigger the 'hover' variant here? 
                // Since the variants are nested, we need to pass the hover state down or rely on parent.
                // Framer Motion variants propagate to children if names match.
                // But here 'animate' is controlling the state "open"/"closed".
                // We can't strictly use variants for hover if 'animate' prop overrides it.
                // Strategy: Use values directly or conditional variants.
                // Better: Calculate 'd' based on isOpen, but handle hover offset layout-side or via y.
                />
                {/* WE NEED TO HANDLE HOVER EXPANSION MANUALLY IF USING variants for 'd' */}
            </svg>

            {/* Retrying approach: The hover expansion conflicts with the morph if not careful. 
          Let's put the hover on a wrapper or use the 'y' property conditionally.
      */}

            <div className="absolute inset-0 pointer-events-none">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Top Line -> Disappears/Fades Out as per 'remove top' request */}
                    <motion.path
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="square"
                        initial={false}
                        animate={isOpen ? { d: "M4 20 L44 20", opacity: 0 } : { d: "M4 20 L44 20", opacity: 1 }}
                        whileHover={!isOpen ? { y: -3 } : {}}
                        transition={{ duration: 0.3 }}
                    />

                    {/* Bottom Line -> Morphs into Bottom Bracket (The Horizon) */}
                    <motion.path
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="square"
                        initial={false}
                        animate={isOpen ? { d: bottomBracketOpen, opacity: 0.5 } : { d: bottomLineClosed, opacity: 1 }}
                        whileHover={!isOpen ? { y: 3 } : {}}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    />

                    {/* Central X - Sunrise Animation (Rising from bottom) */}
                    <motion.g
                        initial={false}
                        animate={isOpen ? "open" : "closed"}
                    >
                        {/* X part 1 */}
                        <motion.path
                            d="M18 18 L30 30"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="square"
                            variants={{
                                closed: { pathLength: 0, opacity: 0, y: 10 },
                                open: { pathLength: 1, opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 0.5, ease: "backOut", delay: 0.1 }}
                        />
                        {/* X part 2 */}
                        <motion.path
                            d="M30 18 L18 30"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="square"
                            variants={{
                                closed: { pathLength: 0, opacity: 0, y: 10 },
                                open: { pathLength: 1, opacity: 1, y: 0 }
                            }}
                            transition={{ duration: 0.5, ease: "backOut", delay: 0.1 }}
                        />
                    </motion.g>
                </svg>
            </div>
        </button>
    );
}
