import { Box, Grid, Paper } from '@mui/material';
import Header from '../components/Header';
import SideNav from '../components/SideNav';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
        backgroundColor: '#f9f9f9',
        overflow: 'auto',
      }}
    >
      <Header />
      <Box sx={{ height: '100%', mt: '60px' }}>
        <Grid
          container
          sx={{ width: '100%', height: 'inherit', px: 1, mx: 'auto' }}
          rowSpacing={2}
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
            <Paper sx={{ height: 'inherit', p: 2, overflowY: 'auto' }}>
              <Outlet />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default RootLayout;
