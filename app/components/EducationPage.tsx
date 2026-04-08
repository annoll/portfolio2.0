import { GraduationCap } from "lucide-react";
import PageHeader from "./PageHeader";

export default function EducationPage() {
  return (
    <div className="mt-10">
      <PageHeader title="Education" />
      <div className="flex items-start gap-3 mt-3 border border-stone-200 rounded-xl p-4">
        <div className="w-8 h-8 rounded-lg bg-stone-100 flex items-center justify-center shrink-0">
          <GraduationCap size={16} className="text-stone-500" />
        </div>
        <div className="text-sm font-medium text-stone-800">
          <p>Bachelor of Science in Information Technology</p>
          <p className="text-stone-500 text-xs mt-0.5">
            Western Mindanao State University, Zamoanga City
          </p>
          <span className="text-stone-400 text-xs italic mt-1">May 2025</span>
        </div>
      </div>
    </div>
  );
}
