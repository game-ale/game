"use client";

import AnimatedSection from "./AnimatedSection";
import styles from "./SectionHeading.module.css";

interface SectionHeadingProps {
    label: string;
    title: string;
    subtitle?: string;
}

export default function SectionHeading({
    label,
    title,
    subtitle,
}: SectionHeadingProps) {
    return (
        <AnimatedSection className={styles.heading}>
            <span className={styles.label}>{label}</span>
            <h2 className={styles.title}>{title}</h2>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            <div className={styles.divider} />
        </AnimatedSection>
    );
}
