import type { WorkProject } from "../../config/workProjects";
import TechnologyTags from "./TechnologyTags";
import BrandText from "../BrandText";

export default function WorkProjectCard({ project, scaleTitle }: { project: WorkProject; scaleTitle: string }) {
  return (
    <article className="interactive-card rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <h3 className="text-2xl font-bold text-slate-950 dark:text-slate-50">{project.title}</h3>
      <TechnologyTags technologies={project.technologies} />
      <p className="mt-6 leading-7 text-slate-600 dark:text-slate-300"><BrandText text={`${project.situation} ${project.task} ${project.action} ${project.result}`} /></p>
      <div className="mt-6">
        <h4 className="font-bold text-slate-900 dark:text-slate-100">{scaleTitle}</h4>
        <ul className="mt-3 flex flex-wrap gap-2">
          {project.scale.map((item) => (
            <li key={item} className="rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-600 dark:border-slate-700 dark:text-slate-300">
              <BrandText text={item} />
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
