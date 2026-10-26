import type { ReactNode } from "react";
import BrandIcon from "./BrandIcon";

type MetricBadgeProps = {
  icon: string;
  label: string;
  children: ReactNode;
  symbol?: string;
};

export default function MetricBadge({ icon, label, children, symbol }: MetricBadgeProps) {
  return (
    <span className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-[var(--accent)] bg-[var(--accent-soft)] px-2 py-0.5 text-sm font-semibold text-[var(--accent)]" aria-label={label}>
      <BrandIcon name={icon} className="h-[1.05rem] w-[1.05rem]" />
      {symbol && <span aria-hidden="true">{symbol}</span>}
      {children}
    </span>
  );
}
