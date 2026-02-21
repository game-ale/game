"use client";

import Badge from "@/components/ui/Badge";
import GlassCard from "@/components/ui/GlassCard";
import type { BlogPost } from "@/data/blog";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import styles from "./BlogPost.module.css";

interface Props {
    post: BlogPost;
}

export default function BlogPostPage({ post }: Props) {
    return (
        <div className={styles.page}>
            <div className="container">
                <div className={styles.backRow}>
                    <Link href="/blog" className={styles.backLink}>
                        <ArrowLeft size={16} /> Back to Blog
                    </Link>
                </div>

                <motion.article
                    className={styles.article}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={styles.meta}>
                        <Badge label={post.category} variant="accent" size="md" />
                        <span className={styles.metaItem}>
                            <Clock size={14} /> {post.readTime}
                        </span>
                        <span className={styles.metaItem}>
                            <Calendar size={14} /> {post.date}
                        </span>
                    </div>

                    <h1 className={styles.title}>{post.title}</h1>

                    <div className={styles.tags}>
                        {post.tags.map((tag) => (
                            <Badge key={tag} label={tag} size="sm" />
                        ))}
                    </div>

                    <GlassCard padding="lg" hover={false} className={styles.content}>
                        <p className={styles.excerpt}>{post.excerpt}</p>
                        <div className={styles.comingSoon}>
                            <h3>✍️ Full Article Coming Soon</h3>
                            <p>
                                This article is currently being drafted. Check back soon for the
                                complete deep dive, including code examples, architecture
                                diagrams, and performance benchmarks.
                            </p>
                            <Link href="/#contact" className={styles.notifyLink}>
                                Get Notified →
                            </Link>
                        </div>
                    </GlassCard>
                </motion.article>
            </div>
        </div>
    );
}
