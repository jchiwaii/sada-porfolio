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
        <section className="py-32 px-4 md:px-8 relative bg-white/[0.02]">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="w-6 h-6 text-amethyst">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                            </svg>
                        </div>
                        <span className="text-parchment/60 uppercase tracking-widest text-sm font-medium">
                            Common Questions
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-parchment mb-6">
                        Frequently Asked <span className="text-amethyst">Questions</span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="border border-white/10 rounded-xl overflow-hidden bg-void/50"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="text-lg font-medium text-parchment">{faq.question}</span>
                                <div className={`p-1 rounded-full border border-white/10 transition-colors ${openIndex === index ? 'bg-amethyst text-white border-amethyst' : 'text-parchment/50'}`}>
                                    {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                </div>
                            </button>

                            <motion.div
                                initial={false}
                                animate={{ height: openIndex === index ? "auto" : 0 }}
                                className="overflow-hidden"
                            >
                                <div className="p-6 pt-0 text-parchment/60 leading-relaxed">
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
