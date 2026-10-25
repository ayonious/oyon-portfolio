import type { Book } from "../../config/books";

export default function BookList({ books }: { books: Book[] }) {
  return (
    <ul className="mt-5 divide-y divide-slate-200 border-y border-slate-200 dark:divide-slate-700 dark:border-slate-700">
      {books.map((book) => (
        <li key={book.url} className="flex gap-3 py-4">
          <span aria-hidden="true" className="pt-0.5 text-lg">📖</span>
          <div>
            <h3 className="font-bold">
              <a href={book.url} target="_blank" rel="noreferrer" className="no-underline hover:underline">
                {book.title} <span aria-hidden="true">↗</span>
              </a>
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">{book.authors}</p>
            {book.details && (
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{book.details}</p>
            )}
            <ul aria-label={`Topics for ${book.title}`} className="mt-2 flex flex-wrap gap-2">
              {book.tags.map((tag) => (
                <li key={tag} className="text-xs font-medium text-[var(--accent)]">#{tag}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
}
