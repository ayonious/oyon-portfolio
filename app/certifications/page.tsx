import { certifications } from "../../config/certifications";
import { pageContent } from "../../config/siteContent";
import CertificationItem from "../../components/certifications/CertificationItem";

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
          <CertificationItem key={certification.name} certification={certification} completedLabel={pageContent.certifications.completedLabel} />
        ))}
      </section>
    </div>
  );
}
