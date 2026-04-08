import Image from "next/image";
import PageHeader from "./PageHeader";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { IconType } from "react-icons";

type ProjectLinks = {
  label: string;
  url: string;
  icon: IconType;
};

type Project = {
  name: string;
  description: string;
  image: string;
  links: ProjectLinks[];
};

const projects: Project[] = [
  {
    name: "lasora",
    description: "Filipino bakery ecommerce app",
    image: "/images/elasora.png",
    links: [
      {
        label: "Github",
        url: "https://github.com/annoll/lasora",
        icon: FaGithub,
      },
    ],
  },
  {
    name: "Water mapping system",
    description: "Deep-well water source mapping and management",
    image: "/images/elasora.png",
    links: [
      {
        label: "Github",
        url: "https://github.com/annoll/lasora",
        icon: FaGithub,
      },
    ],
  },
];

export default function Project() {
  return (
    <div className="mt-10">
      <PageHeader title="Recent Projects" />
      <div className="flex flex-col gap-3 mt-3">
        {projects.map((project, index) => (
          <div
            key={project.name}
            className="flex border border-gray-200 rounded-xl overflow-hidden hover:border-gray-300 transition-colors"
          >
            {/* Image */}
            <div className="w-48 shrink-0 relative bg-gray-50 aspect-video">
              <Image
                src={project.image}
                alt={project.name}
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex-1 p-4 flex flex-col gap-1.5">
              <span className="text-xs text-gray-300">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h4 className="text-sm font-medium text-gray-900">
                {project.name}
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed flex-1">
                {project.description}
              </p>

              {/* Links */}
              <div className="flex gap-3 mt-2 pt-2 border-t border-gray-100">
                {project.links.map(({ label, url, icon: Icon }) => (
                  <Link
                    key={label}
                    href={url}
                    target="_blank"
                    className="flex items-center gap-1 text-xs text-gray-400 hover:text-gray-700 transition-colors"
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
