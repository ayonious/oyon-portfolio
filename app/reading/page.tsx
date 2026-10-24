import {
  allTimeFavoriteBooks,
  peopleAndPsychologyBooks,
  type Book,
} from "../../config/books";

function BookList({ books }: { books: Book[] }) {
  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2">
      {books.map((book) => (
        <article
          key={book.url}
          className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900"
        >
          <h3 className="text-xl font-bold">
            <a
              href={book.url}
              target="_blank"
              rel="noreferrer"
              className="no-underline hover:underline"
            >
              {book.title}
            </a>
          </h3>
          <p className="mt-2 font-medium text-slate-600 dark:text-slate-300">
            {book.authors}
          </p>
          {book.details && (
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              {book.details}
            </p>
          )}
        </article>
      ))}
    </div>
  );
}

export default function ReadingPage() {
  return (
    <div className="max-w-4xl py-8 sm:py-16">
      <header>
        <h1 className="text-4xl font-bold tracking-tight">Reading currently</h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
          Books that have shaped how I think about software, people, and the
          world around me.
        </p>
        <a
          href="https://www.goodreads.com/user/show/95339067-nahiyan-k"
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex rounded-xl border border-[var(--accent)] px-4 py-2 font-semibold text-[var(--accent)] no-underline transition-colors hover:bg-[var(--accent-soft)]"
        >
          See all my books on Goodreads →
        </a>
      </header>

      <section className="mt-14">
        <h2 className="text-3xl font-bold">All-time favorites</h2>
        <BookList books={allTimeFavoriteBooks} />
      </section>

      <section className="mt-14">
        <h2 className="text-3xl font-bold">People and psychology</h2>
        <BookList books={peopleAndPsychologyBooks} />
      </section>
    </div>
  );
}
