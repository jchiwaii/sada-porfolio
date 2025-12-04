"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function Footer() {
    const [showScroll, setShowScroll] = useState(false);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowScroll(true);
            } else {
                setShowScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <footer className="relative py-12 px-6 border-t border-white/5 bg-transparent overflow-hidden">
                <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center opacity-60 hover:opacity-100 transition-opacity duration-500">

                    <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium tracking-wide uppercase">
                        <span>© {new Date().getFullYear()}</span>
                        <span className="w-1 h-1 rounded-full bg-border" />
                        <span>Beatrice Sada Chilumo</span>
                    </div>
                </div>
            </footer>

            {/* Circular Scroll Progress / Back to Top */}
            <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: showScroll ? 1 : 0, scale: showScroll ? 1 : 0.8 }}
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 z-50 w-14 h-14 flex items-center justify-center rounded-full bg-background/80 backdrop-blur-md border border-border/50 shadow-lg text-foreground hover:bg-foreground hover:text-background transition-colors group"
            >
                <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 100 100">
                    <circle
                        cx="50"
                        cy="50"
                        r="48"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-muted/20"
                    />
                    <motion.circle
                        cx="50"
                        cy="50"
                        r="48"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-primary"
                        style={{ pathLength: scaleX }}
                    />
                </svg>
                <ArrowUp className="w-5 h-5 relative z-10" />
            </motion.button>
        </>
    );
}
