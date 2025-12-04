"use client";

import { motion } from "framer-motion";
import { ArrowDown, Facebook, Instagram, Twitter, Star } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 pt-32 pb-12 overflow-hidden bg-[#E5E2DA] text-[#2C3F2C]">

            {/* Background Texture/Element */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2C3F2C]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#B5B1A3]/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            {/* Left Content */}
            <div className="flex-1 flex flex-col items-start justify-center z-10 max-w-2xl lg:pr-12">

                {/* Sub Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-3 mb-8"
                >
                    <div className="p-2 bg-[#2C3F2C]/5 rounded-full">
                        <Star className="w-4 h-4 fill-[#2C3F2C] text-[#2C3F2C]" />
                    </div>
                    <span className="text-sm font-bold tracking-[0.2em] uppercase text-[#2C3F2C]/80">Art of Me</span>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.1] mb-8 font-display tracking-tight"
                >
                    Creating with <span className="italic font-serif text-[#2C3F2C]/90">Soul</span>,<br />
                    Sharing with <span className="italic font-serif text-[#2C3F2C]/90">Purpose</span>.
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg text-[#2C3F2C]/70 max-w-lg mb-12 leading-relaxed font-light"
                >
                    More than just design—it's a reflection of who I am and what I believe in. Thoughtful, intentional, and made with heart.
                </motion.p>

                {/* Button */}
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group px-10 py-4 bg-[#2C3F2C] text-[#F5F3EB] rounded-full font-medium text-lg tracking-wide hover:bg-[#2C3F2C]/90 transition-all shadow-xl shadow-[#2C3F2C]/20"
                >
                    Discover More
                </motion.button>

                {/* Social Media */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-20 flex items-center gap-6"
                >
                    <span className="font-medium text-sm uppercase tracking-wider text-[#2C3F2C]/60">Follow Me</span>
                    <div className="h-px w-12 bg-[#2C3F2C]/20" />
                    <div className="flex items-center gap-4">
                        {[Facebook, Instagram, Twitter].map((Icon, i) => (
                            <a key={i} href="#" className="p-2.5 border border-[#2C3F2C]/20 rounded-full hover:bg-[#2C3F2C] hover:text-[#E5E2DA] hover:border-[#2C3F2C] transition-all duration-300">
                                <Icon className="w-4 h-4" />
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Right Images */}
            <div className="flex-1 relative w-full h-full min-h-[500px] mt-16 lg:mt-0 flex items-center justify-center lg:justify-end">

                {/* Main Image Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative w-[320px] h-[480px] md:w-[420px] md:h-[600px] bg-[#B5B1A3] rounded-t-[10rem] rounded-b-[2rem] overflow-hidden shadow-2xl shadow-[#2C3F2C]/10"
                >
                    {/* Placeholder for User Image */}
                    <div className="absolute inset-0 flex items-center justify-center text-[#2C3F2C]/40 font-mono text-sm bg-gradient-to-b from-transparent to-[#2C3F2C]/5">
                        [User Image Here]
                    </div>

                    {/* Decorative Overlay */}
                    <div className="absolute inset-0 border border-[#2C3F2C]/5 rounded-t-[10rem] rounded-b-[2rem] m-4 pointer-events-none" />
                </motion.div>

                {/* Floating Images Group (Decorative) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="absolute bottom-20 -right-4 md:right-12 flex flex-col gap-4 z-20"
                >
                    <div className="w-24 h-32 bg-[#E5E2DA] p-2 rounded-xl shadow-lg rotate-6 transform hover:rotate-0 transition-transform duration-500">
                        <div className="w-full h-full bg-[#B5B1A3] rounded-lg" />
                    </div>
                    <div className="w-24 h-32 bg-[#E5E2DA] p-2 rounded-xl shadow-lg -rotate-6 transform hover:rotate-0 transition-transform duration-500">
                        <div className="w-full h-full bg-[#2C3F2C] rounded-lg" />
                    </div>
                </motion.div>

                {/* Scroll Down Circle */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="absolute left-0 bottom-10 hidden lg:flex items-center justify-center w-32 h-32"
                >
                    <div className="relative w-full h-full animate-spin-slow">
                        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                            <path
                                id="curve"
                                d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0"
                                fill="transparent"
                            />
                            <text className="text-[10px] uppercase tracking-widest font-medium fill-[#2C3F2C]">
                                <textPath href="#curve" startOffset="0%">
                                    Scroll Down • Scroll Down • Scroll Down •
                                </textPath>
                            </text>
                        </svg>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <ArrowDown className="w-5 h-5 text-[#2C3F2C]" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
