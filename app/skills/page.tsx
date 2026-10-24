import { skillGroups } from "../../config/skills";
import { pageContent } from "../../config/siteContent";
import BrandIcon from "../../components/BrandIcon";

export default function SkillsPage() {
  return (
    <div className="max-w-4xl py-8 sm:py-16">
      <header>
        <h1 className="text-4xl font-bold tracking-tight text-slate-950 dark:text-slate-50">
          {pageContent.skills.title}
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
          {pageContent.skills.introduction}
        </p>
      </header>

      <section className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="border-b border-slate-200 p-5 last:border-b-0 sm:grid sm:grid-cols-[13rem_1fr] sm:gap-6 sm:p-6 dark:border-slate-700"
          >
            <h2 className="text-base font-bold sm:pt-1">
              {group.title}
            </h2>
            <ul className="mt-3 flex flex-wrap gap-2 sm:mt-0">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                >
                  <span className="flex items-center gap-2">
                    <BrandIcon name={skill} className="h-4 w-4 shrink-0" />
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}
