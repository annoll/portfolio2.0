import Image from "next/image";
import PageHeader from "./PageHeader";
import Link from "next/link";
import { projects } from "../data";

export default function Project() {
  return (
    <div className="mt-10">
      <PageHeader title="Recent Projects" />
      <div className="flex flex-col gap-3 mt-3">
        {projects.map((project, index) => (
          <div
            key={project.name}
            className="flex flex-col md:flex-row border border-gray-200 dark:border-stone-700 rounded-xl overflow-hidden hover:border-gray-300 dark:hover:border-stone-600 transition-colors"
          >
            <div className="w-full h-48 md:w-56 md:h-auto shrink-0 relative bg-gray-50 dark:bg-stone-800 aspect-video">
              <Image
                src={project.image}
                alt={project.name}
                fill
                priority
                className="object-cover"
              />
            </div>

            <div className="flex-1 p-4 flex flex-col gap-1.5">
              <span className="text-xs text-gray-300 dark:text-stone-600">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h4 className="text-sm font-medium text-gray-900 dark:text-stone-100">
                {project.name}
              </h4>
              <p className="text-xs text-gray-400 dark:text-stone-400 leading-relaxed flex-1">
                {project.description}
              </p>

              <div className="flex gap-3 mt-2 pt-2 border-t border-gray-100 dark:border-stone-700">
                {project.links.map(({ label, url, icon: Icon }) => (
                  <Link
                    key={label}
                    href={url}
                    target="_blank"
                    className="flex items-center gap-1 text-xs text-gray-400 dark:text-stone-400 hover:text-gray-700 dark:hover:text-stone-200 transition-colors"
                  >
                    <Icon size={12} />
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
