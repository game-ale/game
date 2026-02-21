"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import Badge from "@/components/ui/Badge";
import Counter from "@/components/ui/Counter";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { Brain, Code2, Cpu, Database, Globe, GraduationCap } from "lucide-react";
import styles from "./About.module.css";

const skills = [
    { category: "Languages", items: ["Python", "C++", "Java", "TypeScript", "Dart"], icon: Code2 },
    { category: "Frameworks", items: ["Next.js", "React", "Flutter", "FastAPI", "Django"], icon: Globe },
    { category: "ML & AI", items: ["XGBoost", "LightGBM", "RAG", "SHAP", "MLflow", "Fine-Tuning"], icon: Brain },
    { category: "Databases", items: ["PostgreSQL", "MongoDB", "MySQL", "ChromaDB"], icon: Database },
    { category: "DevOps & MLOps", items: ["Docker", "CI/CD", "GitHub Actions", "Dagster", "dbt", "MLflow"], icon: Cpu },
];

const stats = [
    { end: 1000, suffix: "+", label: "Problems Solved" },
    { end: 15000, suffix: "+", label: "Data Points Analyzed" },
    { end: 450, suffix: "+", label: "DSA Problems (A2SV)" },
    { end: 10, suffix: "+", label: "Zindi Competitions" },
];

export default function About() {
    return (
        <section className={`section ${styles.about}`} id="about">
            <div className="container">
                <SectionHeading
                    label="About Me"
                    title="Engineering Intelligence at Scale"
                    subtitle="Building production-grade systems from data ingestion to ML inference"
                />

                <div className={styles.grid}>
                    {/* Bio */}
                    <AnimatedSection className={styles.bio}>
                        <p className={styles.bioText}>
                            I&apos;m a Computer Science &amp; Engineering student at{" "}
                            <strong>Adama Science and Technology University</strong>,
                            specializing in AI systems and high-performance software. Through{" "}
                            <strong><a href="https://a2sv.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-blue)', textDecoration: 'none' }}>A2SV</a>&apos;s Google-backed program</strong>, I&apos;ve solved 450+
                            advanced algorithmic problems and trained in system design under
                            production constraints.
                        </p>
                        <p className={styles.bioText}>
                            My engineering focus spans the full intelligence stack: data
                            ingestion, ETL orchestration, ML model development, and scalable
                            API design. I build systems that process thousands of data points,
                            serve real-time predictions, and maintain strict reliability
                            guarantees.
                        </p>

                        {/* Education card */}
                        <GlassCard padding="md" hover={false} className={styles.eduCard}>
                            <div className={styles.eduHeader}>
                                <GraduationCap size={24} className={styles.eduIcon} />
                                <div>
                                    <h4 className={styles.eduTitle}>B.Sc. Computer Science &amp; Engineering</h4>
                                    <p className={styles.eduSchool}>Adama Science and Technology University</p>
                                    <p className={styles.eduYear}>2022 — 2027</p>
                                </div>
                            </div>
                            <div className={styles.coursework}>
                                {["AI", "Database Systems", "Computer Networks", "Software Engineering", "Computer Architecture"].map((course) => (
                                    <Badge key={course} label={course} variant="default" size="sm" />
                                ))}
                            </div>
                        </GlassCard>
                    </AnimatedSection>

                    {/* Skills grid */}
                    <div className={styles.skillsColumn}>
                        {skills.map((skill, i) => (
                            <AnimatedSection key={skill.category} delay={i * 0.1}>
                                <GlassCard padding="sm" className={styles.skillCard}>
                                    <div className={styles.skillHeader}>
                                        <skill.icon size={18} className={styles.skillIcon} />
                                        <h4 className={styles.skillCategory}>{skill.category}</h4>
                                    </div>
                                    <div className={styles.skillItems}>
                                        {skill.items.map((item) => (
                                            <Badge key={item} label={item} size="sm" />
                                        ))}
                                    </div>
                                </GlassCard>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>

                {/* Stats */}
                <AnimatedSection delay={0.3}>
                    <div className={styles.stats}>
                        {stats.map((stat) => (
                            <Counter
                                key={stat.label}
                                end={stat.end}
                                suffix={stat.suffix}
                                label={stat.label}
                            />
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
