"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import Badge from "@/components/ui/Badge";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { blogPosts } from "@/data/blog";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import Link from "next/link";
import styles from "./Blog.module.css";

export default function Blog() {
    return (
        <section className={`section section-alt`} id="blog">
            <div className="container">
                <SectionHeading
                    label="Blog"
                    title="Engineering Articles"
                    subtitle="Deep dives into system design, AI engineering, and algorithms"
                />

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
                                    <h3 className={styles.title}>{post.title}</h3>
                                </Link>
                                <p className={styles.excerpt}>{post.excerpt}</p>

                                <div className={styles.tags}>
                                    {post.tags.map((tag) => (
                                        <Badge key={tag} label={tag} size="sm" />
                                    ))}
                                </div>

                                <div className={styles.footer}>
                                    <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                                        Read Article <ArrowRight size={14} />
                                    </Link>
                                </div>
                            </GlassCard>
                        </AnimatedSection>
                    ))}
                </div>

                <AnimatedSection delay={0.4} className={styles.viewAll}>
                    <Link href="/blog" className={styles.viewAllLink}>
                        <BookOpen size={18} />
                        View All Posts
                        <ArrowRight size={16} />
                    </Link>
                </AnimatedSection>
            </div>
        </section>
    );
}
