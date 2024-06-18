import { useQuery } from '@apollo/client';
import { GET_READING_LIST } from '../queries';
import { Box } from '@mui/material';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import BookList from '../components/BookList';
import NotFound from '../components/NotFound';
/**
 * This page is using the same layout as the Book list page but
 * can be independent if the project scale/requirements changes.
 */

const ReadingList = () => {
  const { loading, error, data } = useQuery(GET_READING_LIST);
  return (
    <Box sx={{ width: '100%', overflow: 'hidden', height: '100%' }}>
      <Box sx={{ overflow: 'scroll', py: 2, height: '100%' }}>
        {loading ? (
          <Loader />
        ) : error ? (
          <ErrorMessage message={error.message} />
        ) : data?.readingList.length > 0 ? (
          <BookList books={data.readingList} />
        ) : (
          <NotFound
            title='No records found'
            message='Add books to the reading list'
          />
        )}
      </Box>
    </Box>
  );
};
export default ReadingList;
