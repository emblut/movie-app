import './App.css';
import { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';

import LandingPage from './pages/LandingPage/LandingPage';
import SearchPage from './pages/SearchPage/SearchPage';
import WatchlistPage from './pages/WatchlistPage/WatchlistPage';
import DetailedCardPage from './pages/DetailedCardPage/DetailedCardPage';

function App() {
  const [favorites, setFavorites] = useState([]);
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <LandingPage
              favorites={favorites}
              setFavorites={setFavorites}
            />
          ),
        },
        {
          path: '/search/:searchedMovie',
          element: (
            <SearchPage
              favorites={favorites}
              setFavorites={setFavorites}
            />
          ),
        },
        {
          path: '/search',
          element: (
            <SearchPage
              favorites={favorites}
              setFavorites={setFavorites}
            />
          ),
        },
        {
          path: '/watchlist',
          element: (
            <WatchlistPage
              favorites={favorites}
              setFavorites={setFavorites}
            />
          ),
        },
        {
          path: '/details/:id',
          element: (
            <DetailedCardPage
              favorites={favorites}
              setFavorites={setFavorites}
            />
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
