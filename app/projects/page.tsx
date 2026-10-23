import {
  openSourceProjectsConfig,
  type OpenSourceProject,
} from "../../config/projects";

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
        <span
          className="shrink-0 font-semibold text-amber-600 dark:text-amber-300"
          aria-label={`${project.stars} stars`}
        >
          ★ {project.stars}
        </span>
      </div>

      <p className="mt-3 text-slate-600 dark:text-slate-300">
        {project.description}
      </p>

      {project.language && (
        <p className="mt-4 text-sm font-medium text-slate-500 dark:text-slate-400">
          {project.language}
        </p>
      )}
    </article>
  );
}

function ProjectGroup({
  label,
  projects,
  url,
}: {
  label: string;
  projects: OpenSourceProject[];
  url: string;
}) {
  const totalStars = projects.reduce(
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
          View on GitHub →
        </a>
      </div>
      <p className="mt-2 text-slate-600 dark:text-slate-300">
        {projects.length} projects · {totalStars} stars
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.url} project={project} />
        ))}
      </div>
    </section>
  );
}

export default function ProjectsPage() {
  const { profile, organization } = openSourceProjectsConfig;

  return (
    <div className="max-w-4xl py-8 sm:py-16">
      <header>
        <h1 className="text-4xl font-bold tracking-tight text-slate-950 dark:text-slate-50">
          Open-source projects
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
          Projects I maintain personally and with the Console Table Printer
          organization.
        </p>
      </header>

      <ProjectGroup {...profile} />
      <ProjectGroup {...organization} />
    </div>
  );
}
