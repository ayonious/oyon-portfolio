import BrandIcon from "./BrandIcon";

type TagListProps = {
  items: string[];
  label: string;
  variant?: "soft" | "outline";
  className?: string;
};

const variants = {
  soft: "bg-slate-100 px-2.5 py-1 text-xs font-medium dark:bg-slate-800",
  outline: "border border-slate-200 px-3 py-1 text-sm dark:border-slate-700",
};

export default function TagList({ items, label, variant = "soft", className = "" }: TagListProps) {
  return (
    <ul aria-label={label} className={`flex flex-wrap gap-2 ${className}`}>
      {items.map((item) => (
        <li key={item} className={`inline-flex items-center gap-1.5 rounded-full text-slate-600 dark:text-slate-300 ${variants[variant]}`}>
          <BrandIcon name={item} className="h-[1.05rem] w-[1.05rem] shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  );
}
