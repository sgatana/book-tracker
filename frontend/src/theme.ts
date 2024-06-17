import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5acccc',
    },
    secondary: {
      main: '#4aa08b',
    },
    warning: {
      main: '#fabd33',
    },
    error: {
      main: '#f76434',
    },
  },
  typography: {
    fontFamily: ['"Mulish"', 'sans-serif'].join(',')
  }
});

export default theme;
