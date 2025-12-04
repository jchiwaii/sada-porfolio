"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const articles = [
    {
        title: "Top trends in crafted web experiences for 2025",
        description: "Why softer palettes and editorial typography are shaping how we browse.",
        color: "from-[#E9E4D8] to-[#F8F5EE]",
        topic: "Perspective",
    },
    {
        title: "Color psychology for intentional interfaces",
        description: "Using temperature and contrast to remove noise while guiding intent.",
        color: "from-[#F2EBE3] to-[#E6DED4]",
        topic: "Process",
    },
    {
        title: "Building collaborative rituals with clients",
        description: "How shared boards, async reviews, and calm sprints keep projects human.",
        color: "from-[#EDEAE2] to-[#F7F4ED]",
        topic: "Practice",
    },
];

export function Articles() {
    return (
        <section className="py-28 px-4 md:px-8 relative">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-14">
                    <div>
                        <p className="text-xs tracking-[0.35em] uppercase text-[#7C8674] mb-4">Notebook</p>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-[#1F261C] leading-tight">
                            Notes from the studio—process breakdowns, materials, and mindset shifts.
                        </h2>
                    </div>

                    <button className="px-7 py-3 rounded-full border border-[#1F261C]/15 text-sm font-semibold tracking-[0.2em] text-[#1F261C] bg-white/80 flex items-center gap-2">
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
                            className="group rounded-[32px] border border-black/5 bg-white/80 backdrop-blur overflow-hidden flex flex-col shadow-[0_20px_60px_rgba(15,23,15,0.08)]"
                        >
                            <div className={`h-52 bg-gradient-to-br ${article.color}`}>
                                <div className="h-full w-full flex flex-col justify-between p-6">
                                    <span className="text-xs uppercase tracking-[0.35em] text-[#7C8674]">{article.topic}</span>
                                    <div className="text-sm text-[#5F6F52] max-w-[220px] leading-relaxed">
                                        Field notes, moodboards, screenshots.
                                    </div>
                                </div>
                            </div>

                            <div className="p-7 flex flex-col gap-6 flex-1">
                                <div>
                                    <h3 className="text-2xl font-semibold text-[#1F261C] leading-tight mb-3">
                                        {article.title}
                                    </h3>
                                    <p className="text-sm text-[#4A5145] leading-relaxed">
                                        {article.description}
                                    </p>
                                </div>

                                <div className="mt-auto flex items-center gap-2 text-sm font-semibold tracking-[0.2em] text-[#1F261C]">
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
