"use client";

import { motion } from "framer-motion";

const education = [
    {
        degree: "BSc Control & Instrumentation Engineering",
        school: "Jomo Kenyatta University of Agriculture & Technology",
        details: "Second Class Honors, Upper Division",
        year: "2019 – 2024",
        location: "Kenya"
    },
    {
        degree: "AI Career Essential Program (AICE)",
        school: "ALX Africa",
        details: "",
        year: "Feb. 2024 – Apr. 2024",
        location: "Online"
    },
    {
        degree: "Industrial Systems Instrumentation and Automation (ISA)",
        school: "Kenya Training Program in Industrial Systems",
        details: "",
        year: "Apr. 2024 – May 2024",
        location: "Kenya"
    },
    {
        degree: "Sustainability of Industrial Processes",
        school: "TotalEnergies Professeurs Associes",
        details: "Environment Management in Oil and Gas",
        year: "Oct. 2023",
        location: "Kenya"
    }
];

export function Education() {
    return (
        <section className="py-16 md:py-24 px-4 md:px-8 bg-transparent border-t border-white/5">
            <div className="max-w-4xl mx-auto">
                <div className="mb-12">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Background</p>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                        Education & Certifications
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-primary/50 transition-colors group"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-xs font-medium uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded font-mono">
                                    {edu.year}
                                </span>
                                <span className="text-xs text-muted-foreground">{edu.location}</span>
                            </div>
                            <h3 className="text-lg font-bold text-foreground mb-1 leading-snug group-hover:text-primary transition-colors">{edu.degree}</h3>
                            <p className="text-sm text-muted-foreground font-medium mb-1">{edu.school}</p>
                            {edu.details && (
                                <p className="text-sm text-muted-foreground/60 italic">{edu.details}</p>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
