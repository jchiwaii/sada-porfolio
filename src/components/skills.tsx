"use client";

import { motion } from "framer-motion";
import { Ornament } from "@/components/ui/ornament";

const skills = [
    {
        category: "Languages",
        summary: "The syntax palette I reach for daily.",
        items: ["TypeScript", "JavaScript (ESNext)", "Python", "SQL"],
    },
    {
        category: "Frontend",
        summary: "Layering interactions with motion & systems.",
        items: ["React", "Next.js", "Framer Motion", "Tailwind CSS"],
    },
    {
        category: "Backend",
        summary: "APIs designed around clarity and scale.",
        items: ["Node.js", "GraphQL", "PostgreSQL", "Redis"],
    },
    {
        category: "Ops & Delivery",
        summary: "Keeping releases calm and observable.",
        items: ["Docker", "AWS", "CI/CD", "Vercel"],
    },
];

export function Skills() {
    return (
        <section className="relative py-28 px-4 md:px-8 bg-[#F1EDE3]">
            <div className="absolute inset-0 opacity-[0.5]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(31,38,28,0.08) 1px, transparent 0)', backgroundSize: '26px 26px' }} />
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="max-w-3xl mb-16">
                    <p className="text-xs uppercase tracking-[0.35em] text-[#7C8674] mb-4">Craft & systems</p>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-[#1F261C] leading-tight">
                        A balanced stack for taking ideas from sketchbook to shipped product.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.45, delay: index * 0.08 }}
                            className="rounded-[28px] border border-[#CFC7B8] bg-white/80 backdrop-blur p-6 flex flex-col gap-5 shadow-[0_20px_45px_rgba(31,38,28,0.08)]"
                        >
                            <div>
                                <p className="text-xs uppercase tracking-[0.3em] text-[#7C8674] mb-2">{skillGroup.category}</p>
                                <p className="text-sm text-[#4A5145] leading-relaxed">{skillGroup.summary}</p>
                            </div>
                            <div className="h-px bg-[#E5E0D2]" />
                            <ul className="space-y-3 text-sm text-[#1F261C]">
                                {skillGroup.items.map((item) => (
                                    <li key={item} className="flex items-center gap-3">
                                        <span className="text-[#5F6F52]">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
