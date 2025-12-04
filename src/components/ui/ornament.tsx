import React from "react";
import { cn } from "@/lib/utils";

interface OrnamentProps {
    className?: string;
    type?: "divider" | "corner-tl" | "corner-tr" | "corner-bl" | "corner-br" | "flourish";
}

export function Ornament({ className, type = "divider" }: OrnamentProps) {
    if (type === "divider") {
        return (
            <div className={cn("flex items-center justify-center w-full my-8 opacity-40", className)}>
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-parchment to-transparent" />
                <div className="mx-4 text-parchment text-lg">❖</div>
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-parchment to-transparent" />
            </div>
        );
    }

    if (type === "flourish") {
        return (
            <div className={cn("text-parchment opacity-40", className)}>
                <svg width="100" height="20" viewBox="0 0 100 20" fill="currentColor">
                    <path d="M50 10 C 40 10, 30 5, 20 5 C 10 5, 0 10, 0 10 C 10 10, 20 15, 30 15 C 40 15, 50 10, 50 10 Z M50 10 C 60 10, 70 5, 80 5 C 90 5, 100 10, 100 10 C 90 10, 80 15, 70 15 C 60 15, 50 10, 50 10 Z" />
                </svg>
            </div>
        );
    }

    return null;
}
