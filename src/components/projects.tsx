"use client";

import { motion } from "framer-motion";
import { Map, Sword, Shield, ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "E-Commerce Platform",
        description: "A scalable marketplace built with Next.js and Stripe. Optimized for high traffic with advanced caching strategies.",
        tags: ["Next.js", "Stripe", "Redis"],
        icon: <Shield className="w-5 h-5 text-[#5F6F52]" />,
        year: "2025",
        result: "+38% conversion",
        link: "#",
    },
    {
        title: "SaaS Analytics Dashboard",
        description: "An administrative dashboard for managing resources. Features real-time data visualization and role-based access control.",
        tags: ["React", "D3.js", "Firebase"],
        icon: <Map className="w-5 h-5 text-[#C07F5C]" />,
        year: "2024",
        result: "Realtime insights",
        link: "#",
    },
    {
        title: "Microservices API Gateway",
        description: "A high-performance gateway that routes requests to microservices. Implements rate limiting and authentication.",
        tags: ["Node.js", "GraphQL", "Docker"],
        icon: <Sword className="w-5 h-5 text-[#8B9183]" />,
        year: "2023",
        result: "<120ms latency",
        link: "#",
    },
];

export function Projects() {
    return (
        <section className="relative py-28 px-4 md:px-8">
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#ECE6DA] to-transparent pointer-events-none" />
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
                    <div>
                        <p className="text-xs tracking-[0.35em] uppercase text-[#7C8674] mb-4">Recent collaborations</p>
                        <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight text-[#1F261C]">
                            Experience that pairs craft<br className="hidden md:block" /> with measurable results.
                        </h2>
                    </div>
                    <button className="self-start md:self-auto px-7 py-3 rounded-full border border-[#1F261C]/15 text-sm font-semibold tracking-[0.2em] text-[#1F261C] bg-white/70 hover:bg-white">
                        View archive
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative rounded-[32px] border border-black/5 bg-white/80 backdrop-blur p-7 flex flex-col gap-5 shadow-[0_15px_60px_rgba(15,23,15,0.08)]"
                        >
                            <div className="flex items-start justify-between">
                                <div className="p-3 rounded-2xl bg-[#F2EEE4] border border-black/5">
                                    {project.icon}
                                </div>
                                <div className="text-right">
                                    <p className="text-xs uppercase tracking-[0.3em] text-[#7C8674]">{project.year}</p>
                                    <p className="text-sm font-semibold text-[#5F6F52]">{project.result}</p>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold text-[#1F261C] leading-tight mb-3">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-[#4A5145] leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap items-center gap-2">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="px-3 py-1 rounded-full bg-[#F4F0E6] text-xs font-semibold tracking-wide text-[#5F6F52]">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center justify-between pt-2">
                                <span className="text-sm text-[#7C8674]">Case study →</span>
                                <a href={project.link} className="w-11 h-11 rounded-full border border-black/5 flex items-center justify-center text-[#1F261C] bg-white/80 group-hover:bg-[#1F261C] group-hover:text-[#F7F4ED] transition-all">
                                    <ArrowUpRight className="w-5 h-5" />
                                </a>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
