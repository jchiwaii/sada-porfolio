"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
    return (
        <section id="about" className="py-16 md:py-24 px-4 md:px-8 bg-transparent">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 space-y-8"
                    >
                        <div>
                            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">About Me</p>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground leading-tight">
                                Passionate about <span className="italic font-light">cutting-edge technologies</span> and innovative solutions.
                            </h2>
                        </div>

                        <div className="space-y-6 text-muted-foreground leading-relaxed">
                            <p>
                                I’m a passionate engineer who thrives on exploring cutting-edge technologies and finding innovative solutions to complex challenges. Proactive by nature, I take the initiative to improve processes and systems, continually seeking ways to enhance efficiency and effectiveness.
                            </p>
                            <p>
                                As a dedicated and hardworking professional, I take pride in delivering high-quality results and am never afraid to roll up my sleeves to tackle challenging problems head-on. I am committed to professional growth and demonstrate leadership potential through problem solving, accountability, and a passion for excellence.
                            </p>
                        </div>
                    </motion.div>

                    {/* Photo Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex-1 w-full"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="h-64 w-full bg-white/5 rounded-2xl border border-white/10 overflow-hidden relative group">
                                    <Image
                                        src="/1.jpeg"
                                        alt="Working on site"
                                        fill
                                        className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>
                                <div className="h-40 w-full bg-white/5 rounded-2xl border border-white/10 overflow-hidden relative group">
                                    <Image
                                        src="/2.jpeg"
                                        alt="Technical setup"
                                        fill
                                        className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>
                            </div>
                            <div className="space-y-4 pt-8">
                                <div className="h-40 w-full bg-white/5 rounded-2xl border border-white/10 overflow-hidden relative group">
                                    <Image
                                        src="/3.jpeg"
                                        alt="Engineering detail"
                                        fill
                                        className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                    />
                                </div>
                                <div className="h-64 w-full bg-white/5 rounded-2xl border border-white/10 overflow-hidden relative group flex items-center justify-center">
                                    <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '16px 16px' }} />
                                    <div className="text-white/20 font-mono text-xs uppercase tracking-widest">
                                        More Loading...
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
