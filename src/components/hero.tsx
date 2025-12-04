"use client";

import { motion } from "framer-motion";
import { ArrowDown, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center gap-16 px-6 lg:px-20 pt-32 pb-16 overflow-hidden bg-background text-foreground">

            {/* Subtle Dark Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Top Right Glow */}
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full opacity-40 mix-blend-screen animate-pulse-slow" />
                {/* Bottom Left Glow */}
                <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-500/5 blur-[150px] rounded-full opacity-30 mix-blend-screen" />

                {/* Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
            </div>

            {/* Left Content */}
            <div className="flex-1 flex flex-col items-start justify-center z-10 max-w-2xl lg:pr-12">

                {/* Sub Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center gap-3 mb-8 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
                >
                    <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                    <span className="text-[10px] font-mono font-medium tracking-widest uppercase text-primary">Available for opportunities</span>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-6xl md:text-8xl font-bold leading-[0.95] mb-8 font-display tracking-tight text-foreground"
                >
                    Beatrice <span className="block italic font-light text-muted-foreground">Sada Chilumo</span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-lg md:text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed font-light"
                >
                    Control & Instrumentation Engineer. <span className="text-foreground font-medium">Thriving on complexity</span>, exploring cutting-edge technologies, and crafting innovative solutions.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col sm:flex-row gap-4 mb-12 w-full"
                >
                    <a href="#contact" className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-foreground text-background font-medium text-base tracking-wide hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg shadow-white/5">
                        Contact Me
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                    <a href="#experience" className="px-8 py-4 rounded-full border border-white/10 text-foreground font-medium text-base tracking-wide bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center backdrop-blur-sm">
                        View Experience
                    </a>
                </motion.div>

                {/* Social Media */}
                <motion.div
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-4 flex items-center gap-6"
                >
                    <span className="text-xs font-mono font-medium tracking-widest uppercase text-muted-foreground">Connect</span>
                    <div className="h-px w-12 bg-white/10" />
                    <div className="flex items-center gap-3">
                        <a
                            href="https://linkedin.com/in/beatrice-chilumo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 border border-white/10 rounded-full text-muted-foreground hover:text-foreground hover:border-foreground hover:bg-white/5 transition-all duration-300"
                        >
                            <Linkedin className="w-4 h-4" />
                        </a>
                        <a
                            href="mailto:beatricesadachilumo@gmail.com"
                            className="p-2.5 border border-white/10 rounded-full text-muted-foreground hover:text-foreground hover:border-foreground hover:bg-white/5 transition-all duration-300"
                        >
                            <Mail className="w-4 h-4" />
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Right Images */}
            <div className="flex-1 relative w-full h-full min-h-[500px] mt-10 lg:mt-0 flex items-center justify-center">

                {/* Halo */}
                <div className="absolute inset-y-10 inset-x-0 rounded-[280px] bg-gradient-to-b from-white/5 to-transparent blur-3xl opacity-20" />

                {/* Main Image Placeholder - Blueprint Style */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-[300px] h-[460px] md:w-[400px] md:h-[580px] bg-[#0A0A0A] border border-white/10 overflow-hidden"
                >
                    {/* Technical Grid Background */}
                    <div className="absolute inset-0 opacity-[0.2]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

                    {/* Crosshairs */}
                    <div className="absolute top-4 left-4 w-4 h-4 border-l border-t border-white/30" />
                    <div className="absolute top-4 right-4 w-4 h-4 border-r border-t border-white/30" />
                    <div className="absolute bottom-4 left-4 w-4 h-4 border-l border-b border-white/30" />
                    <div className="absolute bottom-4 right-4 w-4 h-4 border-r border-b border-white/30" />

                    {/* Center Label */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                        <div className="w-16 h-16 rounded-full border border-dashed border-white/20 flex items-center justify-center animate-[spin_10s_linear_infinite]">
                            <div className="w-12 h-12 rounded-full border border-white/10" />
                        </div>
                        <div className="text-white/40 font-mono text-[10px] tracking-widest uppercase">
                            Technical Portrait
                        </div>
                        <div className="text-white/20 font-mono text-[9px] tracking-widest uppercase">
                            FIG. 01
                        </div>
                    </div>
                </motion.div>

            </div>

            {/* Scroll Down - Centered Circle */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
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
        </section>
    );
}
