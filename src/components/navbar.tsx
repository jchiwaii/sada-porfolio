"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Me", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Pages", href: "#pages" },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 left-0 right-0 z-50 px-6 py-5 md:px-12 flex items-center justify-between bg-white/80 backdrop-blur-xl border-b border-black/5 shadow-[0_10px_40px_rgba(0,0,0,0.05)]"
        >
            {/* Logo */}
            <Link href="/" className="relative z-50">
                <div className="text-2xl font-bold font-display tracking-tighter text-[#1F261C]">
                    SADA<span className="text-[#5F6F52]">.</span>
                </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-12">
                <div className="flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-[#1F261C] hover:text-[#5F6F52] font-medium text-xs uppercase tracking-[0.3em] transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <button className="px-6 py-2.5 bg-[#1F261C] text-[#F7F4ED] rounded-full font-medium text-sm tracking-wide hover:bg-[#2C3F2C] transition-colors shadow-[0_15px_35px_rgba(31,38,28,0.2)]">
                        Let's Talk
                    </button>
                    <button className="p-2.5 border border-[#1F261C]/10 rounded-full hover:bg-[#1F261C] hover:text-[#F7F4ED] transition-colors text-[#1F261C]">
                        <Menu className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button
                className="md:hidden relative z-50 p-2 text-[#1F261C]"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X /> : <Menu />}
            </button>

            {/* Mobile Nav Overlay */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-[#F7F4ED] z-40 flex flex-col items-center justify-center gap-8 md:hidden"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-3xl font-display font-bold text-[#1F261C]"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button className="mt-4 px-8 py-3 bg-[#1F261C] text-[#F7F4ED] rounded-full font-medium text-lg">
                        Let's Talk
                    </button>
                </motion.div>
            )}
        </motion.nav>
    );
}
