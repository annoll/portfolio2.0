import { BadgeCheck, MapPin } from "lucide-react";
import AboutPage from "./AboutPage";
import EducationPage from "./EducationPage";
import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import { socialLinks } from "../data";

export default function Sidebar() {
  return (
    <div className="p-6 md:p-10 flex flex-col">
      <div className="flex flex-col-reverse md:flex-row justify-between items-end md:items-start gap-6">
        <div className="w-full md:w-auto py-4 px-4 md:px-8 bg-stone-900 rounded-lg">
          <div className="flex items-center gap-2">
            <h1 className="text-white font-bold text-md md:text-lg">
              Annol Manggon
            </h1>
            <BadgeCheck className="fill-blue-500 text-white" size={16} />
          </div>

          <div className="flex items-center gap-1 mt-1">
            <MapPin size={16} className="text-stone-200" />
            <p className="text-stone-200 text-xs md:text-sm">
              Zamboanga City, Philippines
            </p>
          </div>

          <p className="text-stone-300 text-xs mt-0.5">
            Junior Software Engineer
          </p>
          <div className="mt-3 pt-3 border-t border-white/10 flex flex-wrap gap-2">
            {socialLinks.map(({ label, link, icon: Icon }) => (
              <Link
                key={label}
                href={link}
                target="_blank"
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-stone-400 text-xs hover:bg-white/10 hover:text-white transition-colors"
              >
                <Icon size={13} />
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
      <EducationPage />
    </div>
  );
}
