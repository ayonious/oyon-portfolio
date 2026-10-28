import HeadingLink from "../HeadingLink";
import type { Certification } from "../../config/certifications";
import TopicTags from "../TopicTags";

export default function CertificationItem({ certification, completedLabel, dateLabel }: { certification: Certification; completedLabel: string; dateLabel: string }) {
  return (
    <article className="border-b border-slate-200 p-5 last:border-b-0 sm:flex sm:items-start sm:justify-between sm:gap-8 sm:p-6 dark:border-slate-700">
      <div className="min-w-0">
        <h3 className="text-xl font-bold">
          {certification.url ? <HeadingLink
            href={certification.url}
          >
            {certification.name} <span aria-hidden="true">↗</span>
          </HeadingLink> : certification.name}
        </h3>
        <p className="mt-1 font-medium text-slate-600 dark:text-slate-300">{certification.issuer}</p>
        {certification.issued !== completedLabel && <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{dateLabel} {certification.issued}</p>}
        {certification.result && <p className="mt-2 text-sm font-semibold text-slate-600 dark:text-slate-300">Result: {certification.result}</p>}
        {certification.description && <p className="mt-3 text-slate-600 dark:text-slate-300">{certification.description}</p>}
        {certification.tags && <TopicTags tags={certification.tags} title={certification.name} />}
      </div>
      <div className="mt-4 shrink-0 sm:mt-0 sm:text-right">
        <span className="inline-flex rounded-full bg-[var(--accent-soft)] px-3 py-1 text-sm font-semibold text-[var(--accent)]">{completedLabel}</span>
      </div>
    </article>
  );
}
