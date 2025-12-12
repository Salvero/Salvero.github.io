"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { experiences } from "@/data/portfolio";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="section-spacing">
      <div className="container-narrow">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="heading-lg mb-2">Experience</h2>
          <p className="text-muted-foreground">
            Professional journey in tech support and software development.
          </p>
        </motion.div>

        {/* Experience List */}
        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="py-6 border-b border-border last:border-b-0"
            >
              <div className="flex items-start gap-4">
                {/* Company Logo */}
                {exp.logo && (
                  <div className="shrink-0 w-12 h-12 rounded-lg overflow-hidden bg-muted/50 flex items-center justify-center p-2">
                    <Image
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      width={48}
                      height={48}
                      className="object-contain w-full h-full"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <div>
                      <h3 className="heading-md">{exp.company}</h3>
                      <p className="text-muted-foreground">{exp.role}</p>
                    </div>
                    <span className="text-sm text-muted-foreground font-mono shrink-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
