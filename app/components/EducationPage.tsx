import { GraduationCap } from "lucide-react";
import PageHeader from "./PageHeader";
import FadeUp from "./animations/FadeUp";

export default function EducationPage() {
  return (
    <div className="mt-10">
      <PageHeader title="Education" />
      <FadeUp delay={0.1}>
        <div className="flex items-start gap-4 mt-6 border border-zinc-200 dark:border-zinc-800 rounded-xl p-4 bg-white dark:bg-zinc-900/50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300">
          <div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center shrink-0 border border-zinc-200 dark:border-zinc-700">
            <GraduationCap
              size={20}
              className="text-zinc-600 dark:text-zinc-400"
            />
          </div>

          <div className="flex flex-col min-w-0">
            <p className="text-[14px] font-semibold text-zinc-900 dark:text-zinc-100 leading-tight">
              Bachelor of Science in Information Technology
            </p>

            <p className="text-[12px] text-zinc-600 dark:text-zinc-400 mt-1">
              Western Mindanao State University
            </p>

            <div className="flex items-center gap-2 mt-2">
              <span className="text-[10px] text-zinc-500 dark:text-zinc-500 uppercase tracking-wider font-medium">
                Zamboanga City
              </span>
              <span className="text-zinc-300 dark:text-zinc-700">•</span>
              <span className="text-[10px] text-zinc-500 dark:text-zinc-500 italic">
                May 2025
              </span>
            </div>
          </div>
        </div>
      </FadeUp>
    </div>
  );
}
