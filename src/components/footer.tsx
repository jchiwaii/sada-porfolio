"use client";

import { Linkedin, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="px-4 md:px-8 pt-24 pb-12 bg-muted/30">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-16 border-b border-border">
                    <div className="space-y-6">
                        <h3 className="text-3xl font-display font-bold text-foreground">
                            Stay in the <span className="italic font-light">loop</span>
                        </h3>
                        <p className="text-muted-foreground">
                            Monthly notes on process, favorite materials, and behind-the-scenes looks at ongoing builds.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Email address"
                                className="flex-1 rounded-full border border-border bg-background px-6 py-3 text-foreground focus:border-primary outline-none transition-colors"
                            />
                            <button className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
                                Subscribe
                            </button>
                        </form>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-xs uppercase tracking-widest text-muted-foreground">Quick links</h4>
                        <ul className="space-y-2 text-foreground">
                            {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="hover:text-muted-foreground transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-xs uppercase tracking-widest text-muted-foreground">Connect</h4>
                        <div className="flex gap-3">
                            <a href="https://linkedin.com/in/beatrice-chilumo" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                                <Linkedin className="w-4 h-4" />
                            </a>
                            <a href="mailto:beatricesadachilumo@gmail.com" className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                                <Mail className="w-4 h-4" />
                            </a>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            beatricesadachilumo@gmail.com
                            <br /> +254 711 471 269
                        </p>
                    </div>
                </div>

                <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} Sada Studio. Built with care in Figma & Next.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
                        <a href="#" className="hover:text-foreground transition-colors">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
