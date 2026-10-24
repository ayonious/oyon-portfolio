import { certifications } from "../../config/certifications";
import { pageContent } from "../../config/siteContent";

export default function CertificationsPage() {
  return (
    <div className="max-w-4xl py-8 sm:py-16">
      <header>
        <h1 className="text-4xl font-bold tracking-tight">
          {pageContent.certifications.title}
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
          {pageContent.certifications.introduction}
        </p>
      </header>

      <section className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
        {certifications.map((certification) => (
          <article
            key={certification.name}
            className="border-b border-slate-200 p-5 last:border-b-0 sm:flex sm:items-start sm:justify-between sm:gap-8 sm:p-6 dark:border-slate-700"
          >
            <div className="min-w-0">
              <h2 className="text-xl font-bold">{certification.name}</h2>
              <p className="mt-1 font-medium text-slate-600 dark:text-slate-300">
                {certification.issuer}
              </p>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Issued {certification.issued}
                {certification.credentialId && (
                  <> · Credential ID {certification.credentialId}</>
                )}
              </p>
              {certification.result && (
                <p className="mt-2 text-sm font-semibold text-slate-600 dark:text-slate-300">
                  Result: {certification.result}
                </p>
              )}
              {certification.description && (
                <p className="mt-3 text-slate-600 dark:text-slate-300">
                  {certification.description}
                </p>
              )}
            </div>

            <div className="mt-4 shrink-0 sm:mt-0 sm:text-right">
              {certification.credentialUrl ? (
                <a
                  href={certification.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-lg border border-[var(--accent)] px-3 py-1.5 text-sm font-semibold no-underline hover:bg-[var(--accent-soft)]"
                >
                  {pageContent.certifications.credentialLabel}
                </a>
              ) : (
                <span className="inline-flex rounded-full bg-[var(--accent-soft)] px-3 py-1 text-sm font-semibold text-[var(--accent)]">
                  {pageContent.certifications.completedLabel}
                </span>
              )}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
