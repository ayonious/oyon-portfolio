import { packageGroups } from "../../config/siteCredits";

export default function AboutThisSitePage() {
  return (
    <div className="max-w-4xl py-8 sm:py-16">
      <header>
        <h1 className="text-4xl font-bold tracking-tight">About this site</h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-600 dark:text-slate-300">
          This portfolio is built with open-source software. Thank you to the
          maintainers and contributors behind every package that makes it
          possible.
        </p>
      </header>

      <div className="mt-12 space-y-10">
        {packageGroups.map((group) => (
          <section key={group.title}>
            <h2 className="text-2xl font-bold">{group.title}</h2>
            <ul className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
              {group.packages.map((item) => (
                <li
                  key={item.name}
                  className="border-b border-slate-200 p-4 last:border-b-0 sm:flex sm:items-baseline sm:justify-between sm:gap-6 dark:border-slate-700"
                >
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold no-underline hover:underline"
                  >
                    {item.name} ↗
                  </a>
                  <span className="mt-1 block text-sm text-slate-500 sm:mt-0 dark:text-slate-400">
                    {item.purpose}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <section className="mt-14 rounded-2xl bg-[var(--accent-soft)] p-6">
        <h2 className="text-2xl font-bold">Design and assets</h2>
        <p className="mt-3 text-slate-700 dark:text-slate-200">
          The layout is inspired by{" "}
          <a href="https://www.taniarascia.com/">Tania Rascia&apos;s website</a>.
          Interface icons were sourced from{" "}
          <a href="https://iconsforfree.com/">Icons For Free</a>, and the site
          is deployed with <a href="https://vercel.com/">Vercel</a>.
        </p>
      </section>
    </div>
  );
}
