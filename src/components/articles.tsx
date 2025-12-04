"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const articles = [
    {
        title: "Top trends in crafted web experiences for 2025",
        description: "Why softer palettes and editorial typography are shaping how we browse.",
        topic: "Perspective",
    },
    {
        title: "Color psychology for intentional interfaces",
        description: "Using temperature and contrast to remove noise while guiding intent.",
        topic: "Process",
    },
    {
        title: "Building collaborative rituals with clients",
        description: "How shared boards, async reviews, and calm sprints keep projects human.",
        topic: "Practice",
    },
];

export function Articles() {
    return (
        <section className="py-28 px-4 md:px-8 relative bg-background">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-14">
                    <div>
                        <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Notebook</p>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight">
                            Notes from the studio—process breakdowns, materials, and <span className="italic font-light">mindset shifts</span>.
                        </h2>
                    </div>

                    <button className="px-7 py-3 rounded-full border border-border text-sm font-semibold tracking-widest text-foreground bg-white/50 hover:bg-muted flex items-center gap-2 transition-colors">
                        Browse all
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {articles.map((article, index) => (
                        <motion.article
                            key={article.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-30px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group rounded-[32px] border border-border bg-white/60 backdrop-blur-sm overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="h-48 bg-muted/50 border-b border-border">
                                <div className="h-full w-full flex flex-col justify-between p-6">
                                    <span className="text-xs uppercase tracking-widest text-muted-foreground">{article.topic}</span>
                                    <div className="text-sm text-muted-foreground max-w-[220px] leading-relaxed">
                                        Field notes, moodboards, screenshots.
                                    </div>
                                </div>
                            </div>

                            <div className="p-7 flex flex-col gap-6 flex-1">
                                <div>
                                    <h3 className="text-2xl font-semibold text-foreground leading-tight mb-3">
                                        {article.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {article.description}
                                    </p>
                                </div>

                                <div className="mt-auto flex items-center gap-2 text-sm font-semibold tracking-widest text-foreground">
                                    Read story
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
