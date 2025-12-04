"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <>
            <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
                <motion.nav
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="pointer-events-auto relative flex items-center justify-between gap-4 md:gap-12 px-6 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg shadow-black/5 ring-1 ring-white/20 overflow-hidden"
                >
                    {/* Aurora Effect Background */}
                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-rose-100/10 via-teal-100/10 to-violet-100/10 opacity-50" />
                    <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/40 via-transparent to-transparent opacity-50" />

                    {/* Logo */}
                    <Link href="/" className="relative z-50 shrink-0">
                        <div className="text-xl font-bold font-mono tracking-tight text-foreground">
                            B<span className="text-muted-foreground">.</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all group-hover:w-full" />
                            </Link>
                        ))}
                    </div>

                    {/* CTA & Mobile Toggle */}
                    <div className="flex items-center gap-3">
                        <a
                            href="#contact"
                            className="hidden md:block px-5 py-2 bg-primary text-primary-foreground rounded-full font-medium text-xs tracking-wide hover:opacity-90 transition-opacity shadow-sm"
                        >
                            Let's Talk
                        </a>
                        <button
                            className="md:hidden p-2 rounded-full hover:bg-white/20 transition-colors text-foreground"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </motion.nav>
            </div>

            {/* Mobile Nav Overlay */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-background/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center gap-8 md:hidden"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-3xl font-display font-bold text-foreground"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setIsOpen(false)}
                        className="mt-4 px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium text-lg"
                    >
                        Let's Talk
                    </a>
                </motion.div>
            )}
        </>
    );
}
