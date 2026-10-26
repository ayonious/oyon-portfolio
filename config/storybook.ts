import { openSourceProjectsConfig } from "./projects";

/** Preview-only examples and labels; never used by the portfolio pages. */
export const storyContent = {
  metric: { icon: "GitHub", label: "47 GitHub stars", symbol: "★", children: "47" },
  downloadStat: openSourceProjectsConfig.organization.downloadStat,
  packageProject: openSourceProjectsConfig.organization.projects[0],
};
