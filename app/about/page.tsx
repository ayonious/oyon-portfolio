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

      <section className="mt-14">
        <h2 className="text-2xl font-bold">Send me a message</h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Have a question, an open-source idea, or something you would like to
          build together? Send me a note.
        </p>
        <form
          name="contact"
          method="POST"
          action="/about?message=sent"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="mt-6 space-y-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 dark:border-slate-700 dark:bg-slate-900"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden" aria-hidden="true">
            <label>
              Do not fill this out: <input name="bot-field" />
            </label>
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="font-semibold text-slate-700 dark:text-slate-200">
              Name
              <input
                name="name"
                type="text"
                required
                className="mt-2 w-full rounded-xl border border-slate-300 bg-transparent px-3 py-2 font-normal outline-none focus:border-[var(--accent)] dark:border-slate-600"
              />
            </label>
            <label className="font-semibold text-slate-700 dark:text-slate-200">
              Email
              <input
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-xl border border-slate-300 bg-transparent px-3 py-2 font-normal outline-none focus:border-[var(--accent)] dark:border-slate-600"
              />
            </label>
          </div>
          <label className="block font-semibold text-slate-700 dark:text-slate-200">
            Message
            <textarea
              name="message"
              rows={5}
              required
              className="mt-2 w-full resize-y rounded-xl border border-slate-300 bg-transparent px-3 py-2 font-normal outline-none focus:border-[var(--accent)] dark:border-slate-600"
            />
          </label>
          <button
            type="submit"
            className="rounded-xl bg-[var(--accent)] px-5 py-2.5 font-semibold text-white transition-opacity hover:opacity-90"
          >
            Send message
          </button>
        </form>
      </section>
    </div>
  );
}
