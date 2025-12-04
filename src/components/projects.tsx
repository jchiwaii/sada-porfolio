"use client";

import { motion } from "framer-motion";
import { Ornament } from "@/components/ui/ornament";
import { Scroll, Map, Sword, Shield, ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "E-Commerce Platform",
        description: "A scalable marketplace built with Next.js and Stripe. Optimized for high traffic with advanced caching strategies.",
        tags: ["Next.js", "Stripe", "Redis"],
        icon: <Shield className="w-5 h-5 text-amethyst" />,
        link: "#",
    },
    {
        title: "SaaS Analytics Dashboard",
        description: "An administrative dashboard for managing resources. Features real-time data visualization and role-based access control.",
        tags: ["React", "D3.js", "Firebase"],
        icon: <Map className="w-5 h-5 text-rose-gold" />,
        link: "#",
    },
    {
        title: "Microservices API Gateway",
        description: "A high-performance gateway that routes requests to microservices. Implements rate limiting and authentication.",
        tags: ["Node.js", "GraphQL", "Docker"],
        icon: <Sword className="w-5 h-5 text-sapphire" />,
        link: "#",
    },
];

export function Projects() {
    return (
        <section className="py-32 px-4 md:px-8 relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-parchment">Selected Projects</h2>
                    <p className="text-parchment/50 max-w-lg mx-auto leading-relaxed">
                        A collection of recent work and technical achievements.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-white/[0.02] p-8 rounded-xl border border-white/5 hover:border-amethyst/30 transition-all duration-500 hover:bg-white/[0.04]"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className="p-3 bg-white/5 rounded-lg group-hover:bg-amethyst/10 transition-colors">
                                    {project.icon}
                                </div>
                                <a href={project.link} className="text-parchment/40 hover:text-white transition-colors">
                                    <ArrowUpRight className="w-5 h-5" />
                                </a>
                            </div>

                            <h3 className="text-xl font-bold text-parchment mb-3 group-hover:text-amethyst transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-parchment/60 mb-8 leading-relaxed text-sm">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="text-xs px-2.5 py-1 bg-white/5 rounded-md text-parchment/50 font-mono border border-white/5">
                                        {tag}
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
