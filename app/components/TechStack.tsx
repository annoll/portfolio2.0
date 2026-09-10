import { techCategories } from "../data/techStacks";
import { Icons } from "./ui/icons";
import { TechCategory, TechSkill } from "../types";

export default function TechStack() {
  return (
    <section id="stack" className="space-y-4">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xs font-mono tracking-wider text-brand-muted uppercase">
          03 — Tech Stack
        </h2>
        <span className="text-xs font-mono text-brand-muted">
          Tools & Frameworks
        </span>
      </div>

      <div className="space-y-3 font-mono text-xs">
        {techCategories.map((category: TechCategory) => (
          <div
            key={category.title}
            className="p-3 rounded-lg border border-brand-border bg-brand-card/30 space-y-2"
          >
            <h3 className="text-[11px] font-sans text-brand-muted uppercase tracking-wider">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-1.5">
              {category.skills.map((skill: TechSkill) => {
                const IconComponent = skill.iconName
                  ? Icons[skill.iconName as keyof typeof Icons]
                  : null;
                return (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-brand-border bg-brand-card text-brand-light hover:border-brand-muted transition-colors text-[11px]"
                  >
                    {IconComponent && (
                      <IconComponent className="w-3 h-3 text-brand-muted shrink-0" />
                    )}
                    {skill.name}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
