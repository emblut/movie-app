import CardSection from '../../components/CardSection/CardSection';
import { useState } from 'react';

function WatchlistPage({ favorites, setFavorites }) {
  const [watchlistMovies, setWatchlistMovies] = useState([]);

  const headingText = 'Watchlist';

  return (
    <>
      <CardSection
        headingText={headingText}
        movies={watchlistMovies}
        favorites={favorites}
        setFavorites={setFavorites}
      />
    </>
  );
}

export default WatchlistPage;
