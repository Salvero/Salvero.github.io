"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { label: "Home", href: "#about" },
  { label: "Skills", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <nav className="container-wide py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="group flex items-center gap-0.5">
            <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
              SA
            </span>
            <span className="text-2xl font-bold text-cyan-400 group-hover:text-purple-400 transition-colors">
              _
            </span>
          </a>

          {/* Desktop Navigation - Centered with beautiful styling */}
          <div className="hidden md:flex items-center gap-1 px-2 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative px-5 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-full hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <button
                className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
              >
                <div className="flex flex-col gap-1.5">
                  <motion.span
                    animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                    className="block w-5 h-0.5 bg-white rounded-full origin-center"
                  />
                  <motion.span
                    animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                    className="block w-5 h-0.5 bg-white rounded-full"
                  />
                  <motion.span
                    animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                    className="block w-5 h-0.5 bg-white rounded-full origin-center"
                  />
                </div>
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-full sm:w-80 bg-[#0a0a1a] border-l border-white/10 p-0 [&>button]:hidden"
            >
              {/* Mobile Menu Content */}
              <div className="flex flex-col h-full">
                {/* Header with close button */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <a href="#" className="group flex items-center gap-0.5">
                    <span className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white via-white to-gray-400 bg-clip-text text-transparent">
                      SA
                    </span>
                    <span className="text-3xl font-bold text-cyan-400">
                      _
                    </span>
                  </a>

                  {/* Close button */}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                    aria-label="Close menu"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-white">
                      <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 p-6">
                  <ul className="space-y-1">
                    {navItems.map((item, index) => (
                      <motion.li
                        key={item.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <a
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-4 py-4 text-xl font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                        >
                          {item.label}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Footer */}
                <div className="p-6 border-t border-white/10">
                  <p className="text-sm text-gray-500">
                    © 2025 Salman. All rights reserved.
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Invisible spacer for desktop to balance the logo */}
          <div className="hidden md:block w-16" />
        </div>
      </nav>
    </motion.header>
  );
}
