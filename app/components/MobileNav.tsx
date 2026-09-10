"use client";

import { useActiveSection } from "../hooks/useActiveSection";
import ThemeToggle from "./theme-toggle";

const navItems = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "certs", label: "Certs" },
  { id: "stack", label: "Stack" },
];

export default function MobileNav() {
  const activeSection = useActiveSection([
    "about",
    "projects",
    "certs",
    "stack",
  ]);

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 lg:hidden w-[90%] max-w-md">
      <nav className="flex items-center justify-between px-4 py-2 rounded-full border border-brand-border bg-brand-bg/80 backdrop-blur-md shadow-lg font-mono text-xs">
        <div className="flex items-center gap-3">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`transition-colors ${
                  isActive
                    ? "text-emerald-500 dark:text-emerald-400 font-bold"
                    : "text-brand-muted hover:text-brand-light"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
