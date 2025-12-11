"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { experiences } from "@/data/portfolio";
import { cn } from "@/lib/utils";

// Company logo paths and colors for visual distinction
const companyData: Record<string, { logo: string; bg: string; text: string; gradient: string }> = {
  Pagefreezer: {
    logo: "/companies/pagefreezer.png",
    bg: "bg-emerald-500/10",
    text: "text-emerald-500",
    gradient: "from-emerald-500/20 to-emerald-600/20"
  },
  Docebo: {
    logo: "/companies/docebo.png",
    bg: "bg-blue-500/10",
    text: "text-blue-500",
    gradient: "from-blue-500/20 to-blue-600/20"
  },
  "Pixel Union": {
    logo: "/companies/pixelunion.png",
    bg: "bg-purple-500/10",
    text: "text-purple-500",
    gradient: "from-purple-500/20 to-purple-600/20"
  },
  "Out of the Sandbox": {
    logo: "/companies/outofthesandbox.png",
    bg: "bg-orange-500/10",
    text: "text-orange-500",
    gradient: "from-orange-500/20 to-orange-600/20"
  },
};

interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  index: number;
  isLast: boolean;
}

function ExperienceCard({
  company,
  role,
  period,
  location,
  description,
  highlights,
  index,
  isLast,
}: ExperienceCardProps) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  const data = companyData[company] || {
    logo: "",
    bg: "bg-primary/10",
    text: "text-primary",
    gradient: "from-primary/20 to-primary/30"
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative pl-8 sm:pl-12"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {/* Timeline line */}
      {!isLast && (
        <motion.div
          className="absolute left-[15px] sm:left-[23px] top-14 w-0.5 bg-gradient-to-b from-border via-border/50 to-transparent"
          initial={{ height: 0 }}
          animate={isInView ? { height: "calc(100% + 1rem)" } : {}}
          transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
        />
      )}

      {/* Timeline dot with company logo */}
      <motion.div
        className="absolute left-0 sm:left-2 top-5"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 15,
          delay: index * 0.15 + 0.2
        }}
      >
        <div className="relative">
          <motion.div
            className={cn(
              "w-[36px] h-[36px] sm:w-[44px] sm:h-[44px] rounded-full",
              "flex items-center justify-center",
              "bg-background",
              "border-2 border-border shadow-lg",
              "overflow-hidden"
            )}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {data.logo ? (
              <Image
                src={data.logo}
                alt={`${company} logo`}
                width={32}
                height={32}
                className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
              />
            ) : (
              <span className={cn("text-sm sm:text-base font-bold", data.text)}>
                {company.charAt(0)}
              </span>
            )}
          </motion.div>
          {/* Pulse ring on first item */}
          {index === 0 && (
            <motion.div
              className={cn(
                "absolute inset-0 rounded-full",
                data.bg
              )}
              animate={{
                scale: [1, 1.5, 1.5],
                opacity: [0.5, 0, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />
          )}
        </div>
      </motion.div>

      {/* Card */}
      <motion.div
        className={cn(
          "group",
          "p-4 sm:p-6 rounded-2xl",
          "bg-card/50 backdrop-blur-sm",
          "border border-border/50",
          "hover:bg-card hover:border-border",
          "hover:shadow-xl hover:shadow-primary/5",
          "transition-all duration-500"
        )}
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
          <div className="space-y-1">
            <motion.h3
              className="text-lg sm:text-xl font-bold tracking-tight"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: index * 0.15 + 0.3 }}
            >
              {company}
            </motion.h3>
            <motion.p
              className={cn("text-sm sm:text-base font-medium", data.text)}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: index * 0.15 + 0.4 }}
            >
              {role}
            </motion.p>
          </div>

          {/* Period badge */}
          <motion.div
            className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground shrink-0"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: index * 0.15 + 0.4 }}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span className="font-medium tabular-nums">{period}</span>
          </motion.div>
        </div>

        {/* Location */}
        <motion.div
          className="flex items-center gap-1.5 mt-2 text-xs sm:text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.15 + 0.5 }}
        >
          <MapPin className="w-3.5 h-3.5" />
          <span>{location}</span>
        </motion.div>

        {/* Description & Highlights - Always visible */}
        <motion.div
          className="mt-4 pt-4 border-t border-border/50 space-y-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.15 + 0.6 }}
        >
          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>

          {/* Highlights */}
          <ul className="space-y-2">
            {highlights.map((highlight, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-3 text-sm text-muted-foreground"
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.15 + 0.7 + i * 0.1 }}
              >
                <motion.span
                  className={cn(
                    "w-1.5 h-1.5 rounded-full mt-2 shrink-0",
                    data.text.replace("text-", "bg-")
                  )}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    delay: index * 0.15 + 0.8 + i * 0.1
                  }}
                />
                <span>{highlight}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      ref={ref}
      className="py-24 sm:py-32 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 -right-32 w-64 h-64 bg-accent/5 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 12}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              className="p-2 rounded-xl bg-primary/10"
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.2
              }}
            >
              <Briefcase className="w-5 h-5 text-primary" />
            </motion.div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Work Experience
            </h2>
          </div>
          <motion.p
            className="text-muted-foreground max-w-lg"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            My professional journey in tech, building expertise across support engineering and web development.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.company}
              company={experience.company}
              role={experience.role}
              period={experience.period}
              location={experience.location}
              description={experience.description}
              highlights={experience.highlights}
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>

        {/* Bottom decoration */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <motion.div
              className="w-8 h-px bg-gradient-to-r from-transparent via-border to-transparent"
              initial={{ width: 0 }}
              animate={isInView ? { width: 32 } : {}}
              transition={{ delay: 1, duration: 0.5 }}
            />
            <span className="text-xs">Building since 2016</span>
            <motion.div
              className="w-8 h-px bg-gradient-to-r from-transparent via-border to-transparent"
              initial={{ width: 0 }}
              animate={isInView ? { width: 32 } : {}}
              transition={{ delay: 1, duration: 0.5 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
