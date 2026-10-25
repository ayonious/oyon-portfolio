import type { OpenSourceProject } from "../../config/projects";

export function getProjectTechnologies(project: OpenSourceProject) {
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
