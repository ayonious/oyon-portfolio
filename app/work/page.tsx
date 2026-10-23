import { workHistory } from "../../config/workHistory";

export default function WorkHistoryPage() {
  return (
    <section className="max-w-3xl py-8 sm:py-16">
      <header>
        <h1 className="text-4xl font-bold tracking-tight text-slate-950 dark:text-slate-50">
          Work history
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
          My career building web, mobile, payments, authentication, and travel
          products.
        </p>
      </header>

      <div className="mt-10 space-y-6">
        {workHistory.map((job) => (
          <article
            key={`${job.company}-${job.start}`}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="text-2xl font-bold text-slate-950 dark:text-slate-50">
                  {job.company}
                </h2>
                <p className="mt-1 font-semibold text-slate-700 dark:text-slate-200">
                  {job.role}
                </p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {job.location}
                </p>
              </div>
              <p className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                {job.start} – {job.end}
              </p>
            </div>

            {job.technologies && (
              <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                {job.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-600 dark:border-slate-700 dark:text-slate-300"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            )}

            <ul className="mt-5 list-disc space-y-2 pl-5 text-slate-600 dark:text-slate-300">
              {job.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
