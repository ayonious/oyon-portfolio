import { openSourceProjectsConfig } from "./projects";

/** Preview-only examples and labels; never used by the portfolio pages. */
export const storyContent = {
  sharedOverview: {
    title: "All shared components",
    introduction: "Compare components together. Hover or use Tab to reveal tooltips; use the toolbar to change the theme and accent color.",
    buttonsTitle: "Buttons",
    headingsTitle: "Heading links",
    metricsTitle: "Metric badges",
  },
  buttonTooltip: "Send your message directly to my inbox.",
  metric: { icon: "GitHub", label: "47 GitHub stars", symbol: "★", children: "47" },
  downloadStat: openSourceProjectsConfig.organization.downloadStat,
  packageProject: openSourceProjectsConfig.organization.projects[0],
};
