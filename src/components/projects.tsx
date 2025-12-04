"use client";

import { motion } from "framer-motion";
import { Settings, Thermometer, Activity, ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "Lime Plant Instrumentation Project",
        description: "Core team member for new lime production plant instrumentation. Handled installation, loop-checking, and commissioning of field instruments across process zones. Supported PLC integration and calibration.",
        tags: ["PLC Integration", "Commissioning", "Calibration"],
        icon: <Settings className="w-5 h-5 text-muted-foreground" />,
        year: "2025",
        result: "Plant Commissioned",
        link: "#",
    },
    {
        title: "Automated Temperature Control System",
        description: "Designed and implemented using Siemens S7-1200 PLC. Features real-time monitoring and hysteresis control for precise process stability in manufacturing applications.",
        tags: ["Siemens S7-1200", "Hysteresis Control", "Automation"],
        icon: <Thermometer className="w-5 h-5 text-muted-foreground" />,
        year: "2024",
        result: "Precise Control",
        link: "#",
    },
    {
        title: "Automated Level Control System",
        description: "Developed comprehensive level control using Siemens S7-1200 PLC. Integrated transmitters, flow sensors, and motorized valves with real-time data processing algorithms.",
        tags: ["Liquid Management", "Process Algorithms", "Sensors"],
        icon: <Activity className="w-5 h-5 text-muted-foreground" />,
        year: "2024",
        result: "Automated Response",
        link: "#",
    },
];

export function Projects() {
    return (
        <section id="projects" className="relative py-16 md:py-24 px-4 md:px-8 bg-background">
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
                    <div>
                        <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Technical Portfolio</p>
                        <h2 className="text-3xl md:text-4xl font-display font-bold leading-tight text-foreground">
                            Engineering projects delivering <span className="italic font-light">precision</span><br className="hidden md:block" /> and operational efficiency.
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative rounded-[32px] border border-border bg-white/60 backdrop-blur-sm p-7 flex flex-col gap-5 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="flex items-start justify-between">
                                <div className="p-3 rounded-2xl bg-muted border border-border">
                                    {project.icon}
                                </div>
                                <div className="text-right">
                                    <p className="text-xs uppercase tracking-widest text-muted-foreground">{project.year}</p>
                                    <p className="text-sm font-semibold text-foreground">{project.result}</p>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-foreground leading-tight mb-3">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap items-center gap-2 mt-auto">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="px-3 py-1 rounded-full bg-muted text-xs font-medium tracking-wide text-muted-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
