"use client";

import { motion } from "framer-motion";
import { Ornament } from "@/components/ui/ornament";
import { Send, Mail, MapPin } from "lucide-react";

export function Contact() {
    return (
        <section className="py-32 px-4 md:px-8 relative">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-parchment">Get in Touch</h2>
                    <p className="text-parchment/50 max-w-lg mx-auto leading-relaxed">
                        Available for freelance opportunities and full-time roles.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        <div className="space-y-2">
                            <h3 className="text-lg font-bold text-rose-gold font-display uppercase tracking-wider">Location</h3>
                            <div className="flex items-center gap-4 text-parchment/60">
                                <MapPin className="w-5 h-5 text-amethyst" />
                                <span>San Francisco, CA (Remote)</span>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-lg font-bold text-rose-gold font-display uppercase tracking-wider">Email</h3>
                            <div className="flex items-center gap-4 text-parchment/60">
                                <Mail className="w-5 h-5 text-amethyst" />
                                <span>hello@engineer.com</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-xs font-mono text-parchment/50 uppercase tracking-wider">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full bg-white/[0.03] border border-white/10 rounded px-4 py-3 text-parchment focus:border-amethyst/50 focus:bg-white/[0.05] outline-none transition-all"
                                placeholder="Enter your name"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-xs font-mono text-parchment/50 uppercase tracking-wider">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full bg-white/[0.03] border border-white/10 rounded px-4 py-3 text-parchment focus:border-amethyst/50 focus:bg-white/[0.05] outline-none transition-all"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-xs font-mono text-parchment/50 uppercase tracking-wider">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full bg-white/[0.03] border border-white/10 rounded px-4 py-3 text-parchment focus:border-amethyst/50 focus:bg-white/[0.05] outline-none transition-all resize-none"
                                placeholder="Write your message..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 bg-amethyst text-white hover:bg-amethyst/90 py-3.5 rounded transition-colors uppercase tracking-wider font-bold text-sm"
                        >
                            <Send className="w-4 h-4" />
                            Send Message
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
