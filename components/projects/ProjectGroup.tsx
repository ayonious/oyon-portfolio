import BrandIcon from "../BrandIcon";
import ProjectCard from "./ProjectCard";
import { getProjectTechnologies } from "./projectUtils";
import type { OpenSourceProject } from "../../config/projects";
import { pageContent } from "../../config/siteContent";

export type ProjectGroupProps = {
  label: string;
  description?: string;
  limit?: number;
  onlyPinned?: boolean;
  projects: OpenSourceProject[];
  showStats?: boolean;
  view?: "cards" | "list";
  url: string;
};

export default function ProjectGroup({ label, limit, onlyPinned, projects, description, showStats = true, view = "cards", url }: ProjectGroupProps) {
  const filteredProjects = onlyPinned ? projects.filter((project) => project.pinned) : projects;
  const visibleProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;
  const totalStars = visibleProjects.reduce((total, project) => total + project.stars, 0);

  return (
    <section className="mt-12">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-slate-50">{label}</h2>
        <a href={url} target="_blank" rel="noreferrer" className="font-medium">{pageContent.projects.viewOnGitHub}</a>
      </div>
      {description && <p className="mt-2 max-w-3xl text-slate-600 dark:text-slate-300">{description}</p>}
      {showStats && <p className="mt-2 text-slate-600 dark:text-slate-300">{visibleProjects.length} projects · {totalStars} stars</p>}
      {view === "list" ? (
        <ul className="mt-6 divide-y divide-slate-200 border-y border-slate-200 dark:divide-slate-700 dark:border-slate-700">
          {visibleProjects.map((project) => {
            const technologies = getProjectTechnologies(project);
            return (
              <li key={project.url} className="flex flex-wrap items-center justify-between gap-4 py-4">
                <div className="min-w-0">
                  <a href={project.url} target="_blank" rel="noreferrer" className="font-semibold">{project.name} ↗</a>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{project.description}</p>
                  {technologies.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2" aria-label="Technologies used">
                      {technologies.map((technology) => (
                        <span key={technology} className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                          <BrandIcon name={technology} className="h-3.5 w-3.5" />{technology}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex shrink-0 items-center gap-3 text-sm">
                  {project.demoUrl && project.demoLabel && <a href={project.demoUrl} target="_blank" rel="noreferrer">{project.demoLabel} ↗</a>}
                  {project.stars > 0 && <span className="font-semibold text-amber-600 dark:text-amber-300">★ {project.stars}</span>}
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {visibleProjects.map((project) => <ProjectCard key={project.url} project={project} />)}
        </div>
      )}
    </section>
  );
}
