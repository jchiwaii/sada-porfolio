"use client";

import { motion } from "framer-motion";
import { Ornament } from "@/components/ui/ornament";

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center p-8 text-center overflow-hidden">
            {/* Background Effects - Subtle & Clean */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(153,102,204,0.08)_0%,transparent_60%)] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 max-w-4xl"
            >
                <div className="mb-8 inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                    <span className="text-rose-gold font-mono text-xs tracking-wider uppercase">
                        Senior Full Stack Engineer
                    </span>
                </div>

                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 text-parchment tracking-tight">
                    Software <span className="text-amethyst">Engineer</span>
                </h1>

                <div className="flex items-center justify-center gap-6 mb-10">
                    <Ornament type="divider" className="w-12 opacity-50 hidden md:flex" />
                    <p className="text-lg md:text-xl text-parchment/60 max-w-xl font-light leading-relaxed">
                        Building scalable, high-performance web applications with modern technologies. Focused on user experience and code quality.
                    </p>
                    <Ornament type="divider" className="w-12 opacity-50 hidden md:flex" />
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 py-3.5 bg-amethyst text-white hover:bg-amethyst/90 transition-colors rounded font-medium tracking-wide text-sm uppercase"
                    >
                        View Work
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 py-3.5 bg-transparent border border-white/20 text-parchment hover:bg-white/5 transition-colors rounded font-medium tracking-wide text-sm uppercase"
                    >
                        Contact Me
                    </motion.button>
                </div>
            </motion.div>

            <div className="absolute bottom-12 animate-bounce text-parchment/30">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                </svg>
            </div>
        </section>
    );
}
