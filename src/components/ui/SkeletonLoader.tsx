"use client";

import { cn } from "@/lib/utils";
import styles from "./SkeletonLoader.module.css";

// Base skeleton element props
interface SkeletonElementProps {
    className?: string;
}

/**
 * Base skeleton element with shimmer animation
 */
function SkeletonElement({ className }: SkeletonElementProps) {
    return (
        <div
            className={cn(styles.skeleton__element, className)}
            aria-hidden="true"
        />
    );
}

// ============================================
// Skeleton Building Blocks
// ============================================

/** Text line skeleton */
export function SkeletonLine({
    size = "medium",
    className
}: {
    size?: "small" | "medium" | "large" | "full";
    className?: string;
}) {
    return (
        <SkeletonElement
            className={cn(
                styles.skeleton__line,
                styles[`skeleton__line--${size}`],
                className
            )}
        />
    );
}

/** Heading/title skeleton */
export function SkeletonTitle({
    size = "medium",
    className
}: {
    size?: "small" | "medium" | "large";
    className?: string;
}) {
    const sizeClass = size === "medium" ? "" : styles[`skeleton__title--${size}`];
    return (
        <SkeletonElement
            className={cn(styles.skeleton__title, sizeClass, className)}
        />
    );
}

/** Badge/tag skeleton */
export function SkeletonBadge({ className }: { className?: string }) {
    return <SkeletonElement className={cn(styles.skeleton__badge, className)} />;
}

/** Avatar/profile image skeleton */
export function SkeletonAvatar({
    size = "medium",
    className
}: {
    size?: "small" | "medium" | "large";
    className?: string;
}) {
    return (
        <SkeletonElement
            className={cn(
                styles.skeleton__avatar,
                styles[`skeleton__avatar--${size}`],
                className
            )}
        />
    );
}

/** Image/thumbnail skeleton */
export function SkeletonImage({
    aspect = "video",
    className
}: {
    aspect?: "video" | "square" | "portrait";
    className?: string;
}) {
    const aspectClass = aspect === "video" ? "" : styles[`skeleton__image--${aspect}`];
    return (
        <SkeletonElement
            className={cn(styles.skeleton__image, aspectClass, className)}
        />
    );
}

/** Button skeleton */
export function SkeletonButton({
    fullWidth = false,
    className
}: {
    fullWidth?: boolean;
    className?: string;
}) {
    return (
        <SkeletonElement
            className={cn(
                styles.skeleton__button,
                fullWidth && styles["skeleton__button--full"],
                className
            )}
        />
    );
}

// ============================================
// Skeleton Layouts
// ============================================

/** Horizontal row of skeleton elements */
export function SkeletonRow({
    children,
    justify = "start",
    className
}: {
    children: React.ReactNode;
    justify?: "start" | "between";
    className?: string;
}) {
    return (
        <div className={cn(
            styles.skeleton__row,
            justify === "between" && styles["skeleton__row--between"],
            className
        )}>
            {children}
        </div>
    );
}

/** Vertical group of skeleton lines */
export function SkeletonGroup({
    children,
    className
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={cn(styles.skeleton__group, className)}>
            {children}
        </div>
    );
}

/** Card skeleton wrapper */
export function SkeletonCard({
    children,
    className
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={cn(styles.skeleton__card, className)}>
            {children}
        </div>
    );
}

/** Grid layout for skeleton cards */
export function SkeletonGrid({
    children,
    columns = 2,
    className
}: {
    children: React.ReactNode;
    columns?: 2 | 3;
    className?: string;
}) {
    return (
        <div className={cn(
            styles.skeleton__grid,
            styles[`skeleton__grid--${columns}`],
            className
        )}>
            {children}
        </div>
    );
}

// ============================================
// Preset Skeleton Loaders
// ============================================

/**
 * Hero Section Skeleton
 * Displays a placeholder for the hero section during initial load
 */
