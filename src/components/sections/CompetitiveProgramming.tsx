"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { Award, ExternalLink, Trophy, Zap } from "lucide-react";
import styles from "./CompetitiveProgramming.module.css";
import { useTranslation } from "@/i18n/LanguageContext";

const platforms = [
    {
        name: "LeetCode",
        rating: "1416+",
        link: "https://leetcode.com/u/game_ale/",
        color: "var(--accent-amber)",
    },
    {
        name: "Codeforces",
        rating: "1081",
        link: "https://codeforces.com/profile/gemechualemu",
        color: "var(--accent-blue)",
    },
    {
        name: "Zindi",
        rating: "Active",
        link: "https://zindi.africa/users/game_ale",
        color: "var(--accent-emerald)",
    },
];

const achievements = [
    {
        icon: Trophy,
        title: "ETCPC 2025",
        description: "Top 8 nationally in the Ethiopian Competitive Programming Contest",
        variant: "accent" as const,
        certificateLink: "https://drive.google.com/file/d/1Fz8cSTiCdfhiQvgDWzgKFZgRvjAZM4hO/view",
    },
    {
        icon: Award,
        title: "CSEC CPD Cup",
        description: "2nd place among 27 competing teams",
        variant: "emerald" as const,
        certificateLink: "https://drive.google.com/file/d/1OwxPmL3eDr-Yc-eqpvGnJUZMpQjyAqmf/view",
    },
    {
        icon: Zap,
        title: "ALX Code League",
        description: "Ranked 6th place nationally representing ASTU",
        variant: "accent" as const,
        certificateLink: "https://drive.google.com/file/d/1urByHExbJlMhCVTAR63jvuxGOziBXM0P/view?usp=sharing",
    },
];


export default function CompetitiveProgramming() {
    const { t } = useTranslation();

    return (
        <section className="section" id="algorithms">
            <div className="container">
                <SectionHeading
                    label={t.algorithms.label}
                    title={t.algorithms.title}
                    subtitle={t.algorithms.subtitle}
                />

                {/* Achievements grid */}
                <div className={styles.grid}>
                    {achievements.map((ach, i) => (
                        <AnimatedSection key={ach.title} delay={i * 0.1}>
                            <GlassCard padding="lg" className={styles.achieveCard}>
                                <div className={styles.achieveContent}>
                                    <div className={styles.achieveHeader}>
                                        <div className={styles.achieveIcon}>
                                            <ach.icon size={20} />
                                        </div>
                                        {"certificateLink" in ach && (
                                            <a
                                                href={ach.certificateLink as string}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.certLink}
                                                aria-label="View Certificate"
                                            >
                                                <ExternalLink size={16} />
                                            </a>
                                        )}
                                    </div>
                                    <h4 className={styles.achieveTitle}>
                                        {ach.title.includes("A2SV") ? (
                                            <><a href="https://a2sv.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-blue)', textDecoration: 'none' }}>A2SV</a>{ach.title.replace("A2SV", "")}</>
                                        ) : ach.title.includes("CSEC") ? (
                                            <><a href="https://t.me/CSEC_ASTU" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-blue)', textDecoration: 'none' }}>CSEC</a>{ach.title.replace("CSEC", "")}</>
                                        ) : ach.title}
                                    </h4>
                                    <p className={styles.achieveDesc}>{ach.description}</p>
                                    {"certificateLink" in ach && (
                                        <a
                                            href={ach.certificateLink as string}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.viewCertText}
                                        >
                                            {t.algorithms.viewCertificate}
                                        </a>
                                    )}
                                </div>
                            </GlassCard>
                        </AnimatedSection>
                    ))}
                </div>

                {/* Platform ratings */}
                <AnimatedSection delay={0.3}>
                    <div className={styles.platforms}>
                        <h3 className={styles.platformsTitle}>{t.algorithms.activePlatforms}</h3>
                        <div className={styles.platformGrid}>
                            {platforms.map((p) => (
                                <a
                                    key={p.name}
                                    href={p.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.platformLink}
                                >
                                    <GlassCard padding="md" className={styles.platformCard}>
                                        <span className={styles.platformName}>{p.name}</span>
                                        <span
                                            className={styles.platformRating}
                                            style={{ color: p.color }}
                                        >
                                            {p.rating}
                                        </span>
                                    </GlassCard>
                                </a>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
