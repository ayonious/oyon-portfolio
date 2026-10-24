import { allPackages, majorDependencies } from "../../config/siteCredits";
import { aboutSiteContent } from "../../config/siteContent";
import BrandIcon from "../../components/BrandIcon";

export default function AboutThisSitePage() {
  return (
    <div className="max-w-4xl py-8 sm:py-16">
      <header>
        <h1 className="text-4xl font-bold tracking-tight">{aboutSiteContent.title}</h1>
        <p className="mt-4 max-w-3xl text-lg text-slate-600 dark:text-slate-300">
          {aboutSiteContent.introduction}
        </p>
      </header>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">{aboutSiteContent.majorTitle}</h2>
        <ul className="mt-5 border-t border-slate-200 dark:border-slate-700">
          {majorDependencies.map((dependency) => (
            <li
              key={dependency.name}
              className="grid gap-2 border-b border-slate-200 py-5 sm:grid-cols-[13rem_minmax(0,1fr)] sm:gap-8 dark:border-slate-700"
            >
              <h3 className="font-bold">
                <a
                  href={dependency.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 no-underline hover:underline"
                >
                  <BrandIcon name={dependency.name} className="h-5 w-5 shrink-0" />
                  <span>{dependency.name} ↗</span>
                </a>
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                {dependency.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-bold">{aboutSiteContent.packagesTitle}</h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          {aboutSiteContent.packagesIntroduction}
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

      <section className="mt-14">
        <h2 className="text-2xl font-bold">{aboutSiteContent.deployment.title}</h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          {aboutSiteContent.deployment.introduction}
        </p>
        <ul className="mt-5 border-t border-slate-200 dark:border-slate-700">
          {aboutSiteContent.deployment.details.map((detail) => (
            <li
              key={detail.title}
              className="grid gap-2 border-b border-slate-200 py-5 sm:grid-cols-[13rem_minmax(0,1fr)] sm:gap-8 dark:border-slate-700"
            >
              <h3 className="font-bold">{detail.title}</h3>
              <p className="text-slate-600 dark:text-slate-300">
                {detail.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <h2 className="text-2xl font-bold">{aboutSiteContent.reuse.title}</h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          {aboutSiteContent.reuse.introduction}
        </p>
        <ul className="mt-5 list-disc space-y-2 pl-5 text-slate-600 dark:text-slate-300">
          {aboutSiteContent.reuse.notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
        <a
          href={aboutSiteContent.reuse.repositoryUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex rounded-xl border border-[var(--accent)] px-4 py-2 font-semibold no-underline transition-colors hover:bg-[var(--accent-soft)]"
        >
          {aboutSiteContent.reuse.repositoryLabel}
        </a>
      </section>

      <section className="mt-14 rounded-2xl bg-[var(--accent-soft)] p-6">
        <h2 className="text-2xl font-bold">{aboutSiteContent.creditsTitle}</h2>
        <ul className="mt-4 space-y-3">
          {aboutSiteContent.credits.map((credit) => (
            <li key={credit.url} className="text-slate-700 dark:text-slate-200">
              <span aria-hidden="true" className="mr-2">
                {credit.emoji}
              </span>
              {credit.role}:{" "}
              <a href={credit.url} target="_blank" rel="noreferrer">
                {credit.name}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
