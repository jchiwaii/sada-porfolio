"use client";

import { motion } from "framer-motion";
import { Send, Mail, MapPin } from "lucide-react";

export function Contact() {
    return (
        <section className="py-28 px-4 md:px-8 relative">
            <div className="max-w-5xl mx-auto rounded-[40px] border border-black/5 bg-white/80 backdrop-blur px-8 py-16 md:px-16 shadow-[0_35px_120px_rgba(15,23,15,0.12)]">
                <div className="flex flex-col md:flex-row gap-16">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 space-y-10"
                    >
                        <div>
                            <p className="text-xs uppercase tracking-[0.35em] text-[#7C8674] mb-4">Let's create</p>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-[#1F261C] leading-tight">
                                Tell me about the story you want your product to tell.
                            </h2>
                            <p className="text-[#4A5145] mt-6">
                                Collaboration is remote-first with weekly rituals, async boards, and quick prototypes so you can see progress instead of chasing updates.
                            </p>
                        </div>

                        <div className="space-y-8 text-[#1F261C]">
                            <div className="flex items-center gap-4">
                                <span className="w-10 h-10 rounded-full bg-[#F1EDE3] flex items-center justify-center">
                                    <MapPin className="w-5 h-5 text-[#5F6F52]" />
                                </span>
                                <div>
                                    <p className="text-xs uppercase tracking-[0.3em] text-[#7C8674]">Studio</p>
                                    <p>San Francisco • Remote worldwide</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <span className="w-10 h-10 rounded-full bg-[#F1EDE3] flex items-center justify-center">
                                    <Mail className="w-5 h-5 text-[#C07F5C]" />
                                </span>
                                <div>
                                    <p className="text-xs uppercase tracking-[0.3em] text-[#7C8674]">Email</p>
                                    <p>hello@engineer.com</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 space-y-5"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        {[{ label: "Name", id: "name", type: "text", placeholder: "Maya Studio" }, { label: "Email", id: "email", type: "email", placeholder: "hello@brand.com" }].map((field) => (
                            <div key={field.id} className="space-y-2">
                                <label htmlFor={field.id} className="text-xs uppercase tracking-[0.3em] text-[#7C8674]">
                                    {field.label}
                                </label>
                                <input
                                    type={field.type}
                                    id={field.id}
                                    placeholder={field.placeholder}
                                    className="w-full rounded-2xl border border-[#E3DCCA] bg-white/70 px-5 py-3 text-[#1F261C] focus:border-[#5F6F52] focus:bg-white outline-none transition"
                                />
                            </div>
                        ))}

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-xs uppercase tracking-[0.3em] text-[#7C8674]">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                placeholder="Share a quick overview, timeline, or inspiration."
                                className="w-full rounded-2xl border border-[#E3DCCA] bg-white/70 px-5 py-3 text-[#1F261C] focus:border-[#5F6F52] focus:bg-white outline-none transition resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 rounded-full bg-[#1F261C] text-[#F7F4ED] py-4 font-semibold tracking-[0.2em] uppercase"
                        >
                            <Send className="w-4 h-4" />
                            Send Note
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
