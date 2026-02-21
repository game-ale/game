"use client";

import { ReactNode } from "react";
import styles from "./GlassCard.module.css";

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
    padding?: "sm" | "md" | "lg" | "none";
}

export default function GlassCard({
    children,
    className = "",
    hover = true,
    padding = "md",
}: GlassCardProps) {
    return (
        <div
            className={`${styles.card} ${styles[padding]} ${hover ? styles.hoverable : ""
                } ${className}`}
        >
            <div className={styles.borderGradient} />
            {children}
        </div>
    );
}
