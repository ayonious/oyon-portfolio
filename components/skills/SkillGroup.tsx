import BrandIcon from "../BrandIcon";

export default function SkillGroup({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="border-b border-slate-200 p-5 last:border-b-0 sm:grid sm:grid-cols-[13rem_1fr] sm:gap-6 sm:p-6 dark:border-slate-700">
      <h2 className="text-base font-bold sm:pt-1">{title}</h2>
      <ul className="mt-3 flex flex-wrap gap-2 sm:mt-0">
        {skills.map((skill) => (
          <li key={skill} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
            <span className="flex items-center gap-2"><BrandIcon name={skill} className="h-4 w-4 shrink-0" />{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
