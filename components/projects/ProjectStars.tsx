import MetricBadge from "../MetricBadge";

export default function ProjectStars({ stars }: { stars: number }) {
  if (stars <= 0) return null;

  return (
    <MetricBadge icon="GitHub" symbol="★" label={`${stars} GitHub stars`}>
      {stars}
    </MetricBadge>
  );
}
