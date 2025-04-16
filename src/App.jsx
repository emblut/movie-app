import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import Layout from './components/Layout/Layout';
import LandingPage from './pages/LandingPage/LandingPage';
import SearchPage from './pages/SearchPage/SearchPage';
import WatchlistPage from './pages/WatchlistPage/WatchlistPage';
import DetailedCardPage from './pages/DetailedCardPage/DetailedCardPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <LandingPage /> },
        { path: '/search/:searchedMovie', element: <SearchPage /> },
        { path: '/search', element: <SearchPage /> },
        { path: '/watchlist', element: <WatchlistPage /> },
        { path: '/details/:id', element: <DetailedCardPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
