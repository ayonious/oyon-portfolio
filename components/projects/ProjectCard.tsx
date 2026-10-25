import BrandIcon from "../BrandIcon";
import type { OpenSourceProject } from "../../config/projects";
import { getProjectTechnologies } from "./projectUtils";

export default function ProjectCard({ project }: { project: OpenSourceProject }) {
  const technologies = getProjectTechnologies(project);

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors dark:border-slate-700 dark:bg-slate-900">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-bold text-slate-950 dark:text-slate-50">
          <a href={project.url} target="_blank" rel="noreferrer" className="no-underline hover:underline">
            {project.name}
          </a>
        </h3>
        {project.stars > 0 && (
          <span className="shrink-0 font-semibold text-amber-600 dark:text-amber-300" aria-label={`${project.stars} stars`}>
            ★ {project.stars}
          </span>
        )}
      </div>
      <p className="mt-3 text-slate-600 dark:text-slate-300">{project.description}</p>
      {technologies.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
          {technologies.map((technology) => (
            <span key={technology} className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
              <BrandIcon name={technology} className="h-3.5 w-3.5" />
              {technology}
            </span>
          ))}
        </div>
      )}
      {project.demoUrl && project.demoLabel && (
        <a href={project.demoUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex font-semibold">
          {project.demoLabel} ↗
        </a>
      )}
    </article>
  );
}
