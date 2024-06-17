import { Box, Grid, Paper } from '@mui/material';
import Header from '../components/Header';
import SideNav from '../components/SideNav';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <Box sx={{ height: '100%' }}>
      <Header />
      <Box sx={{ height: '100%', mt: '60px' }}>
        <Grid
          container
          sx={{ width: '100%', height: 'inherit', p: 2, mx: 'auto' }}
          spacing={1}
        >
          <Grid
            item
            sx={{
              mx: 'auto',
              width: '100%',
              height: { sx: 'auto', md: 'inherit' },
            }}
            xs={12}
            md={2}
          >
            <SideNav />
          </Grid>
          <Grid item xs={12} md={10} sx={{ height: '100%' }}>
            <Paper sx={{ height: 'inherit', p: 2 }}>
              <Outlet />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default RootLayout;
