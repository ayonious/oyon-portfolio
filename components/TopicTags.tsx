import TagList from "./TagList";
import { tagContent } from "../config/siteContent";

export default function TopicTags({ tags, title }: { tags: string[]; title: string }) {
  return <TagList items={tags} label={`${tagContent.topicsPrefix} ${title}`} className="mt-2" />;
}
