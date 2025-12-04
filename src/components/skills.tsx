"use client";

import { motion } from "framer-motion";


const skills = [
    {
        category: "Technical Skills",
        summary: "Specialized engineering capabilities.",
        items: ["PLC Programming (Siemens S7-1200)", "Manufacturing Process Control", "Instrumentation Systems", "Equipment Calibration", "Process Optimization", "Production Line Troubleshooting", "Technical Documentation"],
    },
    {
        category: "Manufacturing",
        summary: "Operational and industrial expertise.",
        items: ["Industrial Instrumentation", "Control Systems", "Assembly Line Operations", "Quality Control", "Preventive Maintenance", "Production Monitoring"],
    },
    {
        category: "Software",
        summary: "Digital tools and platforms.",
        items: ["Microsoft Office Suite", "CAD Systems"],
    },
    {
        category: "Core Competencies",
        summary: "Professional attributes and soft skills.",
        items: ["Problem-Solving", "Analytical Thinking", "Team Collaboration", "Adaptability", "Detail-Oriented Approach", "Safety Compliance"],
    },
];

export function Skills() {
    return (
        <section className="relative py-16 md:py-24 px-4 md:px-8 bg-transparent">
            <div className="absolute inset-0 opacity-[0.3]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)', backgroundSize: '24px 24px' }} />
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="max-w-3xl mb-16">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Expertise</p>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground leading-tight">
                        A comprehensive toolkit for <span className="italic font-light">industrial excellence</span>.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.45, delay: index * 0.08 }}
                            className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-sm p-8 flex flex-col gap-6 shadow-sm hover:border-primary/50 transition-colors"
                        >
                            <div>
                                <p className="text-xs uppercase tracking-widest text-primary mb-2 font-mono">{skillGroup.category}</p>
                                <p className="text-sm text-muted-foreground leading-relaxed">{skillGroup.summary}</p>
                            </div>
                            <div className="h-px bg-white/10" />
                            <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map((item) => (
                                    <span key={item} className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-sm text-foreground/80 font-medium hover:text-primary hover:border-primary/30 transition-colors">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
