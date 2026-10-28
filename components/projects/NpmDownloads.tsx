import type { DownloadStat } from "../../config/projects";
import MetricBadge from "../MetricBadge";

export default function NpmDownloads({ stat }: { stat: DownloadStat }) {
  return (
    <MetricBadge
      icon={stat.icon}
      symbol="↓"
      label={`${stat.label}, ${stat.period}`}
      href={stat.url}
      linkLabel={stat.url.includes("npmjs.com") ? "Open on npm" : "Open link"}
    >
      {stat.label}
    </MetricBadge>
  );
}
