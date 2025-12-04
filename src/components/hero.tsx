"use client";

import { motion } from "framer-motion";
import { ArrowDown, Facebook, Instagram, Twitter, Star, ArrowUpRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center gap-16 px-6 lg:px-20 pt-32 pb-16 overflow-hidden bg-[#F7F4ED] text-[#1F261C]">

            {/* Textured background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-[-10%] w-[520px] h-[520px] bg-[#C7C1B2]/30 blur-[140px] rounded-full" />
                <div className="absolute bottom-[-20%] left-[-15%] w-[580px] h-[580px] bg-[#5F6F52]/10 blur-[160px] rounded-full" />
                <div
                    className="absolute inset-0 opacity-[0.08] mix-blend-multiply"
                    style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #bfb8a5 1px, transparent 0)', backgroundSize: '22px 22px' }}
                />
            </div>

            {/* Left Content */}
            <div className="flex-1 flex flex-col items-start justify-center z-10 max-w-2xl lg:pr-12">

                {/* Sub Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-4 mb-10 px-5 py-3 rounded-full border border-black/5 bg-white/60 backdrop-blur"
                >
                    <div className="p-2 bg-[#1F261C] text-[#F7F4ED] rounded-full">
                        <Star className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-semibold tracking-[0.35em] uppercase text-[#4A5145]">Art Direction & Code</span>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.05 }}
                    className="text-[clamp(2.75rem,6vw,5.5rem)] font-bold leading-tight mb-8 font-display tracking-tight"
                >
                    Designing soulful <span className="italic font-serif text-[#5F6F52]">digital spaces</span><br />
                    for thoughtful brands.
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="text-lg text-[#4A5145] max-w-xl mb-10 leading-relaxed"
                >
                    Blending strategy, typography, and tactile visuals to build experiences that feel curated and calm. Every interaction is intentional—balancing warmth, utility, and timeless taste.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.25 }}
                    className="flex flex-col sm:flex-row gap-4 mb-12 w-full"
                >
                    <button className="group flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-[#1F261C] text-[#F7F4ED] font-medium text-lg tracking-wide shadow-[0_20px_60px_rgba(31,38,28,0.25)]">
                        Let's Build Something
                        <ArrowUpRight className="w-5 h-5" />
                    </button>
                    <button className="px-10 py-4 rounded-full border border-[#1F261C]/15 text-[#1F261C] font-medium text-lg tracking-wide bg-white/70 hover:bg-white transition-colors">
                        View Process
                    </button>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.35 }}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full"
                >
                    {[
                        { value: "42+", label: "brands partnered" },
                        { value: "18", label: "products launched" },
                        { value: "08", label: "years crafting" },
                    ].map((stat) => (
                        <div key={stat.label} className="rounded-2xl border border-black/5 bg-white/70 px-6 py-5">
                            <p className="text-3xl font-display tracking-tight">{stat.value}</p>
                            <p className="text-xs uppercase tracking-[0.2em] text-[#4A5145] mt-2">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>

                {/* Social Media */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.45 }}
                    className="mt-16 flex items-center gap-6"
                >
                    <span className="text-sm font-semibold tracking-[0.4em] uppercase text-[#4A5145]">Follow</span>
                    <div className="h-px w-12 bg-[#1F261C]/15" />
                    <div className="flex items-center gap-3">
                        {[Facebook, Instagram, Twitter].map((Icon, i) => (
                            <a
                                key={i}
                                href="#"
                                className="p-3 border border-[#1F261C]/10 rounded-full text-[#1F261C] bg-white/70 hover:bg-[#1F261C] hover:text-[#F7F4ED] transition-all duration-300"
                            >
                                <Icon className="w-4 h-4" />
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Right Images */}
            <div className="flex-1 relative w-full h-full min-h-[520px] mt-10 lg:mt-0 flex items-center justify-center">

                {/* Halo */}
                <div className="absolute inset-y-10 inset-x-0 rounded-[280px] bg-gradient-to-b from-[#E4DFD3] to-[#D1CAB9] blur-3xl opacity-70" />

                {/* Main Image Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative w-[320px] h-[480px] md:w-[420px] md:h-[600px] rounded-[140px] overflow-hidden shadow-[0_40px_140px_rgba(31,38,28,0.25)] border border-white/40 bg-gradient-to-b from-[#FDFBF6] to-[#E3DDCF]"
                >
                    <div className="absolute inset-0 flex items-center justify-center text-[#4A5145]/50 font-mono text-xs tracking-[0.4em]">
                        portrait coming soon
                    </div>
                    <div className="absolute inset-8 border border-dashed border-[#1F261C]/10 rounded-[120px] pointer-events-none" />
                </motion.div>

                {/* Floating mood cards */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.25 }}
                    className="absolute -right-4 md:right-12 bottom-16 flex flex-col gap-4 z-20"
                >
                    {[
                        { title: "Material studies", rotation: "rotate-6" },
                        { title: "UI Moods", rotation: "-rotate-6" },
                    ].map(({ title, rotation }) => (
                        <div key={title} className={`w-32 h-36 rounded-2xl shadow-lg border border-black/5 p-3 bg-white/80 backdrop-blur ${rotation}`}>
                            <div className="w-full h-full rounded-xl bg-gradient-to-br from-[#5F6F52]/10 to-[#C07F5C]/10 flex items-center justify-center text-xs font-semibold text-[#4A5145]">
                                {title}
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Scroll Down Circle */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute left-0 bottom-6 hidden lg:flex items-center justify-center w-32 h-32"
                >
                    <div className="relative w-full h-full animate-spin-slow">
                        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                            <path
                                id="curve"
                                d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0"
                                fill="transparent"
                            />
                            <text className="text-[10px] uppercase tracking-[0.3em] font-medium fill-[#4A5145]">
                                <textPath href="#curve" startOffset="0%">
                                    Scroll Down • Scroll Down • Scroll Down •
                                </textPath>
                            </text>
                        </svg>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <ArrowDown className="w-4 h-4 text-[#4A5145]" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
