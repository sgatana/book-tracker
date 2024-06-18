import { Autocomplete, Box, IconButton, InputBase, Paper } from '@mui/material';
import { Close, SearchOutlined } from '@mui/icons-material';
import { Book } from '../types';
import { useState } from 'react';

const SearchComponent = ({
  optionsData,
  onSetSearchValue,
}: {
  optionsData: Book[];
  onSetSearchValue: (title: string) => void;
}) => {
  const [value, setValue] = useState<Book | null>(null);
  const handleOnChange = (
    _: React.SyntheticEvent | null,
    book: Book | null
  ) => {
    onSetSearchValue(book?.title as string);
    setValue(book);
  };

  return (
    <Paper
      component='form'
      sx={{
        p: '2px 4px',
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <Autocomplete
        id='search'
        autoHighlight
        sx={{ width: '100%' }}
        value={value as null}
        options={optionsData}
        onChange={(e, book) => handleOnChange(e, book as Book)}
        getOptionLabel={(option) => option.title}
        renderOption={(props, option) => (
          <Box
            component='li'
            sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            <img
              loading='lazy'
              width='60'
              style={{
                borderRadius: 10,
              }}
              srcSet={`/src/${option.coverPhotoURL} 2x`}
              src={`/src/${option.coverPhotoURL}`}
              alt=''
            />
            {option.title}
          </Box>
        )}
        renderInput={(params) => (
          <InputBase
            ref={params.InputProps.ref}
            fullWidth
            sx={{ px: 5 }}
            type='text'
            placeholder='Search Books'
            inputProps={{
              ...params.inputProps,
            }}
            endAdornment={
              value && (
                <IconButton onClick={() => handleOnChange(null, null)}>
                  <Close />
                </IconButton>
              )
            }
          />
        )}
      />
      <IconButton type='button' sx={{ p: '10px' }} aria-label='search'>
        <SearchOutlined />
      </IconButton>
    </Paper>
  );
};
export default SearchComponent;
