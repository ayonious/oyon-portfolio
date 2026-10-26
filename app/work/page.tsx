import WorkHistoryCard from "../../components/work/WorkHistoryCard";
import BrandIcon from "../../components/BrandIcon";
import WorkProjectCard from "../../components/work/WorkProjectCard";
import { pageContent } from "../../config/siteContent";
import { workHistory } from "../../config/workHistory";
import { workProjects } from "../../config/workProjects";

export default function WorkHistoryPage() {
  return (
    <div className="max-w-4xl py-8 sm:py-16">
      <section>
        <header>
          <h1 className="text-4xl font-bold tracking-tight text-slate-950 dark:text-slate-50">{pageContent.work.title}</h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">{pageContent.work.introduction}</p>
        </header>
        <div className="mt-10 space-y-6">
          {workHistory.map((job) => <WorkHistoryCard key={`${job.company}-${job.start}`} job={job} />)}
        </div>
      </section>
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-slate-950 dark:text-slate-50">{pageContent.work.projectsTitle}</h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">{pageContent.work.projectsIntroduction}</p>
        <div className="mt-8 space-y-6">
          {workProjects.map((project) => (
            <WorkProjectCard key={project.title} project={project} scaleTitle={pageContent.work.scaleTitle} />
          ))}
        </div>
      </section>
      <p className="mt-12">
        <a href={pageContent.work.recommendations.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-semibold">
          <BrandIcon name={pageContent.work.recommendations.icon} className="h-5 w-5 shrink-0" />
          {pageContent.work.recommendations.label} <span aria-hidden="true">↗</span>
        </a>
      </p>
    </div>
  );
}
