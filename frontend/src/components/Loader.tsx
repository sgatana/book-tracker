import { Skeleton, Stack } from '@mui/material';

const Loader = () => {
  return (
    <Stack spacing={1} sx={{ width: '100%' }}>
      <Skeleton variant='text' sx={{ fontSize: '1rem' }} />
      <Skeleton variant='rounded' width={'100%'} height={60} />
    </Stack>
  );
};
export default Loader;
