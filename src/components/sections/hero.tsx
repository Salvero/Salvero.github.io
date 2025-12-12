"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { siteConfig, socialLinks } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

const socialIcons = [
  { icon: Github, href: socialLinks.github, label: "GitHub" },
  { icon: Linkedin, href: socialLinks.linkedin, label: "LinkedIn" },
  { icon: Mail, href: socialLinks.email, label: "Email" },
];

export function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="max-w-xl">
            {/* Welcome badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 rounded-md text-white">
                Welcome to my Portfolio
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Hi! I'm {siteConfig.name}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Software Engineer
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-400 leading-relaxed mb-8"
            >
              I build production-ready web applications with modern frameworks.
              Specializing in real-time collaboration, AI integration, and
              full-stack development with React, Next.js, and Python.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-6"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 text-white font-medium hover:text-cyan-400 transition-colors"
              >
                Let's Connect
                <span className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:border-cyan-400 group-hover:bg-cyan-400/10 transition-all">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-4 mt-12"
            >
              {socialIcons.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/50 hover:bg-white/5 transition-all"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right side - Stats or visual element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:flex items-center justify-center"
          >
            {/* Abstract visual - Code/Terminal inspired */}
            <div className="relative w-full max-w-md">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full" />

              {/* Terminal card */}
              <div className="relative bg-[#1a1a2e]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
                {/* Terminal header */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>

                {/* Code content */}
                <pre className="font-mono text-sm">
                  <code>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-cyan-400">developer</span>{" "}
                    <span className="text-white">=</span> {"{"}
                    {"\n"}  <span className="text-gray-400">name:</span>{" "}
                    <span className="text-green-400">"Salman"</span>,
                    {"\n"}  <span className="text-gray-400">skills:</span> [
                    {"\n"}    <span className="text-green-400">"React"</span>,
                    {"\n"}    <span className="text-green-400">"Next.js"</span>,
                    {"\n"}    <span className="text-green-400">"Python"</span>,
                    {"\n"}    <span className="text-green-400">"AI/ML"</span>
                    {"\n"}  ],
                    {"\n"}  <span className="text-gray-400">passion:</span>{" "}
                    <span className="text-green-400">"Building cool stuff"</span>
                    {"\n"}{"}"}
                  </code>
                </pre>

                {/* Blinking cursor */}
                <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse ml-1" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
