"use client";

import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

export function Footer() {
    return (
        <footer className="px-4 md:px-8 pt-24 pb-12 bg-[#F1EDE3]">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-16 border-b border-black/5">
                    <div className="space-y-6">
                        <h3 className="text-3xl font-display font-bold text-[#1F261C]">
                            Stay in the loop
                        </h3>
                        <p className="text-[#4A5145]">
                            Monthly notes on process, favorite materials, and behind-the-scenes looks at ongoing builds.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Email address"
                                className="flex-1 rounded-full border border-[#E3DCCA] bg-white/80 px-6 py-3 text-[#1F261C] focus:border-[#5F6F52] outline-none"
                            />
                            <button className="px-6 py-3 rounded-full bg-[#1F261C] text-white font-semibold">
                                Subscribe
                            </button>
                        </form>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-sm uppercase tracking-[0.3em] text-[#7C8674]">Quick links</h4>
                        <ul className="space-y-2 text-[#1F261C]">
                            {['Work', 'Process', 'Writing', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="hover:text-[#5F6F52] transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-sm uppercase tracking-[0.3em] text-[#7C8674]">Elsewhere</h4>
                        <div className="flex gap-3">
                            {[Facebook, Instagram, Twitter, Linkedin].map((Icon) => (
                                <a key={Icon.name} href="#" className="w-10 h-10 rounded-full border border-[#E3DCCA] flex items-center justify-center text-[#1F261C] hover:bg-[#1F261C] hover:text-white transition-colors">
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                        <p className="text-sm text-[#4A5145]">
                            hello@engineer.com
                            <br /> +1 (555) 123-4567
                        </p>
                    </div>
                </div>

                <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#7C8674]">
                    <p>© {new Date().getFullYear()} Sada Studio. Built with care in Figma & Next.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-[#1F261C]">Privacy</a>
                        <a href="#" className="hover:text-[#1F261C]">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
