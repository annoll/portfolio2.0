"use client";

import ThemeToggle from "@/app/components/theme-toggle";
import { Icons } from "./ui/icons";
import { siteConfig as profile, siteConfig } from "../data/siteConfig";
import { useActiveSection } from "../hooks/useActiveSection";
import Link from "next/link";

const navItems = [
  { id: "about", label: "About", number: "00" },
  { id: "projects", label: "Projects", number: "01" },
  { id: "certs", label: "Certifications", number: "03" },
  { id: "stack", label: "Tech Stack", number: "04" },
];

export default function Sidebar() {
  const activeSection = useActiveSection([
    "about",
    "projects",
    "certs",
    "stack",
  ]);
  return (
    <aside className="w-full lg:sticky lg:top-16 lg:h-[calc(100vh-8rem)] lg:flex lg:flex-col lg:justify-between mb-10 lg:mb-0">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight text-brand-light">
            {profile.name}
          </h1>
          <p className="text-brand-muted text-sm font-mono">{profile.role}</p>
        </div>

        <p className="text-xs text-brand-light leading-relaxed">
          {profile.bio}
        </p>

        <nav className="space-y-2 pt-2 font-mono text-xs">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className={`flex items-center gap-2 transition-all duration-200 ${
                  isActive
                    ? "text-brand-light font-bold translate-x-1"
                    : "text-brand-muted hover:text-brand-light"
                }`}
              >
                <span
                  className={`transition-colors ${
                    isActive
                      ? "text-emerald-500 dark:text-emerald-400 font-bold"
                      : "text-brand-muted"
                  }`}
                >
                  {item.number} -
                </span>
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="pt-6 lg:pt-0 space-y-4">
        {profile.openForWork && (
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-brand-border bg-brand-card text-[11px] font-mono text-emerald-600 dark:text-emerald-400 w-fit whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
            Open to Entry-Level & Freelance Roles
          </div>
        )}

        <div className="flex items-center justify-between border-t border-brand-border pt-4">
          <div className="flex items-center gap-3.5 text-xs font-mono text-brand-muted">
            {siteConfig.socials.map((item) => {
              const IconComponent =
                Icons[item.iconName as keyof typeof Icons] || Icons.external;
              return (
                <a
                  key={item.label}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-brand-light transition-colors"
                  title={item.label}
                >
                  <IconComponent className="w-4 h-4" />
                </a>
              );
            })}
          </div>

          <ThemeToggle />
        </div>
      </div>
    </aside>
  );
}
