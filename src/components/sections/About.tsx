"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import Badge from "@/components/ui/Badge";
import Counter from "@/components/ui/Counter";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { GraduationCap, Trophy } from "lucide-react";
import styles from "./About.module.css";

const metrics = [
    { value: 1000, suffix: "+", label: "Problems Solved" },
    { value: 15000, suffix: "+", label: "Data Points Analyzed" },
    { value: 450, suffix: "+", label: "DSA Problems (A2SV)" },
    { value: 10, suffix: "+", label: "Zindi Competitions" },
];

export default function About() {
    return (
        <section className={`section ${styles.root}`} id="about">
            <div className="container">
                <SectionHeading
                    label="About Me"
                    title="Engineering Intelligence at Scale"
                    subtitle="Building production-grade systems from data ingestion to ML inference"
                />

                <div className={styles.layout}>
                    <AnimatedSection>
                        <GlassCard padding="lg" className={styles.storyCard}>
                            <p className={styles.lead}>
                                I&apos;m a Computer Science &amp; Engineering student at{" "}
                                <strong>Adama Science and Technology University</strong>,
                                specializing in AI systems and high-performance software. Through{" "}
                                <strong>
                                    <a
                                        href="https://a2sv.org/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: "var(--accent-blue)", textDecoration: "none" }}
                                    >
                                        A2SV
                                    </a>
                                    &apos;s Google-backed program
                                </strong>
                                , I&apos;ve solved 450+ advanced algorithmic problems and trained in
                                system design under production constraints.
                            </p>
                            <p className={styles.body}>
                                My engineering focus spans the full intelligence stack: data
                                ingestion, ETL orchestration, ML model development, and scalable
                                API design. I build systems that process thousands of data points,
                                serve real-time predictions, and maintain strict reliability
                                guarantees.
                            </p>

                            <div className={styles.focusStrip}>
                                <div className={styles.focusHeader}>
                                    <span>Core Coursework</span>
                                </div>
                                <div className={styles.focusBadges}>
                                    {[
                                        "AI",
                                        "Database Systems",
                                        "Computer Networks",
                                        "Software Engineering",
                                        "Computer Architecture",
                                    ].map((course) => (
                                        <Badge key={course} label={course} variant="default" size="sm" />
                                    ))}
                                </div>
                            </div>
                        </GlassCard>
                    </AnimatedSection>

                    <AnimatedSection direction="right" delay={0.1}>
                        <div className={styles.metricsGrid}>
                            {metrics.map((metric) => (
                                <GlassCard key={metric.label} className={styles.metricCard}>
                                    <Counter end={metric.value} suffix={metric.suffix} label={metric.label} />
                                </GlassCard>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>

                <AnimatedSection delay={0.2}>
                    <GlassCard padding="md" hover={false}>
                        <div className={styles.eduHeader}>
                            <GraduationCap size={24} className={styles.eduIcon} />
                            <div>
                                <h4 className={styles.eduTitle}>B.Sc. Computer Science &amp; Engineering</h4>
                                <p className={styles.eduSchool}>Adama Science and Technology University</p>
                                <p className={styles.eduYear}>2022 — 2027</p>
                            </div>
                        </div>
                    </GlassCard>
                </AnimatedSection>

                <AnimatedSection delay={0.25}>
                    <GlassCard padding="lg" className={styles.proofCard}>
                        <div className={styles.proofHeader}>
                            <Trophy size={18} />
                            <span>Execution Profile</span>
                        </div>
                        <p className={styles.proofText}>
                            The throughline across my work is engineering rigor: strong algorithmic
                            foundations, production-minded ML systems, and software built to stay fast,
                            explainable, and dependable under real constraints.
                        </p>
                    </GlassCard>
                </AnimatedSection>
            </div>
        </section>
    );
}
