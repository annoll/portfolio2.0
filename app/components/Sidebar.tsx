"use client";

import { BadgeCheck, MapPin } from "lucide-react";
import AboutPage from "./AboutPage";
import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import { socialLinks } from "../data";
import { useRef, MouseEvent } from "react";

export default function Sidebar() {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty("--x", `-100px`);
    card.style.setProperty("--y", `-100px`);
  };

  return (
    <div className="p-6 md:p-10 flex flex-col">
      <div className="flex flex-col-reverse md:flex-row justify-between items-end md:items-start gap-6">
        {/* Profile Card */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="spotlight-card w-full md:w-auto py-5 px-6 md:px-8 bg-stone-950 rounded-xl border border-white/5 shadow-md shadow-black/60 transition-all duration-300"
        >
          {/* spotlight overlay */}
          <div className="spotlight-light" />

          <div className="flex items-center gap-2">
            <h1 className="text-white font-semibold text-[17px] md:text-lg tracking-tight">
              Annol Manggon
            </h1>
            <BadgeCheck className="fill-blue-500 text-white" size={16} />
          </div>

          <div className="flex items-center gap-1.5 mt-1.5">
            <MapPin size={14} className="text-stone-400" />
            <p className="text-stone-400 text-[13px]">
              Zamboanga City, Philippines
            </p>
          </div>

          {/* In-update ang text para sa Aspiring Web Developer status */}
          <p className="text-stone-500 text-[12px] mt-1 font-medium uppercase tracking-wider">
            Aspiring Web Developer
          </p>

          <div className="mt-5 pt-4 border-t border-white/5 flex flex-wrap gap-2">
            {socialLinks.map(({ label, link, icon: Icon }) => (
              <Link
                key={label}
                href={link}
                target="_blank"
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/[0.03] border border-white/5 text-stone-400 text-[11px] hover:bg-white/[0.08] hover:text-white hover:border-white/20 transition-all duration-300"
              >
                <Icon size={14} />
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <ThemeToggle />
        </div>
      </div>

      <AboutPage />
    </div>
  );
}
