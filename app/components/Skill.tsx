import PageHeader from "./PageHeader";
import { stacks } from "../data";
import FadeUp from "@/app/components/animations/FadeUp";

export default function Skill() {
  return (
    <div>
      <PageHeader title="Tech Stacks" />
      <div className="mt-6">
        <FadeUp delay={0.1}>
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
        </FadeUp>
      </div>
    </div>
  );
}
