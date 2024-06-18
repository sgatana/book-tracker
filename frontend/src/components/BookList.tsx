import { Grid } from '@mui/material';
import { Book } from '../types';
import BookCard from './BookCard';
import { useLocation } from 'react-router-dom';
import {
  ADD_TO_READING_LIST,
  DELETE_FROM_READING_LIST,
  GET_READING_LIST,
} from '../queries';
import { useToggleNotification } from '../hooks';
import { useMutation } from '@apollo/client';
import { useState } from 'react';
import Notification from './Notification';

const BookList = ({ books }: { books: Book[] }) => {
  const [isOpen, toggleOpen] = useToggleNotification(false);
  const [selectedTitle, setSelectedTitle] = useState('');
  const { pathname } = useLocation();
  const isReadingListPage = pathname.includes('/reading-list');

  const refetchQueries = [GET_READING_LIST];

  const [addToReadingList] = useMutation(ADD_TO_READING_LIST, {
    refetchQueries: [GET_READING_LIST],
    onCompleted: () => {
      toggleOpen();
    },
  });
  const [deleteFromReadingList] = useMutation(DELETE_FROM_READING_LIST, {
    refetchQueries,
    onCompleted: () => {
      toggleOpen();
    },
  });

  const handleSelectedBook = (title: string) => {
    setSelectedTitle(title);
    isReadingListPage
      ? deleteFromReadingList({
          variables: {
            title,
          },
        })
      : addToReadingList({
          variables: {
            input: {
              title,
            },
          },
        });
  };

  const message = `${selectedTitle} successfully ${
    isReadingListPage ? 'deleted' : 'added'
  }`;

  return (
    <>
      <Notification
        isOpen={isOpen}
        key={message}
        onClose={toggleOpen}
        severity={isReadingListPage ? 'warning' : 'success'}
        message={message}
      />
      <Grid container spacing={3}>
        {books.map((book: Book) => (
          <Grid
            item
            xs={12}
            md={4}
            key={`${book.title}-${book.author}-${book.readingLevel}`}
          >
            <BookCard
              book={book}
              onSelectBook={handleSelectedBook}
              isReadingListPage={isReadingListPage}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
export default BookList;
