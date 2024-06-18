import { Box, Button, Card, CardMedia } from '@mui/material';
import { Book } from '../types';

/**
 * Since book list and reading list pages/layouts are similar, I have reused this card and
 * to avoid duplicating the logic.
 * The layout is controlled by page.
 */

const BookCard = ({
  book: { title, author, coverPhotoURL, readingLevel },
  onSelectBook,
  isReadingListPage,
}: {
  book: Book;
  onSelectBook: (title: string) => void;
  isReadingListPage: boolean;
}) => {
  return (
    <>
      <Card
        sx={(theme) => ({
          borderRadius: theme.spacing(1),
          boxShadow: 'rgba(145, 158, 171, 0.16) 0px 1px 2px 0px',
          padding: theme.spacing(2),
          height: { xs: 'auto', lg: 130 },
          fontSize: {
            xs: '0.75rem',
            lg: '0.875rem',
          },
          display: 'flex',
          overflow: 'auto',
          gap: 2,
          backgroundColor: '#f9f9f9',
        })}
      >
        <CardMedia
          component='img'
          sx={{ width: 80, borderRadius: 2 }}
          image={`/src/${coverPhotoURL}`}
          alt={title}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <span>{title}</span>
          {isReadingListPage && <span>Reading Level: {readingLevel}</span>}
          <span>
            <i>by: {author}</i>
          </span>
          <Button
            variant='text'
            size='small'
            fullWidth
            sx={{
              textTransform: 'capitalize',
              mt: 0.5,
              flex: 1,
              justifySelf: 'end',
              justifyContent: 'start',
            }}
            onClick={() => onSelectBook(title)}
            type='button'
          >
            {`${isReadingListPage ? 'Remove From' : 'Add To'} Reading list`}
          </Button>
        </Box>
      </Card>
    </>
  );
};
export default BookCard;
