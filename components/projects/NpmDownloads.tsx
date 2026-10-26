import type { DownloadStat } from "../../config/projects";
import MetricBadge from "../MetricBadge";

export default function NpmDownloads({ stat }: { stat: DownloadStat }) {
  const linkLabel = stat.url.includes("npmjs.com") ? "Open on npm" : "Open link";

  return (
    <a href={stat.url} target="_blank" rel="noreferrer" title={linkLabel} className="hover-lift group relative z-20 inline-flex cursor-pointer rounded-full no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]">
      <MetricBadge icon={stat.icon} symbol="↓" label={`${stat.label}, ${stat.period}`}>
        {stat.label}
      </MetricBadge>
      <span aria-hidden="true" className="sidebar-tooltip absolute bottom-full left-0 mb-2 w-max group-hover:opacity-100 group-focus-visible:opacity-100">
        {linkLabel}
      </span>
    </a>
  );
}
