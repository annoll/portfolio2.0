import React from "react";

export default function About() {
  return (
    <section id="about" className="space-y-4 scroll-mt-20">
      {/* Mobile-only header (nakatago sa desktop dahil nasa Sticky Sidebar na) */}
      <h2 className="text-xs font-mono tracking-wider text-brand-muted uppercase lg:hidden">
        00 — About
      </h2>

      {/* Main Bio Paragraph */}
      <div className="space-y-3 text-sm text-brand-light/90 leading-relaxed">
        <p>
          I&apos;m a Information Technology graduate based in Zamboanga City,
          Philippines. I enjoy creating simple, functional and user-frienly
          digital experiences. I like turning ideas into real products while
          continuously improving my skills through every project I buid.
        </p>
        <p>
          I&apos;m passionate about learning new technologies, exploring
          creative solutions, and building applications that are useful and
          enjoyable to use.
        </p>
      </div>

      {/* Quick Info & Location Pills */}
      <div className="flex flex-wrap gap-2 pt-1 font-mono text-[11px]">
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-brand-border bg-brand-card text-brand-light">
          <svg
            className="w-3 h-3 text-brand-muted"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          Zamboanga City, PH
        </div>

        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-brand-border bg-brand-card text-brand-light">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          BS Information Technology
        </div>

        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border border-brand-border bg-brand-card text-brand-light">
          Focus: Web & Mobile Dev
        </div>
      </div>
    </section>
  );
}
