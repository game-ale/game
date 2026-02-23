"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import Badge from "@/components/ui/Badge";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { Briefcase } from "lucide-react";
import styles from "./Experience.module.css";

const experiences = [
    {
        role: "Software Engineering Trainee",
        company: "A2SV (Africa to Silicon Valley)",
        companyUrl: "https://a2sv.org/",
        period: "2025 — Present",
        type: "Google-Backed Program",
        description:
            "Intensive training in advanced data structures, algorithms, and system design under production constraints. Solved 450+ complex algorithmic problems with a focus on optimization and scalable solutions.",
        highlights: [
            "450+ advanced algorithmic problems solved",
            "System design training for distributed systems",
            "High-performance coding under strict time constraints",
            "Peer collaboration on complex engineering challenges",
        ],
        tech: ["C++", "Python", "System Design", "DSA", "Graph Theory"],
    },
    {
        role: "Flutter Mobile Developer",
        company: "Eskalate",
        companyUrl: "https://www.eskalate.io/",
        period: "2024",
        type: "AI Health Application",
        description:
            "Built an AI-powered health application with 14 test users. Led feature development, implemented ML model integration, and established automated testing practices.",
        highlights: [
            "Reduced feature development time by 25%",
            "Improved model accuracy 15–20%",
            "Built 20+ automated tests",
            "Served 14 active test users",
        ],
        tech: ["Flutter", "Dart", "Firebase", "ML Integration", "CI/CD"],
    },
    {
        role: "AI & Machine Learning Engineer",
        company: "CSEC-ASTU — Data Science Division",
        companyUrl: "https://t.me/CSEC_ASTU",
        period: "2024 — Present",
        type: "Research & Competitions",
        description:
            "Engineered end-to-end ML solutions across time-series forecasting, fraud detection, NLP, and deep learning use cases. Ranked Top 10% in multiple Zindi Africa competitions and delivered technical mentorship to 2nd-year students.",
        highlights: [
            "Top 10% in multiple Zindi Africa ML competitions",
            "Implemented SHAP-based explainability for fraud & risk modeling",
            "Designed MLflow pipelines for experiment tracking & model versioning",
            "Dockerized trained models and deployed reproducible inference APIs",
            "Mentored 2nd-year CSE students on ML workflows, feature engineering, and real-world AI system design",
        ],
        tech: ["Python", "XGBoost", "LightGBM", "SHAP", "MLflow", "Docker", "Zindi"],
    },
    {
        role: "AI & MLOps Engineer",
        company: "Kifiya AI Mastery Program — 10 Academy",
        companyUrl: "https://kifiya.com/about-kifiya/",
        period: "2024",
        type: "Production AI Systems",
        description:
            "Designed and deployed production-ready Generative AI systems integrating RAG pipelines, structured data workflows, and real-time analytics dashboards. Delivered enterprise-style weekly projects simulating real production challenges.",
        highlights: [
            "Built local RAG pipelines with embedding storage and hallucination guardrails",
            "Developed full-stack AI dashboards with Next.js and real-time data visualization",
            "Automated ML training workflows using MLflow and CI/CD pipelines",
            "Dockerized inference services and deployed scalable model-serving APIs",
            "Performed advanced analytics and statistical modeling with Python and SQL",
        ],
        tech: ["Python", "RAG", "Next.js", "MLflow", "Docker", "PostgreSQL", "CI/CD"],
    },
];

export default function Experience() {
    return (
        <section className="section" id="experience">
            <div className="container">
                <SectionHeading
                    label="Experience"
                    title="Engineering Journey"
                    subtitle="Production-grade training and real-world impact"
                />

                <div className={styles.timeline}>
                    <div className={styles.line} />

                    {experiences.map((exp, i) => (
                        <AnimatedSection
                            key={exp.company}
                            delay={i * 0.15}
                            direction={i % 2 === 0 ? "left" : "right"}
                        >
                            <GlassCard padding="lg" className={styles.card}>
                                <div className={styles.cardHeader}>
                                    <div className={styles.iconWrap}>
                                        <Briefcase size={20} />
                                    </div>
                                    <div>
                                        <h3 className={styles.role}>{exp.role}</h3>
                                        <p className={styles.company}>
                                            {exp.companyUrl ? (
                                                <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-blue)', textDecoration: 'none' }}>{exp.company}</a>
                                            ) : exp.company}
                                        </p>
                                        <div className={styles.meta}>
                                            <span className={styles.period}>{exp.period}</span>
                                            <Badge label={exp.type} variant="emerald" size="sm" />
                                        </div>
                                    </div>
                                </div>

                                <p className={styles.description}>{exp.description}</p>

                                <ul className={styles.highlights}>
                                    {exp.highlights.map((h) => (
                                        <li key={h} className={styles.highlight}>
                                            <span className={styles.bullet}>▸</span> {h}
                                        </li>
                                    ))}
                                </ul>

                                <div className={styles.techStack}>
                                    {exp.tech.map((t) => (
                                        <Badge key={t} label={t} size="sm" />
                                    ))}
                                </div>
                            </GlassCard>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
