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
        className="peer flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl text-[var(--accent)] transition-colors hover:bg-[var(--accent-soft)]"
      >
        {theme === "light" ? <MoonIcon /> : <SunIcon />}
      </button>
      <span
        role="tooltip"
        className="sidebar-tooltip absolute top-12 right-0 w-max max-w-44 group-hover:opacity-100 peer-focus-visible:opacity-100"
      >
        {actionLabel}
      </span>
    </div>
  );
}
