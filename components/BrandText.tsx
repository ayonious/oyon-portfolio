import BrandIcon, { brandNames } from "./BrandIcon";

const brandPattern = new RegExp(
  `(?<![\w])(${[...brandNames]
    .sort((a, b) => b.length - a.length)
    .map((name) => name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|")})(?![\w])`,
  "g",
);
const knownBrands = new Set(brandNames);

/** Keep prose intact while decorating recognized brand names. */
export default function BrandText({ text }: { text: string }) {
  return text.split(brandPattern).map((part, index) =>
    knownBrands.has(part) ? (
      <span key={index} className="inline-flex items-baseline gap-1 whitespace-nowrap">
        <BrandIcon name={part} className="relative top-0.5 inline-block h-[1.05rem] w-[1.05rem] shrink-0" />
        {part}
      </span>
    ) : part,
  );
}
