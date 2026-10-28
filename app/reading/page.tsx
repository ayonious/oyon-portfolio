import Button from "../../components/Button";
import { otherBooks, programmingBooks } from "../../config/books";
import { pageContent } from "../../config/siteContent";
import BookList from "../../components/reading/BookList";

export default function ReadingPage() {
  return (
    <div className="max-w-4xl py-8 sm:py-16">
      <header>
        <h1 className="text-4xl font-bold tracking-tight">{pageContent.books.title}</h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
          {pageContent.books.introduction}
        </p>
        <Button
          href={pageContent.books.goodreadsUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-5"
        >
          {pageContent.books.goodreadsLabel}
        </Button>
      </header>

      <section className="mt-14">
        <h2 className="text-2xl font-bold">{pageContent.books.programmingTitle}</h2>
        <BookList books={programmingBooks} />
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-bold">{pageContent.books.otherTitle}</h2>
        <BookList books={otherBooks} />
      </section>
    </div>
  );
}
