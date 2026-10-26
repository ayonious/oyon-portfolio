import ScrollReveal from "../../components/ScrollReveal";
import WorkHistoryCard from "../../components/work/WorkHistoryCard";
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
          {workHistory.map((job) => <ScrollReveal key={`${job.company}-${job.start}`}><WorkHistoryCard job={job} /></ScrollReveal>)}
        </div>
      </section>
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-slate-950 dark:text-slate-50">{pageContent.work.projectsTitle}</h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">{pageContent.work.projectsIntroduction}</p>
        <div className="mt-8 space-y-6">
          {workProjects.map((project) => (
            <ScrollReveal key={project.title}><WorkProjectCard project={project} scaleTitle={pageContent.work.scaleTitle} /></ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
