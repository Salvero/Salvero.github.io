"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { PostMeta } from "@/lib/mdx";
import styles from "./BlogCard.module.css";

// ============================================
// BlogCard Props
// ============================================

interface BlogCardProps {
    post: PostMeta;
    index: number;
    isInView: boolean;
}

// ============================================
// BlogCard Component
// ============================================

export function BlogCard({ post, index, isInView }: BlogCardProps) {
    const cardClass = post.featured
        ? `${styles["blog-card"]} ${styles["blog-card--featured"]}`
        : styles["blog-card"];

    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={cardClass}
        >
            {/* Header */}
            <header className={styles["blog-card__header"]}>
                <h3 className={styles["blog-card__title"]}>
                    {post.title}
                </h3>
            </header>

            {/* Description */}
            <p className={styles["blog-card__description"]}>
                {post.description}
            </p>

            {/* Tags */}
            <div className={styles["blog-card__tags"]}>
                {post.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className={styles["blog-card__tag"]}>
                        {tag}
                    </span>
                ))}
            </div>

            {/* Footer with Read More link */}
            <footer className={styles["blog-card__footer"]}>
                <Link
                    href={`/blog/${post.slug}`}
                    className={styles["blog-card__link"]}
                    aria-label={`Read more about ${post.title}`}
                >
                    Read More
                    <ArrowRight className={styles["blog-card__link-icon"]} aria-hidden="true" />
                </Link>
            </footer>
        </motion.article>
    );
}
