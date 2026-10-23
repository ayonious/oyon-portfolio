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

  return (
    <button
      type="button"
      aria-label={`Switch to ${nextTheme} theme`}
      title={`Switch to ${nextTheme} theme`}
      onClick={toggleTheme}
      className="flex h-10 w-10 items-center justify-center rounded-xl text-[var(--accent)] transition-colors hover:bg-[var(--accent-soft)]"
    >
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}
