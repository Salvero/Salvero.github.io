"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 animate-pulse" />
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={cn(
        "relative w-10 h-10 rounded-full",
        "bg-gradient-to-br from-violet-500 to-fuchsia-500",
        "flex items-center justify-center",
        "shadow-lg shadow-violet-500/25",
        "hover:shadow-violet-500/40 transition-shadow duration-300"
      )}
      aria-label="Toggle theme"
    >
      <Sun
        className={cn(
          "h-5 w-5 text-white absolute transition-all duration-300",
          theme === "dark" ? "rotate-90 scale-0" : "rotate-0 scale-100"
        )}
      />
      <Moon
        className={cn(
          "h-5 w-5 text-white absolute transition-all duration-300",
          theme === "dark" ? "rotate-0 scale-100" : "-rotate-90 scale-0"
        )}
      />
    </motion.button>
  );
}
