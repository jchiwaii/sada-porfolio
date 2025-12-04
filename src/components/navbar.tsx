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
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed top-0 left-0 right-0 z-50 px-6 py-5 md:px-12 flex items-center justify-between bg-white/80 backdrop-blur-md border-b border-black/5"
        >
            {/* Logo */}
            <Link href="/" className="relative z-50">
                <div className="text-2xl font-bold font-display italic tracking-tight text-foreground">
                    SADA<span className="text-muted-foreground not-italic">.</span>
                </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-12">
                <div className="flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <button className="px-5 py-2 bg-primary text-primary-foreground rounded-full font-medium text-sm hover:opacity-90 transition-opacity">
                        Let's Talk
                    </button>
                    <button className="p-2 rounded-full hover:bg-muted transition-colors text-foreground">
                        <Menu className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button
                className="md:hidden relative z-50 p-2 text-foreground"
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
                    className="fixed inset-0 bg-background z-40 flex flex-col items-center justify-center gap-8 md:hidden"
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
                    <button className="mt-4 px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium text-lg">
                        Let's Talk
                    </button>
                </motion.div>
            )}
        </motion.nav>
    );
}
