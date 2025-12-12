"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import styles from "./ExperienceTimeline.module.css";

// ============================================
// TypeScript Interfaces
// ============================================

export interface ExperienceEntry {
    /** Company name */
    company: string;
    /** Job title/role */
    role: string;
    /** Employment period */
    period: string;
    /** Work location */
    location: string;
    /** Path to company logo in public folder */
    logo?: string;
    /** Impact-focused bullet points (use strong action verbs) */
    impacts: string[];
    /** Technologies/skills used */
    technologies?: string[];
    /** Whether this is the current job */
    isCurrent?: boolean;
}

// ============================================
// Impact-Focused Experience Data
// ============================================

const experienceData: ExperienceEntry[] = [
    {
        company: "Pagefreezer",
        role: "Technical Support Engineer",
        period: "Nov 2023 — May 2025",
        location: "Vancouver, BC",
        logo: "/companies/pagefreezer.png",
        isCurrent: true,
        impacts: [
            "Resolved 500+ complex enterprise tickets with 95% CSAT, specializing in cloud infrastructure debugging and API troubleshooting",
            "Authored technical documentation and runbooks that reduced recurring support inquiries by 30%",
            "Collaborated with engineering to identify and reproduce critical bugs, accelerating patch deployment cycles",
            "Mentored junior support staff on advanced debugging techniques and customer communication best practices",
        ],
        technologies: ["Cloud Infrastructure", "REST APIs", "Debugging", "Documentation"],
    },
    {
        company: "Docebo",
        role: "Technical Support Analyst",
        period: "Feb 2023 — Nov 2023",
        location: "Toronto, ON",
        logo: "/companies/docebo.png",
        impacts: [
            "Delivered expert-level support for enterprise LMS integrations, specializing in SSO/SAML configurations and API implementations",
            "Developed internal automation scripts that streamlined repetitive workflows, saving 10+ hours weekly for the team",
            "Trained and onboarded 3 new team members on complex troubleshooting procedures and escalation protocols",
            "Maintained 98%+ satisfaction rating across 200+ monthly support interactions",
        ],
        technologies: ["SSO/SAML", "REST APIs", "Python", "LMS Integrations"],
    },
    {
        company: "Pixel Union",
        role: "Technical Support Engineer",
        period: "May 2020 — Jul 2022",
        location: "Victoria, BC",
        logo: "/companies/pixelunion.png",
        impacts: [
            "Supported Shopify merchants with premium theme customizations, becoming the go-to expert for complex Liquid modifications",
            "Architected custom JavaScript solutions for merchant-specific e-commerce requirements, driving additional revenue",
            "Contributed to knowledge base expansion, authoring 50+ articles that reduced first-response times by 25%",
            "Led weekly knowledge-sharing sessions on advanced Liquid templating and frontend optimization techniques",
        ],
        technologies: ["Shopify Liquid", "JavaScript", "CSS", "E-commerce"],
    },
    {
        company: "Out of the Sandbox",
        role: "Intermediate Web Developer",
        period: "May 2016 — May 2020",
        location: "Ottawa, ON",
        logo: "/companies/outofthesandbox.png",
        impacts: [
            "Built custom Shopify theme features using Liquid and JavaScript, directly impacting hundreds of merchant storefronts",
            "Optimized theme performance, achieving 40% faster load times through code refactoring and asset optimization",
            "Collaborated with design team to implement pixel-perfect responsive layouts for 5+ major theme releases",
            "Established frontend code standards and review processes that improved team code quality and consistency",
        ],
        technologies: ["Liquid", "JavaScript", "SCSS", "Theme Development"],
    },
];

// ============================================
// ExperienceTimeline Component
// ============================================

export function ExperienceTimeline() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            id="experience"
            ref={ref}
            className="section-spacing"
            aria-labelledby="experience-title"
        >
            <div className="container-narrow">
                {/* Section Header */}
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className={styles.timeline__header}
                >
                    <h2 id="experience-title" className={styles.timeline__title}>
                        Experience
                    </h2>
                    <p className={styles.timeline__subtitle}>
                        7+ years driving technical excellence across support and development roles
                    </p>
                </motion.header>

                {/* Timeline */}
                <div className={styles.timeline}>
                    {/* Vertical Track */}
                    <div className={styles.timeline__track} aria-hidden="true" />

                    {/* Experience Entries (semantic ordered list) */}
                    <ol className={styles.timeline__list} role="list">
                        {experienceData.map((exp, index) => (
                            <motion.li
                                key={exp.company}
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className={styles.timeline__item}
                            >
                                {/* Timeline Marker */}
                                <div
                                    className={`${styles.timeline__marker} ${exp.isCurrent ? styles["timeline__marker--current"] : ""}`}
                                    aria-hidden="true"
                                />

                                {/* Content Card */}
                                <article className={styles.timeline__content}>
                                    {/* Header with Logo */}
                                    <div className={styles["timeline__content-header"]}>
                                        {exp.logo && (
                                            <div className={styles.timeline__logo}>
                                                <Image
                                                    src={exp.logo}
                                                    alt={`${exp.company} logo`}
                                                    width={48}
                                                    height={48}
                                                />
                                            </div>
                                        )}
                                        <div className={styles.timeline__info}>
                                            <h3 className={styles.timeline__company}>{exp.company}</h3>
                                            <p className={styles.timeline__role}>{exp.role}</p>
                                            <div className={styles.timeline__meta}>
                                                <span className={styles.timeline__date}>{exp.period}</span>
                                                <span className={styles.timeline__location}>
                                                    <MapPin size={12} />
                                                    {exp.location}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Impact Bullets */}
                                    <ul className={styles.timeline__impacts} role="list">
                                        {exp.impacts.map((impact, i) => (
                                            <li key={i} className={styles.timeline__impact}>
                                                {impact}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Technology Tags */}
                                    {exp.technologies && (
                                        <div className={styles.timeline__tags}>
                                            {exp.technologies.map((tech) => (
                                                <span key={tech} className={styles.timeline__tag}>
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </article>
                            </motion.li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
}