export function HeroSkeleton() {
    return (
        <div
            className={cn(styles.skeleton, styles["skeleton--hero"])}
            role="status"
            aria-label="Loading hero section"
        >
            <div className="container-wide">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left content */}
                    <div className="max-w-xl space-y-6">
                        <SkeletonBadge />
                        <SkeletonGroup>
                            <SkeletonTitle size="large" />
                            <SkeletonTitle />
                        </SkeletonGroup>
                        <SkeletonGroup>
                            <SkeletonLine size="full" />
                            <SkeletonLine size="large" />
                            <SkeletonLine size="medium" />
                        </SkeletonGroup>
                        <SkeletonRow>
                            <SkeletonButton />
                            <SkeletonButton />
                        </SkeletonRow>
                    </div>

                    {/* Right visual */}
                    <div className="hidden lg:block">
                        <SkeletonCard>
                            <SkeletonLine size="small" />
                            <SkeletonGroup>
                                <SkeletonLine size="full" />
                                <SkeletonLine size="large" />
                                <SkeletonLine size="medium" />
                                <SkeletonLine size="small" />
                            </SkeletonGroup>
                        </SkeletonCard>
                    </div>
                </div>
            </div>
            <span className="sr-only">Loading...</span>
        </div>
    );
}

/**
 * Projects Section Skeleton
 * Displays placeholder cards for projects during data fetch
 */
export function ProjectsSkeleton({ count = 4 }: { count?: number }) {
    return (
        <div
            className={cn(styles.skeleton, styles["skeleton--projects"])}
            role="status"
            aria-label="Loading projects"
        >
            <div className="container-wide">
                {/* Section header */}
                <div className="mb-12 space-y-4">
                    <SkeletonBadge />
                    <SkeletonTitle size="large" />
                    <SkeletonLine size="medium" />
                </div>

                {/* Project cards grid */}
                <SkeletonGrid columns={2}>
                    {Array.from({ length: count }).map((_, i) => (
                        <SkeletonCard key={i}>
                            <SkeletonImage aspect="video" />
                            <SkeletonRow justify="between">
                                <SkeletonTitle size="small" />
                                <SkeletonRow>
                                    <SkeletonAvatar size="small" />
                                    <SkeletonAvatar size="small" />
                                </SkeletonRow>
                            </SkeletonRow>
                            <SkeletonGroup>
                                <SkeletonLine size="full" />
                                <SkeletonLine size="large" />
                            </SkeletonGroup>
                            <SkeletonRow>
                                <SkeletonBadge />
                                <SkeletonBadge />
                                <SkeletonBadge />
                            </SkeletonRow>
                        </SkeletonCard>
                    ))}
                </SkeletonGrid>
            </div>
            <span className="sr-only">Loading projects...</span>
        </div>
    );
}

/**
 * Skills Section Skeleton
 * Displays placeholder for skills/tech stack during load
 */
export function SkillsSkeleton() {
    return (
        <div
            className={cn(styles.skeleton, styles["skeleton--skills"])}
            role="status"
            aria-label="Loading skills"
        >
            <div className="container-wide">
                {/* Section header */}
                <div className="mb-12 text-center space-y-4">
                    <SkeletonBadge className="mx-auto" />
                    <SkeletonTitle size="large" className="mx-auto" />
                </div>

                {/* Tech stack badges */}
                <SkeletonCard className="mb-12">
                    <div className="flex flex-wrap justify-center gap-3">
                        {Array.from({ length: 8 }).map((_, i) => (
                            <SkeletonButton key={i} />
                        ))}
                    </div>
                </SkeletonCard>

                {/* Category tabs */}
                <div className="flex justify-center gap-2 mb-8">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <SkeletonBadge key={i} />
                    ))}
                </div>

                {/* Skill bars */}
                <div className="max-w-2xl mx-auto space-y-6">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="space-y-2">
                            <SkeletonRow justify="between">
                                <SkeletonLine size="small" />
                                <SkeletonBadge />
                            </SkeletonRow>
                            <SkeletonElement className="h-2 w-full rounded-full" />
                        </div>
                    ))}
                </div>
            </div>
            <span className="sr-only">Loading skills...</span>
        </div>
    );
}

/**
 * Generic Skeleton Loader
 * A flexible skeleton for any content type
 */
export function SkeletonLoader({
    lines = 3,
    showTitle = true,
    showImage = false,
    className
}: {
    lines?: number;
    showTitle?: boolean;
    showImage?: boolean;
    className?: string;
}) {
    return (
        <div
            className={cn(styles.skeleton, className)}
            role="status"
            aria-label="Loading content"
        >
            {showImage && <SkeletonImage aspect="video" />}
            {showTitle && <SkeletonTitle />}
            <SkeletonGroup>
                {Array.from({ length: lines }).map((_, i) => (
                    <SkeletonLine
                        key={i}
                        size={i === lines - 1 ? "medium" : "full"}
                    />
                ))}
            </SkeletonGroup>
            <span className="sr-only">Loading...</span>
        </div>
    );
}

// Export all components
export {
    SkeletonElement,
};
