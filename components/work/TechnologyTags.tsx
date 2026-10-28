import TagList from "../TagList";
import { tagContent } from "../../config/siteContent";

export default function TechnologyTags({ technologies }: { technologies: string[] }) {
  return <TagList items={technologies} label={tagContent.technologies} variant="outline" className="mt-5" />;
}
