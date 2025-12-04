"use client";

import { motion } from "framer-motion";
import { Ornament } from "@/components/ui/ornament";

const skills = [
    {
        category: "Languages",
        items: ["JavaScript (ES6+)", "TypeScript", "Python", "SQL"],
    },
    {
        category: "Frontend",
        items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
    },
    {
        category: "Backend",
        items: ["Node.js", "Express", "PostgreSQL", "Redis"],
    },
    {
        category: "DevOps",
        items: ["Docker", "AWS", "CI/CD", "Git"],
    },
];

export function Skills() {
    return (
        <section className="py-32 px-4 md:px-8 relative bg-white/[0.02]">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-parchment">Technical Skills</h2>
                    <p className="text-parchment/50 max-w-lg mx-auto leading-relaxed">
                        Proficiencies and technologies used in development.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-xl border border-white/5 bg-void hover:border-amethyst/30 transition-colors"
                        >
                            <h3 className="text-lg font-bold text-rose-gold mb-6 font-display tracking-wide">
                                {skillGroup.category}
                            </h3>
                            <ul className="space-y-4">
                                {skillGroup.items.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-parchment/70 text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-amethyst/50" />
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
