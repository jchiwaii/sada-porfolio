"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useLenis } from 'lenis/react';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const lenis = useLenis();

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith("#")) {
            e.preventDefault();
            lenis?.scrollTo(href);
            setIsOpen(false);
        } else if (href === "/") {
            e.preventDefault();
            lenis?.scrollTo(0);
            setIsOpen(false);
        }
    };

    return (
        <>
            <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
                <motion.nav
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="pointer-events-auto relative w-full max-w-5xl flex items-center justify-between px-2 py-2 rounded-full bg-[#0A0A0A]/60 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/20 ring-1 ring-white/5"
                >
                    {/* Glossy overlay */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/5 to-transparent opacity-50 pointer-events-none" />

                    {/* Logo */}
                    <Link href="/" className="relative z-50 shrink-0 pl-6 pr-2" onClick={(e) => handleLinkClick(e, "/")}>
                        <div className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2 font-[family-name:var(--font-dancing-script)]">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            Sada.
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center justify-center gap-8 absolute left-1/2 -translate-x-1/2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
                                onClick={(e) => handleLinkClick(e, link.href)}
                            >
                                <span className="relative">
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-full h-px bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                                </span>
                            </Link>
                        ))}
                    </div>

                    {/* CTA & Mobile Toggle */}
                    <div className="flex items-center gap-2 pr-2">
                        <a
                            href="#contact"
                            className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-white/5 hover:bg-white/10 text-foreground rounded-full font-medium text-sm tracking-wide transition-all border border-white/5 hover:border-white/10 group"
                            onClick={(e) => handleLinkClick(e, "#contact")}
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Let's Talk
                        </a>
                        <button
                            className="md:hidden p-3 rounded-full hover:bg-white/10 transition-colors text-foreground"
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
                    className="fixed inset-0 bg-[#020202]/95 backdrop-blur-3xl z-40 flex flex-col items-center justify-center gap-8 md:hidden"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-4xl font-display font-light italic text-foreground hover:text-primary transition-colors"
                            onClick={(e) => handleLinkClick(e, link.href)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="#contact"
                        onClick={(e) => handleLinkClick(e, "#contact")}
                        className="mt-8 px-8 py-4 bg-white/5 border border-white/10 text-foreground rounded-full font-medium text-lg"
                    >
                        Let's Talk
                    </a>
                </motion.div>
            )}
        </>
    );
}
