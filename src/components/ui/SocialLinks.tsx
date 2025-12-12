"use client";

import { Code2, Briefcase, Send, Twitter, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import styles from "./SocialLinks.module.css";

// Social link configuration type
interface SocialLink {
    icon: React.ComponentType<{ className?: string }>;
    href: string;
    label: string;
    ariaLabel: string;
}

// Default social links - can be overridden via props
const defaultSocialLinks: SocialLink[] = [
    {
        icon: Code2,
        href: "https://github.com",
        label: "GitHub",
        ariaLabel: "Visit my GitHub profile",
    },
    {
        icon: Briefcase,
        href: "https://linkedin.com",
        label: "LinkedIn",
        ariaLabel: "Connect with me on LinkedIn",
    },
    {
        icon: Send,
        href: "mailto:hello@example.com",
        label: "Email",
        ariaLabel: "Send me an email",
    },
];

// Component props interface
interface SocialLinksProps {
    /** Array of social link configurations */
    links?: SocialLink[];
    /** Layout direction */
    layout?: "horizontal" | "vertical";
    /** Size variant */
    size?: "compact" | "default" | "large";
    /** Enable entrance animation */
    animated?: boolean;
    /** Additional CSS class */
    className?: string;
    /** Aria label for the social links container */
    containerLabel?: string;
}

/**
 * SocialLinks Component
 * 
 * A semantic, accessible social media links component with themed styling.
 * Uses Lucide icons for modern, consistent iconography.
 */
export function SocialLinks({
    links = defaultSocialLinks,
    layout = "horizontal",
    size = "default",
    animated = false,
    className,
    containerLabel = "Social media links",
}: SocialLinksProps) {
    const containerClasses = cn(
        styles["social-list"],
        layout === "vertical" && styles["social-list--vertical"],
        layout === "horizontal" && styles["social-list--horizontal"],
        size === "compact" && styles["social-list--compact"],
        size === "large" && styles["social-list--large"],
        className
    );

    return (
        <div className={containerClasses} role="navigation" aria-label={containerLabel}>
            <ul className={styles["social-list__items"]} role="list">
                {links.map((link, index) => {
                    const IconComponent = link.icon;

                    return (
                        <li
                            key={link.label}
                            className={cn(
                                styles["social-list__item"],
                                animated && styles["social-list__item--animated"]
                            )}
                            style={animated ? { animationDelay: `${index * 0.1}s` } : undefined}
                        >
                            <a
                                href={link.href}
                                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                                rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                                className={styles["social-list__link"]}
                                aria-label={link.ariaLabel}
                                title={link.label}
                            >
                                <IconComponent
                                    className={styles["social-list__icon"]}
                                    aria-hidden="true"
                                />
                                <span className="sr-only">{link.label}</span>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

// Export types for external use
export type { SocialLink, SocialLinksProps };

// Pre-configured social links for common use cases
export const socialLinkConfigs = {
    github: (url: string): SocialLink => ({
        icon: Code2,
        href: url,
        label: "GitHub",
        ariaLabel: "Visit my GitHub profile",
    }),
    linkedin: (url: string): SocialLink => ({
        icon: Briefcase,
        href: url,
        label: "LinkedIn",
        ariaLabel: "Connect with me on LinkedIn",
    }),
    email: (email: string): SocialLink => ({
        icon: Send,
        href: `mailto:${email}`,
        label: "Email",
        ariaLabel: "Send me an email",
    }),
    twitter: (url: string): SocialLink => ({
        icon: Twitter,
        href: url,
        label: "Twitter",
        ariaLabel: "Follow me on Twitter",
    }),
    website: (url: string): SocialLink => ({
        icon: Globe,
        href: url,
        label: "Website",
        ariaLabel: "Visit my website",
    }),
};
