export default function AboutPage() {
  const profiles = [
    {
      name: "GitHub",
      description: "My personal projects and open-source contributions.",
      url: "https://github.com/ayonious",
    },
    {
      name: "LinkedIn",
      description: "My professional experience and career updates.",
      url: "https://www.linkedin.com/in/nahiyan-k-0782743a",
    },
    {
      name: "Goodreads",
      description: "Books I have read and want to read.",
      url: "https://www.goodreads.com/user/show/95339067-nahiyan-k",
    },
    {
      name: "Console Table Printer",
      description: "The open-source organization I contribute to and maintain.",
      url: "https://github.com/console-table-printer",
    },
  ];

  return (
    <div className="max-w-4xl py-8 sm:py-16">
      <h1 className="text-4xl font-bold tracking-tight">
        About me
      </h1>
      <p className="mt-6 text-lg text-slate-600 dark:text-slate-300">
        I&apos;m Nahiyan, a Senior Fullstack Software Engineer based in Berlin.
        I build software products and maintain open-source tools.
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-bold">Find me online</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {profiles.map((profile) => (
            <a
              key={profile.url}
              href={profile.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-200 bg-white p-5 no-underline shadow-sm transition-colors hover:bg-[var(--accent-soft)] dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-[var(--accent-soft)]"
            >
              <h3 className="text-xl font-bold">{profile.name} →</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                {profile.description}
              </p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
