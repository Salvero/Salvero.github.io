"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import styles from "./Header.module.css";

const navItems = [
  { label: "Home", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.header}
      role="banner"
    >
      <div className={styles.header__container}>
        <div className={styles.header__inner}>
          {/* Logo - Semantic link to home */}
          <a
            href="#"
            className={styles.header__logo}
            aria-label="SA_ - Go to homepage"
          >
            <span className={styles["header__logo-text"]}>SA</span>
            <span className={styles["header__logo-accent"]}>_</span>
          </a>

          {/* Desktop Navigation - Semantic nav with aria-label */}
          <nav
            className={styles.header__nav}
            aria-label="Main navigation"
          >
            <ul className={styles["header__nav-list"]} role="menubar">
              {navItems.map((item) => (
                <li
                  key={item.label}
                  className={styles["header__nav-item"]}
                  role="none"
                >
                  <a
                    href={item.href}
                    className={styles["header__nav-link"]}
                    role="menuitem"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu & Theme Toggle */}
          <div className={`${styles.header__actions} ${styles["header__actions--mobile"]}`}>
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  className={styles["header__menu-button"]}
                  aria-label="Open navigation menu"
                  aria-expanded={isOpen}
                  aria-controls="mobile-navigation"
                >
                  <div className={styles["header__menu-icon"]}>
                    <motion.span
                      animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                      className={styles["header__menu-line"]}
                    />
                    <motion.span
                      animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                      className={styles["header__menu-line"]}
                    />
                    <motion.span
                      animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                      className={styles["header__menu-line"]}
                    />
                  </div>
                </button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-full sm:w-80 border-l border-border p-0 [&>button]:hidden bg-white dark:bg-[#0a1628]"
              >
                {/* Mobile Menu Content */}
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className={styles["header__mobile-header"]}>
                    <a
                      href="#"
                      className={styles.header__logo}
                      aria-label="SA_ - Go to homepage"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className={styles["header__mobile-logo-text"]}>SA</span>
                      <span className={styles["header__mobile-logo-accent"]}>_</span>
                    </a>

                    <button
                      onClick={() => setIsOpen(false)}
                      className={styles["header__close-button"]}
                      aria-label="Close navigation menu"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className={styles["header__close-icon"]}
                        aria-hidden="true"
                      >
                        <path
                          d="M12 4L4 12M4 4L12 12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Mobile Navigation - Semantic nav with aria-label */}
                  <nav
                    id="mobile-navigation"
                    className={styles["header__mobile-nav"]}
                    aria-label="Mobile navigation"
                  >
                    <ul className={styles["header__mobile-nav-list"]} role="menu">
                      {navItems.map((item, index) => (
                        <motion.li
                          key={item.label}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          role="none"
                        >
                          <a
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={styles["header__mobile-nav-link"]}
                            role="menuitem"
                          >
                            {item.label}
                          </a>
                        </motion.li>
                      ))}
                    </ul>
                  </nav>

                  {/* Mobile Footer */}
                  <footer className={styles["header__mobile-footer"]}>
                    <p className={styles.header__copyright}>
                      © 2025 Salman. All rights reserved.
                    </p>
                  </footer>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Theme Toggle - Desktop */}
          <div className={`${styles.header__actions} ${styles["header__actions--desktop"]}`}>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.header>
  );
}
