"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex h-7 w-12 items-center rounded-full bg-gray-200 p-1 transition-colors duration-500 dark:bg-gray-700"
      aria-label="Toggle theme"
    >
      <motion.div
        animate={{ x: isDark ? 20 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-md"
      >
        {isDark ? (
          <Moon className="h-3 w-3 text-slate-700" />
        ) : (
          <Sun className="h-3 w-3 text-amber-500" />
        )}
      </motion.div>
    </button>
  );
}
