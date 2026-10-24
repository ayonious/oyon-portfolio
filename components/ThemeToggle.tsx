"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./icons/SidebarIcons";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  window.localStorage.setItem("theme", theme);
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    const initialTheme = savedTheme === "dark" || savedTheme === "light"
      ? savedTheme
      : preferredTheme;

    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    applyTheme(nextTheme);
  };

  const nextTheme = theme === "light" ? "dark" : "light";
  const actionLabel = `Switch to ${nextTheme} theme`;

  return (
    <div className="group relative">
      <button
        type="button"
        aria-label={actionLabel}
        title={actionLabel}
        onClick={toggleTheme}
        className="peer flex h-10 w-10 items-center justify-center rounded-xl text-[var(--accent)] transition-colors hover:bg-[var(--accent-soft)]"
      >
        {theme === "light" ? <MoonIcon /> : <SunIcon />}
      </button>
      <span
        role="tooltip"
        className="pointer-events-none absolute top-12 right-0 z-30 w-max max-w-44 rounded-lg bg-slate-950 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 peer-focus-visible:opacity-100 dark:bg-slate-100 dark:text-slate-950"
      >
        {actionLabel}
      </span>
    </div>
  );
}
