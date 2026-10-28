import type { DownloadStat } from "../../config/projects";
import { pageContent } from "../../config/siteContent";
import MetricBadge from "../MetricBadge";

export default function NpmDownloads({ stat }: { stat: DownloadStat }) {
  return (
    <MetricBadge
      icon={stat.icon}
      symbol="↓"
      label={`${stat.label}, ${stat.period}`}
      href={stat.url}
      linkLabel={stat.url.includes("npmjs.com") ? pageContent.projects.openInNpm : pageContent.projects.openLink}
    >
      {stat.label}
    </MetricBadge>
  );
}
