"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import styles from "./ProjectsShowcase.module.css";

// ============================================
// TypeScript Interfaces
// ============================================

export interface ProjectMetric {
    value: string;
    label: string;
}

export interface ProjectData {
    /** Project title */
    title: string;
    /** Brief description (1-2 sentences) */
    description: string;
    /** Longer description for detail view */
    longDescription?: string;
    /** Path to project screenshot */
    image: string;
    /** Tech stack tags */
    tags: string[];
    /** Live demo URL */
    liveUrl: string;
    /** GitHub repository URL */
    githubUrl: string;
    /** Whether this is a featured project */
    featured?: boolean;
    /** Key highlights/features */
    highlights?: string[];
    /** Project metrics */
    metrics?: ProjectMetric[];
}

// ============================================
// Project Data - Order: EcoPulse, SyncSpace, Growhaus, AppointHub
// ============================================

const projectsData: ProjectData[] = [
    {
        title: "EcoPulse Dashboard",
        description:
            "Real-time environmental intelligence dashboard correlating weather with solar and air quality metrics.",
        image: "/projects/ecopulse.png",
        tags: ["Next.js 16", "TypeScript", "TanStack Query", "Recharts"],
        liveUrl: "https://ecopulse-dashboard.netlify.app/",
        githubUrl: "https://github.com/Salvero/ecopulse-dashboard",
        featured: true,
        highlights: [
            "Dual-axis correlation charts",
            "Multi-station global monitoring",
            "Resilient API with graceful fallback",
        ],
        metrics: [
            { value: "94%", label: "Accuracy" },
            { value: "<150ms", label: "Latency" },
        ],
    },
    {
        title: "SyncSpace",
        description:
            "Keyboard-first infinite canvas for real-time collaborative brainstorming with integrated AI assistance.",
        image: "/projects/syncspace.png",
        tags: ["Next.js", "React", "TypeScript", "Liveblocks", "Google AI"],
        liveUrl: "https://syncspace-app-ashen.vercel.app/",
        githubUrl: "https://github.com/Salvero/syncspace",
        featured: true,
        highlights: [
            "Infinite canvas with real-time multi-user sync",
            "AI Teammate for intelligent brainstorming",
            "Room-based collaboration with instant state sync",
        ],
        metrics: [
            { value: "<50ms", label: "Sync Latency" },
            { value: "99.9%", label: "Uptime" },
        ],
    },
    {
        title: "Growhaus Plants",
        description:
            "Premium e-commerce platform for plant enthusiasts with WCAG 2.1 AA accessibility compliance.",
        image: "/projects/growhaus.png",
        tags: ["React 18", "TypeScript", "Vite", "Context API"],
        liveUrl: "https://growhaus-plants.netlify.app/",
        githubUrl: "https://github.com/Salvero/growhaus-plants",
        featured: true,
        highlights: [
            "Advanced filtering by category & light",
            "WCAG 2.1 AA accessibility compliant",
            "Production security headers",
        ],
        metrics: [
            { value: "95", label: "Lighthouse" },
            { value: "AA", label: "WCAG" },
        ],
    },
    {
        title: "AppointHub",
        description:
            "All-in-one SaaS appointment scheduling platform with intelligent booking and real-time analytics.",
        image: "/projects/appointhub.png",
        tags: ["Django", "Python", "PostgreSQL", "Celery", "Redis"],
        liveUrl: "https://appointhub.onrender.com/",
        githubUrl: "https://github.com/Salvero/appointhub",
        featured: true,
        highlights: [
            "Intelligent scheduling with double-booking prevention",
            "Real-time analytics dashboard",
            "Automated email & SMS reminders",
        ],
        metrics: [
            { value: "2,500+", label: "Bookings" },
            { value: "98%", label: "Satisfaction" },
        ],
    },
];

// ============================================
// ProjectCard Component
// ============================================

interface ProjectCardProps {
    project: ProjectData;
    index: number;
    isInView: boolean;
}

function ProjectCard({ project, index, isInView }: ProjectCardProps) {
    return (
        <motion.li
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <article className={styles["project-card"]}>
                {/* Project Image */}
                <div className={styles["project-card__image"]}>
                    <Image
                        src={project.image}
                        alt={`Screenshot of ${project.title}`}
                        width={600}
                        height={375}
                        priority={index < 2}
                    />
                </div>

                {/* Content */}
                <div className={styles["project-card__content"]}>
                    {/* Header */}
                    <header className={styles["project-card__header"]}>
                        <h3 className={styles["project-card__title"]}>{project.title}</h3>
                        <p className={styles["project-card__description"]}>
                            {project.description}
                        </p>
                    </header>

                    {/* Highlights */}
                    {project.highlights && (
                        <ul className={styles["project-card__highlights"]}>
                            {project.highlights.map((highlight, i) => (
                                <li key={i} className={styles["project-card__highlight"]}>
                                    {highlight}
                                </li>
                            ))}
                        </ul>
                    )}

                    {/* Metrics */}
                    {project.metrics && (
                        <div className={styles["project-card__metrics"]}>
                            {project.metrics.map((metric) => (
                                <div key={metric.label} className={styles["project-card__metric"]}>
                                    <span className={styles["project-card__metric-value"]}>
                                        {metric.value}
                                    </span>
                                    <span className={styles["project-card__metric-label"]}>
                                        {metric.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Tech Tags */}
                    <div className={styles["project-card__tags"]}>
                        {project.tags.slice(0, 4).map((tag) => (
                            <span key={tag} className={styles["project-card__tag"]}>
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className={styles["project-card__actions"]}>
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles["project-card__btn"]} ${styles["project-card__btn--primary"]}`}
                            aria-label={`View live demo of ${project.title}`}
                        >
                            <ExternalLink className={styles["project-card__btn-icon"]} />
                            Live Demo
                        </a>
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles["project-card__btn"]} ${styles["project-card__btn--secondary"]}`}
                            aria-label={`View source code of ${project.title} on GitHub`}
                        >
                            <Github className={styles["project-card__btn-icon"]} />
                            Source
                        </a>
                    </div>
                </div>
            </article>
        </motion.li>
    );
}

// ============================================
// ProjectsShowcase Component
// ============================================

export function ProjectsShowcase() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            id="projects"
            ref={ref}
            className={styles.projects}
            aria-labelledby="projects-title"
        >
            <div className="container-wide">
                {/* Section Header */}
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className={styles.projects__header}
                >
                    <h2 id="projects-title" className={styles.projects__title}>
                        Featured Projects
                    </h2>
                    <p className={styles.projects__subtitle}>
                        Production-ready applications showcasing full-stack development, real-time collaboration, and AI integration
                    </p>
                </motion.header>

                {/* Projects Grid */}
                <ul className={styles.projects__grid} role="list">
                    {projectsData.map((project, index) => (
                        <ProjectCard
                            key={project.title}
                            project={project}
                            index={index}
                            isInView={isInView}
                        />
                    ))}
                </ul>
            </div>
        </section>
    );
}

// Export for external use
export { projectsData };
