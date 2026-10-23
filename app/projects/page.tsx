type GitHubRepository = {
  description: string | null;
  fork: boolean;
  html_url: string;
  id: number;
  language: string | null;
  name: string;
  stargazers_count: number;
};

async function getTopRepositories() {
  try {
    const response = await fetch(
      "https://api.github.com/users/ayonious/repos?per_page=100&type=owner",
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 3600 },
      },
    );

    if (!response.ok) {
      return [];
    }

    const repositories = (await response.json()) as GitHubRepository[];

    return repositories
      .filter((repository) => !repository.fork)
      .sort((first, second) => second.stargazers_count - first.stargazers_count)
      .slice(0, 5);
  } catch {
    return [];
  }
}

export default async function ProjectsPage() {
  const repositories = await getTopRepositories();
  const totalStars = repositories.reduce(
    (total, repository) => total + repository.stargazers_count,
    0,
  );

  return (
    <section className="max-w-3xl py-8 sm:py-16">
      <h1 className="text-4xl font-bold tracking-tight text-slate-950 dark:text-slate-50">
        Projects
      </h1>
      <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
        My five most-starred open-source projects on GitHub
        {repositories.length > 0 && ` — ${totalStars} stars altogether`}.
      </p>

      {repositories.length > 0 ? (
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {repositories.map((repository) => (
            <article
              key={repository.id}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-xl font-bold text-slate-950 dark:text-slate-50">
                  <a
                    href={repository.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="no-underline hover:underline"
                  >
                    {repository.name}
                  </a>
                </h2>
                <span
                  className="shrink-0 font-semibold text-amber-600 dark:text-amber-300"
                  aria-label={`${repository.stargazers_count} stars`}
                >
                  ★ {repository.stargazers_count}
                </span>
              </div>

              <p className="mt-3 text-slate-600 dark:text-slate-300">
                {repository.description ?? "An open-source project on GitHub."}
              </p>

              {repository.language && (
                <p className="mt-4 text-sm font-medium text-slate-500 dark:text-slate-400">
                  {repository.language}
                </p>
              )}
            </article>
          ))}
        </div>
      ) : (
        <p className="mt-8 rounded-xl border border-slate-200 p-5 text-slate-600 dark:border-slate-700 dark:text-slate-300">
          GitHub projects are temporarily unavailable. You can view them directly
          on <a href="https://github.com/ayonious">my GitHub profile</a>.
        </p>
      )}
    </section>
  );
}
