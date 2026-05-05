import { GraduationCap } from "lucide-react";
import PageHeader from "./PageHeader";
import FadeUp from "./animations/FadeUp";

export default function EducationPage() {
  return (
    <div className="mt-10">
      <PageHeader title="Education" />
      <FadeUp delay={0.1}>
        <div className="flex items-start gap-3 mt-4 border-l border-stone-200 dark:border-stone-800 rounded-xl p-3">
          <div className="w-9 h-9 rounded-lg bg-stone-100 dark:bg-stone-900 flex items-center justify-center shrink-0 border border-stone-200/50 dark:border-stone-800">
            <GraduationCap
              size={18}
              className="text-stone-500 dark:text-stone-400"
            />
          </div>

          <div className="flex flex-col min-w-0">
            <p className="text-[13px] font-medium text-stone-800 dark:text-stone-100 leading-tight wrap-break-word">
              Bachelor of Science in Information Technology
            </p>

            <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-1 leading-snug">
              Western Mindanao State University
            </p>

            <div className="flex items-center gap-2 mt-1">
              <span className="text-[10px] text-stone-400 dark:text-stone-600 uppercase tracking-wider font-medium">
                Zamboanga City
              </span>
              <span className="text-stone-300 dark:text-stone-800">•</span>
              <span className="text-[10px] text-stone-400 dark:text-stone-500 italic">
                May 2025
              </span>
            </div>
          </div>
        </div>
      </FadeUp>
    </div>
  );
}
