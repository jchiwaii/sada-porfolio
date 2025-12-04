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
        <section className="py-28 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-14">
                    <p className="text-xs uppercase tracking-[0.35em] text-[#7C8674] mb-3">In conversation</p>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-[#1F261C]">
                        Frequently asked questions about the way we’ll work together.
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
                            className="rounded-[24px] border border-black/5 bg-white/80 backdrop-blur"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between px-6 py-5 text-left"
                            >
                                <span className="text-lg font-medium text-[#1F261C] leading-snug">{faq.question}</span>
                                <div className={`p-2 rounded-full border border-[#1F261C]/10 transition-colors ${openIndex === index ? 'bg-[#1F261C] text-[#F7F4ED]' : 'text-[#4A5145]'}`}>
                                    {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                </div>
                            </button>

                            <motion.div
                                initial={false}
                                animate={{ height: openIndex === index ? "auto" : 0 }}
                                className="overflow-hidden"
                            >
                                <div className="px-6 pb-6 text-[#4A5145] leading-relaxed">
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
