"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";
import type { Project } from "@/data/projects";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import NextImage from "next/image";
import Link from "next/link";
import styles from "./CaseStudy.module.css";

interface Props {
    project: Project;
}

export default function CaseStudyPage({ project }: Props) {
    return (
        <div className={styles.page}>
            {/* Back link */}
            <div className={`container ${styles.backRow}`}>
                <Link href="/#projects" className={styles.backLink}>
                    <ArrowLeft size={16} /> Back to Projects
                </Link>
            </div>

            {/* Hero */}
            <section className={styles.hero}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Badge label="Case Study" variant="accent" size="md" />
                        <h1 className={styles.title}>{project.title}</h1>
                        <p className={styles.subtitle}>{project.subtitle}</p>
                        <p className={styles.description}>{project.description}</p>

                        <div className={styles.techStack}>
                            {project.techStack.map((tech) => (
                                <Badge key={tech} label={tech} size="md" />
                            ))}
                        </div>

                        <div className={styles.actions}>
                            <Button
                                href={project.github}
                                variant="secondary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github size={18} /> View Source
                            </Button>
                            {project.live && (
                                <Button
                                    href={project.live}
                                    variant="primary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <ExternalLink size={18} /> Live Demo
                                </Button>
                            )}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Metrics */}
            <section className={styles.metricsSection}>
                <div className="container">
                    <AnimatedSection>
                        <div className={styles.metricsGrid}>
                            {project.metrics.map((metric) => (
                                <GlassCard key={metric.label} padding="md" hover={false}>
                                    <div className={styles.metric}>
                                        <span className={styles.metricValue}>{metric.value}</span>
                                        <span className={styles.metricLabel}>{metric.label}</span>
                                    </div>
                                </GlassCard>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Architecture */}
            <section className={styles.archSection}>
                <div className="container">
                    <AnimatedSection>
                        <GlassCard padding="lg" hover={false}>
                            <h2 className={styles.sectionTitle}>System Architecture</h2>
                            <div className={styles.archFlow}>
                                {project.architectureDescription.split(" → ").map((step, i, arr) => (
                                    <div key={i} className={styles.archStep}>
                                        <div className={styles.archNode}>
                                            <span>{step}</span>
                                        </div>
                                        {i < arr.length - 1 && (
                                            <div className={styles.archArrow}>→</div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </GlassCard>
                    </AnimatedSection>
                </div>
            </section>

            {/* Screenshots Gallery */}
            {project.screenshots && project.screenshots.length > 0 && (
                <section className={styles.screenshotsSection}>
                    <div className="container">
                        <AnimatedSection>
                            <h2 className={styles.sectionTitle}>Screenshots</h2>
                            <div className={styles.screenshotsGrid}>
                                {project.screenshots.map((src, i) => (
                                    <div key={i} className={styles.screenshotCard}>
                                        <div className={styles.screenshotWrapper}>
                                            <NextImage
                                                src={src}
                                                alt={`${project.title} screenshot ${i + 1}`}
                                                width={0}
                                                height={0}
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                className={styles.screenshotImg}
                                                style={{ width: '100%', height: 'auto', maxHeight: '520px', objectFit: 'contain' }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </AnimatedSection>
                    </div>
                </section>
            )}

            {/* Case Study Sections */}
            <section className={styles.content}>
                <div className="container">
                    {project.sections.map((section, i) => (
                        <AnimatedSection key={section.title} delay={i * 0.1}>
                            <div className={styles.contentSection}>
                                <div className={styles.contentNumber}>
                                    {String(i + 1).padStart(2, "0")}
                                </div>
                                <div className={styles.contentBody}>
                                    <h2 className={styles.contentTitle}>{section.title}</h2>
                                    <p className={styles.contentText}>{section.content}</p>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className={styles.cta}>
                <div className="container">
                    <AnimatedSection>
                        <GlassCard padding="lg" hover={false} className={styles.ctaCard}>
                            <h3>Interested in this project?</h3>
                            <p>Let&apos;s discuss the engineering decisions and system design.</p>
                            <div className={styles.ctaActions}>
                                <Button href="/#contact" variant="primary">
                                    Get In Touch
                                </Button>
                                <Button
                                    href={project.github}
                                    variant="secondary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Github size={18} /> View Code
                                </Button>
                            </div>
                        </GlassCard>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
