"use client";

import { Ornament } from "@/components/ui/ornament";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="py-12 px-4 bg-void border-t border-white/10 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-4 h-4 bg-amethyst rotate-45 border border-gold" />
            </div>

            <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center">
                <div className="flex items-center gap-6 mb-8">
                    <a href="#" className="text-parchment/60 hover:text-rose-gold transition-colors">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-parchment/60 hover:text-rose-gold transition-colors">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-parchment/60 hover:text-rose-gold transition-colors">
                        <Twitter className="w-5 h-5" />
                    </a>
                </div>

                <Ornament type="flourish" className="mb-6 opacity-30" />

                <p className="text-parchment/40 text-sm font-serif">
                    © {new Date().getFullYear()} Software Engineer. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
