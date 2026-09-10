# Gemini CLI Guidelines — Portfolio Project

## Project Overview

This is my personal developer portfolio built to showcase my web applications projects and software development capabilities.

## Tech Stack & Architecture

- **Framework:** Next.js (App Router) / React with TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React (`lucide-react`)
- **Animations:** Framer Motion or clean CSS transitions

## Layout Architecture

- **Desktop Layout:** Two-column desktop grid (`lg:flex lg:justify-between lg:gap-4`).
- **Sidebar (Left Column):**
  - Sticky / Fixed positioning on desktop (`lg:sticky lg:top-0 lg:max-h-screen lg:w-1/2 lg:py-24`).
  - Houses personal identity: Name, title/role, concise bio summary, primary page navigation, and social links (GitHub, LinkedIn, Email).
  - Stacks vertically at the top on mobile screens.
- **Main Content (Right Column):**
  - Scrollable content area on desktop (`lg:w-1/2 lg:py-24`).
  - Houses primary content sections: About, Experience, Featured Projects, and Tech Stack / Tools.
  - Generous vertical spacing between sections (`space-y-16` or `space-y-24`) for visual clarity.

## Design & UI Directives

- **Theme:** Dark mode first (`bg-zinc-950` / `bg-neutral-900`).
- **Aesthetic:** Minimalist, typography-focused, clean visual hierarchy, modern software engineer aesthetic.
- **Borders & Dividers:** Subtle borders (`border-zinc-800` or `border-white/10`).
- **Color Palette:**
  - Background: `bg-zinc-950`
  - Primary Text: `text-zinc-100`
  - Muted Text: `text-zinc-400`
  - Accent / Highlights: `text-teal-300` or `text-sky-400`
- **Interactivity & Motion:**
  - Micro-interactions on hover (`transition-all duration-300 ease-in-out`).
  - Subtle scaling, spotlight borders, or opacity shifts on project cards.

## Code Conventions

- Always write clean, strict, and fully-typed TypeScript code.
- Keep components modular and single-responsibility in `src/components/`.
- Prioritize responsive mobile-first layouts using standard Tailwind breakpoints (`md:`, `lg:`).
- Avoid installing third-party dependencies unless explicitly requested.

## AI Response Preferences

- Provide clean code diffs or complete component files.
- Keep explanations direct, practical, and concise.
