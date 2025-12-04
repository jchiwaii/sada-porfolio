"use client";

import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-24 px-4 md:px-8 relative bg-background">
            <div className="max-w-5xl mx-auto rounded-[40px] border border-border bg-white/60 backdrop-blur-sm px-8 py-16 md:px-16 shadow-lg shadow-black/5">
                <div className="flex flex-col md:flex-row gap-16">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 space-y-10"
                    >
                        <div>
                            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Get in touch</p>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground leading-tight">
                                Let's discuss how I can contribute to your <span className="italic font-light">engineering goals</span>.
                            </h2>
                            <p className="text-muted-foreground mt-6">
                                I am available for new opportunities and collaborations. Feel free to reach out via email or phone.
                            </p>
                        </div>

                        <div className="space-y-8 text-foreground">
                            <div className="flex items-center gap-4">
                                <span className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                                    <MapPin className="w-5 h-5 text-muted-foreground" />
                                </span>
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-muted-foreground">Location</p>
                                    <p>Kenya</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <span className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                                    <Phone className="w-5 h-5 text-muted-foreground" />
                                </span>
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-muted-foreground">Phone</p>
                                    <p>+254 711 471 269</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <span className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                                    <Mail className="w-5 h-5 text-muted-foreground" />
                                </span>
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-muted-foreground">Email</p>
                                    <p>beatricesadachilumo@gmail.com</p>
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
                        {[{ label: "Name", id: "name", type: "text", placeholder: "Your Name" }, { label: "Email", id: "email", type: "email", placeholder: "your@email.com" }].map((field) => (
                            <div key={field.id} className="space-y-2">
                                <label htmlFor={field.id} className="text-xs uppercase tracking-widest text-muted-foreground">
                                    {field.label}
                                </label>
                                <input
                                    type={field.type}
                                    id={field.id}
                                    placeholder={field.placeholder}
                                    className="w-full rounded-2xl border border-border bg-white/50 px-5 py-3 text-foreground focus:border-primary focus:bg-white outline-none transition"
                                />
                            </div>
                        ))}

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-xs uppercase tracking-widest text-muted-foreground">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                placeholder="How can I help you?"
                                className="w-full rounded-2xl border border-border bg-white/50 px-5 py-3 text-foreground focus:border-primary focus:bg-white outline-none transition resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground py-4 font-semibold tracking-widest uppercase hover:opacity-90 transition-opacity"
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
