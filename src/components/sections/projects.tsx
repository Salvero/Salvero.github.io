"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { ExternalLink, Github, ChevronRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      ref={ref}
      className="py-24 sm:py-32 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
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
            Projects
          </h2>
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Things I've{" "}
            <span className="gradient-text">Built</span>
          </p>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my skills in full-stack development,
            real-time collaboration, and modern web technologies.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={cn(
                "group relative gradient-border overflow-hidden",
                "hover:glow transition-all duration-500"
              )}
            >
              <div className="relative z-10 p-6 sm:p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Project Image */}
                  <motion.div
                    className={cn(
                      "relative aspect-video rounded-lg overflow-hidden",
                      "bg-muted",
                      "border border-border",
                      index % 2 === 1 ? "md:order-2" : ""
                    )}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Project Screenshot */}
                    <Image
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />

                    {/* Hover overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                      className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent flex items-end justify-center pb-4"
                    >
                      <div className="flex gap-3">
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 rounded-full bg-primary text-primary-foreground"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.a>
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 rounded-full bg-muted border border-border"
                        >
                          <Github className="w-4 h-4" />
                        </motion.a>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Project Info */}
                  <div className={index % 2 === 1 ? "md:order-1" : ""}>
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full mb-4">
                      Featured Project
                    </span>

                    <h3 className="text-2xl sm:text-3xl font-bold mb-3 group-hover:gradient-text transition-all duration-300">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground mb-4">
                      {project.longDescription}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-6">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium bg-muted rounded-full border border-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={cn(
                          "inline-flex items-center gap-2 px-5 py-2.5 rounded-full",
                          "bg-gradient-to-r from-primary to-secondary",
                          "text-white text-sm font-medium",
                          "hover:shadow-lg hover:shadow-primary/25",
                          "transition-all duration-300"
                        )}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={cn(
                          "inline-flex items-center gap-2 px-5 py-2.5 rounded-full",
                          "border border-border",
                          "text-sm font-medium",
                          "hover:bg-muted hover:border-primary/50",
                          "transition-all duration-300"
                        )}
                      >
                        <Github className="w-4 h-4" />
                        Source Code
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        {otherProjects.length > 0 && (
          <>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-xl font-bold text-center mb-8"
            >
              Other Noteworthy Projects
            </motion.h3>

            <div className="grid sm:grid-cols-2 gap-6">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className={cn(
                    "group gradient-border p-6",
                    "hover:glow transition-all duration-300"
                  )}
                >
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <svg
                          className="w-6 h-6 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                          />
                        </svg>
                      </div>
                      <div className="flex gap-3">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                    </div>

                    <h4 className="text-lg font-bold mb-2 group-hover:gradient-text transition-all duration-300">
                      {project.title}
                    </h4>

                    <p className="text-sm text-muted-foreground mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
