import PageHeader from "./PageHeader";
import { stacks } from "../data";
import FadeUp from "@/app/components/animations/FadeUp";

export default function Skill() {
  return (
    <div>
      <PageHeader title="Tech Stacks" />
      <div className="flex flex-wrap gap-2 mt-6">
        {stacks.map(({ name, icon: Icon }, index) => (
          <FadeUp key={name} delay={index * 40}>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-950 text-stone-600 dark:text-stone-400 hover:border-stone-300 dark:hover:border-stone-700 hover:text-stone-900 dark:hover:text-stone-100 transition-all duration-200">
              <Icon size={14} />
              <span className="text-[12px] font-medium">{name}</span>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  );
}
