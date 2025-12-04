"use client";

import { motion } from "framer-motion";
import { Ornament } from "@/components/ui/ornament";
import { ArrowRight } from "lucide-react";

const articles = [
    {
        title: "Top Trends in Graphic Design for 2025",
        description: "Exploring fresh styles the creative world this year.",
        color: "bg-amethyst/10",
    },
    {
        title: "The Role of Color Psychology in Design",
        description: "Understanding how color influences user perception and emotion.",
        color: "bg-rose-gold/10",
    },
    {
        title: "Creating Impactful Social Media Graphics",
        description: "Strategies for designing visuals that stop the scroll.",
        color: "bg-sapphire/10",
    },
];

export function Articles() {
    return (
        <section className="py-32 px-4 md:px-8 relative">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-6 h-6 text-amethyst">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                </svg>
                            </div>
                            <span className="text-parchment/60 uppercase tracking-widest text-sm font-medium">
                                Latest Article
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold text-parchment leading-tight">
                            THOUGHTS from Behind <br />
                            <span className="text-amethyst">the Creative Curtain</span>
                        </h2>
                    </div>

                    <button className="px-8 py-3.5 rounded-full border border-white/10 text-parchment hover:bg-white/5 transition-colors uppercase tracking-wider text-sm font-bold flex items-center gap-2">
                        All Articles
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-white/[0.02] rounded-2xl overflow-hidden border border-white/5 hover:border-amethyst/30 transition-all duration-500"
                        >
                            <div className={`h-48 w-full ${article.color} relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-gradient-to-t from-void to-transparent opacity-60" />
                            </div>

                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-parchment mb-4 group-hover:text-amethyst transition-colors">
                                    {article.title}
                                </h3>
                                <p className="text-parchment/60 mb-8 leading-relaxed">
                                    {article.description}
                                </p>

                                <button className="text-sm font-bold text-parchment/80 uppercase tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
                                    Read More
                                    <ArrowRight className="w-4 h-4 text-amethyst" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
