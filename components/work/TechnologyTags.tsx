import BrandIcon from "../BrandIcon";

export default function TechnologyTags({ technologies }: { technologies: string[] }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
      {technologies.map((technology) => (
        <li key={technology} className="rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-600 dark:border-slate-700 dark:text-slate-300">
          <span className="flex items-center gap-1.5"><BrandIcon name={technology} className="h-[1.05rem] w-[1.05rem] shrink-0" />{technology}</span>
        </li>
      ))}
    </ul>
  );
}
