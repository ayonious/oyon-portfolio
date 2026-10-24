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
    title: "Thinking, Fast and Slow",
    authors: "Daniel Kahneman",
    url: "https://www.goodreads.com/book/show/13531855-thinking-fast-and-slow",
  },
  {
    title: "Influence: The Psychology of Persuasion",
    authors: "Robert B. Cialdini",
    url: "https://www.goodreads.com/book/show/28815-influence",
  },
  {
    title: "How to Win Friends and Influence People",
    authors: "Dale Carnegie",
    url: "https://www.goodreads.com/book/show/33291.How_to_Win_Friends_and_Influence_People",
  },
  {
    title: "Games People Play",
    authors: "Eric Berne",
    url: "https://www.goodreads.com/book/show/49176.Games_People_Play",
  },
];
