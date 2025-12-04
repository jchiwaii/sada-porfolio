"use client";

import { Ornament } from "@/components/ui/ornament";
import { Github, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-void border-t border-white/10 pt-24 pb-8 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
                    {/* Subscribe Section */}
                    <div className="lg:col-span-5 space-y-8">
                        <h3 className="text-3xl font-bold text-parchment">
                            Get the latest <span className="text-amethyst">update</span>
                        </h3>
                        <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                            <div className="relative flex-1">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full bg-white/[0.03] border border-white/10 rounded-full px-6 py-4 text-parchment focus:border-amethyst/50 focus:bg-white/[0.05] outline-none transition-all"
                                />
                            </div>
                            <button className="px-8 py-4 bg-amethyst text-white rounded-full font-bold hover:bg-amethyst/90 transition-colors whitespace-nowrap">
                                Subscribe Now
                            </button>
                        </form>

                        <div className="pt-8">
                            <h4 className="text-sm font-bold text-parchment/60 uppercase tracking-wider mb-4">Follow Me</h4>
                            <div className="flex gap-4">
                                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-parchment/60 hover:text-white hover:bg-amethyst hover:border-amethyst transition-all">
                                    <Facebook className="w-5 h-5" />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-parchment/60 hover:text-white hover:bg-amethyst hover:border-amethyst transition-all">
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-parchment/60 hover:text-white hover:bg-amethyst hover:border-amethyst transition-all">
                                    <Twitter className="w-5 h-5" />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-parchment/60 hover:text-white hover:bg-amethyst hover:border-amethyst transition-all">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Spacer */}
                    <div className="hidden lg:block lg:col-span-1" />

                    {/* Links Sections */}
                    <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-8">
                        <div className="space-y-6">
                            <h4 className="text-lg font-bold text-parchment">Quick Link</h4>
                            <ul className="space-y-4">
                                <li><a href="#" className="text-parchment/60 hover:text-amethyst transition-colors">Home</a></li>
                                <li><a href="#" className="text-parchment/60 hover:text-amethyst transition-colors">About Me</a></li>
                                <li><a href="#" className="text-parchment/60 hover:text-amethyst transition-colors">Services</a></li>
                                <li><a href="#" className="text-parchment/60 hover:text-amethyst transition-colors">My Contact</a></li>
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-lg font-bold text-parchment">Services</h4>
                            <ul className="space-y-4">
                                <li><a href="#" className="text-parchment/60 hover:text-amethyst transition-colors">Content Creation</a></li>
                                <li><a href="#" className="text-parchment/60 hover:text-amethyst transition-colors">Portfolio Building</a></li>
                                <li><a href="#" className="text-parchment/60 hover:text-amethyst transition-colors">Graphic Design</a></li>
                                <li><a href="#" className="text-parchment/60 hover:text-amethyst transition-colors">Personal Branding</a></li>
                                <li><a href="#" className="text-parchment/60 hover:text-amethyst transition-colors">Website Design</a></li>
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-lg font-bold text-parchment">Contact</h4>
                            <ul className="space-y-4">
                                <li className="text-parchment/60">hello@engineer.com</li>
                                <li className="text-parchment/60">+1 (555) 123-4567</li>
                                <li className="text-parchment/60">San Francisco, CA</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-parchment/40 text-sm">
                        Copyright © {new Date().getFullYear()} Software Engineer. All Rights Reserved.
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="text-parchment/40 hover:text-parchment text-sm transition-colors">Privacy Policy</a>
                        <a href="#" className="text-parchment/40 hover:text-parchment text-sm transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
