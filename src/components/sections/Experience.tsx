"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import Badge from "@/components/ui/Badge";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { Briefcase, GraduationCap } from "lucide-react";
import styles from "./Experience.module.css";

type EducationEntry = {
    kind: "education";
    role: string;
    company: string;
    period: string;
    description: string;
    coursework?: string[];
    certifications?: Array<{
        label: string;
        href: string;
    }>;
};

type ExperienceEntry = {
    role: string;
    company: string;
    companyUrl: string;
    period: string;
    type: string;
    description: string;
    highlights: string[];
    tech: string[];
};

const education: EducationEntry[] = [
    {
        kind: "education",
        role: "B.Sc. in Computer Science and Engineering",
        company: "Adama Science and Technology University",
        period: "2022 — 2027",
        description:
            "Computer Science and Engineering degree with core training in AI, database systems, computer networks, software engineering, and computer architecture.",
        coursework: ["AI", "Database Systems", "Computer Networks", "Software Engineering", "Computer Architecture"],
    },
    {
        kind: "education",
        role: "Software Engineering Trainee",
        company: "A2SV (Africa to Silicon Valley)",
        period: "01/18/2025 — 02/10/2026",
        description:
            "Intensive training in advanced data structures, algorithms, and system design under production constraints. Solved 450+ complex algorithmic problems with a focus on optimization and scalable solutions.",
        coursework: ["System Design", "Data Structures and  Algorithms" ,"Soft Skills", "Problem Solving"],
    },
    {
        kind: "education",
        role: "AI & MLOps Engineer",
        company: "Kifiya AI Mastery Program — 10 Academy",
        period: "January,2026 — March, 2026 ",
        description:
            "Designed and deployed production-ready Generative AI systems integrating RAG pipelines, structured data workflows, and real-time analytics dashboards. Delivered enterprise-style weekly projects simulating real production challenges.",
        certifications: [
            {
                label: "Certificate",
                href: "https://drive.google.com/file/d/1Rc0lRYWQxwSLpY-i5AKCMiTyjPvtDgyP/view?usp=sharing",
            },
            {
                label: "Program Detail Certification",
                href: "https://drive.google.com/file/d/1LJUn79wzYfuwXU1o9qtCQuW7C2ZGA6ap/view?usp=sharing",
            },
        ],
    },
];

const experiences: ExperienceEntry[] = [
    {
        role: "Flutter Mobile Developer Internship",
        company: "Eskalate",
        companyUrl: "https://www.eskalate.io/",
        period: "June,2025 — September,2025",
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
        company: "CSEC-ASTU — Data Science Club",
        companyUrl: "https://t.me/CSEC_ASTU",
        period: "September,2025 — Present",
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
        tech: ["Deep Learning", "Computer Vision", "SHAP", "MLflow", "CNN", "Zindi Africa Competitions"],
    },
];

const coursework = [
    "AI",
    "Database Systems",
    "Computer Networks",
    "Software Engineering",
    "Computer Architecture",
];

export default function Experience() {
    return (
        <section className={`section ${styles.root}`} id="experience">
            <div className="container">
                <SectionHeading
                    label=""
                    title="Engineering Journey"
                    subtitle="Production-grade training and real-world impact"
                />
                <GlassCard padding="md" hover={false} className={styles.educationBanner}>
                    <div className={styles.educationHeader}>
                        <GraduationCap size={24} className={styles.educationIcon} />
                        <div>
                            <h4 className={styles.educationTitle}>B.Sc. Computer Science &amp; Engineering</h4>
                            <p className={styles.educationSchool}>Adama Science and Technology University</p>
                            <p className={styles.educationYear}>2022 — 2027</p>
                        </div>
                    </div>
                    <div className={styles.coursework}>
                        {coursework.map((course) => (
                            <Badge key={course} label={course} variant="default" size="sm" />
                        ))}
                    </div>
                </GlassCard>

                <div className={styles.columns}>
                    <div className={styles.sectionBlock}>
                        <div className={styles.sectionLabelWrap}>
                            <h3 className={styles.sectionLabel}>Education</h3>
                        </div>
                        <div className={styles.timeline}>
                            <div className={styles.line} />

                            {education.map((item, i) => (
                                <AnimatedSection
                                    key={`education-${item.company}`}
                                    delay={i * 0.15}
                                    direction="left"
                                >
                                    <GlassCard padding="lg" className={styles.card}>
                                        <div className={styles.cardHeader}>
                                            <div className={styles.iconWrap}>
                                                <GraduationCap size={20} />
                                            </div>
                                            <div>
                                                <h3 className={styles.role}>{item.role}</h3>
                                                <p className={styles.company}>{item.company}</p>
                                                <div className={styles.meta}>
                                                    <span className={styles.period}>{item.period}</span>
                                                    <Badge label="Education" variant="default" size="sm" />
                                                </div>
                                            </div>
                                        </div>

                                        <p className={styles.description}>{item.description}</p>

                                        {item.certifications?.length ? (
                                            <div className={styles.linkGroup}>
                                                {item.certifications.map((cert) => (
                                                    <a
                                                        key={cert.href}
                                                        href={cert.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={styles.educationLink}
                                                    >
                                                        {cert.label}
                                                    </a>
                                                ))}
                                            </div>
                                        ) : (
                                            <div className={styles.techStack}>
                                                {item.coursework?.map((course) => (
                                                    <Badge key={course} label={course} size="sm" />
                                                ))}
                                            </div>
                                        )}
                                    </GlassCard>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>

                    <div className={styles.sectionBlock}>
                        <div className={styles.sectionLabelWrap}>
                            <h3 className={styles.sectionLabel}>Experience</h3>
                        </div>
                        <div className={styles.timeline}>
                            <div className={styles.line} />

                            {experiences.map((exp, i) => (
                                <AnimatedSection
                                    key={`experience-${exp.company}`}
                                    delay={i * 0.15}
                                    direction="right"
                                >
                                    <GlassCard padding="lg" className={styles.card}>
                                        <div className={styles.cardHeader}>
                                            <div className={styles.iconWrap}>
                                                <Briefcase size={20} />
                                            </div>
                                            <div>
                                                <h3 className={styles.role}>{exp.role}</h3>
                                                <p className={styles.company}>
                                                    <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-blue)", textDecoration: "none" }}>{exp.company}</a>
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
                                                <Badge
                                                    key={t}
                                                    label={t}
                                                    size="sm"
                                                    href={t === "Zindi Africa Competitions" ? "https://zindi.africa/users/game_ale" : undefined}
                                                />
                                            ))}
                                        </div>
                                    </GlassCard>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
