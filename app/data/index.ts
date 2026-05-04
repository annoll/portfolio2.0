import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Project, socialLink } from "../types";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiPrisma, SiSupabase, SiReact, SiGit } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";


export const socialLinks: socialLink[] = [
  { label: "Github", link: "https://github.com/annoll", icon: FaGithub },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/nur-manggona-b0a37b297/",
    icon: FaLinkedin,
  },
  { label: "Email", link: "mailto:annolmanggona12@gmail.com", icon: MdEmail },
];

export const stacks = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Prisma", icon: SiPrisma },
  { name: "Supabase", icon: SiSupabase },
  { name: "React", icon: SiReact },
  { name: "Git", icon: SiGit },
  { name: "CSS", icon: FaCss3Alt },
];

export const projects: Project[] = [
  {
    name: "lasora",
    description:
      "A full-stack Filipino bakery e-commerce app with role-based admin dashboard, order management, and real-time analytics.",
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
    description:
      "An interactive infrastructure tool for monitoring water source locations. Built with Leaflet.js, this project focuses on precise geolocation and efficient data mapping to help manage essential community resources.",
    image: "/images/deep-well.png",
    links: [
      {
        label: "Github",
        url: "https://github.com/annoll/lasora",
        icon: FaGithub,
      },
    ],
  },
];