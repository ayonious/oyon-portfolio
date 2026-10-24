import {
  openSourceProjectsConfig,
  type OpenSourceProject,
} from "../../config/projects";
import { pageContent } from "../../config/siteContent";
import BrandIcon from "../../components/BrandIcon";

function getProjectTechnologies(project: OpenSourceProject) {
  const technologies = project.language
    ? [project.language, ...(project.technologies ?? [])]
    : project.technologies ?? [];
  const seen = new Set<string>();

  return technologies.filter((technology) => {
    const normalized = technology.toLowerCase();
    if (seen.has(normalized)) return false;
    seen.add(normalized);
    return true;
  });
}

function ProjectCard({ project }: { project: OpenSourceProject }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors dark:border-slate-700 dark:bg-slate-900">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-bold text-slate-950 dark:text-slate-50">
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="no-underline hover:underline"
          >
            {project.name}
          </a>
        </h3>
        {project.stars > 0 && (
          <span
            className="shrink-0 font-semibold text-amber-600 dark:text-amber-300"
            aria-label={`${project.stars} stars`}
          >
            ★ {project.stars}
          </span>
        )}
      </div>

      <p className="mt-3 text-slate-600 dark:text-slate-300">
        {project.description}
      </p>

      {getProjectTechnologies(project).length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
          {getProjectTechnologies(project).map((technology) => (
            <span
              key={technology}
              className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
            >
              <BrandIcon name={technology} className="h-3.5 w-3.5" />
              {technology}
            </span>
          ))}
        </div>
      )}

      {project.demoUrl && project.demoLabel && (
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex font-semibold"
        >
          {project.demoLabel} ↗
        </a>
      )}

    </article>
  );
}

function ProjectGroup({
  label,
  limit,
  onlyPinned,
  projects,
  description,
  view = "cards",
  url,
}: {
  label: string;
  description?: string;
  limit?: number;
  onlyPinned?: boolean;
  projects: OpenSourceProject[];
  view?: "cards" | "list";
  url: string;
}) {
  const filteredProjects = onlyPinned
    ? projects.filter((project) => project.pinned)
    : projects;
  const visibleProjects = limit
    ? filteredProjects.slice(0, limit)
    : filteredProjects;
  const totalStars = visibleProjects.reduce(
    (total, project) => total + project.stars,
    0,
  );

  return (
    <section className="mt-12">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-slate-50">
          {label}
        </h2>
        <a href={url} target="_blank" rel="noreferrer" className="font-medium">
          {pageContent.projects.viewOnGitHub}
        </a>
      </div>
      {description && (
        <p className="mt-2 max-w-3xl text-slate-600 dark:text-slate-300">
          {description}
        </p>
      )}
      <p className="mt-2 text-slate-600 dark:text-slate-300">
        {visibleProjects.length} projects · {totalStars} stars
      </p>
      {view === "list" ? (
        <ul className="mt-6 divide-y divide-slate-200 border-y border-slate-200 dark:divide-slate-700 dark:border-slate-700">
          {visibleProjects.map((project) => (
            <li
              key={project.url}
              className="flex flex-wrap items-center justify-between gap-4 py-4"
            >
              <div className="min-w-0">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold"
                >
                  {project.name} ↗
                </a>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>
                {getProjectTechnologies(project).length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2" aria-label="Technologies used">
                    {getProjectTechnologies(project).map((technology) => (
                      <span
                        key={technology}
                        className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                      >
                        <BrandIcon name={technology} className="h-3.5 w-3.5" />
                        {technology}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex shrink-0 items-center gap-3 text-sm">
                {project.demoUrl && project.demoLabel && (
                  <a href={project.demoUrl} target="_blank" rel="noreferrer">
                    {project.demoLabel} ↗
                  </a>
                )}
                {project.stars > 0 && (
                  <span className="font-semibold text-amber-600 dark:text-amber-300">
                    ★ {project.stars}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.url} project={project} />
          ))}
        </div>
      )}
    </section>
  );
}

export default function ProjectsPage() {
  const { profile, gamified, templates, organization } = openSourceProjectsConfig;

  return (
    <div className="max-w-4xl py-8 sm:py-16">
      <header>
        <h1 className="text-4xl font-bold tracking-tight text-slate-950 dark:text-slate-50">
          {pageContent.projects.title}
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
          {pageContent.projects.introduction}
        </p>
      </header>

      <ProjectGroup {...profile} />
      <ProjectGroup {...organization} />
      <ProjectGroup {...gamified} />
      <ProjectGroup {...templates} />
    </div>
  );
}
