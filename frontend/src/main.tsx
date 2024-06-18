import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import theme from './theme.ts';
import './index.css';
import Books from './routes/Books.tsx';
import ReadingList from './routes/ReadingList.tsx';
import RootLayout from './routes/Root.tsx';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

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
        path: '/reading-list',
        element: <ReadingList />,
      },
    ],
  },
]);

export const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
  
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ApolloProvider client={client}>
        <RouterProvider router={router} />
      </ApolloProvider>
    </ThemeProvider>
  </React.StrictMode>
);
