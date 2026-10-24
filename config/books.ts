export type Book = {
  title: string;
  authors: string;
  details?: string;
  url: string;
};

export const allTimeFavoriteBooks: Book[] = [
  {
    title: "Clean Code",
    authors: "Robert C. Martin",
    url: "https://www.goodreads.com/book/show/3735293-clean-code",
  },
  {
    title: "Introduction to Algorithms (CLRS)",
    authors: "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, and Clifford Stein",
    url: "https://www.goodreads.com/book/show/170440006-introduction-to-algorithms",
  },
  {
    title: "The C Programming Language",
    authors: "Brian Kernighan and Dennis Ritchie",
    details: "First published in 1978; second edition published in 1988.",
    url: "https://www.goodreads.com/book/show/16174690-the-c-programming-language",
  },
];

export const peopleAndPsychologyBooks: Book[] = [
  {
    title: "Surrounded by Idiots",
    authors: "Thomas Erikson",
    url: "https://www.goodreads.com/book/show/50542352-surrounded-by-idiots",
  },
];
