"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";

interface Star {
    id: number;
    x: number;
    y: number;
    size: number;
    opacity: number;
    duration: number;
    delay: number;
}

export function StarryBackground() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Generate stars only once using useMemo for performance
    const stars = useMemo<Star[]>(() => {
        return Array.from({ length: 150 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 2 + 1,
            opacity: Math.random() * 0.7 + 0.3,
            duration: Math.random() * 3 + 2,
            delay: Math.random() * 5,
        }));
    }, []);

    // Generate shooting stars
    const shootingStars = useMemo(() => {
        return Array.from({ length: 5 }, (_, i) => ({
            id: i,
            startX: Math.random() * 50,
            startY: Math.random() * 50,
            duration: Math.random() * 2 + 3,
            delay: i * 4,
        }));
    }, []);

    // Don't render until mounted to avoid hydration mismatch
    if (!mounted) return null;

    // Only render in dark mode
    if (resolvedTheme !== "dark") return null;

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-b from-[#0a192f] via-[#0d1f3c] to-[#0a1628]">
            {/* Twinkling stars - bright white for contrast */}
            {stars.map((star) => (
                <motion.div
                    key={star.id}
                    className="absolute rounded-full bg-white"
                    style={{
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        width: star.size,
                        height: star.size,
                        boxShadow: star.size > 1.5 ? '0 0 4px rgba(255,255,255,0.5)' : 'none',
                    }}
                    animate={{
                        opacity: [star.opacity, star.opacity * 0.3, star.opacity],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: star.duration,
                        delay: star.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Drifting star clusters */}
            <motion.div
                className="absolute inset-0 opacity-50"
                animate={{
                    x: [0, 20, 0],
                    y: [0, 10, 0],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                }}
                style={{
                    backgroundImage: `
            radial-gradient(2px 2px at 10% 20%, rgba(255,255,255,0.9), transparent),
            radial-gradient(2px 2px at 30% 40%, rgba(255,255,255,0.7), transparent),
            radial-gradient(1.5px 1.5px at 50% 60%, rgba(255,255,255,0.8), transparent),
            radial-gradient(2px 2px at 70% 30%, rgba(255,255,255,0.6), transparent),
            radial-gradient(1.5px 1.5px at 90% 80%, rgba(255,255,255,0.7), transparent)
          `,
                    backgroundSize: "100% 100%",
                }}
            />

            {/* Shooting stars - bright teal/white gradient */}
            {shootingStars.map((star) => (
                <motion.div
                    key={`shooting-${star.id}`}
                    className="absolute w-[120px] h-[2px] rounded-full"
                    style={{
                        left: `${star.startX}%`,
                        top: `${star.startY}%`,
                        background: "linear-gradient(90deg, transparent, rgba(64,224,208,0.9), rgba(255,255,255,1), transparent)",
                        transform: "rotate(45deg)",
                    }}
                    animate={{
                        x: [0, 250],
                        y: [0, 125],
                        opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                        duration: star.duration,
                        delay: star.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Nebula glow effects - Teal/Emerald theme */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-teal-500/8 blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-emerald-500/8 blur-[100px] animate-pulse" style={{ animationDelay: "2s" }} />
            <div className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-cyan-500/5 blur-[80px] animate-pulse" style={{ animationDelay: "4s" }} />

            {/* Gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-transparent" />
        </div>
    );
}
