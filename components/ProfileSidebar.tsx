import Link from "next/link";
import ColorPalette from "./ColorPalette";
import ThemeToggle from "./ThemeToggle";
import {
  BooksIcon,
  BriefcaseIcon,
  DiplomaIcon,
  InfoIcon,
  LightningIcon,
  MegaphoneIcon,
  SailboatIcon,
  RobotIcon,
  TheaterMaskIcon,
  WrenchIcon,
} from "./icons/SidebarIcons";

const navigationItems = [
  { href: "/work", label: "Work", Icon: BriefcaseIcon, external: false },
  { href: "/projects", label: "Open source", Icon: WrenchIcon, external: false },
  { href: "/skills", label: "Skills", Icon: LightningIcon, external: false },
  { href: "/ai", label: "AI", Icon: RobotIcon, external: false },
  {
    href: "/reading",
    label: "Books",
    Icon: BooksIcon,
    external: false,
  },
  {
    href: "/certifications",
    label: "Certifications",
    Icon: DiplomaIcon,
    external: false,
  },
  { href: "/about", label: "About me", Icon: TheaterMaskIcon, external: false },
  {
    href: "/about-this-site",
    label: "About this site",
    Icon: InfoIcon,
    external: false,
  },
  { href: "/blog", label: "Blog", Icon: MegaphoneIcon, external: false },
];

export default function ProfileSidebar() {
  return (
    <aside className="border-b border-slate-200 px-6 py-8 transition-colors dark:border-slate-700 dark:bg-slate-900 lg:h-screen lg:border-r lg:border-b-0 lg:px-10 lg:py-12">
      <div className="flex h-full flex-col">
        <div>
          <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-5 dark:border-slate-700">
            <Link
              className="flex items-center gap-2 text-2xl font-bold text-slate-950 no-underline dark:text-slate-50"
              href="/"
            >
              <SailboatIcon className="shrink-0" />
              <span>Nahiyan K</span>
            </Link>
            <div className="flex items-center">
              <ColorPalette />
              <ThemeToggle />
            </div>
          </div>
          <p className="mt-5 max-w-xs border-b border-slate-200 pb-5 text-slate-600 dark:border-slate-700 dark:text-slate-300">
            I&apos;m <Link href="/about">Nahiyan</Link>, a software engineer and
            open-source creator. This is my digital introduction. 🙋🏻
          </p>
        </div>

        <nav
          aria-label="Main navigation"
          className="mt-8 flex flex-wrap gap-2 lg:flex-col"
        >
          {navigationItems.map(({ href, label, Icon, external }) => {
            const content = (
              <>
                <Icon className="shrink-0 text-[var(--accent)]" />
                <span>{label}</span>
              </>
            );
            const className =
              "flex items-center gap-3 rounded-xl px-3 py-2 text-base font-semibold text-slate-700 no-underline transition-colors hover:bg-[var(--accent-soft)] hover:text-slate-950 dark:text-slate-200 dark:hover:text-white";

            return external ? (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                className={className}
              >
                {content}
              </a>
            ) : (
              <Link key={href} href={href} className={className}>
                {content}
              </Link>
            );
          })}
        </nav>

        <div className="mt-8 flex gap-5 text-sm font-medium lg:mt-auto">
          <a href="https://github.com/ayonious">GitHub</a>
          <a href="https://www.linkedin.com/in/nahiyan-k-0782743a">
            LinkedIn
          </a>
        </div>
      </div>
    </aside>
  );
}
