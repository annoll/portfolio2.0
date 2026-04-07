import {
  SiGit,
  SiNextdotjs,
  SiPrisma,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import PageHeader from "./PageHeader";

const stacks = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Prisma", icon: SiPrisma },
  { name: "Supabase", icon: SiSupabase },
  { name: "React", icon: SiReact },
  { name: "Git", icon: SiGit },
  { name: "Vercel", icon: SiVercel },
];
export default function Skill() {
  return (
    <div>
      <PageHeader title="Tech Stacks" />
      <div className="mt-6">
        <div className="flex flex-wrap gap-3">
          {stacks.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 text-gray-700"
            >
              <Icon size={16} />
              <span className="text-xs">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
