import { Box } from '@mui/material';
import SearchComponent from '../components/Search';
import { useLazyQuery } from '@apollo/client';
import { GET_BOOKS } from '../queries';
import BookList from '../components/BookList';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import { useEffect, useState } from 'react';
import NotFound from '../components/NotFound';

const Books = () => {
  const [getBooks, { loading, error, data }] = useLazyQuery(GET_BOOKS);
  const [bookTitle, setBookTitle] = useState<string | null>(null);
  useEffect(() => {
    getBooks({ variables: { title: bookTitle } });
  }, [bookTitle, getBooks]);

  const books = data?.books ?? [];

  return (
    <Box sx={{ width: '100%', overflow: 'scroll' }}>
      <Box
        sx={{
          width: { xs: '100%', lg: '80%' },
          mx: 'auto',
          height: { xs: '30px', lg: '50px' },
        }}
      >
        <SearchComponent
          optionsData={books}
          onSetSearchValue={(title: string) => setBookTitle(title)}
        />
      </Box>
      <Box sx={{ mt: 5, overflow: 'scroll', py: 3 }}>
        {loading ? (
          <Loader />
        ) : error ? (
          <ErrorMessage message={error.message} />
        ) : books?.length > 0 ? (
          <BookList books={books} />
        ) : (
          <NotFound
            title='No records found'
            message='There are no books added'
          />
        )}
      </Box>
    </Box>
  );
};
export default Books;
