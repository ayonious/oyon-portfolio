import Image from "next/image";

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

export default function AboutPage() {
  return (
    <div className="max-w-4xl py-8 sm:py-16">
      <section className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_18rem]">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">About me</h1>
          <div className="mt-6 space-y-4 text-lg text-slate-600 dark:text-slate-300">
            <p>
              I&apos;m Nahiyan, a Senior Fullstack Software Engineer based in
              Berlin. I build web, mobile, backend, payment, authentication,
              and travel products used at scale.
            </p>
            <p>
              I also maintain open-source tools, create AI-assisted engineering
              workflows, and enjoy turning complicated systems into practical,
              reliable software.
            </p>
            <p>
              Outside engineering, I&apos;m a part-time traveler and language
              learner. Exploring new places and languages helps me understand
              people and see the world from different perspectives.
            </p>
            <p>
              I love reading philosophy and psychology to explore the meaning
              of life and the universe, and to reflect on why I build things. I
              also read about human nature and how societies work because I find
              people endlessly interesting.
            </p>
          </div>
        </div>
        <Image
          src="/images/nahiyan-cartoon-profile.webp"
          alt="Cartoon portrait of Nahiyan K at a black-sand beach"
          width={512}
          height={512}
          priority
          className="aspect-square w-full rounded-3xl border border-slate-200 object-cover shadow-sm dark:border-slate-700"
        />
      </section>

      <section className="mt-14">
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
