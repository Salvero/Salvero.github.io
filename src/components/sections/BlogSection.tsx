"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BlogCard } from "./BlogCard";
import type { PostMeta } from "@/lib/mdx";
import styles from "./BlogSection.module.css";

// ============================================
// BlogSection Props
// ============================================

interface BlogSectionProps {
    posts: PostMeta[];
}

// ============================================
// BlogSection Component
// ============================================

export function BlogSection({ posts }: BlogSectionProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            id="blog"
            ref={ref}
            className={styles.blog}
            aria-labelledby="blog-title"
        >
            <div className="container-narrow">
                {/* Section Header */}
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className={styles.blog__header}
                >
                    <h2 id="blog-title" className={styles.blog__title}>
                        Blog & Insights
                    </h2>
                    <p className={styles.blog__subtitle}>
                        Technical articles, tutorials, and lessons learned from building production applications
                    </p>
                </motion.header>

                {/* Blog Grid */}
                {posts.length > 0 ? (
                    <ul className={styles.blog__grid} role="list">
                        {posts.map((post, index) => (
                            <li key={post.slug}>
                                <BlogCard post={post} index={index} isInView={isInView} />
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div className={styles.blog__empty}>
                        <p>No blog posts yet. Check back soon!</p>
                    </div>
                )}
            </div>
        </section>
    );
}
