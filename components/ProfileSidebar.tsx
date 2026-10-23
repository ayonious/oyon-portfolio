import Link from "next/link";
import {
  AbacusIcon,
  CactusIcon,
  MegaphoneIcon,
} from "./icons/SidebarIcons";

const navigationItems = [
  { href: "/projects", label: "Projects", Icon: AbacusIcon },
  { href: "/about", label: "About me", Icon: CactusIcon },
  { href: "/blog", label: "Blog", Icon: MegaphoneIcon },
];

export default function ProfileSidebar() {
  return (
    <aside className="border-b border-slate-200 px-6 py-8 lg:h-screen lg:border-r lg:border-b-0 lg:px-10 lg:py-12">
      <div className="flex h-full flex-col">
        <div>
          <Link className="text-2xl font-bold text-slate-950 no-underline" href="/">
            Nahiyan Kamal
          </Link>
          <p className="mt-3 max-w-xs text-slate-600">
            Senior Fullstack Software Engineer based in Berlin.
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
              className="flex items-center gap-3 rounded-xl px-3 py-2 text-base font-semibold text-slate-700 no-underline transition-colors hover:bg-slate-200 hover:text-slate-950"
            >
              <Icon className="shrink-0 text-[#253047]" />
              <span>{label}</span>
            </Link>
          ))}
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
