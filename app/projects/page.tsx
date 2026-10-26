import ProjectGroup from "../../components/projects/ProjectGroup";
import { openSourceProjectsConfig } from "../../config/projects";
import { pageContent } from "../../config/siteContent";

export default function ProjectsPage() {
  const { profile, gamified, templates, organization, university } = openSourceProjectsConfig;

  return (
    <div className="max-w-4xl py-8 sm:py-16">
      <header>
        <h1 className="text-4xl font-bold tracking-tight text-slate-950 dark:text-slate-50">{pageContent.projects.title}</h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">{pageContent.projects.introduction}</p>
      </header>
      <ProjectGroup {...organization} />
      <ProjectGroup {...profile} />
      <ProjectGroup {...gamified} />
      <ProjectGroup {...templates} />
      <ProjectGroup {...university} />
    </div>
  );
}
