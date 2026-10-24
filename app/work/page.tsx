import { workHistory } from "../../config/workHistory";
import { workProjects } from "../../config/workProjects";
import { pageContent } from "../../config/siteContent";
import BrandIcon from "../../components/BrandIcon";

export default function WorkHistoryPage() {
  return (
    <div className="max-w-4xl py-8 sm:py-16">
      <section>
        <header>
          <h1 className="text-4xl font-bold tracking-tight text-slate-950 dark:text-slate-50">
            {pageContent.work.title}
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            {pageContent.work.introduction}
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
                  <h2 className="flex items-center gap-2 text-2xl font-bold text-slate-950 dark:text-slate-50">
                    <BrandIcon name={job.company} className="h-6 w-6 shrink-0" />
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
                      <span className="flex items-center gap-1.5">
                        <BrandIcon name={technology} className="h-3.5 w-3.5 shrink-0" />
                        {technology}
                      </span>
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

      <section className="mt-16">
        <h2 className="text-3xl font-bold text-slate-950 dark:text-slate-50">
          {pageContent.work.projectsTitle}
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          {pageContent.work.projectsIntroduction}
        </p>

        <div className="mt-8 space-y-6">
          {workProjects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900"
            >
              <h3 className="text-2xl font-bold text-slate-950 dark:text-slate-50">
                {project.title}
              </h3>

              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
                {project.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-600 dark:border-slate-700 dark:text-slate-300"
                  >
                    <span className="flex items-center gap-1.5">
                      <BrandIcon name={technology} className="h-3.5 w-3.5 shrink-0" />
                      {technology}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 leading-7 text-slate-600 dark:text-slate-300">
                <strong className="text-slate-900 dark:text-slate-100">
                  {pageContent.work.starLabels[0]}
                </strong>
                : {project.situation}{" "}
                <strong className="text-slate-900 dark:text-slate-100">
                  {pageContent.work.starLabels[1]}
                </strong>
                : {project.task}{" "}
                <strong className="text-slate-900 dark:text-slate-100">
                  {pageContent.work.starLabels[2]}
                </strong>
                : {project.action}{" "}
                <strong className="text-slate-900 dark:text-slate-100">
                  {pageContent.work.starLabels[3]}
                </strong>
                : {project.result}
              </p>

              <div className="mt-6 rounded-xl bg-slate-100 p-4 dark:bg-slate-800">
                <h4 className="font-bold text-slate-900 dark:text-slate-100">
                  {pageContent.work.scaleTitle}
                </h4>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-300">
                  {project.scale.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
