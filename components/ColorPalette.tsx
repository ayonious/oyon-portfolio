"use client";

import { useEffect, useRef, useState } from "react";

const palette = [
  { name: "Lavender", value: "lavender", color: "#8b5cf6" },
  { name: "Pink", value: "pink", color: "#db2777" },
  { name: "Amber", value: "amber", color: "#d97706" },
  { name: "Green", value: "green", color: "#059669" },
  { name: "Blue", value: "blue", color: "#2563eb" },
] as const;

type Accent = (typeof palette)[number]["value"];

function isAccent(value: string | null): value is Accent {
  return palette.some((option) => option.value === value);
}

function applyAccent(accent: Accent) {
  document.documentElement.dataset.accent = accent;
  window.localStorage.setItem("accent", accent);
}

export default function ColorPalette() {
  const [accent, setAccent] = useState<Accent>("blue");
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedAccent = window.localStorage.getItem("accent");
    const initialAccent = isAccent(savedAccent) ? savedAccent : "blue";

    setAccent(initialAccent);
    applyAccent(initialAccent);
  }, []);

  useEffect(() => {
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", closeOnOutsideClick);
    return () => document.removeEventListener("mousedown", closeOnOutsideClick);
  }, []);

  const currentColor = palette.find((option) => option.value === accent)?.color;

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-label="Choose accent color"
        aria-expanded={open}
        title="Choose accent color"
        onClick={() => setOpen((current) => !current)}
        className="flex h-10 w-10 items-center justify-center rounded-xl transition-colors hover:bg-[var(--accent-soft)]"
      >
        <span
          aria-hidden="true"
          className="h-4 w-4 rounded-full"
          style={{ backgroundColor: currentColor }}
        />
      </button>

      {open && (
        <div className="absolute right-0 top-12 z-20 flex flex-col gap-1 rounded-xl border border-slate-200 bg-white p-2 shadow-lg dark:border-slate-700 dark:bg-slate-900">
          {palette.map((option) => (
            <button
              key={option.value}
              type="button"
              aria-label={`Use ${option.name} accent`}
              aria-pressed={accent === option.value}
              title={option.name}
              onClick={() => {
                setAccent(option.value);
                applyAccent(option.value);
                setOpen(false);
              }}
              className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <span
                aria-hidden="true"
                className="h-4 w-4 rounded-full"
                style={{ backgroundColor: option.color }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
