import { skillGroups } from "../../config/skills";

export default function SkillsPage() {
  return (
    <div className="max-w-4xl py-8 sm:py-16">
      <header>
        <h1 className="text-4xl font-bold tracking-tight text-slate-950 dark:text-slate-50">
          Skills
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
          Technologies, engineering practices, and product domains I have worked
          with throughout my career.
        </p>
      </header>

      <section className="mt-10 grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900"
          >
            <h2 className="text-xl font-bold text-slate-950 dark:text-slate-50">
              {group.title}
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </div>
  );
}
