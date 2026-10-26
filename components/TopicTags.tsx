import BrandIcon from "./BrandIcon";

export default function TopicTags({ tags, title }: { tags: string[]; title: string }) {
  return (
    <ul aria-label={`Topics for ${title}`} className="mt-2 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li key={tag} className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          <BrandIcon name={tag} className="h-[1.05rem] w-[1.05rem]" />
          {tag}
        </li>
      ))}
    </ul>
  );
}
