"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Wrench, Brain, Shield, Users, Zap } from "lucide-react";
import styles from "./SkillsSection.module.css";

// ============================================
// Skills Data
// ============================================

interface SkillCategory {
    title: string;
    icon: React.ElementType;
    skills: string[];
}

const skillsData: SkillCategory[] = [
    {
        title: "Technical Skills",
        icon: Code2,
        skills: [
            "Enterprise-Level Technical Support",
            "Advanced Troubleshooting",
            "Observability Tools (Kibana, Datadog, Elasticsearch)",
            "Web Technologies (HTML, CSS, JavaScript)",
            "Database Management (SQL, NoSQL)",
            "Browser Developer Tools",
            "SaaS and Cloud Solutions",
            "Authentication (OAuth, SSO)",
        ],
    },
    {
        title: "AI & Automation",
        icon: Brain,
        skills: [
            "Generative AI & Prompt Engineering",
            "Gemini, Claude, ChatGPT",
            "AI Automation (Zapier, OpenAI API, n8n)",
            "Automation and Scripting (Shell)",
            "Machine Learning Integration",
        ],
    },
    {
        title: "Collaboration & Communication",
        icon: Users,
        skills: [
            "Cross-Functional Collaboration",
            "Customer Communication & Engagement",
            "Technical Documentation",
            "Team Leadership & Mentoring",
        ],
    },
    {
        title: "Tools & Platforms",
        icon: Wrench,
        skills: [
            "AWS (Kibana Logs)",
            "Slack",
            "Zoom",
            "Chrome DevTools",
            "JIRA",
            "Zendesk",
            "Confluence",
            "Zapier",
            "n8n",
            "Git",
            "Docker",
            "Vercel",
        ],
    },
];

// ============================================
// SkillsSection Component
// ============================================

export function SkillsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            id="skills"
            ref={ref}
            className={styles.skills}
            aria-labelledby="skills-title"
        >
            <div className="container-narrow">
                {/* Section Header */}
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className={styles.skills__header}
                >
                    <h2 id="skills-title" className={styles.skills__title}>
                        Skills & Expertise
                    </h2>
                    <p className={styles.skills__subtitle}>
                        Technologies, tools, and capabilities I bring to every project
                    </p>
                </motion.header>

                {/* Skills Grid */}
                <div className={styles.skills__grid}>
                    {skillsData.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={styles.skills__category}
                        >
                            {/* Category Header */}
                            <div className={styles["skills__category-header"]}>
                                <div className={styles["skills__category-icon"]}>
                                    <category.icon size={20} />
                                </div>
                                <h3 className={styles["skills__category-title"]}>
                                    {category.title}
                                </h3>
                            </div>

                            {/* Skill Tags */}
                            <div className={styles.skills__tags}>
                                {category.skills.map((skill) => (
                                    <span key={skill} className={styles.skills__tag}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
