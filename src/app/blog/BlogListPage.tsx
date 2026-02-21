"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import Badge from "@/components/ui/Badge";
import GlassCard from "@/components/ui/GlassCard";
import { blogPosts } from "@/data/blog";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import styles from "./BlogList.module.css";

export default function BlogListPage() {
    return (
        <div className={styles.page}>
            <div className="container">
                {/* Header */}
                <div className={styles.backRow}>
                    <Link href="/" className={styles.backLink}>
                        <ArrowLeft size={16} /> Home
                    </Link>
                </div>

                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className={styles.label}>Blog</span>
                    <h1 className={styles.title}>Engineering Articles</h1>
                    <p className={styles.subtitle}>
                        Deep dives into system design, AI engineering, and competitive
                        programming insights.
                    </p>
                </motion.div>

                {/* Posts */}
                <div className={styles.grid}>
                    {blogPosts.map((post, i) => (
                        <AnimatedSection key={post.slug} delay={i * 0.1}>
                            <GlassCard padding="lg" className={styles.card}>
                                <div className={styles.meta}>
                                    <Badge label={post.category} variant="accent" size="sm" />
                                    <span className={styles.date}>
                                        <Clock size={12} /> {post.readTime}
                                    </span>
                                </div>

                                <Link href={`/blog/${post.slug}`} className={styles.titleLink}>
                                    <h2 className={styles.postTitle}>{post.title}</h2>
                                </Link>
                                <p className={styles.excerpt}>{post.excerpt}</p>

                                <div className={styles.tags}>
                                    {post.tags.map((tag) => (
                                        <Badge key={tag} label={tag} size="sm" />
                                    ))}
                                </div>

                                <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                                    Read Article <ArrowRight size={14} />
                                </Link>
                            </GlassCard>
                        </AnimatedSection>
                    ))}
                </div>

                {/* Coming Soon */}
                <AnimatedSection delay={0.4} className={styles.comingSoon}>
                    <GlassCard padding="lg" hover={false}>
                        <p className={styles.comingSoonText}>
                            More articles coming soon. Topics in the pipeline: distributed
                            system design patterns, ML pipeline orchestration, and advanced
                            competitive programming techniques.
                        </p>
                    </GlassCard>
                </AnimatedSection>
            </div>
        </div>
    );
}
