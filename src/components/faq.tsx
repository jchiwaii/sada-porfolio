"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "What is your design process like?",
        answer: "My process involves deep research, strategic planning, and iterative design. I start by understanding your goals, then move to wireframing, prototyping, and finally, high-fidelity design and development.",
    },
    {
        question: "Do you work with startups?",
        answer: "Yes, I love working with startups! I specialize in helping early-stage companies build their MVP and establish a strong design system that scales with their growth.",
    },
    {
        question: "What technologies do you use?",
        answer: "I primarily work with the modern web stack: Next.js, React, TypeScript, and Tailwind CSS. For backend, I use Node.js and various database solutions depending on the project needs.",
    },
    {
        question: "How long does a typical project take?",
        answer: "Project timelines vary based on complexity. A simple landing page might take 2-3 weeks, while a full web application could take 2-3 months. I provide detailed timelines during the proposal phase.",
    },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-28 px-4 md:px-8 bg-background">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-14">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">In conversation</p>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
                        Frequently asked questions about the way we’ll <span className="italic font-light">work together</span>.
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={faq.question}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="rounded-[24px] border border-border bg-white/60 backdrop-blur-sm overflow-hidden shadow-sm"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-muted/50 transition-colors"
                            >
                                <span className="text-lg font-medium text-foreground leading-snug">{faq.question}</span>
                                <div className={`p-2 rounded-full border border-border transition-colors ${openIndex === index ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'}`}>
                                    {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                </div>
                            </button>

                            <motion.div
                                initial={false}
                                animate={{ height: openIndex === index ? "auto" : 0 }}
                                className="overflow-hidden"
                            >
                                <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                                    {faq.answer}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
