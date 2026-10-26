import type { DownloadStat } from "../../config/projects";
import MetricBadge from "../MetricBadge";

export default function NpmDownloads({ stat }: { stat: DownloadStat }) {
  return (
    <a href={stat.url} target="_blank" rel="noreferrer" title={stat.period} className="inline-flex rounded-full no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]">
      <MetricBadge icon={stat.icon} symbol="↓" label={`${stat.label}, ${stat.period}`}>
        {stat.label}
      </MetricBadge>
    </a>
  );
}
