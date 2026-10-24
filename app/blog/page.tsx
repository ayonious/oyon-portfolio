import { pageContent } from "../../config/siteContent";

export default function BlogPage() {
  return (
    <section className="max-w-2xl py-8 sm:py-16">
      <h1 className="text-4xl font-bold tracking-tight text-slate-950 dark:text-slate-50">
        {pageContent.blog.title}
      </h1>
      <p className="mt-6 text-lg text-slate-600 dark:text-slate-300">
        {pageContent.blog.introduction}
      </p>
    </section>
  );
}
