import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import theme from './theme.ts';
import './index.css';
import Books from './routes/Books.tsx';
import BookDetails from './routes/BookDetails.tsx';
import ReadingList from './routes/ReadingList.tsx';
import RootLayout from './routes/Root.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Books />,
      },
      {
        path: '/books/:id',
        element: <BookDetails />,
      },
      {
        path: '/reading-list',
        element: <ReadingList />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
