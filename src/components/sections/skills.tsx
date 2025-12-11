"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { skills, techStack } from "@/data/portfolio";
import { cn } from "@/lib/utils";

const categories = [
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "tools", label: "Tools" },
  { id: "other", label: "Other" },
];

// Simple tech icons using initials/shapes
const TechIcon = ({ name }: { name: string }) => {
  const colors: Record<string, string> = {
    React: "from-cyan-400 to-blue-500",
    "Next.js": "from-gray-600 to-black dark:from-gray-300 dark:to-white",
    TypeScript: "from-blue-500 to-blue-700",
    "Tailwind CSS": "from-cyan-400 to-teal-500",
    Tailwind: "from-cyan-400 to-teal-500",
    Python: "from-yellow-400 to-blue-500",
    Django: "from-green-600 to-green-800",
    "Node.js": "from-green-500 to-green-700",
    PostgreSQL: "from-blue-400 to-blue-600",
    Redis: "from-red-500 to-red-700",
    Git: "from-orange-500 to-red-500",
    Docker: "from-blue-400 to-blue-600",
    Vercel: "from-gray-600 to-black dark:from-gray-300 dark:to-white",
    Supabase: "from-green-400 to-green-600",
    AWS: "from-orange-400 to-yellow-500",
    "Framer Motion": "from-purple-500 to-pink-500",
    Framer: "from-purple-500 to-pink-500",
  };

  return (
    <div
      className={cn(
        "w-10 h-10 rounded-lg flex items-center justify-center",
        "bg-gradient-to-br text-white font-bold text-sm",
        colors[name] || "from-primary to-secondary"
      )}
    >
      {name.charAt(0)}
    </div>
  );
};

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("frontend");

  const currentSkills = skills[activeCategory as keyof typeof skills];

  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 sm:py-32 bg-muted/30 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
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
            Skills
          </h2>
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Technologies I{" "}
            <span className="gradient-text">Work With</span>
          </p>
        </motion.div>

        {/* Interactive Tech Stack Display */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <div className="gradient-border p-8">
            <div className="relative z-10">
              {/* Keyboard-style tech display */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={cn(
                      "flex items-center gap-2 px-4 py-3 rounded-xl",
                      "bg-muted border border-border",
                      "hover:border-primary/50 hover:bg-primary/5",
                      "cursor-pointer transition-all duration-200",
                      "shadow-sm hover:shadow-md"
                    )}
                  >
                    <TechIcon name={tech.name} />
                    <span className="font-medium text-sm">{tech.name}</span>
                  </motion.div>
                ))}
              </div>

              <p className="text-center text-sm text-muted-foreground">
                Hover over technologies to interact • Click for details
              </p>
            </div>
          </div>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center gap-2 mb-8 flex-wrap"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === category.id
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25"
                  : "bg-muted hover:bg-muted/80 text-muted-foreground border border-border"
              )}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills bars */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <div className="space-y-6">
            {currentSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className="h-full bg-gradient-to-r from-primary via-secondary to-accent rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
