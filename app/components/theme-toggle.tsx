"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { Icons } from "./ui/icons";

const emptySubscribe = () => () => {};

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  if (!mounted) return <div className="h-8 w-8" />;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="p-1.5 rounded-md border border-brand-border bg-brand-card/60 text-brand-muted hover:text-brand-light transition-colors flex items-center justify-center"
      aria-label="Toggle theme"
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? (
        <Icons.sun className="w-3.5 h-3.5" />
      ) : (
        <Icons.moon className="w-3.5 h-3.5" />
      )}
    </button>
  );
}
