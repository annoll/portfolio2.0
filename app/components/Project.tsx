import Image from "next/image";
import PageHeader from "./PageHeader";
import Link from "next/link";
import { projects } from "../data";
import FadeUp from "@/app/components/animations/FadeUp";

export default function Project() {
  return (
    <div className="mt-10">
      <PageHeader title="Recent Projects" />
      <FadeUp delay={0.1}>
        <div className="flex flex-col gap-3 mt-3">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="flex flex-col md:flex-row border border-gray-200 dark:border-stone-700 rounded-xl overflow-hidden hover:border-gray-300 dark:hover:border-stone-600 transition-colors"
            >
              <div className="w-full h-48 md:w-64 md:h-auto shrink-0 relative bg-stone-50 dark:bg-stone-900 overflow-hidden border-r border-stone-100 dark:border-stone-800">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex-1 p-5 flex flex-col">
                {" "}
                {/* Tinaasan ang padding mula p-4 */}
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-[15px] font-semibold text-stone-900 dark:text-stone-100">
                    {project.name}
                  </h4>
                  <span className="text-xs font-mono bold text-stone-600 dark:text-stone-700 tracking-tighter">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-[13px] text-stone-500 dark:text-stone-400 leading-relaxed mb-4">
                  {project.description}
                </p>
                {/* Push links to bottom */}
                <div className="mt-auto flex gap-4 pt-3 border-t border-stone-100 dark:border-stone-800/50">
                  {project.links.map(({ label, url, icon: Icon }) => (
                    <Link
                      key={label}
                      href={url}
                      target="_blank"
                      className="flex items-center gap-1.5 text-[11px] font-medium text-stone-400 dark:text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
                    >
                      <Icon size={13} />
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </FadeUp>
    </div>
  );
}
