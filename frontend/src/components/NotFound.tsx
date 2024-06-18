import { SearchOutlined } from '@mui/icons-material';
import { Box, IconButton, Paper, Typography } from '@mui/material';

const NotFound = ({ title, message }: { title: string; message: string }) => {
  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper
        elevation={0}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: { lg: '70%', xs: '100%' },
        }}
      >
        <IconButton>
          <SearchOutlined />
        </IconButton>
        <Typography variant='body1'>{title}</Typography>
        <Typography variant='caption'>{message}</Typography>
      </Paper>
    </Box>
  );
};
export default NotFound;
