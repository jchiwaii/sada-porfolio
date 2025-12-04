"use client";

import { motion } from "framer-motion";
import { ArrowDown, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center gap-16 px-6 lg:px-20 pt-32 pb-16 overflow-hidden bg-background text-foreground">

            {/* Textured background - Simplified for clean look */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-muted-foreground/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-20%] left-[-15%] w-[600px] h-[600px] bg-muted-foreground/5 blur-[120px] rounded-full" />
            </div>

            {/* Left Content */}
            <div className="flex-1 flex flex-col items-start justify-center z-10 max-w-2xl lg:pr-12">

                {/* Sub Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-3 mb-8 px-4 py-2 rounded-full border border-border bg-white/50 backdrop-blur-sm"
                >
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground">Available for opportunities</span>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.05 }}
                    className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 font-display tracking-tight text-foreground"
                >
                    Beatrice Sada <span className="italic text-muted-foreground font-display font-light">Chilumo</span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed font-light"
                >
                    Control & Instrumentation Engineer. Thriving on exploring cutting-edge technologies and finding innovative solutions to complex challenges.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.25 }}
                    className="flex flex-col sm:flex-row gap-4 mb-12 w-full"
                >
                    <a href="#contact" className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium text-base tracking-wide hover:opacity-90 transition-opacity shadow-lg shadow-black/5">
                        Contact Me
                        <ArrowUpRight className="w-4 h-4" />
                    </a>
                    <a href="#experience" className="px-8 py-4 rounded-full border border-border text-foreground font-medium text-base tracking-wide bg-white/50 hover:bg-muted transition-colors flex items-center justify-center">
                        View Experience
                    </a>
                </motion.div>

                {/* Social Media */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.45 }}
                    className="mt-4 flex items-center gap-6"
                >
                    <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">Connect</span>
                    <div className="h-px w-8 bg-border" />
                    <div className="flex items-center gap-3">
                        <a
                            href="https://linkedin.com/in/beatrice-chilumo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 border border-border rounded-full text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-300"
                        >
                            <Linkedin className="w-4 h-4" />
                        </a>
                        <a
                            href="mailto:beatricesadachilumo@gmail.com"
                            className="p-2.5 border border-border rounded-full text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-300"
                        >
                            <Mail className="w-4 h-4" />
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Right Images */}
            <div className="flex-1 relative w-full h-full min-h-[500px] mt-10 lg:mt-0 flex items-center justify-center">

                {/* Halo */}
                <div className="absolute inset-y-10 inset-x-0 rounded-[280px] bg-gradient-to-b from-muted to-transparent blur-3xl opacity-50" />

                {/* Main Image Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative w-[300px] h-[460px] md:w-[400px] md:h-[580px] rounded-[40px] overflow-hidden shadow-2xl shadow-black/5 border border-white/60 bg-muted"
                >
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/40 font-mono text-xs tracking-widest uppercase">
                        Portrait
                    </div>
                </motion.div>

                {/* Scroll Down - Centered Circle */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex items-center justify-center w-24 h-24"
                >
                    <div className="relative w-full h-full animate-spin-slow">
                        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                            <path
                                id="curve"
                                d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0"
                                fill="transparent"
                            />
                            <text className="text-[9px] uppercase tracking-[0.25em] font-medium fill-muted-foreground">
                                <textPath href="#curve" startOffset="0%">
                                    Scroll Down • Scroll Down • Scroll Down •
                                </textPath>
                            </text>
                        </svg>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <ArrowDown className="w-4 h-4 text-muted-foreground" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
