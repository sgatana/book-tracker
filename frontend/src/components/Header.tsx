import { AppBar, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <AppBar
      position='fixed'
      color='default'
      component='nav'
      sx={{
        display: 'flex',
        height: '60px',
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        boxShadow: '0px 0.5px 1px #f9f9f9, 0px -0.5px 1px #091e4221',
      }}
    >
      <Toolbar>
        <Typography
          variant='h6'
          noWrap
          role='button'
          onClick={() => navigate('/')}
          component='nav'
          id='heading'
          sx={{ flexGrow: 1, cursor: 'pointer' }}
          color='primary'
        >
          Ello for Teachers
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
