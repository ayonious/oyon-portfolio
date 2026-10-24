"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ColorPalette from "./ColorPalette";
import ThemeToggle from "./ThemeToggle";
import BrandIcon from "./BrandIcon";
import {
  sidebarContent,
  type NavigationIcon,
} from "../config/siteContent";
import {
  BooksIcon,
  BriefcaseIcon,
  DiplomaIcon,
  PawIcon,
  LightningIcon,
  MegaphoneIcon,
  SailboatIcon,
  RobotIcon,
  TheaterMaskIcon,
  WrenchIcon,
} from "./icons/SidebarIcons";

const navigationIcons: Record<NavigationIcon, typeof BriefcaseIcon> = {
  books: BooksIcon,
  briefcase: BriefcaseIcon,
  diploma: DiplomaIcon,
  paw: PawIcon,
  lightning: LightningIcon,
  megaphone: MegaphoneIcon,
  robot: RobotIcon,
  theater: TheaterMaskIcon,
  wrench: WrenchIcon,
};

export default function ProfileSidebar() {
  const pathname = usePathname();

  return (
    <aside className="border-b border-slate-200 px-3 py-8 transition-colors dark:border-slate-700 dark:bg-slate-900 sm:px-5 lg:h-screen lg:border-r lg:border-b-0 lg:px-8 lg:py-12">
      <div className="flex h-full flex-col">
        <div>
          <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-5 dark:border-slate-700">
            <Link
              className="flex items-center gap-2 text-2xl font-bold text-slate-950 no-underline dark:text-slate-50"
              href="/"
            >
              <SailboatIcon className="shrink-0" />
              <span>{sidebarContent.name}</span>
            </Link>
            <div className="flex items-center">
              <ColorPalette />
              <ThemeToggle />
            </div>
          </div>
          <p className="mt-5 max-w-xs border-b border-slate-200 pb-5 text-slate-600 dark:border-slate-700 dark:text-slate-300">
            {sidebarContent.introduction.textBefore}
            <Link href="/about">{sidebarContent.introduction.linkText}</Link>
            {sidebarContent.introduction.textAfter}
          </p>
        </div>

        <nav
          aria-label="Main navigation"
          className="mt-8 flex flex-wrap gap-2 lg:flex-col"
        >
          {sidebarContent.navigation.map(({ href, label, icon }) => {
            const Icon = navigationIcons[icon];
            const isActive = pathname === href;
            const content = (
              <>
                <Icon className="shrink-0 text-[var(--accent)]" />
                <span>{label}</span>
              </>
            );
            const className = `flex items-center gap-3 rounded-xl border px-3 py-2 text-base font-semibold no-underline transition-colors ${
              isActive
                ? "border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--accent)]"
                : "border-transparent text-slate-700 hover:bg-[var(--accent-soft)] hover:text-slate-950 dark:text-slate-200 dark:hover:text-white"
            }`;

            return (
              <Link
                key={href}
                href={href}
                className={className}
                aria-current={isActive ? "page" : undefined}
              >
                {content}
              </Link>
            );
          })}
        </nav>

        <div className="mt-8 flex gap-2 lg:mt-auto">
          {sidebarContent.socialLinks.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${link.label} profile`}
              title={`Open ${link.label} profile`}
              className="group relative flex h-10 w-10 items-center justify-center rounded-xl no-underline transition-colors hover:bg-[var(--accent-soft)]"
            >
              <BrandIcon name={link.label} className="h-5 w-5" />
              <span
                role="tooltip"
                className="pointer-events-none absolute bottom-12 left-1/2 z-30 w-max -translate-x-1/2 rounded-lg bg-slate-950 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 dark:bg-slate-100 dark:text-slate-950"
              >
                {link.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
