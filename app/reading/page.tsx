import {
  leadershipBooks,
  philosophyBooks,
  programmingBooks,
  psychologyBooks,
  type Book,
} from "../../config/books";
import { pageContent } from "../../config/siteContent";

function BookList({ books }: { books: Book[] }) {
  if (books.length === 0) {
    return (
      <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
        {pageContent.books.emptyListLabel}
      </p>
    );
  }

  return (
    <ul className="mt-5 divide-y divide-slate-200 border-y border-slate-200 dark:divide-slate-700 dark:border-slate-700">
      {books.map((book) => (
        <li
          key={book.url}
          className="flex gap-3 py-4"
        >
          <span aria-hidden="true" className="pt-0.5 text-lg">
            📖
          </span>
          <div>
            <h3 className="font-bold">
              <a
                href={book.url}
                target="_blank"
                rel="noreferrer"
                className="no-underline hover:underline"
              >
                {book.title} <span aria-hidden="true">↗</span>
              </a>
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              {book.authors}
            </p>
            {book.details && (
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {book.details}
              </p>
            )}
            <ul aria-label={`Topics for ${book.title}`} className="mt-2 flex flex-wrap gap-2">
              {book.tags.map((tag) => (
                <li key={tag} className="text-xs font-medium text-[var(--accent)]">
                  #{tag}
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function ReadingPage() {
  return (
    <div className="max-w-4xl py-8 sm:py-16">
      <header>
        <h1 className="text-4xl font-bold tracking-tight">{pageContent.books.title}</h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
          {pageContent.books.introduction}
        </p>
        <a
          href={pageContent.books.goodreadsUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex rounded-xl border border-[var(--accent)] px-4 py-2 font-semibold text-[var(--accent)] no-underline transition-colors hover:bg-[var(--accent-soft)]"
        >
          {pageContent.books.goodreadsLabel}
        </a>
      </header>

      <section className="mt-14">
        <h2 className="text-2xl font-bold">{pageContent.books.programmingTitle}</h2>
        <BookList books={programmingBooks} />
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-bold">{pageContent.books.leadershipTitle}</h2>
        <BookList books={leadershipBooks} />
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-bold">{pageContent.books.otherTitle}</h2>

        <div className="mt-6">
          <h3 className="text-xl font-bold">{pageContent.books.philosophyTitle}</h3>
          <BookList books={philosophyBooks} />
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-bold">{pageContent.books.psychologyTitle}</h3>
          <BookList books={psychologyBooks} />
        </div>
      </section>
    </div>
  );
}
