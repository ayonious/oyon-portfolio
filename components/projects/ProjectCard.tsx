import HeadingLink from "../HeadingLink";
import Button from "../Button";
import BrandIcon from "../BrandIcon";
import ProjectStars from "./ProjectStars";
import NpmDownloads from "./NpmDownloads";
import type { OpenSourceProject } from "../../config/projects";
import { getProjectTechnologies } from "./projectUtils";

export default function ProjectCard({ project }: { project: OpenSourceProject }) {
  const technologies = getProjectTechnologies(project);
  const linkLabel = project.url.includes("github.com") ? "Open in GitHub" : "Open project";

  return (
    <article className="interactive-card rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-bold text-slate-950 dark:text-slate-50">
          <HeadingLink href={project.url} tooltip={linkLabel}>
            {project.name}
          </HeadingLink>
        </h3>
        <ProjectStars stars={project.stars} />
      </div>
      {project.downloadStat && <div className="mt-3"><NpmDownloads stat={project.downloadStat} /></div>}
      <p className="mt-3 text-slate-600 dark:text-slate-300">{project.description}</p>
      {technologies.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
          {technologies.map((technology) => (
            <span key={technology} className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
              <BrandIcon name={technology} className="h-[1.05rem] w-[1.05rem]" />
              {technology}
            </span>
          ))}
        </div>
      )}
      {project.demoUrl && project.demoLabel && (
        <Button href={project.demoUrl} target="_blank" rel="noreferrer" className="relative z-20 mt-5">
          {project.demoLabel} ↗
        </Button>
      )}
    </article>
  );
}
