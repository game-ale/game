"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import Badge from "@/components/ui/Badge";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import NextImage from "next/image";
import Link from "next/link";
import styles from "./Projects.module.css";

export default function Projects() {
    return (
        <section className={`section section-alt ${styles.projects}`} id="projects">
            <div className="container">
                <SectionHeading
                    label="Projects"
                    title="Production-Grade Systems"
                    subtitle="End-to-end engineering from data ingestion to intelligent interfaces"
                />

                <div className={styles.grid}>
                    {projects.map((project, i) => (
                        <AnimatedSection key={project.slug} delay={i * 0.1}>
                            <GlassCard padding={project.thumbnail ? "none" : "lg"} className={styles.card}>
                                {/* Thumbnail */}
                                {project.thumbnail && (
                                    <Link
                                        href={project.directLink || `/projects/${project.slug}`}
                                        className={styles.thumbnailLink}
                                        target={project.directLink ? "_blank" : undefined}
                                        rel={project.directLink ? "noopener noreferrer" : undefined}
                                    >
                                        <div className={styles.thumbnailWrapper}>
                                            <NextImage
                                                src={project.thumbnail}
                                                alt={project.title}
                                                fill
                                                className={styles.thumbnailImg}
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                            />
                                            <div className={styles.thumbnailOverlay} />
                                        </div>
                                    </Link>
                                )}

                                <div className={project.thumbnail ? styles.cardBody : undefined}>
                                    {/* Hero metric */}
                                    <div className={styles.heroMetric}>
                                        <span className={styles.metricValue}>
                                            {project.heroMetric.value}
                                        </span>
                                        <span className={styles.metricLabel}>
                                            {project.heroMetric.label}
                                        </span>
                                    </div>

                                    <Link
                                        href={project.directLink || `/projects/${project.slug}`}
                                        className={styles.titleLink}
                                        target={project.directLink ? "_blank" : undefined}
                                        rel={project.directLink ? "noopener noreferrer" : undefined}
                                    >
                                        <h3 className={styles.title}>{project.title}</h3>
                                    </Link>
                                    <p className={styles.subtitle}>{project.subtitle}</p>
                                    <p className={styles.description}>{project.description}</p>

                                    {/* Tech stack */}
                                    <div className={styles.techStack}>
                                        {project.techStack.slice(0, 5).map((tech) => (
                                            <Badge key={tech} label={tech} size="sm" />
                                        ))}
                                        {project.techStack.length > 5 && (
                                            <Badge
                                                label={`+${project.techStack.length - 5}`}
                                                variant="purple"
                                                size="sm"
                                            />
                                        )}
                                    </div>

                                    {/* Footer */}
                                    <div className={styles.cardFooter}>
                                        <Link
                                            href={project.directLink || `/projects/${project.slug}`}
                                            className={styles.readMore}
                                            target={project.directLink ? "_blank" : undefined}
                                            rel={project.directLink ? "noopener noreferrer" : undefined}
                                        >
                                            {project.directLink ? (project.github ? "View on GitHub" : "View Live Demo") : "Read Case Study"}
                                            {project.directLink ? <ExternalLink size={14} /> : <ArrowRight size={14} />}
                                        </Link>
                                        <div className={styles.links}>
                                            {project.github && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={styles.externalLink}
                                                    aria-label="GitHub"
                                                >
                                                    <Github size={18} />
                                                </a>
                                            )}
                                            {project.live && (
                                                <a
                                                    href={project.live}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={styles.externalLink}
                                                    aria-label="Live Demo"
                                                >
                                                    <ExternalLink size={18} />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </GlassCard>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
