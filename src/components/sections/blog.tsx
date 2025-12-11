"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="blog"
      ref={ref}
      className="py-24 sm:py-32 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Blog
          </h2>
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Latest{" "}
            <span className="gradient-text">Articles</span>
          </p>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Thoughts on software development, technology, and my journey as a developer.
          </p>
        </motion.div>

        {/* Blog posts grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <motion.a
                href={`/blog/${post.slug}`}
                whileHover={{ y: -5 }}
                className={cn(
                  "block gradient-border h-full",
                  "hover:glow transition-all duration-300"
                )}
              >
                <div className="relative z-10 p-6 h-full flex flex-col">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 group-hover:gradient-text transition-all duration-300">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-1 text-primary font-medium"
                    >
                      Read
                      <ArrowRight className="w-3 h-3" />
                    </motion.span>
                  </div>
                </div>
              </motion.a>
            </motion.article>
          ))}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="/blog"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "inline-flex items-center gap-2 px-6 py-3 rounded-full",
              "border-2 border-primary/50",
              "text-primary font-medium",
              "hover:bg-primary hover:text-primary-foreground",
              "transition-all duration-300"
            )}
          >
            View All Posts
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
