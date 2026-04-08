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
      <div className="flex flex-col gap-6 mt-2">
        {projects.map((project) => (
          <div
            key={project.name}
            className="flex flex-col-reverse md:flex-row border border-gray-200 rounded-xl hover:border-gray-300 transition-colors"
          >
            <div className="flex-1 p-5 flex flex-col">
              <h4 className="text-lg text-blue-700 font-bold tracking-wide">
                {project.name}
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-4 mt-auto pt-4">
                {project.links.map(({ label, url, icon: Icon }) => (
                  <Link
                    key={label}
                    href={url}
                    className="flex items-center gap-1 text-xs text-gray-400 hover:text-gray-700"
                  >
                    <Icon size={14} />
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="w-full h-48 md:w-64 md:h-auto relative shrink-0">
              <Image
                src={project.image}
                alt={project.name}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
