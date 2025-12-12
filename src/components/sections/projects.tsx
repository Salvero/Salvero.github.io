"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/portfolio";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  metrics?: Array<{ value: string; label: string }>;
  index: number;
  featured?: boolean;
}

function ProjectCard({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
  metrics,
  index,
  featured = false,
}: ProjectCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={featured ? "md:col-span-2" : ""}
    >
      <Card className="h-full overflow-hidden transition-colors hover:border-muted-foreground group">
        {/* Thumbnail */}
        <div className="relative aspect-video overflow-hidden border-b">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover object-top opacity-90 transition-opacity group-hover:opacity-100"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <CardHeader className="pb-2">
          <div className="flex items-start justify-between gap-4">
            <CardTitle className="font-mono text-lg">{title}</CardTitle>
            <div className="flex gap-2 shrink-0">
              <TooltipProvider delayDuration={100}>
                {githubUrl && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>View Source</p>
                    </TooltipContent>
                  </Tooltip>
                )}
                {liveUrl && (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live Demo</p>
                    </TooltipContent>
                  </Tooltip>
                )}
              </TooltipProvider>
            </div>
          </div>
          <CardDescription className="line-clamp-2">{description}</CardDescription>
        </CardHeader>

        <CardContent className="flex-1">
          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5">
            {tags.slice(0, 4).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>

        {/* Metrics Row */}
        {metrics && metrics.length > 0 && (
          <CardFooter className="border-t pt-4">
            <div className="flex gap-6">
              {metrics.map((metric, i) => (
                <div key={i} className="font-mono">
                  <div className="text-sm font-semibold">{metric.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </CardFooter>
        )}
      </Card>
    </motion.div>
  );
}

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="projects" ref={ref} className="section-spacing">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Badge variant="outline" className="mb-4">
            Selected Work
          </Badge>
          <h2 className="heading-lg mb-2">Projects</h2>
          <p className="text-muted-foreground max-w-xl">
            Full-stack applications showcasing real-time collaboration, AI integration, and modern web architecture.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              metrics={
                "metrics" in project
                  ? (project.metrics as Array<{ value: string; label: string }>)
                  : undefined
              }
              index={index}
              featured={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
