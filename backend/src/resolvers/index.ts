import { booksData, readingList } from '../data/books';
import { Book, BookInput, DeleteInput } from '../types';

export const resolvers = {
  Query: {
    books: (_: unknown, { title }: { title?: string }) => {
      return title
        ? booksData?.filter((book) =>
          book.title.toLowerCase().includes(title?.toLowerCase())
        )
        : booksData;
    },

    readingList: () => readingList,
  },
  Mutation: {
    addToReadingList: (_: unknown, { input: { title } }: BookInput) => {
      const book: Book = booksData.find((book) => book.title === title) as Book;
      readingList.push(book);
      return readingList;
    },
    deleteReadingListBook: (_: unknown, { title }: DeleteInput) => {
      const index = readingList.findIndex((book) => book?.title === title);
      readingList.splice(index, 1);
      return readingList;
    },
  },
};
