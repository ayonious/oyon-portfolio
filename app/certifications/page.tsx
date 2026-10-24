import { certifications } from "../../config/certifications";

export default function CertificationsPage() {
  return (
    <div className="max-w-4xl py-8 sm:py-16">
      <header>
        <h1 className="text-4xl font-bold tracking-tight">Certifications</h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
          Language and software development credentials I have earned.
        </p>
      </header>

      <section className="mt-10 grid gap-4 sm:grid-cols-2">
        {certifications.map((certification) => (
          <article
            key={certification.name}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900"
          >
            <h2 className="text-xl font-bold">{certification.name}</h2>
            <p className="mt-1 font-medium text-slate-600 dark:text-slate-300">
              {certification.issuer} · Issued {certification.issued}
            </p>
            {certification.description && (
              <p className="mt-3 text-slate-600 dark:text-slate-300">
                {certification.description}
              </p>
            )}
            {certification.credentialId && (
              <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
                Credential ID {certification.credentialId}
              </p>
            )}
            {certification.credentialUrl && (
              <a
                href={certification.credentialUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex font-semibold"
              >
                Show credential →
              </a>
            )}
          </article>
        ))}
      </section>
    </div>
  );
}
