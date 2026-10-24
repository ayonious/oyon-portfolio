import { allPackages, majorDependencies } from "../../config/siteCredits";

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

      <section className="mt-12">
        <h2 className="text-2xl font-bold">Major technologies</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {majorDependencies.map((dependency) => (
            <article
              key={dependency.name}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900"
            >
              <h3 className="text-xl font-bold">
                <a
                  href={dependency.url}
                  target="_blank"
                  rel="noreferrer"
                  className="no-underline hover:underline"
                >
                  {dependency.name} ↗
                </a>
              </h3>
              <p className="mt-3 text-slate-600 dark:text-slate-300">
                {dependency.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-bold">All packages</h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Runtime and development dependencies currently listed in the project.
        </p>
        <ul className="mt-5 flex flex-wrap gap-2 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          {allPackages.map((packageName) => (
            <li
              key={packageName}
              className="rounded-lg bg-slate-100 px-3 py-1.5 font-mono text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-200"
            >
              {packageName}
            </li>
          ))}
        </ul>
      </section>

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
