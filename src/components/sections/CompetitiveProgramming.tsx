"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import Counter from "@/components/ui/Counter";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { Award, Target, Trophy, Zap } from "lucide-react";
import NextImage from "next/image";
import styles from "./CompetitiveProgramming.module.css";

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
        image: "/images/cp/icpc.png",
    },
    {
        icon: Award,
        title: "CSEC CPD Cup",
        description: "2nd place among 27 competing teams",
        variant: "emerald" as const,
        image: "/images/cp/astu-csec.png",
    },
    {
        icon: Zap,
        title: "ALX Code League",
        description: "Participated in the competitive coding league representing ASTU",
        variant: "accent" as const,
        image: "/images/cp/alx-league.png",
    },
    {
        icon: Target,
        title: "A2SV Trainee",
        description: "Google-backed advanced DSA & system design program",
        variant: "purple" as const,
    },
];


export default function CompetitiveProgramming() {
    return (
        <section className="section" id="algorithms">
            <div className="container">
                <SectionHeading
                    label="Algorithmic Engineering"
                    title="Competitive Programming"
                    subtitle="Solving complex problems under extreme constraints"
                />

                {/* Stats */}
                <AnimatedSection>
                    <div className={styles.statsRow}>
                        <Counter end={1000} suffix="+" label="Problems Solved" />
                        <Counter end={1416} suffix="+" label="LeetCode Rating" />
                        <Counter end={8} prefix="Top " label="ETCPC Ethiopia" />
                        <Counter end={2} prefix="" suffix="nd" label="CSEC CPD Cup" />
                    </div>
                </AnimatedSection>

                {/* Achievements grid */}
                <div className={styles.grid}>
                    {achievements.map((ach, i) => (
                        <AnimatedSection key={ach.title} delay={i * 0.1}>
                            <GlassCard padding="none" className={styles.achieveCard}>
                                {ach.image && (
                                    <div className={styles.imageWrapper}>
                                        <NextImage
                                            src={ach.image}
                                            alt={ach.title}
                                            fill
                                            className={styles.achieveImage}
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                        <div className={styles.imageOverlay} />
                                    </div>
                                )}
                                <div className={styles.achieveContent}>
                                    <div className={styles.achieveIcon}>
                                        <ach.icon size={20} />
                                    </div>
                                    <h4 className={styles.achieveTitle}>
                                        {ach.title.includes("A2SV") ? (
                                            <><a href="https://a2sv.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-blue)', textDecoration: 'none' }}>A2SV</a>{ach.title.replace("A2SV", "")}</>
                                        ) : ach.title.includes("CSEC") ? (
                                            <><a href="https://t.me/CSEC_ASTU" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-blue)', textDecoration: 'none' }}>CSEC</a>{ach.title.replace("CSEC", "")}</>
                                        ) : ach.title}
                                    </h4>
                                    <p className={styles.achieveDesc}>{ach.description}</p>
                                </div>
                            </GlassCard>
                        </AnimatedSection>
                    ))}
                </div>

                {/* Platform ratings */}
                <AnimatedSection delay={0.3}>
                    <div className={styles.platforms}>
                        <h3 className={styles.platformsTitle}>Active Platforms</h3>
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
