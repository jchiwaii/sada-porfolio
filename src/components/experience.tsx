"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        role: "Instrumentation Technician – Lime Plant Project",
        company: "Mombasa Cement Limited",
        location: "Mombasa, Kenya",
        period: "June 2025 – Present",
        description: [
            "Assigned to the lime plant project, participating in the instrumentation and automation installation phase.",
            "Support installation of field instruments such as pressure, level, temperature, and flow transmitters across process units.",
            "Conduct loop checks, point-to-point verification, and pre-commissioning of I/O signals with PLC systems.",
            "Interpret engineering drawings, instrument datasheets, cable schedules, and P&IDs for accurate implementation.",
            "Work closely with automation engineers, contractors, and electricians to ensure safe and timely project progress.",
            "Maintain up-to-date technical documentation including calibration reports and commissioning checklists."
        ]
    },
    {
        role: "Instrumentation Technician",
        company: "Mombasa Cement Limited",
        location: "Kilifi, Kenya",
        period: "Jul. 2024 – Present",
        description: [
            "Monitor and maintain complex instrumentation systems comprising of instruments such as pressure, temperature, level and flow transmitters, ensuring optimal manufacturing performance and minimizing production downtime.",
            "Execute structured maintenance routines and calibration procedures for control systems, sensors, and weighing systems including weigh feeders and belt weighers.",
            "Collaborate with engineering teams to implement process improvements, directly contributing to enhanced operational efficiency in the plant.",
            "Troubleshoot and resolve instrumentation issues in real-time manufacturing settings, maintaining workflow continuity and production quality standards.",
            "Maintain comprehensive documentation of equipment performance and maintenance activities, supporting data-driven process optimization and quality control."
        ]
    },
    {
        role: "Attachee – Instrumentation Department",
        company: "Mombasa Cement Limited",
        location: "Kilifi, Kenya",
        period: "Feb. 2023 – Apr. 2023",
        description: [
            "Supported operations through proactive inspection and maintenance of sensors, actuators, and control systems in production environment.",
            "Enhanced operational efficiency by maintaining and calibrating gas analyzers and weigh feeders critical to manufacturing processes.",
            "Collaborated with quality assurance teams to address nonconformances and maintain product quality standards in manufacturing operations.",
            "Documented machine performance metrics and maintained precise log sheets to support process analysis and process optimization.",
            "Participated in autonomous maintenance routines, contributing to equipment reliability and uninterrupted workflows."
        ]
    }
];

export function Experience() {
    return (
        <section id="experience" className="py-16 md:py-24 px-4 md:px-8 bg-muted/30">
            <div className="max-w-4xl mx-auto">
                <div className="mb-16">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Career History</p>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                        Professional Experience
                    </h2>
                </div>

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 md:pl-0"
                        >
                            {/* Timeline line for mobile */}
                            <div className="absolute left-0 top-0 bottom-0 w-px bg-border md:hidden" />
                            <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-primary md:hidden" />

                            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
                                <div className="text-sm text-muted-foreground md:text-right pt-1">
                                    <p className="font-medium text-foreground">{exp.period}</p>
                                    <p>{exp.location}</p>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-xl font-display font-bold text-foreground">{exp.role}</h3>
                                        <p className="text-primary font-medium">{exp.company}</p>
                                    </div>

                                    <ul className="space-y-2">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                                                <span className="mt-1.5 w-1 h-1 rounded-full bg-border shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
