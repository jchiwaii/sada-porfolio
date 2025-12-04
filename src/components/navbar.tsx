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
            className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 flex items-center justify-between bg-[#E5E2DA]/80 backdrop-blur-md border-b border-[#2C3F2C]/10"
        >
            {/* Logo */}
            <Link href="/" className="relative z-50">
                <div className="text-2xl font-bold font-display tracking-tighter text-[#2C3F2C]">
                    SADA<span className="text-[#2C3F2C]/60">.</span>
                </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-12">
                <div className="flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-[#2C3F2C] hover:text-[#2C3F2C]/70 font-medium text-sm uppercase tracking-wide transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <button className="px-6 py-2.5 bg-[#2C3F2C] text-[#F5F3EB] rounded-full font-medium text-sm tracking-wide hover:bg-[#2C3F2C]/90 transition-colors">
                        Let's Talk
                    </button>
                    <button className="p-2.5 border border-[#2C3F2C]/20 rounded-full hover:bg-[#2C3F2C] hover:text-[#F5F3EB] transition-colors text-[#2C3F2C]">
                        <Menu className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button
                className="md:hidden relative z-50 p-2 text-[#2C3F2C]"
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
                    className="fixed inset-0 bg-[#E5E2DA] z-40 flex flex-col items-center justify-center gap-8 md:hidden"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-3xl font-display font-bold text-[#2C3F2C]"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button className="mt-4 px-8 py-3 bg-[#2C3F2C] text-[#F5F3EB] rounded-full font-medium text-lg">
                        Let's Talk
                    </button>
                </motion.div>
            )}
        </motion.nav>
    );
}
