import { GraduationCap } from "lucide-react";
import PageHeader from "./PageHeader";

export default function EducationPage() {
  return (
    <div className="mt-10">
      <PageHeader title="Education" />
      <div className="flex items-center justify-between">
        <p className="text-sm font-light text-stone-800 flex items-center gap-1">
          <GraduationCap size={16} className="text-stone-400" />
          Bachelor of Science in Information Technology
        </p>
        <span className="text-stone-400 text-xs italic">May 2025</span>
      </div>
      <p className="text-stone-600 text-xs font-light italic">
        Western Mindanao State University, Zamoanga City
      </p>
    </div>
  );
}
