import FadeUp from "./animations/FadeUp";
import PageHeader from "./PageHeader";

export default function AboutPage() {
  return (
    <div className="mt-10">
      <PageHeader title="About" />

      <div className="max-w-lg mt-4 space-y-5">
        <FadeUp delay={0.05}>
          <p className="text-stone-600 dark:text-stone-300 text-[15px] leading-relaxed mb-1">
            I&apos;m an aspiring web developer who enjoys building projects from
            scratch. I love the process of making things work behind the scenes
            and spending time on the small details until the UI looks and feels
            right.
          </p>

          <p className="text-stone-500 dark:text-stone-400 text-[14px] leading-relaxed">
            I&apos;m drawn to the intersection of clean code and thoughtful
            design. Whether I&apos;m working on the database or polishing a
            button&apos;s shadow, I always aim for a balance between stability
            and aesthetics.
          </p>

          <div className="pt-2 flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] text-stone-500 dark:text-stone-400 uppercase tracking-widest font-medium">
              Open for work & collaborations
            </span>
          </div>
        </FadeUp>
      </div>
    </div>
  );
}
