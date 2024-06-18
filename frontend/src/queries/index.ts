import { gql } from '@apollo/client';

export const GET_BOOKS = gql`
  query GetBooks($title: String) {
    books(title: $title) {
      title
      author
      coverPhotoURL
    }
  }
`;

export const GET_READING_LIST = gql`
  query getReadingList {
    readingList {
      title
      author
      coverPhotoURL
      readingLevel
    }
  }
`;

export const ADD_TO_READING_LIST = gql`
  mutation addToReadingList($input: ReadingListInput) {
    addToReadingList(input: $input) {
      title
    }
  }
`;
export const DELETE_FROM_READING_LIST = gql`
  mutation deleteFromReadingList($title: String) {
    deleteReadingListBook(title: $title) {
      title
    }
  }
`;
