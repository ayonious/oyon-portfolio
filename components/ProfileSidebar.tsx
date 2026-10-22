import Link from "next/link";

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

        <nav aria-label="Main navigation" className="mt-8 flex flex-wrap gap-5 lg:flex-col">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
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
