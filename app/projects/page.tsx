import PageHeader from "../../components/PageHeader";
import ProjectGroup from "../../components/projects/ProjectGroup";
import { openSourceProjectsConfig } from "../../config/projects";
import { pageContent } from "../../config/siteContent";

export default function ProjectsPage() {
  const { profile, gamified, engineering, organization, university } = openSourceProjectsConfig;

  return (
    <div className="max-w-4xl py-8 sm:py-16">
      <PageHeader title={pageContent.projects.title} introduction={pageContent.projects.introduction} />
      <ProjectGroup {...organization} />
      <ProjectGroup {...profile} />
      <ProjectGroup {...gamified} />
      <ProjectGroup {...engineering} />
      <ProjectGroup {...university} />
    </div>
  );
}
