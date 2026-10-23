import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import {
  CactusIcon,
  BriefcaseIcon,
  MegaphoneIcon,
  SailboatIcon,
  WrenchIcon,
} from "./icons/SidebarIcons";

const navigationItems = [
  { href: "/projects", label: "Open-source projects", Icon: WrenchIcon },
  { href: "/work", label: "Work history", Icon: BriefcaseIcon },
  { href: "/about", label: "About me", Icon: CactusIcon },
  { href: "/blog", label: "Blog", Icon: MegaphoneIcon },
];

export default function ProfileSidebar() {
  return (
    <aside className="border-b border-slate-200 px-6 py-8 transition-colors dark:border-slate-700 dark:bg-slate-900 lg:h-screen lg:border-r lg:border-b-0 lg:px-10 lg:py-12">
      <div className="flex h-full flex-col">
        <div>
          <div className="flex items-center justify-between gap-4">
            <Link
              className="flex items-center gap-2 text-2xl font-bold text-slate-950 no-underline dark:text-slate-50"
              href="/"
            >
              <SailboatIcon className="shrink-0" />
              <span>Nahiyan K</span>
            </Link>
            <ThemeToggle />
          </div>
          <p className="mt-3 max-w-xs text-slate-600 dark:text-slate-300">
            I&apos;m <Link href="/about">Nahiyan</Link>, a software engineer and
            open-source creator. This is my digital introduction. 🙋🏻
          </p>
        </div>

        <nav
          aria-label="Main navigation"
          className="mt-8 flex flex-wrap gap-2 lg:flex-col"
        >
          {navigationItems.map(({ href, label, Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-3 rounded-xl px-3 py-2 text-base font-semibold text-slate-700 no-underline transition-colors hover:bg-slate-200 hover:text-slate-950 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              <Icon className="shrink-0 text-[#253047] dark:text-slate-100" />
              <span>{label}</span>
            </Link>
          ))}
        </nav>

        <div className="mt-8 flex gap-5 text-sm font-medium dark:[&_a]:text-blue-300 lg:mt-auto">
          <a href="https://github.com/ayonious">GitHub</a>
          <a href="https://www.linkedin.com/in/nahiyan-k-0782743a">
            LinkedIn
          </a>
        </div>
      </div>
    </aside>
  );
}
