export const typeDefs = `#graphql
  type Book {
    title: String
    author: String
    coverPhotoURL: String
    readingLevel: String
  }

  type Query {
    books(title: String): [Book]
    readingList: [Book]
  }

  type Mutation {
    deleteReadingListBook(title: String): [Book]
    addToReadingList(input: ReadingListInput): [Book]
  }

  input ReadingListInput {
    title: String
  }
`;
