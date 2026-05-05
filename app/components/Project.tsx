import Image from "next/image";
import PageHeader from "./PageHeader";
import Link from "next/link";
import { projects } from "../data";
import FadeUp from "@/app/components/animations/FadeUp";

export default function Project() {
  return (
    <div className="mt-10">
      <PageHeader title="Recent Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
        {projects.map((project, index) => (
          <FadeUp key={project.name} delay={index * 80} className="h-full">
            <div className="group flex flex-col h-full border border-stone-200 dark:border-stone-800 rounded-xl overflow-hidden hover:border-stone-300 dark:hover:border-stone-700 transition-all duration-300 bg-white dark:bg-stone-950">
              <div className="relative aspect-video w-full overflow-hidden bg-stone-100 dark:bg-stone-900 border-b border-stone-100 dark:border-stone-800">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex-1 p-4 flex flex-col">
                <div className="flex justify-between items-start mb-1.5">
                  <h4 className="text-sm font-semibold text-stone-900 dark:text-stone-100 transition-colors">
                    {project.name}
                  </h4>
                  <span className="text-[10px] font-mono font-bold text-stone-400 dark:text-stone-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="text-[12px] text-stone-500 dark:text-stone-400 leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="mt-auto flex gap-3 pt-3 border-t border-stone-100 dark:border-stone-800/50">
                  {project.links.map(({ label, url, icon: Icon }) => (
                    <Link
                      key={label}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-[11px] font-medium text-stone-400 dark:text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
                    >
                      <Icon size={13} />
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  );
}
